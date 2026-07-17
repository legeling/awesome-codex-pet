# Awesome Codex Pet Agent Guide

本文件面向在本仓库内工作的 AI coding agents。

默认要求：

- 默认使用中文与用户沟通，除非用户明确要求英文。
- 优先做出可提交的仓库改动，而不是只停留在分析。
- 不要把过程产物混进最终 pet 包。

## Pet Skill 版本

- `$hatch-pet-v1` 是仓库保留的旧版产线，输出 `8x9`、`1536x1872` 的 v1 spritesheet；维护现有仓库 pet 时使用它。
- `$hatch-pet-v2` 是从当前 Codex App 内置 skill 同步的 v2 产线，输出 `8x11`、`1536x2288` 的 spritesheet，并要求 `pet.json.spriteVersionNumber: 2` 与 16 个环视方向。
- 调用时必须显式选择版本。v1 与 v2 都可以收录，但 `spriteVersionNumber`、图集尺寸和实际行数必须匹配。

## 1. 项目是什么

`awesome-codex-pet` 是一个收集和分发 Codex 小宠物的仓库。

它同时承担三件事：

- 收录最终可安装的 pet 成品
- 生成 README 里的动作预览
- 提供无需 clone 仓库的一键安装方式

这个仓库不是宠物制作运行目录本身。制作过程中的参考图、QA 视频、调试文件、临时输出，可以保留在本地，但不应该成为 Git 跟踪内容。

## 2. 仓库里的真成品

每个 pet 目录只允许保留以下三个文件：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

必须遵守：

- 目录名格式固定为 `pet-slug--author-slug`
- `pet.json.id` 必须与目录名完全一致
- `pet.json.spritesheetPath` 固定为 `spritesheet.webp`
- v1 的 `spriteVersionNumber` 可以省略或设为 `1`，`spritesheet.webp` 必须是 `1536x1872` 的 8x9 图集
- v2 必须设置 `spriteVersionNumber: 2`，`spritesheet.webp` 必须是 `1536x2288` 的 8x11 图集，最后两行包含 16 个环视方向
- `spritesheet.webp` 必须是最终运行时资源，不要放过程版

不要把这些文件放进 `pets/<pet-id>/`：

- `qa/`
- `videos/`
- `*.mp4`
- `contact-sheet.png`
- 参考图
- layout guides
- prompts
- decoded frames
- repair archive

## 3. 生成物与来源文件

仓库中允许在本地或 CI 生成的自动生成物主要有：

- `assets/previews/<pet-id>/contact-sheet.png`
- `assets/previews/<pet-id>/gifs/*.gif`
- `README.md`
- `docs/zh-CN/README.md`
- `pets.json`

其中 `assets/previews/<pet-id>/` 默认视为本地产物或部署产物，不作为长期 Git 跟踪内容。

这些文件不是手写维护优先项。除非只是极小文案修正，否则应优先修改生成脚本，再重新生成。

相关脚本：

- `scripts/generate-pet-previews.py`
- `scripts/generate-readmes.mjs`
- `scripts/validate-pets.mjs`
- `scripts/install-pet.sh`
- `scripts/install-pet.ps1`
- `scripts/install-pet.mjs`

## 4. 本地过程目录

以下内容允许存在于本地，但默认不应被 Git 跟踪：

- `output/`
- `pets/*/qa/`
- 本地缓存
- hatch-pet 运行目录

如果发现这些内容进入 `git status`，应优先通过 `.gitignore` 处理，而不是把它们并入提交。

## 5. 添加或更新 pet 的标准流程

当新增或更新一个 pet 时，按下面顺序完成：

1. 准备最终三件套：
   - `submission.json`
   - `pet.json`
   - `spritesheet.webp`
2. 确认目录名、`pet.json.id`、作者 slug 一致。
3. 确认 `spriteVersionNumber` 与 v1/v2 图集尺寸一致。
4. 运行：

```bash
npm run previews
npm run readmes
npm run validate
npm run lint
```

5. 确认 README 中已出现该 pet 和正确版本。
6. 确认 `pets.json` 已更新。
7. 确认 `assets/previews/<pet-id>/` 已在本地或 CI 中生成；v2 contact sheet 应包含 11 行。
8. 确认 `pets/<pet-id>/` 里仍然只有三个文件。

如果用户新增的是 hatch-pet 输出目录中的 pet，不要直接提交整个运行目录。应只把最终的 `spritesheet.webp` 和元数据落进正式 `pets/` 结构。

## 6. README 与文档更新规则

以下情况必须更新生成内容：

- 新增 pet
- 删除 pet
- 修改 pet 名称、作者、分类、许可证、描述
- 修改安装命令模板
- 修改预览图生成策略

更新后至少同步这些文件：

- `README.md`
- `docs/zh-CN/README.md`
- `pets.json`

如果只是改仓库介绍、贡献规则、分类说明，也要检查：

- `docs/en/`
- `docs/zh-CN/`
- `CONTRIBUTING.md`
- `.github/ISSUE_TEMPLATE/`

宠物名称以 `submission.json.name` 作为必填默认值。投稿者可以选择是否支持双语：支持时添加 `localized_names`，并同时提供非空的 `en` 与 `zh`；不支持时省略该字段。网站必须根据当前语言选择名称，并在缺少匹配语言时回退到 `name`，不得自动臆造翻译。

## 7. 安装链路规则

本仓库的对外安装方式优先是远程直装，而不是要求用户 clone 仓库。

当前主安装方式：

```bash
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- <pet-id>
```

Windows 对应：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet <pet-id>"
```

因此：

- 新增 pet 后必须保证 `pets.json` 同步更新
- README 中单 pet 的安装命令应使用远程安装脚本
- 修改安装逻辑时，需同时检查 bash 与 PowerShell 两条链路

## 8. 许可证与收录边界

默认约定：

- 代码和脚本：`MIT`
- pet 资产和自动生成预览：`CC BY-NC 4.0`

投稿不强制使用某个正式许可证名称。`submission.json.license` 可以填写 SPDX/Creative Commons 等正式许可证，也可以填写清楚的自定义使用说明；没有正式许可证时，至少必须明确“仅限非商业使用/禁止商用”。提交者仍需确认自己有权投稿并如实说明作者和素材来源；原创、AI 生成或无法公开链接的素材可以不提供公开 `source_url`，但应在来源类型、描述或使用说明中交代情况。

对于公开网页来源的 pet：

- 没有明确再分发授权时，不要直接把素材拷进仓库
- 可先作为外链候选或待授权候选
- 不要把“能下载”误判为“可直接收录”

## 9. 代码修改偏好

在本仓库内，优先遵守以下原则：

- 手工编辑文件时使用 `apply_patch`
- 不要随意改动已生成的二进制资源，除非这是任务的一部分
- 不要修改用户未要求回退的内容
- 不要删除本地过程目录中的内容，除非用户明确要求清理本地文件

如果用户只是要求“不要被 Git 追踪”，优先通过 `.gitignore` 解决，而不是强制删除本地文件。

## 10. 完成定义

当一个与 pet 收录相关的任务完成时，至少要满足：

- `git status` 中没有意外的过程产物待提交
- `npm run validate` 通过
- `npm run lint` 通过
- 目标 pet 已在 README 和 `pets.json` 中出现
- `pets/<pet-id>/` 保持三文件结构

如果用户明确要求提交或推送，再执行 Git 提交与推送。
