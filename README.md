<div align="center">

# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | [한국어](./docs/ko/README.md) | [日本語](./docs/ja/README.md) | [Español](./docs/es/README.md) | English

<h2><a href="https://codexpet.top">Browse and install free community Codex pets at codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet is a free community pet gallery.</strong> Browse complete animations like a pet store, install a favorite without cloning the repository, or request a missing character that a community contributor may volunteer to make.</p>

<p><a href="https://codexpet.top"><strong>Browse pets</strong></a> · <a href="https://codexpet.top/install"><strong>Install a pet</strong></a> · <a href="https://codexpet.top/request"><strong>Request a character</strong></a></p>

<a href="https://codexpet.top"><img src="./assets/cover/awesome-codex-pet-cover.png" alt="Open the Awesome Codex Pet gallery"></a>

![pets: 222](https://img.shields.io/badge/pets-222-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

</div>

This repository is the source catalog behind [codexpet.top](https://codexpet.top): it keeps installable pet packages, creator attribution, collection metadata, validation tools, and contribution history. For browsing and installing pets, start with the website.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Free community gallery** — complete animation previews, collections, creator profiles, weekly rankings based on installs and likes, sharing, and community statistics at [codexpet.top](https://codexpet.top)
- **Free character requests** — submit a character and references without making a spritesheet; a community contributor may volunteer to create it, with no delivery guarantee
- **AI-first contributions** — contributors can create, repair, and submit pets with Codex; advanced contributors can still open a PR
- **Open licensing** — code under MIT, pet assets under CC BY-NC 4.0

Each pet is a small shareable package:

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

Preview images are generated into `assets/previews/<pet-id>/` as local or CI build output, never inside the pet folder.

Repository-defined series and collections live in `collections.json`. Use `kind: franchise` for pets from the same original work and `kind: theme` for cross-franchise groups connected by a shared subject or style. A pet joins either by listing its slug in `submission.json.collections`; the catalog and website are generated from that metadata. Membership is recorded immediately, while the website publishes a collection only after it has at least three pets.

`submission.json.name` is the required fallback name. Creators may keep a pet single-language by omitting `localized_names`, or opt into bilingual naming by providing both `localized_names.en` and `localized_names.zh`. The website follows the visitor's selected language and never invents a translation.

## Pet Versions

| Version | Atlas                            | Runtime metadata                            | Use                                                   |
| ------- | -------------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| v1      | `1536x1872`, 8 columns × 9 rows  | omit `spriteVersionNumber` or set it to `1` | Existing standard-animation pets                      |
| v2      | `1536x2288`, 8 columns × 11 rows | set `spriteVersionNumber: 2`                | Standard animations plus 16 clockwise look directions |

Both versions remain installable. Use v1 when maintaining an existing 9-row pet; use v2 for newly upgraded pets that need directional looking.

## Quick Install

No clone required. Pick the script for your shell:

```bash
# macOS / Linux
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB -MaximumRedirection 5 -TimeoutSec 120 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian -RawBase 'https://raw.githubusercontent.com/legeling/awesome-codex-pet/main'"
```

```bash
# From a local clone with Node.js
npm run install:pet -- firefly--lingxiaotian
```

List available pets:

```bash
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main --list
```

Default install locations:

- macOS / Linux: `~/.codex/pets/<pet-id>/`
- Windows: `%USERPROFILE%\.codex\pets\<pet-id>\`

Set `CODEX_HOME` to override, or `AWESOME_CODEX_PET_NO_STATS=1` to opt out of anonymous install counters. Installers verify the repository manifest and SHA-256 hashes, stage files before activation, and require `--force` when replacing an existing package. For reproducible installs, replace `main` in both URL positions with an immutable commit or tag.

## Upgrade an Existing v1 Pet

1. Open Codex **Settings → Pets**.
2. Find the installed custom pet and choose **Update**.
3. Codex opens a Hatch Pet task. The current v2 workflow validates and preserves the existing 9 animation rows, generates four cardinal anchors plus 16 look directions, then writes an 11-row atlas with `spriteVersionNumber: 2`.
4. Review the generated contact sheet and direction previews before accepting the replacement.

The **Update** action is an AI-assisted v1-to-v2 conversion, not a download notification from this repository. It updates the local package under `~/.codex/pets/`; it does not modify or submit the GitHub copy automatically.

## Pets

### Game Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/firefly--lingxiaotian">Firefly</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/idle.webp" alt="Firefly idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waving.webp" alt="Firefly waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/running-right.webp" alt="Firefly running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waiting.webp" alt="Firefly waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/review.webp" alt="Firefly review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/acheron--lingxiaotian">Acheron</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main acheron--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/idle.webp" alt="Acheron idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waving.webp" alt="Acheron waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/running-right.webp" alt="Acheron running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waiting.webp" alt="Acheron waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/review.webp" alt="Acheron review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/arlecchino--lingxiaotian">Arlecchino</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main arlecchino--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/idle.webp" alt="Arlecchino idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waving.webp" alt="Arlecchino waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/running-right.webp" alt="Arlecchino running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waiting.webp" alt="Arlecchino waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/review.webp" alt="Arlecchino review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/black-swan--lingxiaotian">Black Swan</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main black-swan--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/idle.webp" alt="Black Swan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waving.webp" alt="Black Swan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/running-right.webp" alt="Black Swan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waiting.webp" alt="Black Swan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/review.webp" alt="Black Swan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/buba--yurcek">Buba</a> · by @yurcek · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main buba--yurcek</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/idle.webp" alt="Buba idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waving.webp" alt="Buba waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/running-right.webp" alt="Buba running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waiting.webp" alt="Buba waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/review.webp" alt="Buba review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/castorice--lingxiaotian">Castorice</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main castorice--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/idle.webp" alt="Castorice idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waving.webp" alt="Castorice waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/running-right.webp" alt="Castorice running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waiting.webp" alt="Castorice waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/review.webp" alt="Castorice review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chen--chenxin-dlut">Ch'en</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chen--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/idle.webp" alt="Ch'en idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waving.webp" alt="Ch'en waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/running-right.webp" alt="Ch'en running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waiting.webp" alt="Ch'en waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/review.webp" alt="Ch'en review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/citlali--zaytsevzy">Citlali</a> · by <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main citlali--zaytsevzy</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/idle.webp" alt="Citlali idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waving.webp" alt="Citlali waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/running-right.webp" alt="Citlali running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waiting.webp" alt="Citlali waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/review.webp" alt="Citlali review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/cyrene--lingxiaotian">Cyrene</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main cyrene--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/idle.webp" alt="Cyrene idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waving.webp" alt="Cyrene waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/running-right.webp" alt="Cyrene running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waiting.webp" alt="Cyrene waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/review.webp" alt="Cyrene review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dimo-stand--god-wu">Dimo</a> · by @god-wu · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dimo-stand--god-wu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/idle.webp" alt="Dimo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waving.webp" alt="Dimo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/running-right.webp" alt="Dimo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waiting.webp" alt="Dimo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/review.webp" alt="Dimo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doro--lingxiaotian">Doro</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/idle.webp" alt="Doro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waving.webp" alt="Doro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/running-right.webp" alt="Doro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waiting.webp" alt="Doro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/review.webp" alt="Doro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doro--vaevie">Doro</a> · by <a href="https://github.com/vaevie">@vaevie</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doro--vaevie</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doro--vaevie/webp/idle.webp" alt="Doro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--vaevie/webp/waving.webp" alt="Doro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--vaevie/webp/running-right.webp" alt="Doro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--vaevie/webp/waiting.webp" alt="Doro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--vaevie/webp/review.webp" alt="Doro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/feixiao--lingxiaotian">Feixiao</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feixiao--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/idle.webp" alt="Feixiao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waving.webp" alt="Feixiao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/running-right.webp" alt="Feixiao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waiting.webp" alt="Feixiao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/review.webp" alt="Feixiao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/furina--lingxiaotian">Furina</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main furina--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/idle.webp" alt="Furina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waving.webp" alt="Furina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/running-right.webp" alt="Furina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waiting.webp" alt="Furina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/review.webp" alt="Furina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ganyu--chenxin-dlut">Ganyu</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ganyu--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/idle.webp" alt="Ganyu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waving.webp" alt="Ganyu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/running-right.webp" alt="Ganyu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waiting.webp" alt="Ganyu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/review.webp" alt="Ganyu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hu-tao--lingxiaotian">Hu Tao</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hu-tao--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/idle.webp" alt="Hu Tao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waving.webp" alt="Hu Tao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/running-right.webp" alt="Hu Tao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waiting.webp" alt="Hu Tao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/review.webp" alt="Hu Tao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hyacine--kurisu">Hyacine</a> · by <a href="https://github.com/kurisu994">@kurisu994</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hyacine--kurisu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/idle.webp" alt="Hyacine idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waving.webp" alt="Hyacine waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/running-right.webp" alt="Hyacine running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waiting.webp" alt="Hyacine waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/review.webp" alt="Hyacine review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/isaac--foggy-whale">Isaac</a> · by <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isaac--foggy-whale</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/idle.webp" alt="Isaac idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waving.webp" alt="Isaac waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/running-right.webp" alt="Isaac running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waiting.webp" alt="Isaac waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/review.webp" alt="Isaac review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kamisato-ayaka--lingxiaotian">Kamisato Ayaka</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kamisato-ayaka--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/idle.webp" alt="Kamisato Ayaka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waving.webp" alt="Kamisato Ayaka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/running-right.webp" alt="Kamisato Ayaka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waiting.webp" alt="Kamisato Ayaka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/review.webp" alt="Kamisato Ayaka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/klee--chenxin-dlut">Klee</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main klee--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/idle.webp" alt="Klee idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waving.webp" alt="Klee waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/running-right.webp" alt="Klee running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waiting.webp" alt="Klee waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/review.webp" alt="Klee review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/klee-desk--ayanxu56-boop">KleeDesk</a> · by <a href="https://github.com/ayanxu56-boop">@ayanxu56-boop</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main klee-desk--ayanxu56-boop</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/klee-desk--ayanxu56-boop/webp/idle.webp" alt="KleeDesk idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee-desk--ayanxu56-boop/webp/waving.webp" alt="KleeDesk waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee-desk--ayanxu56-boop/webp/running-right.webp" alt="KleeDesk running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee-desk--ayanxu56-boop/webp/waiting.webp" alt="KleeDesk waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee-desk--ayanxu56-boop/webp/review.webp" alt="KleeDesk review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kuro-chibi--kuroneko-night">Kuro Chibi</a> · by <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuro-chibi--kuroneko-night</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/idle.webp" alt="Kuro Chibi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waving.webp" alt="Kuro Chibi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/running-right.webp" alt="Kuro Chibi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waiting.webp" alt="Kuro Chibi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/review.webp" alt="Kuro Chibi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lappland--chenxin-dlut">Lappland</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lappland--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/idle.webp" alt="Lappland idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waving.webp" alt="Lappland waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/running-right.webp" alt="Lappland running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waiting.webp" alt="Lappland waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/review.webp" alt="Lappland review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/little-black-mage--libertis">Little Black Mage</a> · by @libertis · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-black-mage--libertis</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/idle.webp" alt="Little Black Mage idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waving.webp" alt="Little Black Mage waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/running-right.webp" alt="Little Black Mage running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waiting.webp" alt="Little Black Mage waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/review.webp" alt="Little Black Mage review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/march-7th--chenxin-dlut">March 7th</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main march-7th--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/idle.webp" alt="March 7th idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waving.webp" alt="March 7th waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/running-right.webp" alt="March 7th running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waiting.webp" alt="March 7th waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/review.webp" alt="March 7th review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/missile--zpzjzj">Missile</a> · by <a href="https://github.com/zpzjzj">@zpzjzj</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main missile--zpzjzj</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/idle.webp" alt="Missile idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waving.webp" alt="Missile waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/running-right.webp" alt="Missile running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waiting.webp" alt="Missile waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/review.webp" alt="Missile review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miyabi--eric-terminal">Miyabi</a> · by <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miyabi--eric-terminal</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/idle.webp" alt="Miyabi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waving.webp" alt="Miyabi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/running-right.webp" alt="Miyabi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waiting.webp" alt="Miyabi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/review.webp" alt="Miyabi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nahida--lingxiaotian">Nahida</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nahida--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/idle.webp" alt="Nahida idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waving.webp" alt="Nahida waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/running-right.webp" alt="Nahida running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waiting.webp" alt="Nahida waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/review.webp" alt="Nahida review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/navia--lingxiaotian">Navia</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main navia--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/idle.webp" alt="Navia idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waving.webp" alt="Navia waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/running-right.webp" alt="Navia running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waiting.webp" alt="Navia waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/review.webp" alt="Navia review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/om-nom--kasyan1337">Om Nom</a> · by <a href="https://github.com/kasyan1337">@kasyan1337</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main om-nom--kasyan1337</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/idle.webp" alt="Om Nom idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waving.webp" alt="Om Nom waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/running-right.webp" alt="Om Nom running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waiting.webp" alt="Om Nom waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/review.webp" alt="Om Nom review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/paimon--lingxiaotian">Paimon</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main paimon--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/idle.webp" alt="Paimon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waving.webp" alt="Paimon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/running-right.webp" alt="Paimon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waiting.webp" alt="Paimon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/review.webp" alt="Paimon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/phoebe--chenxin-dlut">Phoebe</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main phoebe--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/idle.webp" alt="Phoebe idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waving.webp" alt="Phoebe waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/running-right.webp" alt="Phoebe running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waiting.webp" alt="Phoebe waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/review.webp" alt="Phoebe review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/raiden-shogun--lingxiaotian">Raiden Shogun</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main raiden-shogun--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/idle.webp" alt="Raiden Shogun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waving.webp" alt="Raiden Shogun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/running-right.webp" alt="Raiden Shogun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waiting.webp" alt="Raiden Shogun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/review.webp" alt="Raiden Shogun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/reimu--lingxiaotian">Reimu</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main reimu--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/idle.webp" alt="Reimu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waving.webp" alt="Reimu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/running-right.webp" alt="Reimu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waiting.webp" alt="Reimu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/review.webp" alt="Reimu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/remielle-dan--erlla">Remielle-Dan / Leimi</a> · by <a href="https://github.com/Erlla">@Erlla</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main remielle-dan--erlla</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/idle.webp" alt="Remielle-Dan / Leimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waving.webp" alt="Remielle-Dan / Leimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/running-right.webp" alt="Remielle-Dan / Leimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waiting.webp" alt="Remielle-Dan / Leimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/review.webp" alt="Remielle-Dan / Leimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/robin--lingxiaotian">Robin</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main robin--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/idle.webp" alt="Robin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waving.webp" alt="Robin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/running-right.webp" alt="Robin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waiting.webp" alt="Robin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/review.webp" alt="Robin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ruan-mei--lingxiaotian">Ruan Mei</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruan-mei--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/idle.webp" alt="Ruan Mei idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waving.webp" alt="Ruan Mei waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/running-right.webp" alt="Ruan Mei running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waiting.webp" alt="Ruan Mei waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/review.webp" alt="Ruan Mei review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/silver-wolf--lingxiaotian">Silver Wolf</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main silver-wolf--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/idle.webp" alt="Silver Wolf idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waving.webp" alt="Silver Wolf waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/running-right.webp" alt="Silver Wolf running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waiting.webp" alt="Silver Wolf waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/review.webp" alt="Silver Wolf review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sonetto--chenxin-dlut">Sonetto</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sonetto--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/idle.webp" alt="Sonetto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waving.webp" alt="Sonetto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/running-right.webp" alt="Sonetto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waiting.webp" alt="Sonetto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/review.webp" alt="Sonetto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sparkle--lingxiaotian">Sparkle</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sparkle--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/idle.webp" alt="Sparkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waving.webp" alt="Sparkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/running-right.webp" alt="Sparkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waiting.webp" alt="Sparkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/review.webp" alt="Sparkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/susuta--xiangzi529">Susuta</a> · by <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main susuta--xiangzi529</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/idle.webp" alt="Susuta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waving.webp" alt="Susuta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/running-right.webp" alt="Susuta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waiting.webp" alt="Susuta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/review.webp" alt="Susuta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tingyun--lingxiaotian">Tingyun</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tingyun--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/idle.webp" alt="Tingyun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waving.webp" alt="Tingyun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/running-right.webp" alt="Tingyun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waiting.webp" alt="Tingyun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/review.webp" alt="Tingyun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/vertin--chenxin-dlut">Vertin</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main vertin--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/idle.webp" alt="Vertin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waving.webp" alt="Vertin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/running-right.webp" alt="Vertin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waiting.webp" alt="Vertin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/review.webp" alt="Vertin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yoimiya--chenxin-dlut">Yoimiya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yoimiya--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/idle.webp" alt="Yoimiya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waving.webp" alt="Yoimiya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/running-right.webp" alt="Yoimiya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waiting.webp" alt="Yoimiya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/review.webp" alt="Yoimiya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zani--chenxin-dlut">Zani</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zani--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/idle.webp" alt="Zani idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waving.webp" alt="Zani waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/running-right.webp" alt="Zani running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waiting.webp" alt="Zani waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/review.webp" alt="Zani review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yae-miko--legeling">Yae Miko</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yae-miko--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/idle.webp" alt="Yae Miko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waving.webp" alt="Yae Miko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/running-right.webp" alt="Yae Miko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waiting.webp" alt="Yae Miko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/review.webp" alt="Yae Miko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dnf-female-ammo--qunboo">女弹药Q</a> · by <a href="https://github.com/QunBoo">@QunBoo</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dnf-female-ammo--qunboo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/idle.webp" alt="女弹药Q idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waving.webp" alt="女弹药Q waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/running-right.webp" alt="女弹药Q running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waiting.webp" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/review.webp" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wukong--jorge-cuevas90003">Wukong</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wukong--jorge-cuevas90003</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/idle.webp" alt="Wukong idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waving.webp" alt="Wukong waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/running-right.webp" alt="Wukong running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waiting.webp" alt="Wukong waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/review.webp" alt="Wukong review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · by <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doudizhu-laonongmin--chenyijing131-art</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/idle.webp" alt="斗地主老农民 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waving.webp" alt="斗地主老农民 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/running-right.webp" alt="斗地主老农民 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waiting.webp" alt="斗地主老农民 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/review.webp" alt="斗地主老农民 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/new-covenant-exusiai--chenxin-dlut">Exusiai the New Covenant</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main new-covenant-exusiai--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/idle.webp" alt="Exusiai the New Covenant idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waving.webp" alt="Exusiai the New Covenant waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/running-right.webp" alt="Exusiai the New Covenant running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waiting.webp" alt="Exusiai the New Covenant waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/review.webp" alt="Exusiai the New Covenant review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/regulus-star-antimony--chenxin-dlut">Regulus</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main regulus-star-antimony--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/idle.webp" alt="Regulus idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waving.webp" alt="Regulus waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/running-right.webp" alt="Regulus running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waiting.webp" alt="Regulus waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/review.webp" alt="Regulus review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lin-pianpian-first-meeting--legeling">林翩翩（初遇）</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lin-pianpian-first-meeting--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lin-pianpian-first-meeting--legeling/webp/idle.webp" alt="林翩翩（初遇） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-first-meeting--legeling/webp/waving.webp" alt="林翩翩（初遇） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-first-meeting--legeling/webp/running-right.webp" alt="林翩翩（初遇） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-first-meeting--legeling/webp/waiting.webp" alt="林翩翩（初遇） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-first-meeting--legeling/webp/review.webp" alt="林翩翩（初遇） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lin-pianpian-date--legeling">林翩翩（约会）</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lin-pianpian-date--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lin-pianpian-date--legeling/webp/idle.webp" alt="林翩翩（约会） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-date--legeling/webp/waving.webp" alt="林翩翩（约会） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-date--legeling/webp/running-right.webp" alt="林翩翩（约会） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-date--legeling/webp/waiting.webp" alt="林翩翩（约会） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-date--legeling/webp/review.webp" alt="林翩翩（约会） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lin-pianpian-flower-street--legeling">林翩翩（花街）</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lin-pianpian-flower-street--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lin-pianpian-flower-street--legeling/webp/idle.webp" alt="林翩翩（花街） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-flower-street--legeling/webp/waving.webp" alt="林翩翩（花街） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-flower-street--legeling/webp/running-right.webp" alt="林翩翩（花街） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-flower-street--legeling/webp/waiting.webp" alt="林翩翩（花街） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-flower-street--legeling/webp/review.webp" alt="林翩翩（花街） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lin-pianpian-courtesan--legeling">林翩翩（花魁）</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lin-pianpian-courtesan--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lin-pianpian-courtesan--legeling/webp/idle.webp" alt="林翩翩（花魁） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-courtesan--legeling/webp/waving.webp" alt="林翩翩（花魁） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-courtesan--legeling/webp/running-right.webp" alt="林翩翩（花魁） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-courtesan--legeling/webp/waiting.webp" alt="林翩翩（花魁） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lin-pianpian-courtesan--legeling/webp/review.webp" alt="林翩翩（花魁） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shen-xinghui--legeling">沈星回</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shen-xinghui--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shen-xinghui--legeling/webp/idle.webp" alt="沈星回 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shen-xinghui--legeling/webp/waving.webp" alt="沈星回 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shen-xinghui--legeling/webp/running-right.webp" alt="沈星回 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shen-xinghui--legeling/webp/waiting.webp" alt="沈星回 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shen-xinghui--legeling/webp/review.webp" alt="沈星回 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chillet--legeling">Chillet</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chillet--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chillet--legeling/webp/idle.webp" alt="Chillet idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chillet--legeling/webp/waving.webp" alt="Chillet waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chillet--legeling/webp/running-right.webp" alt="Chillet running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chillet--legeling/webp/waiting.webp" alt="Chillet waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chillet--legeling/webp/review.webp" alt="Chillet review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/youmu--ai-generated">魂魄妖梦</a> · by @ai-generated · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main youmu--ai-generated</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/idle.webp" alt="魂魄妖梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waving.webp" alt="魂魄妖梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/running-right.webp" alt="魂魄妖梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waiting.webp" alt="魂魄妖梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/review.webp" alt="魂魄妖梦 review" width="120" height="130"></td></tr>
</table>

### Anime Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zero-two--mingqingmozhao">Zero Two</a> · by @mingqingmozhao · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zero-two--mingqingmozhao</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/idle.webp" alt="Zero Two idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waving.webp" alt="Zero Two waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/running-right.webp" alt="Zero Two running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waiting.webp" alt="Zero Two waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/review.webp" alt="Zero Two review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/anya--chenxin-dlut">Anya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main anya--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/idle.webp" alt="Anya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waving.webp" alt="Anya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/running-right.webp" alt="Anya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waiting.webp" alt="Anya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/review.webp" alt="Anya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/asuka--maxg24">Asuka</a> · by <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main asuka--maxg24</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/idle.webp" alt="Asuka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waving.webp" alt="Asuka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/running-right.webp" alt="Asuka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waiting.webp" alt="Asuka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/review.webp" alt="Asuka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chibi-rei-pet--bendy">Rei Ayanami</a> · by @Bendy · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chibi-rei-pet--bendy</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/idle.webp" alt="Rei Ayanami idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waving.webp" alt="Rei Ayanami waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/running-right.webp" alt="Rei Ayanami running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waiting.webp" alt="Rei Ayanami waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/review.webp" alt="Rei Ayanami review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chotu--makriman">Chotu</a> · by <a href="https://github.com/makriman">@makriman</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chotu--makriman</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/idle.webp" alt="Chotu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waving.webp" alt="Chotu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/running-right.webp" alt="Chotu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waiting.webp" alt="Chotu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/review.webp" alt="Chotu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/conan--chenxin-dlut">Conan Edogawa</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main conan--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/idle.webp" alt="Conan Edogawa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waving.webp" alt="Conan Edogawa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/running-right.webp" alt="Conan Edogawa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waiting.webp" alt="Conan Edogawa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/review.webp" alt="Conan Edogawa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doraemon--xueshi">Doraemon</a> · by <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doraemon--xueshi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/idle.webp" alt="Doraemon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waving.webp" alt="Doraemon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/running-right.webp" alt="Doraemon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waiting.webp" alt="Doraemon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/review.webp" alt="Doraemon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/elaina--nyakku-shigure">Elaina</a> · by <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main elaina--nyakku-shigure</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/idle.webp" alt="Elaina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waving.webp" alt="Elaina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/running-right.webp" alt="Elaina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waiting.webp" alt="Elaina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/review.webp" alt="Elaina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/eren--ash-sw">Eren</a> · by <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main eren--ash-sw</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/idle.webp" alt="Eren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waving.webp" alt="Eren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/running-right.webp" alt="Eren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waiting.webp" alt="Eren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/review.webp" alt="Eren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/frieren--lingxiaotian">Frieren</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frieren--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/idle.webp" alt="Frieren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waving.webp" alt="Frieren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/running-right.webp" alt="Frieren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waiting.webp" alt="Frieren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/review.webp" alt="Frieren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gojo--lilokhalikfa">Gojo</a> · by <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gojo--lilokhalikfa</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/idle.webp" alt="Gojo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waving.webp" alt="Gojo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/running-right.webp" alt="Gojo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waiting.webp" alt="Gojo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/review.webp" alt="Gojo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/han-li--metro186">Han Li</a> · by <a href="https://github.com/metro186">@metro186</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main han-li--metro186</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/han-li--metro186/webp/idle.webp" alt="Han Li idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--metro186/webp/waving.webp" alt="Han Li waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--metro186/webp/running-right.webp" alt="Han Li running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--metro186/webp/waiting.webp" alt="Han Li waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--metro186/webp/review.webp" alt="Han Li review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ikaros--icarus-alpha">Ikaros</a> · by <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ikaros--icarus-alpha</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/idle.webp" alt="Ikaros idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waving.webp" alt="Ikaros waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/running-right.webp" alt="Ikaros running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waiting.webp" alt="Ikaros waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/review.webp" alt="Ikaros review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/isekaijoucho--siiverash">Isekaijoucho</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isekaijoucho--siiverash</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/idle.webp" alt="Isekaijoucho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waving.webp" alt="Isekaijoucho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/running-right.webp" alt="Isekaijoucho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waiting.webp" alt="Isekaijoucho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/review.webp" alt="Isekaijoucho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jolyne-cujoh--d2682787206-sys">Jolyne Cujoh</a> · by <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jolyne-cujoh--d2682787206-sys</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/idle.webp" alt="Jolyne Cujoh idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waving.webp" alt="Jolyne Cujoh waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/running-right.webp" alt="Jolyne Cujoh running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waiting.webp" alt="Jolyne Cujoh waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/review.webp" alt="Jolyne Cujoh review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kaguya-luna--enclairfarron">Kaguya Luna</a> · by <a href="https://github.com/enclairfarron">@enclairfarron</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaguya-luna--enclairfarron</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/idle.webp" alt="Kaguya Luna idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waving.webp" alt="Kaguya Luna waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/running-right.webp" alt="Kaguya Luna running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waiting.webp" alt="Kaguya Luna waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/review.webp" alt="Kaguya Luna review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kaiju-no-8--terry878">Kaiju No. 8</a> · by @TERRY878 · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaiju-no-8--terry878</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/idle.webp" alt="Kaiju No. 8 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waving.webp" alt="Kaiju No. 8 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/running-right.webp" alt="Kaiju No. 8 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waiting.webp" alt="Kaiju No. 8 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/review.webp" alt="Kaiju No. 8 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kid--chenxin-dlut">Kaito Kid</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/idle.webp" alt="Kaito Kid idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waving.webp" alt="Kaito Kid waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/running-right.webp" alt="Kaito Kid running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waiting.webp" alt="Kaito Kid waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/review.webp" alt="Kaito Kid review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kid-goku--julianhuang">Kid Goku</a> · by <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid-goku--julianhuang</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/idle.webp" alt="Kid Goku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waving.webp" alt="Kid Goku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/running-right.webp" alt="Kid Goku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waiting.webp" alt="Kid Goku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/review.webp" alt="Kid Goku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/levi--emrecb">Levi</a> · by <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main levi--emrecb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/idle.webp" alt="Levi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waving.webp" alt="Levi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/running-right.webp" alt="Levi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waiting.webp" alt="Levi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/review.webp" alt="Levi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/light-fury--legeling">Light Fury</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main light-fury--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/light-fury--legeling/webp/idle.webp" alt="Light Fury idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/light-fury--legeling/webp/waving.webp" alt="Light Fury waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/light-fury--legeling/webp/running-right.webp" alt="Light Fury running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/light-fury--legeling/webp/waiting.webp" alt="Light Fury waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/light-fury--legeling/webp/review.webp" alt="Light Fury review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/luffy-gear-5--jordsshmords1">Luffy Gear 5</a> · by <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luffy-gear-5--jordsshmords1</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/idle.webp" alt="Luffy Gear 5 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waving.webp" alt="Luffy Gear 5 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/running-right.webp" alt="Luffy Gear 5 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waiting.webp" alt="Luffy Gear 5 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/review.webp" alt="Luffy Gear 5 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mahiro--lingxiaotian">Mahiro</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mahiro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/idle.webp" alt="Mahiro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waving.webp" alt="Mahiro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/running-right.webp" alt="Mahiro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waiting.webp" alt="Mahiro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/review.webp" alt="Mahiro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/makima-coat--yuyuabc1">Makima (Coat)</a> · by <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makima-coat--yuyuabc1</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/idle.webp" alt="Makima (Coat) idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waving.webp" alt="Makima (Coat) waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/running-right.webp" alt="Makima (Coat) running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waiting.webp" alt="Makima (Coat) waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/review.webp" alt="Makima (Coat) review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/makimamini--1sh1ro">Makima</a> · by @1sh1ro · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makimamini--1sh1ro</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/idle.webp" alt="Makima idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waving.webp" alt="Makima waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/running-right.webp" alt="Makima running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waiting.webp" alt="Makima waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/review.webp" alt="Makima review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/makisekurisu--m1gr4ine">Makise Kurisu</a> · by @m1gr4ine · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makisekurisu--m1gr4ine</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/idle.webp" alt="Makise Kurisu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waving.webp" alt="Makise Kurisu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/running-right.webp" alt="Makise Kurisu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waiting.webp" alt="Makise Kurisu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/review.webp" alt="Makise Kurisu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mihari--hyoni1129">Mihari</a> · by <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mihari--hyoni1129</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/idle.webp" alt="Mihari idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waving.webp" alt="Mihari waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/running-right.webp" alt="Mihari running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waiting.webp" alt="Mihari waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/review.webp" alt="Mihari review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mikoto--lingxiaotian">Mikoto</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mikoto--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/idle.webp" alt="Mikoto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waving.webp" alt="Mikoto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/running-right.webp" alt="Mikoto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waiting.webp" alt="Mikoto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/review.webp" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miku--lingxiaotian">Miku</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miku--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/idle.webp" alt="Miku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waving.webp" alt="Miku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/running-right.webp" alt="Miku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waiting.webp" alt="Miku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/review.webp" alt="Miku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/misaka-network--ldl1234">Misaka Network</a> · by <a href="https://github.com/ldl1234">@ldl1234</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main misaka-network--ldl1234</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/idle.webp" alt="Misaka Network idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waving.webp" alt="Misaka Network waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/running-right.webp" alt="Misaka Network running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waiting.webp" alt="Misaka Network waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/review.webp" alt="Misaka Network review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nimbus--soraberu">Nimbus</a> · by <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nimbus--soraberu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/idle.webp" alt="Nimbus idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waving.webp" alt="Nimbus waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/running-right.webp" alt="Nimbus running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waiting.webp" alt="Nimbus waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/review.webp" alt="Nimbus review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rem--l1">Rem</a> · by <a href="https://codex-pets.net/users/l1">@l1</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rem--l1</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/idle.webp" alt="Rem idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waving.webp" alt="Rem waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/running-right.webp" alt="Rem running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waiting.webp" alt="Rem waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/review.webp" alt="Rem review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rinami--siiverash">Rinami Himesaki</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rinami--siiverash</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/idle.webp" alt="Rinami Himesaki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waving.webp" alt="Rinami Himesaki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/running-right.webp" alt="Rinami Himesaki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waiting.webp" alt="Rinami Himesaki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/review.webp" alt="Rinami Himesaki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/roxy-pixel--gravity">Roxy Pixel</a> · by @gravity · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main roxy-pixel--gravity</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/idle.webp" alt="Roxy Pixel idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waving.webp" alt="Roxy Pixel waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/running-right.webp" alt="Roxy Pixel running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waiting.webp" alt="Roxy Pixel waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/review.webp" alt="Roxy Pixel review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/saber--petdex-zhenyou-ling">Saber</a> · by @真宵 绫. · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saber--petdex-zhenyou-ling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/idle.webp" alt="Saber idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waving.webp" alt="Saber waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/running-right.webp" alt="Saber running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waiting.webp" alt="Saber waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/review.webp" alt="Saber review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sakamoto--zpzjzj">Sakamoto</a> · by <a href="https://github.com/zpzjzj">@zpzjzj</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sakamoto--zpzjzj</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/idle.webp" alt="Sakamoto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/waving.webp" alt="Sakamoto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/running-right.webp" alt="Sakamoto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/waiting.webp" alt="Sakamoto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/review.webp" alt="Sakamoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gintoki-pixel--yuu-m">Sakata Gintoki</a> · by @Yuu M. · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gintoki-pixel--yuu-m</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/idle.webp" alt="Sakata Gintoki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waving.webp" alt="Sakata Gintoki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/running-right.webp" alt="Sakata Gintoki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waiting.webp" alt="Sakata Gintoki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/review.webp" alt="Sakata Gintoki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shinchan--chenxin-dlut">Shin-chan</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinchan--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/idle.webp" alt="Shin-chan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waving.webp" alt="Shin-chan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/running-right.webp" alt="Shin-chan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waiting.webp" alt="Shin-chan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/review.webp" alt="Shin-chan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/takamatsu-tomori--a1wace-dev">Takamatsu Tomori</a> · by @A1wace-dev · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main takamatsu-tomori--a1wace-dev</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/idle.webp" alt="Takamatsu Tomori idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waving.webp" alt="Takamatsu Tomori waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/running-right.webp" alt="Takamatsu Tomori running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waiting.webp" alt="Takamatsu Tomori waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/review.webp" alt="Takamatsu Tomori review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/togawa-sakiko--enclairfarron">Togawa Sakiko</a> · by <a href="https://github.com/enclairfarron">@enclairfarron</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main togawa-sakiko--enclairfarron</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/idle.webp" alt="Togawa Sakiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waving.webp" alt="Togawa Sakiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/running-right.webp" alt="Togawa Sakiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waiting.webp" alt="Togawa Sakiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/review.webp" alt="Togawa Sakiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/toothless--legeling">Toothless</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main toothless--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/toothless--legeling/webp/idle.webp" alt="Toothless idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toothless--legeling/webp/waving.webp" alt="Toothless waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toothless--legeling/webp/running-right.webp" alt="Toothless running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toothless--legeling/webp/waiting.webp" alt="Toothless waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toothless--legeling/webp/review.webp" alt="Toothless review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/toyama-kasumi--lsmd23">Toyama Kasumi</a> · by <a href="https://github.com/lsmd23">@lsmd23</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main toyama-kasumi--lsmd23</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/idle.webp" alt="Toyama Kasumi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waving.webp" alt="Toyama Kasumi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/running-right.webp" alt="Toyama Kasumi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waiting.webp" alt="Toyama Kasumi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/review.webp" alt="Toyama Kasumi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/violet--lazenca">Violet</a> · by <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main violet--lazenca</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/idle.webp" alt="Violet idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waving.webp" alt="Violet waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/running-right.webp" alt="Violet running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waiting.webp" alt="Violet waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/review.webp" alt="Violet review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wakaba-mutsumi--carambola">Wakaba Mutsumi</a> · by @Carambola · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wakaba-mutsumi--carambola</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/idle.webp" alt="Wakaba Mutsumi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waving.webp" alt="Wakaba Mutsumi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/running-right.webp" alt="Wakaba Mutsumi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waiting.webp" alt="Wakaba Mutsumi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/review.webp" alt="Wakaba Mutsumi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/inosuke-hashibira--wangfan002">Inosuke Hashibira</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main inosuke-hashibira--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/idle.webp" alt="Inosuke Hashibira idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waving.webp" alt="Inosuke Hashibira waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/running-right.webp" alt="Inosuke Hashibira running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waiting.webp" alt="Inosuke Hashibira waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/review.webp" alt="Inosuke Hashibira review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nangong-wan--bpup">Nangong Wan</a> · by <a href="https://github.com/bpup">@bpup</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nangong-wan--bpup</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/idle.webp" alt="Nangong Wan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waving.webp" alt="Nangong Wan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/running-right.webp" alt="Nangong Wan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waiting.webp" alt="Nangong Wan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/review.webp" alt="Nangong Wan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zenitsu-agatsuma--wangfan002">Zenitsu Agatsuma</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zenitsu-agatsuma--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/idle.webp" alt="Zenitsu Agatsuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waving.webp" alt="Zenitsu Agatsuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/running-right.webp" alt="Zenitsu Agatsuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waiting.webp" alt="Zenitsu Agatsuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/review.webp" alt="Zenitsu Agatsuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/giyu-tomioka--wangfan002">Giyu Tomioka</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main giyu-tomioka--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/idle.webp" alt="Giyu Tomioka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waving.webp" alt="Giyu Tomioka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/running-right.webp" alt="Giyu Tomioka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waiting.webp" alt="Giyu Tomioka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/review.webp" alt="Giyu Tomioka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/muichiro-tokito--wangfan002">Muichiro Tokito</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main muichiro-tokito--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/idle.webp" alt="Muichiro Tokito idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waving.webp" alt="Muichiro Tokito waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/running-right.webp" alt="Muichiro Tokito running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waiting.webp" alt="Muichiro Tokito waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/review.webp" alt="Muichiro Tokito review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tanjiro-kamado--wangfan002">Tanjiro Kamado</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tanjiro-kamado--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/idle.webp" alt="Tanjiro Kamado idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waving.webp" alt="Tanjiro Kamado waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/running-right.webp" alt="Tanjiro Kamado running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waiting.webp" alt="Tanjiro Kamado waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/review.webp" alt="Tanjiro Kamado review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nezuko-kamado--wangfan002">Nezuko Kamado</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nezuko-kamado--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/idle.webp" alt="Nezuko Kamado idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waving.webp" alt="Nezuko Kamado waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/running-right.webp" alt="Nezuko Kamado running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waiting.webp" alt="Nezuko Kamado waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/review.webp" alt="Nezuko Kamado review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/fujiwara-chika--klmklmnb">Chika Fujiwara</a> · by <a href="https://github.com/klmklmnb">@klmklmnb</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fujiwara-chika--klmklmnb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/idle.webp" alt="Chika Fujiwara idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waving.webp" alt="Chika Fujiwara waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/running-right.webp" alt="Chika Fujiwara running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waiting.webp" alt="Chika Fujiwara waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/review.webp" alt="Chika Fujiwara review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shinobu-kocho--wangfan002">Shinobu Kocho</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinobu-kocho--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/idle.webp" alt="Shinobu Kocho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waving.webp" alt="Shinobu Kocho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/running-right.webp" alt="Shinobu Kocho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waiting.webp" alt="Shinobu Kocho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/review.webp" alt="Shinobu Kocho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/han-li--legeling">韩立</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main han-li--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/han-li--legeling/webp/idle.webp" alt="韩立 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--legeling/webp/waving.webp" alt="韩立 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--legeling/webp/running-right.webp" alt="韩立 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--legeling/webp/waiting.webp" alt="韩立 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/han-li--legeling/webp/review.webp" alt="韩立 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bocchi--lingxiaotian">Bocchi</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bocchi--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/idle.webp" alt="Bocchi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waving.webp" alt="Bocchi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/running-right.webp" alt="Bocchi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waiting.webp" alt="Bocchi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/review.webp" alt="Bocchi review" width="120" height="130"></td></tr>
</table>

### Original Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/aiko--chenxin-dlut">Aiko</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aiko--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/idle.webp" alt="Aiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waving.webp" alt="Aiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/running-right.webp" alt="Aiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waiting.webp" alt="Aiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/review.webp" alt="Aiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chud-codex--jorge-cuevas90003</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/idle.webp" alt="Chud Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waving.webp" alt="Chud Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/running-right.webp" alt="Chud Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waiting.webp" alt="Chud Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/review.webp" alt="Chud Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diana--am">Diana</a> · by @am · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diana--am</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diana--am/webp/idle.webp" alt="Diana idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waving.webp" alt="Diana waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/running-right.webp" alt="Diana running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waiting.webp" alt="Diana waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/review.webp" alt="Diana review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hajimi--zeyuwang1999">Hajimi</a> · by <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hajimi--zeyuwang1999</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/idle.webp" alt="Hajimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waving.webp" alt="Hajimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/running-right.webp" alt="Hajimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waiting.webp" alt="Hajimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/review.webp" alt="Hajimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hamo--haipengzzz">Hamo</a> · by <a href="https://github.com/haipengzzz">@haipengzzz</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hamo--haipengzzz</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/idle.webp" alt="Hamo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waving.webp" alt="Hamo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/running-right.webp" alt="Hamo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waiting.webp" alt="Hamo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/review.webp" alt="Hamo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hana2--initiatione">Hana2</a> · by <a href="https://github.com/initiatione">@initiatione</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hana2--initiatione</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/idle.webp" alt="Hana2 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waving.webp" alt="Hana2 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/running-right.webp" alt="Hana2 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waiting.webp" alt="Hana2 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/review.webp" alt="Hana2 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/iris--yau-427">Iris</a> · by <a href="https://github.com/Yau-427">@Yau-427</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main iris--yau-427</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/idle.webp" alt="Iris idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waving.webp" alt="Iris waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/running-right.webp" alt="Iris running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waiting.webp" alt="Iris waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/review.webp" alt="Iris review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jesse-the-fox--itjesse">JesseTheFox</a> · by <a href="https://github.com/ITJesse">@ITJesse</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jesse-the-fox--itjesse</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/idle.webp" alt="JesseTheFox idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waving.webp" alt="JesseTheFox waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/running-right.webp" alt="JesseTheFox running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waiting.webp" alt="JesseTheFox waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/review.webp" alt="JesseTheFox review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/joker--oytyo">Joker</a> · by @oytyo · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main joker--oytyo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/idle.webp" alt="Joker idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waving.webp" alt="Joker waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/running-right.webp" alt="Joker running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waiting.webp" alt="Joker waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/review.webp" alt="Joker review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/linnea--nyakku-shigure">Linnea</a> · by @nyakku-shigure · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main linnea--nyakku-shigure</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/idle.webp" alt="Linnea idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waving.webp" alt="Linnea waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/running-right.webp" alt="Linnea running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waiting.webp" alt="Linnea waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/review.webp" alt="Linnea review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lumei--dagwbl">Lumei</a> · by <a href="https://github.com/Dagwbl">@Dagwbl</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lumei--dagwbl</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/idle.webp" alt="Lumei idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waving.webp" alt="Lumei waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/running-right.webp" alt="Lumei running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waiting.webp" alt="Lumei waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/review.webp" alt="Lumei review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mika--rotl24">Mika</a> · by <a href="https://github.com/ROTl24">@ROTl24</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mika--rotl24</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/idle.webp" alt="Mika idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waving.webp" alt="Mika waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/running-right.webp" alt="Mika running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waiting.webp" alt="Mika waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/review.webp" alt="Mika review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/minty--somnusochi">Minty</a> · by <a href="https://github.com/Somnusochi">@Somnusochi</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main minty--somnusochi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/idle.webp" alt="Minty idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waving.webp" alt="Minty waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/running-right.webp" alt="Minty running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waiting.webp" alt="Minty waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/review.webp" alt="Minty review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · by <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruruka--ltmcliao-cmyk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/idle.webp" alt="RuRuKa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waving.webp" alt="RuRuKa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/running-right.webp" alt="RuRuKa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waiting.webp" alt="RuRuKa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/review.webp" alt="RuRuKa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shian-helper--mistyshen">Shian</a> · by <a href="https://github.com/mistyShen">@mistyShen</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shian-helper--mistyshen</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/idle.webp" alt="Shian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waving.webp" alt="Shian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/running-right.webp" alt="Shian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waiting.webp" alt="Shian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/review.webp" alt="Shian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main warden-codex--jorge-cuevas90003</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/idle.webp" alt="Warden Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waving.webp" alt="Warden Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/running-right.webp" alt="Warden Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waiting.webp" alt="Warden Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/review.webp" alt="Warden Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yier--gbn666">Yi Er</a> · by <a href="https://github.com/gbn666">@gbn666</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yier--gbn666</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/idle.webp" alt="Yi Er idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waving.webp" alt="Yi Er waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/running-right.webp" alt="Yi Er running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waiting.webp" alt="Yi Er waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/review.webp" alt="Yi Er review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yume-boundary--andy-meow">Yume</a> · by @andy-meow · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yume-boundary--andy-meow</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/idle.webp" alt="Yume idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waving.webp" alt="Yume waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/running-right.webp" alt="Yume running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waiting.webp" alt="Yume waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/review.webp" alt="Yume review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yuzubou--keseras34938976">Yuzubou</a> · by <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuzubou--keseras34938976</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/idle.webp" alt="Yuzubou idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waving.webp" alt="Yuzubou waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/running-right.webp" alt="Yuzubou running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waiting.webp" alt="Yuzubou waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/review.webp" alt="Yuzubou review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gudong--rank">咕咚</a> · by @Rank · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gudong--rank</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/idle.webp" alt="咕咚 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waving.webp" alt="咕咚 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/running-right.webp" alt="咕咚 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waiting.webp" alt="咕咚 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/review.webp" alt="咕咚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/liubao--killyer">榴宝</a> · by @killyer · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main liubao--killyer</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/idle.webp" alt="榴宝 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waving.webp" alt="榴宝 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/running-right.webp" alt="榴宝 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waiting.webp" alt="榴宝 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/review.webp" alt="榴宝 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/feibi--vanfff">菲比</a> · by @vanfff · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feibi--vanfff</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/idle.webp" alt="菲比 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waving.webp" alt="菲比 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/running-right.webp" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waiting.webp" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/review.webp" alt="菲比 review" width="120" height="130"></td></tr>
</table>

### Mascots

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/aemeath-mini--cunuo">Aemeath Mini</a> · by <a href="https://github.com/cuNuo">@cuNuo</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aemeath-mini--cunuo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/idle.webp" alt="Aemeath Mini idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waving.webp" alt="Aemeath Mini waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/running-right.webp" alt="Aemeath Mini running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waiting.webp" alt="Aemeath Mini waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/review.webp" alt="Aemeath Mini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/apu--xchangee">Apu</a> · by <a href="https://github.com/xchangee">@xchangee</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main apu--xchangee</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/idle.webp" alt="Apu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waving.webp" alt="Apu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/running-right.webp" alt="Apu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waiting.webp" alt="Apu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/review.webp" alt="Apu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/claude--xiangking">Claude</a> · by <a href="https://github.com/xiangking">@xiangking</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main claude--xiangking</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/idle.webp" alt="Claude idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waving.webp" alt="Claude waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/running-right.webp" alt="Claude running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waiting.webp" alt="Claude waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/review.webp" alt="Claude review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/twinkle-twinkle--twinkletwinkle">Dashun's Twinkle Twinkle</a> · by @twinkletwinkle · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twinkle-twinkle--twinkletwinkle</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/idle.webp" alt="Dashun's Twinkle Twinkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waving.webp" alt="Dashun's Twinkle Twinkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/running-right.webp" alt="Dashun's Twinkle Twinkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waiting.webp" alt="Dashun's Twinkle Twinkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/review.webp" alt="Dashun's Twinkle Twinkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diaoyi-baobao--d1a0y1bb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/idle.webp" alt="Diaoyi Baobao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waving.webp" alt="Diaoyi Baobao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/running-right.webp" alt="Diaoyi Baobao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waiting.webp" alt="Diaoyi Baobao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/review.webp" alt="Diaoyi Baobao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gpt-muse--opask">GPT-muse</a> · by @opask · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gpt-muse--opask</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/idle.webp" alt="GPT-muse idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waving.webp" alt="GPT-muse waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/running-right.webp" alt="GPT-muse running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waiting.webp" alt="GPT-muse waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/review.webp" alt="GPT-muse review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lulu--yogazz">Lulu</a> · by <a href="https://github.com/YoGazz">@YoGazz</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lulu--yogazz</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/idle.webp" alt="Lulu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waving.webp" alt="Lulu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/running-right.webp" alt="Lulu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waiting.webp" alt="Lulu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/review.webp" alt="Lulu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/saki--rookie-09">Saki</a> · by <a href="https://github.com/rookie-09">@rookie-09</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saki--rookie-09</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/idle.webp" alt="Saki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waving.webp" alt="Saki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/running-right.webp" alt="Saki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waiting.webp" alt="Saki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/review.webp" alt="Saki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wally--wally025">Wally</a> · by <a href="https://github.com/wally025">@wally025</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wally--wally025</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/idle.webp" alt="Wally idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waving.webp" alt="Wally waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/running-right.webp" alt="Wally running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waiting.webp" alt="Wally waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/review.webp" alt="Wally review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zhengyin--noonwake">Zhengyin</a> · by <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · Mascots · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zhengyin--noonwake</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/idle.webp" alt="Zhengyin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waving.webp" alt="Zhengyin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/running-right.webp" alt="Zhengyin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waiting.webp" alt="Zhengyin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/review.webp" alt="Zhengyin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/happynailong--aquaxyy">大笑奶龙</a> · by @aquaxyy · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main happynailong--aquaxyy</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/idle.webp" alt="大笑奶龙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waving.webp" alt="大笑奶龙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/running-right.webp" alt="大笑奶龙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waiting.webp" alt="大笑奶龙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/review.webp" alt="大笑奶龙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bubu-codebrew-bear--xxhh0822">布布</a> · by <a href="https://github.com/xxhh0822">@xxhh0822</a> · Mascots · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu-codebrew-bear--xxhh0822</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/idle.webp" alt="布布 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waving.webp" alt="布布 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/running-right.webp" alt="布布 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waiting.webp" alt="布布 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/review.webp" alt="布布 review" width="120" height="130"></td></tr>
</table>

### Animals

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/becky--natewanggg">Becky</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main becky--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/idle.webp" alt="Becky idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waving.webp" alt="Becky waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/running-right.webp" alt="Becky running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waiting.webp" alt="Becky waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/review.webp" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bubu--gbn666">Bubu</a> · by <a href="https://github.com/gbn666">@gbn666</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu--gbn666</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/idle.webp" alt="Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waving.webp" alt="Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/running-right.webp" alt="Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waiting.webp" alt="Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/review.webp" alt="Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · by <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main corgi-companion--cxian0928-afk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/idle.webp" alt="Corgi Companion idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waving.webp" alt="Corgi Companion waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/running-right.webp" alt="Corgi Companion running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waiting.webp" alt="Corgi Companion waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/review.webp" alt="Corgi Companion review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/desk-otter--zihualiu1997">Desk Otter</a> · by <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main desk-otter--zihualiu1997</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/idle.webp" alt="Desk Otter idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waving.webp" alt="Desk Otter waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/running-right.webp" alt="Desk Otter running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waiting.webp" alt="Desk Otter waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/review.webp" alt="Desk Otter review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diandian--lllucasxu">Diandian</a> · by <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diandian--lllucasxu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/idle.webp" alt="Diandian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waving.webp" alt="Diandian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/running-right.webp" alt="Diandian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waiting.webp" alt="Diandian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/review.webp" alt="Diandian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dudu-bubu--clembuilds">Dudu & Bubu</a> · by @clembuilds · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dudu-bubu--clembuilds</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/idle.webp" alt="Dudu & Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waving.webp" alt="Dudu & Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/running-right.webp" alt="Dudu & Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waiting.webp" alt="Dudu & Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/review.webp" alt="Dudu & Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ella-wave--sehjk">Ella Wave</a> · by @sehjk · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ella-wave--sehjk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/idle.webp" alt="Ella Wave idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waving.webp" alt="Ella Wave waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/running-right.webp" alt="Ella Wave running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waiting.webp" alt="Ella Wave waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/review.webp" alt="Ella Wave review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/fleta--natewanggg">Fleta</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fleta--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/idle.webp" alt="Fleta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waving.webp" alt="Fleta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/running-right.webp" alt="Fleta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waiting.webp" alt="Fleta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/review.webp" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/frankie--aygunvarol">Frankie</a> · by <a href="https://github.com/AygunVarol">@AygunVarol</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frankie--aygunvarol</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/idle.webp" alt="Frankie idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waving.webp" alt="Frankie waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/running-right.webp" alt="Frankie running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waiting.webp" alt="Frankie waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/review.webp" alt="Frankie review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jiji--yena">Jiji</a> · by @yena · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jiji--yena</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/idle.webp" alt="Jiji idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waving.webp" alt="Jiji waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/running-right.webp" alt="Jiji running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waiting.webp" alt="Jiji waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/review.webp" alt="Jiji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kiko--untko">Kiko</a> · by <a href="https://github.com/untko">@untko</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kiko--untko</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/idle.webp" alt="Kiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waving.webp" alt="Kiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/running-right.webp" alt="Kiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waiting.webp" alt="Kiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/review.webp" alt="Kiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kimoju--andiac">Kimoju</a> · by @andiac · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kimoju--andiac</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/idle.webp" alt="Kimoju idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waving.webp" alt="Kimoju waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/running-right.webp" alt="Kimoju running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waiting.webp" alt="Kimoju waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/review.webp" alt="Kimoju review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lil-swole--gg0805">Lil Swole</a> · by <a href="https://github.com/gg0805">@gg0805</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lil-swole--gg0805</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/idle.webp" alt="Lil Swole idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waving.webp" alt="Lil Swole waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/running-right.webp" alt="Lil Swole running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waiting.webp" alt="Lil Swole waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/review.webp" alt="Lil Swole review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/little-sheep--mingdong">Little Sheep</a> · by @MingDong · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-sheep--mingdong</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/idle.webp" alt="Little Sheep idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waving.webp" alt="Little Sheep waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/running-right.webp" alt="Little Sheep running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waiting.webp" alt="Little Sheep waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/review.webp" alt="Little Sheep review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mai--dwdestiny">Mai</a> · by <a href="https://github.com/DwDestiny">@DwDestiny</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mai--dwdestiny</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/idle.webp" alt="Mai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waving.webp" alt="Mai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/running-right.webp" alt="Mai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waiting.webp" alt="Mai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/review.webp" alt="Mai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mellow-duck--sally-entr">Mellow Duck</a> · by @sally-entr · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mellow-duck--sally-entr</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/idle.webp" alt="Mellow Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waving.webp" alt="Mellow Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/running-right.webp" alt="Mellow Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waiting.webp" alt="Mellow Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/review.webp" alt="Mellow Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mimi--spacebody">Mimi</a> · by <a href="https://github.com/Spacebody">@Spacebody</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mimi--spacebody</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/idle.webp" alt="Mimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waving.webp" alt="Mimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/running-right.webp" alt="Mimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waiting.webp" alt="Mimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/review.webp" alt="Mimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/moomew-coder-cat--ping">MooMew Coder</a> · by @ping · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main moomew-coder-cat--ping</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/idle.webp" alt="MooMew Coder idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waving.webp" alt="MooMew Coder waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/running-right.webp" alt="MooMew Coder running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waiting.webp" alt="MooMew Coder waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/review.webp" alt="MooMew Coder review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/panda--jason-bai">Panda</a> · by <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main panda--jason-bai</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/idle.webp" alt="Panda idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waving.webp" alt="Panda waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/running-right.webp" alt="Panda running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waiting.webp" alt="Panda waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/review.webp" alt="Panda review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · by <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main pixel-duck--flamurmaliqi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/idle.webp" alt="Pixel Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waving.webp" alt="Pixel Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/running-right.webp" alt="Pixel Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waiting.webp" alt="Pixel Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/review.webp" alt="Pixel Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rook--klubbyte">Rook</a> · by @klubbyte · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rook--klubbyte</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/idle.webp" alt="Rook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waving.webp" alt="Rook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/running-right.webp" alt="Rook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waiting.webp" alt="Rook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/review.webp" alt="Rook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miu-meo--lemon-z">SalaryCat</a> · by @lemon-z · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miu-meo--lemon-z</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/idle.webp" alt="SalaryCat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waving.webp" alt="SalaryCat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/running-right.webp" alt="SalaryCat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waiting.webp" alt="SalaryCat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/review.webp" alt="SalaryCat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/salary-cat--zuochunjie">SalaryCat</a> · by <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main salary-cat--zuochunjie</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/idle.webp" alt="SalaryCat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waving.webp" alt="SalaryCat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/running-right.webp" alt="SalaryCat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waiting.webp" alt="SalaryCat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/review.webp" alt="SalaryCat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sunny-retriever--legeling">Sunny Retriever</a> · by <a href="https://github.com/legeling">@legeling</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sunny-retriever--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/idle.webp" alt="Sunny Retriever idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waving.webp" alt="Sunny Retriever waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/running-right.webp" alt="Sunny Retriever running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waiting.webp" alt="Sunny Retriever waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/review.webp" alt="Sunny Retriever review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/teddy--danieloleary">Teddy</a> · by <a href="https://github.com/danieloleary">@danieloleary</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main teddy--danieloleary</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/idle.webp" alt="Teddy idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waving.webp" alt="Teddy waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/running-right.webp" alt="Teddy running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waiting.webp" alt="Teddy waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/review.webp" alt="Teddy review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tian-hua-hua--d1a0y1bb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/idle.webp" alt="Tian Hua Hua idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waving.webp" alt="Tian Hua Hua waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/running-right.webp" alt="Tian Hua Hua running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waiting.webp" alt="Tian Hua Hua waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/review.webp" alt="Tian Hua Hua review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/usachi--jack">乌萨奇</a> · by @jack · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main usachi--jack</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/idle.webp" alt="乌萨奇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waving.webp" alt="乌萨奇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/running-right.webp" alt="乌萨奇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waiting.webp" alt="乌萨奇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/review.webp" alt="乌萨奇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yuanbao--legeling">元宝</a> · by <a href="https://github.com/legeling">@legeling</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuanbao--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yuanbao--legeling/webp/idle.webp" alt="元宝 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanbao--legeling/webp/waving.webp" alt="元宝 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanbao--legeling/webp/running-right.webp" alt="元宝 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanbao--legeling/webp/waiting.webp" alt="元宝 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanbao--legeling/webp/review.webp" alt="元宝 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · by @1wphantom · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dai-dai-nai-you--1wphantom</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/idle.webp" alt="呆呆奶油 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waving.webp" alt="呆呆奶油 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/running-right.webp" alt="呆呆奶油 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waiting.webp" alt="呆呆奶油 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/review.webp" alt="呆呆奶油 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tuantuan--jbbom">团团</a> · by <a href="https://github.com/JbBom">@JbBom</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tuantuan--jbbom</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/idle.webp" alt="团团 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waving.webp" alt="团团 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/running-right.webp" alt="团团 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waiting.webp" alt="团团 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/review.webp" alt="团团 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/duodong--froggie">多栋</a> · by @froggie · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main duodong--froggie</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/idle.webp" alt="多栋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waving.webp" alt="多栋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/running-right.webp" alt="多栋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waiting.webp" alt="多栋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/review.webp" alt="多栋 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/naiwa--sandytruant">奶蛙</a> · by <a href="https://github.com/sandytruant">@sandytruant</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main naiwa--sandytruant</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/idle.webp" alt="奶蛙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waving.webp" alt="奶蛙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/running-right.webp" alt="奶蛙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waiting.webp" alt="奶蛙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/review.webp" alt="奶蛙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xiaoba-cat--jack">小八猫</a> · by @jack · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaoba-cat--jack</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/idle.webp" alt="小八猫 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waving.webp" alt="小八猫 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/running-right.webp" alt="小八猫 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waiting.webp" alt="小八猫 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/review.webp" alt="小八猫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xiaomai--brian-3">小麦 XiaoMai</a> · by @brian-3 · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaomai--brian-3</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/idle.webp" alt="小麦 XiaoMai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waving.webp" alt="小麦 XiaoMai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/running-right.webp" alt="小麦 XiaoMai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waiting.webp" alt="小麦 XiaoMai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/review.webp" alt="小麦 XiaoMai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/koukou-penguin--hoody">扣扣企鹅</a> · by @hoody · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main koukou-penguin--hoody</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/idle.webp" alt="扣扣企鹅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waving.webp" alt="扣扣企鹅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/running-right.webp" alt="扣扣企鹅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waiting.webp" alt="扣扣企鹅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/review.webp" alt="扣扣企鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/capybara-lulu--jiushu">水豚噜噜</a> · by @jiushu · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main capybara-lulu--jiushu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/idle.webp" alt="水豚噜噜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waving.webp" alt="水豚噜噜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/running-right.webp" alt="水豚噜噜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waiting.webp" alt="水豚噜噜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/review.webp" alt="水豚噜噜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/niumou--jarvis-2">牛哞</a> · by @jarvis-2 · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main niumou--jarvis-2</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/idle.webp" alt="牛哞 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waving.webp" alt="牛哞 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/running-right.webp" alt="牛哞 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waiting.webp" alt="牛哞 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/review.webp" alt="牛哞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zichao-xiong--z-kzhang">自嘲熊</a> · by @z-kzhang · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zichao-xiong--z-kzhang</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/idle.webp" alt="自嘲熊 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waving.webp" alt="自嘲熊 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/running-right.webp" alt="自嘲熊 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waiting.webp" alt="自嘲熊 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/review.webp" alt="自嘲熊 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jinmao--legeling">金毛</a> · by <a href="https://github.com/legeling">@legeling</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jinmao--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/idle.webp" alt="金毛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waving.webp" alt="金毛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/running-right.webp" alt="金毛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waiting.webp" alt="金毛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/review.webp" alt="金毛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wucanrou--ch">金渐层（午餐肉）</a> · by <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wucanrou--ch</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/idle.webp" alt="金渐层（午餐肉） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waving.webp" alt="金渐层（午餐肉） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/running-right.webp" alt="金渐层（午餐肉） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waiting.webp" alt="金渐层（午餐肉） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/review.webp" alt="金渐层（午餐肉） review" width="120" height="130"></td></tr>
</table>

### Fantasy Creatures

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/behemoth--kajdrak2">Behemoth</a> · by <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · Fantasy Creatures · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main behemoth--kajdrak2</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/idle.webp" alt="Behemoth idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waving.webp" alt="Behemoth waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/running-right.webp" alt="Behemoth running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waiting.webp" alt="Behemoth waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/review.webp" alt="Behemoth review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/goblin--rkwap">Goblin</a> · by @rkwap · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main goblin--rkwap</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/idle.webp" alt="Goblin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waving.webp" alt="Goblin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/running-right.webp" alt="Goblin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waiting.webp" alt="Goblin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/review.webp" alt="Goblin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/luna-angel-cat--neve">luna_angel cat</a> · by @neve · Fantasy Creatures · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luna-angel-cat--neve</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/idle.webp" alt="luna_angel cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waving.webp" alt="luna_angel cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/running-right.webp" alt="luna_angel cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waiting.webp" alt="luna_angel cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/review.webp" alt="luna_angel cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/night-neko--netizenxuan">Night Neko</a> · by <a href="https://github.com/netizenXuan">@netizenXuan</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main night-neko--netizenxuan</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/idle.webp" alt="Night Neko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waving.webp" alt="Night Neko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/running-right.webp" alt="Night Neko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waiting.webp" alt="Night Neko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/review.webp" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/starcorn--alterhq">Starcorn</a> · by <a href="https://github.com/alterhq">@alterhq</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main starcorn--alterhq</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/idle.webp" alt="Starcorn idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waving.webp" alt="Starcorn waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/running-right.webp" alt="Starcorn running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waiting.webp" alt="Starcorn waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/review.webp" alt="Starcorn review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · by <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xian-xiao-lu--qingyunagi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/idle.webp" alt="Xian Xiao Lu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waving.webp" alt="Xian Xiao Lu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/running-right.webp" alt="Xian Xiao Lu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waiting.webp" alt="Xian Xiao Lu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/review.webp" alt="Xian Xiao Lu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yuanzai--gaming33">Yuanzai</a> · by <a href="https://github.com/Gaming33">@Gaming33</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuanzai--gaming33</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/idle.webp" alt="Yuanzai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waving.webp" alt="Yuanzai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/running-right.webp" alt="Yuanzai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waiting.webp" alt="Yuanzai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/review.webp" alt="Yuanzai review" width="120" height="130"></td></tr>
</table>

### Robots

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chispa--giiilberto-nm">Chispa</a> · by @giiilberto-nm · Robots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chispa--giiilberto-nm</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/idle.webp" alt="Chispa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waving.webp" alt="Chispa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/running-right.webp" alt="Chispa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waiting.webp" alt="Chispa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/review.webp" alt="Chispa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/codenono--dq02">CodeNoNo</a> · by <a href="https://github.com/Dqd02">@Dqd02</a> · Robots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main codenono--dq02</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/idle.webp" alt="CodeNoNo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waving.webp" alt="CodeNoNo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/running-right.webp" alt="CodeNoNo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waiting.webp" alt="CodeNoNo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/review.webp" alt="CodeNoNo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xiaoda--legeling">小达</a> · by <a href="https://github.com/legeling">@legeling</a> · Robots · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaoda--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xiaoda--legeling/webp/idle.webp" alt="小达 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoda--legeling/webp/waving.webp" alt="小达 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoda--legeling/webp/running-right.webp" alt="小达 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoda--legeling/webp/waiting.webp" alt="小达 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoda--legeling/webp/review.webp" alt="小达 review" width="120" height="130"></td></tr>
</table>

### Human Avatars

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/azuma--tairazuma">Azuma</a> · by @tairazuma · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main azuma--tairazuma</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/idle.webp" alt="Azuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waving.webp" alt="Azuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/running-right.webp" alt="Azuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waiting.webp" alt="Azuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/review.webp" alt="Azuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tangdouren--carl312">Tangdouren</a> · by <a href="https://github.com/Carl-312">@Carl-312</a> · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tangdouren--carl312</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/idle.webp" alt="Tangdouren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waving.webp" alt="Tangdouren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/running-right.webp" alt="Tangdouren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waiting.webp" alt="Tangdouren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/review.webp" alt="Tangdouren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/guga--circus">咕嘎</a> · by @circus · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main guga--circus</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/idle.webp" alt="咕嘎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waving.webp" alt="咕嘎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/running-right.webp" alt="咕嘎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waiting.webp" alt="咕嘎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/review.webp" alt="咕嘎 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/fengge--qzl1-stack">峰哥</a> · by <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fengge--qzl1-stack</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/idle.webp" alt="峰哥 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waving.webp" alt="峰哥 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/running-right.webp" alt="峰哥 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waiting.webp" alt="峰哥 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/review.webp" alt="峰哥 review" width="120" height="130"></td></tr>
</table>

### Memes

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/drill-cat--qimi">Drill Cat</a> · by <a href="https://github.com/qishichuan">@qishichuan</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main drill-cat--qimi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/idle.webp" alt="Drill Cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waving.webp" alt="Drill Cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/running-right.webp" alt="Drill Cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waiting.webp" alt="Drill Cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/review.webp" alt="Drill Cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hami--tat">Hami</a> · by <a href="https://github.com/TATcc">@TATcc</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hami--tat</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/idle.webp" alt="Hami idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waving.webp" alt="Hami waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/running-right.webp" alt="Hami running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waiting.webp" alt="Hami waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/review.webp" alt="Hami review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · by <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · Memes · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main katana-cheems--thankyou-cheems</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/idle.webp" alt="Katana Cheems idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waving.webp" alt="Katana Cheems waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/running-right.webp" alt="Katana Cheems running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waiting.webp" alt="Katana Cheems waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/review.webp" alt="Katana Cheems review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hance-woniu--korn">旱厕蜗牛</a> · by @korn · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hance-woniu--korn</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/idle.webp" alt="旱厕蜗牛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waving.webp" alt="旱厕蜗牛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/running-right.webp" alt="旱厕蜗牛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waiting.webp" alt="旱厕蜗牛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/review.webp" alt="旱厕蜗牛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/niulai--legeling">牛来</a> · by <a href="https://github.com/legeling">@legeling</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main niulai--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/niulai--legeling/webp/idle.webp" alt="牛来 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niulai--legeling/webp/waving.webp" alt="牛来 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niulai--legeling/webp/running-right.webp" alt="牛来 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niulai--legeling/webp/waiting.webp" alt="牛来 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niulai--legeling/webp/review.webp" alt="牛来 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/maodie--octane0411">耄耋</a> · by <a href="https://github.com/Octane0411">@Octane0411</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main maodie--octane0411</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/idle.webp" alt="耄耋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waving.webp" alt="耄耋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/running-right.webp" alt="耄耋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waiting.webp" alt="耄耋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/review.webp" alt="耄耋 review" width="120" height="130"></td></tr>
</table>

### Objects & Props

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/spellbook--seymour">Spellbook</a> · by @seymour · Objects & Props · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main spellbook--seymour</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/idle.webp" alt="Spellbook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waving.webp" alt="Spellbook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/running-right.webp" alt="Spellbook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waiting.webp" alt="Spellbook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/review.webp" alt="Spellbook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tiny-crt--chochou">Tiny CRT</a> · by @chochou · Objects & Props · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tiny-crt--chochou</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/idle.webp" alt="Tiny CRT idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waving.webp" alt="Tiny CRT waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/running-right.webp" alt="Tiny CRT running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waiting.webp" alt="Tiny CRT waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/review.webp" alt="Tiny CRT review" width="120" height="130"></td></tr>
</table>

### Others

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/agamemnon--kazecreator">Agamemnon</a> · by <a href="https://github.com/kazecreator">@kazecreator</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main agamemnon--kazecreator</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/agamemnon--kazecreator/webp/idle.webp" alt="Agamemnon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/agamemnon--kazecreator/webp/waving.webp" alt="Agamemnon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/agamemnon--kazecreator/webp/running-right.webp" alt="Agamemnon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/agamemnon--kazecreator/webp/waiting.webp" alt="Agamemnon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/agamemnon--kazecreator/webp/review.webp" alt="Agamemnon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/deepseek-girl--legeling">DeepSeek Girl</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main deepseek-girl--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/deepseek-girl--legeling/webp/idle.webp" alt="DeepSeek Girl idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/deepseek-girl--legeling/webp/waving.webp" alt="DeepSeek Girl waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/deepseek-girl--legeling/webp/running-right.webp" alt="DeepSeek Girl running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/deepseek-girl--legeling/webp/waiting.webp" alt="DeepSeek Girl waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/deepseek-girl--legeling/webp/review.webp" alt="DeepSeek Girl review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sylas-ravenshade--legeling">Sylas Ravenshade</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sylas-ravenshade--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sylas-ravenshade--legeling/webp/idle.webp" alt="Sylas Ravenshade idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sylas-ravenshade--legeling/webp/waving.webp" alt="Sylas Ravenshade waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sylas-ravenshade--legeling/webp/running-right.webp" alt="Sylas Ravenshade running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sylas-ravenshade--legeling/webp/waiting.webp" alt="Sylas Ravenshade waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sylas-ravenshade--legeling/webp/review.webp" alt="Sylas Ravenshade review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/templar-knight--jorge-cuevas90003">Templar Knight</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main templar-knight--jorge-cuevas90003</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/templar-knight--jorge-cuevas90003/webp/idle.webp" alt="Templar Knight idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/templar-knight--jorge-cuevas90003/webp/waving.webp" alt="Templar Knight waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/templar-knight--jorge-cuevas90003/webp/running-right.webp" alt="Templar Knight running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/templar-knight--jorge-cuevas90003/webp/waiting.webp" alt="Templar Knight waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/templar-knight--jorge-cuevas90003/webp/review.webp" alt="Templar Knight review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/march-7th--legeling">March 7th</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main march-7th--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/march-7th--legeling/webp/idle.webp" alt="March 7th idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--legeling/webp/waving.webp" alt="March 7th waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--legeling/webp/running-right.webp" alt="March 7th running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--legeling/webp/waiting.webp" alt="March 7th waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--legeling/webp/review.webp" alt="March 7th review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kuromi--legeling">Kuromi</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuromi--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/idle.webp" alt="Kuromi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waving.webp" alt="Kuromi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/running-right.webp" alt="Kuromi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waiting.webp" alt="Kuromi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/review.webp" alt="Kuromi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xingxingren--legeling">Star Person</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xingxingren--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/idle.webp" alt="Star Person idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waving.webp" alt="Star Person waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/running-right.webp" alt="Star Person running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waiting.webp" alt="Star Person waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/review.webp" alt="Star Person review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/izumi-konata--legeling">Izumi Konata</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main izumi-konata--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/izumi-konata--legeling/webp/idle.webp" alt="Izumi Konata idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/izumi-konata--legeling/webp/waving.webp" alt="Izumi Konata waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/izumi-konata--legeling/webp/running-right.webp" alt="Izumi Konata running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/izumi-konata--legeling/webp/waiting.webp" alt="Izumi Konata waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/izumi-konata--legeling/webp/review.webp" alt="Izumi Konata review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yanlingji--jorge-cuevas90003">Yan Lingji</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yanlingji--jorge-cuevas90003</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/idle.webp" alt="Yan Lingji idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waving.webp" alt="Yan Lingji waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/running-right.webp" alt="Yan Lingji running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waiting.webp" alt="Yan Lingji waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/review.webp" alt="Yan Lingji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yao-true-self-hertz--legeling">Yao: True Self Hertz</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yao-true-self-hertz--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yao-true-self-hertz--legeling/webp/idle.webp" alt="Yao: True Self Hertz idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yao-true-self-hertz--legeling/webp/waving.webp" alt="Yao: True Self Hertz waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yao-true-self-hertz--legeling/webp/running-right.webp" alt="Yao: True Self Hertz running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yao-true-self-hertz--legeling/webp/waiting.webp" alt="Yao: True Self Hertz waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yao-true-self-hertz--legeling/webp/review.webp" alt="Yao: True Self Hertz review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/twilight-sparkle--wuye3790">紫悦</a> · by <a href="https://github.com/WuYe3790">@WuYe3790</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twilight-sparkle--wuye3790</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/idle.webp" alt="紫悦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waving.webp" alt="紫悦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/running-right.webp" alt="紫悦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waiting.webp" alt="紫悦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/review.webp" alt="紫悦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/longying--legeling">胧萤</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main longying--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/idle.webp" alt="胧萤 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waving.webp" alt="胧萤 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/running-right.webp" alt="胧萤 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waiting.webp" alt="胧萤 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/review.webp" alt="胧萤 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bond-forger--legeling">Bond Forger</a> · by <a href="https://github.com/legeling">@legeling</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bond-forger--legeling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/idle.webp" alt="Bond Forger idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waving.webp" alt="Bond Forger waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/running-right.webp" alt="Bond Forger running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waiting.webp" alt="Bond Forger waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/review.webp" alt="Bond Forger review" width="120" height="130"></td></tr>
</table>

## Request or Submit a Pet

Missing a favorite character? Open the [free community request page](https://codexpet.top/request). Submitting is free, no spritesheet is required, and a community contributor may volunteer to make the pet. Requests are not acceptance or delivery promises.

Contributors can start with the [website contribution guide](https://codexpet.top/guide). It offers three paths without making every contributor download this large asset repository:

1. **Request a pet** — Codex checks for duplicates, gathers references and requirements, then opens a labeled request issue.
2. **Create or submit your own pet** — Codex can start from references or existing files, complete and validate the three-file package, then use the GitHub API to create a focused branch and pull request without a full clone.
3. **Advanced pull request** — experienced contributors can work in a GitHub Codespace, a partial clone, or their preferred Git workflow.

The repository skill at [`.agents/skills/submit-codex-pet`](./.agents/skills/submit-codex-pet) teaches compatible AI agents how to choose the right route. When credentials or repository write access are unavailable, it falls back to a labeled submission issue instead of losing the contributor's work.

Advanced contributors should add exactly one final package:

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

Use `pet-slug--author-slug` so multiple authors can ship variants of the same character. A v1 submission may omit `spriteVersionNumber` and must provide a `1536x1872` WebP. A v2 submission must set `spriteVersionNumber: 2` and provide a `1536x2288` WebP.

The v2 runtime manifest looks like:

```json
{
  "id": "pet-slug--author-slug",
  "displayName": "Pet Name",
  "description": "One short sentence.",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

Generated previews and README listings are produced by CI:

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

Contributor PRs should only include `submission.json`, `pet.json`, and `spritesheet.webp`. Do not submit prompts, references, QA folders, contact sheets, videos, decoded frames, or Hatch Pet run directories. Maintainers or CI regenerate previews, README listings, and `pets.json` after merge, but preview binaries are not kept as tracked Git assets.

## Make a Pet

- [.agents/skills/submit-codex-pet](./.agents/skills/submit-codex-pet) — request community production, create or submit your own pet through the GitHub API, or prepare an advanced PR
- [.agents/skills/hatch-pet-v1](./.agents/skills/hatch-pet-v1) — preserve or repair a legacy 8x9 v1 pet
- [.agents/skills/hatch-pet-v2](./.agents/skills/hatch-pet-v2) — create or upgrade an 8x11 v2 pet with 16 look directions

Choose the skill explicitly. For an upgrade, give `$hatch-pet-v2` the existing installed `pet.json` and `spritesheet.webp`; approved rows 0–8 are retained rather than regenerated.

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- 한국어: [docs/ko](./docs/ko)
- 日本語: [docs/ja](./docs/ja)
- Español: [docs/es](./docs/es)
- Web gallery source: [web/](./web)
- Stats worker: [worker/](./worker)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Star History

[![GitHub star history for Awesome Codex Pet](./assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

The chart is refreshed daily from GitHub's stargazer data. [Star the repository](https://github.com/legeling/awesome-codex-pet) to help more people discover these pets.

## Contributors

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet contributors">
</a>

Thanks to everyone who contributes pets, code, documentation, reviews, and ideas.

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
