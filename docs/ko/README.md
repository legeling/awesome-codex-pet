<div align="center">

# Awesome Codex Pet

[English](../../README.md) | [简体中文](../zh-CN/README.md) | 한국어 | [日本語](../ja/README.md) | [Español](../es/README.md)

<h2><a href="https://codexpet.top">codexpet.top에서 무료 커뮤니티 Codex 펫을 둘러보고 설치하세요 →</a></h2>

<p><strong>Awesome Codex Pet은 무료 커뮤니티 펫 갤러리입니다.</strong> 펫 상점처럼 완성된 애니메이션을 둘러보고, 저장소를 복제하지 않아도 마음에 드는 펫을 설치할 수 있습니다. 원하는 캐릭터가 없다면 커뮤니티에 제작을 요청할 수 있습니다.</p>

<p><a href="https://codexpet.top"><strong>펫 둘러보기</strong></a> · <a href="https://codexpet.top/install"><strong>펫 설치하기</strong></a> · <a href="https://codexpet.top/request"><strong>캐릭터 요청하기</strong></a></p>

<a href="https://codexpet.top"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="Awesome Codex Pet 갤러리 열기"></a>

![pets: 199](https://img.shields.io/badge/pets-199-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

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

### 게임 캐릭터

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/firefly--lingxiaotian">Firefly</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/idle.webp" alt="Firefly idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waving.webp" alt="Firefly waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/running-right.webp" alt="Firefly running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waiting.webp" alt="Firefly waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/review.webp" alt="Firefly review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/acheron--lingxiaotian">Acheron</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main acheron--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/idle.webp" alt="Acheron idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waving.webp" alt="Acheron waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/running-right.webp" alt="Acheron running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waiting.webp" alt="Acheron waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/review.webp" alt="Acheron review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/arlecchino--lingxiaotian">Arlecchino</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main arlecchino--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/idle.webp" alt="Arlecchino idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waving.webp" alt="Arlecchino waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/running-right.webp" alt="Arlecchino running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waiting.webp" alt="Arlecchino waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/review.webp" alt="Arlecchino review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/black-swan--lingxiaotian">Black Swan</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main black-swan--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/idle.webp" alt="Black Swan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waving.webp" alt="Black Swan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/running-right.webp" alt="Black Swan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waiting.webp" alt="Black Swan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/review.webp" alt="Black Swan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/buba--yurcek">Buba</a> · 제작자 @yurcek · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main buba--yurcek</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/idle.webp" alt="Buba idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waving.webp" alt="Buba waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/running-right.webp" alt="Buba running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waiting.webp" alt="Buba waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/review.webp" alt="Buba review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/castorice--lingxiaotian">Castorice</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main castorice--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/idle.webp" alt="Castorice idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waving.webp" alt="Castorice waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/running-right.webp" alt="Castorice running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waiting.webp" alt="Castorice waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/review.webp" alt="Castorice review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/chen--chenxin-dlut">Chen</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chen--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/idle.webp" alt="Chen idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waving.webp" alt="Chen waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/running-right.webp" alt="Chen running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waiting.webp" alt="Chen waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/review.webp" alt="Chen review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/citlali--zaytsevzy">Citlali</a> · 제작자 <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main citlali--zaytsevzy</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/idle.webp" alt="Citlali idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waving.webp" alt="Citlali waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/running-right.webp" alt="Citlali running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waiting.webp" alt="Citlali waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/review.webp" alt="Citlali review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/cyrene--lingxiaotian">Cyrene</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main cyrene--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/idle.webp" alt="Cyrene idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waving.webp" alt="Cyrene waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/running-right.webp" alt="Cyrene running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waiting.webp" alt="Cyrene waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/review.webp" alt="Cyrene review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/dimo-stand--god-wu">Dimo</a> · 제작자 @god-wu · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dimo-stand--god-wu</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/idle.webp" alt="Dimo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waving.webp" alt="Dimo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/running-right.webp" alt="Dimo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waiting.webp" alt="Dimo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/review.webp" alt="Dimo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/doro--lingxiaotian">Doro</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doro--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/idle.webp" alt="Doro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waving.webp" alt="Doro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/running-right.webp" alt="Doro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waiting.webp" alt="Doro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/review.webp" alt="Doro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/feixiao--lingxiaotian">Feixiao</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feixiao--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/idle.webp" alt="Feixiao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waving.webp" alt="Feixiao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/running-right.webp" alt="Feixiao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waiting.webp" alt="Feixiao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/review.webp" alt="Feixiao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/furina--lingxiaotian">Furina</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main furina--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/idle.webp" alt="Furina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waving.webp" alt="Furina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/running-right.webp" alt="Furina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waiting.webp" alt="Furina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/review.webp" alt="Furina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/ganyu--chenxin-dlut">Ganyu</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ganyu--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/idle.webp" alt="Ganyu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waving.webp" alt="Ganyu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/running-right.webp" alt="Ganyu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waiting.webp" alt="Ganyu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/review.webp" alt="Ganyu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hu-tao--lingxiaotian">Hu Tao</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hu-tao--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/idle.webp" alt="Hu Tao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waving.webp" alt="Hu Tao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/running-right.webp" alt="Hu Tao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waiting.webp" alt="Hu Tao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/review.webp" alt="Hu Tao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hyacine--kurisu">Hyacine</a> · 제작자 <a href="https://github.com/kurisu994">@kurisu994</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hyacine--kurisu</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/idle.webp" alt="Hyacine idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waving.webp" alt="Hyacine waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/running-right.webp" alt="Hyacine running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waiting.webp" alt="Hyacine waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/review.webp" alt="Hyacine review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/isaac--foggy-whale">Isaac</a> · 제작자 <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isaac--foggy-whale</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/idle.webp" alt="Isaac idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waving.webp" alt="Isaac waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/running-right.webp" alt="Isaac running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waiting.webp" alt="Isaac waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/review.webp" alt="Isaac review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kamisato-ayaka--lingxiaotian">Kamisato Ayaka</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kamisato-ayaka--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/idle.webp" alt="Kamisato Ayaka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waving.webp" alt="Kamisato Ayaka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/running-right.webp" alt="Kamisato Ayaka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waiting.webp" alt="Kamisato Ayaka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/review.webp" alt="Kamisato Ayaka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/klee--chenxin-dlut">Klee</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main klee--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/idle.webp" alt="Klee idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waving.webp" alt="Klee waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/running-right.webp" alt="Klee running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waiting.webp" alt="Klee waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/review.webp" alt="Klee review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kuro-chibi--kuroneko-night">Kuro Chibi</a> · 제작자 <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuro-chibi--kuroneko-night</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/idle.webp" alt="Kuro Chibi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waving.webp" alt="Kuro Chibi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/running-right.webp" alt="Kuro Chibi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waiting.webp" alt="Kuro Chibi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/review.webp" alt="Kuro Chibi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/lappland--chenxin-dlut">Lappland</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lappland--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/idle.webp" alt="Lappland idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waving.webp" alt="Lappland waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/running-right.webp" alt="Lappland running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waiting.webp" alt="Lappland waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/review.webp" alt="Lappland review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/little-black-mage--libertis">Little Black Mage</a> · 제작자 @libertis · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-black-mage--libertis</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/idle.webp" alt="Little Black Mage idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waving.webp" alt="Little Black Mage waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/running-right.webp" alt="Little Black Mage running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waiting.webp" alt="Little Black Mage waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/review.webp" alt="Little Black Mage review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/march-7th--chenxin-dlut">March 7th</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main march-7th--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/idle.webp" alt="March 7th idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waving.webp" alt="March 7th waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/running-right.webp" alt="March 7th running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waiting.webp" alt="March 7th waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/review.webp" alt="March 7th review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/missile--zpzjzj">Missile</a> · 제작자 <a href="https://github.com/zpzjzj">@zpzjzj</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main missile--zpzjzj</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/idle.webp" alt="Missile idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waving.webp" alt="Missile waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/running-right.webp" alt="Missile running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waiting.webp" alt="Missile waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/review.webp" alt="Missile review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/miyabi--eric-terminal">Miyabi</a> · 제작자 <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miyabi--eric-terminal</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/idle.webp" alt="Miyabi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waving.webp" alt="Miyabi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/running-right.webp" alt="Miyabi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waiting.webp" alt="Miyabi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/review.webp" alt="Miyabi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/nahida--lingxiaotian">Nahida</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nahida--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/idle.webp" alt="Nahida idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waving.webp" alt="Nahida waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/running-right.webp" alt="Nahida running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waiting.webp" alt="Nahida waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/review.webp" alt="Nahida review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/navia--lingxiaotian">Navia</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main navia--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/idle.webp" alt="Navia idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waving.webp" alt="Navia waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/running-right.webp" alt="Navia running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waiting.webp" alt="Navia waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/review.webp" alt="Navia review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/om-nom--kasyan1337">Om Nom</a> · 제작자 <a href="https://github.com/kasyan1337">@kasyan1337</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main om-nom--kasyan1337</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/idle.webp" alt="Om Nom idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waving.webp" alt="Om Nom waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/running-right.webp" alt="Om Nom running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waiting.webp" alt="Om Nom waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/review.webp" alt="Om Nom review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/paimon--lingxiaotian">Paimon</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main paimon--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/idle.webp" alt="Paimon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waving.webp" alt="Paimon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/running-right.webp" alt="Paimon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waiting.webp" alt="Paimon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/review.webp" alt="Paimon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/phoebe--chenxin-dlut">Phoebe</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main phoebe--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/idle.webp" alt="Phoebe idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waving.webp" alt="Phoebe waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/running-right.webp" alt="Phoebe running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waiting.webp" alt="Phoebe waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/review.webp" alt="Phoebe review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/raiden-shogun--lingxiaotian">Raiden Shogun</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main raiden-shogun--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/idle.webp" alt="Raiden Shogun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waving.webp" alt="Raiden Shogun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/running-right.webp" alt="Raiden Shogun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waiting.webp" alt="Raiden Shogun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/review.webp" alt="Raiden Shogun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/reimu--lingxiaotian">Reimu</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main reimu--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/idle.webp" alt="Reimu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waving.webp" alt="Reimu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/running-right.webp" alt="Reimu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waiting.webp" alt="Reimu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/review.webp" alt="Reimu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/remielle-dan--erlla">Remielle-Dan / Leimi</a> · 제작자 <a href="https://github.com/Erlla">@Erlla</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main remielle-dan--erlla</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/idle.webp" alt="Remielle-Dan / Leimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waving.webp" alt="Remielle-Dan / Leimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/running-right.webp" alt="Remielle-Dan / Leimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waiting.webp" alt="Remielle-Dan / Leimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/review.webp" alt="Remielle-Dan / Leimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/robin--lingxiaotian">Robin</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main robin--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/idle.webp" alt="Robin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waving.webp" alt="Robin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/running-right.webp" alt="Robin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waiting.webp" alt="Robin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/review.webp" alt="Robin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/ruan-mei--lingxiaotian">Ruan Mei</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruan-mei--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/idle.webp" alt="Ruan Mei idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waving.webp" alt="Ruan Mei waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/running-right.webp" alt="Ruan Mei running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waiting.webp" alt="Ruan Mei waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/review.webp" alt="Ruan Mei review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/silver-wolf--lingxiaotian">Silver Wolf</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main silver-wolf--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/idle.webp" alt="Silver Wolf idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waving.webp" alt="Silver Wolf waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/running-right.webp" alt="Silver Wolf running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waiting.webp" alt="Silver Wolf waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/review.webp" alt="Silver Wolf review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/sonetto--chenxin-dlut">Sonetto</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sonetto--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/idle.webp" alt="Sonetto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waving.webp" alt="Sonetto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/running-right.webp" alt="Sonetto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waiting.webp" alt="Sonetto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/review.webp" alt="Sonetto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/sparkle--lingxiaotian">Sparkle</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sparkle--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/idle.webp" alt="Sparkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waving.webp" alt="Sparkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/running-right.webp" alt="Sparkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waiting.webp" alt="Sparkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/review.webp" alt="Sparkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/susuta--xiangzi529">Susuta</a> · 제작자 <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main susuta--xiangzi529</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/idle.webp" alt="Susuta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waving.webp" alt="Susuta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/running-right.webp" alt="Susuta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waiting.webp" alt="Susuta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/review.webp" alt="Susuta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tingyun--lingxiaotian">Tingyun</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tingyun--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/idle.webp" alt="Tingyun idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waving.webp" alt="Tingyun waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/running-right.webp" alt="Tingyun running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waiting.webp" alt="Tingyun waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/review.webp" alt="Tingyun review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/vertin--chenxin-dlut">Vertin</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main vertin--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/idle.webp" alt="Vertin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waving.webp" alt="Vertin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/running-right.webp" alt="Vertin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waiting.webp" alt="Vertin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/review.webp" alt="Vertin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yoimiya--chenxin-dlut">Yoimiya</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yoimiya--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/idle.webp" alt="Yoimiya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waving.webp" alt="Yoimiya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/running-right.webp" alt="Yoimiya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waiting.webp" alt="Yoimiya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/review.webp" alt="Yoimiya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/zani--chenxin-dlut">Zani</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zani--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/idle.webp" alt="Zani idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waving.webp" alt="Zani waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/running-right.webp" alt="Zani running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waiting.webp" alt="Zani waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/review.webp" alt="Zani review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yae-miko--legeling">八重神子</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yae-miko--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/idle.webp" alt="八重神子 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waving.webp" alt="八重神子 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/running-right.webp" alt="八重神子 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waiting.webp" alt="八重神子 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/review.webp" alt="八重神子 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 제작자 <a href="https://github.com/QunBoo">@QunBoo</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dnf-female-ammo--qunboo</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/idle.webp" alt="女弹药Q idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waving.webp" alt="女弹药Q waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/running-right.webp" alt="女弹药Q running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waiting.webp" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/review.webp" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/wukong--jorge-cuevas90003">悟空</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wukong--jorge-cuevas90003</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/idle.webp" alt="悟空 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waving.webp" alt="悟空 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/running-right.webp" alt="悟空 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waiting.webp" alt="悟空 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/review.webp" alt="悟空 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · 제작자 <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doudizhu-laonongmin--chenyijing131-art</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/idle.webp" alt="斗地主老农民 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waving.webp" alt="斗地主老农民 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/running-right.webp" alt="斗地主老农民 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waiting.webp" alt="斗地主老农民 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/review.webp" alt="斗地主老农民 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/new-covenant-exusiai--chenxin-dlut">新约能天使</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main new-covenant-exusiai--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/idle.webp" alt="新约能天使 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waving.webp" alt="新约能天使 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/running-right.webp" alt="新约能天使 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waiting.webp" alt="新约能天使 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/review.webp" alt="新约能天使 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/regulus-star-antimony--chenxin-dlut">星锑</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 게임 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main regulus-star-antimony--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/idle.webp" alt="星锑 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waving.webp" alt="星锑 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/running-right.webp" alt="星锑 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waiting.webp" alt="星锑 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/review.webp" alt="星锑 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/youmu--ai-generated">魂魄妖梦</a> · 제작자 @ai-generated · 게임 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main youmu--ai-generated</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/idle.webp" alt="魂魄妖梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waving.webp" alt="魂魄妖梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/running-right.webp" alt="魂魄妖梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waiting.webp" alt="魂魄妖梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/review.webp" alt="魂魄妖梦 review" width="120" height="130"></td></tr>
</table>

### 애니메이션 캐릭터

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/zero-two--mingqingmozhao">02</a> · 제작자 @mingqingmozhao · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zero-two--mingqingmozhao</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/idle.webp" alt="02 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waving.webp" alt="02 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/running-right.webp" alt="02 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waiting.webp" alt="02 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/review.webp" alt="02 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/anya--chenxin-dlut">Anya</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main anya--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/idle.webp" alt="Anya idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waving.webp" alt="Anya waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/running-right.webp" alt="Anya running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waiting.webp" alt="Anya waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/review.webp" alt="Anya review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/asuka--maxg24">Asuka</a> · 제작자 <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main asuka--maxg24</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/idle.webp" alt="Asuka idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waving.webp" alt="Asuka waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/running-right.webp" alt="Asuka running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waiting.webp" alt="Asuka waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/review.webp" alt="Asuka review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/chibi-rei-pet--bendy">Chibi Rei Pet</a> · 제작자 @Bendy · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chibi-rei-pet--bendy</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/idle.webp" alt="Chibi Rei Pet idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waving.webp" alt="Chibi Rei Pet waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/running-right.webp" alt="Chibi Rei Pet running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waiting.webp" alt="Chibi Rei Pet waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/review.webp" alt="Chibi Rei Pet review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/chotu--makriman">Chotu</a> · 제작자 <a href="https://github.com/makriman">@makriman</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chotu--makriman</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/idle.webp" alt="Chotu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waving.webp" alt="Chotu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/running-right.webp" alt="Chotu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waiting.webp" alt="Chotu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/review.webp" alt="Chotu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/conan--chenxin-dlut">Conan</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main conan--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/idle.webp" alt="Conan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waving.webp" alt="Conan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/running-right.webp" alt="Conan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waiting.webp" alt="Conan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/review.webp" alt="Conan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/doraemon--xueshi">Doraemon</a> · 제작자 <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doraemon--xueshi</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/idle.webp" alt="Doraemon idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waving.webp" alt="Doraemon waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/running-right.webp" alt="Doraemon running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waiting.webp" alt="Doraemon waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/review.webp" alt="Doraemon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/elaina--nyakku-shigure">Elaina</a> · 제작자 <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main elaina--nyakku-shigure</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/idle.webp" alt="Elaina idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waving.webp" alt="Elaina waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/running-right.webp" alt="Elaina running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waiting.webp" alt="Elaina waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/review.webp" alt="Elaina review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/eren--ash-sw">Eren</a> · 제작자 <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main eren--ash-sw</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/idle.webp" alt="Eren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waving.webp" alt="Eren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/running-right.webp" alt="Eren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waiting.webp" alt="Eren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/review.webp" alt="Eren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/frieren--lingxiaotian">Frieren</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frieren--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/idle.webp" alt="Frieren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waving.webp" alt="Frieren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/running-right.webp" alt="Frieren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waiting.webp" alt="Frieren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/review.webp" alt="Frieren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/gojo--lilokhalikfa">Gojo</a> · 제작자 <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gojo--lilokhalikfa</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/idle.webp" alt="Gojo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waving.webp" alt="Gojo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/running-right.webp" alt="Gojo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waiting.webp" alt="Gojo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/review.webp" alt="Gojo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/ikaros--icarus-alpha">Ikaros</a> · 제작자 <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ikaros--icarus-alpha</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/idle.webp" alt="Ikaros idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waving.webp" alt="Ikaros waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/running-right.webp" alt="Ikaros running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waiting.webp" alt="Ikaros waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/review.webp" alt="Ikaros review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/isekaijoucho--siiverash">Isekaijoucho</a> · 제작자 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isekaijoucho--siiverash</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/idle.webp" alt="Isekaijoucho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waving.webp" alt="Isekaijoucho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/running-right.webp" alt="Isekaijoucho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waiting.webp" alt="Isekaijoucho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/review.webp" alt="Isekaijoucho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/jolyne-cujoh--d2682787206-sys">Jolyne Cujoh</a> · 제작자 <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jolyne-cujoh--d2682787206-sys</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/idle.webp" alt="Jolyne Cujoh idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waving.webp" alt="Jolyne Cujoh waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/running-right.webp" alt="Jolyne Cujoh running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waiting.webp" alt="Jolyne Cujoh waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/review.webp" alt="Jolyne Cujoh review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kaguya-luna--enclairfarron">Kaguya Luna</a> · 제작자 <a href="https://github.com/enclairfarron">@enclairfarron</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaguya-luna--enclairfarron</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/idle.webp" alt="Kaguya Luna idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waving.webp" alt="Kaguya Luna waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/running-right.webp" alt="Kaguya Luna running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waiting.webp" alt="Kaguya Luna waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/review.webp" alt="Kaguya Luna review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kaiju-no-8--terry878">Kaiju No. 8</a> · 제작자 @TERRY878 · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaiju-no-8--terry878</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/idle.webp" alt="Kaiju No. 8 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waving.webp" alt="Kaiju No. 8 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/running-right.webp" alt="Kaiju No. 8 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waiting.webp" alt="Kaiju No. 8 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/review.webp" alt="Kaiju No. 8 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kid--chenxin-dlut">Kid</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/idle.webp" alt="Kid idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waving.webp" alt="Kid waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/running-right.webp" alt="Kid running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waiting.webp" alt="Kid waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/review.webp" alt="Kid review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kid-goku--julianhuang">Kid Goku</a> · 제작자 <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid-goku--julianhuang</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/idle.webp" alt="Kid Goku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waving.webp" alt="Kid Goku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/running-right.webp" alt="Kid Goku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waiting.webp" alt="Kid Goku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/review.webp" alt="Kid Goku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/levi--emrecb">Levi</a> · 제작자 <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main levi--emrecb</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/idle.webp" alt="Levi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waving.webp" alt="Levi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/running-right.webp" alt="Levi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waiting.webp" alt="Levi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/review.webp" alt="Levi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/luffy-gear-5--jordsshmords1">Luffy Gear 5</a> · 제작자 <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luffy-gear-5--jordsshmords1</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/idle.webp" alt="Luffy Gear 5 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waving.webp" alt="Luffy Gear 5 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/running-right.webp" alt="Luffy Gear 5 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waiting.webp" alt="Luffy Gear 5 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/review.webp" alt="Luffy Gear 5 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mahiro--lingxiaotian">Mahiro</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mahiro--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/idle.webp" alt="Mahiro idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waving.webp" alt="Mahiro waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/running-right.webp" alt="Mahiro running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waiting.webp" alt="Mahiro waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/review.webp" alt="Mahiro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/makima-coat--yuyuabc1">Makima (Coat)</a> · 제작자 <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makima-coat--yuyuabc1</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/idle.webp" alt="Makima (Coat) idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waving.webp" alt="Makima (Coat) waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/running-right.webp" alt="Makima (Coat) running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waiting.webp" alt="Makima (Coat) waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/review.webp" alt="Makima (Coat) review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/makimamini--1sh1ro">MakimaMini</a> · 제작자 @1sh1ro · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makimamini--1sh1ro</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/idle.webp" alt="MakimaMini idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waving.webp" alt="MakimaMini waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/running-right.webp" alt="MakimaMini running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waiting.webp" alt="MakimaMini waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/review.webp" alt="MakimaMini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/makisekurisu--m1gr4ine">Makise Kurisu</a> · 제작자 @m1gr4ine · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makisekurisu--m1gr4ine</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/idle.webp" alt="Makise Kurisu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waving.webp" alt="Makise Kurisu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/running-right.webp" alt="Makise Kurisu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waiting.webp" alt="Makise Kurisu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/review.webp" alt="Makise Kurisu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mihari--hyoni1129">Mihari</a> · 제작자 <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mihari--hyoni1129</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/idle.webp" alt="Mihari idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waving.webp" alt="Mihari waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/running-right.webp" alt="Mihari running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waiting.webp" alt="Mihari waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/review.webp" alt="Mihari review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mikoto--lingxiaotian">Mikoto</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mikoto--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/idle.webp" alt="Mikoto idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waving.webp" alt="Mikoto waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/running-right.webp" alt="Mikoto running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waiting.webp" alt="Mikoto waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/review.webp" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/miku--lingxiaotian">Miku</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miku--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/idle.webp" alt="Miku idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waving.webp" alt="Miku waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/running-right.webp" alt="Miku running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waiting.webp" alt="Miku waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/review.webp" alt="Miku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/misaka-network--ldl1234">Misaka Network</a> · 제작자 <a href="https://github.com/ldl1234">@ldl1234</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main misaka-network--ldl1234</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/idle.webp" alt="Misaka Network idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waving.webp" alt="Misaka Network waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/running-right.webp" alt="Misaka Network running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waiting.webp" alt="Misaka Network waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/review.webp" alt="Misaka Network review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/nimbus--soraberu">Nimbus</a> · 제작자 <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nimbus--soraberu</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/idle.webp" alt="Nimbus idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waving.webp" alt="Nimbus waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/running-right.webp" alt="Nimbus running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waiting.webp" alt="Nimbus waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/review.webp" alt="Nimbus review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/rem--l1">Rem</a> · 제작자 <a href="https://codex-pets.net/users/l1">@l1</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rem--l1</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/idle.webp" alt="Rem idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waving.webp" alt="Rem waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/running-right.webp" alt="Rem running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waiting.webp" alt="Rem waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/review.webp" alt="Rem review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/rinami--siiverash">Rinami Himesaki</a> · 제작자 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rinami--siiverash</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/idle.webp" alt="Rinami Himesaki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waving.webp" alt="Rinami Himesaki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/running-right.webp" alt="Rinami Himesaki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waiting.webp" alt="Rinami Himesaki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/review.webp" alt="Rinami Himesaki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/roxy-pixel--gravity">Roxy Pixel</a> · 제작자 @gravity · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main roxy-pixel--gravity</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/idle.webp" alt="Roxy Pixel idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waving.webp" alt="Roxy Pixel waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/running-right.webp" alt="Roxy Pixel running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waiting.webp" alt="Roxy Pixel waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/review.webp" alt="Roxy Pixel review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/saber--petdex-zhenyou-ling">Saber</a> · 제작자 @真宵 绫. · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saber--petdex-zhenyou-ling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/idle.webp" alt="Saber idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waving.webp" alt="Saber waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/running-right.webp" alt="Saber running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waiting.webp" alt="Saber waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/review.webp" alt="Saber review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/gintoki-pixel--yuu-m">Sakata Gintoki</a> · 제작자 @Yuu M. · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gintoki-pixel--yuu-m</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/idle.webp" alt="Sakata Gintoki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waving.webp" alt="Sakata Gintoki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/running-right.webp" alt="Sakata Gintoki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waiting.webp" alt="Sakata Gintoki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/review.webp" alt="Sakata Gintoki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/shinchan--chenxin-dlut">Shinchan</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinchan--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/idle.webp" alt="Shinchan idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waving.webp" alt="Shinchan waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/running-right.webp" alt="Shinchan running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waiting.webp" alt="Shinchan waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/review.webp" alt="Shinchan review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/takamatsu-tomori--a1wace-dev">Takamatsu Tomori</a> · 제작자 @A1wace-dev · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main takamatsu-tomori--a1wace-dev</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/idle.webp" alt="Takamatsu Tomori idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waving.webp" alt="Takamatsu Tomori waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/running-right.webp" alt="Takamatsu Tomori running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waiting.webp" alt="Takamatsu Tomori waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/review.webp" alt="Takamatsu Tomori review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/togawa-sakiko--enclairfarron">Togawa Sakiko</a> · 제작자 <a href="https://github.com/enclairfarron">@enclairfarron</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main togawa-sakiko--enclairfarron</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/idle.webp" alt="Togawa Sakiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waving.webp" alt="Togawa Sakiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/running-right.webp" alt="Togawa Sakiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waiting.webp" alt="Togawa Sakiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/review.webp" alt="Togawa Sakiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/toyama-kasumi--lsmd23">Toyama Kasumi</a> · 제작자 <a href="https://github.com/lsmd23">@lsmd23</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main toyama-kasumi--lsmd23</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/idle.webp" alt="Toyama Kasumi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waving.webp" alt="Toyama Kasumi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/running-right.webp" alt="Toyama Kasumi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waiting.webp" alt="Toyama Kasumi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/review.webp" alt="Toyama Kasumi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/violet--lazenca">Violet</a> · 제작자 <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main violet--lazenca</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/idle.webp" alt="Violet idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waving.webp" alt="Violet waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/running-right.webp" alt="Violet running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waiting.webp" alt="Violet waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/review.webp" alt="Violet review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/wakaba-mutsumi--carambola">Wakaba Mutsumi</a> · 제작자 @Carambola · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wakaba-mutsumi--carambola</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/idle.webp" alt="Wakaba Mutsumi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waving.webp" alt="Wakaba Mutsumi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/running-right.webp" alt="Wakaba Mutsumi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waiting.webp" alt="Wakaba Mutsumi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/review.webp" alt="Wakaba Mutsumi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/inosuke-hashibira--wangfan002">伊之助 Q版 丰富动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main inosuke-hashibira--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/idle.webp" alt="伊之助 Q版 丰富动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waving.webp" alt="伊之助 Q版 丰富动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/running-right.webp" alt="伊之助 Q版 丰富动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waiting.webp" alt="伊之助 Q版 丰富动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/review.webp" alt="伊之助 Q版 丰富动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/nangong-wan--bpup">南宫婉</a> · 제작자 <a href="https://github.com/bpup">@bpup</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nangong-wan--bpup</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/idle.webp" alt="南宫婉 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waving.webp" alt="南宫婉 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/running-right.webp" alt="南宫婉 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waiting.webp" alt="南宫婉 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/review.webp" alt="南宫婉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/zenitsu-agatsuma--wangfan002">善逸 Q版 丰富动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zenitsu-agatsuma--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/idle.webp" alt="善逸 Q版 丰富动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waving.webp" alt="善逸 Q版 丰富动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/running-right.webp" alt="善逸 Q版 丰富动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waiting.webp" alt="善逸 Q版 丰富动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/review.webp" alt="善逸 Q版 丰富动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/giyu-tomioka--wangfan002">富冈义勇 Q版 丰富动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main giyu-tomioka--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/idle.webp" alt="富冈义勇 Q版 丰富动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waving.webp" alt="富冈义勇 Q版 丰富动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/running-right.webp" alt="富冈义勇 Q版 丰富动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waiting.webp" alt="富冈义勇 Q版 丰富动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/review.webp" alt="富冈义勇 Q版 丰富动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/muichiro-tokito--wangfan002">时透无一郎 Q版 空灵动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main muichiro-tokito--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/idle.webp" alt="时透无一郎 Q版 空灵动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waving.webp" alt="时透无一郎 Q版 空灵动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/running-right.webp" alt="时透无一郎 Q版 空灵动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waiting.webp" alt="时透无一郎 Q版 空灵动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/review.webp" alt="时透无一郎 Q版 空灵动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tanjiro-kamado--wangfan002">炭治郎 Q版 丰富动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tanjiro-kamado--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/idle.webp" alt="炭治郎 Q版 丰富动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waving.webp" alt="炭治郎 Q版 丰富动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/running-right.webp" alt="炭治郎 Q版 丰富动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waiting.webp" alt="炭治郎 Q版 丰富动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/review.webp" alt="炭治郎 Q版 丰富动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/nezuko-kamado--wangfan002">祢豆子 Q版 丰富动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nezuko-kamado--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/idle.webp" alt="祢豆子 Q版 丰富动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waving.webp" alt="祢豆子 Q版 丰富动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/running-right.webp" alt="祢豆子 Q版 丰富动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waiting.webp" alt="祢豆子 Q版 丰富动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/review.webp" alt="祢豆子 Q版 丰富动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/fujiwara-chika--klmklmnb">藤原千花</a> · 제작자 <a href="https://github.com/klmklmnb">@klmklmnb</a> · 애니메이션 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fujiwara-chika--klmklmnb</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/idle.webp" alt="藤原千花 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waving.webp" alt="藤原千花 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/running-right.webp" alt="藤原千花 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waiting.webp" alt="藤原千花 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/review.webp" alt="藤原千花 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/shinobu-kocho--wangfan002">蝴蝶忍 Q版 华丽动作</a> · 제작자 @wangfan002 · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinobu-kocho--wangfan002</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/idle.webp" alt="蝴蝶忍 Q版 华丽动作 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waving.webp" alt="蝴蝶忍 Q版 华丽动作 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/running-right.webp" alt="蝴蝶忍 Q版 华丽动作 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waiting.webp" alt="蝴蝶忍 Q版 华丽动作 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/review.webp" alt="蝴蝶忍 Q版 华丽动作 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/bocchi--lingxiaotian">Bocchi</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 애니메이션 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bocchi--lingxiaotian</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/idle.webp" alt="Bocchi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waving.webp" alt="Bocchi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/running-right.webp" alt="Bocchi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waiting.webp" alt="Bocchi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/review.webp" alt="Bocchi review" width="120" height="130"></td></tr>
</table>

### 오리지널 캐릭터

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/aiko--chenxin-dlut">Aiko</a> · 제작자 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aiko--chenxin-dlut</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/idle.webp" alt="Aiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waving.webp" alt="Aiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/running-right.webp" alt="Aiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waiting.webp" alt="Aiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/review.webp" alt="Aiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chud-codex--jorge-cuevas90003</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/idle.webp" alt="Chud Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waving.webp" alt="Chud Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/running-right.webp" alt="Chud Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waiting.webp" alt="Chud Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/review.webp" alt="Chud Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/diana--am">Diana</a> · 제작자 @am · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diana--am</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/diana--am/webp/idle.webp" alt="Diana idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waving.webp" alt="Diana waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/running-right.webp" alt="Diana running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waiting.webp" alt="Diana waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/review.webp" alt="Diana review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hajimi--zeyuwang1999">Hajimi</a> · 제작자 <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hajimi--zeyuwang1999</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/idle.webp" alt="Hajimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waving.webp" alt="Hajimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/running-right.webp" alt="Hajimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waiting.webp" alt="Hajimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/review.webp" alt="Hajimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hamo--haipengzzz">Hamo</a> · 제작자 <a href="https://github.com/haipengzzz">@haipengzzz</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hamo--haipengzzz</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/idle.webp" alt="Hamo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waving.webp" alt="Hamo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/running-right.webp" alt="Hamo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waiting.webp" alt="Hamo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/review.webp" alt="Hamo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hana2--initiatione">Hana2</a> · 제작자 <a href="https://github.com/initiatione">@initiatione</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hana2--initiatione</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/idle.webp" alt="Hana2 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waving.webp" alt="Hana2 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/running-right.webp" alt="Hana2 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waiting.webp" alt="Hana2 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/review.webp" alt="Hana2 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/iris--yau-427">Iris</a> · 제작자 <a href="https://github.com/Yau-427">@Yau-427</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main iris--yau-427</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/idle.webp" alt="Iris idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waving.webp" alt="Iris waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/running-right.webp" alt="Iris running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waiting.webp" alt="Iris waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/review.webp" alt="Iris review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/jesse-the-fox--itjesse">JesseTheFox</a> · 제작자 <a href="https://github.com/ITJesse">@ITJesse</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jesse-the-fox--itjesse</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/idle.webp" alt="JesseTheFox idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waving.webp" alt="JesseTheFox waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/running-right.webp" alt="JesseTheFox running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waiting.webp" alt="JesseTheFox waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/review.webp" alt="JesseTheFox review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/joker--oytyo">Joker</a> · 제작자 @oytyo · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main joker--oytyo</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/idle.webp" alt="Joker idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waving.webp" alt="Joker waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/running-right.webp" alt="Joker running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waiting.webp" alt="Joker waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/review.webp" alt="Joker review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/linnea--nyakku-shigure">Linnea</a> · 제작자 @nyakku-shigure · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main linnea--nyakku-shigure</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/idle.webp" alt="Linnea idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waving.webp" alt="Linnea waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/running-right.webp" alt="Linnea running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waiting.webp" alt="Linnea waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/review.webp" alt="Linnea review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/lumei--dagwbl">Lumei</a> · 제작자 <a href="https://github.com/Dagwbl">@Dagwbl</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lumei--dagwbl</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/idle.webp" alt="Lumei idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waving.webp" alt="Lumei waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/running-right.webp" alt="Lumei running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waiting.webp" alt="Lumei waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/review.webp" alt="Lumei review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mika--rotl24">Mika</a> · 제작자 <a href="https://github.com/ROTl24">@ROTl24</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mika--rotl24</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/idle.webp" alt="Mika idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waving.webp" alt="Mika waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/running-right.webp" alt="Mika running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waiting.webp" alt="Mika waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/review.webp" alt="Mika review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/minty--somnusochi">Minty</a> · 제작자 <a href="https://github.com/Somnusochi">@Somnusochi</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main minty--somnusochi</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/idle.webp" alt="Minty idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waving.webp" alt="Minty waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/running-right.webp" alt="Minty running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waiting.webp" alt="Minty waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/review.webp" alt="Minty review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · 제작자 <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruruka--ltmcliao-cmyk</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/idle.webp" alt="RuRuKa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waving.webp" alt="RuRuKa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/running-right.webp" alt="RuRuKa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waiting.webp" alt="RuRuKa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/review.webp" alt="RuRuKa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/shian-helper--mistyshen">Shian</a> · 제작자 <a href="https://github.com/mistyShen">@mistyShen</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shian-helper--mistyshen</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/idle.webp" alt="Shian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waving.webp" alt="Shian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/running-right.webp" alt="Shian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waiting.webp" alt="Shian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/review.webp" alt="Shian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main warden-codex--jorge-cuevas90003</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/idle.webp" alt="Warden Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waving.webp" alt="Warden Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/running-right.webp" alt="Warden Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waiting.webp" alt="Warden Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/review.webp" alt="Warden Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yier--gbn666">Yi Er</a> · 제작자 <a href="https://github.com/gbn666">@gbn666</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yier--gbn666</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/idle.webp" alt="Yi Er idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waving.webp" alt="Yi Er waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/running-right.webp" alt="Yi Er running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waiting.webp" alt="Yi Er waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/review.webp" alt="Yi Er review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yume-boundary--andy-meow">Yume</a> · 제작자 @andy-meow · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yume-boundary--andy-meow</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/idle.webp" alt="Yume idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waving.webp" alt="Yume waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/running-right.webp" alt="Yume running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waiting.webp" alt="Yume waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/review.webp" alt="Yume review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yuzubou--keseras34938976">Yuzubou</a> · 제작자 <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuzubou--keseras34938976</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/idle.webp" alt="Yuzubou idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waving.webp" alt="Yuzubou waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/running-right.webp" alt="Yuzubou running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waiting.webp" alt="Yuzubou waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/review.webp" alt="Yuzubou review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/gudong--rank">咕咚</a> · 제작자 @Rank · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gudong--rank</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/idle.webp" alt="咕咚 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waving.webp" alt="咕咚 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/running-right.webp" alt="咕咚 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waiting.webp" alt="咕咚 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/review.webp" alt="咕咚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/liubao--killyer">榴宝</a> · 제작자 @killyer · 오리지널 캐릭터 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main liubao--killyer</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/idle.webp" alt="榴宝 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waving.webp" alt="榴宝 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/running-right.webp" alt="榴宝 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waiting.webp" alt="榴宝 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/review.webp" alt="榴宝 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/feibi--vanfff">菲比</a> · 제작자 @vanfff · 오리지널 캐릭터 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feibi--vanfff</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/idle.webp" alt="菲比 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waving.webp" alt="菲比 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/running-right.webp" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waiting.webp" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/review.webp" alt="菲比 review" width="120" height="130"></td></tr>
</table>

### 마스코트

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/aemeath-mini--cunuo">Aemeath Mini</a> · 제작자 <a href="https://github.com/cuNuo">@cuNuo</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aemeath-mini--cunuo</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/idle.webp" alt="Aemeath Mini idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waving.webp" alt="Aemeath Mini waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/running-right.webp" alt="Aemeath Mini running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waiting.webp" alt="Aemeath Mini waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/review.webp" alt="Aemeath Mini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/apu--xchangee">Apu</a> · 제작자 <a href="https://github.com/xchangee">@xchangee</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main apu--xchangee</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/idle.webp" alt="Apu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waving.webp" alt="Apu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/running-right.webp" alt="Apu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waiting.webp" alt="Apu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/review.webp" alt="Apu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/claude--xiangking">Claude</a> · 제작자 <a href="https://github.com/xiangking">@xiangking</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main claude--xiangking</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/idle.webp" alt="Claude idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waving.webp" alt="Claude waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/running-right.webp" alt="Claude running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waiting.webp" alt="Claude waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/review.webp" alt="Claude review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/twinkle-twinkle--twinkletwinkle">Dashun's Twinkle Twinkle</a> · 제작자 @twinkletwinkle · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twinkle-twinkle--twinkletwinkle</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/idle.webp" alt="Dashun's Twinkle Twinkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waving.webp" alt="Dashun's Twinkle Twinkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/running-right.webp" alt="Dashun's Twinkle Twinkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waiting.webp" alt="Dashun's Twinkle Twinkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/review.webp" alt="Dashun's Twinkle Twinkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · 제작자 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diaoyi-baobao--d1a0y1bb</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/idle.webp" alt="Diaoyi Baobao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waving.webp" alt="Diaoyi Baobao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/running-right.webp" alt="Diaoyi Baobao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waiting.webp" alt="Diaoyi Baobao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/review.webp" alt="Diaoyi Baobao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/gpt-muse--opask">GPT-muse</a> · 제작자 @opask · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gpt-muse--opask</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/idle.webp" alt="GPT-muse idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waving.webp" alt="GPT-muse waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/running-right.webp" alt="GPT-muse running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waiting.webp" alt="GPT-muse waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/review.webp" alt="GPT-muse review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/lulu--yogazz">Lulu</a> · 제작자 <a href="https://github.com/YoGazz">@YoGazz</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lulu--yogazz</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/idle.webp" alt="Lulu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waving.webp" alt="Lulu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/running-right.webp" alt="Lulu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waiting.webp" alt="Lulu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/review.webp" alt="Lulu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/saki--rookie-09">Saki</a> · 제작자 <a href="https://github.com/rookie-09">@rookie-09</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saki--rookie-09</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/idle.webp" alt="Saki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waving.webp" alt="Saki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/running-right.webp" alt="Saki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waiting.webp" alt="Saki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/review.webp" alt="Saki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/wally--wally025">Wally</a> · 제작자 <a href="https://github.com/wally025">@wally025</a> · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wally--wally025</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/idle.webp" alt="Wally idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waving.webp" alt="Wally waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/running-right.webp" alt="Wally running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waiting.webp" alt="Wally waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/review.webp" alt="Wally review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/zhengyin--noonwake">Zhengyin</a> · 제작자 <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · 마스코트 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zhengyin--noonwake</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/idle.webp" alt="Zhengyin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waving.webp" alt="Zhengyin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/running-right.webp" alt="Zhengyin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waiting.webp" alt="Zhengyin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/review.webp" alt="Zhengyin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/happynailong--aquaxyy">大笑奶龙</a> · 제작자 @aquaxyy · 마스코트 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main happynailong--aquaxyy</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/idle.webp" alt="大笑奶龙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waving.webp" alt="大笑奶龙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/running-right.webp" alt="大笑奶龙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waiting.webp" alt="大笑奶龙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/review.webp" alt="大笑奶龙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/bubu-codebrew-bear--xxhh0822">布布</a> · 제작자 <a href="https://github.com/xxhh0822">@xxhh0822</a> · 마스코트 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu-codebrew-bear--xxhh0822</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/idle.webp" alt="布布 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waving.webp" alt="布布 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/running-right.webp" alt="布布 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waiting.webp" alt="布布 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/review.webp" alt="布布 review" width="120" height="130"></td></tr>
</table>

### 동물 친구

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/becky--natewanggg">Becky</a> · 제작자 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main becky--natewanggg</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/idle.webp" alt="Becky idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waving.webp" alt="Becky waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/running-right.webp" alt="Becky running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waiting.webp" alt="Becky waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/review.webp" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/bubu--gbn666">Bubu</a> · 제작자 <a href="https://github.com/gbn666">@gbn666</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu--gbn666</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/idle.webp" alt="Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waving.webp" alt="Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/running-right.webp" alt="Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waiting.webp" alt="Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/review.webp" alt="Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · 제작자 <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main corgi-companion--cxian0928-afk</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/idle.webp" alt="Corgi Companion idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waving.webp" alt="Corgi Companion waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/running-right.webp" alt="Corgi Companion running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waiting.webp" alt="Corgi Companion waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/review.webp" alt="Corgi Companion review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/desk-otter--zihualiu1997">Desk Otter</a> · 제작자 <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main desk-otter--zihualiu1997</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/idle.webp" alt="Desk Otter idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waving.webp" alt="Desk Otter waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/running-right.webp" alt="Desk Otter running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waiting.webp" alt="Desk Otter waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/review.webp" alt="Desk Otter review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/diandian--lllucasxu">Diandian</a> · 제작자 <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diandian--lllucasxu</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/idle.webp" alt="Diandian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waving.webp" alt="Diandian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/running-right.webp" alt="Diandian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waiting.webp" alt="Diandian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/review.webp" alt="Diandian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/dudu-bubu--clembuilds">Dudu & Bubu</a> · 제작자 @clembuilds · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dudu-bubu--clembuilds</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/idle.webp" alt="Dudu & Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waving.webp" alt="Dudu & Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/running-right.webp" alt="Dudu & Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waiting.webp" alt="Dudu & Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/review.webp" alt="Dudu & Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/ella-wave--sehjk">Ella Wave</a> · 제작자 @sehjk · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ella-wave--sehjk</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/idle.webp" alt="Ella Wave idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waving.webp" alt="Ella Wave waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/running-right.webp" alt="Ella Wave running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waiting.webp" alt="Ella Wave waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/review.webp" alt="Ella Wave review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/fleta--natewanggg">Fleta</a> · 제작자 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fleta--natewanggg</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/idle.webp" alt="Fleta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waving.webp" alt="Fleta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/running-right.webp" alt="Fleta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waiting.webp" alt="Fleta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/review.webp" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/frankie--aygunvarol">Frankie</a> · 제작자 <a href="https://github.com/AygunVarol">@AygunVarol</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frankie--aygunvarol</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/idle.webp" alt="Frankie idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waving.webp" alt="Frankie waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/running-right.webp" alt="Frankie running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waiting.webp" alt="Frankie waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/review.webp" alt="Frankie review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/jiji--yena">Jiji</a> · 제작자 @yena · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jiji--yena</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/idle.webp" alt="Jiji idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waving.webp" alt="Jiji waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/running-right.webp" alt="Jiji running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waiting.webp" alt="Jiji waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/review.webp" alt="Jiji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kiko--untko">Kiko</a> · 제작자 <a href="https://github.com/untko">@untko</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kiko--untko</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/idle.webp" alt="Kiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waving.webp" alt="Kiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/running-right.webp" alt="Kiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waiting.webp" alt="Kiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/review.webp" alt="Kiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kimoju--andiac">Kimoju</a> · 제작자 @andiac · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kimoju--andiac</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/idle.webp" alt="Kimoju idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waving.webp" alt="Kimoju waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/running-right.webp" alt="Kimoju running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waiting.webp" alt="Kimoju waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/review.webp" alt="Kimoju review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/lil-swole--gg0805">Lil Swole</a> · 제작자 <a href="https://github.com/gg0805">@gg0805</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lil-swole--gg0805</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/idle.webp" alt="Lil Swole idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waving.webp" alt="Lil Swole waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/running-right.webp" alt="Lil Swole running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waiting.webp" alt="Lil Swole waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/review.webp" alt="Lil Swole review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/little-sheep--mingdong">Little Sheep</a> · 제작자 @MingDong · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-sheep--mingdong</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/idle.webp" alt="Little Sheep idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waving.webp" alt="Little Sheep waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/running-right.webp" alt="Little Sheep running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waiting.webp" alt="Little Sheep waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/review.webp" alt="Little Sheep review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mai--dwdestiny">Mai</a> · 제작자 <a href="https://github.com/DwDestiny">@DwDestiny</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mai--dwdestiny</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/idle.webp" alt="Mai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waving.webp" alt="Mai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/running-right.webp" alt="Mai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waiting.webp" alt="Mai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/review.webp" alt="Mai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mellow-duck--sally-entr">Mellow Duck</a> · 제작자 @sally-entr · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mellow-duck--sally-entr</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/idle.webp" alt="Mellow Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waving.webp" alt="Mellow Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/running-right.webp" alt="Mellow Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waiting.webp" alt="Mellow Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/review.webp" alt="Mellow Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/mimi--spacebody">Mimi</a> · 제작자 <a href="https://github.com/Spacebody">@Spacebody</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mimi--spacebody</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/idle.webp" alt="Mimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waving.webp" alt="Mimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/running-right.webp" alt="Mimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waiting.webp" alt="Mimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/review.webp" alt="Mimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/moomew-coder-cat--ping">MooMew Coder</a> · 제작자 @ping · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main moomew-coder-cat--ping</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/idle.webp" alt="MooMew Coder idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waving.webp" alt="MooMew Coder waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/running-right.webp" alt="MooMew Coder running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waiting.webp" alt="MooMew Coder waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/review.webp" alt="MooMew Coder review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/panda--jason-bai">Panda</a> · 제작자 <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main panda--jason-bai</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/idle.webp" alt="Panda idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waving.webp" alt="Panda waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/running-right.webp" alt="Panda running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waiting.webp" alt="Panda waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/review.webp" alt="Panda review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · 제작자 <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main pixel-duck--flamurmaliqi</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/idle.webp" alt="Pixel Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waving.webp" alt="Pixel Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/running-right.webp" alt="Pixel Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waiting.webp" alt="Pixel Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/review.webp" alt="Pixel Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/rook--klubbyte">Rook</a> · 제작자 @klubbyte · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rook--klubbyte</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/idle.webp" alt="Rook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waving.webp" alt="Rook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/running-right.webp" alt="Rook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waiting.webp" alt="Rook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/review.webp" alt="Rook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/miu-meo--lemon-z">SalaryCat</a> · 제작자 @lemon-z · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miu-meo--lemon-z</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/idle.webp" alt="SalaryCat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waving.webp" alt="SalaryCat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/running-right.webp" alt="SalaryCat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waiting.webp" alt="SalaryCat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/review.webp" alt="SalaryCat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/salary-cat--zuochunjie">SalaryCat</a> · 제작자 <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main salary-cat--zuochunjie</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/idle.webp" alt="SalaryCat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waving.webp" alt="SalaryCat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/running-right.webp" alt="SalaryCat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waiting.webp" alt="SalaryCat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/review.webp" alt="SalaryCat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/sunny-retriever--legeling">Sunny Retriever</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sunny-retriever--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/idle.webp" alt="Sunny Retriever idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waving.webp" alt="Sunny Retriever waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/running-right.webp" alt="Sunny Retriever running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waiting.webp" alt="Sunny Retriever waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/review.webp" alt="Sunny Retriever review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/teddy--danieloleary">Teddy</a> · 제작자 <a href="https://github.com/danieloleary">@danieloleary</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main teddy--danieloleary</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/idle.webp" alt="Teddy idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waving.webp" alt="Teddy waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/running-right.webp" alt="Teddy running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waiting.webp" alt="Teddy waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/review.webp" alt="Teddy review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · 제작자 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tian-hua-hua--d1a0y1bb</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/idle.webp" alt="Tian Hua Hua idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waving.webp" alt="Tian Hua Hua waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/running-right.webp" alt="Tian Hua Hua running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waiting.webp" alt="Tian Hua Hua waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/review.webp" alt="Tian Hua Hua review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/usachi--jack">乌萨奇</a> · 제작자 @jack · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main usachi--jack</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/idle.webp" alt="乌萨奇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waving.webp" alt="乌萨奇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/running-right.webp" alt="乌萨奇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waiting.webp" alt="乌萨奇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/review.webp" alt="乌萨奇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · 제작자 @1wphantom · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dai-dai-nai-you--1wphantom</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/idle.webp" alt="呆呆奶油 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waving.webp" alt="呆呆奶油 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/running-right.webp" alt="呆呆奶油 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waiting.webp" alt="呆呆奶油 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/review.webp" alt="呆呆奶油 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tuantuan--jbbom">团团</a> · 제작자 <a href="https://github.com/JbBom">@JbBom</a> · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tuantuan--jbbom</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/idle.webp" alt="团团 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waving.webp" alt="团团 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/running-right.webp" alt="团团 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waiting.webp" alt="团团 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/review.webp" alt="团团 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/duodong--froggie">多栋</a> · 제작자 @froggie · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main duodong--froggie</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/idle.webp" alt="多栋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waving.webp" alt="多栋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/running-right.webp" alt="多栋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waiting.webp" alt="多栋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/review.webp" alt="多栋 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/naiwa--sandytruant">奶蛙</a> · 제작자 <a href="https://github.com/sandytruant">@sandytruant</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main naiwa--sandytruant</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/idle.webp" alt="奶蛙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waving.webp" alt="奶蛙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/running-right.webp" alt="奶蛙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waiting.webp" alt="奶蛙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/review.webp" alt="奶蛙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/xiaoba-cat--jack">小八猫</a> · 제작자 @jack · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaoba-cat--jack</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/idle.webp" alt="小八猫 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waving.webp" alt="小八猫 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/running-right.webp" alt="小八猫 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waiting.webp" alt="小八猫 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/review.webp" alt="小八猫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/xiaomai--brian-3">小麦 XiaoMai</a> · 제작자 @brian-3 · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaomai--brian-3</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/idle.webp" alt="小麦 XiaoMai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waving.webp" alt="小麦 XiaoMai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/running-right.webp" alt="小麦 XiaoMai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waiting.webp" alt="小麦 XiaoMai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/review.webp" alt="小麦 XiaoMai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/koukou-penguin--hoody">扣扣企鹅</a> · 제작자 @hoody · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main koukou-penguin--hoody</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/idle.webp" alt="扣扣企鹅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waving.webp" alt="扣扣企鹅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/running-right.webp" alt="扣扣企鹅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waiting.webp" alt="扣扣企鹅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/review.webp" alt="扣扣企鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/capybara-lulu--jiushu">水豚噜噜</a> · 제작자 @jiushu · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main capybara-lulu--jiushu</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/idle.webp" alt="水豚噜噜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waving.webp" alt="水豚噜噜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/running-right.webp" alt="水豚噜噜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waiting.webp" alt="水豚噜噜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/review.webp" alt="水豚噜噜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/niumou--jarvis-2">牛哞</a> · 제작자 @jarvis-2 · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main niumou--jarvis-2</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/idle.webp" alt="牛哞 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waving.webp" alt="牛哞 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/running-right.webp" alt="牛哞 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waiting.webp" alt="牛哞 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/review.webp" alt="牛哞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/zichao-xiong--z-kzhang">自嘲熊</a> · 제작자 @z-kzhang · 동물 친구 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zichao-xiong--z-kzhang</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/idle.webp" alt="自嘲熊 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waving.webp" alt="自嘲熊 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/running-right.webp" alt="自嘲熊 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waiting.webp" alt="自嘲熊 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/review.webp" alt="自嘲熊 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/jinmao--legeling">金毛</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jinmao--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/idle.webp" alt="金毛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waving.webp" alt="金毛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/running-right.webp" alt="金毛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waiting.webp" alt="金毛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/review.webp" alt="金毛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/wucanrou--ch">金渐层（午餐肉）</a> · 제작자 <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · 동물 친구 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wucanrou--ch</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/idle.webp" alt="金渐层（午餐肉） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waving.webp" alt="金渐层（午餐肉） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/running-right.webp" alt="金渐层（午餐肉） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waiting.webp" alt="金渐层（午餐肉） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/review.webp" alt="金渐层（午餐肉） review" width="120" height="130"></td></tr>
</table>

### 판타지 생물

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/behemoth--kajdrak2">Behemoth</a> · 제작자 <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · 판타지 생물 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main behemoth--kajdrak2</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/idle.webp" alt="Behemoth idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waving.webp" alt="Behemoth waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/running-right.webp" alt="Behemoth running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waiting.webp" alt="Behemoth waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/review.webp" alt="Behemoth review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/goblin--rkwap">Goblin</a> · 제작자 @rkwap · 판타지 생물 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main goblin--rkwap</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/idle.webp" alt="Goblin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waving.webp" alt="Goblin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/running-right.webp" alt="Goblin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waiting.webp" alt="Goblin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/review.webp" alt="Goblin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/luna-angel-cat--neve">luna_angel cat</a> · 제작자 @neve · 판타지 생물 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luna-angel-cat--neve</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/idle.webp" alt="luna_angel cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waving.webp" alt="luna_angel cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/running-right.webp" alt="luna_angel cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waiting.webp" alt="luna_angel cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/review.webp" alt="luna_angel cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 제작자 <a href="https://github.com/netizenXuan">@netizenXuan</a> · 판타지 생물 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main night-neko--netizenxuan</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/idle.webp" alt="Night Neko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waving.webp" alt="Night Neko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/running-right.webp" alt="Night Neko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waiting.webp" alt="Night Neko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/review.webp" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/starcorn--alterhq">Starcorn</a> · 제작자 <a href="https://github.com/alterhq">@alterhq</a> · 판타지 생물 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main starcorn--alterhq</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/idle.webp" alt="Starcorn idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waving.webp" alt="Starcorn waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/running-right.webp" alt="Starcorn running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waiting.webp" alt="Starcorn waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/review.webp" alt="Starcorn review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · 제작자 <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · 판타지 생물 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xian-xiao-lu--qingyunagi</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/idle.webp" alt="Xian Xiao Lu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waving.webp" alt="Xian Xiao Lu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/running-right.webp" alt="Xian Xiao Lu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waiting.webp" alt="Xian Xiao Lu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/review.webp" alt="Xian Xiao Lu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yuanzai--gaming33">Yuanzai</a> · 제작자 <a href="https://github.com/Gaming33">@Gaming33</a> · 판타지 생물 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuanzai--gaming33</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/idle.webp" alt="Yuanzai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waving.webp" alt="Yuanzai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/running-right.webp" alt="Yuanzai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waiting.webp" alt="Yuanzai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/review.webp" alt="Yuanzai review" width="120" height="130"></td></tr>
</table>

### 로봇

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/chispa--giiilberto-nm">Chispa</a> · 제작자 @giiilberto-nm · 로봇 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chispa--giiilberto-nm</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/idle.webp" alt="Chispa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waving.webp" alt="Chispa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/running-right.webp" alt="Chispa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waiting.webp" alt="Chispa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/review.webp" alt="Chispa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/codenono--dq02">CodeNoNo</a> · 제작자 <a href="https://github.com/Dqd02">@Dqd02</a> · 로봇 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main codenono--dq02</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/idle.webp" alt="CodeNoNo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waving.webp" alt="CodeNoNo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/running-right.webp" alt="CodeNoNo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waiting.webp" alt="CodeNoNo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/review.webp" alt="CodeNoNo review" width="120" height="130"></td></tr>
</table>

### 인물 아바타

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/azuma--tairazuma">Azuma</a> · 제작자 @tairazuma · 인물 아바타 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main azuma--tairazuma</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/idle.webp" alt="Azuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waving.webp" alt="Azuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/running-right.webp" alt="Azuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waiting.webp" alt="Azuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/review.webp" alt="Azuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tangdouren--carl312">Tangdouren</a> · 제작자 <a href="https://github.com/Carl-312">@Carl-312</a> · 인물 아바타 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tangdouren--carl312</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/idle.webp" alt="Tangdouren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waving.webp" alt="Tangdouren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/running-right.webp" alt="Tangdouren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waiting.webp" alt="Tangdouren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/review.webp" alt="Tangdouren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/guga--circus">咕嘎</a> · 제작자 @circus · 인물 아바타 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main guga--circus</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/idle.webp" alt="咕嘎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waving.webp" alt="咕嘎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/running-right.webp" alt="咕嘎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waiting.webp" alt="咕嘎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/review.webp" alt="咕嘎 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/fengge--qzl1-stack">峰哥</a> · 제작자 <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · 인물 아바타 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fengge--qzl1-stack</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/idle.webp" alt="峰哥 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waving.webp" alt="峰哥 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/running-right.webp" alt="峰哥 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waiting.webp" alt="峰哥 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/review.webp" alt="峰哥 review" width="120" height="130"></td></tr>
</table>

### 밈

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/drill-cat--qimi">Drill Cat</a> · 제작자 <a href="https://github.com/qishichuan">@qishichuan</a> · 밈 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main drill-cat--qimi</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/idle.webp" alt="Drill Cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waving.webp" alt="Drill Cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/running-right.webp" alt="Drill Cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waiting.webp" alt="Drill Cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/review.webp" alt="Drill Cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hami--tat">Hami</a> · 제작자 <a href="https://github.com/TATcc">@TATcc</a> · 밈 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hami--tat</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/idle.webp" alt="Hami idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waving.webp" alt="Hami waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/running-right.webp" alt="Hami running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waiting.webp" alt="Hami waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/review.webp" alt="Hami review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · 제작자 <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · 밈 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main katana-cheems--thankyou-cheems</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/idle.webp" alt="Katana Cheems idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waving.webp" alt="Katana Cheems waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/running-right.webp" alt="Katana Cheems running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waiting.webp" alt="Katana Cheems waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/review.webp" alt="Katana Cheems review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/hance-woniu--korn">旱厕蜗牛</a> · 제작자 @korn · 밈 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hance-woniu--korn</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/idle.webp" alt="旱厕蜗牛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waving.webp" alt="旱厕蜗牛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/running-right.webp" alt="旱厕蜗牛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waiting.webp" alt="旱厕蜗牛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/review.webp" alt="旱厕蜗牛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/maodie--octane0411">耄耋</a> · 제작자 <a href="https://github.com/Octane0411">@Octane0411</a> · 밈 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main maodie--octane0411</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/idle.webp" alt="耄耋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waving.webp" alt="耄耋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/running-right.webp" alt="耄耋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waiting.webp" alt="耄耋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/review.webp" alt="耄耋 review" width="120" height="130"></td></tr>
</table>

### 사물과 소품

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/spellbook--seymour">Spellbook</a> · 제작자 @seymour · 사물과 소품 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main spellbook--seymour</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/idle.webp" alt="Spellbook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waving.webp" alt="Spellbook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/running-right.webp" alt="Spellbook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waiting.webp" alt="Spellbook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/review.webp" alt="Spellbook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/tiny-crt--chochou">Tiny CRT</a> · 제작자 @chochou · 사물과 소품 · v1</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tiny-crt--chochou</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/idle.webp" alt="Tiny CRT idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waving.webp" alt="Tiny CRT waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/running-right.webp" alt="Tiny CRT running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waiting.webp" alt="Tiny CRT waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/review.webp" alt="Tiny CRT review" width="120" height="130"></td></tr>
</table>

### 기타

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/kuromi--legeling">库洛米</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuromi--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/idle.webp" alt="库洛米 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waving.webp" alt="库洛米 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/running-right.webp" alt="库洛米 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waiting.webp" alt="库洛米 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/review.webp" alt="库洛米 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/xingxingren--legeling">星星人</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xingxingren--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/idle.webp" alt="星星人 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waving.webp" alt="星星人 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/running-right.webp" alt="星星人 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waiting.webp" alt="星星人 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/review.webp" alt="星星人 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/yanlingji--jorge-cuevas90003">焰灵姬</a> · 제작자 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yanlingji--jorge-cuevas90003</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/idle.webp" alt="焰灵姬 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waving.webp" alt="焰灵姬 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/running-right.webp" alt="焰灵姬 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waiting.webp" alt="焰灵姬 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/review.webp" alt="焰灵姬 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/twilight-sparkle--wuye3790">紫悦</a> · 제작자 <a href="https://github.com/WuYe3790">@WuYe3790</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twilight-sparkle--wuye3790</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/idle.webp" alt="紫悦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waving.webp" alt="紫悦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/running-right.webp" alt="紫悦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waiting.webp" alt="紫悦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/review.webp" alt="紫悦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/longying--legeling">胧萤</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main longying--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/idle.webp" alt="胧萤 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waving.webp" alt="胧萤 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/running-right.webp" alt="胧萤 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waiting.webp" alt="胧萤 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/review.webp" alt="胧萤 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>이름</th><td colspan="5"><a href="../../pets/bond-forger--legeling">邦德·福杰</a> · 제작자 <a href="https://github.com/legeling">@legeling</a> · 기타 · v2</td></tr>
<tr><th>설치</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bond-forger--legeling</code></td></tr>
<tr><th>동작</th><td><strong>대기</strong></td><td><strong>인사</strong></td><td><strong>달리기</strong></td><td><strong>입력 대기</strong></td><td><strong>검토</strong></td></tr>
<tr><th>미리 보기</th><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/idle.webp" alt="邦德·福杰 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waving.webp" alt="邦德·福杰 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/running-right.webp" alt="邦德·福杰 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waiting.webp" alt="邦德·福杰 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/review.webp" alt="邦德·福杰 review" width="120" height="130"></td></tr>
</table>

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
