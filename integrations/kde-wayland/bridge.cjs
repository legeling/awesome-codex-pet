"use strict";
const fs = require("node:fs"),
  path = require("node:path");
const dir = path.join(
  process.env.XDG_RUNTIME_DIR || `/run/user/${process.getuid()}`,
  "codex-rem-bridge",
);
function read() {
  try {
    const s = JSON.parse(fs.readFileSync(path.join(dir, "state.json"), "utf8"));
    return Date.now() - s.time < 2000 ? s : null;
  } catch {
    return null;
  }
}
exports.bind = function (owner, w) {
  if (
    process.platform !== "linux" ||
    process.env.XDG_SESSION_TYPE !== "wayland"
  )
    return;
  const originalGet = w.getContentBounds.bind(w),
    originalSet = w.setContentBounds.bind(w);
  let pending = null,
    desired = null,
    lastSet = 0,
    seq = 0,
    lastPoint = "",
    lastNear = 0,
    lastWindow = null,
    saveTimer = null;
  function state() {
    const s = read();
    return s && s.window && s.window.pid === process.pid ? s : null;
  }
  function request(t) {
    desired = { ...t };
    lastSet = Date.now();
    const s = state();
    if (!s) return;
    try {
      const v = {
        ...t,
        id: s.window.id,
        pid: process.pid,
        time: Date.now(),
        seq: ++seq,
      };
      const file = path.join(dir, "request.json");
      fs.writeFileSync(file + ".tmp", JSON.stringify(v), { mode: 0o600 });
      fs.renameSync(file + ".tmp", file);
      pending = { ...v };
    } catch {}
  }
  w.getContentBounds = () => {
    const base = originalGet(),
      s = state();
    if (!s) return desired ? { ...base, x: desired.x, y: desired.y } : base;
    if (
      pending &&
      Date.now() - pending.time < 250 &&
      Math.abs(s.window.client.x - pending.x) +
        Math.abs(s.window.client.y - pending.y) >
        2
    )
      return { ...base, x: pending.x, y: pending.y };
    return { ...base, x: s.window.client.x, y: s.window.client.y };
  };
  w.__remProgrammaticMove = () => Date.now() - lastSet < 350;
  w.setContentBounds = (t, ...args) => {
    request(t);
    const b = originalGet();
    // Wayland resizing must not re-apply the fictitious origin from Electron.
    if (b.width !== t.width || b.height !== t.height)
      originalSet({ ...b, width: t.width, height: t.height }, ...args);
  };
  const positionFile = path.join(__dirname, "last-position.json");
  function savePosition() {
    if (
      w.isDestroyed() ||
      !w.isVisible() ||
      owner.isQuickChatPresentation ||
      !owner.layout
    )
      return;
    const s = state();
    if (!s) return;
    const c = w.getContentBounds(),
      m = owner.layout.mascot,
      d = owner.getCurrentDisplay();
    const value = {
      x: c.x + m.left,
      y: c.y + m.top,
      displayBounds: d.bounds,
      displayId: d.id,
      placement: owner.placement,
      isFreelyPositioned: true,
    };
    try {
      fs.writeFileSync(positionFile + ".tmp", JSON.stringify(value), {
        mode: 0o600,
      });
      fs.renameSync(positionFile + ".tmp", positionFile);
    } catch {}
  }
  function laterSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(savePosition, 450);
  }
  const remember = owner.rememberMovedWindow.bind(owner);
  // Electron's Wayland move events do not contain the compositor's position.
  owner.rememberMovedWindow = () => {};
  const position = owner.positionWindow.bind(owner);
  owner.positionWindow = (...args) => {
    position(...args);
    try {
      const saved = JSON.parse(fs.readFileSync(positionFile, "utf8")),
        d = owner.getCurrentDisplay();
      if (
        saved.displayId === d.id ||
        JSON.stringify(saved.displayBounds) === JSON.stringify(d.bounds)
      ) {
        owner.restoreBoundsForDisplay(saved, d);
        owner.applyLayout(w, d);
      }
    } catch {}
  };
  // Freeze the last rendered look frame while the pet is being dragged.
  const sendLook = owner.sendComputerUseCursorLocationToRenderer.bind(owner);
  owner.sendComputerUseCursorLocationToRenderer = (...args) => {
    if (!owner.dragState && !owner.nativeWindowDragActive) sendLook(...args);
  };
  const start = owner.startDrag.bind(owner),
    move = owner.moveDrag.bind(owner),
    end = owner.endDrag.bind(owner),
    throwVelocity = owner.throwWithVelocity.bind(owner);
  function pointer(t) {
    const c = state()?.cursor;
    return c ? { ...t, pointerScreenX: c.x, pointerScreenY: c.y } : t;
  }
  owner.startDrag = (id, t, n) => {
    const c = state()?.cursor;
    if (!c) return start(id, t, n);
    const b = w.getContentBounds();
    start(
      id,
      { ...pointer(t), pointerWindowX: c.x - b.x, pointerWindowY: c.y - b.y },
      true,
    );
  };
  owner.moveDrag = (id, t) => move(id, pointer(t));
  owner.endDrag = (id, t, ...args) => {
    const active = !!owner.dragState;
    end(id, pointer(t), ...args);
    if (active) {
      owner.cancelMomentum();
      lastPoint = "";
      savePosition();
      laterSave();
    }
  };
  owner.throwWithVelocity = (...args) => {
    if (!state()) throwVelocity(...args);
  };
  const interval = setInterval(() => {
    if (w.isDestroyed()) return;
    const s = state();
    if (!s) {
      if (owner.__remPointer) {
        owner.__remPointer = null;
        owner.sendComputerUseCursorLocationToRenderer(w);
      }
      lastWindow = null;
      return;
    }
    const c = s.window.client;
    if (
      lastWindow &&
      (Math.abs(c.x - lastWindow.x) > 1 || Math.abs(c.y - lastWindow.y) > 1) &&
      !w.__remProgrammaticMove() &&
      owner.layoutMode === `native` &&
      owner.layout
    ) {
      if (owner.nativeWindowDragActive) owner.handleNativeWindowDragMove(w, c);
      else if (!owner.dragState && !owner.presentationMotionTarget) {
        remember(w, c);
        savePosition();
        laterSave();
      }
    }
    lastWindow = { x: c.x, y: c.y };
    // Retry initial layout after KWin recognizes the newly created surface.
    if (!pending && owner.layout?.windowBounds)
      request(desired ?? owner.layout.windowBounds);
    owner.__remPointer = s.cursor;
    if (owner.rendererReady && w.isVisible()) {
      const key = JSON.stringify([
        s.cursor,
        s.window.client.x,
        s.window.client.y,
      ]);
      if (key !== lastPoint) {
        lastPoint = key;
        owner.sendComputerUseCursorLocationToRenderer(w);
      }
    }
  }, 33);
  interval.unref();
  w.once("closed", () => {
    clearInterval(interval);
    clearTimeout(saveTimer);
  });
  owner.__remCursor = () => state()?.cursor;
  // Give the pointer time to cross the gap to the buttons.
  const setNear = owner.setPetPointerProximity.bind(owner);
  owner.setPetPointerProximity = (near) => {
    if (near) lastNear = Date.now();
    setNear(near || Date.now() - lastNear < 900);
  };
};
