# 贡献指南

简体中文 | [English](../en/CONTRIBUTING.md)

感谢你为 Awesome Codex Pet 投稿。

这是一个精选型仓库，所以维护者可能会为了统一风格，调整标题、分类、排序、预览图位置和说明文案。

## 投稿前

- 检查仓库里是否已经有相似 pet
- 确认这个 pet 可以被 Codex 正常安装
- 确认作者信息和素材使用说明清楚

## 推荐流程

1. 如果想先确认是否适合收录或该放哪个分类，可以先开一个 pet submission issue。
2. 准备一个独立目录：`pets/<pet-slug>--<author-slug>/`。
3. 尽量一个 PR 只提交一个 pet。
4. 只提交 `pets/<pet-id>/` 下的最终三件套。
5. 不要在贡献者 PR 里提交 README、`pets.json` 或预览生成物。

## 提交 PR 后会发生什么

提交 PR 代表进入视觉审核，并不表示原图会不经调整直接合并。维护者会查看接触表并逐帧播放动画，重点检查：

- 人物朝向和 v2 的 16 个环视方向是否正确
- 每个动作的语义是否清楚，跑步时左右脚是否自然交替
- 尺寸、基线、角色一致性和动画衔接是否稳定
- 棋盘格、深色和浅色背景下的透明边缘，是否残留绿边、紫边、青边、洋红边或其他色键颜色

必要时，维护者会在合并前修复或替换单帧、动作行、环视方向、`spritesheet.webp` 或元数据。优化应保留投稿角色与作者署名，同时使宠物达到仓库的运行和视觉质量要求；如果视觉变化较大，维护者可能会请投稿者再次确认。

## 目录标准

每个 pet 投稿建议包含：

- `submission.json`：仓库侧元数据
- `pet.json`：Codex 运行时元数据
- `spritesheet.webp`：安装用 spritesheet

不要把自动生成的预览图、QA 输出、参考图或 README 文件放进 pet 目录。生成的预览统一放在 `assets/previews/<pet-id>/` 作为本地或 CI 构建产物，并由维护者或 CI 在合并后更新。

## Pet 版本

| 版本 | Spritesheet               | `pet.json`                            |
| ---- | ------------------------- | ------------------------------------- |
| v1   | `1536x1872`，8 列 × 9 行  | 省略 `spriteVersionNumber` 或设为 `1` |
| v2   | `1536x2288`，8 列 × 11 行 | 设置 `spriteVersionNumber: 2`         |

两个版本的第 0–8 行都是标准动作。v2 的第 9–10 行存放 16 个顺时针环视方向。不要把九行图集标成 v2，也不要在补了环视行后漏掉 `spriteVersionNumber: 2`。

v2 运行时清单示例：

```json
{
  "id": "mikoto--lingxiaotian",
  "displayName": "Mikoto",
  "description": "一句简短描述。",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

## `submission.json` 结构

使用下面这个仓库侧结构：

```json
{
  "slug": "mikoto--lingxiaotian",
  "pet_slug": "mikoto",
  "author_slug": "lingxiaotian",
  "name": "Mikoto",
  "localized_names": {
    "en": "Mikoto",
    "zh": "御坂美琴"
  },
  "author": "your-name-or-handle",
  "primary_category": "Anime Characters",
  "canonical_key": "fictional/example/mikoto",
  "tags": ["anime", "electric", "schoolgirl"],
  "source_type": "fan-art",
  "source_url": "https://example.com/original-post",
  "license": "CC BY-NC 4.0，或明确的仅限非商业使用说明",
  "preview_image": "../../assets/previews/mikoto--lingxiaotian/gifs/idle.gif",
  "codex_install": {
    "pet_json": "pet.json",
    "spritesheet": "spritesheet.webp"
  }
}
```

`name` 始终必填，作为没有匹配语言时使用的默认名称。双语名称是可选能力：选择支持双语时，添加 `localized_names`，并同时提供非空的 `en` 与 `zh`；网站会跟随访客当前选择的语言展示。只使用一种语言时，完全省略 `localized_names` 即可。名称由投稿者自己确定，网站不会擅自机器翻译。

`canonical_key` 是去重审核使用的稳定身份键。同一个角色的不同版本使用同一个 key；创作者自有角色使用 `original/<作者>/<名称>`。没有这个字段的旧 pet 仍然有效，审核时会根据名称、tags 和来源元数据建立索引。

投稿不强制填写某个正式许可证名称。`license` 字段既可以写公认许可证，也可以写清楚的自然语言使用条件；没有正式许可证时，至少要明确“仅限非商业使用/禁止商用”，并确认提交者有权投稿。原创、AI 生成或私有来源的作品可以没有公开 `source_url`，但必须在 `source_type`、描述或使用说明中如实交代来源。

## PR 检查清单

- 一个 PR 只提交一个 pet
- 目录名使用清晰的 `pet-slug--author-slug`
- pet 目录只包含 `submission.json`、`pet.json` 和 `spritesheet.webp`
- `pet.json` 里的 `id` 与目录名一致
- `spriteVersionNumber` 与 spritesheet 尺寸符合对应的 v1 或 v2 规范
- v2 的 16 个环视方向已作为完整循环审核
- `submission.json` 已填写
- 作者信息和素材使用说明清楚；正式许可证或明确的“仅限非商业使用”声明均可
- 贡献者 PR 不包含 `README.md`、`docs/zh-CN/README.md`、`pets.json` 或 `assets/previews/<pet-id>/` 下的生成预览二进制
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

- 没有素材使用说明，或未明确至少仅限非商业使用
- 文件无法安装
- 分类有明显误导
- 与现有规范角色或概念过于重复
- 和现有普通人物头像或吉祥物在视觉上可互换

## 分类

当前主分类：

- Game Characters
- Anime Characters
- Original Characters
- Mascots
- Animals
- Fantasy Creatures
- Robots
- Human Avatars
- Memes
- Objects & Props
- Others

更多说明见 [categories.md](./categories.md)。
