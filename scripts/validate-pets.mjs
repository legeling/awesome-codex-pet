import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*--[a-z0-9]+(?:-[a-z0-9]+)*$/;
const previewStates = ["idle", "waving", "running", "jumping", "review"];
const errors = [];

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${path}: ${error.message}`);
    return null;
  }
}

for (const entry of readdirSync(petsDir)) {
  if (entry.startsWith(".")) continue;

  const petDir = join(petsDir, entry);
  if (!statSync(petDir).isDirectory()) continue;

  if (!slugPattern.test(entry)) {
    errors.push(`${entry}: folder name must use <pet-slug>--<author-slug>`);
  }

  const submissionPath = join(petDir, "submission.json");
  const petJsonPath = join(petDir, "pet.json");
  const spritesheetPath = join(petDir, "spritesheet.webp");
  const allowedEntries = new Set(["submission.json", "pet.json", "spritesheet.webp"]);

  for (const child of readdirSync(petDir)) {
    if (child.startsWith(".")) continue;
    if (!allowedEntries.has(child)) {
      errors.push(`${entry}: unexpected pet package file ${child}`);
    }
  }

  for (const requiredPath of [submissionPath, petJsonPath, spritesheetPath]) {
    if (!existsSync(requiredPath)) {
      errors.push(`${entry}: missing ${requiredPath.replace(`${petDir}/`, "")}`);
    }
  }

  const submission = existsSync(submissionPath) ? readJson(submissionPath) : null;
  const pet = existsSync(petJsonPath) ? readJson(petJsonPath) : null;

  if (submission) {
    if (submission.slug !== entry) {
      errors.push(`${entry}: submission.json slug must match folder name`);
    }

    for (const key of ["pet_slug", "author_slug", "name", "author", "primary_category", "license"]) {
      if (!submission[key]) {
        errors.push(`${entry}: submission.json missing ${key}`);
      }
    }
  }

  if (pet) {
    if (pet.id !== entry) {
      errors.push(`${entry}: pet.json id must match folder name`);
    }

    if (pet.spritesheetPath !== "spritesheet.webp") {
      errors.push(`${entry}: pet.json spritesheetPath should be spritesheet.webp`);
    }
  }

  for (const state of previewStates) {
    const previewPath = join(repoRoot, "assets", "previews", entry, "gifs", `${state}.gif`);
    if (!existsSync(previewPath)) {
      errors.push(`${entry}: missing generated preview ${previewPath.replace(`${repoRoot}/`, "")}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("All pet folders are valid.");
