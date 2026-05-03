import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");

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
  ["jumping", "Jumping", "跳跃"],
  ["review", "Review", "审阅"],
];

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
    .sort((a, b) => a.name.localeCompare(b.name));
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
    `<tr><th>${labels[1]}</th><td colspan="5"><code>npm run install:pet -- ${pet.slug}</code></td></tr>`,
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
  const sampleInstall = pets[0] ? `npm run install:pet -- ${pets[0].slug}` : "npm run install:pet -- <pet-slug--author-slug>";
  return `# Awesome Codex Pet

[简体中文](./docs/zh-CN/README.md) | English

${badges(pets)}

![Awesome Codex Pet cover](./assets/cover/awesome-codex-pet-cover.png)

A curated gallery of community-made Codex pets, with generated action previews and one-command installation.

Each pet is a small shareable package:

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

Pet folders only contain final submission files. Preview images are generated into \`assets/previews/<pet-id>/\`.

## Quick Install

\`\`\`bash
npm install
npm run install:pet -- --list
${sampleInstall}
\`\`\`

Default install locations:

- macOS/Linux: \`~/.codex/pets/<pet-id>/\`
- Windows: \`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

## Pets

${categorySections(pets, "en")}

## Submit a Pet

Use \`pet-slug--author-slug\` so multiple versions of the same character can coexist.

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
\`\`\`

Generated previews and README listings are automated:

\`\`\`bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
\`\`\`

## Make a Pet

- [skills/hatch-pet](./skills/hatch-pet)

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
`;
}

function chineseReadme(pets) {
  const sampleInstall = pets[0] ? `npm run install:pet -- ${pets[0].slug}` : "npm run install:pet -- <pet-slug--author-slug>";
  return `# Awesome Codex Pet

简体中文 | [English](../../README.md)

${badges(pets)}

![Awesome Codex Pet 封面](../../assets/cover/awesome-codex-pet-cover.png)

一个收集社区 Codex 小宠物的精选画廊，自动生成动作预览，并支持一条命令快速安装。

每个 pet 都是一个很小的可分享包：

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

pet 目录只放最终成品文件。预览图会自动生成到 \`assets/previews/<pet-id>/\`。

## 快速安装

\`\`\`bash
npm install
npm run install:pet -- --list
${sampleInstall}
\`\`\`

默认安装位置：

- macOS/Linux：\`~/.codex/pets/<pet-id>/\`
- Windows：\`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

## Pet 收录

${categorySections(pets, "zh")}

## 投稿

目录名使用 \`pet-slug--author-slug\`，这样同一个角色的不同作者版本可以并存。

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    ├── spritesheet.webp
\`\`\`

预览和 README 收录表都是自动生成的：

\`\`\`bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
\`\`\`

## 制作 Pet

- [skills/hatch-pet](../../skills/hatch-pet)

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- pet 资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体 pet 目录另有说明
`;
}

const pets = loadPets();

writeFileSync(join(repoRoot, "README.md"), englishReadme(pets), "utf8");
mkdirSync(join(repoRoot, "docs", "zh-CN"), { recursive: true });
writeFileSync(join(repoRoot, "docs", "zh-CN", "README.md"), chineseReadme(pets), "utf8");

console.log(`generated README files for ${pets.length} pet(s)`);
