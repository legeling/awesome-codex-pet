# 投稿指南

简体中文 | [English](../en/submission-guide.md)

这个仓库欢迎社区制作的 Codex pet 投稿。

## 目标

每份投稿都应该：

- 容易审核
- 容易预览
- 容易复用
- 清楚标明作者和许可证

## 推荐目录结构

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

pet 目录只应该包含这三个文件。

## 必填信息

请提供：

- `pet-slug--author-slug` 格式的目录名
- 主分类
- pet 名称
- 作者名或 handle
- 简短描述
- 来源链接或原始发布链接
- 资源许可证

## 审核要求

- `pet.json` 必须可以安装
- `pet.json` 的 `id` 必须与目录名一致
- `spritesheet.webp` 应作为 Codex 运行时资源一起提交
- 仓库侧元数据放在 `submission.json`，不要塞进 `pet.json`
- 自动生成的预览材料放在 `assets/previews/<pet-id>/`
- 自动生成的预览图、QA 输出、参考图和 README 文件不要放进 `pets/<pet-id>/`
- 强烈建议一个 PR 只提交一个 pet

## 预览图生成

预览图会从 `spritesheet.webp` 自动生成：

```bash
python -m pip install -r requirements.txt
npm run previews
```

它会生成：

```text
assets/previews/<pet-id>/contact-sheet.png
assets/previews/<pet-id>/gifs/<state>.gif
```

CI 会运行同一条命令，并检查生成的预览是否已经提交。
所有动作 GIF 都会使用相同像素尺寸：`384x416`。

## 快速安装检查

提交 PR 前，请确认这个 pet 可以安装：

```bash
npm run install:pet -- pet-slug--author-slug --codex-home /tmp/codex-pet-test
```

命令应该生成：

```text
/tmp/codex-pet-test/pets/<pet-id>/
├── pet.json
└── spritesheet.webp
```

## 资源建议

- 使用清晰的文件名
- 至少包含一张预览图
- 展示图背景尽量干净
- 预览图尽量保持一致比例

## 说明

随着 Codex pet 生态稳定，文件校验规则可能会继续演进。

目前比起强制复杂格式，更重要的是保持一致、清楚、可安装。
