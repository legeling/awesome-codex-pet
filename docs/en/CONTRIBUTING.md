# Contributing

[简体中文](../zh-CN/CONTRIBUTING.md) | English

Thank you for contributing to Awesome Codex Pet.

This repository is curated, which means maintainers may edit titles, categories, ordering, preview placement, and wording for consistency.

## Before you submit

- Check whether a similar pet already exists
- Make sure the pet can actually be installed in Codex
- Make sure authorship and asset usage terms are clear

## Choose one contribution path

### Request a pet with Codex

Use this when you have a character, concept, or references but no finished pet. The website opens a localized task in the local Codex app, or lets you copy the same prompt for another AI assistant. The task checks `pets.json` and existing issues, gathers the missing details, and creates a structured `[Request]` issue. No repository clone is needed, and an issue is not an acceptance or delivery promise.

Appearance-specific requests, including real pets, original characters, and avatars, need a maintainer-viewable image attachment or public image URL. A private-chat image, local path, filename, or prose description is not an attachment.

### Create or submit your pet with Codex

Start from a character and references, continue an in-progress pet, or give Codex an existing pet folder or spritesheet. It follows [the repository submission skill](../../.agents/skills/submit-codex-pet), produces or repairs the pet, verifies duplicates, attribution, non-commercial terms, metadata, atlas dimensions, animation quality, and transparent edges, then creates a focused branch and pull request through the GitHub API. A full clone is not required. If Codex is not installed, copy the prompt from the website and use it with another capable AI assistant.

The workflow first recovers missing source notes, repairs existing pixels when they undermine visual quality, and retries GitHub authorization. A missing public source URL or formal license name is not a blocker when authorship and source notes are truthful and non-commercial usage terms are explicit. Only unresolved review materials, duplicate judgment, or GitHub authorization becomes a concise `[Submission]` issue, with the submitter's approval and reviewable attachments.

Completed submissions must be opened as ready-for-review pull requests. Use a draft only for knowingly unfinished work and list what remains.

When a pet fulfills an existing request, leave a claim or progress comment on that Issue, keep the request URL in `submission.json.source_url`, and put `Closes #<number>` in the pull request body. The repository workflow then writes the PR link back to the Issue, changes its label to `status: in-progress`, and closes it with `status: completed` only after the PR is merged. A maintainer's direct main-branch commit has the same completion fallback based on `source_url`, although a focused pull request remains preferred. Do not close the request manually while its implementation is still under review.

### Advanced pull request

Contributors who prefer direct GitHub work can use the web editor, Codespaces, or a blob-filtered sparse clone. Prepare one folder under `pets/<pet-slug>--<author-slug>/`, open one pull request per pet, and do not include generated README files, `pets.json`, or preview assets.

## What happens after you open the pull request

Opening a pull request starts visual curation; it does not mean the submitted image will be merged unchanged. Maintainers inspect the rendered contact sheet and animations frame by frame, including:

- character-facing and v2 look directions
- whether each action reads correctly and the running gait alternates naturally
- scale, baseline, identity, and animation continuity
- transparent edges on checkerboard, dark, and light backgrounds, including green, purple, cyan, magenta, or other chroma residue

Attach a contact sheet to the pull request description. Pull request CI also generates previews for changed pets and uploads them as a downloadable workflow artifact; these previews must not be committed to the pet directory.

When needed, maintainers may repair or replace individual frames, action rows, look directions, `spritesheet.webp`, or metadata before merge. Changes should preserve the submitted character and credit while bringing the pet up to the repository's runtime and visual-quality standard. Maintainers may ask the contributor to review a substantial visual change.

## Folder standard

Each pet submission should include:

- `submission.json` for repository metadata
- `pet.json` for Codex runtime metadata
- `spritesheet.webp` for installation

Do not put generated previews, QA output, references, or README files inside the pet folder. Generated previews belong under `assets/previews/<pet-id>/` as local or CI build output and are maintained after merge.

## Pet versions

| Version | Spritesheet                      | `pet.json`                                  |
| ------- | -------------------------------- | ------------------------------------------- |
| v1      | `1536x1872`, 8 columns × 9 rows  | omit `spriteVersionNumber` or set it to `1` |
| v2      | `1536x2288`, 8 columns × 11 rows | set `spriteVersionNumber: 2`                |

Rows 0–8 contain the standard animation states in both versions. v2 rows 9–10 contain 16 clockwise look directions. Do not label a 9-row atlas as v2 or append look rows without setting `spriteVersionNumber: 2`.

Example v2 runtime manifest:

```json
{
  "id": "mikoto--lingxiaotian",
  "displayName": "Mikoto",
  "description": "One short sentence.",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

## `submission.json` schema

Use this repository-level schema:

```json
{
  "slug": "mikoto--lingxiaotian",
  "pet_slug": "mikoto",
  "author_slug": "lingxiaotian",
  "name": "Mikoto",
  "localized_names": {
    "en": "Mikoto",
    "zh": "御坂美琴"
  },
  "author": "your-name-or-handle",
  "primary_category": "Anime Characters",
  "canonical_key": "fictional/example/mikoto",
  "variant_note": "An independent v2 interpretation with its own spritesheet.",
  "tags": ["anime", "electric", "schoolgirl"],
  "source_type": "fan-art",
  "source_url": "https://example.com/original-post",
  "license": "CC BY-NC 4.0, or a clear non-commercial-only usage statement",
  "preview_image": "../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif",
  "codex_install": {
    "pet_json": "pet.json",
    "spritesheet": "spritesheet.webp"
  }
}
```

`name` is always required and acts as the canonical fallback. Bilingual naming is optional. To enable it, add `localized_names` with both non-empty `en` and `zh` values; the website then follows the visitor's selected language. For a single-language pet, omit `localized_names` entirely. The creator chooses these names; the website does not machine-translate them.

`tags` use stable lowercase kebab-case identifiers so search and generated data do not change with the visitor's language. The website turns common identifiers into readable English or curated Chinese labels and indexes both forms. When introducing a reusable descriptive tag, add its Chinese display label to `web/lib/tag-localization.ts`; character names should continue to use creator-provided `localized_names` instead of an invented tag translation.

`canonical_key` is a grouping identity, not a globally unique package ID. Use the same key for every version of the same character, including versions made independently by different authors. Use an `original/<author>/<name>` key for a creator-owned character. Existing pets without this field remain valid and are indexed from their names, franchise collections, tags, and source metadata during review.

Different authors may submit independent interpretations of one character. When the key already exists, add `variant_note` to explain the author, visual, animation, or runtime distinction. The spritesheet must be independently produced: a byte-identical asset is rejected even when the folder or author changes. A second package by the same author should normally update the existing package; keep it separate only when it is a materially distinct edition.

`npm run validate:pr` requires the key for new submissions. A changed legacy entry without one produces a warning rather than blocking a repair, so the catalog does not need a bulk migration. Matching names or franchise metadata under different keys also produce a review warning rather than an automatic rejection.

A formal license name is optional. The `license` field may contain a recognized license or plain-language usage terms. When no formal license applies, state at minimum that the asset is for non-commercial use only. A public `source_url` is helpful but optional for original, AI-generated, or privately sourced work; describe the source honestly in `source_type`, `description`, or the usage note.

## Pull request checklist

- One pet per pull request
- Clear `pet-slug--author-slug` folder name and readable title
- Pet folder contains only `submission.json`, `pet.json`, and `spritesheet.webp`
- `pet.json` `id` matches the folder name
- `spriteVersionNumber` and spritesheet dimensions match the v1 or v2 contract
- v2 look directions have been reviewed as a complete 16-direction loop
- `submission.json` filled in
- `canonical_key` groups the character correctly; a later independent version includes `variant_note`
- Author and asset usage terms included; either a formal license or an explicit non-commercial-only statement is acceptable
- Contributor PR does not include `README.md`, `docs/zh-CN/README.md`, `pets.json`, `install-manifest.json`, or generated preview binaries under `assets/previews/<pet-id>/`
- `npm run validate:pr` passes
- Quick install works with `npm run install:pet -- <slug> --codex-home /tmp/codex-pet-test`
- No unrelated files

Maintainers regenerate previews and repository listings after merge with:

```bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
```

## Curation rules

Maintainers may decline a submission if:

- The asset usage terms are absent or do not establish at least non-commercial-only redistribution
- The files are not installable
- The categorization is misleading
- The submission repackages a byte-identical asset, or an additional version does not document a meaningful independent distinction
- The visual design is interchangeable with an existing generic avatar or mascot

## Categories

Current primary categories:

- Game Characters
- Anime Characters
- Original Characters
- Mascots
- Animals
- Fantasy Creatures
- Robots
- Human Avatars
- Memes
- Objects & Props
- Others

More detail is available in [categories.md](./categories.md).
