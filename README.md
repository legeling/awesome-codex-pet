<div align="center">

# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

![pets: 14](https://img.shields.io/badge/pets-14-2ea44f) ![categories: 6](https://img.shields.io/badge/categories-6-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

[**🌐 Live gallery**](https://awesome-codex-pet.pages.dev) · [**⚡ Install guide**](https://awesome-codex-pet.pages.dev/install) · [**📖 Submit a pet**](https://awesome-codex-pet.pages.dev/guide)

![Awesome Codex Pet cover](./assets/cover/awesome-codex-pet-cover.png)

</div>

A curated gallery of community-made Codex pets. Browse animations on the [website](https://awesome-codex-pet.pages.dev), install with one command, and submit your own pet through GitHub.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Live gallery** — animated previews, filtering, and view/install counters at [awesome-codex-pet.pages.dev](https://awesome-codex-pet.pages.dev)
- **GitHub-native submissions** — open an issue or PR, the rest is automated
- **Open licensing** — code under MIT, pet assets under CC BY-NC 4.0

Each pet is a small shareable package:

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

Preview images are generated into `assets/previews/<pet-id>/`, never inside the pet folder.

## Quick Install

No clone required. Pick the script for your shell:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian"
```

```bash
# Anywhere with Node.js
npx awesome-codex-pet firefly--lingxiaotian
```

List available pets:

```bash
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --list
```

Default install locations:

- macOS / Linux: `~/.codex/pets/<pet-id>/`
- Windows: `%USERPROFILE%\.codex\pets\<pet-id>\`

Set `CODEX_HOME` to override, or `AWESOME_CODEX_PET_NO_STATS=1` to opt out of anonymous install counters.

## Pets

### Anime Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/firefly--lingxiaotian">Firefly</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/firefly--lingxiaotian/gifs/idle.gif" alt="Firefly idle" width="120" height="130"></td><td><img src="./assets/previews/firefly--lingxiaotian/gifs/waving.gif" alt="Firefly waving" width="120" height="130"></td><td><img src="./assets/previews/firefly--lingxiaotian/gifs/running.gif" alt="Firefly running" width="120" height="130"></td><td><img src="./assets/previews/firefly--lingxiaotian/gifs/waiting.gif" alt="Firefly waiting" width="120" height="130"></td><td><img src="./assets/previews/firefly--lingxiaotian/gifs/review.gif" alt="Firefly review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doro--lingxiaotian">Doro</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- doro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/doro--lingxiaotian/gifs/idle.gif" alt="Doro idle" width="120" height="130"></td><td><img src="./assets/previews/doro--lingxiaotian/gifs/waving.gif" alt="Doro waving" width="120" height="130"></td><td><img src="./assets/previews/doro--lingxiaotian/gifs/running.gif" alt="Doro running" width="120" height="130"></td><td><img src="./assets/previews/doro--lingxiaotian/gifs/waiting.gif" alt="Doro waiting" width="120" height="130"></td><td><img src="./assets/previews/doro--lingxiaotian/gifs/review.gif" alt="Doro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/frieren--lingxiaotian">Frieren</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frieren--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/frieren--lingxiaotian/gifs/idle.gif" alt="Frieren idle" width="120" height="130"></td><td><img src="./assets/previews/frieren--lingxiaotian/gifs/waving.gif" alt="Frieren waving" width="120" height="130"></td><td><img src="./assets/previews/frieren--lingxiaotian/gifs/running.gif" alt="Frieren running" width="120" height="130"></td><td><img src="./assets/previews/frieren--lingxiaotian/gifs/waiting.gif" alt="Frieren waiting" width="120" height="130"></td><td><img src="./assets/previews/frieren--lingxiaotian/gifs/review.gif" alt="Frieren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mahiro--lingxiaotian">Mahiro</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mahiro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/mahiro--lingxiaotian/gifs/idle.gif" alt="Mahiro idle" width="120" height="130"></td><td><img src="./assets/previews/mahiro--lingxiaotian/gifs/waving.gif" alt="Mahiro waving" width="120" height="130"></td><td><img src="./assets/previews/mahiro--lingxiaotian/gifs/running.gif" alt="Mahiro running" width="120" height="130"></td><td><img src="./assets/previews/mahiro--lingxiaotian/gifs/waiting.gif" alt="Mahiro waiting" width="120" height="130"></td><td><img src="./assets/previews/mahiro--lingxiaotian/gifs/review.gif" alt="Mahiro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mikoto--lingxiaotian">Mikoto</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mikoto--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="Mikoto idle" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="Mikoto waving" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/running.gif" alt="Mikoto running" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/waiting.gif" alt="Mikoto waiting" width="120" height="130"></td><td><img src="./assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miku--lingxiaotian">Miku</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miku--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/miku--lingxiaotian/gifs/idle.gif" alt="Miku idle" width="120" height="130"></td><td><img src="./assets/previews/miku--lingxiaotian/gifs/waving.gif" alt="Miku waving" width="120" height="130"></td><td><img src="./assets/previews/miku--lingxiaotian/gifs/running.gif" alt="Miku running" width="120" height="130"></td><td><img src="./assets/previews/miku--lingxiaotian/gifs/waiting.gif" alt="Miku waiting" width="120" height="130"></td><td><img src="./assets/previews/miku--lingxiaotian/gifs/review.gif" alt="Miku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/paimon--lingxiaotian">Paimon</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- paimon--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/paimon--lingxiaotian/gifs/idle.gif" alt="Paimon idle" width="120" height="130"></td><td><img src="./assets/previews/paimon--lingxiaotian/gifs/waving.gif" alt="Paimon waving" width="120" height="130"></td><td><img src="./assets/previews/paimon--lingxiaotian/gifs/running.gif" alt="Paimon running" width="120" height="130"></td><td><img src="./assets/previews/paimon--lingxiaotian/gifs/waiting.gif" alt="Paimon waiting" width="120" height="130"></td><td><img src="./assets/previews/paimon--lingxiaotian/gifs/review.gif" alt="Paimon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/reimu--lingxiaotian">Reimu</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- reimu--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/reimu--lingxiaotian/gifs/idle.gif" alt="Reimu idle" width="120" height="130"></td><td><img src="./assets/previews/reimu--lingxiaotian/gifs/waving.gif" alt="Reimu waving" width="120" height="130"></td><td><img src="./assets/previews/reimu--lingxiaotian/gifs/running.gif" alt="Reimu running" width="120" height="130"></td><td><img src="./assets/previews/reimu--lingxiaotian/gifs/waiting.gif" alt="Reimu waiting" width="120" height="130"></td><td><img src="./assets/previews/reimu--lingxiaotian/gifs/review.gif" alt="Reimu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dnf-female-ammo--qunboo">女弹药Q</a> · by <a href="https://github.com/QunBoo">@QunBoo</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dnf-female-ammo--qunboo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/dnf-female-ammo--qunboo/gifs/idle.gif" alt="女弹药Q idle" width="120" height="130"></td><td><img src="./assets/previews/dnf-female-ammo--qunboo/gifs/waving.gif" alt="女弹药Q waving" width="120" height="130"></td><td><img src="./assets/previews/dnf-female-ammo--qunboo/gifs/running.gif" alt="女弹药Q running" width="120" height="130"></td><td><img src="./assets/previews/dnf-female-ammo--qunboo/gifs/waiting.gif" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="./assets/previews/dnf-female-ammo--qunboo/gifs/review.gif" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bocchi--lingxiaotian">Bocchi</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bocchi--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/bocchi--lingxiaotian/gifs/idle.gif" alt="Bocchi idle" width="120" height="130"></td><td><img src="./assets/previews/bocchi--lingxiaotian/gifs/waving.gif" alt="Bocchi waving" width="120" height="130"></td><td><img src="./assets/previews/bocchi--lingxiaotian/gifs/running.gif" alt="Bocchi running" width="120" height="130"></td><td><img src="./assets/previews/bocchi--lingxiaotian/gifs/waiting.gif" alt="Bocchi waiting" width="120" height="130"></td><td><img src="./assets/previews/bocchi--lingxiaotian/gifs/review.gif" alt="Bocchi review" width="120" height="130"></td></tr>
</table>

### Original Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/night-neko--netizenxuan">Night Neko</a> · by <a href="https://github.com/netizenXuan">@netizenXuan</a> · Original Characters</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- night-neko--netizenxuan</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/night-neko--netizenxuan/gifs/idle.gif" alt="Night Neko idle" width="120" height="130"></td><td><img src="./assets/previews/night-neko--netizenxuan/gifs/waving.gif" alt="Night Neko waving" width="120" height="130"></td><td><img src="./assets/previews/night-neko--netizenxuan/gifs/running.gif" alt="Night Neko running" width="120" height="130"></td><td><img src="./assets/previews/night-neko--netizenxuan/gifs/waiting.gif" alt="Night Neko waiting" width="120" height="130"></td><td><img src="./assets/previews/night-neko--netizenxuan/gifs/review.gif" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

### Animals

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/becky--natewanggg">Becky</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- becky--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/becky--natewanggg/gifs/idle.gif" alt="Becky idle" width="120" height="130"></td><td><img src="./assets/previews/becky--natewanggg/gifs/waving.gif" alt="Becky waving" width="120" height="130"></td><td><img src="./assets/previews/becky--natewanggg/gifs/running.gif" alt="Becky running" width="120" height="130"></td><td><img src="./assets/previews/becky--natewanggg/gifs/waiting.gif" alt="Becky waiting" width="120" height="130"></td><td><img src="./assets/previews/becky--natewanggg/gifs/review.gif" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/fleta--natewanggg">Fleta</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- fleta--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/fleta--natewanggg/gifs/idle.gif" alt="Fleta idle" width="120" height="130"></td><td><img src="./assets/previews/fleta--natewanggg/gifs/waving.gif" alt="Fleta waving" width="120" height="130"></td><td><img src="./assets/previews/fleta--natewanggg/gifs/running.gif" alt="Fleta running" width="120" height="130"></td><td><img src="./assets/previews/fleta--natewanggg/gifs/waiting.gif" alt="Fleta waiting" width="120" height="130"></td><td><img src="./assets/previews/fleta--natewanggg/gifs/review.gif" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/teddy--danieloleary">Teddy</a> · by <a href="https://github.com/danieloleary">@danieloleary</a> · Animals</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- teddy--danieloleary</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="./assets/previews/teddy--danieloleary/gifs/idle.gif" alt="Teddy idle" width="120" height="130"></td><td><img src="./assets/previews/teddy--danieloleary/gifs/waving.gif" alt="Teddy waving" width="120" height="130"></td><td><img src="./assets/previews/teddy--danieloleary/gifs/running.gif" alt="Teddy running" width="120" height="130"></td><td><img src="./assets/previews/teddy--danieloleary/gifs/waiting.gif" alt="Teddy waiting" width="120" height="130"></td><td><img src="./assets/previews/teddy--danieloleary/gifs/review.gif" alt="Teddy review" width="120" height="130"></td></tr>
</table>

## Submit a Pet

The fastest path is the [submission guide on the website](https://awesome-codex-pet.pages.dev/guide). It walks through categories, the folder layout, and the reviewer checklist.

If you prefer working from the repo:

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

Use `pet-slug--author-slug` so multiple authors can ship variants of the same character. Generated previews and README listings are produced by CI:

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

Contributor PRs should only include `submission.json`, `pet.json`, and `spritesheet.webp`. Maintainers or CI regenerate previews, README listings, and `pets.json` after merge.

## Make a Pet

- [.agents/skills/hatch-pet](./.agents/skills/hatch-pet) — end-to-end pipeline for designing, generating, QAing, and packaging a pet

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- Web gallery source: [web/](./web)
- Stats worker: [worker/](./worker)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
