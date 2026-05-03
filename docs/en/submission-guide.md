# Submission Guide

[简体中文](../zh-CN/submission-guide.md) | English

This repository welcomes community-made Codex pet submissions.

## Goals

Each submission should be:

- Easy to review
- Easy to preview
- Easy to reuse
- Clear about authorship and licensing

## Recommended folder layout

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

The pet folder should contain only these three files.

## Required information

Please include:

- Folder slug in `pet-slug--author-slug` format
- Primary category
- Pet name
- Author name or handle
- Short description
- Source or original post link if available
- License for the asset

## Review expectations

- `pet.json` must remain installable
- `pet.json` `id` must match the folder name
- `spritesheet.webp` should be included for Codex runtime use
- Repository-only metadata should go into `submission.json`, not `pet.json`
- Generated preview assets should be kept under `assets/previews/<pet-id>/`
- Generated previews, QA output, references, and README files should not be placed in `pets/<pet-id>/`
- One pet per pull request is strongly preferred

## Preview generation

Previews are generated from `spritesheet.webp`:

```bash
python -m pip install -r requirements.txt
npm run previews
```

This creates:

```text
assets/previews/<pet-id>/contact-sheet.png
assets/previews/<pet-id>/gifs/<state>.gif
```

CI runs the same command and checks that generated previews are committed.
All generated action GIFs use the same pixel size: `384x416`.

## Quick install check

Before opening a pull request, verify that the pet can be installed:

```bash
npm run install:pet -- pet-slug--author-slug --codex-home /tmp/codex-pet-test
```

This should create:

```text
/tmp/codex-pet-test/pets/<pet-id>/
├── pet.json
└── spritesheet.webp
```

## Asset recommendations

- Use clear filenames
- Include at least one preview image
- Keep generated preview images readable in the main README
- Prefer consistent aspect ratios for previews when possible

## Notes

The exact validation rules for pet files may evolve as the Codex pet ecosystem becomes more stable.

For now, consistency and clarity matter more than strict format enforcement.
