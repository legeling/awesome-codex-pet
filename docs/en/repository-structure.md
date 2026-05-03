# Repository Structure

[简体中文](../zh-CN/repository-structure.md) | English

This repository separates installable pet assets from repository-specific metadata.

## Why

The Codex runtime package is intentionally small:

- `pet.json`
- `spritesheet.webp`

But a community curation repository needs more context:

- author and license metadata
- category and source information
- generated preview materials

## Standard pet layout

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

Only these files are required for quick installation:

```text
pets/
└── pet-slug--author-slug/
    ├── pet.json
    └── spritesheet.webp
```

## File roles

- `submission.json`: repository metadata for curation
- `pet.json`: runtime metadata used by Codex
- `spritesheet.webp`: installable spritesheet package
- `assets/previews/<pet-id>/`: generated contact sheet and action GIF previews

Pet folders should not contain generated previews, QA output, reference images, or README files.

## Folder naming

Use this format:

```text
pet-slug--author-slug
```

Examples:

- `mikoto--lingxiaotian`
- `desire-engine--alice`
- `desire-engine--bob`

The folder name, `submission.json` `slug`, and `pet.json` `id` should match. This keeps same-character variants easy to merge, review, and install side by side.

## Quick installer

The repository provides a small Node.js installer:

```bash
npm run install:pet -- pet-slug--author-slug
```

It copies `pet.json` and `spritesheet.webp` into:

```text
~/.codex/pets/<pet-id>/
```

Default install locations:

- macOS/Linux: `~/.codex/pets/<pet-id>/`
- Windows: `%USERPROFILE%\.codex\pets\<pet-id>\`

Use `CODEX_HOME` or `--codex-home` to install into another Codex home directory.
