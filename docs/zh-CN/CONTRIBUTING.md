# 贡献指南

简体中文 | [English](../en/CONTRIBUTING.md)

感谢你为 Awesome Codex Pet 投稿。

这是一个精选型仓库，所以维护者可能会为了统一风格，调整标题、分类、排序、预览图位置和说明文案。

## 投稿前

- 检查仓库里是否已经有相似 pet
- 确认这个 pet 可以被 Codex 正常安装
- 确认作者信息和素材使用说明清楚

## 选择一种投稿方式

### 用 Codex 请求制作宠物

适合只有角色、概念或参考资料，还没有完成宠物的用户。网站可以在本地 Codex 中打开一条中文任务，也可以复制同一份提示词交给其他 AI 助手。任务会查询 `pets.json` 和现有 Issues、补齐必要信息，再创建结构清楚的 `[Request]` Issue。整个过程不需要克隆仓库；Issue 代表进入社区讨论，不代表已经接受或承诺交付。

真实宠物、原创角色、头像等依赖具体外观的请求，必须提供维护者可以打开的图片附件或公开图片链接。私聊图片、本地路径、文件名和文字描述都不算附件。

### 用 Codex 制作或提交宠物

可以从角色和参考图开始现场制作、继续完善制作中的宠物，也可以把现成的宠物目录或 spritesheet 交给 Codex。它会按照[仓库投稿 Skill](../../.agents/skills/submit-codex-pet)完成制作或修复，检查重复、署名、许可、元数据、图集尺寸、动画质量和透明边缘，再通过 GitHub API 创建独立分支和 PR，不要求用户完整克隆仓库。没有安装 Codex 时，可以复制网站提供的提示词交给其他具备相应能力的 AI 助手。

工作流会先补齐来源说明、修复影响视觉质量的现有素材，并重试 GitHub 授权。缺少公开来源链接或正式许可证名称不会阻塞投稿，只要作者和来源说明真实，并明确仅限非商业使用。只有确实无法解决的质量材料、重复判断或 GitHub 授权问题，才会在投稿人同意后创建简洁的 `[Submission]` Issue，并附上维护者可以直接查看的材料。

已经完成的投稿必须创建 **Ready for review** 的正式 PR。只有作品确实尚未完成时才使用 Draft，并写清剩余工作。

如果宠物是在完成已有请求，发布 PR 前必须先在该 Issue 留下认领或进度评论，把请求链接保留在 `submission.json.source_url`，并在 PR 正文写入 `Closes #<编号>`。仓库工作流会把 PR 链接回写到 Issue、将其标记为 `status: in-progress`，并且只在 PR 合并后自动关闭 Issue、改为 `status: completed`。维护者直接提交到 main 时，工作流也会根据 `source_url` 兜底同步完成状态，但仍然优先使用独立 PR。成品仍在审核时不要手工关闭请求。

### 高级用户提交 PR

熟悉 GitHub 的贡献者可以使用网页编辑器、Codespaces 或带 blob 过滤的稀疏克隆。准备 `pets/<pet-slug>--<author-slug>/` 下的独立三件套，一个 PR 只提交一只宠物，不要提交 README、`pets.json` 或预览生成物。

## 提交 PR 后会发生什么

提交 PR 代表进入视觉审核，并不表示原图会不经调整直接合并。维护者会查看接触表并逐帧播放动画，重点检查：

- 人物朝向和 v2 的 16 个环视方向是否正确
- 每个动作的语义是否清楚，跑步时左右脚是否自然交替
- 尺寸、基线、角色一致性和动画衔接是否稳定
- 棋盘格、深色和浅色背景下的透明边缘，是否残留绿边、紫边、青边、洋红边或其他色键颜色

请把 contact sheet 作为图片附件放在 PR 正文中。PR CI 也会为变更的宠物生成预览并上传为可下载的 workflow artifact；这些预览不能提交进宠物目录。

必要时，维护者会在合并前修复或替换单帧、动作行、环视方向、`spritesheet.webp` 或元数据。优化应保留投稿角色与作者署名，同时使宠物达到仓库的运行和视觉质量要求；如果视觉变化较大，维护者可能会请投稿者再次确认。

仓库使用 [宠物质量审查与升级台账](./pet-quality-tracker.md) 记录逐只复核状态、验收依据、修复证据和 v2 升级决策。CI 通过只代表结构有效，不代表已经完成视觉复核。

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
  "variant_note": "独立制作的 v2 版本，使用自己的 spritesheet。",
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

`tags` 使用稳定的小写 kebab-case 标识符，避免搜索和生成数据跟随界面语言变化。网站会把常见标识符展示成可读的英文或经过维护的中文标签，并同时索引两种形式。新增可复用的描述类 tag 时，应在 `web/lib/tag-localization.ts` 中补充中文显示名；角色名称继续使用投稿者提供的 `localized_names`，不要用 tag 擅自翻译。

`canonical_key` 是角色分组键，不是全局唯一的宠物包 ID。同一个角色的所有版本，包括不同作者独立制作的版本，都使用同一个 key；创作者自有角色使用 `original/<作者>/<名称>`。没有这个字段的旧 pet 仍然有效，审核时会根据名称、作品系列、tags 和来源元数据建立索引。

同一个角色允许不同作者提交各自独立制作的版本。key 已存在时，必须填写 `variant_note`，说明作者、视觉设计、动画或运行时版本上的区别。spritesheet 必须独立制作：即使更换目录名或作者，逐字节完全相同的素材仍会被拒绝。同一作者通常应该直接更新原宠物包；只有确实属于不同版本时才另建一个包。

`npm run validate:pr` 要求新投稿必须提供这个 key。修改没有 key 的旧条目时只会提示警告，不会阻塞素材修复，因此不需要一次性迁移整个目录。不同 key 之间如果名称或作品元数据相同，也只会产生人工复核警告，不会自动拒绝。

投稿不强制填写某个正式许可证名称。`license` 字段既可以写公认许可证，也可以写清楚的自然语言使用条件；没有正式许可证时，至少要明确“仅限非商业使用/禁止商用”。原创、AI 生成或私有来源的作品可以没有公开 `source_url`，但必须在 `source_type`、描述或使用说明中如实交代来源。

## PR 检查清单

- 一个 PR 只提交一个 pet
- 目录名使用清晰的 `pet-slug--author-slug`
- pet 目录只包含 `submission.json`、`pet.json` 和 `spritesheet.webp`
- `pet.json` 里的 `id` 与目录名一致
- `spriteVersionNumber` 与 spritesheet 尺寸符合对应的 v1 或 v2 规范
- v2 的 16 个环视方向已作为完整循环审核
- `submission.json` 已填写
- `canonical_key` 正确归入角色分组；后续独立版本已经填写 `variant_note`
- 作者信息和素材使用说明清楚；正式许可证或明确的“仅限非商业使用”声明均可
- 贡献者 PR 不包含 `README.md`、`docs/zh-CN/README.md`、`pets.json`、`install-manifest.json` 或 `assets/previews/<pet-id>/` 下的生成预览二进制
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
- 直接换壳提交逐字节相同的素材，或新增版本没有说明有意义的独立差异
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
