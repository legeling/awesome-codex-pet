#!/usr/bin/env node

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, join } from "node:path";
import { homedir } from "node:os";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");

function usage() {
  console.log(`Usage:
  npm run install:pet -- <pet-slug--author-slug>
  npx awesome-codex-pet <pet-slug--author-slug>

Options:
  --codex-home <path>  Install into a custom Codex home directory
  --list               List available pets

Environment:
  CODEX_HOME           Defaults to ~/.codex when unset`);
}

function listPets() {
  const pets = readdirSync(petsDir)
    .filter((entry) => !entry.startsWith("."))
    .filter((entry) => statSync(join(petsDir, entry)).isDirectory())
    .sort();

  if (pets.length === 0) {
    console.log("No pets found.");
    return;
  }

  for (const pet of pets) {
    const metadataPath = join(petsDir, pet, "submission.json");
    if (!existsSync(metadataPath)) {
      console.log(pet);
      continue;
    }

    const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
    console.log(`${pet} - ${metadata.name ?? pet}`);
  }
}

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  usage();
  process.exit(args.length === 0 ? 1 : 0);
}

if (args.includes("--list")) {
  listPets();
  process.exit(0);
}

let codexHome = process.env.CODEX_HOME || join(homedir(), ".codex");
const codexHomeIndex = args.indexOf("--codex-home");
if (codexHomeIndex !== -1) {
  codexHome = args[codexHomeIndex + 1];
  args.splice(codexHomeIndex, 2);
}

const petSlug = args[0];
const petDir = join(petsDir, petSlug);
const petJsonPath = join(petDir, "pet.json");
const spritesheetPath = join(petDir, "spritesheet.webp");

if (!petSlug) {
  usage();
  process.exit(1);
}

if (!existsSync(petDir)) {
  console.error(`Pet not found: ${petSlug}`);
  console.error("Run with --list to see available pets.");
  process.exit(1);
}

for (const requiredPath of [petJsonPath, spritesheetPath]) {
  if (!existsSync(requiredPath)) {
    console.error(`Missing required file: ${requiredPath}`);
    process.exit(1);
  }
}

const pet = JSON.parse(readFileSync(petJsonPath, "utf8"));
const installId = pet.id || basename(petDir);
const targetDir = join(codexHome, "pets", installId);

mkdirSync(targetDir, { recursive: true });
copyFileSync(petJsonPath, join(targetDir, "pet.json"));
copyFileSync(spritesheetPath, join(targetDir, "spritesheet.webp"));

console.log(`Installed ${installId} to ${targetDir}`);
