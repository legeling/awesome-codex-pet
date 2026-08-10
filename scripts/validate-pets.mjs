import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync, execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import { analyzePetDuplicates } from "./lib/pet-duplicates.mjs";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");
const collectionsPath = join(repoRoot, "collections.json");
const categoriesPath = join(repoRoot, "categories.json");
const installManifestPath = join(repoRoot, "install-manifest.json");
const requireGeneratedAssets = process.argv.includes(
  "--require-generated-assets",
);
const requireSiteAssets = process.argv.includes("--require-site-assets");

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*--[a-z0-9]+(?:-[a-z0-9]+)*$/;
const collectionSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const previewStates = ["idle", "waving", "running", "jumping", "review"];
const v2PreviewStates = ["look-000-157", "look-180-337"];
const maxSpritesheetBytesForPr = 5_000_000;
const spriteContracts = new Map([
  [1, { width: 1536, height: 1872 }],
  [2, { width: 1536, height: 2288 }],
]);
const requiredGeneratedPaths = [
  join(repoRoot, "README.md"),
  join(repoRoot, "docs", "zh-CN", "README.md"),
  join(repoRoot, "pets.json"),
  installManifestPath,
];
const errors = [];
const warnings = [];

function gitChangedPaths() {
  try {
    if (process.env.GITHUB_BASE_REF) {
      const output = execSync(
        `git diff --name-only --diff-filter=AMR origin/${process.env.GITHUB_BASE_REF}...HEAD`,
        {
          cwd: repoRoot,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        },
      );
      return new Set(output.split(/\r?\n/).filter(Boolean));
    }

    const tracked = execSync("git diff --name-only --diff-filter=AMR HEAD", {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const untracked = execSync("git ls-files --others --exclude-standard", {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return new Set(`${tracked}\n${untracked}`.split(/\r?\n/).filter(Boolean));
  } catch {
    return new Set();
  }
}

const changedPaths = requireGeneratedAssets ? new Set() : gitChangedPaths();
function gitAddedPaths() {
  if (requireGeneratedAssets) return new Set();
  try {
    const diffCommand = process.env.GITHUB_BASE_REF
      ? `git diff --name-only --diff-filter=A origin/${process.env.GITHUB_BASE_REF}...HEAD`
      : "git diff --name-only --diff-filter=A HEAD";
    const added = execSync(diffCommand, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const untracked = process.env.GITHUB_BASE_REF
      ? ""
      : execSync("git ls-files --others --exclude-standard", {
          cwd: repoRoot,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        });
    return new Set(`${added}\n${untracked}`.split(/\r?\n/).filter(Boolean));
  } catch {
    return new Set();
  }
}

const addedPaths = gitAddedPaths();
const changedSubmissionSlugs = new Set();
const changedAssetSlugs = new Set();
const newSubmissionSlugs = new Set();

for (const path of changedPaths) {
  const submissionMatch = path.match(/^pets\/([^/]+)\/submission\.json$/);
  if (submissionMatch) {
    changedSubmissionSlugs.add(submissionMatch[1]);
    if (addedPaths.has(path)) newSubmissionSlugs.add(submissionMatch[1]);
  }

  const assetMatch = path.match(/^pets\/([^/]+)\/spritesheet\.webp$/);
  if (assetMatch) changedAssetSlugs.add(assetMatch[1]);
}

function gitAssetFingerprints() {
  const fingerprints = new Map();
  try {
    const output = execSync("git ls-files --stage -- pets", {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    for (const line of output.split(/\r?\n/)) {
      const match = line.match(/^\d+\s+([0-9a-f]+)\s+\d+\t(.+)$/);
      if (match?.[2].endsWith("/spritesheet.webp")) {
        fingerprints.set(match[2], match[1]);
      }
    }

    for (const slug of changedAssetSlugs) {
      const relativePath = `pets/${slug}/spritesheet.webp`;
      const absolutePath = join(repoRoot, relativePath);
      if (!existsSync(absolutePath)) continue;
      const fingerprint = execFileSync(
        "git",
        ["hash-object", "--no-filters", relativePath],
        {
          cwd: repoRoot,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        },
      ).trim();
      fingerprints.set(relativePath, fingerprint);
    }
  } catch (error) {
    warnings.push(
      `exact spritesheet duplicate check is unavailable: ${error.message}`,
    );
  }
  return fingerprints;
}

const assetFingerprints = gitAssetFingerprints();

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${path}: ${error.message}`);
    return null;
  }
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const collectionCatalog = existsSync(collectionsPath)
  ? readJson(collectionsPath)
  : null;
const collectionBySlug = new Map();
const collectionMembers = new Map();
const categoryCatalog = existsSync(categoriesPath)
  ? readJson(categoriesPath)
  : null;
const allowedCategoryNames = new Set();
const petRecords = [];

if (!categoryCatalog) {
  errors.push("missing categories.json");
} else if (!Array.isArray(categoryCatalog)) {
  errors.push("categories.json: root value must be an array");
} else {
  const categorySlugs = new Set();
  for (const category of categoryCatalog) {
    if (!category?.name || !category?.slug) {
      errors.push("categories.json: every category needs a name and slug");
      continue;
    }
    if (allowedCategoryNames.has(category.name)) {
      errors.push(`categories.json: duplicate category name ${category.name}`);
    }
    if (categorySlugs.has(category.slug)) {
      errors.push(`categories.json: duplicate category slug ${category.slug}`);
    }
    if (!category.label?.en || !category.label?.zh) {
      errors.push(`${category.name}: category label must include en and zh`);
    }
    if (!category.description?.en || !category.description?.zh) {
      errors.push(
        `${category.name}: category description must include en and zh`,
      );
    }
    allowedCategoryNames.add(category.name);
    categorySlugs.add(category.slug);
  }
}

if (!collectionCatalog) {
  errors.push("missing collections.json");
} else if (!Array.isArray(collectionCatalog)) {
  errors.push("collections.json: root value must be an array");
} else {
  for (const collection of collectionCatalog) {
    const slug = collection?.slug;
    if (typeof slug !== "string" || !collectionSlugPattern.test(slug)) {
      errors.push("collections.json: every collection needs a kebab-case slug");
      continue;
    }
    if (collectionBySlug.has(slug)) {
      errors.push(`collections.json: duplicate collection slug ${slug}`);
      continue;
    }
    if (!collection.title?.en || !collection.title?.zh) {
      errors.push(`${slug}: collection title must include en and zh`);
    }
    if (!new Set(["franchise", "theme"]).has(collection.kind)) {
      errors.push(`${slug}: collection kind must be franchise or theme`);
    }
    if (!collection.description?.en || !collection.description?.zh) {
      errors.push(`${slug}: collection description must include en and zh`);
    }
    if (
      collection.featured !== undefined &&
      typeof collection.featured !== "boolean"
    ) {
      errors.push(`${slug}: collection featured must be a boolean`);
    }
    if (!Array.isArray(collection.cover_pets)) {
      errors.push(`${slug}: collection cover_pets must be an array`);
    }
    collectionBySlug.set(slug, collection);
    collectionMembers.set(slug, new Set());
  }
}

function readUInt24LE(buffer, offset) {
  return (
    buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16)
  );
}

function readWebpDimensions(path) {
  const buffer = readFileSync(path);
  if (
    buffer.length < 20 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    throw new Error("spritesheet.webp is not a valid WebP container");
  }

  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;
    const dataEnd = dataOffset + chunkSize;
    if (dataEnd > buffer.length) {
      throw new Error(`invalid ${chunkType} chunk length`);
    }

    if (chunkType === "VP8X" && chunkSize >= 10) {
      return {
        width: readUInt24LE(buffer, dataOffset + 4) + 1,
        height: readUInt24LE(buffer, dataOffset + 7) + 1,
      };
    }

    if (chunkType === "VP8L" && chunkSize >= 5 && buffer[dataOffset] === 0x2f) {
      const b1 = buffer[dataOffset + 1];
      const b2 = buffer[dataOffset + 2];
      const b3 = buffer[dataOffset + 3];
      const b4 = buffer[dataOffset + 4];
      return {
        width: 1 + b1 + ((b2 & 0x3f) << 8),
        height: 1 + (b2 >> 6) + (b3 << 2) + ((b4 & 0x0f) << 10),
      };
    }

    if (
      chunkType === "VP8 " &&
      chunkSize >= 10 &&
      buffer[dataOffset + 3] === 0x9d &&
      buffer[dataOffset + 4] === 0x01 &&
      buffer[dataOffset + 5] === 0x2a
    ) {
      return {
        width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff,
      };
    }

    offset = dataEnd + (chunkSize % 2);
  }

  throw new Error("spritesheet.webp has no supported VP8 image chunk");
}

const petEntries = readdirSync(petsDir).filter((entry) => {
  if (entry.startsWith(".")) return false;
  return statSync(join(petsDir, entry)).isDirectory();
});
const petSlugs = new Set(petEntries);

for (const entry of petEntries) {
  const petDir = join(petsDir, entry);

  if (!slugPattern.test(entry)) {
    errors.push(`${entry}: folder name must use <pet-slug>--<author-slug>`);
  }

  const submissionPath = join(petDir, "submission.json");
  const petJsonPath = join(petDir, "pet.json");
  const spritesheetPath = join(petDir, "spritesheet.webp");
  const allowedEntries = new Set([
    "submission.json",
    "pet.json",
    "spritesheet.webp",
  ]);
  const localOnlyEntries = new Set(["qa"]);

  for (const child of readdirSync(petDir)) {
    if (child.startsWith(".")) continue;
    if (localOnlyEntries.has(child)) continue;
    if (!allowedEntries.has(child)) {
      errors.push(`${entry}: unexpected pet package file ${child}`);
    }
  }

  for (const requiredPath of [submissionPath, petJsonPath, spritesheetPath]) {
    if (!existsSync(requiredPath)) {
      errors.push(
        `${entry}: missing ${requiredPath.replace(`${petDir}/`, "")}`,
      );
    }
  }

  if (
    existsSync(spritesheetPath) &&
    !requireGeneratedAssets &&
    changedPaths.has(`pets/${entry}/spritesheet.webp`)
  ) {
    const spritesheetSize = statSync(spritesheetPath).size;
    if (spritesheetSize > maxSpritesheetBytesForPr) {
      errors.push(
        `${entry}: spritesheet.webp is ${spritesheetSize} bytes, exceeds PR budget of ${maxSpritesheetBytesForPr} bytes`,
      );
    }
  }

  const submission = existsSync(submissionPath)
    ? readJson(submissionPath)
    : null;
  const pet = existsSync(petJsonPath) ? readJson(petJsonPath) : null;

  if (submission) {
    petRecords.push({
      slug: entry,
      submission,
      assetFingerprint: assetFingerprints.get(`pets/${entry}/spritesheet.webp`),
    });

    if (submission.slug !== entry) {
      errors.push(`${entry}: submission.json slug must match folder name`);
    }

    for (const key of [
      "pet_slug",
      "author_slug",
      "name",
      "author",
      "primary_category",
      "license",
    ]) {
      if (!submission[key]) {
        errors.push(`${entry}: submission.json missing ${key}`);
      }
    }

    if (submission.localized_names !== undefined) {
      const localizedNames = submission.localized_names;
      if (
        !localizedNames ||
        Array.isArray(localizedNames) ||
        typeof localizedNames !== "object"
      ) {
        errors.push(
          `${entry}: submission.json localized_names must be an object`,
        );
      } else if (
        typeof localizedNames.en !== "string" ||
        !localizedNames.en.trim() ||
        typeof localizedNames.zh !== "string" ||
        !localizedNames.zh.trim()
      ) {
        errors.push(
          `${entry}: bilingual localized_names must include non-empty en and zh names`,
        );
      }
    }

    if (
      submission.primary_category &&
      !allowedCategoryNames.has(submission.primary_category)
    ) {
      errors.push(
        `${entry}: unknown primary category ${submission.primary_category}`,
      );
    }

    if (
      Array.isArray(submission.tags) &&
      submission.tags.includes("community-request") &&
      !/^https:\/\/github\.com\/legeling\/awesome-codex-pet\/issues\/[1-9]\d*\/?$/.test(
        submission.source_url ?? "",
      )
    ) {
      errors.push(
        `${entry}: community-request submissions must link their request Issue in submission.json source_url`,
      );
    }

    if (
      submission.collections !== undefined &&
      !Array.isArray(submission.collections)
    ) {
      errors.push(`${entry}: submission.json collections must be an array`);
    } else {
      const memberships = submission.collections ?? [];
      if (new Set(memberships).size !== memberships.length) {
        errors.push(
          `${entry}: submission.json collections contains duplicates`,
        );
      }
      for (const collectionSlug of memberships) {
        if (!collectionBySlug.has(collectionSlug)) {
          errors.push(`${entry}: unknown collection ${collectionSlug}`);
          continue;
        }
        const collection = collectionBySlug.get(collectionSlug);
        if (
          collection.kind === "franchise" &&
          (!Array.isArray(submission.tags) ||
            !submission.tags.includes(collectionSlug))
        ) {
          errors.push(
            `${entry}: franchise collection ${collectionSlug} must also appear in submission.json tags`,
          );
        }
        collectionMembers.get(collectionSlug).add(entry);
      }
    }
  }

  if (pet) {
    if (pet.id !== entry) {
      errors.push(`${entry}: pet.json id must match folder name`);
    }

    if (pet.spritesheetPath !== "spritesheet.webp") {
      errors.push(
        `${entry}: pet.json spritesheetPath should be spritesheet.webp`,
      );
    }

    const spriteVersionNumber = pet.spriteVersionNumber ?? 1;
    const contract = spriteContracts.get(spriteVersionNumber);
    if (!contract) {
      errors.push(
        `${entry}: pet.json spriteVersionNumber must be 1, 2, or omitted for v1`,
      );
    } else if (existsSync(spritesheetPath)) {
      try {
        const dimensions = readWebpDimensions(spritesheetPath);
        if (
          dimensions.width !== contract.width ||
          dimensions.height !== contract.height
        ) {
          errors.push(
            `${entry}: v${spriteVersionNumber} spritesheet.webp must be ${contract.width}x${contract.height}, got ${dimensions.width}x${dimensions.height}`,
          );
        }
      } catch (error) {
        errors.push(`${entry}: ${error.message}`);
      }
    }
  }
}

const installManifest = existsSync(installManifestPath)
  ? readJson(installManifestPath)
  : null;
if (installManifest) {
  if (installManifest.schemaVersion !== 1) {
    errors.push("install-manifest.json: schemaVersion must be 1");
  }
  if (!installManifest.ref || !installManifest.repository) {
    errors.push("install-manifest.json: repository and ref are required");
  }
  if (
    !installManifest.pets ||
    typeof installManifest.pets !== "object" ||
    Array.isArray(installManifest.pets)
  ) {
    errors.push("install-manifest.json: pets must be an object");
  } else {
    const manifestSlugs = new Set(Object.keys(installManifest.pets));
    for (const entry of petEntries) {
      const record = installManifest.pets[entry];
      if (!record) {
        errors.push(`${entry}: missing install manifest record`);
        continue;
      }

      for (const [field, pattern] of [
        ["petJsonSha256", /^[a-f0-9]{64}$/],
        ["spritesheetSha256", /^[a-f0-9]{64}$/],
      ]) {
        if (!pattern.test(record[field] || "")) {
          errors.push(
            `${entry}: install manifest ${field} must be a SHA-256 digest`,
          );
        }
      }

      const petJsonPath = join(petsDir, entry, "pet.json");
      const spritesheetPath = join(petsDir, entry, "spritesheet.webp");
      const petJsonBytes = Number(record.petJsonBytes);
      const spritesheetBytes = Number(record.spritesheetBytes);
      if (
        !existsSync(petJsonPath) ||
        !Number.isSafeInteger(petJsonBytes) ||
        petJsonBytes !== statSync(petJsonPath).size
      ) {
        errors.push(`${entry}: install manifest pet.json size is stale`);
      }
      if (
        !existsSync(spritesheetPath) ||
        !Number.isSafeInteger(spritesheetBytes) ||
        spritesheetBytes !== statSync(spritesheetPath).size
      ) {
        errors.push(`${entry}: install manifest spritesheet size is stale`);
      }

      const shouldVerifyHash =
        requireGeneratedAssets ||
        changedPaths.has(`pets/${entry}/pet.json`) ||
        changedPaths.has(`pets/${entry}/spritesheet.webp`) ||
        changedPaths.has("install-manifest.json");
      if (
        shouldVerifyHash &&
        existsSync(petJsonPath) &&
        existsSync(spritesheetPath)
      ) {
        if (sha256File(petJsonPath) !== record.petJsonSha256) {
          errors.push(`${entry}: install manifest pet.json hash is stale`);
        }
        if (sha256File(spritesheetPath) !== record.spritesheetSha256) {
          errors.push(`${entry}: install manifest spritesheet hash is stale`);
        }
      }
    }
    for (const slug of manifestSlugs) {
      if (!petSlugs.has(slug)) {
        errors.push(`install-manifest.json: unknown pet ${slug}`);
      }
    }
  }
}

const duplicateReview = analyzePetDuplicates(petRecords, {
  changedSubmissionSlugs,
  changedAssetSlugs,
  newSubmissionSlugs,
  collectionKinds: new Map(
    [...collectionBySlug].map(([slug, collection]) => [slug, collection.kind]),
  ),
});
errors.push(...duplicateReview.errors);
warnings.push(...duplicateReview.warnings);

for (const [slug, collection] of collectionBySlug) {
  if (!Array.isArray(collection.cover_pets)) continue;
  for (const petSlug of collection.cover_pets) {
    if (!petSlugs.has(petSlug)) {
      errors.push(`${slug}: cover pet ${petSlug} does not exist`);
    } else if (!collectionMembers.get(slug).has(petSlug)) {
      errors.push(
        `${slug}: cover pet ${petSlug} does not declare this collection`,
      );
    }
  }
}

for (const generatedPath of requiredGeneratedPaths) {
  if (!existsSync(generatedPath)) {
    errors.push(
      `missing generated repository file ${generatedPath.replace(`${repoRoot}/`, "")}`,
    );
  }
}

if (requireGeneratedAssets || requireSiteAssets) {
  for (const entry of readdirSync(petsDir)) {
    if (entry.startsWith(".")) continue;

    const petDir = join(petsDir, entry);
    if (!statSync(petDir).isDirectory()) continue;

    const pet = readJson(join(petDir, "pet.json"));
    const requiredPreviewStates = [
      ...previewStates,
      ...(pet?.spriteVersionNumber === 2 ? v2PreviewStates : []),
    ];

    for (const state of requiredPreviewStates) {
      const previewPath = join(
        repoRoot,
        "assets",
        "previews",
        entry,
        requireSiteAssets ? "webp" : "gifs",
        `${state}.${requireSiteAssets ? "webp" : "gif"}`,
      );
      if (!existsSync(previewPath)) {
        errors.push(
          `${entry}: missing generated preview ${previewPath.replace(`${repoRoot}/`, "")}`,
        );
      }
    }

    if (requireSiteAssets) {
      const thumbnailPath = join(
        repoRoot,
        "assets",
        "previews",
        entry,
        "thumbnail.webp",
      );
      if (!existsSync(thumbnailPath)) {
        errors.push(
          `${entry}: missing generated preview ${thumbnailPath.replace(`${repoRoot}/`, "")}`,
        );
      }
    }
  }
}

for (const warning of warnings) {
  if (process.env.GITHUB_ACTIONS) {
    const escaped = warning
      .replaceAll("%", "%25")
      .replaceAll("\r", "%0D")
      .replaceAll("\n", "%0A");
    console.warn(`::warning title=Pet duplicate review::${escaped}`);
  } else {
    console.warn(`Warning: ${warning}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("All pet folders are valid.");
