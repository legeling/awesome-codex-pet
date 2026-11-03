import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import test from "node:test";

// Exercise the production TypeScript modules using Node 24's type stripping,
// resolving the same alias that Next.js uses, without copying their logic.
const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(
        new URL(`../../web/${specifier.slice(2)}.ts`, import.meta.url).href,
        context,
      );
    }
    return nextResolve(specifier, context);
  },
});
let seoModule;
let tagModule;
try {
  seoModule = await import("../../web/lib/seo-keywords.ts");
  tagModule = await import("../../web/lib/tag-localization.ts");
} finally {
  hooks.deregister();
}
const { buildSeoKeywords } = seoModule;
const { getLocalizedTagLabel } = tagModule;

test("splits comma-containing names using the HTML keyword semantics", () => {
  assert.deepEqual(
    buildSeoKeywords(["Doraemon: 16 Directions, One Mouse to Avoid"]),
    ["Doraemon: 16 Directions", "One Mouse to Avoid"],
  );
});

test("ignores empty fragments and deduplicates normalized terms in order", () => {
  assert.deepEqual(
    buildSeoKeywords([null, undefined, " , Cat, CAT, ", "Ｃａｔ", "狗"]),
    ["Cat", "狗"],
  );
});

test("counts comma fragments before applying the 64-term limit", () => {
  const prefix = Array.from({ length: 63 }, (_, index) => `term-${index}`);
  const result = buildSeoKeywords(prefix, ["first, second", "third"]);
  assert.equal(result.length, 64);
  assert.equal(result.at(-1), "first");
  assert.equal(new Set(result.join(",").split(",")).size, 64);
});

test("preserves ordinary keyword spelling and stable priority", () => {
  assert.deepEqual(buildSeoKeywords([" Cat ", "狗"], ["cat", "Fox"]), [
    "Cat",
    "狗",
    "Fox",
  ]);
});

test("localizes the teddy bear costume without changing English fallback", () => {
  assert.equal(
    getLocalizedTagLabel("teddy-bear-costume", "zh"),
    "泰迪熊连体衣",
  );
  assert.equal(
    getLocalizedTagLabel("teddy-bear-costume", "en"),
    "Teddy Bear Costume",
  );
});
