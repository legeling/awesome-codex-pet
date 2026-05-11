# Contributing

[简体中文](../zh-CN/CONTRIBUTING.md) | English

Thank you for contributing to Awesome Codex Pet.

This repository is curated, which means maintainers may edit titles, categories, ordering, preview placement, and wording for consistency.

## Before you submit

- Check whether a similar pet already exists
- Make sure the pet can actually be installed in Codex
- Make sure authorship and licensing are clear

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

Do not put generated previews, QA output, references, or README files inside the pet folder. Generated previews belong under `assets/previews/<pet-id>/` and are maintained after merge.

## `submission.json` schema

Use this repository-level schema:

```json
{
  "slug": "mikoto--lingxiaotian",
  "pet_slug": "mikoto",
  "author_slug": "lingxiaotian",
  "name": "Mikoto",
  "author": "your-name-or-handle",
  "primary_category": "Anime Characters",
  "tags": ["anime", "electric", "schoolgirl"],
  "source_type": "fan-art",
  "source_url": "https://example.com/original-post",
  "license": "Specify the asset license clearly",
  "preview_image": "../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif",
  "codex_install": {
    "pet_json": "pet.json",
    "spritesheet": "spritesheet.webp"
  }
}
```

## Pull request checklist

- One pet per pull request
- Clear `pet-slug--author-slug` folder name and readable title
- Pet folder contains only `submission.json`, `pet.json`, and `spritesheet.webp`
- `pet.json` `id` matches the folder name
- `submission.json` filled in
- Author and license included
- Contributor PR does not include `README.md`, `docs/zh-CN/README.md`, `pets.json`, or `assets/previews/<pet-id>/`
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

- The licensing is unclear
- The files are not installable
- The categorization is misleading
- The submission duplicates an existing pet too closely

## Categories

Current primary categories:

- Anime Characters
- Original Characters
- Memes
- Animals
- Robots
- Others

More detail is available in [categories.md](./categories.md).
