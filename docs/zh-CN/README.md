# Awesome Codex Pet

简体中文 | [English](../../README.md)

一个收集社区 Codex 小宠物的精选列表，提供快速安装命令和轻量可分享的 pet 包。

每个 pet 都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── pet.json
└── spritesheet.webp
```

仓库元数据、预览图、参考图和 QA 文件可以和它放在一起，但真正安装只需要 `pet.json` 和 `spritesheet.webp`。

## 快速安装

先安装依赖：

```bash
npm install
python -m pip install -r requirements.txt
```

查看当前仓库里的 pet：

```bash
npm run install:pet -- --list
```

安装某个 pet：

```bash
npm run install:pet -- mikoto--lingxiaotian
```

默认安装位置是 `~/.codex/pets/<pet-id>/`。如果需要改位置，可以使用 `CODEX_HOME` 或 `--codex-home`。

## Pet 收录

### Anime and Game Fan Art

| 预览                                                                                                                                                                                                                                 | Pet                                       | 作者         | 安装                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ------------ | --------------------------------------------- |
| ![Mikoto idle](../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif) ![Mikoto waving](../../assets/previews/mikoto--lingxiaotian/gifs/waving.gif) ![Mikoto running](../../assets/previews/mikoto--lingxiaotian/gifs/running.gif) | [Mikoto](../../pets/mikoto--lingxiaotian) | Lingxiaotian | `npm run install:pet -- mikoto--lingxiaotian` |

### Original Characters

暂无收录。

### Animals and Creatures

暂无收录。

### Robots and Mascots

暂无收录。

### Memes and Internet Icons

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

提交 PR 前请运行：

```bash
npm run previews
npm run validate
npm run lint
```

## 制作 Pet

仓库里包含用于制作 Codex pet 的 skill：

- [skills/hatch-pet](../../skills/hatch-pet)

它包含图集布局、动画状态、生成流程、QA 标准和打包脚本。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

如果后续你为仓库补充统一许可证，文档部分可以跟随仓库许可证发布。

每个 pet 资源本身可以有自己的许可证，贡献者需要在各自目录里明确说明。
