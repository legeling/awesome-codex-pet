# Awesome Codex Pet

简体中文 | [English](../../README.md)

![pets: 1](https://img.shields.io/badge/pets-1-2ea44f) ![categories: 5](https://img.shields.io/badge/categories-5-0969da) ![languages: en | zh--CN](https://img.shields.io/badge/languages-en%20%7C%20zh--CN-8250df) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

一个收集社区 Codex 小宠物的精选画廊，自动生成动作预览，并支持一条命令快速安装。

每个 pet 都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

pet 目录只放最终成品文件。预览图会自动生成到 `assets/previews/<pet-id>/`。

## 快速安装

```bash
npm install
npm run install:pet -- --list
npm run install:pet -- mikoto--lingxiaotian
```

默认安装位置：

- macOS/Linux：`~/.codex/pets/<pet-id>/`
- Windows：`%USERPROFILE%\.codex\pets\<pet-id>\`

## Pet 收录

### 动漫与游戏二创

<table>
<tr><th colspan="5"><a href="../../pets/mikoto--lingxiaotian">Mikoto</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · 动漫与游戏二创</th></tr>
<tr><td colspan="5"><code>npm run install:pet -- mikoto--lingxiaotian</code></td></tr>
<tr><td><strong>待机</strong></td><td><strong>挥手</strong></td><td><strong>奔跑</strong></td><td><strong>跳跃</strong></td><td><strong>审阅</strong></td></tr>
<tr><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif" alt="Mikoto idle" width="120"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/waving.gif" alt="Mikoto waving" width="120"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/running.gif" alt="Mikoto running" width="120"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/jumping.gif" alt="Mikoto jumping" width="120"></td><td><img src="../../assets/previews/mikoto--lingxiaotian/gifs/review.gif" alt="Mikoto review" width="120"></td></tr>
</table>

### 原创角色

暂无收录。

### 动物与奇幻生物

暂无收录。

### 机器人与吉祥物

暂无收录。

### 梗图与互联网形象

暂无收录。

## 投稿

目录名使用 `pet-slug--author-slug`，这样同一个角色的不同作者版本可以并存。

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

预览和 README 收录表都是自动生成的：

```bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
```

## 制作 Pet

- [skills/hatch-pet](../../skills/hatch-pet)

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

如果后续你为仓库补充统一许可证，文档部分可以跟随仓库许可证发布。

每个 pet 资源本身可以有自己的许可证，贡献者需要在各自目录里明确说明。
