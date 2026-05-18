<div align="center">

# Awesome Codex Pet

简体中文 | [English](../../README.md)

![pets: 13](https://img.shields.io/badge/pets-13-2ea44f) ![categories: 6](https://img.shields.io/badge/categories-6-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

[**🌐 在线画廊**](https://awesome-codex-pet.pages.dev) · [**⚡ 安装指南**](https://awesome-codex-pet.pages.dev/install) · [**📖 投稿指南**](https://awesome-codex-pet.pages.dev/guide)

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

</div>

社区精选的 Codex 小宠物画廊。在[在线画廊](https://awesome-codex-pet.pages.dev)里浏览动画，一条命令完成安装，通过 GitHub 提交你自己的宠物。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **在线画廊** — [awesome-codex-pet.pages.dev](https://awesome-codex-pet.pages.dev) 提供动画预览、筛选、浏览/安装统计
- **GitHub 原生投稿** — 提 issue 或 PR，剩下的全自动
- **明确许可** — 代码 MIT，宠物资源 CC BY-NC 4.0

每只宠物都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

预览图自动生成到 `assets/previews/<pet-id>/`，不会塞进宠物目录。

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

## 宠物收录

### 动漫人物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/firefly--lingxiaotian">Firefly</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- firefly--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/firefly--lingxiaotian/gifs/idle.gif" alt="Firefly idle" width="120" height="130"></td><td><img src="../../assets/previews/firefly--lingxiaotian/gifs/waving.gif" alt="Firefly waving" width="120" height="130"></td><td><img src="../../assets/previews/firefly--lingxiaotian/gifs/running.gif" alt="Firefly running" width="120" height="130"></td><td><img src="../../assets/previews/firefly--lingxiaotian/gifs/waiting.gif" alt="Firefly waiting" width="120" height="130"></td><td><img src="../../assets/previews/firefly--lingxiaotian/gifs/review.gif" alt="Firefly review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/frieren--lingxiaotian">Frieren</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- frieren--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/frieren--lingxiaotian/gifs/idle.gif" alt="Frieren idle" width="120" height="130"></td><td><img src="../../assets/previews/frieren--lingxiaotian/gifs/waving.gif" alt="Frieren waving" width="120" height="130"></td><td><img src="../../assets/previews/frieren--lingxiaotian/gifs/running.gif" alt="Frieren running" width="120" height="130"></td><td><img src="../../assets/previews/frieren--lingxiaotian/gifs/waiting.gif" alt="Frieren waiting" width="120" height="130"></td><td><img src="../../assets/previews/frieren--lingxiaotian/gifs/review.gif" alt="Frieren review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mahiro--lingxiaotian">Mahiro</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mahiro--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/mahiro--lingxiaotian/gifs/idle.gif" alt="Mahiro idle" width="120" height="130"></td><td><img src="../../assets/previews/mahiro--lingxiaotian/gifs/waving.gif" alt="Mahiro waving" width="120" height="130"></td><td><img src="../../assets/previews/mahiro--lingxiaotian/gifs/running.gif" alt="Mahiro running" width="120" height="130"></td><td><img src="../../assets/previews/mahiro--lingxiaotian/gifs/waiting.gif" alt="Mahiro waiting" width="120" height="130"></td><td><img src="../../assets/previews/mahiro--lingxiaotian/gifs/review.gif" alt="Mahiro review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/mikoto--lingxiaotian">Mikoto</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- mikoto--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="Mikoto idle" width="120" height="130"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="Mikoto waving" width="120" height="130"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/running.gif" alt="Mikoto running" width="120" height="130"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/waiting.gif" alt="Mikoto waiting" width="120" height="130"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="Mikoto review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/miku--lingxiaotian">Miku</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- miku--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/miku--lingxiaotian/gifs/idle.gif" alt="Miku idle" width="120" height="130"></td><td><img src="../../assets/previews/miku--lingxiaotian/gifs/waving.gif" alt="Miku waving" width="120" height="130"></td><td><img src="../../assets/previews/miku--lingxiaotian/gifs/running.gif" alt="Miku running" width="120" height="130"></td><td><img src="../../assets/previews/miku--lingxiaotian/gifs/waiting.gif" alt="Miku waiting" width="120" height="130"></td><td><img src="../../assets/previews/miku--lingxiaotian/gifs/review.gif" alt="Miku review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/paimon--lingxiaotian">Paimon</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- paimon--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/paimon--lingxiaotian/gifs/idle.gif" alt="Paimon idle" width="120" height="130"></td><td><img src="../../assets/previews/paimon--lingxiaotian/gifs/waving.gif" alt="Paimon waving" width="120" height="130"></td><td><img src="../../assets/previews/paimon--lingxiaotian/gifs/running.gif" alt="Paimon running" width="120" height="130"></td><td><img src="../../assets/previews/paimon--lingxiaotian/gifs/waiting.gif" alt="Paimon waiting" width="120" height="130"></td><td><img src="../../assets/previews/paimon--lingxiaotian/gifs/review.gif" alt="Paimon review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/reimu--lingxiaotian">Reimu</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- reimu--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/reimu--lingxiaotian/gifs/idle.gif" alt="Reimu idle" width="120" height="130"></td><td><img src="../../assets/previews/reimu--lingxiaotian/gifs/waving.gif" alt="Reimu waving" width="120" height="130"></td><td><img src="../../assets/previews/reimu--lingxiaotian/gifs/running.gif" alt="Reimu running" width="120" height="130"></td><td><img src="../../assets/previews/reimu--lingxiaotian/gifs/waiting.gif" alt="Reimu waiting" width="120" height="130"></td><td><img src="../../assets/previews/reimu--lingxiaotian/gifs/review.gif" alt="Reimu review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 作者 <a href="https://github.com/QunBoo">@QunBoo</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- dnf-female-ammo--qunboo</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/dnf-female-ammo--qunboo/gifs/idle.gif" alt="女弹药Q idle" width="120" height="130"></td><td><img src="../../assets/previews/dnf-female-ammo--qunboo/gifs/waving.gif" alt="女弹药Q waving" width="120" height="130"></td><td><img src="../../assets/previews/dnf-female-ammo--qunboo/gifs/running.gif" alt="女弹药Q running" width="120" height="130"></td><td><img src="../../assets/previews/dnf-female-ammo--qunboo/gifs/waiting.gif" alt="女弹药Q waiting" width="120" height="130"></td><td><img src="../../assets/previews/dnf-female-ammo--qunboo/gifs/review.gif" alt="女弹药Q review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/bocchi--lingxiaotian">Bocchi</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫人物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- bocchi--lingxiaotian</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/bocchi--lingxiaotian/gifs/idle.gif" alt="Bocchi idle" width="120" height="130"></td><td><img src="../../assets/previews/bocchi--lingxiaotian/gifs/waving.gif" alt="Bocchi waving" width="120" height="130"></td><td><img src="../../assets/previews/bocchi--lingxiaotian/gifs/running.gif" alt="Bocchi running" width="120" height="130"></td><td><img src="../../assets/previews/bocchi--lingxiaotian/gifs/waiting.gif" alt="Bocchi waiting" width="120" height="130"></td><td><img src="../../assets/previews/bocchi--lingxiaotian/gifs/review.gif" alt="Bocchi review" width="120" height="130"></td></tr>
</table>

### 原创角色

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 作者 <a href="https://github.com/netizenXuan">@netizenXuan</a> · 原创角色</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- night-neko--netizenxuan</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/night-neko--netizenxuan/gifs/idle.gif" alt="Night Neko idle" width="120" height="130"></td><td><img src="../../assets/previews/night-neko--netizenxuan/gifs/waving.gif" alt="Night Neko waving" width="120" height="130"></td><td><img src="../../assets/previews/night-neko--netizenxuan/gifs/running.gif" alt="Night Neko running" width="120" height="130"></td><td><img src="../../assets/previews/night-neko--netizenxuan/gifs/waiting.gif" alt="Night Neko waiting" width="120" height="130"></td><td><img src="../../assets/previews/night-neko--netizenxuan/gifs/review.gif" alt="Night Neko review" width="120" height="130"></td></tr>
</table>

### 动物

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/becky--natewanggg">Becky</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- becky--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/becky--natewanggg/gifs/idle.gif" alt="Becky idle" width="120" height="130"></td><td><img src="../../assets/previews/becky--natewanggg/gifs/waving.gif" alt="Becky waving" width="120" height="130"></td><td><img src="../../assets/previews/becky--natewanggg/gifs/running.gif" alt="Becky running" width="120" height="130"></td><td><img src="../../assets/previews/becky--natewanggg/gifs/waiting.gif" alt="Becky waiting" width="120" height="130"></td><td><img src="../../assets/previews/becky--natewanggg/gifs/review.gif" alt="Becky review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/fleta--natewanggg">Fleta</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · 动物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- fleta--natewanggg</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/fleta--natewanggg/gifs/idle.gif" alt="Fleta idle" width="120" height="130"></td><td><img src="../../assets/previews/fleta--natewanggg/gifs/waving.gif" alt="Fleta waving" width="120" height="130"></td><td><img src="../../assets/previews/fleta--natewanggg/gifs/running.gif" alt="Fleta running" width="120" height="130"></td><td><img src="../../assets/previews/fleta--natewanggg/gifs/waiting.gif" alt="Fleta waiting" width="120" height="130"></td><td><img src="../../assets/previews/fleta--natewanggg/gifs/review.gif" alt="Fleta review" width="120" height="130"></td></tr>
</table>

<table>
<tr><th>名称</th><td colspan="5"><a href="../../pets/teddy--danieloleary">Teddy</a> · 作者 <a href="https://github.com/danieloleary">@danieloleary</a> · 动物</td></tr>
<tr><th>安装</th><td colspan="5"><code>curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- teddy--danieloleary</code></td></tr>
<tr><th>动作</th><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>等待</strong></td><td><strong>审阅</strong></td></tr>
<tr><th>预览</th><td><img src="../../assets/previews/teddy--danieloleary/gifs/idle.gif" alt="Teddy idle" width="120" height="130"></td><td><img src="../../assets/previews/teddy--danieloleary/gifs/waving.gif" alt="Teddy waving" width="120" height="130"></td><td><img src="../../assets/previews/teddy--danieloleary/gifs/running.gif" alt="Teddy running" width="120" height="130"></td><td><img src="../../assets/previews/teddy--danieloleary/gifs/waiting.gif" alt="Teddy waiting" width="120" height="130"></td><td><img src="../../assets/previews/teddy--danieloleary/gifs/review.gif" alt="Teddy review" width="120" height="130"></td></tr>
</table>

## 投稿

最快的方式是看[网站上的投稿指南](https://awesome-codex-pet.pages.dev/guide)，里面有分类、目录结构和审核清单。

也可以直接基于仓库工作：

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

目录名使用 `pet-slug--author-slug`，这样同一个角色的不同作者版本可以并存。预览图和 README 收录表都由 CI 自动生成：

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

贡献者 PR 只需提交 `submission.json`、`pet.json` 和 `spritesheet.webp`。预览图、README 收录和 `pets.json` 由维护者或 CI 在合并后统一生成。

## 制作 Pet

- [.agents/skills/hatch-pet](../../.agents/skills/hatch-pet) — 设计、生成、QA、打包的端到端流水线

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
