# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

![pets: 1](https://img.shields.io/badge/pets-1-2ea44f) ![categories: 6](https://img.shields.io/badge/categories-6-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

![Awesome Codex Pet cover](./assets/cover/awesome-codex-pet-cover.png)

A curated gallery of community-made Codex pets, with generated action previews and one-command installation.

Each pet is a small shareable package:

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

Pet folders only contain final submission files. Preview images are generated into `assets/previews/<pet-id>/`.

## Quick Install

```bash
npm install
npm run install:pet -- --list
npm run install:pet -- mikoto--lingxiaotian
```

Default install locations:

- macOS/Linux: `~/.codex/pets/<pet-id>/`
- Windows: `%USERPROFILE%\.codex\pets\<pet-id>\`

## Pets

### Anime Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mikoto--lingxiaotian">Mikoto</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>npm run install:pet -- mikoto--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Jumping</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="Mikoto idle" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="Mikoto waving" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/running.gif" alt="Mikoto running" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/jumping.gif" alt="Mikoto jumping" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

## Submit a Pet

Use `pet-slug--author-slug` so multiple versions of the same character can coexist.

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

Generated previews and README listings are automated:

```bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
```

## Make a Pet

- [skills/hatch-pet](./skills/hatch-pet)

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
