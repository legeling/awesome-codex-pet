import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { format } from "prettier";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");
const rawBase = "https://raw.githubusercontent.com/legeling/awesome-codex-pet/main";
const websiteUrl = "https://awesome-codex-pet.pages.dev";

const categoryCatalog = JSON.parse(
  readFileSync(join(repoRoot, "categories.json"), "utf8"),
);
const categories = categoryCatalog.map((category) => category.name);
const categoryZh = Object.fromEntries(
  categoryCatalog.map((category) => [category.name, category.label.zh]),
);

const categoryAliases = {
  "Anime and Game Fan Art": "Anime Characters",
  "Game Fan Art": "Game Characters",
  "Animals and Creatures": "Animals",
  "Robots and Mascots": "Robots",
  "Memes and Internet Icons": "Memes",
  "Human Avatars and Profiles": "Human Avatars",
  Objects: "Objects & Props",
};

const previewStates = [
  ["idle", "Idle", "待机"],
  ["waving", "Waving", "挥手"],
  ["running-right", "Running", "奔跑"],
  ["waiting", "Waiting", "等待"],
  ["review", "Review", "审阅"],
];

const featuredSlugs = ["firefly--lingxiaotian"];
const featuredRank = new Map(featuredSlugs.map((slug, index) => [slug, index]));
const trailingSlugs = ["bocchi--lingxiaotian"];
const trailingRank = new Map(trailingSlugs.map((slug, index) => [slug, index]));

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function loadPets() {
  return readdirSync(petsDir)
    .filter((entry) => !entry.startsWith("."))
    .filter((entry) => existsSync(join(petsDir, entry, "submission.json")))
    .map((slug) => {
      const metadata = readJson(join(petsDir, slug, "submission.json"));
      const runtime = readJson(join(petsDir, slug, "pet.json"));
      return {
        ...metadata,
        slug,
        spriteVersionNumber: runtime.spriteVersionNumber ?? 1,
      };
    })
    .sort((a, b) => {
      const rankA = featuredRank.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
      const rankB = featuredRank.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
      if (rankA !== rankB) return rankA - rankB;
      const trailingA = trailingRank.get(a.slug) ?? -1;
      const trailingB = trailingRank.get(b.slug) ?? -1;
      if (trailingA !== trailingB) {
        if (trailingA === -1) return -1;
        if (trailingB === -1) return 1;
        return trailingA - trailingB;
      }
      return a.name.localeCompare(b.name);
    });
}

function badge(label, message, color) {
  const encodedLabel = encodeURIComponent(label);
  const encodedMessage = encodeURIComponent(message);
  return `![${label}: ${message}](https://img.shields.io/badge/${encodedLabel}-${encodedMessage}-${color})`;
}

function badges(pets) {
  return [
    badge("pets", String(pets.length), "2ea44f"),
    badge("categories", String(categories.length), "0969da"),
    badge("languages", "en | zh--CN", "8250df"),
    badge("code", "MIT", "111111"),
    badge("assets", "CC BY--NC 4.0", "f97316"),
    badge("install", "one command", "111111"),
    "[![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)",
  ].join(" ");
}

function authorLink(pet) {
  const handle = pet.author_handle || pet.author_slug || pet.author;
  if (pet.author_url) return `<a href="${pet.author_url}">@${handle}</a>`;
  return `@${handle}`;
}

function bashInstallCommand(slug) {
  return `curl -fsSL ${rawBase}/scripts/install-pet.sh | bash -s -- ${slug}`;
}

function powershellInstallCommand(slug) {
  return `powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB ${rawBase}/scripts/install-pet.ps1 | iex; Install-CodexPet ${slug}"`;
}

function localizedPetName(pet, lang) {
  return pet.localized_names?.[lang] || pet.name;
}

function petBlock(pet, lang) {
  const rootPrefix = lang === "zh" ? "../.." : ".";
  const labels = lang === "zh" ? ["名称", "安装", "动作", "预览"] : ["Name", "Install", "Action", "Preview"];
  const by = lang === "zh" ? "作者" : "by";
  const category = normalizeCategory(pet.primary_category);
  const categoryName = lang === "zh" ? categoryZh[category] || category : category;
  const displayName = localizedPetName(pet, lang);
  const stateNames = previewStates.map((state) => (lang === "zh" ? state[2] : state[1]));
  const gifs = previewStates.map(([state]) => {
    const path = `${websiteUrl}/assets/previews/${pet.slug}/gifs/${state}.gif`;
    return `<img src="${path}" alt="${displayName} ${state}" width="120" height="130">`;
  });

  return [
    `<table>`,
    `<tr><th>${labels[0]}</th><td colspan="5"><a href="${rootPrefix}/pets/${pet.slug}">${displayName}</a> · ${by} ${authorLink(pet)} · ${categoryName} · v${pet.spriteVersionNumber}</td></tr>`,
    `<tr><th>${labels[1]}</th><td colspan="5"><code>${bashInstallCommand(pet.slug)}</code></td></tr>`,
    `<tr><th>${labels[2]}</th>${stateNames.map((name) => `<td><strong>${name}</strong></td>`).join("")}</tr>`,
    `<tr><th>${labels[3]}</th>${gifs.map((gif) => `<td>${gif}</td>`).join("")}</tr>`,
    `</table>`,
  ].join("\n");
}

function normalizeCategory(category) {
  return categoryAliases[category] || category;
}

function categorySections(pets, lang) {
  return categories
    .flatMap((category) => {
      const items = pets.filter((pet) => normalizeCategory(pet.primary_category) === category);
      if (items.length === 0) return [];
      const title = lang === "zh" ? categoryZh[category] || category : category;
      return [[`### ${title}`, "", items.map((pet) => petBlock(pet, lang)).join("\n\n")].join("\n")];
    })
    .join("\n\n");
}

function englishReadme(pets) {
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  return `<div align="center">

# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

${badges(pets)}

[**🌐 Selected pet gallery**](${websiteUrl}) · [**⚡ Install guide**](${websiteUrl}/install) · [**📖 Craft and submit**](${websiteUrl}/guide)

![Awesome Codex Pet cover](./assets/cover/awesome-codex-pet-cover.png)

</div>

A selective gallery of beautifully made community Codex pets. Inspect complete animations and creator credits on the [website](${websiteUrl}), install in one step, or follow the craft guide to contribute a polished pet.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Selected pet gallery** — complete animation previews, collections, creator credits, sharing, and community statistics at [awesome-codex-pet.pages.dev](${websiteUrl})
- **GitHub-native submissions** — open an issue or PR, the rest is automated
- **Open licensing** — code under MIT, pet assets under CC BY-NC 4.0

Each pet is a small shareable package:

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

Preview images are generated into \`assets/previews/<pet-id>/\` as local or CI build output, never inside the pet folder.

Repository-defined series and collections live in \`collections.json\`. Use \`kind: franchise\` for pets from the same original work and \`kind: theme\` for cross-franchise groups connected by a shared subject or style. A pet joins either by listing its slug in \`submission.json.collections\`; the catalog and website are generated from that metadata.

\`submission.json.name\` is the required fallback name. Creators may keep a pet single-language by omitting \`localized_names\`, or opt into bilingual naming by providing both \`localized_names.en\` and \`localized_names.zh\`. The website follows the visitor's selected language and never invents a translation.

## Pet Versions

| Version | Atlas                            | Runtime metadata                            | Use                                                   |
| ------- | -------------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| v1      | \`1536x1872\`, 8 columns × 9 rows  | omit \`spriteVersionNumber\` or set it to \`1\` | Existing standard-animation pets                      |
| v2      | \`1536x2288\`, 8 columns × 11 rows | set \`spriteVersionNumber: 2\`                | Standard animations plus 16 clockwise look directions |

Both versions remain installable. Use v1 when maintaining an existing 9-row pet; use v2 for newly upgraded pets that need directional looking.

## Quick Install

No clone required. Pick the script for your shell:

\`\`\`bash
# macOS / Linux
${bashInstallCommand(sampleSlug)}
\`\`\`

\`\`\`powershell
# Windows PowerShell
${powershellInstallCommand(sampleSlug)}
\`\`\`

\`\`\`bash
# Anywhere with Node.js
npx awesome-codex-pet ${sampleSlug}
\`\`\`

List available pets:

\`\`\`bash
curl -fsSL ${rawBase}/scripts/install-pet.sh | bash -s -- --list
\`\`\`

Default install locations:

- macOS / Linux: \`~/.codex/pets/<pet-id>/\`
- Windows: \`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

Set \`CODEX_HOME\` to override, or \`AWESOME_CODEX_PET_NO_STATS=1\` to opt out of anonymous install counters.

## Upgrade an Existing v1 Pet

1. Open Codex **Settings → Pets**.
2. Find the installed custom pet and choose **Update**.
3. Codex opens a Hatch Pet task. The current v2 workflow validates and preserves the existing 9 animation rows, generates four cardinal anchors plus 16 look directions, then writes an 11-row atlas with \`spriteVersionNumber: 2\`.
4. Review the generated contact sheet and direction previews before accepting the replacement.

The **Update** action is an AI-assisted v1-to-v2 conversion, not a download notification from this repository. It updates the local package under \`~/.codex/pets/\`; it does not modify or submit the GitHub copy automatically.

## Pets

${categorySections(pets, "en")}

## Submit a Pet

The fastest path is the [submission guide on the website](${websiteUrl}/guide). It walks through categories, the folder layout, and the reviewer checklist.

If you prefer working from the repo:

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
\`\`\`

Use \`pet-slug--author-slug\` so multiple authors can ship variants of the same character. A v1 submission may omit \`spriteVersionNumber\` and must provide a \`1536x1872\` WebP. A v2 submission must set \`spriteVersionNumber: 2\` and provide a \`1536x2288\` WebP.

The v2 runtime manifest looks like:

\`\`\`json
{
  "id": "pet-slug--author-slug",
  "displayName": "Pet Name",
  "description": "One short sentence.",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
\`\`\`

Generated previews and README listings are produced by CI:

\`\`\`bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
\`\`\`

Contributor PRs should only include \`submission.json\`, \`pet.json\`, and \`spritesheet.webp\`. Do not submit prompts, references, QA folders, contact sheets, videos, decoded frames, or Hatch Pet run directories. Maintainers or CI regenerate previews, README listings, and \`pets.json\` after merge, but preview binaries are not kept as tracked Git assets.

## Make a Pet

- [.agents/skills/hatch-pet-v1](./.agents/skills/hatch-pet-v1) — preserve or repair a legacy 8x9 v1 pet
- [.agents/skills/hatch-pet-v2](./.agents/skills/hatch-pet-v2) — create or upgrade an 8x11 v2 pet with 16 look directions

Choose the skill explicitly. For an upgrade, give \`$hatch-pet-v2\` the existing installed \`pet.json\` and \`spritesheet.webp\`; approved rows 0–8 are retained rather than regenerated.

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- Web gallery source: [web/](./web)
- Stats worker: [worker/](./worker)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
`;
}

function chineseReadme(pets) {
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  return `<div align="center">

# Awesome Codex Pet

简体中文 | [English](../../README.md)

${badges(pets)}

[**🌐 精品宠物画廊**](${websiteUrl}) · [**⚡ 安装指南**](${websiteUrl}/install) · [**📖 制作与投稿指南**](${websiteUrl}/guide)

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

</div>

专门收录制作精良的社区 Codex 宠物。在[精品画廊](${websiteUrl})中查看完整动作、作者与合集，一键安装喜欢的伙伴，也可以按照制作指南投稿自己的精品宠物。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **精品宠物画廊** — [awesome-codex-pet.pages.dev](${websiteUrl}) 提供完整动作预览、合集、作者署名、便捷分享和社区统计
- **GitHub 原生投稿** — 提 issue 或 PR，剩下的全自动
- **非商用原则** — 正式许可证可选；没有正式许可证时必须明确禁止商用

每只宠物都是一个很小的可分享包：

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

预览图会作为本地或 CI 构建产物生成到 \`assets/previews/<pet-id>/\`，不会塞进宠物目录。

仓库级作品系列与主题系列统一维护在 \`collections.json\`：\`kind: franchise\` 表示来自同一原作的作品系列，\`kind: theme\` 表示按题材、风格或伙伴类型组织的跨作品主题系列。宠物通过 \`submission.json.collections\` 声明归属，目录与网站都会从这些元数据自动生成。

\`submission.json.name\` 是必填的默认名称。投稿者可以省略 \`localized_names\`，只使用一种语言；也可以选择双语，并同时填写 \`localized_names.en\` 与 \`localized_names.zh\`。网站会跟随访客选择的语言展示，不会擅自生成翻译。

## Pet 版本

| 版本 | 图集                      | 运行时元数据                          | 用途                           |
| ---- | ------------------------- | ------------------------------------- | ------------------------------ |
| v1   | \`1536x1872\`，8 列 × 9 行  | 省略 \`spriteVersionNumber\` 或设为 \`1\` | 已有的标准动作宠物             |
| v2   | \`1536x2288\`，8 列 × 11 行 | 设置 \`spriteVersionNumber: 2\`         | 标准动作加 16 个顺时针环视方向 |

两个版本都可以安装。维护已有九行动画时使用 v1；需要环视动作的新宠物或升级宠物使用 v2。

## 快速安装

无需 clone，按你的系统选一条命令：

\`\`\`bash
# macOS / Linux
${bashInstallCommand(sampleSlug)}
\`\`\`

\`\`\`powershell
# Windows PowerShell
${powershellInstallCommand(sampleSlug)}
\`\`\`

\`\`\`bash
# 任何能跑 Node.js 的环境
npx awesome-codex-pet ${sampleSlug}
\`\`\`

列出可安装的宠物：

\`\`\`bash
curl -fsSL ${rawBase}/scripts/install-pet.sh | bash -s -- --list
\`\`\`

默认安装位置：

- macOS / Linux：\`~/.codex/pets/<pet-id>/\`
- Windows：\`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

可通过 \`CODEX_HOME\` 自定义安装路径，或者设置 \`AWESOME_CODEX_PET_NO_STATS=1\` 关闭匿名安装计数。

## 升级已有 v1 宠物

1. 打开 Codex 的**设置 → 宠物**。
2. 找到已安装的自定义宠物，点击**更新**。
3. Codex 会打开 Hatch Pet 任务。当前 v2 流程会校验并保留原有九行动画，只生成四个方向锚点和 16 个环视方向，然后写出带 \`spriteVersionNumber: 2\` 的十一行图集。
4. 接受替换前，检查生成的 contact sheet 和方向预览。

这里的**更新**是 AI 辅助的 v1 → v2 转换，不是本仓库发出了新版下载通知。它只更新 \`~/.codex/pets/\` 下的本地包，不会自动修改或提交 GitHub 仓库里的版本。

## 宠物收录

${categorySections(pets, "zh")}

## 投稿

最快的方式是打开[网站上的制作与投稿指南](${websiteUrl}/guide)。里面讲清 V1 / V2、逐动作精修、紫边绿边处理、成品结构、授权署名和精品验收标准，也可以一键在 ChatGPT 中打开完整的 Codex 任务。

也可以直接基于仓库工作：

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
\`\`\`

目录名使用 \`pet-slug--author-slug\`，这样同一个角色的不同作者版本可以并存。v1 投稿可以省略 \`spriteVersionNumber\`，WebP 必须是 \`1536x1872\`；v2 投稿必须设置 \`spriteVersionNumber: 2\`，WebP 必须是 \`1536x2288\`。

v2 的运行时清单示例：

\`\`\`json
{
  "id": "pet-slug--author-slug",
  "displayName": "Pet 名称",
  "description": "一句简短描述。",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
\`\`\`

预览图和 README 收录表都由 CI 自动生成：

\`\`\`bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
\`\`\`

贡献者 PR 只需提交 \`submission.json\`、\`pet.json\` 和 \`spritesheet.webp\`。不要提交 prompts、参考图、QA 目录、contact sheet、视频、解码帧或 Hatch Pet 运行目录。预览图、README 收录和 \`pets.json\` 由维护者或 CI 在合并后统一生成，但预览二进制不会长期作为 Git 跟踪文件保留。

## 制作 Pet

- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 保留或修复旧版 8x9 v1 宠物
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 创建或升级带 16 个环视方向的 8x11 v2 宠物

调用时要显式选择 skill。升级已有宠物时，把现有的 \`pet.json\` 和 \`spritesheet.webp\` 交给 \`$hatch-pet-v2\`；通过审核的第 0–8 行会被保留，不会重新生成。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
`;
}

const pets = loadPets();

writeFileSync(join(repoRoot, "README.md"), englishReadme(pets), "utf8");
mkdirSync(join(repoRoot, "docs", "zh-CN"), { recursive: true });
writeFileSync(join(repoRoot, "docs", "zh-CN", "README.md"), chineseReadme(pets), "utf8");
const catalog = pets.map((pet) => ({
  slug: pet.slug,
  name: pet.name,
  localized_names: pet.localized_names,
  author: pet.author,
  author_handle: pet.author_handle,
  author_url: pet.author_url,
  primary_category: normalizeCategory(pet.primary_category),
  collections: pet.collections ?? [],
  license: pet.license,
  description: pet.description,
  spriteVersionNumber: pet.spriteVersionNumber,
}));
const formattedCatalog = await format(JSON.stringify(catalog), { parser: "json" });
writeFileSync(join(repoRoot, "pets.json"), formattedCatalog, "utf8");

console.log(`generated README files for ${pets.length} pet(s)`);
