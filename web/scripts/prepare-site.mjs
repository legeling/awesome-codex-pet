import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repoRoot = join(webRoot, "..");
const dataDir = join(webRoot, ".generated");
const publicAssetsDir = join(webRoot, "public", "assets");
const previewActions = ["idle", "waving", "running", "waiting", "review"];

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(repoRoot, relativePath), "utf8"));
}

function toWebPath(relativePath) {
  return `/${relativePath.replace(/^(\.\.\/)+/, "").replace(/^\/+/, "")}`;
}

const pets = readJson("pets.json").map((pet) => {
  const submission = readJson(`pets/${pet.slug}/submission.json`);
  const runtime = readJson(`pets/${pet.slug}/pet.json`);

  return {
    ...pet,
    displayName: runtime.displayName ?? "",
    runtimeDescription: runtime.description ?? "",
    slugLabel: submission.slug,
    tags: submission.tags ?? [],
    sourceType: submission.source_type ?? "unknown",
    sourceUrl: submission.source_url ?? "",
    previewImage: submission.preview_image ? toWebPath(submission.preview_image) : `/assets/previews/${pet.slug}/gifs/idle.gif`,
    contactSheet: submission.preview_assets?.contact_sheet
      ? toWebPath(submission.preview_assets.contact_sheet)
      : `/assets/previews/${pet.slug}/contact-sheet.png`,
    gifs: Object.fromEntries(previewActions.map((action) => [action, `/assets/previews/${pet.slug}/gifs/${action}.gif`])),
    installCommand: `curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ${pet.slug}`,
    installCommandPowerShell:
      `powershell -NoProfile -ExecutionPolicy Bypass -Command \"iwr -UseB https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet ${pet.slug}\"`,
    repositoryPath: `https://github.com/legeling/awesome-codex-pet/tree/main/pets/${pet.slug}`,
  };
});

mkdirSync(dataDir, { recursive: true });
writeFileSync(join(dataDir, "pets.generated.json"), `${JSON.stringify(pets, null, 2)}\n`, "utf8");

rmSync(publicAssetsDir, { recursive: true, force: true });
mkdirSync(publicAssetsDir, { recursive: true });

const previewsSrc = join(repoRoot, "assets", "previews");
if (existsSync(previewsSrc)) {
  cpSync(previewsSrc, join(publicAssetsDir, "previews"), {
    recursive: true,
    filter: (src) => !src.endsWith(".DS_Store"),
  });
}

console.log(`Prepared web data for ${pets.length} pet(s).`);
