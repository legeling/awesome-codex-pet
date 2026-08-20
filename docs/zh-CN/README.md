<div align="center">

# Awesome Codex Pet

[English](../../README.md) | 简体中文 | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md)

<h2><a href="https://codexpet.top">免费浏览并安装 Codex 小宠物：codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet 是免费的社区小宠物画廊。</strong>像逛宠物商店一样查看完整动画并一键安装；没有喜欢的角色时，还可以免费提交申请，社区贡献者可能会志愿制作。</p>

<p><a href="https://codexpet.top"><strong>挑选宠物</strong></a> · <a href="https://codexpet.top/zh/install"><strong>安装宠物</strong></a> · <a href="https://codexpet.top/zh/request"><strong>申请喜欢的角色</strong></a></p>

<a href="https://codexpet.top"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="进入 Awesome Codex Pet 精品画廊"></a>

![pets: 200](https://img.shields.io/badge/pets-200-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

</div>

本仓库是 [codexpet.top](https://codexpet.top) 背后的宠物目录，负责保存可安装成品、作者与来源信息、合集元数据、校验工具和贡献记录。挑选与安装宠物时，请优先使用网站。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **免费社区画廊** — [codexpet.top](https://codexpet.top) 提供完整动作预览、合集、作者主页、基于安装与点赞的每周榜单、便捷分享和社区统计
- **免费角色申请** — 不需要自己制作 spritesheet；提交角色和参考资料后，社区贡献者可能会志愿制作，但不承诺交付
- **AI 优先投稿** — 贡献者可在 Codex 中制作、修复并提交自己的宠物，熟悉 Git 的用户也可以直接提交 PR
- **非商用原则** — 正式许可证可选；没有正式许可证时必须明确禁止商用

每只宠物都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

预览图会作为本地或 CI 构建产物生成到 `assets/previews/<pet-id>/`，不会塞进宠物目录。

仓库级作品系列与主题系列统一维护在 `collections.json`：`kind: franchise` 表示来自同一原作的作品系列，`kind: theme` 表示按题材、风格或伙伴类型组织的跨作品主题系列。宠物通过 `submission.json.collections` 声明归属，目录与网站都会从这些元数据自动生成。归属信息会立即记录，但只有达到至少 3 只宠物的合集才会在网站公开展示。

`submission.json.name` 是必填的默认名称。投稿者可以省略 `localized_names`，只使用一种语言；也可以选择双语，并同时填写 `localized_names.en` 与 `localized_names.zh`。网站会跟随访客选择的语言展示，不会擅自生成翻译。

## Pet 版本

| 版本 | 图集                      | 运行时元数据                          | 用途                           |
| ---- | ------------------------- | ------------------------------------- | ------------------------------ |
| v1   | `1536x1872`，8 列 × 9 行  | 省略 `spriteVersionNumber` 或设为 `1` | 已有的标准动作宠物             |
| v2   | `1536x2288`，8 列 × 11 行 | 设置 `spriteVersionNumber: 2`         | 标准动作加 16 个顺时针环视方向 |

两个版本都可以安装。维护已有九行动画时使用 v1；需要环视动作的新宠物或升级宠物使用 v2。

## 快速安装

无需 clone，按你的系统选一条命令：

```bash
# macOS / Linux
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB -MaximumRedirection 5 -TimeoutSec 120 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian -RawBase 'https://raw.githubusercontent.com/legeling/awesome-codex-pet/main'"
```

```bash
# 在本地仓库中使用 Node.js
npm run install:pet -- firefly--lingxiaotian
```

列出可安装的宠物：

```bash
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main --list
```

默认安装位置：

- macOS / Linux：`~/.codex/pets/<pet-id>/`
- Windows：`%USERPROFILE%\.codex\pets\<pet-id>\`

可通过 `CODEX_HOME` 自定义安装路径，或者设置 `AWESOME_CODEX_PET_NO_STATS=1` 关闭匿名安装计数。安装器会校验仓库清单与 SHA-256，先在临时目录准备完整文件再切换；替换已有宠物时需要显式添加 `--force`。如需可复现安装，请把两处 URL 中的 `main` 替换为不可变的 commit 或 tag。

## 升级已有 v1 宠物

1. 打开 Codex 的**设置 → 宠物**。
2. 找到已安装的自定义宠物，点击**更新**。
3. Codex 会打开 Hatch Pet 任务。当前 v2 流程会校验并保留原有九行动画，只生成四个方向锚点和 16 个环视方向，然后写出带 `spriteVersionNumber: 2` 的十一行图集。
4. 接受替换前，检查生成的 contact sheet 和方向预览。

这里的**更新**是 AI 辅助的 v1 → v2 转换，不是本仓库发出了新版下载通知。它只更新 `~/.codex/pets/` 下的本地包，不会自动修改或提交 GitHub 仓库里的版本。

## 宠物收录

### 游戏角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/firefly--lingxiaotian">流萤</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/idle.webp" alt="流萤 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waving.webp" alt="流萤 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/running-right.webp" alt="流萤 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/waiting.webp" alt="流萤 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/firefly--lingxiaotian/webp/review.webp" alt="流萤 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/acheron--lingxiaotian">黄泉</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main acheron--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/idle.webp" alt="黄泉 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waving.webp" alt="黄泉 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/running-right.webp" alt="黄泉 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/waiting.webp" alt="黄泉 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/acheron--lingxiaotian/webp/review.webp" alt="黄泉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/arlecchino--lingxiaotian">阿蕾奇诺</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main arlecchino--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/idle.webp" alt="阿蕾奇诺 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waving.webp" alt="阿蕾奇诺 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/running-right.webp" alt="阿蕾奇诺 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/waiting.webp" alt="阿蕾奇诺 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/arlecchino--lingxiaotian/webp/review.webp" alt="阿蕾奇诺 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/black-swan--lingxiaotian">黑天鹅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main black-swan--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/idle.webp" alt="黑天鹅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waving.webp" alt="黑天鹅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/running-right.webp" alt="黑天鹅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/waiting.webp" alt="黑天鹅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/black-swan--lingxiaotian/webp/review.webp" alt="黑天鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/buba--yurcek">Buba</a> · 作者 @yurcek · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main buba--yurcek</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/idle.webp" alt="Buba idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waving.webp" alt="Buba waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/running-right.webp" alt="Buba running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/waiting.webp" alt="Buba waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/buba--yurcek/webp/review.webp" alt="Buba review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/castorice--lingxiaotian">遐蝶</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main castorice--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/idle.webp" alt="遐蝶 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waving.webp" alt="遐蝶 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/running-right.webp" alt="遐蝶 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/waiting.webp" alt="遐蝶 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/castorice--lingxiaotian/webp/review.webp" alt="遐蝶 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chen--chenxin-dlut">陈</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chen--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/idle.webp" alt="陈 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waving.webp" alt="陈 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/running-right.webp" alt="陈 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/waiting.webp" alt="陈 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chen--chenxin-dlut/webp/review.webp" alt="陈 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/citlali--zaytsevzy">茜特菈莉</a> · 作者 <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main citlali--zaytsevzy</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/idle.webp" alt="茜特菈莉 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waving.webp" alt="茜特菈莉 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/running-right.webp" alt="茜特菈莉 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/waiting.webp" alt="茜特菈莉 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/citlali--zaytsevzy/webp/review.webp" alt="茜特菈莉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/cyrene--lingxiaotian">昔涟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main cyrene--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/idle.webp" alt="昔涟 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waving.webp" alt="昔涟 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/running-right.webp" alt="昔涟 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/waiting.webp" alt="昔涟 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/cyrene--lingxiaotian/webp/review.webp" alt="昔涟 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dimo-stand--god-wu">Dimo</a> · 作者 @god-wu · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dimo-stand--god-wu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/idle.webp" alt="Dimo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waving.webp" alt="Dimo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/running-right.webp" alt="Dimo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/waiting.webp" alt="Dimo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dimo-stand--god-wu/webp/review.webp" alt="Dimo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/doro--lingxiaotian">桃乐丝（Doro）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doro--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/idle.webp" alt="桃乐丝（Doro） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waving.webp" alt="桃乐丝（Doro） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/running-right.webp" alt="桃乐丝（Doro） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/waiting.webp" alt="桃乐丝（Doro） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doro--lingxiaotian/webp/review.webp" alt="桃乐丝（Doro） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/feixiao--lingxiaotian">飞霄</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feixiao--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/idle.webp" alt="飞霄 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waving.webp" alt="飞霄 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/running-right.webp" alt="飞霄 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/waiting.webp" alt="飞霄 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feixiao--lingxiaotian/webp/review.webp" alt="飞霄 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/furina--lingxiaotian">芙宁娜</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main furina--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/idle.webp" alt="芙宁娜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waving.webp" alt="芙宁娜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/running-right.webp" alt="芙宁娜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/waiting.webp" alt="芙宁娜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/furina--lingxiaotian/webp/review.webp" alt="芙宁娜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ganyu--chenxin-dlut">甘雨</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ganyu--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/idle.webp" alt="甘雨 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waving.webp" alt="甘雨 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/running-right.webp" alt="甘雨 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/waiting.webp" alt="甘雨 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ganyu--chenxin-dlut/webp/review.webp" alt="甘雨 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hu-tao--lingxiaotian">胡桃</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hu-tao--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/idle.webp" alt="胡桃 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waving.webp" alt="胡桃 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/running-right.webp" alt="胡桃 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/waiting.webp" alt="胡桃 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hu-tao--lingxiaotian/webp/review.webp" alt="胡桃 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hyacine--kurisu">风堇</a> · 作者 <a href="https://github.com/kurisu994">@kurisu994</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hyacine--kurisu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/idle.webp" alt="风堇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waving.webp" alt="风堇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/running-right.webp" alt="风堇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/waiting.webp" alt="风堇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hyacine--kurisu/webp/review.webp" alt="风堇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/isaac--foggy-whale">Isaac</a> · 作者 <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isaac--foggy-whale</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/idle.webp" alt="Isaac idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waving.webp" alt="Isaac waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/running-right.webp" alt="Isaac running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/waiting.webp" alt="Isaac waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isaac--foggy-whale/webp/review.webp" alt="Isaac review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kamisato-ayaka--lingxiaotian">神里绫华</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kamisato-ayaka--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/idle.webp" alt="神里绫华 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waving.webp" alt="神里绫华 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/running-right.webp" alt="神里绫华 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/waiting.webp" alt="神里绫华 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kamisato-ayaka--lingxiaotian/webp/review.webp" alt="神里绫华 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/klee--chenxin-dlut">可莉</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main klee--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/idle.webp" alt="可莉 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waving.webp" alt="可莉 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/running-right.webp" alt="可莉 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/waiting.webp" alt="可莉 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/klee--chenxin-dlut/webp/review.webp" alt="可莉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kuro-chibi--kuroneko-night">Kuro Q版</a> · 作者 <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuro-chibi--kuroneko-night</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/idle.webp" alt="Kuro Q版 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waving.webp" alt="Kuro Q版 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/running-right.webp" alt="Kuro Q版 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/waiting.webp" alt="Kuro Q版 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuro-chibi--kuroneko-night/webp/review.webp" alt="Kuro Q版 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/lappland--chenxin-dlut">拉普兰德</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lappland--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/idle.webp" alt="拉普兰德 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waving.webp" alt="拉普兰德 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/running-right.webp" alt="拉普兰德 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/waiting.webp" alt="拉普兰德 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lappland--chenxin-dlut/webp/review.webp" alt="拉普兰德 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/little-black-mage--libertis">Little Black Mage</a> · 作者 @libertis · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-black-mage--libertis</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/idle.webp" alt="Little Black Mage idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waving.webp" alt="Little Black Mage waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/running-right.webp" alt="Little Black Mage running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/waiting.webp" alt="Little Black Mage waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-black-mage--libertis/webp/review.webp" alt="Little Black Mage review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/march-7th--chenxin-dlut">三月七</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main march-7th--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/idle.webp" alt="三月七 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waving.webp" alt="三月七 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/running-right.webp" alt="三月七 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/waiting.webp" alt="三月七 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/march-7th--chenxin-dlut/webp/review.webp" alt="三月七 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/missile--zpzjzj">Missile</a> · 作者 <a href="https://github.com/zpzjzj">@zpzjzj</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main missile--zpzjzj</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/idle.webp" alt="Missile idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waving.webp" alt="Missile waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/running-right.webp" alt="Missile running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/waiting.webp" alt="Missile waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/missile--zpzjzj/webp/review.webp" alt="Missile review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miyabi--eric-terminal">星见雅</a> · 作者 <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miyabi--eric-terminal</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/idle.webp" alt="星见雅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waving.webp" alt="星见雅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/running-right.webp" alt="星见雅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/waiting.webp" alt="星见雅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miyabi--eric-terminal/webp/review.webp" alt="星见雅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/nahida--lingxiaotian">纳西妲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nahida--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/idle.webp" alt="纳西妲 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waving.webp" alt="纳西妲 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/running-right.webp" alt="纳西妲 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/waiting.webp" alt="纳西妲 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nahida--lingxiaotian/webp/review.webp" alt="纳西妲 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/navia--lingxiaotian">娜维娅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main navia--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/idle.webp" alt="娜维娅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waving.webp" alt="娜维娅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/running-right.webp" alt="娜维娅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/waiting.webp" alt="娜维娅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/navia--lingxiaotian/webp/review.webp" alt="娜维娅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/om-nom--kasyan1337">Om Nom</a> · 作者 <a href="https://github.com/kasyan1337">@kasyan1337</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main om-nom--kasyan1337</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/idle.webp" alt="Om Nom idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waving.webp" alt="Om Nom waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/running-right.webp" alt="Om Nom running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/waiting.webp" alt="Om Nom waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/om-nom--kasyan1337/webp/review.webp" alt="Om Nom review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/paimon--lingxiaotian">派蒙</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main paimon--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/idle.webp" alt="派蒙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waving.webp" alt="派蒙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/running-right.webp" alt="派蒙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/waiting.webp" alt="派蒙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/paimon--lingxiaotian/webp/review.webp" alt="派蒙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/phoebe--chenxin-dlut">菲比</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main phoebe--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/idle.webp" alt="菲比 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waving.webp" alt="菲比 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/running-right.webp" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/waiting.webp" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/phoebe--chenxin-dlut/webp/review.webp" alt="菲比 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/raiden-shogun--lingxiaotian">雷电将军</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main raiden-shogun--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/idle.webp" alt="雷电将军 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waving.webp" alt="雷电将军 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/running-right.webp" alt="雷电将军 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/waiting.webp" alt="雷电将军 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/raiden-shogun--lingxiaotian/webp/review.webp" alt="雷电将军 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/reimu--lingxiaotian">博丽灵梦</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main reimu--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/idle.webp" alt="博丽灵梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waving.webp" alt="博丽灵梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/running-right.webp" alt="博丽灵梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/waiting.webp" alt="博丽灵梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/reimu--lingxiaotian/webp/review.webp" alt="博丽灵梦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/remielle-dan--erlla">蕾米埃尔·丹 / 蕾米</a> · 作者 <a href="https://github.com/Erlla">@Erlla</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main remielle-dan--erlla</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/idle.webp" alt="蕾米埃尔·丹 / 蕾米 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waving.webp" alt="蕾米埃尔·丹 / 蕾米 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/running-right.webp" alt="蕾米埃尔·丹 / 蕾米 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/waiting.webp" alt="蕾米埃尔·丹 / 蕾米 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/remielle-dan--erlla/webp/review.webp" alt="蕾米埃尔·丹 / 蕾米 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/robin--lingxiaotian">知更鸟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main robin--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/idle.webp" alt="知更鸟 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waving.webp" alt="知更鸟 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/running-right.webp" alt="知更鸟 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/waiting.webp" alt="知更鸟 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/robin--lingxiaotian/webp/review.webp" alt="知更鸟 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ruan-mei--lingxiaotian">阮·梅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruan-mei--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/idle.webp" alt="阮·梅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waving.webp" alt="阮·梅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/running-right.webp" alt="阮·梅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/waiting.webp" alt="阮·梅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruan-mei--lingxiaotian/webp/review.webp" alt="阮·梅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/silver-wolf--lingxiaotian">银狼</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main silver-wolf--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/idle.webp" alt="银狼 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waving.webp" alt="银狼 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/running-right.webp" alt="银狼 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/waiting.webp" alt="银狼 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/silver-wolf--lingxiaotian/webp/review.webp" alt="银狼 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/sonetto--chenxin-dlut">十四行诗</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sonetto--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/idle.webp" alt="十四行诗 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waving.webp" alt="十四行诗 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/running-right.webp" alt="十四行诗 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/waiting.webp" alt="十四行诗 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sonetto--chenxin-dlut/webp/review.webp" alt="十四行诗 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/sparkle--lingxiaotian">花火</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sparkle--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/idle.webp" alt="花火 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waving.webp" alt="花火 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/running-right.webp" alt="花火 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/waiting.webp" alt="花火 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sparkle--lingxiaotian/webp/review.webp" alt="花火 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/susuta--xiangzi529">羞羞獭</a> · 作者 <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main susuta--xiangzi529</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/idle.webp" alt="羞羞獭 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waving.webp" alt="羞羞獭 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/running-right.webp" alt="羞羞獭 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/waiting.webp" alt="羞羞獭 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/susuta--xiangzi529/webp/review.webp" alt="羞羞獭 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tingyun--lingxiaotian">停云</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tingyun--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/idle.webp" alt="停云 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waving.webp" alt="停云 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/running-right.webp" alt="停云 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/waiting.webp" alt="停云 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tingyun--lingxiaotian/webp/review.webp" alt="停云 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/vertin--chenxin-dlut">维尔汀</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main vertin--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/idle.webp" alt="维尔汀 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waving.webp" alt="维尔汀 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/running-right.webp" alt="维尔汀 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/waiting.webp" alt="维尔汀 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/vertin--chenxin-dlut/webp/review.webp" alt="维尔汀 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yoimiya--chenxin-dlut">宵宫</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yoimiya--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/idle.webp" alt="宵宫 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waving.webp" alt="宵宫 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/running-right.webp" alt="宵宫 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/waiting.webp" alt="宵宫 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yoimiya--chenxin-dlut/webp/review.webp" alt="宵宫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zani--chenxin-dlut">赞妮</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zani--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/idle.webp" alt="赞妮 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waving.webp" alt="赞妮 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/running-right.webp" alt="赞妮 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/waiting.webp" alt="赞妮 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zani--chenxin-dlut/webp/review.webp" alt="赞妮 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yae-miko--legeling">八重神子</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yae-miko--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/idle.webp" alt="八重神子 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waving.webp" alt="八重神子 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/running-right.webp" alt="八重神子 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/waiting.webp" alt="八重神子 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yae-miko--legeling/webp/review.webp" alt="八重神子 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 作者 <a href="https://github.com/QunBoo">@QunBoo</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dnf-female-ammo--qunboo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/idle.webp" alt="女弹药Q idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waving.webp" alt="女弹药Q waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/running-right.webp" alt="女弹药Q running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/waiting.webp" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dnf-female-ammo--qunboo/webp/review.webp" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/wukong--jorge-cuevas90003">悟空</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wukong--jorge-cuevas90003</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/idle.webp" alt="悟空 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waving.webp" alt="悟空 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/running-right.webp" alt="悟空 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/waiting.webp" alt="悟空 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wukong--jorge-cuevas90003/webp/review.webp" alt="悟空 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · 作者 <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doudizhu-laonongmin--chenyijing131-art</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/idle.webp" alt="斗地主老农民 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waving.webp" alt="斗地主老农民 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/running-right.webp" alt="斗地主老农民 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/waiting.webp" alt="斗地主老农民 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doudizhu-laonongmin--chenyijing131-art/webp/review.webp" alt="斗地主老农民 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/new-covenant-exusiai--chenxin-dlut">新约能天使</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main new-covenant-exusiai--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/idle.webp" alt="新约能天使 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waving.webp" alt="新约能天使 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/running-right.webp" alt="新约能天使 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/waiting.webp" alt="新约能天使 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/new-covenant-exusiai--chenxin-dlut/webp/review.webp" alt="新约能天使 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/regulus-star-antimony--chenxin-dlut">星锑</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main regulus-star-antimony--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/idle.webp" alt="星锑 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waving.webp" alt="星锑 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/running-right.webp" alt="星锑 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/waiting.webp" alt="星锑 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/regulus-star-antimony--chenxin-dlut/webp/review.webp" alt="星锑 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/youmu--ai-generated">魂魄妖梦</a> · 作者 @ai-generated · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main youmu--ai-generated</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/idle.webp" alt="魂魄妖梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waving.webp" alt="魂魄妖梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/running-right.webp" alt="魂魄妖梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/waiting.webp" alt="魂魄妖梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/youmu--ai-generated/webp/review.webp" alt="魂魄妖梦 review" width="120" height="130"></td></tr>
</table>

### 动漫角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zero-two--mingqingmozhao">02</a> · 作者 @mingqingmozhao · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zero-two--mingqingmozhao</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/idle.webp" alt="02 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waving.webp" alt="02 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/running-right.webp" alt="02 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/waiting.webp" alt="02 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zero-two--mingqingmozhao/webp/review.webp" alt="02 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/anya--chenxin-dlut">阿尼亚</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main anya--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/idle.webp" alt="阿尼亚 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waving.webp" alt="阿尼亚 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/running-right.webp" alt="阿尼亚 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/waiting.webp" alt="阿尼亚 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/anya--chenxin-dlut/webp/review.webp" alt="阿尼亚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/asuka--maxg24">明日香</a> · 作者 <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main asuka--maxg24</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/idle.webp" alt="明日香 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waving.webp" alt="明日香 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/running-right.webp" alt="明日香 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/waiting.webp" alt="明日香 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/asuka--maxg24/webp/review.webp" alt="明日香 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chibi-rei-pet--bendy">绫波丽</a> · 作者 @Bendy · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chibi-rei-pet--bendy</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/idle.webp" alt="绫波丽 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waving.webp" alt="绫波丽 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/running-right.webp" alt="绫波丽 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/waiting.webp" alt="绫波丽 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chibi-rei-pet--bendy/webp/review.webp" alt="绫波丽 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chotu--makriman">Chotu</a> · 作者 <a href="https://github.com/makriman">@makriman</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chotu--makriman</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/idle.webp" alt="Chotu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waving.webp" alt="Chotu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/running-right.webp" alt="Chotu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/waiting.webp" alt="Chotu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chotu--makriman/webp/review.webp" alt="Chotu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/conan--chenxin-dlut">江户川柯南</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main conan--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/idle.webp" alt="江户川柯南 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waving.webp" alt="江户川柯南 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/running-right.webp" alt="江户川柯南 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/waiting.webp" alt="江户川柯南 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/conan--chenxin-dlut/webp/review.webp" alt="江户川柯南 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/doraemon--xueshi">哆啦A梦</a> · 作者 <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main doraemon--xueshi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/idle.webp" alt="哆啦A梦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waving.webp" alt="哆啦A梦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/running-right.webp" alt="哆啦A梦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/waiting.webp" alt="哆啦A梦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/doraemon--xueshi/webp/review.webp" alt="哆啦A梦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/elaina--nyakku-shigure">伊蕾娜</a> · 作者 <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main elaina--nyakku-shigure</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/idle.webp" alt="伊蕾娜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waving.webp" alt="伊蕾娜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/running-right.webp" alt="伊蕾娜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/waiting.webp" alt="伊蕾娜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/elaina--nyakku-shigure/webp/review.webp" alt="伊蕾娜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/eren--ash-sw">艾伦</a> · 作者 <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main eren--ash-sw</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/idle.webp" alt="艾伦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waving.webp" alt="艾伦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/running-right.webp" alt="艾伦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/waiting.webp" alt="艾伦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/eren--ash-sw/webp/review.webp" alt="艾伦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/frieren--lingxiaotian">芙莉莲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frieren--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/idle.webp" alt="芙莉莲 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waving.webp" alt="芙莉莲 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/running-right.webp" alt="芙莉莲 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/waiting.webp" alt="芙莉莲 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frieren--lingxiaotian/webp/review.webp" alt="芙莉莲 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gojo--lilokhalikfa">五条悟</a> · 作者 <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gojo--lilokhalikfa</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/idle.webp" alt="五条悟 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waving.webp" alt="五条悟 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/running-right.webp" alt="五条悟 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/waiting.webp" alt="五条悟 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gojo--lilokhalikfa/webp/review.webp" alt="五条悟 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ikaros--icarus-alpha">伊卡洛斯</a> · 作者 <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ikaros--icarus-alpha</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/idle.webp" alt="伊卡洛斯 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waving.webp" alt="伊卡洛斯 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/running-right.webp" alt="伊卡洛斯 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/waiting.webp" alt="伊卡洛斯 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ikaros--icarus-alpha/webp/review.webp" alt="伊卡洛斯 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/isekaijoucho--siiverash">Isekaijoucho</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main isekaijoucho--siiverash</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/idle.webp" alt="Isekaijoucho idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waving.webp" alt="Isekaijoucho waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/running-right.webp" alt="Isekaijoucho running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/waiting.webp" alt="Isekaijoucho waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/isekaijoucho--siiverash/webp/review.webp" alt="Isekaijoucho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/jolyne-cujoh--d2682787206-sys">徐伦</a> · 作者 <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jolyne-cujoh--d2682787206-sys</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/idle.webp" alt="徐伦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waving.webp" alt="徐伦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/running-right.webp" alt="徐伦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/waiting.webp" alt="徐伦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jolyne-cujoh--d2682787206-sys/webp/review.webp" alt="徐伦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kaguya-luna--enclairfarron">辉夜姬</a> · 作者 <a href="https://github.com/enclairfarron">@enclairfarron</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaguya-luna--enclairfarron</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/idle.webp" alt="辉夜姬 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waving.webp" alt="辉夜姬 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/running-right.webp" alt="辉夜姬 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/waiting.webp" alt="辉夜姬 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaguya-luna--enclairfarron/webp/review.webp" alt="辉夜姬 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kaiju-no-8--terry878">怪獸8號</a> · 作者 @TERRY878 · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kaiju-no-8--terry878</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/idle.webp" alt="怪獸8號 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waving.webp" alt="怪獸8號 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/running-right.webp" alt="怪獸8號 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/waiting.webp" alt="怪獸8號 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kaiju-no-8--terry878/webp/review.webp" alt="怪獸8號 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kid--chenxin-dlut">怪盗基德</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/idle.webp" alt="怪盗基德 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waving.webp" alt="怪盗基德 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/running-right.webp" alt="怪盗基德 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/waiting.webp" alt="怪盗基德 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid--chenxin-dlut/webp/review.webp" alt="怪盗基德 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kid-goku--julianhuang">小悟空</a> · 作者 <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kid-goku--julianhuang</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/idle.webp" alt="小悟空 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waving.webp" alt="小悟空 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/running-right.webp" alt="小悟空 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/waiting.webp" alt="小悟空 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kid-goku--julianhuang/webp/review.webp" alt="小悟空 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/levi--emrecb">利威尔</a> · 作者 <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main levi--emrecb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/idle.webp" alt="利威尔 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waving.webp" alt="利威尔 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/running-right.webp" alt="利威尔 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/waiting.webp" alt="利威尔 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/levi--emrecb/webp/review.webp" alt="利威尔 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/luffy-gear-5--jordsshmords1">五档路飞</a> · 作者 <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luffy-gear-5--jordsshmords1</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/idle.webp" alt="五档路飞 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waving.webp" alt="五档路飞 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/running-right.webp" alt="五档路飞 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/waiting.webp" alt="五档路飞 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luffy-gear-5--jordsshmords1/webp/review.webp" alt="五档路飞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mahiro--lingxiaotian">绪山真寻</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mahiro--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/idle.webp" alt="绪山真寻 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waving.webp" alt="绪山真寻 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/running-right.webp" alt="绪山真寻 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/waiting.webp" alt="绪山真寻 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mahiro--lingxiaotian/webp/review.webp" alt="绪山真寻 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/makima-coat--yuyuabc1">玛奇玛（外套）</a> · 作者 <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makima-coat--yuyuabc1</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/idle.webp" alt="玛奇玛（外套） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waving.webp" alt="玛奇玛（外套） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/running-right.webp" alt="玛奇玛（外套） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/waiting.webp" alt="玛奇玛（外套） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makima-coat--yuyuabc1/webp/review.webp" alt="玛奇玛（外套） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/makimamini--1sh1ro">玛奇玛</a> · 作者 @1sh1ro · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makimamini--1sh1ro</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/idle.webp" alt="玛奇玛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waving.webp" alt="玛奇玛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/running-right.webp" alt="玛奇玛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/waiting.webp" alt="玛奇玛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makimamini--1sh1ro/webp/review.webp" alt="玛奇玛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/makisekurisu--m1gr4ine">牧濑红莉栖</a> · 作者 @m1gr4ine · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main makisekurisu--m1gr4ine</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/idle.webp" alt="牧濑红莉栖 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waving.webp" alt="牧濑红莉栖 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/running-right.webp" alt="牧濑红莉栖 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/waiting.webp" alt="牧濑红莉栖 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/makisekurisu--m1gr4ine/webp/review.webp" alt="牧濑红莉栖 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mihari--hyoni1129">Mihari</a> · 作者 <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mihari--hyoni1129</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/idle.webp" alt="Mihari idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waving.webp" alt="Mihari waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/running-right.webp" alt="Mihari running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/waiting.webp" alt="Mihari waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mihari--hyoni1129/webp/review.webp" alt="Mihari review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mikoto--lingxiaotian">御坂美琴</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mikoto--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/idle.webp" alt="御坂美琴 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waving.webp" alt="御坂美琴 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/running-right.webp" alt="御坂美琴 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/waiting.webp" alt="御坂美琴 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mikoto--lingxiaotian/webp/review.webp" alt="御坂美琴 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miku--lingxiaotian">初音未来</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miku--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/idle.webp" alt="初音未来 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waving.webp" alt="初音未来 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/running-right.webp" alt="初音未来 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/waiting.webp" alt="初音未来 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miku--lingxiaotian/webp/review.webp" alt="初音未来 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/misaka-network--ldl1234">御坂网络</a> · 作者 <a href="https://github.com/ldl1234">@ldl1234</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main misaka-network--ldl1234</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/idle.webp" alt="御坂网络 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waving.webp" alt="御坂网络 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/running-right.webp" alt="御坂网络 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/waiting.webp" alt="御坂网络 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/misaka-network--ldl1234/webp/review.webp" alt="御坂网络 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/nimbus--soraberu">筋斗云悟空</a> · 作者 <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nimbus--soraberu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/idle.webp" alt="筋斗云悟空 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waving.webp" alt="筋斗云悟空 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/running-right.webp" alt="筋斗云悟空 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/waiting.webp" alt="筋斗云悟空 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nimbus--soraberu/webp/review.webp" alt="筋斗云悟空 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/rem--l1">蕾姆</a> · 作者 <a href="https://codex-pets.net/users/l1">@l1</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rem--l1</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/idle.webp" alt="蕾姆 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waving.webp" alt="蕾姆 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/running-right.webp" alt="蕾姆 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/waiting.webp" alt="蕾姆 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rem--l1/webp/review.webp" alt="蕾姆 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/rinami--siiverash">Rinami Himesaki</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rinami--siiverash</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/idle.webp" alt="Rinami Himesaki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waving.webp" alt="Rinami Himesaki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/running-right.webp" alt="Rinami Himesaki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/waiting.webp" alt="Rinami Himesaki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rinami--siiverash/webp/review.webp" alt="Rinami Himesaki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/roxy-pixel--gravity">Roxy Pixel</a> · 作者 @gravity · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main roxy-pixel--gravity</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/idle.webp" alt="Roxy Pixel idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waving.webp" alt="Roxy Pixel waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/running-right.webp" alt="Roxy Pixel running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/waiting.webp" alt="Roxy Pixel waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/roxy-pixel--gravity/webp/review.webp" alt="Roxy Pixel review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/saber--petdex-zhenyou-ling">阿尔托莉雅</a> · 作者 @真宵 绫. · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saber--petdex-zhenyou-ling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/idle.webp" alt="阿尔托莉雅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waving.webp" alt="阿尔托莉雅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/running-right.webp" alt="阿尔托莉雅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/waiting.webp" alt="阿尔托莉雅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saber--petdex-zhenyou-ling/webp/review.webp" alt="阿尔托莉雅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/sakamoto--zpzjzj">阪本</a> · 作者 <a href="https://github.com/zpzjzj">@zpzjzj</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sakamoto--zpzjzj</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/idle.webp" alt="阪本 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/waving.webp" alt="阪本 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/running-right.webp" alt="阪本 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/waiting.webp" alt="阪本 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sakamoto--zpzjzj/webp/review.webp" alt="阪本 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gintoki-pixel--yuu-m">坂田银时</a> · 作者 @Yuu M. · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gintoki-pixel--yuu-m</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/idle.webp" alt="坂田银时 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waving.webp" alt="坂田银时 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/running-right.webp" alt="坂田银时 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/waiting.webp" alt="坂田银时 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gintoki-pixel--yuu-m/webp/review.webp" alt="坂田银时 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/shinchan--chenxin-dlut">野原新之助</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinchan--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/idle.webp" alt="野原新之助 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waving.webp" alt="野原新之助 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/running-right.webp" alt="野原新之助 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/waiting.webp" alt="野原新之助 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinchan--chenxin-dlut/webp/review.webp" alt="野原新之助 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/takamatsu-tomori--a1wace-dev">高松灯</a> · 作者 @A1wace-dev · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main takamatsu-tomori--a1wace-dev</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/idle.webp" alt="高松灯 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waving.webp" alt="高松灯 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/running-right.webp" alt="高松灯 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/waiting.webp" alt="高松灯 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/takamatsu-tomori--a1wace-dev/webp/review.webp" alt="高松灯 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/togawa-sakiko--enclairfarron">丰川祥子</a> · 作者 <a href="https://github.com/enclairfarron">@enclairfarron</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main togawa-sakiko--enclairfarron</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/idle.webp" alt="丰川祥子 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waving.webp" alt="丰川祥子 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/running-right.webp" alt="丰川祥子 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/waiting.webp" alt="丰川祥子 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/togawa-sakiko--enclairfarron/webp/review.webp" alt="丰川祥子 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/toyama-kasumi--lsmd23">户山香澄</a> · 作者 <a href="https://github.com/lsmd23">@lsmd23</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main toyama-kasumi--lsmd23</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/idle.webp" alt="户山香澄 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waving.webp" alt="户山香澄 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/running-right.webp" alt="户山香澄 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/waiting.webp" alt="户山香澄 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/toyama-kasumi--lsmd23/webp/review.webp" alt="户山香澄 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/violet--lazenca">薇尔莉特</a> · 作者 <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main violet--lazenca</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/idle.webp" alt="薇尔莉特 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waving.webp" alt="薇尔莉特 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/running-right.webp" alt="薇尔莉特 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/waiting.webp" alt="薇尔莉特 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/violet--lazenca/webp/review.webp" alt="薇尔莉特 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/wakaba-mutsumi--carambola">若叶睦</a> · 作者 @Carambola · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wakaba-mutsumi--carambola</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/idle.webp" alt="若叶睦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waving.webp" alt="若叶睦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/running-right.webp" alt="若叶睦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/waiting.webp" alt="若叶睦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wakaba-mutsumi--carambola/webp/review.webp" alt="若叶睦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/inosuke-hashibira--wangfan002">嘴平伊之助</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main inosuke-hashibira--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/idle.webp" alt="嘴平伊之助 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waving.webp" alt="嘴平伊之助 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/running-right.webp" alt="嘴平伊之助 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/waiting.webp" alt="嘴平伊之助 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/inosuke-hashibira--wangfan002/webp/review.webp" alt="嘴平伊之助 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/nangong-wan--bpup">南宫婉</a> · 作者 <a href="https://github.com/bpup">@bpup</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nangong-wan--bpup</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/idle.webp" alt="南宫婉 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waving.webp" alt="南宫婉 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/running-right.webp" alt="南宫婉 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/waiting.webp" alt="南宫婉 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nangong-wan--bpup/webp/review.webp" alt="南宫婉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zenitsu-agatsuma--wangfan002">我妻善逸</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zenitsu-agatsuma--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/idle.webp" alt="我妻善逸 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waving.webp" alt="我妻善逸 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/running-right.webp" alt="我妻善逸 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/waiting.webp" alt="我妻善逸 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zenitsu-agatsuma--wangfan002/webp/review.webp" alt="我妻善逸 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/giyu-tomioka--wangfan002">富冈义勇</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main giyu-tomioka--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/idle.webp" alt="富冈义勇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waving.webp" alt="富冈义勇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/running-right.webp" alt="富冈义勇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/waiting.webp" alt="富冈义勇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/giyu-tomioka--wangfan002/webp/review.webp" alt="富冈义勇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/muichiro-tokito--wangfan002">时透无一郎</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main muichiro-tokito--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/idle.webp" alt="时透无一郎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waving.webp" alt="时透无一郎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/running-right.webp" alt="时透无一郎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/waiting.webp" alt="时透无一郎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/muichiro-tokito--wangfan002/webp/review.webp" alt="时透无一郎 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tanjiro-kamado--wangfan002">灶门炭治郎</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tanjiro-kamado--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/idle.webp" alt="灶门炭治郎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waving.webp" alt="灶门炭治郎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/running-right.webp" alt="灶门炭治郎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/waiting.webp" alt="灶门炭治郎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tanjiro-kamado--wangfan002/webp/review.webp" alt="灶门炭治郎 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/nezuko-kamado--wangfan002">灶门祢豆子</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main nezuko-kamado--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/idle.webp" alt="灶门祢豆子 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waving.webp" alt="灶门祢豆子 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/running-right.webp" alt="灶门祢豆子 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/waiting.webp" alt="灶门祢豆子 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/nezuko-kamado--wangfan002/webp/review.webp" alt="灶门祢豆子 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/fujiwara-chika--klmklmnb">藤原千花</a> · 作者 <a href="https://github.com/klmklmnb">@klmklmnb</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fujiwara-chika--klmklmnb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/idle.webp" alt="藤原千花 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waving.webp" alt="藤原千花 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/running-right.webp" alt="藤原千花 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/waiting.webp" alt="藤原千花 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fujiwara-chika--klmklmnb/webp/review.webp" alt="藤原千花 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/shinobu-kocho--wangfan002">蝴蝶忍</a> · 作者 @wangfan002 · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shinobu-kocho--wangfan002</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/idle.webp" alt="蝴蝶忍 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waving.webp" alt="蝴蝶忍 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/running-right.webp" alt="蝴蝶忍 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/waiting.webp" alt="蝴蝶忍 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shinobu-kocho--wangfan002/webp/review.webp" alt="蝴蝶忍 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bocchi--lingxiaotian">后藤独</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bocchi--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/idle.webp" alt="后藤独 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waving.webp" alt="后藤独 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/running-right.webp" alt="后藤独 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/waiting.webp" alt="后藤独 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bocchi--lingxiaotian/webp/review.webp" alt="后藤独 review" width="120" height="130"></td></tr>
</table>

### 原创角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/aiko--chenxin-dlut">爱子</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aiko--chenxin-dlut</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/idle.webp" alt="爱子 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waving.webp" alt="爱子 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/running-right.webp" alt="爱子 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/waiting.webp" alt="爱子 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aiko--chenxin-dlut/webp/review.webp" alt="爱子 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chud-codex--jorge-cuevas90003</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/idle.webp" alt="Chud Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waving.webp" alt="Chud Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/running-right.webp" alt="Chud Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/waiting.webp" alt="Chud Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chud-codex--jorge-cuevas90003/webp/review.webp" alt="Chud Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diana--am">Diana</a> · 作者 @am · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diana--am</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/diana--am/webp/idle.webp" alt="Diana idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waving.webp" alt="Diana waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/running-right.webp" alt="Diana running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/waiting.webp" alt="Diana waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diana--am/webp/review.webp" alt="Diana review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hajimi--zeyuwang1999">Hajimi</a> · 作者 <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hajimi--zeyuwang1999</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/idle.webp" alt="Hajimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waving.webp" alt="Hajimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/running-right.webp" alt="Hajimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/waiting.webp" alt="Hajimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hajimi--zeyuwang1999/webp/review.webp" alt="Hajimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hamo--haipengzzz">Hamo</a> · 作者 <a href="https://github.com/haipengzzz">@haipengzzz</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hamo--haipengzzz</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/idle.webp" alt="Hamo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waving.webp" alt="Hamo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/running-right.webp" alt="Hamo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/waiting.webp" alt="Hamo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hamo--haipengzzz/webp/review.webp" alt="Hamo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hana2--initiatione">Hana2</a> · 作者 <a href="https://github.com/initiatione">@initiatione</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hana2--initiatione</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/idle.webp" alt="Hana2 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waving.webp" alt="Hana2 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/running-right.webp" alt="Hana2 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/waiting.webp" alt="Hana2 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hana2--initiatione/webp/review.webp" alt="Hana2 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/iris--yau-427">Iris</a> · 作者 <a href="https://github.com/Yau-427">@Yau-427</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main iris--yau-427</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/idle.webp" alt="Iris idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waving.webp" alt="Iris waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/running-right.webp" alt="Iris running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/waiting.webp" alt="Iris waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/iris--yau-427/webp/review.webp" alt="Iris review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/jesse-the-fox--itjesse">阿博</a> · 作者 <a href="https://github.com/ITJesse">@ITJesse</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jesse-the-fox--itjesse</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/idle.webp" alt="阿博 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waving.webp" alt="阿博 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/running-right.webp" alt="阿博 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/waiting.webp" alt="阿博 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jesse-the-fox--itjesse/webp/review.webp" alt="阿博 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/joker--oytyo">Joker</a> · 作者 @oytyo · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main joker--oytyo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/idle.webp" alt="Joker idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waving.webp" alt="Joker waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/running-right.webp" alt="Joker running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/waiting.webp" alt="Joker waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/joker--oytyo/webp/review.webp" alt="Joker review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/linnea--nyakku-shigure">Linnea</a> · 作者 @nyakku-shigure · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main linnea--nyakku-shigure</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/idle.webp" alt="Linnea idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waving.webp" alt="Linnea waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/running-right.webp" alt="Linnea running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/waiting.webp" alt="Linnea waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/linnea--nyakku-shigure/webp/review.webp" alt="Linnea review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/lumei--dagwbl">噜妹</a> · 作者 <a href="https://github.com/Dagwbl">@Dagwbl</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lumei--dagwbl</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/idle.webp" alt="噜妹 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waving.webp" alt="噜妹 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/running-right.webp" alt="噜妹 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/waiting.webp" alt="噜妹 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lumei--dagwbl/webp/review.webp" alt="噜妹 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mika--rotl24">Mika</a> · 作者 <a href="https://github.com/ROTl24">@ROTl24</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mika--rotl24</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/idle.webp" alt="Mika idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waving.webp" alt="Mika waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/running-right.webp" alt="Mika running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/waiting.webp" alt="Mika waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mika--rotl24/webp/review.webp" alt="Mika review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/minty--somnusochi">Minty</a> · 作者 <a href="https://github.com/Somnusochi">@Somnusochi</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main minty--somnusochi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/idle.webp" alt="Minty idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waving.webp" alt="Minty waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/running-right.webp" alt="Minty running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/waiting.webp" alt="Minty waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/minty--somnusochi/webp/review.webp" alt="Minty review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · 作者 <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ruruka--ltmcliao-cmyk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/idle.webp" alt="RuRuKa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waving.webp" alt="RuRuKa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/running-right.webp" alt="RuRuKa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/waiting.webp" alt="RuRuKa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ruruka--ltmcliao-cmyk/webp/review.webp" alt="RuRuKa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/shian-helper--mistyshen">Shian</a> · 作者 <a href="https://github.com/mistyShen">@mistyShen</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main shian-helper--mistyshen</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/idle.webp" alt="Shian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waving.webp" alt="Shian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/running-right.webp" alt="Shian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/waiting.webp" alt="Shian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/shian-helper--mistyshen/webp/review.webp" alt="Shian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main warden-codex--jorge-cuevas90003</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/idle.webp" alt="Warden Codex idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waving.webp" alt="Warden Codex waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/running-right.webp" alt="Warden Codex running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/waiting.webp" alt="Warden Codex waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/warden-codex--jorge-cuevas90003/webp/review.webp" alt="Warden Codex review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yier--gbn666">Yi Er</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yier--gbn666</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/idle.webp" alt="Yi Er idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waving.webp" alt="Yi Er waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/running-right.webp" alt="Yi Er running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/waiting.webp" alt="Yi Er waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yier--gbn666/webp/review.webp" alt="Yi Er review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yume-boundary--andy-meow">Yume</a> · 作者 @andy-meow · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yume-boundary--andy-meow</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/idle.webp" alt="Yume idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waving.webp" alt="Yume waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/running-right.webp" alt="Yume running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/waiting.webp" alt="Yume waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yume-boundary--andy-meow/webp/review.webp" alt="Yume review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yuzubou--keseras34938976">Yuzubou</a> · 作者 <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuzubou--keseras34938976</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/idle.webp" alt="Yuzubou idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waving.webp" alt="Yuzubou waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/running-right.webp" alt="Yuzubou running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/waiting.webp" alt="Yuzubou waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuzubou--keseras34938976/webp/review.webp" alt="Yuzubou review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gudong--rank">咕咚</a> · 作者 @Rank · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gudong--rank</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/idle.webp" alt="咕咚 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waving.webp" alt="咕咚 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/running-right.webp" alt="咕咚 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/waiting.webp" alt="咕咚 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gudong--rank/webp/review.webp" alt="咕咚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/liubao--killyer">榴宝</a> · 作者 @killyer · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main liubao--killyer</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/idle.webp" alt="榴宝 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waving.webp" alt="榴宝 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/running-right.webp" alt="榴宝 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/waiting.webp" alt="榴宝 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/liubao--killyer/webp/review.webp" alt="榴宝 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/feibi--vanfff">菲比</a> · 作者 @vanfff · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main feibi--vanfff</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/idle.webp" alt="菲比 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waving.webp" alt="菲比 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/running-right.webp" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/waiting.webp" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/feibi--vanfff/webp/review.webp" alt="菲比 review" width="120" height="130"></td></tr>
</table>

### 吉祥物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/aemeath-mini--cunuo">Aemeath Mini</a> · 作者 <a href="https://github.com/cuNuo">@cuNuo</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main aemeath-mini--cunuo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/idle.webp" alt="Aemeath Mini idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waving.webp" alt="Aemeath Mini waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/running-right.webp" alt="Aemeath Mini running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/waiting.webp" alt="Aemeath Mini waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/aemeath-mini--cunuo/webp/review.webp" alt="Aemeath Mini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/apu--xchangee">Apu</a> · 作者 <a href="https://github.com/xchangee">@xchangee</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main apu--xchangee</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/idle.webp" alt="Apu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waving.webp" alt="Apu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/running-right.webp" alt="Apu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/waiting.webp" alt="Apu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/apu--xchangee/webp/review.webp" alt="Apu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/claude--xiangking">Claude</a> · 作者 <a href="https://github.com/xiangking">@xiangking</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main claude--xiangking</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/idle.webp" alt="Claude idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waving.webp" alt="Claude waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/running-right.webp" alt="Claude running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/waiting.webp" alt="Claude waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/claude--xiangking/webp/review.webp" alt="Claude review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/twinkle-twinkle--twinkletwinkle">Dashun's Twinkle Twinkle</a> · 作者 @twinkletwinkle · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twinkle-twinkle--twinkletwinkle</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/idle.webp" alt="Dashun's Twinkle Twinkle idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waving.webp" alt="Dashun's Twinkle Twinkle waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/running-right.webp" alt="Dashun's Twinkle Twinkle running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/waiting.webp" alt="Dashun's Twinkle Twinkle waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twinkle-twinkle--twinkletwinkle/webp/review.webp" alt="Dashun's Twinkle Twinkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diaoyi-baobao--d1a0y1bb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/idle.webp" alt="Diaoyi Baobao idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waving.webp" alt="Diaoyi Baobao waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/running-right.webp" alt="Diaoyi Baobao running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/waiting.webp" alt="Diaoyi Baobao waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diaoyi-baobao--d1a0y1bb/webp/review.webp" alt="Diaoyi Baobao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gpt-muse--opask">GPT-muse</a> · 作者 @opask · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main gpt-muse--opask</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/idle.webp" alt="GPT-muse idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waving.webp" alt="GPT-muse waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/running-right.webp" alt="GPT-muse running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/waiting.webp" alt="GPT-muse waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/gpt-muse--opask/webp/review.webp" alt="GPT-muse review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/lulu--yogazz">Lulu</a> · 作者 <a href="https://github.com/YoGazz">@YoGazz</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lulu--yogazz</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/idle.webp" alt="Lulu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waving.webp" alt="Lulu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/running-right.webp" alt="Lulu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/waiting.webp" alt="Lulu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lulu--yogazz/webp/review.webp" alt="Lulu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/saki--rookie-09">Saki</a> · 作者 <a href="https://github.com/rookie-09">@rookie-09</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main saki--rookie-09</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/idle.webp" alt="Saki idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waving.webp" alt="Saki waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/running-right.webp" alt="Saki running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/waiting.webp" alt="Saki waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/saki--rookie-09/webp/review.webp" alt="Saki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/wally--wally025">Wally</a> · 作者 <a href="https://github.com/wally025">@wally025</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wally--wally025</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/idle.webp" alt="Wally idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waving.webp" alt="Wally waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/running-right.webp" alt="Wally running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/waiting.webp" alt="Wally waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wally--wally025/webp/review.webp" alt="Wally review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zhengyin--noonwake">正音</a> · 作者 <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · 吉祥物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zhengyin--noonwake</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/idle.webp" alt="正音 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waving.webp" alt="正音 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/running-right.webp" alt="正音 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/waiting.webp" alt="正音 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zhengyin--noonwake/webp/review.webp" alt="正音 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/happynailong--aquaxyy">大笑奶龙</a> · 作者 @aquaxyy · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main happynailong--aquaxyy</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/idle.webp" alt="大笑奶龙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waving.webp" alt="大笑奶龙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/running-right.webp" alt="大笑奶龙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/waiting.webp" alt="大笑奶龙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/happynailong--aquaxyy/webp/review.webp" alt="大笑奶龙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bubu-codebrew-bear--xxhh0822">布布</a> · 作者 <a href="https://github.com/xxhh0822">@xxhh0822</a> · 吉祥物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu-codebrew-bear--xxhh0822</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/idle.webp" alt="布布 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waving.webp" alt="布布 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/running-right.webp" alt="布布 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/waiting.webp" alt="布布 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu-codebrew-bear--xxhh0822/webp/review.webp" alt="布布 review" width="120" height="130"></td></tr>
</table>

### 动物伙伴

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/becky--natewanggg">Becky</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main becky--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/idle.webp" alt="Becky idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waving.webp" alt="Becky waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/running-right.webp" alt="Becky running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/waiting.webp" alt="Becky waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/becky--natewanggg/webp/review.webp" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bubu--gbn666">Bubu</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bubu--gbn666</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/idle.webp" alt="Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waving.webp" alt="Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/running-right.webp" alt="Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/waiting.webp" alt="Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bubu--gbn666/webp/review.webp" alt="Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · 作者 <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main corgi-companion--cxian0928-afk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/idle.webp" alt="Corgi Companion idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waving.webp" alt="Corgi Companion waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/running-right.webp" alt="Corgi Companion running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/waiting.webp" alt="Corgi Companion waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/corgi-companion--cxian0928-afk/webp/review.webp" alt="Corgi Companion review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/desk-otter--zihualiu1997">Desk Otter</a> · 作者 <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main desk-otter--zihualiu1997</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/idle.webp" alt="Desk Otter idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waving.webp" alt="Desk Otter waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/running-right.webp" alt="Desk Otter running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/waiting.webp" alt="Desk Otter waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/desk-otter--zihualiu1997/webp/review.webp" alt="Desk Otter review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diandian--lllucasxu">Diandian</a> · 作者 <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main diandian--lllucasxu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/idle.webp" alt="Diandian idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waving.webp" alt="Diandian waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/running-right.webp" alt="Diandian running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/waiting.webp" alt="Diandian waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/diandian--lllucasxu/webp/review.webp" alt="Diandian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dudu-bubu--clembuilds">Dudu & Bubu</a> · 作者 @clembuilds · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dudu-bubu--clembuilds</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/idle.webp" alt="Dudu & Bubu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waving.webp" alt="Dudu & Bubu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/running-right.webp" alt="Dudu & Bubu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/waiting.webp" alt="Dudu & Bubu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dudu-bubu--clembuilds/webp/review.webp" alt="Dudu & Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ella-wave--sehjk">Ella Wave</a> · 作者 @sehjk · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main ella-wave--sehjk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/idle.webp" alt="Ella Wave idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waving.webp" alt="Ella Wave waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/running-right.webp" alt="Ella Wave running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/waiting.webp" alt="Ella Wave waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/ella-wave--sehjk/webp/review.webp" alt="Ella Wave review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/fleta--natewanggg">Fleta</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fleta--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/idle.webp" alt="Fleta idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waving.webp" alt="Fleta waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/running-right.webp" alt="Fleta running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/waiting.webp" alt="Fleta waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fleta--natewanggg/webp/review.webp" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/frankie--aygunvarol">Frankie</a> · 作者 <a href="https://github.com/AygunVarol">@AygunVarol</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main frankie--aygunvarol</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/idle.webp" alt="Frankie idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waving.webp" alt="Frankie waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/running-right.webp" alt="Frankie running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/waiting.webp" alt="Frankie waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/frankie--aygunvarol/webp/review.webp" alt="Frankie review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/jiji--yena">Jiji</a> · 作者 @yena · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jiji--yena</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/idle.webp" alt="Jiji idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waving.webp" alt="Jiji waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/running-right.webp" alt="Jiji running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/waiting.webp" alt="Jiji waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jiji--yena/webp/review.webp" alt="Jiji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kiko--untko">Kiko</a> · 作者 <a href="https://github.com/untko">@untko</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kiko--untko</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/idle.webp" alt="Kiko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waving.webp" alt="Kiko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/running-right.webp" alt="Kiko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/waiting.webp" alt="Kiko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kiko--untko/webp/review.webp" alt="Kiko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kimoju--andiac">Kimoju</a> · 作者 @andiac · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kimoju--andiac</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/idle.webp" alt="Kimoju idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waving.webp" alt="Kimoju waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/running-right.webp" alt="Kimoju running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/waiting.webp" alt="Kimoju waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kimoju--andiac/webp/review.webp" alt="Kimoju review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/lil-swole--gg0805">Lil Swole</a> · 作者 <a href="https://github.com/gg0805">@gg0805</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main lil-swole--gg0805</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/idle.webp" alt="Lil Swole idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waving.webp" alt="Lil Swole waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/running-right.webp" alt="Lil Swole running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/waiting.webp" alt="Lil Swole waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/lil-swole--gg0805/webp/review.webp" alt="Lil Swole review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/little-sheep--mingdong">Little Sheep</a> · 作者 @MingDong · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main little-sheep--mingdong</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/idle.webp" alt="Little Sheep idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waving.webp" alt="Little Sheep waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/running-right.webp" alt="Little Sheep running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/waiting.webp" alt="Little Sheep waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/little-sheep--mingdong/webp/review.webp" alt="Little Sheep review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mai--dwdestiny">Mai</a> · 作者 <a href="https://github.com/DwDestiny">@DwDestiny</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mai--dwdestiny</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/idle.webp" alt="Mai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waving.webp" alt="Mai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/running-right.webp" alt="Mai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/waiting.webp" alt="Mai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mai--dwdestiny/webp/review.webp" alt="Mai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mellow-duck--sally-entr">Mellow Duck</a> · 作者 @sally-entr · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mellow-duck--sally-entr</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/idle.webp" alt="Mellow Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waving.webp" alt="Mellow Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/running-right.webp" alt="Mellow Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/waiting.webp" alt="Mellow Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mellow-duck--sally-entr/webp/review.webp" alt="Mellow Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mimi--spacebody">Mimi</a> · 作者 <a href="https://github.com/Spacebody">@Spacebody</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main mimi--spacebody</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/idle.webp" alt="Mimi idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waving.webp" alt="Mimi waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/running-right.webp" alt="Mimi running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/waiting.webp" alt="Mimi waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/mimi--spacebody/webp/review.webp" alt="Mimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/moomew-coder-cat--ping">MooMew Coder</a> · 作者 @ping · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main moomew-coder-cat--ping</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/idle.webp" alt="MooMew Coder idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waving.webp" alt="MooMew Coder waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/running-right.webp" alt="MooMew Coder running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/waiting.webp" alt="MooMew Coder waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/moomew-coder-cat--ping/webp/review.webp" alt="MooMew Coder review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/panda--jason-bai">Panda</a> · 作者 <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main panda--jason-bai</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/idle.webp" alt="Panda idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waving.webp" alt="Panda waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/running-right.webp" alt="Panda running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/waiting.webp" alt="Panda waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/panda--jason-bai/webp/review.webp" alt="Panda review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · 作者 <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main pixel-duck--flamurmaliqi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/idle.webp" alt="Pixel Duck idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waving.webp" alt="Pixel Duck waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/running-right.webp" alt="Pixel Duck running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/waiting.webp" alt="Pixel Duck waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/pixel-duck--flamurmaliqi/webp/review.webp" alt="Pixel Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/rook--klubbyte">Rook</a> · 作者 @klubbyte · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main rook--klubbyte</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/idle.webp" alt="Rook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waving.webp" alt="Rook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/running-right.webp" alt="Rook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/waiting.webp" alt="Rook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/rook--klubbyte/webp/review.webp" alt="Rook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miu-meo--lemon-z">月薪喵</a> · 作者 @lemon-z · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main miu-meo--lemon-z</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/idle.webp" alt="月薪喵 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waving.webp" alt="月薪喵 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/running-right.webp" alt="月薪喵 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/waiting.webp" alt="月薪喵 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/miu-meo--lemon-z/webp/review.webp" alt="月薪喵 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/salary-cat--zuochunjie">月薪喵</a> · 作者 <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main salary-cat--zuochunjie</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/idle.webp" alt="月薪喵 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waving.webp" alt="月薪喵 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/running-right.webp" alt="月薪喵 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/waiting.webp" alt="月薪喵 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/salary-cat--zuochunjie/webp/review.webp" alt="月薪喵 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/sunny-retriever--legeling">暖阳金毛</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main sunny-retriever--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/idle.webp" alt="暖阳金毛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waving.webp" alt="暖阳金毛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/running-right.webp" alt="暖阳金毛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/waiting.webp" alt="暖阳金毛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/sunny-retriever--legeling/webp/review.webp" alt="暖阳金毛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/teddy--danieloleary">Teddy</a> · 作者 <a href="https://github.com/danieloleary">@danieloleary</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main teddy--danieloleary</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/idle.webp" alt="Teddy idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waving.webp" alt="Teddy waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/running-right.webp" alt="Teddy running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/waiting.webp" alt="Teddy waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/teddy--danieloleary/webp/review.webp" alt="Teddy review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tian-hua-hua--d1a0y1bb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/idle.webp" alt="Tian Hua Hua idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waving.webp" alt="Tian Hua Hua waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/running-right.webp" alt="Tian Hua Hua running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/waiting.webp" alt="Tian Hua Hua waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tian-hua-hua--d1a0y1bb/webp/review.webp" alt="Tian Hua Hua review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/usachi--jack">乌萨奇</a> · 作者 @jack · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main usachi--jack</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/idle.webp" alt="乌萨奇 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waving.webp" alt="乌萨奇 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/running-right.webp" alt="乌萨奇 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/waiting.webp" alt="乌萨奇 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/usachi--jack/webp/review.webp" alt="乌萨奇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · 作者 @1wphantom · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main dai-dai-nai-you--1wphantom</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/idle.webp" alt="呆呆奶油 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waving.webp" alt="呆呆奶油 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/running-right.webp" alt="呆呆奶油 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/waiting.webp" alt="呆呆奶油 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/dai-dai-nai-you--1wphantom/webp/review.webp" alt="呆呆奶油 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tuantuan--jbbom">团团</a> · 作者 <a href="https://github.com/JbBom">@JbBom</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tuantuan--jbbom</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/idle.webp" alt="团团 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waving.webp" alt="团团 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/running-right.webp" alt="团团 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/waiting.webp" alt="团团 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tuantuan--jbbom/webp/review.webp" alt="团团 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/duodong--froggie">多栋</a> · 作者 @froggie · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main duodong--froggie</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/idle.webp" alt="多栋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waving.webp" alt="多栋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/running-right.webp" alt="多栋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/waiting.webp" alt="多栋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/duodong--froggie/webp/review.webp" alt="多栋 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/naiwa--sandytruant">奶蛙</a> · 作者 <a href="https://github.com/sandytruant">@sandytruant</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main naiwa--sandytruant</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/idle.webp" alt="奶蛙 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waving.webp" alt="奶蛙 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/running-right.webp" alt="奶蛙 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/waiting.webp" alt="奶蛙 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/naiwa--sandytruant/webp/review.webp" alt="奶蛙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xiaoba-cat--jack">小八猫</a> · 作者 @jack · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaoba-cat--jack</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/idle.webp" alt="小八猫 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waving.webp" alt="小八猫 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/running-right.webp" alt="小八猫 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/waiting.webp" alt="小八猫 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaoba-cat--jack/webp/review.webp" alt="小八猫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xiaomai--brian-3">小麦 XiaoMai</a> · 作者 @brian-3 · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xiaomai--brian-3</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/idle.webp" alt="小麦 XiaoMai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waving.webp" alt="小麦 XiaoMai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/running-right.webp" alt="小麦 XiaoMai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/waiting.webp" alt="小麦 XiaoMai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xiaomai--brian-3/webp/review.webp" alt="小麦 XiaoMai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/koukou-penguin--hoody">扣扣企鹅</a> · 作者 @hoody · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main koukou-penguin--hoody</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/idle.webp" alt="扣扣企鹅 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waving.webp" alt="扣扣企鹅 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/running-right.webp" alt="扣扣企鹅 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/waiting.webp" alt="扣扣企鹅 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/koukou-penguin--hoody/webp/review.webp" alt="扣扣企鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/capybara-lulu--jiushu">水豚噜噜</a> · 作者 @jiushu · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main capybara-lulu--jiushu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/idle.webp" alt="水豚噜噜 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waving.webp" alt="水豚噜噜 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/running-right.webp" alt="水豚噜噜 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/waiting.webp" alt="水豚噜噜 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/capybara-lulu--jiushu/webp/review.webp" alt="水豚噜噜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/niumou--jarvis-2">牛哞</a> · 作者 @jarvis-2 · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main niumou--jarvis-2</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/idle.webp" alt="牛哞 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waving.webp" alt="牛哞 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/running-right.webp" alt="牛哞 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/waiting.webp" alt="牛哞 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/niumou--jarvis-2/webp/review.webp" alt="牛哞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zichao-xiong--z-kzhang">自嘲熊</a> · 作者 @z-kzhang · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main zichao-xiong--z-kzhang</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/idle.webp" alt="自嘲熊 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waving.webp" alt="自嘲熊 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/running-right.webp" alt="自嘲熊 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/waiting.webp" alt="自嘲熊 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/zichao-xiong--z-kzhang/webp/review.webp" alt="自嘲熊 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/jinmao--legeling">金毛</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main jinmao--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/idle.webp" alt="金毛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waving.webp" alt="金毛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/running-right.webp" alt="金毛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/waiting.webp" alt="金毛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/jinmao--legeling/webp/review.webp" alt="金毛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/wucanrou--ch">金渐层（午餐肉）</a> · 作者 <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main wucanrou--ch</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/idle.webp" alt="金渐层（午餐肉） idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waving.webp" alt="金渐层（午餐肉） waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/running-right.webp" alt="金渐层（午餐肉） running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/waiting.webp" alt="金渐层（午餐肉） waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/wucanrou--ch/webp/review.webp" alt="金渐层（午餐肉） review" width="120" height="130"></td></tr>
</table>

### 幻想生物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/behemoth--kajdrak2">Behemoth</a> · 作者 <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · 幻想生物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main behemoth--kajdrak2</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/idle.webp" alt="Behemoth idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waving.webp" alt="Behemoth waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/running-right.webp" alt="Behemoth running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/waiting.webp" alt="Behemoth waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/behemoth--kajdrak2/webp/review.webp" alt="Behemoth review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/goblin--rkwap">Goblin</a> · 作者 @rkwap · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main goblin--rkwap</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/idle.webp" alt="Goblin idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waving.webp" alt="Goblin waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/running-right.webp" alt="Goblin running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/waiting.webp" alt="Goblin waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/goblin--rkwap/webp/review.webp" alt="Goblin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/luna-angel-cat--neve">luna_angel cat</a> · 作者 @neve · 幻想生物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main luna-angel-cat--neve</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/idle.webp" alt="luna_angel cat idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waving.webp" alt="luna_angel cat waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/running-right.webp" alt="luna_angel cat running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/waiting.webp" alt="luna_angel cat waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/luna-angel-cat--neve/webp/review.webp" alt="luna_angel cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 作者 <a href="https://github.com/netizenXuan">@netizenXuan</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main night-neko--netizenxuan</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/idle.webp" alt="Night Neko idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waving.webp" alt="Night Neko waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/running-right.webp" alt="Night Neko running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/waiting.webp" alt="Night Neko waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/night-neko--netizenxuan/webp/review.webp" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/starcorn--alterhq">Starcorn</a> · 作者 <a href="https://github.com/alterhq">@alterhq</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main starcorn--alterhq</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/idle.webp" alt="Starcorn idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waving.webp" alt="Starcorn waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/running-right.webp" alt="Starcorn running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/waiting.webp" alt="Starcorn waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/starcorn--alterhq/webp/review.webp" alt="Starcorn review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · 作者 <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xian-xiao-lu--qingyunagi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/idle.webp" alt="Xian Xiao Lu idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waving.webp" alt="Xian Xiao Lu waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/running-right.webp" alt="Xian Xiao Lu running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/waiting.webp" alt="Xian Xiao Lu waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xian-xiao-lu--qingyunagi/webp/review.webp" alt="Xian Xiao Lu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yuanzai--gaming33">Yuanzai</a> · 作者 <a href="https://github.com/Gaming33">@Gaming33</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yuanzai--gaming33</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/idle.webp" alt="Yuanzai idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waving.webp" alt="Yuanzai waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/running-right.webp" alt="Yuanzai running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/waiting.webp" alt="Yuanzai waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yuanzai--gaming33/webp/review.webp" alt="Yuanzai review" width="120" height="130"></td></tr>
</table>

### 机器人

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chispa--giiilberto-nm">Chispa</a> · 作者 @giiilberto-nm · 机器人 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main chispa--giiilberto-nm</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/idle.webp" alt="Chispa idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waving.webp" alt="Chispa waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/running-right.webp" alt="Chispa running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/waiting.webp" alt="Chispa waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/chispa--giiilberto-nm/webp/review.webp" alt="Chispa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/codenono--dq02">CodeNoNo</a> · 作者 <a href="https://github.com/Dqd02">@Dqd02</a> · 机器人 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main codenono--dq02</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/idle.webp" alt="CodeNoNo idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waving.webp" alt="CodeNoNo waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/running-right.webp" alt="CodeNoNo running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/waiting.webp" alt="CodeNoNo waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/codenono--dq02/webp/review.webp" alt="CodeNoNo review" width="120" height="130"></td></tr>
</table>

### 人物头像

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/azuma--tairazuma">Azuma</a> · 作者 @tairazuma · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main azuma--tairazuma</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/idle.webp" alt="Azuma idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waving.webp" alt="Azuma waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/running-right.webp" alt="Azuma running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/waiting.webp" alt="Azuma waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/azuma--tairazuma/webp/review.webp" alt="Azuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tangdouren--carl312">Tangdouren</a> · 作者 <a href="https://github.com/Carl-312">@Carl-312</a> · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tangdouren--carl312</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/idle.webp" alt="Tangdouren idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waving.webp" alt="Tangdouren waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/running-right.webp" alt="Tangdouren running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/waiting.webp" alt="Tangdouren waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tangdouren--carl312/webp/review.webp" alt="Tangdouren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/guga--circus">咕嘎</a> · 作者 @circus · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main guga--circus</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/idle.webp" alt="咕嘎 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waving.webp" alt="咕嘎 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/running-right.webp" alt="咕嘎 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/waiting.webp" alt="咕嘎 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/guga--circus/webp/review.webp" alt="咕嘎 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/fengge--qzl1-stack">峰哥</a> · 作者 <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main fengge--qzl1-stack</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/idle.webp" alt="峰哥 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waving.webp" alt="峰哥 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/running-right.webp" alt="峰哥 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/waiting.webp" alt="峰哥 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/fengge--qzl1-stack/webp/review.webp" alt="峰哥 review" width="120" height="130"></td></tr>
</table>

### 网络梗图

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/drill-cat--qimi">电钻咪</a> · 作者 <a href="https://github.com/qishichuan">@qishichuan</a> · 网络梗图 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main drill-cat--qimi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/idle.webp" alt="电钻咪 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waving.webp" alt="电钻咪 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/running-right.webp" alt="电钻咪 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/waiting.webp" alt="电钻咪 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/drill-cat--qimi/webp/review.webp" alt="电钻咪 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hami--tat">哈基米</a> · 作者 <a href="https://github.com/TATcc">@TATcc</a> · 网络梗图 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hami--tat</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/idle.webp" alt="哈基米 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waving.webp" alt="哈基米 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/running-right.webp" alt="哈基米 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/waiting.webp" alt="哈基米 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hami--tat/webp/review.webp" alt="哈基米 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · 作者 <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · 网络梗图 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main katana-cheems--thankyou-cheems</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/idle.webp" alt="Katana Cheems idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waving.webp" alt="Katana Cheems waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/running-right.webp" alt="Katana Cheems running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/waiting.webp" alt="Katana Cheems waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/katana-cheems--thankyou-cheems/webp/review.webp" alt="Katana Cheems review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hance-woniu--korn">旱厕蜗牛</a> · 作者 @korn · 网络梗图 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main hance-woniu--korn</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/idle.webp" alt="旱厕蜗牛 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waving.webp" alt="旱厕蜗牛 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/running-right.webp" alt="旱厕蜗牛 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/waiting.webp" alt="旱厕蜗牛 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/hance-woniu--korn/webp/review.webp" alt="旱厕蜗牛 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/maodie--octane0411">耄耋</a> · 作者 <a href="https://github.com/Octane0411">@Octane0411</a> · 网络梗图 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main maodie--octane0411</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/idle.webp" alt="耄耋 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waving.webp" alt="耄耋 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/running-right.webp" alt="耄耋 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/waiting.webp" alt="耄耋 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/maodie--octane0411/webp/review.webp" alt="耄耋 review" width="120" height="130"></td></tr>
</table>

### 物件与道具

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/spellbook--seymour">Spellbook</a> · 作者 @seymour · 物件与道具 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main spellbook--seymour</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/idle.webp" alt="Spellbook idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waving.webp" alt="Spellbook waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/running-right.webp" alt="Spellbook running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/waiting.webp" alt="Spellbook waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/spellbook--seymour/webp/review.webp" alt="Spellbook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tiny-crt--chochou">Tiny CRT</a> · 作者 @chochou · 物件与道具 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main tiny-crt--chochou</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/idle.webp" alt="Tiny CRT idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waving.webp" alt="Tiny CRT waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/running-right.webp" alt="Tiny CRT running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/waiting.webp" alt="Tiny CRT waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/tiny-crt--chochou/webp/review.webp" alt="Tiny CRT review" width="120" height="130"></td></tr>
</table>

### 其他

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kuromi--legeling">库洛米</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main kuromi--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/idle.webp" alt="库洛米 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waving.webp" alt="库洛米 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/running-right.webp" alt="库洛米 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/waiting.webp" alt="库洛米 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/kuromi--legeling/webp/review.webp" alt="库洛米 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xingxingren--legeling">星星人</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main xingxingren--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/idle.webp" alt="星星人 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waving.webp" alt="星星人 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/running-right.webp" alt="星星人 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/waiting.webp" alt="星星人 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/xingxingren--legeling/webp/review.webp" alt="星星人 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yanlingji--jorge-cuevas90003">焰灵姬</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main yanlingji--jorge-cuevas90003</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/idle.webp" alt="焰灵姬 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waving.webp" alt="焰灵姬 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/running-right.webp" alt="焰灵姬 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/waiting.webp" alt="焰灵姬 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/yanlingji--jorge-cuevas90003/webp/review.webp" alt="焰灵姬 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/twilight-sparkle--wuye3790">紫悦</a> · 作者 <a href="https://github.com/WuYe3790">@WuYe3790</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main twilight-sparkle--wuye3790</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/idle.webp" alt="紫悦 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waving.webp" alt="紫悦 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/running-right.webp" alt="紫悦 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/waiting.webp" alt="紫悦 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/twilight-sparkle--wuye3790/webp/review.webp" alt="紫悦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/longying--legeling">胧萤</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main longying--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/idle.webp" alt="胧萤 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waving.webp" alt="胧萤 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/running-right.webp" alt="胧萤 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/waiting.webp" alt="胧萤 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/longying--legeling/webp/review.webp" alt="胧萤 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bond-forger--legeling">邦德·福杰</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 其他 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main bond-forger--legeling</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/idle.webp" alt="邦德·福杰 idle" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waving.webp" alt="邦德·福杰 waving" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/running-right.webp" alt="邦德·福杰 running-right" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/waiting.webp" alt="邦德·福杰 waiting" width="120" height="130"></td><td><img src="https://codexpet.top/assets/previews/bond-forger--legeling/webp/review.webp" alt="邦德·福杰 review" width="120" height="130"></td></tr>
</table>

## 申请或投稿

没有喜欢的角色时，请打开[免费社区制作申请页](https://codexpet.top/zh/request)。提交申请不收费，不需要自己准备 spritesheet，社区贡献者可能会志愿认领并制作；申请不代表承诺收录或交付。

贡献者可以从[网站上的制作与投稿指南](https://codexpet.top/guide)开始。为了避免每位投稿者都下载体积较大的素材仓库，我们提供三条路径：

1. **请求制作宠物** — Codex 先检查重复项、收集参考和制作要求，再创建带标签的请求 Issue。
2. **制作或提交自己的宠物** — Codex 可以从参考图现场制作，也可以接收现成文件；完成三件套制作与校验后，通过 GitHub API 创建专用分支和 PR，无需完整克隆。
3. **高级 PR** — 熟悉 Git 的贡献者可以使用 GitHub Codespaces、部分克隆或自己的 Git 工作流。

仓库内的 [`.agents/skills/submit-codex-pet`](../../.agents/skills/submit-codex-pet) 会指导兼容的 AI 选择正确路径。若缺少凭据或仓库写入权限，它会退回到带标签的成品投稿 Issue，不会让投稿内容丢失。

高级贡献者只需添加一个最终成品包：

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

目录名使用 `pet-slug--author-slug`，这样同一个角色的不同作者版本可以并存。v1 投稿可以省略 `spriteVersionNumber`，WebP 必须是 `1536x1872`；v2 投稿必须设置 `spriteVersionNumber: 2`，WebP 必须是 `1536x2288`。

v2 的运行时清单示例：

```json
{
  "id": "pet-slug--author-slug",
  "displayName": "Pet 名称",
  "description": "一句简短描述。",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

预览图和 README 收录表都由 CI 自动生成：

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

贡献者 PR 只需提交 `submission.json`、`pet.json` 和 `spritesheet.webp`。不要提交 prompts、参考图、QA 目录、contact sheet、视频、解码帧或 Hatch Pet 运行目录。预览图、README 收录和 `pets.json` 由维护者或 CI 在合并后统一生成，但预览二进制不会长期作为 Git 跟踪文件保留。

## 制作 Pet

- [.agents/skills/submit-codex-pet](../../.agents/skills/submit-codex-pet) — 请求社区制作、通过 GitHub API 制作或提交自己的宠物，或准备高级 PR
- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 保留或修复旧版 8x9 v1 宠物
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 创建或升级带 16 个环视方向的 8x11 v2 宠物

调用时要显式选择 skill。升级已有宠物时，把现有的 `pet.json` 和 `spritesheet.webp` 交给 `$hatch-pet-v2`；通过审核的第 0–8 行会被保留，不会重新生成。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 한국어: [docs/ko](../ko)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 星标历史

[![Awesome Codex Pet 的 GitHub 星标历史](../../assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

图表每天根据 GitHub 星标数据自动更新。欢迎[为仓库点亮 Star](https://github.com/legeling/awesome-codex-pet)，让更多人发现这些精品宠物。

## 贡献者

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet 贡献者">
</a>

感谢每一位贡献宠物、代码、文档、审核与创意的朋友。

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
