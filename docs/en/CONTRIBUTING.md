# Contributing

[简体中文](../zh-CN/CONTRIBUTING.md) | English

Thank you for contributing to Awesome Codex Pet.

This repository is curated, which means maintainers may edit titles, categories, ordering, preview placement, and wording for consistency.

## Before you submit

- Check whether a similar pet already exists
- Make sure the pet can actually be installed in Codex
- Make sure authorship and asset usage terms are clear

## Preferred contribution flow

1. Open a pet submission issue first if you want feedback on fit or category.
2. Prepare a single pet folder under `pets/<pet-slug>--<author-slug>/`.
3. Open one pull request for one pet whenever possible.
4. Include only the final submission files in `pets/<pet-id>/`.
5. Do not commit generated README, `pets.json`, or preview assets in contributor PRs.

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

`canonical_key` is the stable identity used for duplicate review. Use the same key for variants of the same character; use an `original/<author>/<name>` key for a creator-owned character. Existing pets without this field remain valid and are indexed from their names, tags, and source metadata during review.

A formal license name is optional. The `license` field may contain a recognized license or plain-language usage terms. When no formal license applies, state at minimum that the asset is for non-commercial use only and that the submitter has the right to contribute it. A public `source_url` is helpful but optional for original, AI-generated, or privately sourced work; describe the source honestly in `source_type`, `description`, or the usage note.

## Pull request checklist

- One pet per pull request
- Clear `pet-slug--author-slug` folder name and readable title
- Pet folder contains only `submission.json`, `pet.json`, and `spritesheet.webp`
- `pet.json` `id` matches the folder name
- `spriteVersionNumber` and spritesheet dimensions match the v1 or v2 contract
- v2 look directions have been reviewed as a complete 16-direction loop
- `submission.json` filled in
- Author and asset usage terms included; either a formal license or an explicit non-commercial-only statement is acceptable
- Contributor PR does not include `README.md`, `docs/zh-CN/README.md`, `pets.json`, or generated preview binaries under `assets/previews/<pet-id>/`
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
- The submission duplicates an existing canonical character or concept too closely
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
