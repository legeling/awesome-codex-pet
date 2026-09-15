const fs = require("fs"),
  path = require("path"),
  os = require("os"),
  assert = require("assert/strict"),
  { EventEmitter } = require("events");
const root = fs.mkdtempSync(path.join(os.tmpdir(), "rem-drag-"));
process.env.XDG_RUNTIME_DIR = root;
process.env.XDG_SESSION_TYPE = "wayland";
fs.mkdirSync(path.join(root, "codex-rem-bridge"));
fs.copyFileSync(
  path.join(__dirname, "bridge.cjs"),
  path.join(root, "bridge.cjs"),
);
const s = {
  time: Date.now(),
  cursor: { x: 3000, y: 500 },
  window: {
    id: "pet",
    pid: process.pid,
    client: { x: 2600, y: -900, width: 772, height: 2849 },
  },
};
fs.writeFileSync(
  path.join(root, "codex-rem-bridge/state.json"),
  JSON.stringify(s),
);
const w = new EventEmitter();
w.getContentBounds = () => ({ x: 0, y: 0, width: 772, height: 2849 });
let resized = 0;
w.setContentBounds = () => resized++;
w.isDestroyed = () => false;
w.isVisible = () => true;
let started,
  moved,
  restored,
  thrown = 0,
  remembered = 0,
  looks = 0;
const owner = {
  layout: { mascot: { left: 300, top: 1100 } },
  getCurrentDisplay: () => ({
    id: 2,
    bounds: { x: 2560, y: 0, width: 2560, height: 1440 },
  }),
  setPetPointerProximity() {},
  sendComputerUseCursorLocationToRenderer() {
    looks++;
  },
  rememberMovedWindow() {
    remembered++;
  },
  positionWindow() {},
  restoreBoundsForDisplay: (v) => (restored = v),
  applyLayout() {},
  startDrag: (id, t, n) => {
    started = { t, n };
    owner.dragState = {};
  },
  moveDrag: (id, t) => (moved = t),
  endDrag: () => (owner.dragState = null),
  cancelMomentum() {},
  throwWithVelocity: () => thrown++,
};
require(path.join(root, "bridge.cjs")).bind(owner, w);
owner.startDrag(1, {
  pointerScreenX: 0,
  pointerScreenY: 0,
  pointerWindowX: 0,
  pointerWindowY: 0,
});
assert.equal(started.t.pointerScreenX, 3000);
assert.equal(started.t.pointerWindowX, 400);
assert.equal(started.n, true);
owner.sendComputerUseCursorLocationToRenderer(w);
assert.equal(looks, 0);
owner.moveDrag(1, { pointerScreenX: 50, pointerScreenY: 50 });
assert.equal(moved.pointerScreenX, 3000);
w.setContentBounds({ x: 2700, y: -800, width: 772, height: 2849 });
assert.equal(resized, 0);
owner.rememberMovedWindow(w);
assert.equal(remembered, 0);
owner.endDrag(1, {});
owner.sendComputerUseCursorLocationToRenderer(w);
assert.equal(looks, 1);
owner.throwWithVelocity(1, 10000, 10000);
assert.equal(thrown, 0);
const saved = JSON.parse(
  fs.readFileSync(path.join(root, "last-position.json")),
);
assert.equal(saved.x, 3000);
assert.equal(saved.y, 300);
owner.positionWindow(w);
assert.equal(restored.x, 3000);
assert.equal(restored.displayId, 2);
w.emit("closed");
fs.rmSync(root, { recursive: true });
console.log(
  "PASS: external-screen coordinates, local grab offset, no native handoff, no spurious resize/move, no fling, saved anchor restored",
);
