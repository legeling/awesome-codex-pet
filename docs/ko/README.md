<div align="center">

# Awesome Codex Pet

[English](../../README.md) | [简体中文](../zh-CN/README.md) | 한국어 | [日本語](../ja/README.md) | [Español](../es/README.md)

<h2><a href="https://codexpet.top">codexpet.top에서 무료 커뮤니티 Codex 펫을 둘러보고 설치하세요 →</a></h2>

<p><strong>Awesome Codex Pet은 무료 커뮤니티 펫 갤러리입니다.</strong> 펫 상점처럼 완성된 애니메이션을 둘러보고, 저장소를 복제하지 않아도 마음에 드는 펫을 설치할 수 있습니다. 원하는 캐릭터가 없다면 커뮤니티에 제작을 요청할 수 있습니다.</p>

<p><a href="https://codexpet.top"><strong>펫 둘러보기</strong></a> · <a href="https://codexpet.top/install"><strong>펫 설치하기</strong></a> · <a href="https://codexpet.top/request"><strong>캐릭터 요청하기</strong></a></p>

<a href="https://codexpet.top"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="Awesome Codex Pet 갤러리 열기"></a>

![pets: 239](https://img.shields.io/badge/pets-239-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

</div>

이 저장소는 [codexpet.top](https://codexpet.top)의 원본 카탈로그입니다. 설치 가능한 펫 패키지, 제작자 정보, 컬렉션 메타데이터, 검증 도구, 기여 이력을 관리합니다. 펫을 둘러보고 설치하려면 웹사이트를 먼저 이용하세요.

## 주요 기능

- **한 줄 설치** — 저장소 복제나 수동 설정 없이 macOS / Linux / Windows에서 설치
- **무료 커뮤니티 갤러리** — [codexpet.top](https://codexpet.top)에서 완성된 애니메이션 미리 보기, 컬렉션, 제작자 프로필, 설치 수와 좋아요를 기준으로 한 주간 순위, 공유, 커뮤니티 통계 제공
- **무료 캐릭터 요청** — spritesheet를 만들지 않아도 캐릭터와 참고 자료를 제출할 수 있으며, 커뮤니티 제작자가 자원할 수 있습니다. 제작을 보장하지는 않습니다.
- **AI 우선 기여** — Codex로 펫을 만들고, 고치고, 제출할 수 있으며, 숙련된 기여자는 직접 PR을 열 수 있습니다.
- **열린 라이선스** — 코드에는 MIT, 펫 자산에는 CC BY-NC 4.0 적용

각 펫은 공유할 수 있는 작은 패키지입니다.

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

미리 보기 이미지는 로컬 또는 CI 빌드 결과로 `assets/previews/<pet-id>/`에 생성되며, 펫 폴더 안에는 넣지 않습니다.

저장소에서 정의한 시리즈와 컬렉션은 `collections.json`에 있습니다. `kind: franchise`는 같은 원작의 펫을, `kind: theme`는 주제나 스타일이 이어지는 여러 원작의 펫을 나타냅니다. 펫은 `submission.json.collections`에 slug를 적어 소속을 선언하며, 카탈로그와 웹사이트는 이 메타데이터로 생성됩니다. 소속 정보는 바로 기록되지만, 컬렉션은 펫이 3개 이상일 때만 웹사이트에 공개됩니다.

`submission.json.name`은 필수 기본 이름입니다. 제작자는 `localized_names`를 생략해 한 언어만 사용할 수 있고, `localized_names.en`과 `localized_names.zh`를 함께 제공해 이중 언어 이름을 지원할 수도 있습니다. 웹사이트는 방문자가 선택한 언어를 따르며 이름을 임의로 번역하지 않습니다.

## 펫 버전

| 버전 | 아틀라스                | 런타임 메타데이터                   | 용도                                  |
| ---- | ----------------------- | ----------------------------------- | ------------------------------------- |
| v1   | `1536x1872`, 8열 × 9행  | `spriteVersionNumber` 생략 또는 `1` | 기존 표준 애니메이션 펫               |
| v2   | `1536x2288`, 8열 × 11행 | `spriteVersionNumber: 2`            | 표준 애니메이션과 16개 시계 방향 시선 |

두 버전 모두 설치할 수 있습니다. 기존 9행 펫을 관리할 때는 v1을 사용하고, 시선 방향이 필요한 새 펫이나 업그레이드 펫에는 v2를 사용하세요.

## 빠른 설치

저장소를 복제할 필요가 없습니다. 사용하는 셸에 맞는 명령을 선택하세요.

```bash
# macOS / Linux
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB -MaximumRedirection 5 -TimeoutSec 120 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian -RawBase 'https://raw.githubusercontent.com/legeling/awesome-codex-pet/main'"
```

```bash
# 로컬 저장소에서 Node.js로 실행
npm run install:pet -- firefly--lingxiaotian
```

설치 가능한 펫 목록 보기:

```bash
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main --list
```

기본 설치 위치:

- macOS / Linux: `~/.codex/pets/<pet-id>/`
- Windows: `%USERPROFILE%\.codex\pets\<pet-id>\`

`CODEX_HOME`으로 설치 위치를 바꾸거나 `AWESOME_CODEX_PET_NO_STATS=1`을 설정해 익명 설치 집계를 끌 수 있습니다. 설치기는 저장소 매니페스트와 SHA-256을 검증하고 임시 디렉터리에서 원자적으로 활성화하며, 기존 펫을 교체할 때는 `--force`가 필요합니다. 재현 가능한 설치가 필요하면 두 URL의 `main`을 변경할 수 없는 commit 또는 tag로 바꾸세요.

## 기존 v1 펫 업그레이드

1. Codex에서 **Settings → Pets**를 엽니다.
2. 설치한 사용자 펫을 찾아 **Update**를 선택합니다.
3. Codex가 Hatch Pet 작업을 엽니다. 현재 v2 흐름은 기존 9개 애니메이션 행을 검증하고 보존한 뒤, 네 방향 기준점과 16개 시선 방향을 생성하여 `spriteVersionNumber: 2`가 설정된 11행 아틀라스를 작성합니다.
4. 교체를 수락하기 전에 생성된 contact sheet와 방향 미리 보기를 검토합니다.

**Update** 동작은 이 저장소의 다운로드 알림이 아니라 AI가 돕는 v1-to-v2 변환입니다. `~/.codex/pets/` 아래의 로컬 패키지만 갱신하며 GitHub 저장소 사본을 자동으로 수정하거나 제출하지 않습니다.

## 펫 목록

**[모든 펫과 애니메이션 보기 →](https://codexpet.top/ko)**

<table width="100%">
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/firefly--lingxiaotian"><img src="../../assets/readme/firefly--lingxiaotian.gif" alt="Firefly" width="160" height="173"><br>Firefly</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/kid-goku--julianhuang"><img src="../../assets/readme/kid-goku--julianhuang.gif" alt="Kid Goku" width="160" height="173"><br>Kid Goku</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/rem--l1"><img src="../../assets/readme/rem--l1.gif" alt="Rem" width="160" height="173"><br>Rem</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/happynailong--aquaxyy"><img src="../../assets/readme/happynailong--aquaxyy.gif" alt="大笑奶龙" width="160" height="173"><br>大笑奶龙</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/shinchan--chenxin-dlut"><img src="../../assets/readme/shinchan--chenxin-dlut.gif" alt="Shinchan" width="160" height="173"><br>Shinchan</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/frieren--lingxiaotian"><img src="../../assets/readme/frieren--lingxiaotian.gif" alt="Frieren" width="160" height="173"><br>Frieren</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/buba--yurcek"><img src="../../assets/readme/buba--yurcek.gif" alt="Buba" width="160" height="173"><br>Buba</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/paimon--lingxiaotian"><img src="../../assets/readme/paimon--lingxiaotian.gif" alt="Paimon" width="160" height="173"><br>Paimon</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/usachi--jack"><img src="../../assets/readme/usachi--jack.gif" alt="乌萨奇" width="160" height="173"><br>乌萨奇</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/conan--chenxin-dlut"><img src="../../assets/readme/conan--chenxin-dlut.gif" alt="Conan" width="160" height="173"><br>Conan</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/furina--lingxiaotian"><img src="../../assets/readme/furina--lingxiaotian.gif" alt="Furina" width="160" height="173"><br>Furina</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/doraemon--xueshi"><img src="../../assets/readme/doraemon--xueshi.gif" alt="Doraemon" width="160" height="173"><br>Doraemon</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/jiji--yena"><img src="../../assets/readme/jiji--yena.gif" alt="Jiji" width="160" height="173"><br>Jiji</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/citlali--zaytsevzy"><img src="../../assets/readme/citlali--zaytsevzy.gif" alt="Citlali" width="160" height="173"><br>Citlali</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/miku--lingxiaotian"><img src="../../assets/readme/miku--lingxiaotian.gif" alt="Miku" width="160" height="173"><br>Miku</a></td></tr>
</table>

<details>
<summary>전체 펫 목록 (텍스트) · 239</summary>

### 게임 캐릭터

<ul>
<li><a href="../../pets/firefly--lingxiaotian">Firefly</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/acheron--lingxiaotian">Acheron</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/arlecchino--lingxiaotian">Arlecchino</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/black-swan--lingxiaotian">Black Swan</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/blazer-god--sou2c1">Blazer God</a> · 제작자 <a href="https://github.com/SOU2C1">@SOU2C1</a> · v1</li>
<li><a href="../../pets/buba--yurcek">Buba</a> · 제작자 @yurcek · v1</li>
<li><a href="../../pets/castorice--lingxiaotian">Castorice</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/chen--chenxin-dlut">Chen</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/citlali--zaytsevzy">Citlali</a> · 제작자 <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · v2</li>
<li><a href="../../pets/cyrene--lingxiaotian">Cyrene</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/dimo-stand--god-wu">Dimo</a> · 제작자 @god-wu · v1</li>
<li><a href="../../pets/doro--lingxiaotian">Doro</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/doro--vaevie">Doro</a> · 제작자 <a href="https://github.com/vaevie">@vaevie</a> · v2</li>
<li><a href="../../pets/feixiao--lingxiaotian">Feixiao</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/furina--lingxiaotian">Furina</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/ganyu--chenxin-dlut">Ganyu</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/hu-tao--lingxiaotian">Hu Tao</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/hyacine--kurisu">Hyacine</a> · 제작자 <a href="https://github.com/kurisu994">@kurisu994</a> · v2</li>
<li><a href="../../pets/isaac--foggy-whale">Isaac</a> · 제작자 <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · v2</li>
<li><a href="../../pets/kamisato-ayaka--lingxiaotian">Kamisato Ayaka</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/klee--chenxin-dlut">Klee</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/klee-desk--ayanxu56-boop">KleeDesk</a> · 제작자 <a href="https://github.com/ayanxu56-boop">@ayanxu56-boop</a> · v2</li>
<li><a href="../../pets/kuro-chibi--kuroneko-night">Kuro Chibi</a> · 제작자 <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · v2</li>
<li><a href="../../pets/lappland--chenxin-dlut">Lappland</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/little-black-mage--libertis">Little Black Mage</a> · 제작자 @libertis · v1</li>
<li><a href="../../pets/march-7th--chenxin-dlut">March 7th</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/marisa-kirisame--eigentom">Marisa Kirisame</a> · 제작자 <a href="https://github.com/EigenTom">@eigentom</a> · v2</li>
<li><a href="../../pets/missile--zpzjzj">Missile</a> · 제작자 <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="../../pets/miyabi--eric-terminal">Miyabi</a> · 제작자 <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · v1</li>
<li><a href="../../pets/nahida--lingxiaotian">Nahida</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/navia--lingxiaotian">Navia</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/om-nom--kasyan1337">Om Nom</a> · 제작자 <a href="https://github.com/kasyan1337">@kasyan1337</a> · v2</li>
<li><a href="../../pets/paimon--lingxiaotian">Paimon</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/phoebe--chenxin-dlut">Phoebe</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/raiden-shogun--lingxiaotian">Raiden Shogun</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/reimu--lingxiaotian">Reimu</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/remielle-dan--erlla">Remielle-Dan / Leimi</a> · 제작자 <a href="https://github.com/Erlla">@Erlla</a> · v2</li>
<li><a href="../../pets/robin--lingxiaotian">Robin</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/rosmontis--flovst">Rosmontis</a> · 제작자 @flovst · v2</li>
<li><a href="../../pets/ruan-mei--lingxiaotian">Ruan Mei</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/silver-wolf--lingxiaotian">Silver Wolf</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/sonetto--chenxin-dlut">Sonetto</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/sparkle--lingxiaotian">Sparkle</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/susuta--xiangzi529">Susuta</a> · 제작자 <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · v2</li>
<li><a href="../../pets/tingyun--lingxiaotian">Tingyun</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/vertin--chenxin-dlut">Vertin</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/yoimiya--chenxin-dlut">Yoimiya</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/zani--chenxin-dlut">Zani</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/yae-miko--legeling">八重神子</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 제작자 <a href="https://github.com/QunBoo">@QunBoo</a> · v1</li>
<li><a href="../../pets/wukong--jorge-cuevas90003">悟空</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · 제작자 <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · v2</li>
<li><a href="../../pets/new-covenant-exusiai--chenxin-dlut">新约能天使</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/regulus-star-antimony--chenxin-dlut">星锑</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/lin-pianpian-first-meeting--legeling">林翩翩（初遇）</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-date--legeling">林翩翩（约会）</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-flower-street--legeling">林翩翩（花街）</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-courtesan--legeling">林翩翩（花魁）</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/shen-xinghui--legeling">沈星回</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/chillet--legeling">疾旋鼬</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/arona--legeling">阿罗那</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/youmu--ai-generated">魂魄妖梦</a> · 제작자 @ai-generated · v2</li>
</ul>

### 애니메이션 캐릭터

<ul>
<li><a href="../../pets/zero-two--mingqingmozhao">02</a> · 제작자 @mingqingmozhao · v1</li>
<li><a href="../../pets/anya--chenxin-dlut">Anya</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/asuka--maxg24">Asuka</a> · 제작자 <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · v1</li>
<li><a href="../../pets/chibi-rei-pet--bendy">Chibi Rei Pet</a> · 제작자 @Bendy · v1</li>
<li><a href="../../pets/chotu--makriman">Chotu</a> · 제작자 <a href="https://github.com/makriman">@makriman</a> · v2</li>
<li><a href="../../pets/conan--chenxin-dlut">Conan</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/doraemon--xueshi">Doraemon</a> · 제작자 <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · v1</li>
<li><a href="../../pets/elaina--nyakku-shigure">Elaina</a> · 제작자 <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · v1</li>
<li><a href="../../pets/eren--ash-sw">Eren</a> · 제작자 <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · v1</li>
<li><a href="../../pets/fang-yuan--kelleszzz">Fang Yuan</a> · 제작자 <a href="https://github.com/kelleszzz">@kelleszzz</a> · v2</li>
<li><a href="../../pets/frieren--lingxiaotian">Frieren</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/zhuzhuxia--ryde-play">GG Bond</a> · 제작자 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/gojo--lilokhalikfa">Gojo</a> · 제작자 <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · v1</li>
<li><a href="../../pets/han-li--metro186">Han Li</a> · 제작자 <a href="https://github.com/metro186">@metro186</a> · v2</li>
<li><a href="../../pets/ikaros--icarus-alpha">Ikaros</a> · 제작자 <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · v1</li>
<li><a href="../../pets/isekaijoucho--siiverash">Isekaijoucho</a> · 제작자 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="../../pets/jolyne-cujoh--d2682787206-sys">Jolyne Cujoh</a> · 제작자 <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · v2</li>
<li><a href="../../pets/kaguya-luna--enclairfarron">Kaguya Luna</a> · 제작자 <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="../../pets/kaiju-no-8--terry878">Kaiju No. 8</a> · 제작자 @TERRY878 · v2</li>
<li><a href="../../pets/kid--chenxin-dlut">Kid</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/kid-goku--julianhuang">Kid Goku</a> · 제작자 <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · v1</li>
<li><a href="../../pets/levi--emrecb">Levi</a> · 제작자 <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · v1</li>
<li><a href="../../pets/light-fury--legeling">Light Fury</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/luffy-gear-5--jordsshmords1">Luffy Gear 5</a> · 제작자 <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · v1</li>
<li><a href="../../pets/mahiro--lingxiaotian">Mahiro</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/makima-coat--yuyuabc1">Makima (Coat)</a> · 제작자 <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · v2</li>
<li><a href="../../pets/makimamini--1sh1ro">MakimaMini</a> · 제작자 @1sh1ro · v1</li>
<li><a href="../../pets/makisekurisu--m1gr4ine">Makise Kurisu</a> · 제작자 @m1gr4ine · v1</li>
<li><a href="../../pets/mihari--hyoni1129">Mihari</a> · 제작자 <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · v1</li>
<li><a href="../../pets/mikoto--lingxiaotian">Mikoto</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/miku--lingxiaotian">Miku</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/misaka-network--ldl1234">Misaka Network</a> · 제작자 <a href="https://github.com/ldl1234">@ldl1234</a> · v2</li>
<li><a href="../../pets/nimbus--soraberu">Nimbus</a> · 제작자 <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · v1</li>
<li><a href="../../pets/rem--l1">Rem</a> · 제작자 <a href="https://codex-pets.net/users/l1">@l1</a> · v1</li>
<li><a href="../../pets/rinami--siiverash">Rinami Himesaki</a> · 제작자 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="../../pets/roxy-pixel--gravity">Roxy Pixel</a> · 제작자 @gravity · v1</li>
<li><a href="../../pets/saber--petdex-zhenyou-ling">Saber</a> · 제작자 @真宵 绫. · v1</li>
<li><a href="../../pets/saiki-kusuo--yjt0416">Saiki Kusuo</a> · 제작자 <a href="https://github.com/yjt0416">@yjt0416</a> · v1</li>
<li><a href="../../pets/sakamoto--zpzjzj">Sakamoto</a> · 제작자 <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="../../pets/gintoki-pixel--yuu-m">Sakata Gintoki</a> · 제작자 @Yuu M. · v1</li>
<li><a href="../../pets/shinchan--chenxin-dlut">Shinchan</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/takamatsu-tomori--a1wace-dev">Takamatsu Tomori</a> · 제작자 @A1wace-dev · v2</li>
<li><a href="../../pets/togawa-sakiko--enclairfarron">Togawa Sakiko</a> · 제작자 <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="../../pets/toothless--legeling">Toothless</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/toyama-kasumi--lsmd23">Toyama Kasumi</a> · 제작자 <a href="https://github.com/lsmd23">@lsmd23</a> · v2</li>
<li><a href="../../pets/violet--lazenca">Violet</a> · 제작자 <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · v1</li>
<li><a href="../../pets/wakaba-mutsumi--carambola">Wakaba Mutsumi</a> · 제작자 @Carambola · v2</li>
<li><a href="../../pets/inosuke-hashibira--wangfan002">伊之助 Q版 丰富动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/nangong-wan--bpup">南宫婉</a> · 제작자 <a href="https://github.com/bpup">@bpup</a> · v2</li>
<li><a href="../../pets/zenitsu-agatsuma--wangfan002">善逸 Q版 丰富动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/giyu-tomioka--wangfan002">富冈义勇 Q版 丰富动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/muichiro-tokito--wangfan002">时透无一郎 Q版 空灵动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/tanjiro-kamado--wangfan002">炭治郎 Q版 丰富动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/nezuko-kamado--wangfan002">祢豆子 Q版 丰富动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/luo-xiaohei--legeling">罗小黑</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/fujiwara-chika--klmklmnb">藤原千花</a> · 제작자 <a href="https://github.com/klmklmnb">@klmklmnb</a> · v2</li>
<li><a href="../../pets/shinobu-kocho--wangfan002">蝴蝶忍 Q版 华丽动作</a> · 제작자 @wangfan002 · v1</li>
<li><a href="../../pets/han-li--legeling">韩立</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/bocchi--lingxiaotian">Bocchi</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v1</li>
</ul>

### 오리지널 캐릭터

<ul>
<li><a href="../../pets/aiko--chenxin-dlut">Aiko</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/codexy--z19t">Codexy</a> · 제작자 <a href="https://github.com/z19t">@z19t</a> · v2</li>
<li><a href="../../pets/diana--am">Diana</a> · 제작자 @am · v1</li>
<li><a href="../../pets/hajimi--zeyuwang1999">Hajimi</a> · 제작자 <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · v1</li>
<li><a href="../../pets/hamo--haipengzzz">Hamo</a> · 제작자 <a href="https://github.com/haipengzzz">@haipengzzz</a> · v2</li>
<li><a href="../../pets/hana2--initiatione">Hana2</a> · 제작자 <a href="https://github.com/initiatione">@initiatione</a> · v1</li>
<li><a href="../../pets/iris--yau-427">Iris</a> · 제작자 <a href="https://github.com/Yau-427">@Yau-427</a> · v2</li>
<li><a href="../../pets/jesse-the-fox--itjesse">JesseTheFox</a> · 제작자 <a href="https://github.com/ITJesse">@ITJesse</a> · v2</li>
<li><a href="../../pets/joker--oytyo">Joker</a> · 제작자 @oytyo · v2</li>
<li><a href="../../pets/linnea--nyakku-shigure">Linnea</a> · 제작자 @nyakku-shigure · v1</li>
<li><a href="../../pets/lumei--dagwbl">Lumei</a> · 제작자 <a href="https://github.com/Dagwbl">@Dagwbl</a> · v2</li>
<li><a href="../../pets/mika--rotl24">Mika</a> · 제작자 <a href="https://github.com/ROTl24">@ROTl24</a> · v1</li>
<li><a href="../../pets/minty--somnusochi">Minty</a> · 제작자 <a href="https://github.com/Somnusochi">@Somnusochi</a> · v2</li>
<li><a href="../../pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · 제작자 <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · v1</li>
<li><a href="../../pets/shian-helper--mistyshen">Shian</a> · 제작자 <a href="https://github.com/mistyShen">@mistyShen</a> · v1</li>
<li><a href="../../pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/yier--gbn666">Yi Er</a> · 제작자 <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="../../pets/yume-boundary--andy-meow">Yume</a> · 제작자 @andy-meow · v1</li>
<li><a href="../../pets/yuzubou--keseras34938976">Yuzubou</a> · 제작자 <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · v1</li>
<li><a href="../../pets/gudong--rank">咕咚</a> · 제작자 @Rank · v2</li>
<li><a href="../../pets/liubao--killyer">榴宝</a> · 제작자 @killyer · v2</li>
<li><a href="../../pets/feibi--vanfff">菲比</a> · 제작자 @vanfff · v1</li>
</ul>

### 마스코트

<ul>
<li><a href="../../pets/aemeath-mini--cunuo">Aemeath Mini</a> · 제작자 <a href="https://github.com/cuNuo">@cuNuo</a> · v1</li>
<li><a href="../../pets/apu--xchangee">Apu</a> · 제작자 <a href="https://github.com/xchangee">@xchangee</a> · v1</li>
<li><a href="../../pets/claude--xiangking">Claude</a> · 제작자 <a href="https://github.com/xiangking">@xiangking</a> · v1</li>
<li><a href="../../pets/twinkle-twinkle--twinkletwinkle">Dashun&#39;s Twinkle Twinkle</a> · 제작자 @twinkletwinkle · v1</li>
<li><a href="../../pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · 제작자 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="../../pets/gpt-muse--opask">GPT-muse</a> · 제작자 @opask · v1</li>
<li><a href="../../pets/lulu--yogazz">Lulu</a> · 제작자 <a href="https://github.com/YoGazz">@YoGazz</a> · v1</li>
<li><a href="../../pets/saki--rookie-09">Saki</a> · 제작자 <a href="https://github.com/rookie-09">@rookie-09</a> · v1</li>
<li><a href="../../pets/serge-le-lapin--legeling">Serge le Lapin</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/sleepwing--lttxzmj">Sleepwing</a> · 제작자 <a href="https://github.com/lttxzmj">@lttxzmj</a> · v2</li>
<li><a href="../../pets/wally--wally025">Wally</a> · 제작자 <a href="https://github.com/wally025">@wally025</a> · v1</li>
<li><a href="../../pets/zhengyin--noonwake">Zhengyin</a> · 제작자 <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · v2</li>
<li><a href="../../pets/happynailong--aquaxyy">大笑奶龙</a> · 제작자 @aquaxyy · v1</li>
<li><a href="../../pets/bubu-codebrew-bear--xxhh0822">布布</a> · 제작자 <a href="https://github.com/xxhh0822">@xxhh0822</a> · v2</li>
</ul>

### 동물 친구

<ul>
<li><a href="../../pets/becky--natewanggg">Becky</a> · 제작자 <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="../../pets/bubu--gbn666">Bubu</a> · 제작자 <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="../../pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · 제작자 <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · v1</li>
<li><a href="../../pets/desk-otter--zihualiu1997">Desk Otter</a> · 제작자 <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · v1</li>
<li><a href="../../pets/diandian--lllucasxu">Diandian</a> · 제작자 <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · v1</li>
<li><a href="../../pets/dudu-bubu--clembuilds">Dudu &amp; Bubu</a> · 제작자 @clembuilds · v1</li>
<li><a href="../../pets/ella-wave--sehjk">Ella Wave</a> · 제작자 @sehjk · v1</li>
<li><a href="../../pets/fleta--natewanggg">Fleta</a> · 제작자 <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="../../pets/frankie--aygunvarol">Frankie</a> · 제작자 <a href="https://github.com/AygunVarol">@AygunVarol</a> · v1</li>
<li><a href="../../pets/jiji--yena">Jiji</a> · 제작자 @yena · v1</li>
<li><a href="../../pets/kiko--untko">Kiko</a> · 제작자 <a href="https://github.com/untko">@untko</a> · v2</li>
<li><a href="../../pets/kimoju--andiac">Kimoju</a> · 제작자 @andiac · v2</li>
<li><a href="../../pets/lil-swole--gg0805">Lil Swole</a> · 제작자 <a href="https://github.com/gg0805">@gg0805</a> · v2</li>
<li><a href="../../pets/little-sheep--mingdong">Little Sheep</a> · 제작자 @MingDong · v1</li>
<li><a href="../../pets/mai--dwdestiny">Mai</a> · 제작자 <a href="https://github.com/DwDestiny">@DwDestiny</a> · v1</li>
<li><a href="../../pets/mellow-duck--sally-entr">Mellow Duck</a> · 제작자 @sally-entr · v1</li>
<li><a href="../../pets/mimi--spacebody">Mimi</a> · 제작자 <a href="https://github.com/Spacebody">@Spacebody</a> · v1</li>
<li><a href="../../pets/moomew-coder-cat--ping">MooMew Coder</a> · 제작자 @ping · v1</li>
<li><a href="../../pets/panda--jason-bai">Panda</a> · 제작자 <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · v1</li>
<li><a href="../../pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · 제작자 <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · v1</li>
<li><a href="../../pets/rook--klubbyte">Rook</a> · 제작자 @klubbyte · v1</li>
<li><a href="../../pets/miu-meo--lemon-z">SalaryCat</a> · 제작자 @lemon-z · v2</li>
<li><a href="../../pets/salary-cat--zuochunjie">SalaryCat</a> · 제작자 <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · v2</li>
<li><a href="../../pets/shaun--ryde-play">Shaun the Sheep</a> · 제작자 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/sunny-retriever--legeling">Sunny Retriever</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/teddy--danieloleary">Teddy</a> · 제작자 <a href="https://github.com/danieloleary">@danieloleary</a> · v1</li>
<li><a href="../../pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · 제작자 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="../../pets/usachi--jack">乌萨奇</a> · 제작자 @jack · v1</li>
<li><a href="../../pets/yuanbao--legeling">元宝</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · 제작자 @1wphantom · v2</li>
<li><a href="../../pets/tuantuan--jbbom">团团</a> · 제작자 <a href="https://github.com/JbBom">@JbBom</a> · v1</li>
<li><a href="../../pets/duodong--froggie">多栋</a> · 제작자 @froggie · v1</li>
<li><a href="../../pets/naiwa--sandytruant">奶蛙</a> · 제작자 <a href="https://github.com/sandytruant">@sandytruant</a> · v2</li>
<li><a href="../../pets/xiaoba-cat--jack">小八猫</a> · 제작자 @jack · v1</li>
<li><a href="../../pets/xiaomai--brian-3">小麦 XiaoMai</a> · 제작자 @brian-3 · v2</li>
<li><a href="../../pets/koukou-penguin--hoody">扣扣企鹅</a> · 제작자 @hoody · v2</li>
<li><a href="../../pets/capybara-lulu--jiushu">水豚噜噜</a> · 제작자 @jiushu · v1</li>
<li><a href="../../pets/niumou--jarvis-2">牛哞</a> · 제작자 @jarvis-2 · v2</li>
<li><a href="../../pets/zichao-xiong--z-kzhang">自嘲熊</a> · 제작자 @z-kzhang · v1</li>
<li><a href="../../pets/jinmao--legeling">金毛</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/wucanrou--ch">金渐层（午餐肉）</a> · 제작자 <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · v2</li>
</ul>

### 판타지 생물

<ul>
<li><a href="../../pets/behemoth--kajdrak2">Behemoth</a> · 제작자 <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · v2</li>
<li><a href="../../pets/goblin--rkwap">Goblin</a> · 제작자 @rkwap · v1</li>
<li><a href="../../pets/luna-angel-cat--neve">luna_angel cat</a> · 제작자 @neve · v2</li>
<li><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 제작자 <a href="https://github.com/netizenXuan">@netizenXuan</a> · v1</li>
<li><a href="../../pets/starcorn--alterhq">Starcorn</a> · 제작자 <a href="https://github.com/alterhq">@alterhq</a> · v1</li>
<li><a href="../../pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · 제작자 <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · v1</li>
<li><a href="../../pets/yuanzai--gaming33">Yuanzai</a> · 제작자 <a href="https://github.com/Gaming33">@Gaming33</a> · v1</li>
</ul>

### 로봇

<ul>
<li><a href="../../pets/chispa--giiilberto-nm">Chispa</a> · 제작자 @giiilberto-nm · v1</li>
<li><a href="../../pets/codenono--dq02">CodeNoNo</a> · 제작자 <a href="https://github.com/Dqd02">@Dqd02</a> · v1</li>
<li><a href="../../pets/crt-monitor--wxy">CRT Monitor</a> · 제작자 @wxy · v2</li>
<li><a href="../../pets/xiaoda--legeling">小达</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### 인물 아바타

<ul>
<li><a href="../../pets/azuma--tairazuma">Azuma</a> · 제작자 @tairazuma · v1</li>
<li><a href="../../pets/tangdouren--carl312">Tangdouren</a> · 제작자 <a href="https://github.com/Carl-312">@Carl-312</a> · v1</li>
<li><a href="../../pets/guga--circus">咕嘎</a> · 제작자 @circus · v1</li>
<li><a href="../../pets/fengge--qzl1-stack">峰哥</a> · 제작자 <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · v1</li>
<li><a href="../../pets/xiang-an--legeling">翔安</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### 밈

<ul>
<li><a href="../../pets/drill-cat--qimi">Drill Cat</a> · 제작자 <a href="https://github.com/qishichuan">@qishichuan</a> · v2</li>
<li><a href="../../pets/hami--tat">Hami</a> · 제작자 <a href="https://github.com/TATcc">@TATcc</a> · v2</li>
<li><a href="../../pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · 제작자 <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · v1</li>
<li><a href="../../pets/pickle-rick--ryde-play">Pickle Rick</a> · 제작자 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/hance-woniu--korn">旱厕蜗牛</a> · 제작자 @korn · v2</li>
<li><a href="../../pets/niulai--legeling">牛来</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/niulaima--ryde-play">牛来妈</a> · 제작자 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/maodie--octane0411">耄耋</a> · 제작자 <a href="https://github.com/Octane0411">@Octane0411</a> · v2</li>
</ul>

### 사물과 소품

<ul>
<li><a href="../../pets/spellbook--seymour">Spellbook</a> · 제작자 @seymour · v1</li>
<li><a href="../../pets/tiny-crt--chochou">Tiny CRT</a> · 제작자 @chochou · v1</li>
</ul>

### 기타

<ul>
<li><a href="../../pets/agamemnon--kazecreator">Agamemnon</a> · 제작자 <a href="https://github.com/kazecreator">@kazecreator</a> · v2</li>
<li><a href="../../pets/deepseek-girl--legeling">DeepSeek Girl</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/sylas-ravenshade--legeling">Sylas Ravenshade</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/templar-knight--jorge-cuevas90003">Templar Knight</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/march-7th--legeling">三月七</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/kuromi--legeling">库洛米</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/wo-de-dao-dun--legeling">我的刀盾</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/xingxingren--legeling">星星人</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/izumi-konata--legeling">泉此方</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/yanlingji--jorge-cuevas90003">焰灵姬</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/yao-true-self-hertz--legeling">瑶-真我赫兹</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/twilight-sparkle--wuye3790">紫悦</a> · 제작자 <a href="https://github.com/WuYe3790">@WuYe3790</a> · v2</li>
<li><a href="../../pets/longying--legeling">胧萤</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/bond-forger--legeling">邦德·福杰</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

</details>

## 펫 요청 또는 제출

원하는 캐릭터가 없다면 [무료 커뮤니티 요청 페이지](https://codexpet.top/request)를 여세요. 요청은 무료이며 spritesheet가 없어도 됩니다. 커뮤니티 제작자가 제작을 자원할 수 있지만, 요청이 수록이나 제작을 보장하지는 않습니다.

기여를 시작하려면 [웹사이트 기여 가이드](https://codexpet.top/guide)를 확인하세요. 모든 기여자가 큰 자산 저장소를 내려받지 않아도 되도록 세 가지 경로를 제공합니다.

1. **펫 요청** — Codex가 중복을 확인하고 참고 자료와 요구 사항을 수집한 뒤, 라벨이 지정된 요청 issue를 엽니다.
2. **내 펫 만들기 또는 제출하기** — Codex는 참고 자료나 기존 파일에서 시작해 세 파일 패키지를 완성하고 검증한 뒤, 전체 복제 없이 GitHub API로 전용 브랜치와 PR을 만듭니다.
3. **고급 PR** — 숙련된 기여자는 GitHub Codespaces, 부분 복제 또는 선호하는 Git 작업 흐름을 사용할 수 있습니다.

저장소의 [`.agents/skills/submit-codex-pet`](../../.agents/skills/submit-codex-pet) 스킬은 호환되는 AI agent가 올바른 경로를 선택하도록 돕습니다. 인증 정보나 저장소 쓰기 권한이 없으면, 기여물을 잃지 않도록 라벨이 지정된 제출 issue로 대체합니다.

고급 기여자는 최종 패키지 하나만 추가해야 합니다.

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

여러 제작자가 같은 캐릭터의 변형을 함께 제공할 수 있도록 `pet-slug--author-slug` 형식을 사용합니다. v1 제출물은 `spriteVersionNumber`를 생략할 수 있으며 `1536x1872` WebP를 제공해야 합니다. v2 제출물은 `spriteVersionNumber: 2`와 `1536x2288` WebP를 제공해야 합니다.

v2 런타임 매니페스트는 다음과 같습니다.

```json
{
  "id": "pet-slug--author-slug",
  "displayName": "펫 이름",
  "description": "한 문장의 짧은 설명.",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

미리 보기와 README 목록은 CI가 생성합니다.

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

기여자 PR에는 `submission.json`, `pet.json`, `spritesheet.webp`만 포함해야 합니다. prompt, 참고 자료, QA 폴더, contact sheet, 동영상, 디코드 프레임, Hatch Pet 실행 디렉터리는 제출하지 마세요. 유지 관리자나 CI가 병합 뒤 미리 보기, README 목록, `pets.json`을 다시 생성하며 미리 보기 바이너리는 장기간 Git 추적 파일로 유지하지 않습니다.

## 펫 만들기

- [.agents/skills/submit-codex-pet](../../.agents/skills/submit-codex-pet) — 커뮤니티 제작을 요청하거나 GitHub API로 내 펫을 만들고 제출하고, 고급 PR을 준비합니다.
- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 기존 8x9 v1 펫을 보존하거나 수리합니다.
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 16개 시선 방향을 포함한 8x11 v2 펫을 만들거나 업그레이드합니다.

스킬 버전을 명시적으로 선택하세요. 기존 펫을 업그레이드할 때는 `$hatch-pet-v2`에 설치된 `pet.json`과 `spritesheet.webp`를 제공합니다. 승인된 0–8행은 새로 생성하지 않고 보존됩니다.

## 문서

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](../zh-CN)
- 한국어: [docs/ko](./)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)
- 웹 갤러리 소스: [web/](../../web)
- 통계 Worker: [worker/](../../worker)
- 기여 가이드(영어): [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Star 기록

[![Awesome Codex Pet의 GitHub Star 기록](../../assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

이 차트는 GitHub stargazer 데이터로 매일 갱신됩니다. 더 많은 사람이 이 펫을 발견할 수 있도록 [저장소에 Star를 남겨 주세요](https://github.com/legeling/awesome-codex-pet).

## 기여자

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet 기여자">
</a>

펫, 코드, 문서, 검토, 아이디어를 기여해 주신 모든 분께 감사드립니다.

## 라이선스

- 코드와 스크립트: [MIT](../../LICENSE)
- 펫 자산과 생성된 미리 보기: 각 펫 폴더에 별도 표기가 없다면 [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
