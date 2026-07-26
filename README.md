<div align="center">

# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

<h2><a href="https://codexpet.top">Open the curated gallery at codexpet.top →</a></h2>

<p><strong>The website is the primary experience.</strong> Browse complete animations, collections, creator pages, community favorites, and install any pet without cloning this repository.</p>

<p><a href="https://codexpet.top"><strong>Browse pets</strong></a> · <a href="https://codexpet.top/install"><strong>Install a pet</strong></a> · <a href="https://codexpet.top/guide"><strong>Craft and submit</strong></a></p>

<a href="https://codexpet.top"><img src="./assets/cover/awesome-codex-pet-cover.png" alt="Open the Awesome Codex Pet gallery"></a>

![pets: 165](https://img.shields.io/badge/pets-165-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

</div>

This repository is the source catalog behind [codexpet.top](https://codexpet.top): it keeps installable pet packages, creator attribution, collection metadata, validation tools, and contribution history. For browsing and installing pets, start with the website.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Selected pet gallery** — complete animation previews, collections, creator credits, sharing, and community statistics at [codexpet.top](https://codexpet.top)
- **AI-first contributions** — open the workflow in local Codex or copy its prompt, then request community production or create and submit your own pet; advanced contributors can still open a PR
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
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/gifs/idle.gif" alt="Firefly idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/gifs/waving.gif" alt="Firefly waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/gifs/running-right.gif" alt="Firefly running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/gifs/waiting.gif" alt="Firefly waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/gifs/review.gif" alt="Firefly review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/acheron--lingxiaotian">Acheron</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- acheron--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/gifs/idle.gif" alt="Acheron idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/gifs/waving.gif" alt="Acheron waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/gifs/running-right.gif" alt="Acheron running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/gifs/waiting.gif" alt="Acheron waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/gifs/review.gif" alt="Acheron review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/arlecchino--lingxiaotian">Arlecchino</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- arlecchino--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/gifs/idle.gif" alt="Arlecchino idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/gifs/waving.gif" alt="Arlecchino waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/gifs/running-right.gif" alt="Arlecchino running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/gifs/waiting.gif" alt="Arlecchino waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/gifs/review.gif" alt="Arlecchino review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/black-swan--lingxiaotian">Black Swan</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- black-swan--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/gifs/idle.gif" alt="Black Swan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/gifs/waving.gif" alt="Black Swan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/gifs/running-right.gif" alt="Black Swan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/gifs/waiting.gif" alt="Black Swan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/gifs/review.gif" alt="Black Swan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/buba--yurcek">Buba</a> · by @yurcek · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- buba--yurcek</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/buba--yurcek/gifs/idle.gif" alt="Buba idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/gifs/waving.gif" alt="Buba waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/gifs/running-right.gif" alt="Buba running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/gifs/waiting.gif" alt="Buba waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/gifs/review.gif" alt="Buba review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/castorice--lingxiaotian">Castorice</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- castorice--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/gifs/idle.gif" alt="Castorice idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/gifs/waving.gif" alt="Castorice waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/gifs/running-right.gif" alt="Castorice running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/gifs/waiting.gif" alt="Castorice waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/gifs/review.gif" alt="Castorice review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chen--chenxin-dlut">Ch'en</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- chen--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/gifs/idle.gif" alt="Ch'en idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/gifs/waving.gif" alt="Ch'en waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/gifs/running-right.gif" alt="Ch'en running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/gifs/waiting.gif" alt="Ch'en waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/gifs/review.gif" alt="Ch'en review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/cyrene--lingxiaotian">Cyrene</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- cyrene--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/gifs/idle.gif" alt="Cyrene idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/gifs/waving.gif" alt="Cyrene waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/gifs/running-right.gif" alt="Cyrene running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/gifs/waiting.gif" alt="Cyrene waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/gifs/review.gif" alt="Cyrene review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dimo-stand--god-wu">Dimo</a> · by @god-wu · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dimo-stand--god-wu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/gifs/idle.gif" alt="Dimo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/gifs/waving.gif" alt="Dimo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/gifs/running-right.gif" alt="Dimo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/gifs/waiting.gif" alt="Dimo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/gifs/review.gif" alt="Dimo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doro--lingxiaotian">Doro</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- doro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/gifs/idle.gif" alt="Doro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/gifs/waving.gif" alt="Doro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/gifs/running-right.gif" alt="Doro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/gifs/waiting.gif" alt="Doro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/gifs/review.gif" alt="Doro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/feixiao--lingxiaotian">Feixiao</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- feixiao--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/gifs/idle.gif" alt="Feixiao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/gifs/waving.gif" alt="Feixiao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/gifs/running-right.gif" alt="Feixiao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/gifs/waiting.gif" alt="Feixiao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/gifs/review.gif" alt="Feixiao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/furina--lingxiaotian">Furina</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- furina--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/gifs/idle.gif" alt="Furina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/gifs/waving.gif" alt="Furina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/gifs/running-right.gif" alt="Furina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/gifs/waiting.gif" alt="Furina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/gifs/review.gif" alt="Furina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ganyu--chenxin-dlut">Ganyu</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ganyu--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/gifs/idle.gif" alt="Ganyu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/gifs/waving.gif" alt="Ganyu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/gifs/running-right.gif" alt="Ganyu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/gifs/waiting.gif" alt="Ganyu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/gifs/review.gif" alt="Ganyu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hu-tao--lingxiaotian">Hu Tao</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hu-tao--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/gifs/idle.gif" alt="Hu Tao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/gifs/waving.gif" alt="Hu Tao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/gifs/running-right.gif" alt="Hu Tao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/gifs/waiting.gif" alt="Hu Tao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/gifs/review.gif" alt="Hu Tao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hyacine--kurisu">Hyacine</a> · by <a href="https://github.com/kurisu994">@kurisu994</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hyacine--kurisu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/gifs/idle.gif" alt="Hyacine idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/gifs/waving.gif" alt="Hyacine waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/gifs/running-right.gif" alt="Hyacine running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/gifs/waiting.gif" alt="Hyacine waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/gifs/review.gif" alt="Hyacine review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/isaac--foggy-whale">Isaac</a> · by <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- isaac--foggy-whale</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/gifs/idle.gif" alt="Isaac idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/gifs/waving.gif" alt="Isaac waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/gifs/running-right.gif" alt="Isaac running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/gifs/waiting.gif" alt="Isaac waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/gifs/review.gif" alt="Isaac review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kamisato-ayaka--lingxiaotian">Kamisato Ayaka</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kamisato-ayaka--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/gifs/idle.gif" alt="Kamisato Ayaka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/gifs/waving.gif" alt="Kamisato Ayaka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/gifs/running-right.gif" alt="Kamisato Ayaka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/gifs/waiting.gif" alt="Kamisato Ayaka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/gifs/review.gif" alt="Kamisato Ayaka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/klee--chenxin-dlut">Klee</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- klee--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/gifs/idle.gif" alt="Klee idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/gifs/waving.gif" alt="Klee waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/gifs/running-right.gif" alt="Klee running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/gifs/waiting.gif" alt="Klee waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/gifs/review.gif" alt="Klee review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lappland--chenxin-dlut">Lappland</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- lappland--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/gifs/idle.gif" alt="Lappland idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/gifs/waving.gif" alt="Lappland waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/gifs/running-right.gif" alt="Lappland running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/gifs/waiting.gif" alt="Lappland waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/gifs/review.gif" alt="Lappland review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/little-black-mage--libertis">Little Black Mage</a> · by @libertis · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- little-black-mage--libertis</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/gifs/idle.gif" alt="Little Black Mage idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/gifs/waving.gif" alt="Little Black Mage waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/gifs/running-right.gif" alt="Little Black Mage running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/gifs/waiting.gif" alt="Little Black Mage waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/gifs/review.gif" alt="Little Black Mage review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/march-7th--chenxin-dlut">March 7th</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- march-7th--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/gifs/idle.gif" alt="March 7th idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/gifs/waving.gif" alt="March 7th waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/gifs/running-right.gif" alt="March 7th running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/gifs/waiting.gif" alt="March 7th waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/gifs/review.gif" alt="March 7th review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miyabi--eric-terminal">Miyabi</a> · by <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miyabi--eric-terminal</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/gifs/idle.gif" alt="Miyabi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/gifs/waving.gif" alt="Miyabi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/gifs/running-right.gif" alt="Miyabi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/gifs/waiting.gif" alt="Miyabi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/gifs/review.gif" alt="Miyabi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nahida--lingxiaotian">Nahida</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- nahida--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/gifs/idle.gif" alt="Nahida idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/gifs/waving.gif" alt="Nahida waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/gifs/running-right.gif" alt="Nahida running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/gifs/waiting.gif" alt="Nahida waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/gifs/review.gif" alt="Nahida review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/navia--lingxiaotian">Navia</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- navia--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/gifs/idle.gif" alt="Navia idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/gifs/waving.gif" alt="Navia waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/gifs/running-right.gif" alt="Navia running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/gifs/waiting.gif" alt="Navia waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/gifs/review.gif" alt="Navia review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/paimon--lingxiaotian">Paimon</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- paimon--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/gifs/idle.gif" alt="Paimon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/gifs/waving.gif" alt="Paimon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/gifs/running-right.gif" alt="Paimon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/gifs/waiting.gif" alt="Paimon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/gifs/review.gif" alt="Paimon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/phoebe--chenxin-dlut">Phoebe</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- phoebe--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/gifs/idle.gif" alt="Phoebe idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/gifs/waving.gif" alt="Phoebe waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/gifs/running-right.gif" alt="Phoebe running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/gifs/waiting.gif" alt="Phoebe waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/gifs/review.gif" alt="Phoebe review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/raiden-shogun--lingxiaotian">Raiden Shogun</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- raiden-shogun--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/gifs/idle.gif" alt="Raiden Shogun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/gifs/waving.gif" alt="Raiden Shogun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/gifs/running-right.gif" alt="Raiden Shogun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/gifs/waiting.gif" alt="Raiden Shogun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/gifs/review.gif" alt="Raiden Shogun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/reimu--lingxiaotian">Reimu</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- reimu--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/gifs/idle.gif" alt="Reimu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/gifs/waving.gif" alt="Reimu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/gifs/running-right.gif" alt="Reimu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/gifs/waiting.gif" alt="Reimu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/gifs/review.gif" alt="Reimu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/robin--lingxiaotian">Robin</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- robin--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/gifs/idle.gif" alt="Robin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/gifs/waving.gif" alt="Robin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/gifs/running-right.gif" alt="Robin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/gifs/waiting.gif" alt="Robin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/gifs/review.gif" alt="Robin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ruan-mei--lingxiaotian">Ruan Mei</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ruan-mei--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/gifs/idle.gif" alt="Ruan Mei idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/gifs/waving.gif" alt="Ruan Mei waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/gifs/running-right.gif" alt="Ruan Mei running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/gifs/waiting.gif" alt="Ruan Mei waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/gifs/review.gif" alt="Ruan Mei review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/silver-wolf--lingxiaotian">Silver Wolf</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- silver-wolf--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/gifs/idle.gif" alt="Silver Wolf idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/gifs/waving.gif" alt="Silver Wolf waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/gifs/running-right.gif" alt="Silver Wolf running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/gifs/waiting.gif" alt="Silver Wolf waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/gifs/review.gif" alt="Silver Wolf review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sonetto--chenxin-dlut">Sonetto</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- sonetto--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/gifs/idle.gif" alt="Sonetto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/gifs/waving.gif" alt="Sonetto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/gifs/running-right.gif" alt="Sonetto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/gifs/waiting.gif" alt="Sonetto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/gifs/review.gif" alt="Sonetto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/sparkle--lingxiaotian">Sparkle</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- sparkle--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/gifs/idle.gif" alt="Sparkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/gifs/waving.gif" alt="Sparkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/gifs/running-right.gif" alt="Sparkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/gifs/waiting.gif" alt="Sparkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/gifs/review.gif" alt="Sparkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tingyun--lingxiaotian">Tingyun</a> · by <a href="https://github.com/legeling">@legeling</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tingyun--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/gifs/idle.gif" alt="Tingyun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/gifs/waving.gif" alt="Tingyun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/gifs/running-right.gif" alt="Tingyun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/gifs/waiting.gif" alt="Tingyun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/gifs/review.gif" alt="Tingyun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/vertin--chenxin-dlut">Vertin</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- vertin--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/gifs/idle.gif" alt="Vertin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/gifs/waving.gif" alt="Vertin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/gifs/running-right.gif" alt="Vertin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/gifs/waiting.gif" alt="Vertin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/gifs/review.gif" alt="Vertin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yoimiya--chenxin-dlut">Yoimiya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yoimiya--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/gifs/idle.gif" alt="Yoimiya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/gifs/waving.gif" alt="Yoimiya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/gifs/running-right.gif" alt="Yoimiya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/gifs/waiting.gif" alt="Yoimiya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/gifs/review.gif" alt="Yoimiya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zani--chenxin-dlut">Zani</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zani--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/gifs/idle.gif" alt="Zani idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/gifs/waving.gif" alt="Zani waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/gifs/running-right.gif" alt="Zani running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/gifs/waiting.gif" alt="Zani waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/gifs/review.gif" alt="Zani review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dnf-female-ammo--qunboo">女弹药Q</a> · by <a href="https://github.com/QunBoo">@QunBoo</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dnf-female-ammo--qunboo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/gifs/idle.gif" alt="女弹药Q idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/gifs/waving.gif" alt="女弹药Q waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/gifs/running-right.gif" alt="女弹药Q running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/gifs/waiting.gif" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/gifs/review.gif" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/new-covenant-exusiai--chenxin-dlut">Exusiai the New Covenant</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- new-covenant-exusiai--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/gifs/idle.gif" alt="Exusiai the New Covenant idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/gifs/waving.gif" alt="Exusiai the New Covenant waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/gifs/running-right.gif" alt="Exusiai the New Covenant running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/gifs/waiting.gif" alt="Exusiai the New Covenant waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/gifs/review.gif" alt="Exusiai the New Covenant review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/regulus-star-antimony--chenxin-dlut">Regulus</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Game Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- regulus-star-antimony--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/gifs/idle.gif" alt="Regulus idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/gifs/waving.gif" alt="Regulus waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/gifs/running-right.gif" alt="Regulus running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/gifs/waiting.gif" alt="Regulus waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/gifs/review.gif" alt="Regulus review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/youmu--ai-generated">魂魄妖梦</a> · by @ai-generated · Game Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- youmu--ai-generated</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/gifs/idle.gif" alt="魂魄妖梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/gifs/waving.gif" alt="魂魄妖梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/gifs/running-right.gif" alt="魂魄妖梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/gifs/waiting.gif" alt="魂魄妖梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/gifs/review.gif" alt="魂魄妖梦 review" width="120" height="130"></td></tr>
</table>

### Anime Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zero-two--mingqingmozhao">Zero Two</a> · by @mingqingmozhao · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zero-two--mingqingmozhao</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/gifs/idle.gif" alt="Zero Two idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/gifs/waving.gif" alt="Zero Two waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/gifs/running-right.gif" alt="Zero Two running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/gifs/waiting.gif" alt="Zero Two waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/gifs/review.gif" alt="Zero Two review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/anya--chenxin-dlut">Anya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- anya--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/gifs/idle.gif" alt="Anya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/gifs/waving.gif" alt="Anya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/gifs/running-right.gif" alt="Anya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/gifs/waiting.gif" alt="Anya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/gifs/review.gif" alt="Anya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/asuka--maxg24">Asuka</a> · by <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- asuka--maxg24</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/gifs/idle.gif" alt="Asuka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/gifs/waving.gif" alt="Asuka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/gifs/running-right.gif" alt="Asuka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/gifs/waiting.gif" alt="Asuka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/gifs/review.gif" alt="Asuka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chibi-rei-pet--bendy">Rei Ayanami</a> · by @Bendy · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- chibi-rei-pet--bendy</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/gifs/idle.gif" alt="Rei Ayanami idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/gifs/waving.gif" alt="Rei Ayanami waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/gifs/running-right.gif" alt="Rei Ayanami running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/gifs/waiting.gif" alt="Rei Ayanami waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/gifs/review.gif" alt="Rei Ayanami review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/conan--chenxin-dlut">Conan Edogawa</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- conan--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/gifs/idle.gif" alt="Conan Edogawa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/gifs/waving.gif" alt="Conan Edogawa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/gifs/running-right.gif" alt="Conan Edogawa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/gifs/waiting.gif" alt="Conan Edogawa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/gifs/review.gif" alt="Conan Edogawa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/doraemon--xueshi">Doraemon</a> · by <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- doraemon--xueshi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/gifs/idle.gif" alt="Doraemon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/gifs/waving.gif" alt="Doraemon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/gifs/running-right.gif" alt="Doraemon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/gifs/waiting.gif" alt="Doraemon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/gifs/review.gif" alt="Doraemon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/elaina--nyakku-shigure">Elaina</a> · by <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- elaina--nyakku-shigure</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/gifs/idle.gif" alt="Elaina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/gifs/waving.gif" alt="Elaina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/gifs/running-right.gif" alt="Elaina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/gifs/waiting.gif" alt="Elaina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/gifs/review.gif" alt="Elaina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/eren--ash-sw">Eren</a> · by <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- eren--ash-sw</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/gifs/idle.gif" alt="Eren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/gifs/waving.gif" alt="Eren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/gifs/running-right.gif" alt="Eren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/gifs/waiting.gif" alt="Eren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/gifs/review.gif" alt="Eren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/frieren--lingxiaotian">Frieren</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frieren--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/gifs/idle.gif" alt="Frieren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/gifs/waving.gif" alt="Frieren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/gifs/running-right.gif" alt="Frieren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/gifs/waiting.gif" alt="Frieren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/gifs/review.gif" alt="Frieren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gojo--lilokhalikfa">Gojo</a> · by <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gojo--lilokhalikfa</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/gifs/idle.gif" alt="Gojo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/gifs/waving.gif" alt="Gojo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/gifs/running-right.gif" alt="Gojo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/gifs/waiting.gif" alt="Gojo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/gifs/review.gif" alt="Gojo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ikaros--icarus-alpha">Ikaros</a> · by <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ikaros--icarus-alpha</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/gifs/idle.gif" alt="Ikaros idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/gifs/waving.gif" alt="Ikaros waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/gifs/running-right.gif" alt="Ikaros running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/gifs/waiting.gif" alt="Ikaros waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/gifs/review.gif" alt="Ikaros review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/isekaijoucho--siiverash">Isekaijoucho</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- isekaijoucho--siiverash</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/gifs/idle.gif" alt="Isekaijoucho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/gifs/waving.gif" alt="Isekaijoucho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/gifs/running-right.gif" alt="Isekaijoucho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/gifs/waiting.gif" alt="Isekaijoucho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/gifs/review.gif" alt="Isekaijoucho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jolyne-cujoh--d2682787206-sys">Jolyne Cujoh</a> · by <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- jolyne-cujoh--d2682787206-sys</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/gifs/idle.gif" alt="Jolyne Cujoh idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/gifs/waving.gif" alt="Jolyne Cujoh waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/gifs/running-right.gif" alt="Jolyne Cujoh running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/gifs/waiting.gif" alt="Jolyne Cujoh waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/gifs/review.gif" alt="Jolyne Cujoh review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kaiju-no-8--terry878">Kaiju No. 8</a> · by @TERRY878 · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kaiju-no-8--terry878</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/gifs/idle.gif" alt="Kaiju No. 8 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/gifs/waving.gif" alt="Kaiju No. 8 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/gifs/running-right.gif" alt="Kaiju No. 8 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/gifs/waiting.gif" alt="Kaiju No. 8 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/gifs/review.gif" alt="Kaiju No. 8 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kid--chenxin-dlut">Kaito Kid</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kid--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/gifs/idle.gif" alt="Kaito Kid idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/gifs/waving.gif" alt="Kaito Kid waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/gifs/running-right.gif" alt="Kaito Kid running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/gifs/waiting.gif" alt="Kaito Kid waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/gifs/review.gif" alt="Kaito Kid review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kid-goku--julianhuang">Kid Goku</a> · by <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kid-goku--julianhuang</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/gifs/idle.gif" alt="Kid Goku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/gifs/waving.gif" alt="Kid Goku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/gifs/running-right.gif" alt="Kid Goku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/gifs/waiting.gif" alt="Kid Goku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/gifs/review.gif" alt="Kid Goku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/levi--emrecb">Levi</a> · by <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- levi--emrecb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/levi--emrecb/gifs/idle.gif" alt="Levi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/gifs/waving.gif" alt="Levi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/gifs/running-right.gif" alt="Levi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/gifs/waiting.gif" alt="Levi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/gifs/review.gif" alt="Levi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/luffy-gear-5--jordsshmords1">Luffy Gear 5</a> · by <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- luffy-gear-5--jordsshmords1</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/gifs/idle.gif" alt="Luffy Gear 5 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/gifs/waving.gif" alt="Luffy Gear 5 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/gifs/running-right.gif" alt="Luffy Gear 5 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/gifs/waiting.gif" alt="Luffy Gear 5 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/gifs/review.gif" alt="Luffy Gear 5 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mahiro--lingxiaotian">Mahiro</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mahiro--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/gifs/idle.gif" alt="Mahiro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/gifs/waving.gif" alt="Mahiro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/gifs/running-right.gif" alt="Mahiro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/gifs/waiting.gif" alt="Mahiro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/gifs/review.gif" alt="Mahiro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/makimamini--1sh1ro">Makima</a> · by @1sh1ro · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- makimamini--1sh1ro</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/gifs/idle.gif" alt="Makima idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/gifs/waving.gif" alt="Makima waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/gifs/running-right.gif" alt="Makima running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/gifs/waiting.gif" alt="Makima waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/gifs/review.gif" alt="Makima review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/makisekurisu--m1gr4ine">Makise Kurisu</a> · by @m1gr4ine · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- makisekurisu--m1gr4ine</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/gifs/idle.gif" alt="Makise Kurisu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/gifs/waving.gif" alt="Makise Kurisu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/gifs/running-right.gif" alt="Makise Kurisu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/gifs/waiting.gif" alt="Makise Kurisu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/gifs/review.gif" alt="Makise Kurisu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mihari--hyoni1129">Mihari</a> · by <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mihari--hyoni1129</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/gifs/idle.gif" alt="Mihari idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/gifs/waving.gif" alt="Mihari waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/gifs/running-right.gif" alt="Mihari running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/gifs/waiting.gif" alt="Mihari waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/gifs/review.gif" alt="Mihari review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mikoto--lingxiaotian">Mikoto</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mikoto--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="Mikoto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="Mikoto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/gifs/running-right.gif" alt="Mikoto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/gifs/waiting.gif" alt="Mikoto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miku--lingxiaotian">Miku</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miku--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/gifs/idle.gif" alt="Miku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/gifs/waving.gif" alt="Miku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/gifs/running-right.gif" alt="Miku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/gifs/waiting.gif" alt="Miku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/gifs/review.gif" alt="Miku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/misaka-network--ldl1234">Misaka Network</a> · by <a href="https://github.com/ldl1234">@ldl1234</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- misaka-network--ldl1234</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/gifs/idle.gif" alt="Misaka Network idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/gifs/waving.gif" alt="Misaka Network waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/gifs/running-right.gif" alt="Misaka Network running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/gifs/waiting.gif" alt="Misaka Network waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/gifs/review.gif" alt="Misaka Network review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nimbus--soraberu">Nimbus</a> · by <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- nimbus--soraberu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/gifs/idle.gif" alt="Nimbus idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/gifs/waving.gif" alt="Nimbus waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/gifs/running-right.gif" alt="Nimbus running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/gifs/waiting.gif" alt="Nimbus waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/gifs/review.gif" alt="Nimbus review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rem--l1">Rem</a> · by <a href="https://codex-pets.net/users/l1">@l1</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- rem--l1</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rem--l1/gifs/idle.gif" alt="Rem idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/gifs/waving.gif" alt="Rem waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/gifs/running-right.gif" alt="Rem running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/gifs/waiting.gif" alt="Rem waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/gifs/review.gif" alt="Rem review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rinami--siiverash">Rinami Himesaki</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- rinami--siiverash</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/gifs/idle.gif" alt="Rinami Himesaki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/gifs/waving.gif" alt="Rinami Himesaki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/gifs/running-right.gif" alt="Rinami Himesaki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/gifs/waiting.gif" alt="Rinami Himesaki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/gifs/review.gif" alt="Rinami Himesaki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/roxy-pixel--gravity">Roxy Pixel</a> · by @gravity · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- roxy-pixel--gravity</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/gifs/idle.gif" alt="Roxy Pixel idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/gifs/waving.gif" alt="Roxy Pixel waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/gifs/running-right.gif" alt="Roxy Pixel running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/gifs/waiting.gif" alt="Roxy Pixel waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/gifs/review.gif" alt="Roxy Pixel review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/saber--petdex-zhenyou-ling">Saber</a> · by @真宵 绫. · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- saber--petdex-zhenyou-ling</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/gifs/idle.gif" alt="Saber idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/gifs/waving.gif" alt="Saber waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/gifs/running-right.gif" alt="Saber running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/gifs/waiting.gif" alt="Saber waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/gifs/review.gif" alt="Saber review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gintoki-pixel--yuu-m">Sakata Gintoki</a> · by @Yuu M. · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gintoki-pixel--yuu-m</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/gifs/idle.gif" alt="Sakata Gintoki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/gifs/waving.gif" alt="Sakata Gintoki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/gifs/running-right.gif" alt="Sakata Gintoki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/gifs/waiting.gif" alt="Sakata Gintoki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/gifs/review.gif" alt="Sakata Gintoki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shinchan--chenxin-dlut">Shin-chan</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- shinchan--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/gifs/idle.gif" alt="Shin-chan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/gifs/waving.gif" alt="Shin-chan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/gifs/running-right.gif" alt="Shin-chan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/gifs/waiting.gif" alt="Shin-chan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/gifs/review.gif" alt="Shin-chan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/violet--lazenca">Violet</a> · by <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- violet--lazenca</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/violet--lazenca/gifs/idle.gif" alt="Violet idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/gifs/waving.gif" alt="Violet waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/gifs/running-right.gif" alt="Violet running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/gifs/waiting.gif" alt="Violet waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/gifs/review.gif" alt="Violet review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wakaba-mutsumi--carambola">Wakaba Mutsumi</a> · by @Carambola · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- wakaba-mutsumi--carambola</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/gifs/idle.gif" alt="Wakaba Mutsumi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/gifs/waving.gif" alt="Wakaba Mutsumi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/gifs/running-right.gif" alt="Wakaba Mutsumi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/gifs/waiting.gif" alt="Wakaba Mutsumi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/gifs/review.gif" alt="Wakaba Mutsumi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/inosuke-hashibira--wangfan002">Inosuke Hashibira</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- inosuke-hashibira--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/gifs/idle.gif" alt="Inosuke Hashibira idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/gifs/waving.gif" alt="Inosuke Hashibira waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/gifs/running-right.gif" alt="Inosuke Hashibira running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/gifs/waiting.gif" alt="Inosuke Hashibira waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/gifs/review.gif" alt="Inosuke Hashibira review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nangong-wan--bpup">Nangong Wan</a> · by <a href="https://github.com/bpup">@bpup</a> · Anime Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- nangong-wan--bpup</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/gifs/idle.gif" alt="Nangong Wan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/gifs/waving.gif" alt="Nangong Wan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/gifs/running-right.gif" alt="Nangong Wan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/gifs/waiting.gif" alt="Nangong Wan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/gifs/review.gif" alt="Nangong Wan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zenitsu-agatsuma--wangfan002">Zenitsu Agatsuma</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zenitsu-agatsuma--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/gifs/idle.gif" alt="Zenitsu Agatsuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/gifs/waving.gif" alt="Zenitsu Agatsuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/gifs/running-right.gif" alt="Zenitsu Agatsuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/gifs/waiting.gif" alt="Zenitsu Agatsuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/gifs/review.gif" alt="Zenitsu Agatsuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/giyu-tomioka--wangfan002">Giyu Tomioka</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- giyu-tomioka--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/gifs/idle.gif" alt="Giyu Tomioka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/gifs/waving.gif" alt="Giyu Tomioka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/gifs/running-right.gif" alt="Giyu Tomioka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/gifs/waiting.gif" alt="Giyu Tomioka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/gifs/review.gif" alt="Giyu Tomioka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/muichiro-tokito--wangfan002">Muichiro Tokito</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- muichiro-tokito--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/gifs/idle.gif" alt="Muichiro Tokito idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/gifs/waving.gif" alt="Muichiro Tokito waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/gifs/running-right.gif" alt="Muichiro Tokito running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/gifs/waiting.gif" alt="Muichiro Tokito waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/gifs/review.gif" alt="Muichiro Tokito review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tanjiro-kamado--wangfan002">Tanjiro Kamado</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tanjiro-kamado--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/gifs/idle.gif" alt="Tanjiro Kamado idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/gifs/waving.gif" alt="Tanjiro Kamado waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/gifs/running-right.gif" alt="Tanjiro Kamado running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/gifs/waiting.gif" alt="Tanjiro Kamado waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/gifs/review.gif" alt="Tanjiro Kamado review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/nezuko-kamado--wangfan002">Nezuko Kamado</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- nezuko-kamado--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/gifs/idle.gif" alt="Nezuko Kamado idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/gifs/waving.gif" alt="Nezuko Kamado waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/gifs/running-right.gif" alt="Nezuko Kamado running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/gifs/waiting.gif" alt="Nezuko Kamado waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/gifs/review.gif" alt="Nezuko Kamado review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shinobu-kocho--wangfan002">Shinobu Kocho</a> · by @wangfan002 · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- shinobu-kocho--wangfan002</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/gifs/idle.gif" alt="Shinobu Kocho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/gifs/waving.gif" alt="Shinobu Kocho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/gifs/running-right.gif" alt="Shinobu Kocho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/gifs/waiting.gif" alt="Shinobu Kocho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/gifs/review.gif" alt="Shinobu Kocho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bocchi--lingxiaotian">Bocchi</a> · by <a href="https://github.com/legeling">@legeling</a> · Anime Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bocchi--lingxiaotian</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/gifs/idle.gif" alt="Bocchi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/gifs/waving.gif" alt="Bocchi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/gifs/running-right.gif" alt="Bocchi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/gifs/waiting.gif" alt="Bocchi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/gifs/review.gif" alt="Bocchi review" width="120" height="130"></td></tr>
</table>

### Original Characters

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/aiko--chenxin-dlut">Aiko</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- aiko--chenxin-dlut</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/gifs/idle.gif" alt="Aiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/gifs/waving.gif" alt="Aiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/gifs/running-right.gif" alt="Aiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/gifs/waiting.gif" alt="Aiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/gifs/review.gif" alt="Aiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diana--am">Diana</a> · by @am · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diana--am</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diana--am/gifs/idle.gif" alt="Diana idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/gifs/waving.gif" alt="Diana waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/gifs/running-right.gif" alt="Diana running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/gifs/waiting.gif" alt="Diana waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/gifs/review.gif" alt="Diana review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hajimi--zeyuwang1999">Hajimi</a> · by <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hajimi--zeyuwang1999</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/gifs/idle.gif" alt="Hajimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/gifs/waving.gif" alt="Hajimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/gifs/running-right.gif" alt="Hajimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/gifs/waiting.gif" alt="Hajimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/gifs/review.gif" alt="Hajimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hana2--initiatione">Hana2</a> · by <a href="https://github.com/initiatione">@initiatione</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hana2--initiatione</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/gifs/idle.gif" alt="Hana2 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/gifs/waving.gif" alt="Hana2 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/gifs/running-right.gif" alt="Hana2 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/gifs/waiting.gif" alt="Hana2 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/gifs/review.gif" alt="Hana2 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/iris--yau-427">Iris</a> · by <a href="https://github.com/Yau-427">@Yau-427</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- iris--yau-427</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/iris--yau-427/gifs/idle.gif" alt="Iris idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/gifs/waving.gif" alt="Iris waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/gifs/running-right.gif" alt="Iris running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/gifs/waiting.gif" alt="Iris waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/gifs/review.gif" alt="Iris review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/joker--oytyo">Joker</a> · by @oytyo · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- joker--oytyo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/joker--oytyo/gifs/idle.gif" alt="Joker idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/gifs/waving.gif" alt="Joker waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/gifs/running-right.gif" alt="Joker running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/gifs/waiting.gif" alt="Joker waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/gifs/review.gif" alt="Joker review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kuro-chibi--kuroneko-night">Kuro Chibi</a> · by <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kuro-chibi--kuroneko-night</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/gifs/idle.gif" alt="Kuro Chibi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/gifs/waving.gif" alt="Kuro Chibi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/gifs/running-right.gif" alt="Kuro Chibi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/gifs/waiting.gif" alt="Kuro Chibi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/gifs/review.gif" alt="Kuro Chibi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/linnea--nyakku-shigure">Linnea</a> · by @nyakku-shigure · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- linnea--nyakku-shigure</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/gifs/idle.gif" alt="Linnea idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/gifs/waving.gif" alt="Linnea waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/gifs/running-right.gif" alt="Linnea running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/gifs/waiting.gif" alt="Linnea waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/gifs/review.gif" alt="Linnea review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mika--rotl24">Mika</a> · by <a href="https://github.com/ROTl24">@ROTl24</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mika--rotl24</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mika--rotl24/gifs/idle.gif" alt="Mika idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/gifs/waving.gif" alt="Mika waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/gifs/running-right.gif" alt="Mika running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/gifs/waiting.gif" alt="Mika waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/gifs/review.gif" alt="Mika review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/minty--somnusochi">Minty</a> · by <a href="https://github.com/Somnusochi">@Somnusochi</a> · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- minty--somnusochi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/gifs/idle.gif" alt="Minty idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/gifs/waving.gif" alt="Minty waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/gifs/running-right.gif" alt="Minty running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/gifs/waiting.gif" alt="Minty waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/gifs/review.gif" alt="Minty review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · by <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ruruka--ltmcliao-cmyk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/gifs/idle.gif" alt="RuRuKa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/gifs/waving.gif" alt="RuRuKa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/gifs/running-right.gif" alt="RuRuKa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/gifs/waiting.gif" alt="RuRuKa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/gifs/review.gif" alt="RuRuKa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/shian-helper--mistyshen">Shian</a> · by <a href="https://github.com/mistyShen">@mistyShen</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- shian-helper--mistyshen</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/gifs/idle.gif" alt="Shian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/gifs/waving.gif" alt="Shian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/gifs/running-right.gif" alt="Shian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/gifs/waiting.gif" alt="Shian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/gifs/review.gif" alt="Shian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yier--gbn666">Yi Er</a> · by <a href="https://github.com/gbn666">@gbn666</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yier--gbn666</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yier--gbn666/gifs/idle.gif" alt="Yi Er idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/gifs/waving.gif" alt="Yi Er waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/gifs/running-right.gif" alt="Yi Er running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/gifs/waiting.gif" alt="Yi Er waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/gifs/review.gif" alt="Yi Er review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yume-boundary--andy-meow">Yume</a> · by @andy-meow · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yume-boundary--andy-meow</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/gifs/idle.gif" alt="Yume idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/gifs/waving.gif" alt="Yume waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/gifs/running-right.gif" alt="Yume running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/gifs/waiting.gif" alt="Yume waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/gifs/review.gif" alt="Yume review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yuzubou--keseras34938976">Yuzubou</a> · by <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yuzubou--keseras34938976</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/gifs/idle.gif" alt="Yuzubou idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/gifs/waving.gif" alt="Yuzubou waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/gifs/running-right.gif" alt="Yuzubou running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/gifs/waiting.gif" alt="Yuzubou waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/gifs/review.gif" alt="Yuzubou review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gudong--rank">咕咚</a> · by @Rank · Original Characters · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gudong--rank</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gudong--rank/gifs/idle.gif" alt="咕咚 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/gifs/waving.gif" alt="咕咚 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/gifs/running-right.gif" alt="咕咚 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/gifs/waiting.gif" alt="咕咚 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/gifs/review.gif" alt="咕咚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/feibi--vanfff">菲比</a> · by @vanfff · Original Characters · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- feibi--vanfff</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/gifs/idle.gif" alt="菲比 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/gifs/waving.gif" alt="菲比 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/gifs/running-right.gif" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/gifs/waiting.gif" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/gifs/review.gif" alt="菲比 review" width="120" height="130"></td></tr>
</table>

### Mascots

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/aemeath-mini--cunuo">Aemeath Mini</a> · by <a href="https://github.com/cuNuo">@cuNuo</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- aemeath-mini--cunuo</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/gifs/idle.gif" alt="Aemeath Mini idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/gifs/waving.gif" alt="Aemeath Mini waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/gifs/running-right.gif" alt="Aemeath Mini running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/gifs/waiting.gif" alt="Aemeath Mini waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/gifs/review.gif" alt="Aemeath Mini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/apu--xchangee">Apu</a> · by <a href="https://github.com/xchangee">@xchangee</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- apu--xchangee</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/apu--xchangee/gifs/idle.gif" alt="Apu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/gifs/waving.gif" alt="Apu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/gifs/running-right.gif" alt="Apu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/gifs/waiting.gif" alt="Apu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/gifs/review.gif" alt="Apu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/claude--xiangking">Claude</a> · by <a href="https://github.com/xiangking">@xiangking</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- claude--xiangking</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/claude--xiangking/gifs/idle.gif" alt="Claude idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/gifs/waving.gif" alt="Claude waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/gifs/running-right.gif" alt="Claude running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/gifs/waiting.gif" alt="Claude waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/gifs/review.gif" alt="Claude review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/twinkle-twinkle--twinkletwinkle">Dashun's Twinkle Twinkle</a> · by @twinkletwinkle · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- twinkle-twinkle--twinkletwinkle</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/idle.gif" alt="Dashun's Twinkle Twinkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/waving.gif" alt="Dashun's Twinkle Twinkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/running-right.gif" alt="Dashun's Twinkle Twinkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/waiting.gif" alt="Dashun's Twinkle Twinkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/review.gif" alt="Dashun's Twinkle Twinkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diaoyi-baobao--d1a0y1bb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/idle.gif" alt="Diaoyi Baobao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/waving.gif" alt="Diaoyi Baobao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/running-right.gif" alt="Diaoyi Baobao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/waiting.gif" alt="Diaoyi Baobao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/review.gif" alt="Diaoyi Baobao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/gpt-muse--opask">GPT-muse</a> · by @opask · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gpt-muse--opask</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/gifs/idle.gif" alt="GPT-muse idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/gifs/waving.gif" alt="GPT-muse waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/gifs/running-right.gif" alt="GPT-muse running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/gifs/waiting.gif" alt="GPT-muse waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/gifs/review.gif" alt="GPT-muse review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lulu--yogazz">Lulu</a> · by <a href="https://github.com/YoGazz">@YoGazz</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- lulu--yogazz</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/gifs/idle.gif" alt="Lulu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/gifs/waving.gif" alt="Lulu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/gifs/running-right.gif" alt="Lulu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/gifs/waiting.gif" alt="Lulu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/gifs/review.gif" alt="Lulu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/saki--rookie-09">Saki</a> · by <a href="https://github.com/rookie-09">@rookie-09</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- saki--rookie-09</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/gifs/idle.gif" alt="Saki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/gifs/waving.gif" alt="Saki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/gifs/running-right.gif" alt="Saki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/gifs/waiting.gif" alt="Saki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/gifs/review.gif" alt="Saki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/wally--wally025">Wally</a> · by <a href="https://github.com/wally025">@wally025</a> · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- wally--wally025</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/wally--wally025/gifs/idle.gif" alt="Wally idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/gifs/waving.gif" alt="Wally waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/gifs/running-right.gif" alt="Wally running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/gifs/waiting.gif" alt="Wally waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/gifs/review.gif" alt="Wally review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zhengyin--noonwake">Zhengyin</a> · by <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · Mascots · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zhengyin--noonwake</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/gifs/idle.gif" alt="Zhengyin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/gifs/waving.gif" alt="Zhengyin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/gifs/running-right.gif" alt="Zhengyin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/gifs/waiting.gif" alt="Zhengyin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/gifs/review.gif" alt="Zhengyin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/happynailong--aquaxyy">大笑奶龙</a> · by @aquaxyy · Mascots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- happynailong--aquaxyy</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/gifs/idle.gif" alt="大笑奶龙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/gifs/waving.gif" alt="大笑奶龙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/gifs/running-right.gif" alt="大笑奶龙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/gifs/waiting.gif" alt="大笑奶龙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/gifs/review.gif" alt="大笑奶龙 review" width="120" height="130"></td></tr>
</table>

### Animals

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/becky--natewanggg">Becky</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- becky--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/gifs/idle.gif" alt="Becky idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/gifs/waving.gif" alt="Becky waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/gifs/running-right.gif" alt="Becky running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/gifs/waiting.gif" alt="Becky waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/gifs/review.gif" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/bubu--gbn666">Bubu</a> · by <a href="https://github.com/gbn666">@gbn666</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bubu--gbn666</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/gifs/idle.gif" alt="Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/gifs/waving.gif" alt="Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/gifs/running-right.gif" alt="Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/gifs/waiting.gif" alt="Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/gifs/review.gif" alt="Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · by <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- corgi-companion--cxian0928-afk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/gifs/idle.gif" alt="Corgi Companion idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/gifs/waving.gif" alt="Corgi Companion waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/gifs/running-right.gif" alt="Corgi Companion running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/gifs/waiting.gif" alt="Corgi Companion waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/gifs/review.gif" alt="Corgi Companion review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/desk-otter--zihualiu1997">Desk Otter</a> · by <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- desk-otter--zihualiu1997</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/gifs/idle.gif" alt="Desk Otter idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/gifs/waving.gif" alt="Desk Otter waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/gifs/running-right.gif" alt="Desk Otter running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/gifs/waiting.gif" alt="Desk Otter waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/gifs/review.gif" alt="Desk Otter review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/diandian--lllucasxu">Diandian</a> · by <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diandian--lllucasxu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/gifs/idle.gif" alt="Diandian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/gifs/waving.gif" alt="Diandian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/gifs/running-right.gif" alt="Diandian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/gifs/waiting.gif" alt="Diandian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/gifs/review.gif" alt="Diandian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dudu-bubu--clembuilds">Dudu & Bubu</a> · by @clembuilds · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dudu-bubu--clembuilds</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/gifs/idle.gif" alt="Dudu & Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/gifs/waving.gif" alt="Dudu & Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/gifs/running-right.gif" alt="Dudu & Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/gifs/waiting.gif" alt="Dudu & Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/gifs/review.gif" alt="Dudu & Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/ella-wave--sehjk">Ella Wave</a> · by @sehjk · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ella-wave--sehjk</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/gifs/idle.gif" alt="Ella Wave idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/gifs/waving.gif" alt="Ella Wave waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/gifs/running-right.gif" alt="Ella Wave running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/gifs/waiting.gif" alt="Ella Wave waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/gifs/review.gif" alt="Ella Wave review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/fleta--natewanggg">Fleta</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- fleta--natewanggg</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/gifs/idle.gif" alt="Fleta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/gifs/waving.gif" alt="Fleta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/gifs/running-right.gif" alt="Fleta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/gifs/waiting.gif" alt="Fleta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/gifs/review.gif" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/frankie--aygunvarol">Frankie</a> · by <a href="https://github.com/AygunVarol">@AygunVarol</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frankie--aygunvarol</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/gifs/idle.gif" alt="Frankie idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/gifs/waving.gif" alt="Frankie waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/gifs/running-right.gif" alt="Frankie running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/gifs/waiting.gif" alt="Frankie waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/gifs/review.gif" alt="Frankie review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/jiji--yena">Jiji</a> · by @yena · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- jiji--yena</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/jiji--yena/gifs/idle.gif" alt="Jiji idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/gifs/waving.gif" alt="Jiji waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/gifs/running-right.gif" alt="Jiji running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/gifs/waiting.gif" alt="Jiji waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/gifs/review.gif" alt="Jiji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kiko--untko">Kiko</a> · by <a href="https://github.com/untko">@untko</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kiko--untko</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kiko--untko/gifs/idle.gif" alt="Kiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/gifs/waving.gif" alt="Kiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/gifs/running-right.gif" alt="Kiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/gifs/waiting.gif" alt="Kiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/gifs/review.gif" alt="Kiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/kimoju--andiac">Kimoju</a> · by @andiac · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kimoju--andiac</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/gifs/idle.gif" alt="Kimoju idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/gifs/waving.gif" alt="Kimoju waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/gifs/running-right.gif" alt="Kimoju running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/gifs/waiting.gif" alt="Kimoju waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/gifs/review.gif" alt="Kimoju review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/lil-swole--gg0805">Lil Swole</a> · by <a href="https://github.com/gg0805">@gg0805</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- lil-swole--gg0805</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/gifs/idle.gif" alt="Lil Swole idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/gifs/waving.gif" alt="Lil Swole waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/gifs/running-right.gif" alt="Lil Swole running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/gifs/waiting.gif" alt="Lil Swole waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/gifs/review.gif" alt="Lil Swole review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/little-sheep--mingdong">Little Sheep</a> · by @MingDong · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- little-sheep--mingdong</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/gifs/idle.gif" alt="Little Sheep idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/gifs/waving.gif" alt="Little Sheep waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/gifs/running-right.gif" alt="Little Sheep running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/gifs/waiting.gif" alt="Little Sheep waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/gifs/review.gif" alt="Little Sheep review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mai--dwdestiny">Mai</a> · by <a href="https://github.com/DwDestiny">@DwDestiny</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mai--dwdestiny</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/gifs/idle.gif" alt="Mai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/gifs/waving.gif" alt="Mai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/gifs/running-right.gif" alt="Mai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/gifs/waiting.gif" alt="Mai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/gifs/review.gif" alt="Mai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mellow-duck--sally-entr">Mellow Duck</a> · by @sally-entr · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mellow-duck--sally-entr</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/gifs/idle.gif" alt="Mellow Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/gifs/waving.gif" alt="Mellow Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/gifs/running-right.gif" alt="Mellow Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/gifs/waiting.gif" alt="Mellow Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/gifs/review.gif" alt="Mellow Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/mimi--spacebody">Mimi</a> · by <a href="https://github.com/Spacebody">@Spacebody</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mimi--spacebody</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/gifs/idle.gif" alt="Mimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/gifs/waving.gif" alt="Mimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/gifs/running-right.gif" alt="Mimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/gifs/waiting.gif" alt="Mimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/gifs/review.gif" alt="Mimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/miu-meo--lemon-z">Miu Meu</a> · by @lemon-z · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miu-meo--lemon-z</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/gifs/idle.gif" alt="Miu Meu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/gifs/waving.gif" alt="Miu Meu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/gifs/running-right.gif" alt="Miu Meu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/gifs/waiting.gif" alt="Miu Meu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/gifs/review.gif" alt="Miu Meu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/moomew-coder-cat--ping">MooMew Coder</a> · by @ping · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- moomew-coder-cat--ping</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/gifs/idle.gif" alt="MooMew Coder idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/gifs/waving.gif" alt="MooMew Coder waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/gifs/running-right.gif" alt="MooMew Coder running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/gifs/waiting.gif" alt="MooMew Coder waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/gifs/review.gif" alt="MooMew Coder review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/panda--jason-bai">Panda</a> · by <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- panda--jason-bai</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/gifs/idle.gif" alt="Panda idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/gifs/waving.gif" alt="Panda waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/gifs/running-right.gif" alt="Panda running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/gifs/waiting.gif" alt="Panda waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/gifs/review.gif" alt="Panda review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · by <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- pixel-duck--flamurmaliqi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/gifs/idle.gif" alt="Pixel Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/gifs/waving.gif" alt="Pixel Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/gifs/running-right.gif" alt="Pixel Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/gifs/waiting.gif" alt="Pixel Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/gifs/review.gif" alt="Pixel Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/rook--klubbyte">Rook</a> · by @klubbyte · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- rook--klubbyte</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/gifs/idle.gif" alt="Rook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/gifs/waving.gif" alt="Rook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/gifs/running-right.gif" alt="Rook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/gifs/waiting.gif" alt="Rook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/gifs/review.gif" alt="Rook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/teddy--danieloleary">Teddy</a> · by <a href="https://github.com/danieloleary">@danieloleary</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- teddy--danieloleary</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/gifs/idle.gif" alt="Teddy idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/gifs/waving.gif" alt="Teddy waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/gifs/running-right.gif" alt="Teddy running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/gifs/waiting.gif" alt="Teddy waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/gifs/review.gif" alt="Teddy review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tian-hua-hua--d1a0y1bb</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/gifs/idle.gif" alt="Tian Hua Hua idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/gifs/waving.gif" alt="Tian Hua Hua waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/gifs/running-right.gif" alt="Tian Hua Hua running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/gifs/waiting.gif" alt="Tian Hua Hua waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/gifs/review.gif" alt="Tian Hua Hua review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/usachi--jack">乌萨奇</a> · by @jack · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- usachi--jack</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/usachi--jack/gifs/idle.gif" alt="乌萨奇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/gifs/waving.gif" alt="乌萨奇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/gifs/running-right.gif" alt="乌萨奇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/gifs/waiting.gif" alt="乌萨奇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/gifs/review.gif" alt="乌萨奇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · by @1wphantom · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dai-dai-nai-you--1wphantom</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/gifs/idle.gif" alt="呆呆奶油 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/gifs/waving.gif" alt="呆呆奶油 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/gifs/running-right.gif" alt="呆呆奶油 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/gifs/waiting.gif" alt="呆呆奶油 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/gifs/review.gif" alt="呆呆奶油 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tuantuan--jbbom">团团</a> · by <a href="https://github.com/JbBom">@JbBom</a> · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tuantuan--jbbom</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/gifs/idle.gif" alt="团团 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/gifs/waving.gif" alt="团团 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/gifs/running-right.gif" alt="团团 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/gifs/waiting.gif" alt="团团 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/gifs/review.gif" alt="团团 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/duodong--froggie">多栋</a> · by @froggie · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- duodong--froggie</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/duodong--froggie/gifs/idle.gif" alt="多栋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/gifs/waving.gif" alt="多栋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/gifs/running-right.gif" alt="多栋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/gifs/waiting.gif" alt="多栋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/gifs/review.gif" alt="多栋 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/naiwa--sandytruant">奶蛙</a> · by <a href="https://github.com/sandytruant">@sandytruant</a> · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- naiwa--sandytruant</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/gifs/idle.gif" alt="奶蛙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/gifs/waving.gif" alt="奶蛙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/gifs/running-right.gif" alt="奶蛙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/gifs/waiting.gif" alt="奶蛙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/gifs/review.gif" alt="奶蛙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xiaoba-cat--jack">小八猫</a> · by @jack · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xiaoba-cat--jack</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/gifs/idle.gif" alt="小八猫 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/gifs/waving.gif" alt="小八猫 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/gifs/running-right.gif" alt="小八猫 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/gifs/waiting.gif" alt="小八猫 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/gifs/review.gif" alt="小八猫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xiaomai--brian-3">小麦 XiaoMai</a> · by @brian-3 · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xiaomai--brian-3</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/gifs/idle.gif" alt="小麦 XiaoMai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/gifs/waving.gif" alt="小麦 XiaoMai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/gifs/running-right.gif" alt="小麦 XiaoMai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/gifs/waiting.gif" alt="小麦 XiaoMai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/gifs/review.gif" alt="小麦 XiaoMai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/koukou-penguin--hoody">扣扣企鹅</a> · by @hoody · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- koukou-penguin--hoody</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/gifs/idle.gif" alt="扣扣企鹅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/gifs/waving.gif" alt="扣扣企鹅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/gifs/running-right.gif" alt="扣扣企鹅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/gifs/waiting.gif" alt="扣扣企鹅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/gifs/review.gif" alt="扣扣企鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/capybara-lulu--jiushu">水豚噜噜</a> · by @jiushu · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- capybara-lulu--jiushu</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/gifs/idle.gif" alt="水豚噜噜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/gifs/waving.gif" alt="水豚噜噜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/gifs/running-right.gif" alt="水豚噜噜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/gifs/waiting.gif" alt="水豚噜噜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/gifs/review.gif" alt="水豚噜噜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/niumou--jarvis-2">牛哞</a> · by @jarvis-2 · Animals · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- niumou--jarvis-2</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/gifs/idle.gif" alt="牛哞 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/gifs/waving.gif" alt="牛哞 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/gifs/running-right.gif" alt="牛哞 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/gifs/waiting.gif" alt="牛哞 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/gifs/review.gif" alt="牛哞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/zichao-xiong--z-kzhang">自嘲熊</a> · by @z-kzhang · Animals · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zichao-xiong--z-kzhang</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/gifs/idle.gif" alt="自嘲熊 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/gifs/waving.gif" alt="自嘲熊 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/gifs/running-right.gif" alt="自嘲熊 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/gifs/waiting.gif" alt="自嘲熊 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/gifs/review.gif" alt="自嘲熊 review" width="120" height="130"></td></tr>
</table>

### Fantasy Creatures

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/goblin--rkwap">Goblin</a> · by @rkwap · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- goblin--rkwap</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/gifs/idle.gif" alt="Goblin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/gifs/waving.gif" alt="Goblin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/gifs/running-right.gif" alt="Goblin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/gifs/waiting.gif" alt="Goblin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/gifs/review.gif" alt="Goblin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/luna-angel-cat--neve">luna_angel cat</a> · by @neve · Fantasy Creatures · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- luna-angel-cat--neve</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/gifs/idle.gif" alt="luna_angel cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/gifs/waving.gif" alt="luna_angel cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/gifs/running-right.gif" alt="luna_angel cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/gifs/waiting.gif" alt="luna_angel cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/gifs/review.gif" alt="luna_angel cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/night-neko--netizenxuan">Night Neko</a> · by <a href="https://github.com/netizenXuan">@netizenXuan</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- night-neko--netizenxuan</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/gifs/idle.gif" alt="Night Neko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/gifs/waving.gif" alt="Night Neko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/gifs/running-right.gif" alt="Night Neko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/gifs/waiting.gif" alt="Night Neko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/gifs/review.gif" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/starcorn--alterhq">Starcorn</a> · by <a href="https://github.com/alterhq">@alterhq</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- starcorn--alterhq</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/gifs/idle.gif" alt="Starcorn idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/gifs/waving.gif" alt="Starcorn waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/gifs/running-right.gif" alt="Starcorn running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/gifs/waiting.gif" alt="Starcorn waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/gifs/review.gif" alt="Starcorn review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · by <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xian-xiao-lu--qingyunagi</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/gifs/idle.gif" alt="Xian Xiao Lu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/gifs/waving.gif" alt="Xian Xiao Lu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/gifs/running-right.gif" alt="Xian Xiao Lu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/gifs/waiting.gif" alt="Xian Xiao Lu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/gifs/review.gif" alt="Xian Xiao Lu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/yuanzai--gaming33">Yuanzai</a> · by <a href="https://github.com/Gaming33">@Gaming33</a> · Fantasy Creatures · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yuanzai--gaming33</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/gifs/idle.gif" alt="Yuanzai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/gifs/waving.gif" alt="Yuanzai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/gifs/running-right.gif" alt="Yuanzai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/gifs/waiting.gif" alt="Yuanzai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/gifs/review.gif" alt="Yuanzai review" width="120" height="130"></td></tr>
</table>

### Robots

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/chispa--giiilberto-nm">Chispa</a> · by @giiilberto-nm · Robots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- chispa--giiilberto-nm</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/gifs/idle.gif" alt="Chispa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/gifs/waving.gif" alt="Chispa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/gifs/running-right.gif" alt="Chispa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/gifs/waiting.gif" alt="Chispa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/gifs/review.gif" alt="Chispa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/codenono--dq02">CodeNoNo</a> · by <a href="https://github.com/Dqd02">@Dqd02</a> · Robots · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- codenono--dq02</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/codenono--dq02/gifs/idle.gif" alt="CodeNoNo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/gifs/waving.gif" alt="CodeNoNo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/gifs/running-right.gif" alt="CodeNoNo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/gifs/waiting.gif" alt="CodeNoNo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/gifs/review.gif" alt="CodeNoNo review" width="120" height="130"></td></tr>
</table>

### Human Avatars

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/azuma--tairazuma">Azuma</a> · by @tairazuma · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- azuma--tairazuma</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/gifs/idle.gif" alt="Azuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/gifs/waving.gif" alt="Azuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/gifs/running-right.gif" alt="Azuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/gifs/waiting.gif" alt="Azuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/gifs/review.gif" alt="Azuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tangdouren--carl312">Tangdouren</a> · by <a href="https://github.com/Carl-312">@Carl-312</a> · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tangdouren--carl312</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/gifs/idle.gif" alt="Tangdouren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/gifs/waving.gif" alt="Tangdouren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/gifs/running-right.gif" alt="Tangdouren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/gifs/waiting.gif" alt="Tangdouren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/gifs/review.gif" alt="Tangdouren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/guga--circus">咕嘎</a> · by @circus · Human Avatars · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- guga--circus</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/guga--circus/gifs/idle.gif" alt="咕嘎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/gifs/waving.gif" alt="咕嘎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/gifs/running-right.gif" alt="咕嘎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/gifs/waiting.gif" alt="咕嘎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/gifs/review.gif" alt="咕嘎 review" width="120" height="130"></td></tr>
</table>

### Memes

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hami--tat">Hami</a> · by <a href="https://github.com/TATcc">@TATcc</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hami--tat</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hami--tat/gifs/idle.gif" alt="Hami idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/gifs/waving.gif" alt="Hami waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/gifs/running-right.gif" alt="Hami running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/gifs/waiting.gif" alt="Hami waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/gifs/review.gif" alt="Hami review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · by <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · Memes · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- katana-cheems--thankyou-cheems</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/gifs/idle.gif" alt="Katana Cheems idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/gifs/waving.gif" alt="Katana Cheems waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/gifs/running-right.gif" alt="Katana Cheems running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/gifs/waiting.gif" alt="Katana Cheems waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/gifs/review.gif" alt="Katana Cheems review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/hance-woniu--korn">旱厕蜗牛</a> · by @korn · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hance-woniu--korn</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/gifs/idle.gif" alt="旱厕蜗牛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/gifs/waving.gif" alt="旱厕蜗牛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/gifs/running-right.gif" alt="旱厕蜗牛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/gifs/waiting.gif" alt="旱厕蜗牛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/gifs/review.gif" alt="旱厕蜗牛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/maodie--octane0411">耄耋</a> · by <a href="https://github.com/Octane0411">@Octane0411</a> · Memes · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- maodie--octane0411</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/gifs/idle.gif" alt="耄耋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/gifs/waving.gif" alt="耄耋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/gifs/running-right.gif" alt="耄耋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/gifs/waiting.gif" alt="耄耋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/gifs/review.gif" alt="耄耋 review" width="120" height="130"></td></tr>
</table>

### Objects & Props

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/spellbook--seymour">Spellbook</a> · by @seymour · Objects & Props · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- spellbook--seymour</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/gifs/idle.gif" alt="Spellbook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/gifs/waving.gif" alt="Spellbook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/gifs/running-right.gif" alt="Spellbook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/gifs/waiting.gif" alt="Spellbook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/gifs/review.gif" alt="Spellbook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/tiny-crt--chochou">Tiny CRT</a> · by @chochou · Objects & Props · v1</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tiny-crt--chochou</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/gifs/idle.gif" alt="Tiny CRT idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/gifs/waving.gif" alt="Tiny CRT waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/gifs/running-right.gif" alt="Tiny CRT running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/gifs/waiting.gif" alt="Tiny CRT waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/gifs/review.gif" alt="Tiny CRT review" width="120" height="130"></td></tr>
</table>

### Others

<table>
<tr><th>Name</th><td colspan="5"><a href="./pets/twilight-sparkle--wuye3790">紫悦</a> · by <a href="https://github.com/WuYe3790">@WuYe3790</a> · Others · v2</td></tr>
<tr><th>Install</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- twilight-sparkle--wuye3790</code></td></tr>
<tr><th>Action</th><td><strong>Idle</strong></td><td><strong>Waving</strong></td><td><strong>Running</strong></td><td><strong>Waiting</strong></td><td><strong>Review</strong></td></tr>
<tr><th>Preview</th><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/gifs/idle.gif" alt="紫悦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/gifs/waving.gif" alt="紫悦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/gifs/running-right.gif" alt="紫悦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/gifs/waiting.gif" alt="紫悦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/gifs/review.gif" alt="紫悦 review" width="120" height="130"></td></tr>
</table>

## Submit a Pet

Start with the [website contribution guide](https://codexpet.top/guide). It offers three paths without making every contributor download this large asset repository:

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
