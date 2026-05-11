# 贡献指南

简体中文 | [English](../en/CONTRIBUTING.md)

感谢你为 Awesome Codex Pet 投稿。

这是一个精选型仓库，所以维护者可能会为了统一风格，调整标题、分类、排序、预览图位置和说明文案。

## 投稿前

- 检查仓库里是否已经有相似 pet
- 确认这个 pet 可以被 Codex 正常安装
- 确认作者信息和许可证信息清楚

## 推荐流程

1. 如果想先确认是否适合收录或该放哪个分类，可以先开一个 pet submission issue。
2. 准备一个独立目录：`pets/<pet-slug>--<author-slug>/`。
3. 尽量一个 PR 只提交一个 pet。
4. 只提交 `pets/<pet-id>/` 下的最终三件套。
5. 不要在贡献者 PR 里提交 README、`pets.json` 或预览生成物。

## 目录标准

每个 pet 投稿建议包含：

- `submission.json`：仓库侧元数据
- `pet.json`：Codex 运行时元数据
- `spritesheet.webp`：安装用 spritesheet

不要把自动生成的预览图、QA 输出、参考图或 README 文件放进 pet 目录。生成的预览统一放在 `assets/previews/<pet-id>/`，并由维护者或 CI 在合并后更新。

## `submission.json` 结构

使用下面这个仓库侧结构：

```json
{
  "slug": "mikoto--lingxiaotian",
  "pet_slug": "mikoto",
  "author_slug": "lingxiaotian",
  "name": "Mikoto",
  "author": "your-name-or-handle",
  "primary_category": "Anime Characters",
  "tags": ["anime", "electric", "schoolgirl"],
  "source_type": "fan-art",
  "source_url": "https://example.com/original-post",
  "license": "Specify the asset license clearly",
  "preview_image": "../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif",
  "codex_install": {
    "pet_json": "pet.json",
    "spritesheet": "spritesheet.webp"
  }
}
```

## PR 检查清单

- 一个 PR 只提交一个 pet
- 目录名使用清晰的 `pet-slug--author-slug`
- pet 目录只包含 `submission.json`、`pet.json` 和 `spritesheet.webp`
- `pet.json` 里的 `id` 与目录名一致
- `submission.json` 已填写
- 作者信息和许可证信息清楚
- 贡献者 PR 不包含 `README.md`、`docs/zh-CN/README.md`、`pets.json` 或 `assets/previews/<pet-id>/`
- `npm run validate:pr` 通过
- 快速安装命令可用：`npm run install:pet -- <slug> --codex-home /tmp/codex-pet-test`
- 不包含无关文件

维护者在合并后统一重新生成预览和仓库索引：

```bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
```

## 收录规则

维护者可能会拒绝以下投稿：

- 许可证不清楚
- 文件无法安装
- 分类有明显误导
- 与现有 pet 过于重复

## 分类

当前主分类：

- Anime Characters
- Original Characters
- Memes
- Animals
- Robots
- Others

更多说明见 [categories.md](./categories.md)。
