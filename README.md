# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

A curated list of community-made Codex pets, with quick install commands and lightweight installable pet packages.

Each pet is stored as a small shareable package:

```text
pets/<pet-slug>--<author-slug>/
├── pet.json
└── spritesheet.webp
```

Repository metadata, previews, references, and QA files may live alongside the package, but only `pet.json` and `spritesheet.webp` are required to install a pet.

## Quick Install

Install dependencies once:

```bash
npm install
python -m pip install -r requirements.txt
```

List available pets:

```bash
npm run install:pet -- --list
```

Install a pet:

```bash
npm run install:pet -- mikoto--lingxiaotian
```

By default, pets are installed into `~/.codex/pets/<pet-id>/`. You can override the target with `CODEX_HOME` or `--codex-home`.

## Pets

### Anime and Game Fan Art

| Preview                                                                                                                                                                                                                  | Pet                                   | Author       | Install                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ------------ | --------------------------------------------- |
| ![Mikoto idle](./assets/previews/mikoto--lingxiaotian/gifs/idle.gif) ![Mikoto waving](./assets/previews/mikoto--lingxiaotian/gifs/waving.gif) ![Mikoto running](./assets/previews/mikoto--lingxiaotian/gifs/running.gif) | [Mikoto](./pets/mikoto--lingxiaotian) | Lingxiaotian | `npm run install:pet -- mikoto--lingxiaotian` |

### Original Characters

No pets yet.

### Animals and Creatures

No pets yet.

### Robots and Mascots

No pets yet.

### Memes and Internet Icons

No pets yet.

## Submit a Pet

Use the folder name format `pet-slug--author-slug`, so multiple versions of the same character can coexist.

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

Before opening a pull request:

```bash
npm run previews
npm run validate
npm run lint
```

## Make a Pet

This repository includes the creation skill used to produce Codex-compatible pets:

- [skills/hatch-pet](./skills/hatch-pet)

It documents the atlas layout, animation states, generation workflow, QA rubric, and packaging scripts.

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

Unless otherwise noted, documentation in this repository may be shared under the repository license you choose later.

Individual pet assets may use their own licenses. Contributors should clearly state asset licensing inside each pet folder.
