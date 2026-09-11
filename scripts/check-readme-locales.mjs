import { existsSync, readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");
const petSlugs = readdirSync(petsDir).filter((entry) =>
  existsSync(join(petsDir, entry, "submission.json")),
);
const petCount = petSlugs.length;
const readmes = [
  "README.md",
  "docs/zh-CN/README.md",
  "docs/ko/README.md",
  "docs/ja/README.md",
  "docs/es/README.md",
];
const languageLabels = ["English", "简体中文", "한국어", "日本語", "Español"];
const localeCodes = ["en", "zh", "ko", "ja", "es"];
const failures = [];

for (const relativePath of readmes) {
  const path = join(repoRoot, relativePath);
  if (!existsSync(path)) {
    failures.push(`${relativePath}: missing generated README`);
    continue;
  }
  const content = readFileSync(path, "utf8");
  if (!content.includes(`![pets: ${petCount}]`)) {
    failures.push(`${relativePath}: pet badge is not ${petCount}`);
  }
  const catalogEntries = [
    ...content.matchAll(/<li><a href="(?:\.\/|\.\.\/\.\.\/)pets\/([^"/]+)">/g),
  ].map((match) => match[1]);
  const catalogSlugs = new Set(catalogEntries);
  if (
    catalogEntries.length !== petCount ||
    catalogSlugs.size !== petCount ||
    petSlugs.some((slug) => !catalogSlugs.has(slug))
  ) {
    failures.push(
      `${relativePath}: pet index must contain every pet exactly once`,
    );
  }
  const previews = [
    ...content.matchAll(/<img\b[^>]*src="([^"]*\/assets\/previews\/[^" ]+)"/g),
  ].map((match) => match[1]);
  if (
    previews.length > 12 ||
    (petCount > 0 && previews.length === 0) ||
    previews.some((url) => !url.endsWith("/thumbnail.webp"))
  ) {
    failures.push(
      `${relativePath}: use 1–12 static pet thumbnails, never animation previews`,
    );
  }
  for (const label of languageLabels) {
    if (!content.includes(label)) {
      failures.push(`${relativePath}: language navigation is missing ${label}`);
    }
  }
}

const collections = JSON.parse(
  readFileSync(join(repoRoot, "collections.json"), "utf8"),
);
for (const collection of collections) {
  for (const field of ["title", "description"]) {
    for (const locale of localeCodes) {
      if (!collection[field]?.[locale]?.trim()) {
        failures.push(
          `collections.json: ${collection.slug}.${field}.${locale} is missing`,
        );
      }
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Locale validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `Locale validation passed for ${readmes.length} languages, ${petCount} pets, and ${collections.length} collections.`,
);
