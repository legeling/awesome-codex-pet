# 仓库结构

简体中文 | [English](../en/repository-structure.md)

这个仓库会把可安装的 pet 资源和仓库侧元数据分开。

## 为什么这样做

Codex 运行时需要的包很小：

- `pet.json`
- `spritesheet.webp`

但一个社区精选仓库还需要更多上下文：

- 作者和许可证信息
- 分类和来源信息
- 自动生成的预览材料

## 标准 pet 目录

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
```

快速安装只需要这些文件：

```text
pets/
└── pet-slug--author-slug/
    ├── pet.json
    └── spritesheet.webp
```

## 文件角色

- `submission.json`：仓库收录和展示用元数据
- `pet.json`：Codex 运行时使用的元数据
- `spritesheet.webp`：可安装的 spritesheet
- `assets/previews/<pet-id>/`：自动生成的联系表和动作 GIF 预览

pet 目录里不应该包含自动生成的预览图、QA 输出、参考图或 README 文件。

## 目录命名

使用这个格式：

```text
pet-slug--author-slug
```

示例：

- `mikoto--lingxiaotian`
- `desire-engine--alice`
- `desire-engine--bob`

目录名、`submission.json` 里的 `slug`、`pet.json` 里的 `id` 应保持一致。这样同一个角色的不同作者版本可以并存，也方便审核和安装。

## 快速安装器

仓库提供了一个小的 Node.js 安装器：

```bash
npm run install:pet -- pet-slug--author-slug
```

它会把 `pet.json` 和 `spritesheet.webp` 复制到：

```text
~/.codex/pets/<pet-id>/
```

默认安装位置：

- macOS/Linux：`~/.codex/pets/<pet-id>/`
- Windows：`%USERPROFILE%\.codex\pets\<pet-id>\`

如果要安装到其他 Codex 目录，可以使用 `CODEX_HOME` 或 `--codex-home`。
