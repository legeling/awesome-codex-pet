import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");
const rawBase = "https://raw.githubusercontent.com/legeling/awesome-codex-pet/main";
const websiteUrl = "https://awesome-codex-pet.pages.dev";

const categories = [
  "Anime Characters",
  "Original Characters",
  "Memes",
  "Animals",
  "Robots",
  "Others",
];

const categoryZh = {
  "Anime Characters": "动漫人物",
  "Original Characters": "原创角色",
  Memes: "表情包",
  Animals: "动物",
  Robots: "机器人",
  Others: "其他",
};

const categoryAliases = {
  "Anime and Game Fan Art": "Anime Characters",
  "Animals and Creatures": "Animals",
  "Robots and Mascots": "Robots",
  "Memes and Internet Icons": "Memes",
};

const previewStates = [
  ["idle", "Idle", "待机"],
  ["waving", "Waving", "挥手"],
  ["running", "Running", "奔跑"],
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
      return { ...metadata, slug };
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

function petBlock(pet, lang) {
  const rootPrefix = lang === "zh" ? "../.." : ".";
  const labels = lang === "zh" ? ["名称", "安装", "动作", "预览"] : ["Name", "Install", "Action", "Preview"];
  const by = lang === "zh" ? "作者" : "by";
  const category = normalizeCategory(pet.primary_category);
  const categoryName = lang === "zh" ? categoryZh[category] || category : category;
  const stateNames = previewStates.map((state) => (lang === "zh" ? state[2] : state[1]));
  const gifs = previewStates.map(([state]) => {
    const path = `${rootPrefix}/assets/previews/${pet.slug}/gifs/${state}.gif`;
    return `<img src="${path}" alt="${pet.name} ${state}" width="120" height="130">`;
  });

  return [
    `<table>`,
    `<tr><th>${labels[0]}</th><td colspan="5"><a href="${rootPrefix}/pets/${pet.slug}">${pet.name}</a> · ${by} ${authorLink(pet)} · ${categoryName}</td></tr>`,
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

[**🌐 Live gallery**](${websiteUrl}) · [**⚡ Install guide**](${websiteUrl}/install) · [**📖 Submit a pet**](${websiteUrl}/guide)

![Awesome Codex Pet cover](./assets/cover/awesome-codex-pet-cover.png)

</div>

A curated gallery of community-made Codex pets. Browse animations on the [website](${websiteUrl}), install with one command, and submit your own pet through GitHub.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Live gallery** — animated previews, filtering, and view/install counters at [awesome-codex-pet.pages.dev](${websiteUrl})
- **GitHub-native submissions** — open an issue or PR, the rest is automated
- **Open licensing** — code under MIT, pet assets under CC BY-NC 4.0

Each pet is a small shareable package:

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

Preview images are generated into \`assets/previews/<pet-id>/\`, never inside the pet folder.

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

Use \`pet-slug--author-slug\` so multiple authors can ship variants of the same character. Generated previews and README listings are produced by CI:

\`\`\`bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
\`\`\`

Contributor PRs should only include \`submission.json\`, \`pet.json\`, and \`spritesheet.webp\`. Maintainers or CI regenerate previews, README listings, and \`pets.json\` after merge.

## Make a Pet

- [.agents/skills/hatch-pet](./.agents/skills/hatch-pet) — end-to-end pipeline for designing, generating, QAing, and packaging a pet

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

[**🌐 在线画廊**](${websiteUrl}) · [**⚡ 安装指南**](${websiteUrl}/install) · [**📖 投稿指南**](${websiteUrl}/guide)

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

</div>

社区精选的 Codex 小宠物画廊。在[在线画廊](${websiteUrl})里浏览动画，一条命令完成安装，通过 GitHub 提交你自己的宠物。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **在线画廊** — [awesome-codex-pet.pages.dev](${websiteUrl}) 提供动画预览、筛选、浏览/安装统计
- **GitHub 原生投稿** — 提 issue 或 PR，剩下的全自动
- **明确许可** — 代码 MIT，宠物资源 CC BY-NC 4.0

每只宠物都是一个很小的可分享包：

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

预览图自动生成到 \`assets/previews/<pet-id>/\`，不会塞进宠物目录。

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

## 宠物收录

${categorySections(pets, "zh")}

## 投稿

最快的方式是看[网站上的投稿指南](${websiteUrl}/guide)，里面有分类、目录结构和审核清单。

也可以直接基于仓库工作：

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
\`\`\`

目录名使用 \`pet-slug--author-slug\`，这样同一个角色的不同作者版本可以并存。预览图和 README 收录表都由 CI 自动生成：

\`\`\`bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
\`\`\`

贡献者 PR 只需提交 \`submission.json\`、\`pet.json\` 和 \`spritesheet.webp\`。预览图、README 收录和 \`pets.json\` 由维护者或 CI 在合并后统一生成。

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
`;
}

const pets = loadPets();

writeFileSync(join(repoRoot, "README.md"), englishReadme(pets), "utf8");
mkdirSync(join(repoRoot, "docs", "zh-CN"), { recursive: true });
writeFileSync(join(repoRoot, "docs", "zh-CN", "README.md"), chineseReadme(pets), "utf8");
writeFileSync(
  join(repoRoot, "pets.json"),
  `${JSON.stringify(
    pets.map((pet) => ({
      slug: pet.slug,
      name: pet.name,
      author: pet.author,
      author_handle: pet.author_handle,
      author_url: pet.author_url,
      primary_category: normalizeCategory(pet.primary_category),
      license: pet.license,
      description: pet.description,
    })),
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(`generated README files for ${pets.length} pet(s)`);
