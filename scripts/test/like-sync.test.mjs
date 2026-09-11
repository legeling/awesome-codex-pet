import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(
  new URL("../../web/package.json", import.meta.url),
);
const ts = require("typescript");
const source = readFileSync(
  new URL("../../web/lib/stats.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
});

test("confirmed likes survive a late static snapshot and notify other buttons", async () => {
  const previousWindow = globalThis.window;
  const previousFetch = globalThis.fetch;
  const target = new EventTarget();
  const receipts = new Map();
  globalThis.window = Object.assign(target, {
    setTimeout,
    clearTimeout,
    localStorage: {
      getItem: (key) => receipts.get(key),
      setItem: (key, value) => receipts.set(key, value),
    },
  });
  let finishSnapshot;
  let counted = true;
  globalThis.fetch = async (url) => {
    if (url === "/stats.json")
      return new Promise((resolve) => {
        finishSnapshot = resolve;
      });
    return Response.json({
      slug: "sample--author",
      likes: 18,
      liked: true,
      counted,
    });
  };
  try {
    const stats = await import(
      `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
    );
    let notifications = 0;
    target.addEventListener(stats.PET_LIKE_CHANGED, () => {
      notifications++;
      assert.equal(stats.getConfirmedLike("sample--author").likes, 18);
    });
    const snapshot = stats.fetchStats();
    const result = await stats.likePet("sample--author");
    assert.equal(result.counted, true);
    finishSnapshot(
      Response.json({ pets: { "sample--author": { likes: 10 } } }),
    );
    await snapshot;
    assert.equal(stats.getConfirmedLike("sample--author").likes, 18);
    assert.equal(stats.hasLikedPet("sample--author"), true);
    counted = false;
    assert.equal((await stats.likePet("sample--author")).counted, false);
    assert.equal(notifications, 2);
    globalThis.fetch = async () => new Response("failed", { status: 500 });
    await assert.rejects(stats.likePet("sample--author"));
    assert.equal(stats.getConfirmedLike("sample--author").likes, 18);
    assert.equal(notifications, 2);
  } finally {
    globalThis.window = previousWindow;
    globalThis.fetch = previousFetch;
  }
});
