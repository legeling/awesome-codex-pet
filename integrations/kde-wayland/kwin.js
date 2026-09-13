// Rem Wayland integration. Only the identified non-resizable pet surface is touched.
var service = "local.CodexRemBridge",
  pet = null,
  busy = false,
  dirty = false;
function send() {
  if (busy) {
    dirty = true;
    return;
  }
  busy = true;
  var p = workspace.cursorPos,
    w = pet;
  var value = {
    cursor: { x: p.x, y: p.y },
    window: w
      ? {
          id: String(w.internalId),
          pid: w.pid,
          client: w.clientGeometry,
          frame: w.frameGeometry,
        }
      : null,
  };
  callDBus(
    service,
    "/Bridge",
    service,
    "Update",
    JSON.stringify(value),
    function () {
      busy = false;
      if (dirty) {
        dirty = false;
        send();
      }
    },
  );
}
function next() {
  callDBus(service, "/Bridge", service, "Next", function (raw) {
    send();
    try {
      var v = JSON.parse(raw),
        w = pet;
      if (w && String(w.internalId) === v.id && w.pid === v.pid) {
        var f = w.frameGeometry,
          c = w.clientGeometry;
        w.frameGeometry = {
          x: v.x - (c.x - f.x),
          y: v.y - (c.y - f.y),
          width: f.width,
          height: f.height,
        };
        send();
      }
    } catch (e) {
      print("REM_BRIDGE_ERROR " + e);
    }
    next();
  });
}
function isPet(w) {
  var g = w.frameGeometry;
  return (
    /^chatgpt$/i.test(String(w.resourceClass)) &&
    /^(ChatGPT)?$/.test(String(w.caption)) &&
    w.resizeable === false &&
    w.maximizable === false &&
    g.width >= 600 &&
    g.width <= 1000 &&
    g.height > g.width * 2
  );
}
function watch(w) {
  var matched = false,
    applying = false;
  function apply() {
    if (applying) return;
    if (!matched) {
      if (!isPet(w)) return;
      matched = true;
      print("REM_BRIDGE_MATCH " + String(w.internalId));
    }
    if (w.resizeable) return;
    applying = true;
    try {
      w.keepAbove = true;
      w.skipTaskbar = true;
      w.skipSwitcher = true;
      pet = w;
    } finally {
      applying = false;
    }
    send();
  }
  [
    "frameGeometryChanged",
    "captionChanged",
    "windowClassChanged",
    "keepAboveChanged",
    "skipTaskbarChanged",
    "skipSwitcherChanged",
    "hiddenChanged",
  ].forEach(function (n) {
    if (w[n] && w[n].connect) w[n].connect(apply);
  });
  apply();
}
workspace.windowList().forEach(watch);
workspace.windowAdded.connect(watch);
workspace.windowRemoved.connect(function (w) {
  if (w === pet) {
    pet = null;
    send();
  }
});
workspace.cursorPosChanged.connect(send);
send();
next();
