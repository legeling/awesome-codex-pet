<div align="center">

# Awesome Codex Pet

简体中文 | [English](../../README.md)

![pets: 108](https://img.shields.io/badge/pets-108-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

[**🌐 精品宠物画廊**](https://awesome-codex-pet.pages.dev) · [**⚡ 安装指南**](https://awesome-codex-pet.pages.dev/install) · [**📖 制作与投稿指南**](https://awesome-codex-pet.pages.dev/guide)

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

</div>

专门收录制作精良的社区 Codex 宠物。在[精品画廊](https://awesome-codex-pet.pages.dev)中查看完整动作、作者与合集，一键安装喜欢的伙伴，也可以按照制作指南投稿自己的精品宠物。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **精品宠物画廊** — [awesome-codex-pet.pages.dev](https://awesome-codex-pet.pages.dev) 提供完整动作预览、合集、作者署名、便捷分享和社区统计
- **GitHub 原生投稿** — 提 issue 或 PR，剩下的全自动
- **非商用原则** — 正式许可证可选；没有正式许可证时必须明确禁止商用

每只宠物都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

预览图会作为本地或 CI 构建产物生成到 `assets/previews/<pet-id>/`，不会塞进宠物目录。

仓库级作品系列与主题系列统一维护在 `collections.json`：`kind: franchise` 表示来自同一原作的作品系列，`kind: theme` 表示按题材、风格或伙伴类型组织的跨作品主题系列。宠物通过 `submission.json.collections` 声明归属，目录与网站都会从这些元数据自动生成。

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
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian"
```

```bash
# 任何能跑 Node.js 的环境
npx awesome-codex-pet firefly--lingxiaotian
```

列出可安装的宠物：

```bash
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --list
```

默认安装位置：

- macOS / Linux：`~/.codex/pets/<pet-id>/`
- Windows：`%USERPROFILE%\.codex\pets\<pet-id>\`

可通过 `CODEX_HOME` 自定义安装路径，或者设置 `AWESOME_CODEX_PET_NO_STATS=1` 关闭匿名安装计数。

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
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/firefly--lingxiaotian/gifs/idle.gif" alt="流萤 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/firefly--lingxiaotian/gifs/waving.gif" alt="流萤 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/firefly--lingxiaotian/gifs/running-right.gif" alt="流萤 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/firefly--lingxiaotian/gifs/waiting.gif" alt="流萤 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/firefly--lingxiaotian/gifs/review.gif" alt="流萤 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/acheron--lingxiaotian">黄泉</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- acheron--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/acheron--lingxiaotian/gifs/idle.gif" alt="黄泉 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/acheron--lingxiaotian/gifs/waving.gif" alt="黄泉 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/acheron--lingxiaotian/gifs/running-right.gif" alt="黄泉 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/acheron--lingxiaotian/gifs/waiting.gif" alt="黄泉 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/acheron--lingxiaotian/gifs/review.gif" alt="黄泉 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/arlecchino--lingxiaotian">阿蕾奇诺</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- arlecchino--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/arlecchino--lingxiaotian/gifs/idle.gif" alt="阿蕾奇诺 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/arlecchino--lingxiaotian/gifs/waving.gif" alt="阿蕾奇诺 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/arlecchino--lingxiaotian/gifs/running-right.gif" alt="阿蕾奇诺 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/arlecchino--lingxiaotian/gifs/waiting.gif" alt="阿蕾奇诺 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/arlecchino--lingxiaotian/gifs/review.gif" alt="阿蕾奇诺 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/black-swan--lingxiaotian">黑天鹅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- black-swan--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/black-swan--lingxiaotian/gifs/idle.gif" alt="黑天鹅 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/black-swan--lingxiaotian/gifs/waving.gif" alt="黑天鹅 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/black-swan--lingxiaotian/gifs/running-right.gif" alt="黑天鹅 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/black-swan--lingxiaotian/gifs/waiting.gif" alt="黑天鹅 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/black-swan--lingxiaotian/gifs/review.gif" alt="黑天鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/buba--yurcek">Buba</a> · 作者 @yurcek · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- buba--yurcek</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/buba--yurcek/gifs/idle.gif" alt="Buba idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/buba--yurcek/gifs/waving.gif" alt="Buba waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/buba--yurcek/gifs/running-right.gif" alt="Buba running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/buba--yurcek/gifs/waiting.gif" alt="Buba waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/buba--yurcek/gifs/review.gif" alt="Buba review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/castorice--lingxiaotian">遐蝶</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- castorice--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/castorice--lingxiaotian/gifs/idle.gif" alt="遐蝶 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/castorice--lingxiaotian/gifs/waving.gif" alt="遐蝶 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/castorice--lingxiaotian/gifs/running-right.gif" alt="遐蝶 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/castorice--lingxiaotian/gifs/waiting.gif" alt="遐蝶 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/castorice--lingxiaotian/gifs/review.gif" alt="遐蝶 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/cyrene--lingxiaotian">昔涟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- cyrene--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/cyrene--lingxiaotian/gifs/idle.gif" alt="昔涟 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/cyrene--lingxiaotian/gifs/waving.gif" alt="昔涟 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/cyrene--lingxiaotian/gifs/running-right.gif" alt="昔涟 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/cyrene--lingxiaotian/gifs/waiting.gif" alt="昔涟 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/cyrene--lingxiaotian/gifs/review.gif" alt="昔涟 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dimo-stand--god-wu">Dimo</a> · 作者 @god-wu · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dimo-stand--god-wu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dimo-stand--god-wu/gifs/idle.gif" alt="Dimo idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dimo-stand--god-wu/gifs/waving.gif" alt="Dimo waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dimo-stand--god-wu/gifs/running-right.gif" alt="Dimo running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dimo-stand--god-wu/gifs/waiting.gif" alt="Dimo waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dimo-stand--god-wu/gifs/review.gif" alt="Dimo review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/doro--lingxiaotian">桃乐丝（Doro）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- doro--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/doro--lingxiaotian/gifs/idle.gif" alt="桃乐丝（Doro） idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/doro--lingxiaotian/gifs/waving.gif" alt="桃乐丝（Doro） waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/doro--lingxiaotian/gifs/running-right.gif" alt="桃乐丝（Doro） running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/doro--lingxiaotian/gifs/waiting.gif" alt="桃乐丝（Doro） waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/doro--lingxiaotian/gifs/review.gif" alt="桃乐丝（Doro） review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/feixiao--lingxiaotian">飞霄</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- feixiao--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feixiao--lingxiaotian/gifs/idle.gif" alt="飞霄 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feixiao--lingxiaotian/gifs/waving.gif" alt="飞霄 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feixiao--lingxiaotian/gifs/running-right.gif" alt="飞霄 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feixiao--lingxiaotian/gifs/waiting.gif" alt="飞霄 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feixiao--lingxiaotian/gifs/review.gif" alt="飞霄 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/furina--lingxiaotian">芙宁娜</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- furina--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/furina--lingxiaotian/gifs/idle.gif" alt="芙宁娜 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/furina--lingxiaotian/gifs/waving.gif" alt="芙宁娜 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/furina--lingxiaotian/gifs/running-right.gif" alt="芙宁娜 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/furina--lingxiaotian/gifs/waiting.gif" alt="芙宁娜 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/furina--lingxiaotian/gifs/review.gif" alt="芙宁娜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hu-tao--lingxiaotian">胡桃</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hu-tao--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hu-tao--lingxiaotian/gifs/idle.gif" alt="胡桃 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hu-tao--lingxiaotian/gifs/waving.gif" alt="胡桃 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hu-tao--lingxiaotian/gifs/running-right.gif" alt="胡桃 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hu-tao--lingxiaotian/gifs/waiting.gif" alt="胡桃 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hu-tao--lingxiaotian/gifs/review.gif" alt="胡桃 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kamisato-ayaka--lingxiaotian">神里绫华</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kamisato-ayaka--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kamisato-ayaka--lingxiaotian/gifs/idle.gif" alt="神里绫华 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kamisato-ayaka--lingxiaotian/gifs/waving.gif" alt="神里绫华 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kamisato-ayaka--lingxiaotian/gifs/running-right.gif" alt="神里绫华 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kamisato-ayaka--lingxiaotian/gifs/waiting.gif" alt="神里绫华 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kamisato-ayaka--lingxiaotian/gifs/review.gif" alt="神里绫华 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/little-black-mage--libertis">Little Black Mage</a> · 作者 @libertis · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- little-black-mage--libertis</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-black-mage--libertis/gifs/idle.gif" alt="Little Black Mage idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-black-mage--libertis/gifs/waving.gif" alt="Little Black Mage waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-black-mage--libertis/gifs/running-right.gif" alt="Little Black Mage running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-black-mage--libertis/gifs/waiting.gif" alt="Little Black Mage waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-black-mage--libertis/gifs/review.gif" alt="Little Black Mage review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/nahida--lingxiaotian">纳西妲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- nahida--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/nahida--lingxiaotian/gifs/idle.gif" alt="纳西妲 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/nahida--lingxiaotian/gifs/waving.gif" alt="纳西妲 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/nahida--lingxiaotian/gifs/running-right.gif" alt="纳西妲 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/nahida--lingxiaotian/gifs/waiting.gif" alt="纳西妲 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/nahida--lingxiaotian/gifs/review.gif" alt="纳西妲 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/navia--lingxiaotian">娜维娅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- navia--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/navia--lingxiaotian/gifs/idle.gif" alt="娜维娅 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/navia--lingxiaotian/gifs/waving.gif" alt="娜维娅 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/navia--lingxiaotian/gifs/running-right.gif" alt="娜维娅 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/navia--lingxiaotian/gifs/waiting.gif" alt="娜维娅 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/navia--lingxiaotian/gifs/review.gif" alt="娜维娅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/paimon--lingxiaotian">派蒙</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- paimon--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/paimon--lingxiaotian/gifs/idle.gif" alt="派蒙 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/paimon--lingxiaotian/gifs/waving.gif" alt="派蒙 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/paimon--lingxiaotian/gifs/running-right.gif" alt="派蒙 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/paimon--lingxiaotian/gifs/waiting.gif" alt="派蒙 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/paimon--lingxiaotian/gifs/review.gif" alt="派蒙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/raiden-shogun--lingxiaotian">雷电将军</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- raiden-shogun--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/raiden-shogun--lingxiaotian/gifs/idle.gif" alt="雷电将军 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/raiden-shogun--lingxiaotian/gifs/waving.gif" alt="雷电将军 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/raiden-shogun--lingxiaotian/gifs/running-right.gif" alt="雷电将军 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/raiden-shogun--lingxiaotian/gifs/waiting.gif" alt="雷电将军 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/raiden-shogun--lingxiaotian/gifs/review.gif" alt="雷电将军 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/reimu--lingxiaotian">博丽灵梦</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- reimu--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/reimu--lingxiaotian/gifs/idle.gif" alt="博丽灵梦 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/reimu--lingxiaotian/gifs/waving.gif" alt="博丽灵梦 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/reimu--lingxiaotian/gifs/running-right.gif" alt="博丽灵梦 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/reimu--lingxiaotian/gifs/waiting.gif" alt="博丽灵梦 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/reimu--lingxiaotian/gifs/review.gif" alt="博丽灵梦 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/robin--lingxiaotian">知更鸟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- robin--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/robin--lingxiaotian/gifs/idle.gif" alt="知更鸟 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/robin--lingxiaotian/gifs/waving.gif" alt="知更鸟 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/robin--lingxiaotian/gifs/running-right.gif" alt="知更鸟 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/robin--lingxiaotian/gifs/waiting.gif" alt="知更鸟 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/robin--lingxiaotian/gifs/review.gif" alt="知更鸟 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ruan-mei--lingxiaotian">阮·梅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ruan-mei--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruan-mei--lingxiaotian/gifs/idle.gif" alt="阮·梅 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruan-mei--lingxiaotian/gifs/waving.gif" alt="阮·梅 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruan-mei--lingxiaotian/gifs/running-right.gif" alt="阮·梅 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruan-mei--lingxiaotian/gifs/waiting.gif" alt="阮·梅 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruan-mei--lingxiaotian/gifs/review.gif" alt="阮·梅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/silver-wolf--lingxiaotian">银狼</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- silver-wolf--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/silver-wolf--lingxiaotian/gifs/idle.gif" alt="银狼 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/silver-wolf--lingxiaotian/gifs/waving.gif" alt="银狼 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/silver-wolf--lingxiaotian/gifs/running-right.gif" alt="银狼 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/silver-wolf--lingxiaotian/gifs/waiting.gif" alt="银狼 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/silver-wolf--lingxiaotian/gifs/review.gif" alt="银狼 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/sparkle--lingxiaotian">花火</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- sparkle--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/sparkle--lingxiaotian/gifs/idle.gif" alt="花火 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/sparkle--lingxiaotian/gifs/waving.gif" alt="花火 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/sparkle--lingxiaotian/gifs/running-right.gif" alt="花火 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/sparkle--lingxiaotian/gifs/waiting.gif" alt="花火 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/sparkle--lingxiaotian/gifs/review.gif" alt="花火 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tingyun--lingxiaotian">停云</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tingyun--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tingyun--lingxiaotian/gifs/idle.gif" alt="停云 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tingyun--lingxiaotian/gifs/waving.gif" alt="停云 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tingyun--lingxiaotian/gifs/running-right.gif" alt="停云 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tingyun--lingxiaotian/gifs/waiting.gif" alt="停云 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tingyun--lingxiaotian/gifs/review.gif" alt="停云 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 作者 <a href="https://github.com/QunBoo">@QunBoo</a> · 游戏角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dnf-female-ammo--qunboo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dnf-female-ammo--qunboo/gifs/idle.gif" alt="女弹药Q idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dnf-female-ammo--qunboo/gifs/waving.gif" alt="女弹药Q waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dnf-female-ammo--qunboo/gifs/running-right.gif" alt="女弹药Q running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dnf-female-ammo--qunboo/gifs/waiting.gif" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dnf-female-ammo--qunboo/gifs/review.gif" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/youmu--ai-generated">魂魄妖梦</a> · 作者 @ai-generated · 游戏角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- youmu--ai-generated</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/youmu--ai-generated/gifs/idle.gif" alt="魂魄妖梦 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/youmu--ai-generated/gifs/waving.gif" alt="魂魄妖梦 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/youmu--ai-generated/gifs/running-right.gif" alt="魂魄妖梦 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/youmu--ai-generated/gifs/waiting.gif" alt="魂魄妖梦 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/youmu--ai-generated/gifs/review.gif" alt="魂魄妖梦 review" width="120" height="130"></td></tr>
</table>

### 动漫角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/frieren--lingxiaotian">芙莉莲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frieren--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frieren--lingxiaotian/gifs/idle.gif" alt="芙莉莲 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frieren--lingxiaotian/gifs/waving.gif" alt="芙莉莲 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frieren--lingxiaotian/gifs/running-right.gif" alt="芙莉莲 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frieren--lingxiaotian/gifs/waiting.gif" alt="芙莉莲 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frieren--lingxiaotian/gifs/review.gif" alt="芙莉莲 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/isekaijoucho--siiverash">Isekaijoucho</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- isekaijoucho--siiverash</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/isekaijoucho--siiverash/gifs/idle.gif" alt="Isekaijoucho idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/isekaijoucho--siiverash/gifs/waving.gif" alt="Isekaijoucho waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/isekaijoucho--siiverash/gifs/running-right.gif" alt="Isekaijoucho running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/isekaijoucho--siiverash/gifs/waiting.gif" alt="Isekaijoucho waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/isekaijoucho--siiverash/gifs/review.gif" alt="Isekaijoucho review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mahiro--lingxiaotian">绪山真寻</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mahiro--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mahiro--lingxiaotian/gifs/idle.gif" alt="绪山真寻 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mahiro--lingxiaotian/gifs/waving.gif" alt="绪山真寻 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mahiro--lingxiaotian/gifs/running-right.gif" alt="绪山真寻 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mahiro--lingxiaotian/gifs/waiting.gif" alt="绪山真寻 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mahiro--lingxiaotian/gifs/review.gif" alt="绪山真寻 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mihari--hyoni1129">Mihari</a> · 作者 <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mihari--hyoni1129</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mihari--hyoni1129/gifs/idle.gif" alt="Mihari idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mihari--hyoni1129/gifs/waving.gif" alt="Mihari waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mihari--hyoni1129/gifs/running-right.gif" alt="Mihari running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mihari--hyoni1129/gifs/waiting.gif" alt="Mihari waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mihari--hyoni1129/gifs/review.gif" alt="Mihari review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mikoto--lingxiaotian">御坂美琴</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mikoto--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="御坂美琴 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="御坂美琴 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mikoto--lingxiaotian/gifs/running-right.gif" alt="御坂美琴 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mikoto--lingxiaotian/gifs/waiting.gif" alt="御坂美琴 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="御坂美琴 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miku--lingxiaotian">初音未来</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miku--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miku--lingxiaotian/gifs/idle.gif" alt="初音未来 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miku--lingxiaotian/gifs/waving.gif" alt="初音未来 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miku--lingxiaotian/gifs/running-right.gif" alt="初音未来 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miku--lingxiaotian/gifs/waiting.gif" alt="初音未来 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miku--lingxiaotian/gifs/review.gif" alt="初音未来 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/misaka-network--ldl1234">御坂网络</a> · 作者 <a href="https://github.com/ldl1234">@ldl1234</a> · 动漫角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- misaka-network--ldl1234</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/misaka-network--ldl1234/gifs/idle.gif" alt="御坂网络 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/misaka-network--ldl1234/gifs/waving.gif" alt="御坂网络 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/misaka-network--ldl1234/gifs/running-right.gif" alt="御坂网络 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/misaka-network--ldl1234/gifs/waiting.gif" alt="御坂网络 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/misaka-network--ldl1234/gifs/review.gif" alt="御坂网络 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/rinami--siiverash">Rinami Himesaki</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- rinami--siiverash</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rinami--siiverash/gifs/idle.gif" alt="Rinami Himesaki idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rinami--siiverash/gifs/waving.gif" alt="Rinami Himesaki waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rinami--siiverash/gifs/running-right.gif" alt="Rinami Himesaki running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rinami--siiverash/gifs/waiting.gif" alt="Rinami Himesaki waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rinami--siiverash/gifs/review.gif" alt="Rinami Himesaki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/roxy-pixel--gravity">Roxy Pixel</a> · 作者 @gravity · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- roxy-pixel--gravity</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/roxy-pixel--gravity/gifs/idle.gif" alt="Roxy Pixel idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/roxy-pixel--gravity/gifs/waving.gif" alt="Roxy Pixel waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/roxy-pixel--gravity/gifs/running-right.gif" alt="Roxy Pixel running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/roxy-pixel--gravity/gifs/waiting.gif" alt="Roxy Pixel waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/roxy-pixel--gravity/gifs/review.gif" alt="Roxy Pixel review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bocchi--lingxiaotian">后藤独</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bocchi--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bocchi--lingxiaotian/gifs/idle.gif" alt="后藤独 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bocchi--lingxiaotian/gifs/waving.gif" alt="后藤独 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bocchi--lingxiaotian/gifs/running-right.gif" alt="后藤独 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bocchi--lingxiaotian/gifs/waiting.gif" alt="后藤独 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bocchi--lingxiaotian/gifs/review.gif" alt="后藤独 review" width="120" height="130"></td></tr>
</table>

### 原创角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diana--am">Diana</a> · 作者 @am · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diana--am</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diana--am/gifs/idle.gif" alt="Diana idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diana--am/gifs/waving.gif" alt="Diana waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diana--am/gifs/running-right.gif" alt="Diana running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diana--am/gifs/waiting.gif" alt="Diana waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diana--am/gifs/review.gif" alt="Diana review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hajimi--zeyuwang1999">Hajimi</a> · 作者 <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hajimi--zeyuwang1999</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hajimi--zeyuwang1999/gifs/idle.gif" alt="Hajimi idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hajimi--zeyuwang1999/gifs/waving.gif" alt="Hajimi waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hajimi--zeyuwang1999/gifs/running-right.gif" alt="Hajimi running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hajimi--zeyuwang1999/gifs/waiting.gif" alt="Hajimi waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hajimi--zeyuwang1999/gifs/review.gif" alt="Hajimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/hana2--initiatione">Hana2</a> · 作者 <a href="https://github.com/initiatione">@initiatione</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- hana2--initiatione</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hana2--initiatione/gifs/idle.gif" alt="Hana2 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hana2--initiatione/gifs/waving.gif" alt="Hana2 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hana2--initiatione/gifs/running-right.gif" alt="Hana2 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hana2--initiatione/gifs/waiting.gif" alt="Hana2 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/hana2--initiatione/gifs/review.gif" alt="Hana2 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/joker--oytyo">Joker</a> · 作者 @oytyo · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- joker--oytyo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/joker--oytyo/gifs/idle.gif" alt="Joker idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/joker--oytyo/gifs/waving.gif" alt="Joker waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/joker--oytyo/gifs/running-right.gif" alt="Joker running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/joker--oytyo/gifs/waiting.gif" alt="Joker waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/joker--oytyo/gifs/review.gif" alt="Joker review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/linnea--nyakku-shigure">Linnea</a> · 作者 @nyakku-shigure · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- linnea--nyakku-shigure</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/linnea--nyakku-shigure/gifs/idle.gif" alt="Linnea idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/linnea--nyakku-shigure/gifs/waving.gif" alt="Linnea waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/linnea--nyakku-shigure/gifs/running-right.gif" alt="Linnea running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/linnea--nyakku-shigure/gifs/waiting.gif" alt="Linnea waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/linnea--nyakku-shigure/gifs/review.gif" alt="Linnea review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mika--rotl24">Mika</a> · 作者 <a href="https://github.com/ROTl24">@ROTl24</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mika--rotl24</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mika--rotl24/gifs/idle.gif" alt="Mika idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mika--rotl24/gifs/waving.gif" alt="Mika waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mika--rotl24/gifs/running-right.gif" alt="Mika running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mika--rotl24/gifs/waiting.gif" alt="Mika waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mika--rotl24/gifs/review.gif" alt="Mika review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/minty--somnusochi">Minty</a> · 作者 <a href="https://github.com/Somnusochi">@Somnusochi</a> · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- minty--somnusochi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/minty--somnusochi/gifs/idle.gif" alt="Minty idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/minty--somnusochi/gifs/waving.gif" alt="Minty waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/minty--somnusochi/gifs/running-right.gif" alt="Minty running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/minty--somnusochi/gifs/waiting.gif" alt="Minty waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/minty--somnusochi/gifs/review.gif" alt="Minty review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · 作者 <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ruruka--ltmcliao-cmyk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruruka--ltmcliao-cmyk/gifs/idle.gif" alt="RuRuKa idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruruka--ltmcliao-cmyk/gifs/waving.gif" alt="RuRuKa waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruruka--ltmcliao-cmyk/gifs/running-right.gif" alt="RuRuKa running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruruka--ltmcliao-cmyk/gifs/waiting.gif" alt="RuRuKa waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ruruka--ltmcliao-cmyk/gifs/review.gif" alt="RuRuKa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/shian-helper--mistyshen">Shian</a> · 作者 <a href="https://github.com/mistyShen">@mistyShen</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- shian-helper--mistyshen</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/shian-helper--mistyshen/gifs/idle.gif" alt="Shian idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/shian-helper--mistyshen/gifs/waving.gif" alt="Shian waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/shian-helper--mistyshen/gifs/running-right.gif" alt="Shian running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/shian-helper--mistyshen/gifs/waiting.gif" alt="Shian waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/shian-helper--mistyshen/gifs/review.gif" alt="Shian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yier--gbn666">Yi Er</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yier--gbn666</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yier--gbn666/gifs/idle.gif" alt="Yi Er idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yier--gbn666/gifs/waving.gif" alt="Yi Er waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yier--gbn666/gifs/running-right.gif" alt="Yi Er running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yier--gbn666/gifs/waiting.gif" alt="Yi Er waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yier--gbn666/gifs/review.gif" alt="Yi Er review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yume-boundary--andy-meow">Yume</a> · 作者 @andy-meow · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yume-boundary--andy-meow</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yume-boundary--andy-meow/gifs/idle.gif" alt="Yume idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yume-boundary--andy-meow/gifs/waving.gif" alt="Yume waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yume-boundary--andy-meow/gifs/running-right.gif" alt="Yume running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yume-boundary--andy-meow/gifs/waiting.gif" alt="Yume waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yume-boundary--andy-meow/gifs/review.gif" alt="Yume review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yuzubou--keseras34938976">Yuzubou</a> · 作者 <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yuzubou--keseras34938976</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuzubou--keseras34938976/gifs/idle.gif" alt="Yuzubou idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuzubou--keseras34938976/gifs/waving.gif" alt="Yuzubou waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuzubou--keseras34938976/gifs/running-right.gif" alt="Yuzubou running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuzubou--keseras34938976/gifs/waiting.gif" alt="Yuzubou waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuzubou--keseras34938976/gifs/review.gif" alt="Yuzubou review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gudong--rank">咕咚</a> · 作者 @Rank · 原创角色 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gudong--rank</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gudong--rank/gifs/idle.gif" alt="咕咚 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gudong--rank/gifs/waving.gif" alt="咕咚 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gudong--rank/gifs/running-right.gif" alt="咕咚 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gudong--rank/gifs/waiting.gif" alt="咕咚 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gudong--rank/gifs/review.gif" alt="咕咚 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/feibi--vanfff">菲比</a> · 作者 @vanfff · 原创角色 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- feibi--vanfff</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feibi--vanfff/gifs/idle.gif" alt="菲比 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feibi--vanfff/gifs/waving.gif" alt="菲比 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feibi--vanfff/gifs/running-right.gif" alt="菲比 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feibi--vanfff/gifs/waiting.gif" alt="菲比 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/feibi--vanfff/gifs/review.gif" alt="菲比 review" width="120" height="130"></td></tr>
</table>

### 吉祥物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/aemeath-mini--cunuo">Aemeath Mini</a> · 作者 <a href="https://github.com/cuNuo">@cuNuo</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- aemeath-mini--cunuo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/aemeath-mini--cunuo/gifs/idle.gif" alt="Aemeath Mini idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/aemeath-mini--cunuo/gifs/waving.gif" alt="Aemeath Mini waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/aemeath-mini--cunuo/gifs/running-right.gif" alt="Aemeath Mini running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/aemeath-mini--cunuo/gifs/waiting.gif" alt="Aemeath Mini waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/aemeath-mini--cunuo/gifs/review.gif" alt="Aemeath Mini review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/apu--xchangee">Apu</a> · 作者 <a href="https://github.com/xchangee">@xchangee</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- apu--xchangee</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/apu--xchangee/gifs/idle.gif" alt="Apu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/apu--xchangee/gifs/waving.gif" alt="Apu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/apu--xchangee/gifs/running-right.gif" alt="Apu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/apu--xchangee/gifs/waiting.gif" alt="Apu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/apu--xchangee/gifs/review.gif" alt="Apu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/claude--xiangking">Claude</a> · 作者 <a href="https://github.com/xiangking">@xiangking</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- claude--xiangking</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/claude--xiangking/gifs/idle.gif" alt="Claude idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/claude--xiangking/gifs/waving.gif" alt="Claude waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/claude--xiangking/gifs/running-right.gif" alt="Claude running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/claude--xiangking/gifs/waiting.gif" alt="Claude waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/claude--xiangking/gifs/review.gif" alt="Claude review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/twinkle-twinkle--twinkletwinkle">Dashun's Twinkle Twinkle</a> · 作者 @twinkletwinkle · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- twinkle-twinkle--twinkletwinkle</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/idle.gif" alt="Dashun's Twinkle Twinkle idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/waving.gif" alt="Dashun's Twinkle Twinkle waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/running-right.gif" alt="Dashun's Twinkle Twinkle running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/waiting.gif" alt="Dashun's Twinkle Twinkle waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/twinkle-twinkle--twinkletwinkle/gifs/review.gif" alt="Dashun's Twinkle Twinkle review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diaoyi-baobao--d1a0y1bb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/idle.gif" alt="Diaoyi Baobao idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/waving.gif" alt="Diaoyi Baobao waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/running-right.gif" alt="Diaoyi Baobao running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/waiting.gif" alt="Diaoyi Baobao waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diaoyi-baobao--d1a0y1bb/gifs/review.gif" alt="Diaoyi Baobao review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/gpt-muse--opask">GPT-muse</a> · 作者 @opask · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- gpt-muse--opask</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gpt-muse--opask/gifs/idle.gif" alt="GPT-muse idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gpt-muse--opask/gifs/waving.gif" alt="GPT-muse waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gpt-muse--opask/gifs/running-right.gif" alt="GPT-muse running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gpt-muse--opask/gifs/waiting.gif" alt="GPT-muse waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/gpt-muse--opask/gifs/review.gif" alt="GPT-muse review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/lulu--yogazz">Lulu</a> · 作者 <a href="https://github.com/YoGazz">@YoGazz</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- lulu--yogazz</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/lulu--yogazz/gifs/idle.gif" alt="Lulu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/lulu--yogazz/gifs/waving.gif" alt="Lulu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/lulu--yogazz/gifs/running-right.gif" alt="Lulu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/lulu--yogazz/gifs/waiting.gif" alt="Lulu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/lulu--yogazz/gifs/review.gif" alt="Lulu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/saki--rookie-09">Saki</a> · 作者 <a href="https://github.com/rookie-09">@rookie-09</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- saki--rookie-09</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/saki--rookie-09/gifs/idle.gif" alt="Saki idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/saki--rookie-09/gifs/waving.gif" alt="Saki waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/saki--rookie-09/gifs/running-right.gif" alt="Saki running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/saki--rookie-09/gifs/waiting.gif" alt="Saki waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/saki--rookie-09/gifs/review.gif" alt="Saki review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/wally--wally025">Wally</a> · 作者 <a href="https://github.com/wally025">@wally025</a> · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- wally--wally025</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/wally--wally025/gifs/idle.gif" alt="Wally idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/wally--wally025/gifs/waving.gif" alt="Wally waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/wally--wally025/gifs/running-right.gif" alt="Wally running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/wally--wally025/gifs/waiting.gif" alt="Wally waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/wally--wally025/gifs/review.gif" alt="Wally review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zhengyin--noonwake">正音</a> · 作者 <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · 吉祥物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zhengyin--noonwake</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zhengyin--noonwake/gifs/idle.gif" alt="正音 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zhengyin--noonwake/gifs/waving.gif" alt="正音 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zhengyin--noonwake/gifs/running-right.gif" alt="正音 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zhengyin--noonwake/gifs/waiting.gif" alt="正音 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zhengyin--noonwake/gifs/review.gif" alt="正音 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/happynailong--aquaxyy">大笑奶龙</a> · 作者 @aquaxyy · 吉祥物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- happynailong--aquaxyy</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/happynailong--aquaxyy/gifs/idle.gif" alt="大笑奶龙 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/happynailong--aquaxyy/gifs/waving.gif" alt="大笑奶龙 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/happynailong--aquaxyy/gifs/running-right.gif" alt="大笑奶龙 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/happynailong--aquaxyy/gifs/waiting.gif" alt="大笑奶龙 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/happynailong--aquaxyy/gifs/review.gif" alt="大笑奶龙 review" width="120" height="130"></td></tr>
</table>

### 动物伙伴

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/becky--natewanggg">Becky</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- becky--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/becky--natewanggg/gifs/idle.gif" alt="Becky idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/becky--natewanggg/gifs/waving.gif" alt="Becky waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/becky--natewanggg/gifs/running-right.gif" alt="Becky running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/becky--natewanggg/gifs/waiting.gif" alt="Becky waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/becky--natewanggg/gifs/review.gif" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bubu--gbn666">Bubu</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bubu--gbn666</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bubu--gbn666/gifs/idle.gif" alt="Bubu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bubu--gbn666/gifs/waving.gif" alt="Bubu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bubu--gbn666/gifs/running-right.gif" alt="Bubu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bubu--gbn666/gifs/waiting.gif" alt="Bubu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/bubu--gbn666/gifs/review.gif" alt="Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · 作者 <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- corgi-companion--cxian0928-afk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/corgi-companion--cxian0928-afk/gifs/idle.gif" alt="Corgi Companion idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/corgi-companion--cxian0928-afk/gifs/waving.gif" alt="Corgi Companion waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/corgi-companion--cxian0928-afk/gifs/running-right.gif" alt="Corgi Companion running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/corgi-companion--cxian0928-afk/gifs/waiting.gif" alt="Corgi Companion waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/corgi-companion--cxian0928-afk/gifs/review.gif" alt="Corgi Companion review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/desk-otter--zihualiu1997">Desk Otter</a> · 作者 <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- desk-otter--zihualiu1997</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/desk-otter--zihualiu1997/gifs/idle.gif" alt="Desk Otter idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/desk-otter--zihualiu1997/gifs/waving.gif" alt="Desk Otter waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/desk-otter--zihualiu1997/gifs/running-right.gif" alt="Desk Otter running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/desk-otter--zihualiu1997/gifs/waiting.gif" alt="Desk Otter waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/desk-otter--zihualiu1997/gifs/review.gif" alt="Desk Otter review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/diandian--lllucasxu">Diandian</a> · 作者 <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- diandian--lllucasxu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diandian--lllucasxu/gifs/idle.gif" alt="Diandian idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diandian--lllucasxu/gifs/waving.gif" alt="Diandian waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diandian--lllucasxu/gifs/running-right.gif" alt="Diandian running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diandian--lllucasxu/gifs/waiting.gif" alt="Diandian waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/diandian--lllucasxu/gifs/review.gif" alt="Diandian review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dudu-bubu--clembuilds">Dudu & Bubu</a> · 作者 @clembuilds · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dudu-bubu--clembuilds</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dudu-bubu--clembuilds/gifs/idle.gif" alt="Dudu & Bubu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dudu-bubu--clembuilds/gifs/waving.gif" alt="Dudu & Bubu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dudu-bubu--clembuilds/gifs/running-right.gif" alt="Dudu & Bubu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dudu-bubu--clembuilds/gifs/waiting.gif" alt="Dudu & Bubu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dudu-bubu--clembuilds/gifs/review.gif" alt="Dudu & Bubu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/ella-wave--sehjk">Ella Wave</a> · 作者 @sehjk · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ella-wave--sehjk</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ella-wave--sehjk/gifs/idle.gif" alt="Ella Wave idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ella-wave--sehjk/gifs/waving.gif" alt="Ella Wave waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ella-wave--sehjk/gifs/running-right.gif" alt="Ella Wave running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ella-wave--sehjk/gifs/waiting.gif" alt="Ella Wave waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/ella-wave--sehjk/gifs/review.gif" alt="Ella Wave review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/fleta--natewanggg">Fleta</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- fleta--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/fleta--natewanggg/gifs/idle.gif" alt="Fleta idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/fleta--natewanggg/gifs/waving.gif" alt="Fleta waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/fleta--natewanggg/gifs/running-right.gif" alt="Fleta running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/fleta--natewanggg/gifs/waiting.gif" alt="Fleta waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/fleta--natewanggg/gifs/review.gif" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/frankie--aygunvarol">Frankie</a> · 作者 <a href="https://github.com/AygunVarol">@AygunVarol</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frankie--aygunvarol</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frankie--aygunvarol/gifs/idle.gif" alt="Frankie idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frankie--aygunvarol/gifs/waving.gif" alt="Frankie waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frankie--aygunvarol/gifs/running-right.gif" alt="Frankie running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frankie--aygunvarol/gifs/waiting.gif" alt="Frankie waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/frankie--aygunvarol/gifs/review.gif" alt="Frankie review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/jiji--yena">Jiji</a> · 作者 @yena · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- jiji--yena</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/jiji--yena/gifs/idle.gif" alt="Jiji idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/jiji--yena/gifs/waving.gif" alt="Jiji waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/jiji--yena/gifs/running-right.gif" alt="Jiji running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/jiji--yena/gifs/waiting.gif" alt="Jiji waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/jiji--yena/gifs/review.gif" alt="Jiji review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/kimoju--andiac">Kimoju</a> · 作者 @andiac · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- kimoju--andiac</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kimoju--andiac/gifs/idle.gif" alt="Kimoju idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kimoju--andiac/gifs/waving.gif" alt="Kimoju waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kimoju--andiac/gifs/running-right.gif" alt="Kimoju running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kimoju--andiac/gifs/waiting.gif" alt="Kimoju waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/kimoju--andiac/gifs/review.gif" alt="Kimoju review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/little-sheep--mingdong">Little Sheep</a> · 作者 @MingDong · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- little-sheep--mingdong</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-sheep--mingdong/gifs/idle.gif" alt="Little Sheep idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-sheep--mingdong/gifs/waving.gif" alt="Little Sheep waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-sheep--mingdong/gifs/running-right.gif" alt="Little Sheep running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-sheep--mingdong/gifs/waiting.gif" alt="Little Sheep waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/little-sheep--mingdong/gifs/review.gif" alt="Little Sheep review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mai--dwdestiny">Mai</a> · 作者 <a href="https://github.com/DwDestiny">@DwDestiny</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mai--dwdestiny</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mai--dwdestiny/gifs/idle.gif" alt="Mai idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mai--dwdestiny/gifs/waving.gif" alt="Mai waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mai--dwdestiny/gifs/running-right.gif" alt="Mai running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mai--dwdestiny/gifs/waiting.gif" alt="Mai waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mai--dwdestiny/gifs/review.gif" alt="Mai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mellow-duck--sally-entr">Mellow Duck</a> · 作者 @sally-entr · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mellow-duck--sally-entr</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mellow-duck--sally-entr/gifs/idle.gif" alt="Mellow Duck idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mellow-duck--sally-entr/gifs/waving.gif" alt="Mellow Duck waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mellow-duck--sally-entr/gifs/running-right.gif" alt="Mellow Duck running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mellow-duck--sally-entr/gifs/waiting.gif" alt="Mellow Duck waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mellow-duck--sally-entr/gifs/review.gif" alt="Mellow Duck review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mimi--spacebody">Mimi</a> · 作者 <a href="https://github.com/Spacebody">@Spacebody</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mimi--spacebody</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mimi--spacebody/gifs/idle.gif" alt="Mimi idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mimi--spacebody/gifs/waving.gif" alt="Mimi waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mimi--spacebody/gifs/running-right.gif" alt="Mimi running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mimi--spacebody/gifs/waiting.gif" alt="Mimi waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/mimi--spacebody/gifs/review.gif" alt="Mimi review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miu-meo--lemon-z">Miu Meu</a> · 作者 @lemon-z · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miu-meo--lemon-z</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miu-meo--lemon-z/gifs/idle.gif" alt="Miu Meu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miu-meo--lemon-z/gifs/waving.gif" alt="Miu Meu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miu-meo--lemon-z/gifs/running-right.gif" alt="Miu Meu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miu-meo--lemon-z/gifs/waiting.gif" alt="Miu Meu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/miu-meo--lemon-z/gifs/review.gif" alt="Miu Meu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/moomew-coder-cat--ping">MooMew Coder</a> · 作者 @ping · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- moomew-coder-cat--ping</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/moomew-coder-cat--ping/gifs/idle.gif" alt="MooMew Coder idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/moomew-coder-cat--ping/gifs/waving.gif" alt="MooMew Coder waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/moomew-coder-cat--ping/gifs/running-right.gif" alt="MooMew Coder running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/moomew-coder-cat--ping/gifs/waiting.gif" alt="MooMew Coder waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/moomew-coder-cat--ping/gifs/review.gif" alt="MooMew Coder review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/panda--jason-bai">Panda</a> · 作者 <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- panda--jason-bai</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/panda--jason-bai/gifs/idle.gif" alt="Panda idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/panda--jason-bai/gifs/waving.gif" alt="Panda waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/panda--jason-bai/gifs/running-right.gif" alt="Panda running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/panda--jason-bai/gifs/waiting.gif" alt="Panda waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/panda--jason-bai/gifs/review.gif" alt="Panda review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/rook--klubbyte">Rook</a> · 作者 @klubbyte · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- rook--klubbyte</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rook--klubbyte/gifs/idle.gif" alt="Rook idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rook--klubbyte/gifs/waving.gif" alt="Rook waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rook--klubbyte/gifs/running-right.gif" alt="Rook running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rook--klubbyte/gifs/waiting.gif" alt="Rook waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/rook--klubbyte/gifs/review.gif" alt="Rook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/teddy--danieloleary">Teddy</a> · 作者 <a href="https://github.com/danieloleary">@danieloleary</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- teddy--danieloleary</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/teddy--danieloleary/gifs/idle.gif" alt="Teddy idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/teddy--danieloleary/gifs/waving.gif" alt="Teddy waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/teddy--danieloleary/gifs/running-right.gif" alt="Teddy running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/teddy--danieloleary/gifs/waiting.gif" alt="Teddy waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/teddy--danieloleary/gifs/review.gif" alt="Teddy review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tian-hua-hua--d1a0y1bb</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tian-hua-hua--d1a0y1bb/gifs/idle.gif" alt="Tian Hua Hua idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tian-hua-hua--d1a0y1bb/gifs/waving.gif" alt="Tian Hua Hua waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tian-hua-hua--d1a0y1bb/gifs/running-right.gif" alt="Tian Hua Hua running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tian-hua-hua--d1a0y1bb/gifs/waiting.gif" alt="Tian Hua Hua waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tian-hua-hua--d1a0y1bb/gifs/review.gif" alt="Tian Hua Hua review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/usachi--jack">乌萨奇</a> · 作者 @jack · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- usachi--jack</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/usachi--jack/gifs/idle.gif" alt="乌萨奇 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/usachi--jack/gifs/waving.gif" alt="乌萨奇 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/usachi--jack/gifs/running-right.gif" alt="乌萨奇 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/usachi--jack/gifs/waiting.gif" alt="乌萨奇 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/usachi--jack/gifs/review.gif" alt="乌萨奇 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · 作者 @1wphantom · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dai-dai-nai-you--1wphantom</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dai-dai-nai-you--1wphantom/gifs/idle.gif" alt="呆呆奶油 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dai-dai-nai-you--1wphantom/gifs/waving.gif" alt="呆呆奶油 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dai-dai-nai-you--1wphantom/gifs/running-right.gif" alt="呆呆奶油 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dai-dai-nai-you--1wphantom/gifs/waiting.gif" alt="呆呆奶油 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/dai-dai-nai-you--1wphantom/gifs/review.gif" alt="呆呆奶油 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tuantuan--jbbom">团团</a> · 作者 <a href="https://github.com/JbBom">@JbBom</a> · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tuantuan--jbbom</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tuantuan--jbbom/gifs/idle.gif" alt="团团 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tuantuan--jbbom/gifs/waving.gif" alt="团团 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tuantuan--jbbom/gifs/running-right.gif" alt="团团 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tuantuan--jbbom/gifs/waiting.gif" alt="团团 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tuantuan--jbbom/gifs/review.gif" alt="团团 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/duodong--froggie">多栋</a> · 作者 @froggie · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- duodong--froggie</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/duodong--froggie/gifs/idle.gif" alt="多栋 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/duodong--froggie/gifs/waving.gif" alt="多栋 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/duodong--froggie/gifs/running-right.gif" alt="多栋 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/duodong--froggie/gifs/waiting.gif" alt="多栋 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/duodong--froggie/gifs/review.gif" alt="多栋 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/naiwa--sandytruant">奶蛙</a> · 作者 <a href="https://github.com/sandytruant">@sandytruant</a> · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- naiwa--sandytruant</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/naiwa--sandytruant/gifs/idle.gif" alt="奶蛙 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/naiwa--sandytruant/gifs/waving.gif" alt="奶蛙 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/naiwa--sandytruant/gifs/running-right.gif" alt="奶蛙 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/naiwa--sandytruant/gifs/waiting.gif" alt="奶蛙 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/naiwa--sandytruant/gifs/review.gif" alt="奶蛙 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xiaoba-cat--jack">小八猫</a> · 作者 @jack · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xiaoba-cat--jack</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaoba-cat--jack/gifs/idle.gif" alt="小八猫 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaoba-cat--jack/gifs/waving.gif" alt="小八猫 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaoba-cat--jack/gifs/running-right.gif" alt="小八猫 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaoba-cat--jack/gifs/waiting.gif" alt="小八猫 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaoba-cat--jack/gifs/review.gif" alt="小八猫 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xiaomai--brian-3">小麦 XiaoMai</a> · 作者 @brian-3 · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xiaomai--brian-3</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaomai--brian-3/gifs/idle.gif" alt="小麦 XiaoMai idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaomai--brian-3/gifs/waving.gif" alt="小麦 XiaoMai waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaomai--brian-3/gifs/running-right.gif" alt="小麦 XiaoMai running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaomai--brian-3/gifs/waiting.gif" alt="小麦 XiaoMai waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xiaomai--brian-3/gifs/review.gif" alt="小麦 XiaoMai review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/koukou-penguin--hoody">扣扣企鹅</a> · 作者 @hoody · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- koukou-penguin--hoody</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/koukou-penguin--hoody/gifs/idle.gif" alt="扣扣企鹅 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/koukou-penguin--hoody/gifs/waving.gif" alt="扣扣企鹅 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/koukou-penguin--hoody/gifs/running-right.gif" alt="扣扣企鹅 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/koukou-penguin--hoody/gifs/waiting.gif" alt="扣扣企鹅 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/koukou-penguin--hoody/gifs/review.gif" alt="扣扣企鹅 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/capybara-lulu--jiushu">水豚噜噜</a> · 作者 @jiushu · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- capybara-lulu--jiushu</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/capybara-lulu--jiushu/gifs/idle.gif" alt="水豚噜噜 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/capybara-lulu--jiushu/gifs/waving.gif" alt="水豚噜噜 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/capybara-lulu--jiushu/gifs/running-right.gif" alt="水豚噜噜 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/capybara-lulu--jiushu/gifs/waiting.gif" alt="水豚噜噜 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/capybara-lulu--jiushu/gifs/review.gif" alt="水豚噜噜 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/niumou--jarvis-2">牛哞</a> · 作者 @jarvis-2 · 动物伙伴 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- niumou--jarvis-2</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/niumou--jarvis-2/gifs/idle.gif" alt="牛哞 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/niumou--jarvis-2/gifs/waving.gif" alt="牛哞 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/niumou--jarvis-2/gifs/running-right.gif" alt="牛哞 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/niumou--jarvis-2/gifs/waiting.gif" alt="牛哞 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/niumou--jarvis-2/gifs/review.gif" alt="牛哞 review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/zichao-xiong--z-kzhang">自嘲熊</a> · 作者 @z-kzhang · 动物伙伴 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- zichao-xiong--z-kzhang</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zichao-xiong--z-kzhang/gifs/idle.gif" alt="自嘲熊 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zichao-xiong--z-kzhang/gifs/waving.gif" alt="自嘲熊 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zichao-xiong--z-kzhang/gifs/running-right.gif" alt="自嘲熊 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zichao-xiong--z-kzhang/gifs/waiting.gif" alt="自嘲熊 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/zichao-xiong--z-kzhang/gifs/review.gif" alt="自嘲熊 review" width="120" height="130"></td></tr>
</table>

### 幻想生物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/goblin--rkwap">Goblin</a> · 作者 @rkwap · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- goblin--rkwap</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/goblin--rkwap/gifs/idle.gif" alt="Goblin idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/goblin--rkwap/gifs/waving.gif" alt="Goblin waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/goblin--rkwap/gifs/running-right.gif" alt="Goblin running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/goblin--rkwap/gifs/waiting.gif" alt="Goblin waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/goblin--rkwap/gifs/review.gif" alt="Goblin review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/luna-angel-cat--neve">luna_angel cat</a> · 作者 @neve · 幻想生物 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- luna-angel-cat--neve</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/luna-angel-cat--neve/gifs/idle.gif" alt="luna_angel cat idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/luna-angel-cat--neve/gifs/waving.gif" alt="luna_angel cat waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/luna-angel-cat--neve/gifs/running-right.gif" alt="luna_angel cat running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/luna-angel-cat--neve/gifs/waiting.gif" alt="luna_angel cat waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/luna-angel-cat--neve/gifs/review.gif" alt="luna_angel cat review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 作者 <a href="https://github.com/netizenXuan">@netizenXuan</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- night-neko--netizenxuan</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/night-neko--netizenxuan/gifs/idle.gif" alt="Night Neko idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/night-neko--netizenxuan/gifs/waving.gif" alt="Night Neko waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/night-neko--netizenxuan/gifs/running-right.gif" alt="Night Neko running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/night-neko--netizenxuan/gifs/waiting.gif" alt="Night Neko waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/night-neko--netizenxuan/gifs/review.gif" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/starcorn--alterhq">Starcorn</a> · 作者 <a href="https://github.com/alterhq">@alterhq</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- starcorn--alterhq</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/starcorn--alterhq/gifs/idle.gif" alt="Starcorn idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/starcorn--alterhq/gifs/waving.gif" alt="Starcorn waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/starcorn--alterhq/gifs/running-right.gif" alt="Starcorn running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/starcorn--alterhq/gifs/waiting.gif" alt="Starcorn waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/starcorn--alterhq/gifs/review.gif" alt="Starcorn review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · 作者 <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- xian-xiao-lu--qingyunagi</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xian-xiao-lu--qingyunagi/gifs/idle.gif" alt="Xian Xiao Lu idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xian-xiao-lu--qingyunagi/gifs/waving.gif" alt="Xian Xiao Lu waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xian-xiao-lu--qingyunagi/gifs/running-right.gif" alt="Xian Xiao Lu running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xian-xiao-lu--qingyunagi/gifs/waiting.gif" alt="Xian Xiao Lu waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/xian-xiao-lu--qingyunagi/gifs/review.gif" alt="Xian Xiao Lu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/yuanzai--gaming33">Yuanzai</a> · 作者 <a href="https://github.com/Gaming33">@Gaming33</a> · 幻想生物 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- yuanzai--gaming33</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuanzai--gaming33/gifs/idle.gif" alt="Yuanzai idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuanzai--gaming33/gifs/waving.gif" alt="Yuanzai waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuanzai--gaming33/gifs/running-right.gif" alt="Yuanzai running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuanzai--gaming33/gifs/waiting.gif" alt="Yuanzai waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/yuanzai--gaming33/gifs/review.gif" alt="Yuanzai review" width="120" height="130"></td></tr>
</table>

### 机器人

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/chispa--giiilberto-nm">Chispa</a> · 作者 @giiilberto-nm · 机器人 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- chispa--giiilberto-nm</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/chispa--giiilberto-nm/gifs/idle.gif" alt="Chispa idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/chispa--giiilberto-nm/gifs/waving.gif" alt="Chispa waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/chispa--giiilberto-nm/gifs/running-right.gif" alt="Chispa running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/chispa--giiilberto-nm/gifs/waiting.gif" alt="Chispa waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/chispa--giiilberto-nm/gifs/review.gif" alt="Chispa review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/codenono--dq02">CodeNoNo</a> · 作者 <a href="https://github.com/Dqd02">@Dqd02</a> · 机器人 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- codenono--dq02</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/codenono--dq02/gifs/idle.gif" alt="CodeNoNo idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/codenono--dq02/gifs/waving.gif" alt="CodeNoNo waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/codenono--dq02/gifs/running-right.gif" alt="CodeNoNo running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/codenono--dq02/gifs/waiting.gif" alt="CodeNoNo waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/codenono--dq02/gifs/review.gif" alt="CodeNoNo review" width="120" height="130"></td></tr>
</table>

### 人物头像

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/azuma--tairazuma">Azuma</a> · 作者 @tairazuma · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- azuma--tairazuma</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/azuma--tairazuma/gifs/idle.gif" alt="Azuma idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/azuma--tairazuma/gifs/waving.gif" alt="Azuma waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/azuma--tairazuma/gifs/running-right.gif" alt="Azuma running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/azuma--tairazuma/gifs/waiting.gif" alt="Azuma waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/azuma--tairazuma/gifs/review.gif" alt="Azuma review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tangdouren--carl312">Tangdouren</a> · 作者 <a href="https://github.com/Carl-312">@Carl-312</a> · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tangdouren--carl312</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tangdouren--carl312/gifs/idle.gif" alt="Tangdouren idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tangdouren--carl312/gifs/waving.gif" alt="Tangdouren waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tangdouren--carl312/gifs/running-right.gif" alt="Tangdouren running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tangdouren--carl312/gifs/waiting.gif" alt="Tangdouren waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tangdouren--carl312/gifs/review.gif" alt="Tangdouren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/guga--circus">咕嘎</a> · 作者 @circus · 人物头像 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- guga--circus</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/guga--circus/gifs/idle.gif" alt="咕嘎 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/guga--circus/gifs/waving.gif" alt="咕嘎 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/guga--circus/gifs/running-right.gif" alt="咕嘎 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/guga--circus/gifs/waiting.gif" alt="咕嘎 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/guga--circus/gifs/review.gif" alt="咕嘎 review" width="120" height="130"></td></tr>
</table>

### 网络梗图

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · 作者 <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · 网络梗图 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- katana-cheems--thankyou-cheems</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/katana-cheems--thankyou-cheems/gifs/idle.gif" alt="Katana Cheems idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/katana-cheems--thankyou-cheems/gifs/waving.gif" alt="Katana Cheems waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/katana-cheems--thankyou-cheems/gifs/running-right.gif" alt="Katana Cheems running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/katana-cheems--thankyou-cheems/gifs/waiting.gif" alt="Katana Cheems waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/katana-cheems--thankyou-cheems/gifs/review.gif" alt="Katana Cheems review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/maodie--octane0411">耄耋</a> · 作者 <a href="https://github.com/Octane0411">@Octane0411</a> · 网络梗图 · v2</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- maodie--octane0411</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/maodie--octane0411/gifs/idle.gif" alt="耄耋 idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/maodie--octane0411/gifs/waving.gif" alt="耄耋 waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/maodie--octane0411/gifs/running-right.gif" alt="耄耋 running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/maodie--octane0411/gifs/waiting.gif" alt="耄耋 waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/maodie--octane0411/gifs/review.gif" alt="耄耋 review" width="120" height="130"></td></tr>
</table>

### 物件与道具

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/spellbook--seymour">Spellbook</a> · 作者 @seymour · 物件与道具 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- spellbook--seymour</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/spellbook--seymour/gifs/idle.gif" alt="Spellbook idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/spellbook--seymour/gifs/waving.gif" alt="Spellbook waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/spellbook--seymour/gifs/running-right.gif" alt="Spellbook running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/spellbook--seymour/gifs/waiting.gif" alt="Spellbook waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/spellbook--seymour/gifs/review.gif" alt="Spellbook review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/tiny-crt--chochou">Tiny CRT</a> · 作者 @chochou · 物件与道具 · v1</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- tiny-crt--chochou</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tiny-crt--chochou/gifs/idle.gif" alt="Tiny CRT idle" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tiny-crt--chochou/gifs/waving.gif" alt="Tiny CRT waving" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tiny-crt--chochou/gifs/running-right.gif" alt="Tiny CRT running-right" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tiny-crt--chochou/gifs/waiting.gif" alt="Tiny CRT waiting" width="120" height="130"></td><td><img src="https://awesome-codex-pet.pages.dev/assets/previews/tiny-crt--chochou/gifs/review.gif" alt="Tiny CRT review" width="120" height="130"></td></tr>
</table>

## 投稿

最快的方式是打开[网站上的制作与投稿指南](https://awesome-codex-pet.pages.dev/guide)。里面讲清 V1 / V2、逐动作精修、紫边绿边处理、成品结构、授权署名和精品验收标准，也可以一键在 ChatGPT 中打开完整的 Codex 任务。

也可以直接基于仓库工作：

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

- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 保留或修复旧版 8x9 v1 宠物
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 创建或升级带 16 个环视方向的 8x11 v2 宠物

调用时要显式选择 skill。升级已有宠物时，把现有的 `pet.json` 和 `spritesheet.webp` 交给 `$hatch-pet-v2`；通过审核的第 0–8 行会被保留，不会重新生成。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
