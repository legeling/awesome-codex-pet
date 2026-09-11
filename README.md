<div align="center">

# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | [한국어](./docs/ko/README.md) | [日本語](./docs/ja/README.md) | [Español](./docs/es/README.md) | English

<h2><a href="https://codexpet.top">Browse and install free community Codex pets at codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet is a free community pet gallery.</strong> Browse complete animations like a pet store, install a favorite without cloning the repository, or request a missing character that a community contributor may volunteer to make.</p>

<p><a href="https://codexpet.top"><strong>Browse pets</strong></a> · <a href="https://codexpet.top/install"><strong>Install a pet</strong></a> · <a href="https://codexpet.top/request"><strong>Request a character</strong></a></p>

<a href="https://codexpet.top"><img src="./assets/cover/awesome-codex-pet-cover.png" alt="Open the Awesome Codex Pet gallery"></a>

![pets: 239](https://img.shields.io/badge/pets-239-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

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

**[Browse all pets and animations →](https://codexpet.top)**

<table width="100%">
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/firefly--lingxiaotian"><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/idle.webp" alt="Firefly" width="160" height="173"><br>Firefly</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/kid-goku--julianhuang"><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/idle.webp" alt="Kid Goku" width="160" height="173"><br>Kid Goku</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/rem--l1"><img src="https://codexpet.top/assets/previews/rem--l1/webp/idle.webp" alt="Rem" width="160" height="173"><br>Rem</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/happynailong--aquaxyy"><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/idle.webp" alt="大笑奶龙" width="160" height="173"><br>大笑奶龙</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/shinchan--chenxin-dlut"><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/idle.webp" alt="Shin-chan" width="160" height="173"><br>Shin-chan</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/frieren--lingxiaotian"><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/idle.webp" alt="Frieren" width="160" height="173"><br>Frieren</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/buba--yurcek"><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/idle.webp" alt="Buba" width="160" height="173"><br>Buba</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/paimon--lingxiaotian"><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/idle.webp" alt="Paimon" width="160" height="173"><br>Paimon</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/usachi--jack"><img src="https://codexpet.top/assets/previews/usachi--jack/webp/idle.webp" alt="乌萨奇" width="160" height="173"><br>乌萨奇</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/conan--chenxin-dlut"><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/idle.webp" alt="Conan Edogawa" width="160" height="173"><br>Conan Edogawa</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/furina--lingxiaotian"><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/idle.webp" alt="Furina" width="160" height="173"><br>Furina</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/doraemon--xueshi"><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/idle.webp" alt="Doraemon" width="160" height="173"><br>Doraemon</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/jiji--yena"><img src="https://codexpet.top/assets/previews/jiji--yena/webp/idle.webp" alt="Jiji" width="160" height="173"><br>Jiji</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/citlali--zaytsevzy"><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/idle.webp" alt="Citlali" width="160" height="173"><br>Citlali</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/miku--lingxiaotian"><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/idle.webp" alt="Miku" width="160" height="173"><br>Miku</a></td></tr>
</table>

<details>
<summary>Full pet index (text only) · 239</summary>

### Game Characters

<ul>
<li><a href="./pets/firefly--lingxiaotian">Firefly</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/acheron--lingxiaotian">Acheron</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/arlecchino--lingxiaotian">Arlecchino</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/black-swan--lingxiaotian">Black Swan</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/blazer-god--sou2c1">Blazer God</a> · by <a href="https://github.com/SOU2C1">@SOU2C1</a> · v1</li>
<li><a href="./pets/buba--yurcek">Buba</a> · by @yurcek · v1</li>
<li><a href="./pets/castorice--lingxiaotian">Castorice</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/chen--chenxin-dlut">Ch&#39;en</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/citlali--zaytsevzy">Citlali</a> · by <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · v2</li>
<li><a href="./pets/cyrene--lingxiaotian">Cyrene</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/dimo-stand--god-wu">Dimo</a> · by @god-wu · v1</li>
<li><a href="./pets/doro--lingxiaotian">Doro</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/doro--vaevie">Doro</a> · by <a href="https://github.com/vaevie">@vaevie</a> · v2</li>
<li><a href="./pets/feixiao--lingxiaotian">Feixiao</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/furina--lingxiaotian">Furina</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/ganyu--chenxin-dlut">Ganyu</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/hu-tao--lingxiaotian">Hu Tao</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/hyacine--kurisu">Hyacine</a> · by <a href="https://github.com/kurisu994">@kurisu994</a> · v2</li>
<li><a href="./pets/isaac--foggy-whale">Isaac</a> · by <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · v2</li>
<li><a href="./pets/kamisato-ayaka--lingxiaotian">Kamisato Ayaka</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/klee--chenxin-dlut">Klee</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/klee-desk--ayanxu56-boop">KleeDesk</a> · by <a href="https://github.com/ayanxu56-boop">@ayanxu56-boop</a> · v2</li>
<li><a href="./pets/kuro-chibi--kuroneko-night">Kuro Chibi</a> · by <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · v2</li>
<li><a href="./pets/lappland--chenxin-dlut">Lappland</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/little-black-mage--libertis">Little Black Mage</a> · by @libertis · v1</li>
<li><a href="./pets/march-7th--chenxin-dlut">March 7th</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/marisa-kirisame--eigentom">Marisa Kirisame</a> · by <a href="https://github.com/EigenTom">@eigentom</a> · v2</li>
<li><a href="./pets/missile--zpzjzj">Missile</a> · by <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="./pets/miyabi--eric-terminal">Miyabi</a> · by <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · v1</li>
<li><a href="./pets/nahida--lingxiaotian">Nahida</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/navia--lingxiaotian">Navia</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/om-nom--kasyan1337">Om Nom</a> · by <a href="https://github.com/kasyan1337">@kasyan1337</a> · v2</li>
<li><a href="./pets/paimon--lingxiaotian">Paimon</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/phoebe--chenxin-dlut">Phoebe</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/raiden-shogun--lingxiaotian">Raiden Shogun</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/reimu--lingxiaotian">Reimu</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/remielle-dan--erlla">Remielle-Dan / Leimi</a> · by <a href="https://github.com/Erlla">@Erlla</a> · v2</li>
<li><a href="./pets/robin--lingxiaotian">Robin</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/rosmontis--flovst">Rosmontis</a> · by @flovst · v2</li>
<li><a href="./pets/ruan-mei--lingxiaotian">Ruan Mei</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/silver-wolf--lingxiaotian">Silver Wolf</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/sonetto--chenxin-dlut">Sonetto</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/sparkle--lingxiaotian">Sparkle</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/susuta--xiangzi529">Susuta</a> · by <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · v2</li>
<li><a href="./pets/tingyun--lingxiaotian">Tingyun</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/vertin--chenxin-dlut">Vertin</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/yoimiya--chenxin-dlut">Yoimiya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/zani--chenxin-dlut">Zani</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/yae-miko--legeling">Yae Miko</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/dnf-female-ammo--qunboo">女弹药Q</a> · by <a href="https://github.com/QunBoo">@QunBoo</a> · v1</li>
<li><a href="./pets/wukong--jorge-cuevas90003">Wukong</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="./pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · by <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · v2</li>
<li><a href="./pets/new-covenant-exusiai--chenxin-dlut">Exusiai the New Covenant</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/regulus-star-antimony--chenxin-dlut">Regulus</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/lin-pianpian-first-meeting--legeling">林翩翩（初遇）</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/lin-pianpian-date--legeling">林翩翩（约会）</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/lin-pianpian-flower-street--legeling">林翩翩（花街）</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/lin-pianpian-courtesan--legeling">林翩翩（花魁）</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/shen-xinghui--legeling">沈星回</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/chillet--legeling">Chillet</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/arona--legeling">阿罗那</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/youmu--ai-generated">魂魄妖梦</a> · by @ai-generated · v2</li>
</ul>

### Anime Characters

<ul>
<li><a href="./pets/zero-two--mingqingmozhao">Zero Two</a> · by @mingqingmozhao · v1</li>
<li><a href="./pets/anya--chenxin-dlut">Anya</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/asuka--maxg24">Asuka</a> · by <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · v1</li>
<li><a href="./pets/chibi-rei-pet--bendy">Rei Ayanami</a> · by @Bendy · v1</li>
<li><a href="./pets/chotu--makriman">Chotu</a> · by <a href="https://github.com/makriman">@makriman</a> · v2</li>
<li><a href="./pets/conan--chenxin-dlut">Conan Edogawa</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/doraemon--xueshi">Doraemon</a> · by <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · v1</li>
<li><a href="./pets/elaina--nyakku-shigure">Elaina</a> · by <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · v1</li>
<li><a href="./pets/eren--ash-sw">Eren</a> · by <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · v1</li>
<li><a href="./pets/fang-yuan--kelleszzz">Fang Yuan</a> · by <a href="https://github.com/kelleszzz">@kelleszzz</a> · v2</li>
<li><a href="./pets/frieren--lingxiaotian">Frieren</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/zhuzhuxia--ryde-play">GG Bond</a> · by <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="./pets/gojo--lilokhalikfa">Gojo</a> · by <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · v1</li>
<li><a href="./pets/han-li--metro186">Han Li</a> · by <a href="https://github.com/metro186">@metro186</a> · v2</li>
<li><a href="./pets/ikaros--icarus-alpha">Ikaros</a> · by <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · v1</li>
<li><a href="./pets/isekaijoucho--siiverash">Isekaijoucho</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="./pets/jolyne-cujoh--d2682787206-sys">Jolyne Cujoh</a> · by <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · v2</li>
<li><a href="./pets/kaguya-luna--enclairfarron">Kaguya Luna</a> · by <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="./pets/kaiju-no-8--terry878">Kaiju No. 8</a> · by @TERRY878 · v2</li>
<li><a href="./pets/kid--chenxin-dlut">Kaito Kid</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/kid-goku--julianhuang">Kid Goku</a> · by <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · v1</li>
<li><a href="./pets/levi--emrecb">Levi</a> · by <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · v1</li>
<li><a href="./pets/light-fury--legeling">Light Fury</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/luffy-gear-5--jordsshmords1">Luffy Gear 5</a> · by <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · v1</li>
<li><a href="./pets/mahiro--lingxiaotian">Mahiro</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/makima-coat--yuyuabc1">Makima (Coat)</a> · by <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · v2</li>
<li><a href="./pets/makimamini--1sh1ro">Makima</a> · by @1sh1ro · v1</li>
<li><a href="./pets/makisekurisu--m1gr4ine">Makise Kurisu</a> · by @m1gr4ine · v1</li>
<li><a href="./pets/mihari--hyoni1129">Mihari</a> · by <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · v1</li>
<li><a href="./pets/mikoto--lingxiaotian">Mikoto</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/miku--lingxiaotian">Miku</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="./pets/misaka-network--ldl1234">Misaka Network</a> · by <a href="https://github.com/ldl1234">@ldl1234</a> · v2</li>
<li><a href="./pets/nimbus--soraberu">Nimbus</a> · by <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · v1</li>
<li><a href="./pets/rem--l1">Rem</a> · by <a href="https://codex-pets.net/users/l1">@l1</a> · v1</li>
<li><a href="./pets/rinami--siiverash">Rinami Himesaki</a> · by <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="./pets/roxy-pixel--gravity">Roxy Pixel</a> · by @gravity · v1</li>
<li><a href="./pets/saber--petdex-zhenyou-ling">Saber</a> · by @真宵 绫. · v1</li>
<li><a href="./pets/saiki-kusuo--yjt0416">Saiki Kusuo</a> · by <a href="https://github.com/yjt0416">@yjt0416</a> · v1</li>
<li><a href="./pets/sakamoto--zpzjzj">Sakamoto</a> · by <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="./pets/gintoki-pixel--yuu-m">Sakata Gintoki</a> · by @Yuu M. · v1</li>
<li><a href="./pets/shinchan--chenxin-dlut">Shin-chan</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/takamatsu-tomori--a1wace-dev">Takamatsu Tomori</a> · by @A1wace-dev · v2</li>
<li><a href="./pets/togawa-sakiko--enclairfarron">Togawa Sakiko</a> · by <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="./pets/toothless--legeling">Toothless</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/toyama-kasumi--lsmd23">Toyama Kasumi</a> · by <a href="https://github.com/lsmd23">@lsmd23</a> · v2</li>
<li><a href="./pets/violet--lazenca">Violet</a> · by <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · v1</li>
<li><a href="./pets/wakaba-mutsumi--carambola">Wakaba Mutsumi</a> · by @Carambola · v2</li>
<li><a href="./pets/inosuke-hashibira--wangfan002">Inosuke Hashibira</a> · by @wangfan002 · v1</li>
<li><a href="./pets/nangong-wan--bpup">Nangong Wan</a> · by <a href="https://github.com/bpup">@bpup</a> · v2</li>
<li><a href="./pets/zenitsu-agatsuma--wangfan002">Zenitsu Agatsuma</a> · by @wangfan002 · v1</li>
<li><a href="./pets/giyu-tomioka--wangfan002">Giyu Tomioka</a> · by @wangfan002 · v1</li>
<li><a href="./pets/muichiro-tokito--wangfan002">Muichiro Tokito</a> · by @wangfan002 · v1</li>
<li><a href="./pets/tanjiro-kamado--wangfan002">Tanjiro Kamado</a> · by @wangfan002 · v1</li>
<li><a href="./pets/nezuko-kamado--wangfan002">Nezuko Kamado</a> · by @wangfan002 · v1</li>
<li><a href="./pets/luo-xiaohei--legeling">罗小黑</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/fujiwara-chika--klmklmnb">Chika Fujiwara</a> · by <a href="https://github.com/klmklmnb">@klmklmnb</a> · v2</li>
<li><a href="./pets/shinobu-kocho--wangfan002">Shinobu Kocho</a> · by @wangfan002 · v1</li>
<li><a href="./pets/han-li--legeling">韩立</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/bocchi--lingxiaotian">Bocchi</a> · by <a href="https://github.com/legeling">@legeling</a> · v1</li>
</ul>

### Original Characters

<ul>
<li><a href="./pets/aiko--chenxin-dlut">Aiko</a> · by <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="./pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="./pets/codexy--z19t">Codexy</a> · by <a href="https://github.com/z19t">@z19t</a> · v2</li>
<li><a href="./pets/diana--am">Diana</a> · by @am · v1</li>
<li><a href="./pets/hajimi--zeyuwang1999">Hajimi</a> · by <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · v1</li>
<li><a href="./pets/hamo--haipengzzz">Hamo</a> · by <a href="https://github.com/haipengzzz">@haipengzzz</a> · v2</li>
<li><a href="./pets/hana2--initiatione">Hana2</a> · by <a href="https://github.com/initiatione">@initiatione</a> · v1</li>
<li><a href="./pets/iris--yau-427">Iris</a> · by <a href="https://github.com/Yau-427">@Yau-427</a> · v2</li>
<li><a href="./pets/jesse-the-fox--itjesse">JesseTheFox</a> · by <a href="https://github.com/ITJesse">@ITJesse</a> · v2</li>
<li><a href="./pets/joker--oytyo">Joker</a> · by @oytyo · v2</li>
<li><a href="./pets/linnea--nyakku-shigure">Linnea</a> · by @nyakku-shigure · v1</li>
<li><a href="./pets/lumei--dagwbl">Lumei</a> · by <a href="https://github.com/Dagwbl">@Dagwbl</a> · v2</li>
<li><a href="./pets/mika--rotl24">Mika</a> · by <a href="https://github.com/ROTl24">@ROTl24</a> · v1</li>
<li><a href="./pets/minty--somnusochi">Minty</a> · by <a href="https://github.com/Somnusochi">@Somnusochi</a> · v2</li>
<li><a href="./pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · by <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · v1</li>
<li><a href="./pets/shian-helper--mistyshen">Shian</a> · by <a href="https://github.com/mistyShen">@mistyShen</a> · v1</li>
<li><a href="./pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="./pets/yier--gbn666">Yi Er</a> · by <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="./pets/yume-boundary--andy-meow">Yume</a> · by @andy-meow · v1</li>
<li><a href="./pets/yuzubou--keseras34938976">Yuzubou</a> · by <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · v1</li>
<li><a href="./pets/gudong--rank">咕咚</a> · by @Rank · v2</li>
<li><a href="./pets/liubao--killyer">榴宝</a> · by @killyer · v2</li>
<li><a href="./pets/feibi--vanfff">菲比</a> · by @vanfff · v1</li>
</ul>

### Mascots

<ul>
<li><a href="./pets/aemeath-mini--cunuo">Aemeath Mini</a> · by <a href="https://github.com/cuNuo">@cuNuo</a> · v1</li>
<li><a href="./pets/apu--xchangee">Apu</a> · by <a href="https://github.com/xchangee">@xchangee</a> · v1</li>
<li><a href="./pets/claude--xiangking">Claude</a> · by <a href="https://github.com/xiangking">@xiangking</a> · v1</li>
<li><a href="./pets/twinkle-twinkle--twinkletwinkle">Dashun&#39;s Twinkle Twinkle</a> · by @twinkletwinkle · v1</li>
<li><a href="./pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="./pets/gpt-muse--opask">GPT-muse</a> · by @opask · v1</li>
<li><a href="./pets/lulu--yogazz">Lulu</a> · by <a href="https://github.com/YoGazz">@YoGazz</a> · v1</li>
<li><a href="./pets/saki--rookie-09">Saki</a> · by <a href="https://github.com/rookie-09">@rookie-09</a> · v1</li>
<li><a href="./pets/serge-le-lapin--legeling">Serge le Lapin</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/sleepwing--lttxzmj">Sleepwing</a> · by <a href="https://github.com/lttxzmj">@lttxzmj</a> · v2</li>
<li><a href="./pets/wally--wally025">Wally</a> · by <a href="https://github.com/wally025">@wally025</a> · v1</li>
<li><a href="./pets/zhengyin--noonwake">Zhengyin</a> · by <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · v2</li>
<li><a href="./pets/happynailong--aquaxyy">大笑奶龙</a> · by @aquaxyy · v1</li>
<li><a href="./pets/bubu-codebrew-bear--xxhh0822">布布</a> · by <a href="https://github.com/xxhh0822">@xxhh0822</a> · v2</li>
</ul>

### Animals

<ul>
<li><a href="./pets/becky--natewanggg">Becky</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="./pets/bubu--gbn666">Bubu</a> · by <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="./pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · by <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · v1</li>
<li><a href="./pets/desk-otter--zihualiu1997">Desk Otter</a> · by <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · v1</li>
<li><a href="./pets/diandian--lllucasxu">Diandian</a> · by <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · v1</li>
<li><a href="./pets/dudu-bubu--clembuilds">Dudu &amp; Bubu</a> · by @clembuilds · v1</li>
<li><a href="./pets/ella-wave--sehjk">Ella Wave</a> · by @sehjk · v1</li>
<li><a href="./pets/fleta--natewanggg">Fleta</a> · by <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="./pets/frankie--aygunvarol">Frankie</a> · by <a href="https://github.com/AygunVarol">@AygunVarol</a> · v1</li>
<li><a href="./pets/jiji--yena">Jiji</a> · by @yena · v1</li>
<li><a href="./pets/kiko--untko">Kiko</a> · by <a href="https://github.com/untko">@untko</a> · v2</li>
<li><a href="./pets/kimoju--andiac">Kimoju</a> · by @andiac · v2</li>
<li><a href="./pets/lil-swole--gg0805">Lil Swole</a> · by <a href="https://github.com/gg0805">@gg0805</a> · v2</li>
<li><a href="./pets/little-sheep--mingdong">Little Sheep</a> · by @MingDong · v1</li>
<li><a href="./pets/mai--dwdestiny">Mai</a> · by <a href="https://github.com/DwDestiny">@DwDestiny</a> · v1</li>
<li><a href="./pets/mellow-duck--sally-entr">Mellow Duck</a> · by @sally-entr · v1</li>
<li><a href="./pets/mimi--spacebody">Mimi</a> · by <a href="https://github.com/Spacebody">@Spacebody</a> · v1</li>
<li><a href="./pets/moomew-coder-cat--ping">MooMew Coder</a> · by @ping · v1</li>
<li><a href="./pets/panda--jason-bai">Panda</a> · by <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · v1</li>
<li><a href="./pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · by <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · v1</li>
<li><a href="./pets/rook--klubbyte">Rook</a> · by @klubbyte · v1</li>
<li><a href="./pets/miu-meo--lemon-z">SalaryCat</a> · by @lemon-z · v2</li>
<li><a href="./pets/salary-cat--zuochunjie">SalaryCat</a> · by <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · v2</li>
<li><a href="./pets/shaun--ryde-play">Shaun the Sheep</a> · by <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="./pets/sunny-retriever--legeling">Sunny Retriever</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/teddy--danieloleary">Teddy</a> · by <a href="https://github.com/danieloleary">@danieloleary</a> · v1</li>
<li><a href="./pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · by <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="./pets/usachi--jack">乌萨奇</a> · by @jack · v1</li>
<li><a href="./pets/yuanbao--legeling">元宝</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · by @1wphantom · v2</li>
<li><a href="./pets/tuantuan--jbbom">团团</a> · by <a href="https://github.com/JbBom">@JbBom</a> · v1</li>
<li><a href="./pets/duodong--froggie">多栋</a> · by @froggie · v1</li>
<li><a href="./pets/naiwa--sandytruant">奶蛙</a> · by <a href="https://github.com/sandytruant">@sandytruant</a> · v2</li>
<li><a href="./pets/xiaoba-cat--jack">小八猫</a> · by @jack · v1</li>
<li><a href="./pets/xiaomai--brian-3">小麦 XiaoMai</a> · by @brian-3 · v2</li>
<li><a href="./pets/koukou-penguin--hoody">扣扣企鹅</a> · by @hoody · v2</li>
<li><a href="./pets/capybara-lulu--jiushu">水豚噜噜</a> · by @jiushu · v1</li>
<li><a href="./pets/niumou--jarvis-2">牛哞</a> · by @jarvis-2 · v2</li>
<li><a href="./pets/zichao-xiong--z-kzhang">自嘲熊</a> · by @z-kzhang · v1</li>
<li><a href="./pets/jinmao--legeling">金毛</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/wucanrou--ch">金渐层（午餐肉）</a> · by <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · v2</li>
</ul>

### Fantasy Creatures

<ul>
<li><a href="./pets/behemoth--kajdrak2">Behemoth</a> · by <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · v2</li>
<li><a href="./pets/goblin--rkwap">Goblin</a> · by @rkwap · v1</li>
<li><a href="./pets/luna-angel-cat--neve">luna_angel cat</a> · by @neve · v2</li>
<li><a href="./pets/night-neko--netizenxuan">Night Neko</a> · by <a href="https://github.com/netizenXuan">@netizenXuan</a> · v1</li>
<li><a href="./pets/starcorn--alterhq">Starcorn</a> · by <a href="https://github.com/alterhq">@alterhq</a> · v1</li>
<li><a href="./pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · by <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · v1</li>
<li><a href="./pets/yuanzai--gaming33">Yuanzai</a> · by <a href="https://github.com/Gaming33">@Gaming33</a> · v1</li>
</ul>

### Robots

<ul>
<li><a href="./pets/chispa--giiilberto-nm">Chispa</a> · by @giiilberto-nm · v1</li>
<li><a href="./pets/codenono--dq02">CodeNoNo</a> · by <a href="https://github.com/Dqd02">@Dqd02</a> · v1</li>
<li><a href="./pets/crt-monitor--wxy">CRT Monitor</a> · by @wxy · v2</li>
<li><a href="./pets/xiaoda--legeling">小达</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### Human Avatars

<ul>
<li><a href="./pets/azuma--tairazuma">Azuma</a> · by @tairazuma · v1</li>
<li><a href="./pets/tangdouren--carl312">Tangdouren</a> · by <a href="https://github.com/Carl-312">@Carl-312</a> · v1</li>
<li><a href="./pets/guga--circus">咕嘎</a> · by @circus · v1</li>
<li><a href="./pets/fengge--qzl1-stack">峰哥</a> · by <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · v1</li>
<li><a href="./pets/xiang-an--legeling">翔安</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### Memes

<ul>
<li><a href="./pets/drill-cat--qimi">Drill Cat</a> · by <a href="https://github.com/qishichuan">@qishichuan</a> · v2</li>
<li><a href="./pets/hami--tat">Hami</a> · by <a href="https://github.com/TATcc">@TATcc</a> · v2</li>
<li><a href="./pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · by <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · v1</li>
<li><a href="./pets/pickle-rick--ryde-play">Pickle Rick</a> · by <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="./pets/hance-woniu--korn">旱厕蜗牛</a> · by @korn · v2</li>
<li><a href="./pets/niulai--legeling">牛来</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/niulaima--ryde-play">Niulai&#39;s Mom</a> · by <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="./pets/maodie--octane0411">耄耋</a> · by <a href="https://github.com/Octane0411">@Octane0411</a> · v2</li>
</ul>

### Objects & Props

<ul>
<li><a href="./pets/spellbook--seymour">Spellbook</a> · by @seymour · v1</li>
<li><a href="./pets/tiny-crt--chochou">Tiny CRT</a> · by @chochou · v1</li>
</ul>

### Others

<ul>
<li><a href="./pets/agamemnon--kazecreator">Agamemnon</a> · by <a href="https://github.com/kazecreator">@kazecreator</a> · v2</li>
<li><a href="./pets/deepseek-girl--legeling">DeepSeek Girl</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/sylas-ravenshade--legeling">Sylas Ravenshade</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/templar-knight--jorge-cuevas90003">Templar Knight</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="./pets/march-7th--legeling">March 7th</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/kuromi--legeling">Kuromi</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/wo-de-dao-dun--legeling">Wo De Dao Dun</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/xingxingren--legeling">Star Person</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/izumi-konata--legeling">Izumi Konata</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/yanlingji--jorge-cuevas90003">Yan Lingji</a> · by <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="./pets/yao-true-self-hertz--legeling">Yao: True Self Hertz</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/twilight-sparkle--wuye3790">紫悦</a> · by <a href="https://github.com/WuYe3790">@WuYe3790</a> · v2</li>
<li><a href="./pets/longying--legeling">胧萤</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="./pets/bond-forger--legeling">Bond Forger</a> · by <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

</details>

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
