import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { format } from "prettier";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const petsDir = join(repoRoot, "pets");
const installRef = process.env.AWESOME_CODEX_PET_INSTALL_REF?.trim() || "main";
if (
  !/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(installRef) ||
  installRef.includes("..")
) {
  throw new Error("AWESOME_CODEX_PET_INSTALL_REF contains unsafe characters");
}
const rawBase = `https://raw.githubusercontent.com/legeling/awesome-codex-pet/${installRef}`;
const websiteUrl = "https://codexpet.top";
const readmeFeatured = readJson(join(repoRoot, "readme-featured.json")).pets;

const categoryCatalog = JSON.parse(
  readFileSync(join(repoRoot, "categories.json"), "utf8"),
);
const categories = categoryCatalog.map((category) => category.name);
function categoryLabelsFor(locale) {
  return Object.fromEntries(
    categoryCatalog.map((category) => [
      category.name,
      category.label[locale] ?? category.label.en ?? category.name,
    ]),
  );
}
const categoryZh = categoryLabelsFor("zh");
const categoryKo = categoryLabelsFor("ko");
const categoryJa = categoryLabelsFor("ja");
const categoryEs = categoryLabelsFor("es");

const categoryAliases = {
  "Anime and Game Fan Art": "Anime Characters",
  "Game Fan Art": "Game Characters",
  "Animals and Creatures": "Animals",
  "Robots and Mascots": "Robots",
  "Memes and Internet Icons": "Memes",
  "Human Avatars and Profiles": "Human Avatars",
  Objects: "Objects & Props",
};

const galleryCopy = {
  en: ["Browse all pets and animations", "Full pet index (text only)"],
  zh: ["浏览全部宠物和动作", "完整宠物索引（纯文字）"],
  ko: ["모든 펫과 애니메이션 보기", "전체 펫 목록 (텍스트)"],
  ja: ["すべてのペットとアニメーションを見る", "全ペット一覧（テキストのみ）"],
  es: ["Ver todas las mascotas y animaciones", "Índice completo (solo texto)"],
};

const readmeLocales = {
  en: {
    rootPrefix: ".",
    labels: ["Name", "Install", "Action", "Preview"],
    by: "by",
    categoryLabels: {},
    stateIndex: 1,
  },
  zh: {
    rootPrefix: "../..",
    labels: ["名称", "安装", "动作", "预览"],
    by: "作者",
    categoryLabels: categoryZh,
    stateIndex: 2,
  },
  ko: {
    rootPrefix: "../..",
    labels: ["이름", "설치", "동작", "미리 보기"],
    by: "제작자",
    categoryLabels: categoryKo,
    stateIndex: 3,
  },
  ja: {
    rootPrefix: "../..",
    labels: ["名前", "インストール", "アクション", "プレビュー"],
    by: "作者",
    categoryLabels: categoryJa,
    stateIndex: 4,
  },
  es: {
    rootPrefix: "../..",
    labels: ["Nombre", "Instalación", "Acción", "Vista previa"],
    by: "por",
    categoryLabels: categoryEs,
    stateIndex: 5,
  },
};

const languageEntries = [
  ["en", "English", "../../README.md"],
  ["zh", "简体中文", "../zh-CN/README.md"],
  ["ko", "한국어", "../ko/README.md"],
  ["ja", "日本語", "../ja/README.md"],
  ["es", "Español", "../es/README.md"],
];

function docsLanguageNav(active) {
  return languageEntries
    .map(([locale, label, path]) =>
      locale === active ? label : `[${label}](${path})`,
    )
    .join(" | ");
}

function rootLanguageNav() {
  return [
    "[简体中文](./docs/zh-CN/README.md)",
    "[한국어](./docs/ko/README.md)",
    "[日本語](./docs/ja/README.md)",
    "[Español](./docs/es/README.md)",
    "English",
  ].join(" | ");
}

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
    badge("languages", "en | zh--CN | ko | ja | es", "8250df"),
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
  return `curl -fsSL --proto '=https' --tlsv1.2 ${rawBase}/scripts/install-pet.sh | bash -s -- --raw-base ${rawBase} ${slug}`;
}

function powershellInstallCommand(slug) {
  return `powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB -MaximumRedirection 5 -TimeoutSec 120 ${rawBase}/scripts/install-pet.ps1 | iex; Install-CodexPet ${slug} -RawBase '${rawBase}'"`;
}

function nodeInstallCommand(slug) {
  return `npm run install:pet -- ${slug}`;
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function installManifest(pets) {
  const records = Object.fromEntries(
    pets.map((pet) => {
      const petJsonPath = join(petsDir, pet.slug, "pet.json");
      const spritesheetPath = join(petsDir, pet.slug, "spritesheet.webp");
      const spriteVersionNumber = pet.spriteVersionNumber ?? 1;
      return [
        pet.slug,
        {
          name: pet.name,
          spriteVersionNumber,
          petJsonSha256: sha256File(petJsonPath),
          petJsonBytes: statSync(petJsonPath).size,
          spritesheetSha256: sha256File(spritesheetPath),
          spritesheetBytes: statSync(spritesheetPath).size,
          spritesheetWidth: 1536,
          spritesheetHeight: spriteVersionNumber === 2 ? 2288 : 1872,
        },
      ];
    }),
  );

  return {
    schemaVersion: 1,
    repository: "legeling/awesome-codex-pet",
    ref: installRef,
    pets: records,
  };
}

function localizedPetName(pet, lang) {
  return pet.localized_names?.[lang] || pet.name;
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function normalizeCategory(category) {
  return categoryAliases[category] || category;
}

function categorySections(pets, lang) {
  const locale = readmeLocales[lang];
  const [browse, index] = galleryCopy[lang];
  const groups = new Map(categories.map((category) => [category, []]));
  for (const pet of pets) {
    groups.get(normalizeCategory(pet.primary_category))?.push(pet);
  }
  const bySlug = new Map(pets.map((pet) => [pet.slug, pet]));
  if (readmeFeatured.length !== 15 || new Set(readmeFeatured).size !== 15) {
    throw new Error("README requires exactly 15 unique featured pets");
  }
  const featured = readmeFeatured.map((slug) => {
    const pet = bySlug.get(slug);
    if (
      !pet ||
      !existsSync(join(repoRoot, "assets", "readme", `${slug}.gif`))
    ) {
      throw new Error(`Missing featured pet or README GIF: ${slug}`);
    }
    return pet;
  });
  const rows = [];
  for (let offset = 0; offset < featured.length; offset += 5) {
    rows.push(
      `<tr>${featured
        .slice(offset, offset + 5)
        .map((pet) => {
          const name = escapeHtml(localizedPetName(pet, lang));
          return `<td align="center" width="20%"><a href="${websiteUrl}/pets/${pet.slug}"><img src="${locale.rootPrefix}/assets/readme/${pet.slug}.gif" alt="${name}" width="160" height="173"><br>${name}</a></td>`;
        })
        .join("")}</tr>`,
    );
  }
  const sections = [...groups.entries()]
    .flatMap(([category, items]) => {
      if (items.length === 0) return [];
      const title = locale.categoryLabels[category] || category;
      return [
        [
          `### ${title}`,
          "",
          "<ul>",
          ...items.map(
            (pet) =>
              `<li><a href="${locale.rootPrefix}/pets/${pet.slug}">${escapeHtml(localizedPetName(pet, lang))}</a> · ${locale.by} ${authorLink(pet)} · v${pet.spriteVersionNumber}</li>`,
          ),
          "</ul>",
        ].join("\n"),
      ];
    })
    .join("\n\n");
  const galleryUrl = lang === "en" ? websiteUrl : `${websiteUrl}/${lang}`;
  return `**[${browse} →](${galleryUrl})**\n\n<table width="100%">\n${rows.join("\n")}\n</table>\n\n<details>\n<summary>${index} · ${pets.length}</summary>\n\n${sections}\n\n</details>`;
}

function englishReadme(pets) {
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  return `<div align="center">

# Awesome Codex Pet

${rootLanguageNav()}

<h2><a href="${websiteUrl}">Browse and install free community Codex pets at codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet is a free community pet gallery.</strong> Browse complete animations like a pet store, install a favorite without cloning the repository, or request a missing character that a community contributor may volunteer to make.</p>

<p><a href="${websiteUrl}"><strong>Browse pets</strong></a> · <a href="${websiteUrl}/install"><strong>Install a pet</strong></a> · <a href="${websiteUrl}/request"><strong>Request a character</strong></a></p>

<a href="${websiteUrl}"><img src="./assets/cover/awesome-codex-pet-cover.png" alt="Open the Awesome Codex Pet gallery"></a>

${badges(pets)}

</div>

This repository is the source catalog behind [codexpet.top](${websiteUrl}): it keeps installable pet packages, creator attribution, collection metadata, validation tools, and contribution history. For browsing and installing pets, start with the website.

## Highlights

- **One-command install** — no clone, no manual setup, works on macOS / Linux / Windows
- **Free community gallery** — complete animation previews, collections, creator profiles, weekly rankings based on installs and likes, sharing, and community statistics at [codexpet.top](${websiteUrl})
- **Free character requests** — submit a character and references without making a spritesheet; a community contributor may volunteer to create it, with no delivery guarantee
- **AI-first contributions** — contributors can create, repair, and submit pets with Codex; advanced contributors can still open a PR
- **Open licensing** — code under MIT, pet assets under CC BY-NC 4.0

Each pet is a small shareable package:

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

Preview images are generated into \`assets/previews/<pet-id>/\` as local or CI build output, never inside the pet folder.

Repository-defined series and collections live in \`collections.json\`. Use \`kind: franchise\` for pets from the same original work and \`kind: theme\` for cross-franchise groups connected by a shared subject or style. A pet joins either by listing its slug in \`submission.json.collections\`; the catalog and website are generated from that metadata. Membership is recorded immediately, while the website publishes a collection only after it has at least three pets.

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
# From a local clone with Node.js
${nodeInstallCommand(sampleSlug)}
\`\`\`

List available pets:

\`\`\`bash
curl -fsSL --proto '=https' --tlsv1.2 ${rawBase}/scripts/install-pet.sh | bash -s -- --raw-base ${rawBase} --list
\`\`\`

Default install locations:

- macOS / Linux: \`~/.codex/pets/<pet-id>/\`
- Windows: \`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

Set \`CODEX_HOME\` to override, or \`AWESOME_CODEX_PET_NO_STATS=1\` to opt out of anonymous install counters. Installers verify the repository manifest and SHA-256 hashes, stage files before activation, and require \`--force\` when replacing an existing package. For reproducible installs, replace \`main\` in both URL positions with an immutable commit or tag.

## Upgrade an Existing v1 Pet

1. Open Codex **Settings → Pets**.
2. Find the installed custom pet and choose **Update**.
3. Codex opens a Hatch Pet task. The current v2 workflow validates and preserves the existing 9 animation rows, generates four cardinal anchors plus 16 look directions, then writes an 11-row atlas with \`spriteVersionNumber: 2\`.
4. Review the generated contact sheet and direction previews before accepting the replacement.

The **Update** action is an AI-assisted v1-to-v2 conversion, not a download notification from this repository. It updates the local package under \`~/.codex/pets/\`; it does not modify or submit the GitHub copy automatically.

## Pets

${categorySections(pets, "en")}

## Request or Submit a Pet

Missing a favorite character? Open the [free community request page](${websiteUrl}/request). Submitting is free, no spritesheet is required, and a community contributor may volunteer to make the pet. Requests are not acceptance or delivery promises.

Contributors can start with the [website contribution guide](${websiteUrl}/guide). It offers three paths without making every contributor download this large asset repository:

1. **Request a pet** — Codex checks for duplicates, gathers references and requirements, then opens a labeled request issue.
2. **Create or submit your own pet** — Codex can start from references or existing files, complete and validate the three-file package, then use the GitHub API to create a focused branch and pull request without a full clone.
3. **Advanced pull request** — experienced contributors can work in a GitHub Codespace, a partial clone, or their preferred Git workflow.

The repository skill at [\`.agents/skills/submit-codex-pet\`](./.agents/skills/submit-codex-pet) teaches compatible AI agents how to choose the right route. When credentials or repository write access are unavailable, it falls back to a labeled submission issue instead of losing the contributor's work.

Advanced contributors should add exactly one final package:

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

- [.agents/skills/submit-codex-pet](./.agents/skills/submit-codex-pet) — request community production, create or submit your own pet through the GitHub API, or prepare an advanced PR
- [.agents/skills/hatch-pet-v1](./.agents/skills/hatch-pet-v1) — preserve or repair a legacy 8x9 v1 pet
- [.agents/skills/hatch-pet-v2](./.agents/skills/hatch-pet-v2) — create or upgrade an 8x11 v2 pet with 16 look directions

Choose the skill explicitly. For an upgrade, give \`$hatch-pet-v2\` the existing installed \`pet.json\` and \`spritesheet.webp\`; approved rows 0–8 are retained rather than regenerated.

## Documentation

- English: [docs/en](./docs/en)
- 简体中文: [docs/zh-CN](./docs/zh-CN)
- 한국어: [docs/ko](./docs/ko)
- 日本語: [docs/ja](./docs/ja)
- Español: [docs/es](./docs/es)
- Web gallery source: [web/](./web)
- Stats worker: [worker/](./worker)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Star History

[![GitHub star history for Awesome Codex Pet](./assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

The chart is refreshed daily from GitHub's stargazer data. [Star the repository](https://github.com/legeling/awesome-codex-pet) to help more people discover these pets.

## Contributors

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet contributors">
</a>

Thanks to everyone who contributes pets, code, documentation, reviews, and ideas.

## License

- Code and scripts: [MIT](./LICENSE)
- Pet assets and generated previews: [CC BY-NC 4.0](./ASSETS-LICENSE.md), unless a pet folder says otherwise
`;
}

function chineseReadme(pets) {
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  return `<div align="center">

# Awesome Codex Pet

${docsLanguageNav("zh")}

<h2><a href="${websiteUrl}">免费浏览并安装 Codex 小宠物：codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet 是免费的社区小宠物画廊。</strong>像逛宠物商店一样查看完整动画并一键安装；没有喜欢的角色时，还可以免费提交申请，社区贡献者可能会志愿制作。</p>

<p><a href="${websiteUrl}"><strong>挑选宠物</strong></a> · <a href="${websiteUrl}/zh/install"><strong>安装宠物</strong></a> · <a href="${websiteUrl}/zh/request"><strong>申请喜欢的角色</strong></a></p>

<a href="${websiteUrl}"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="进入 Awesome Codex Pet 精品画廊"></a>

${badges(pets)}

</div>

本仓库是 [codexpet.top](${websiteUrl}) 背后的宠物目录，负责保存可安装成品、作者与来源信息、合集元数据、校验工具和贡献记录。挑选与安装宠物时，请优先使用网站。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **免费社区画廊** — [codexpet.top](${websiteUrl}) 提供完整动作预览、合集、作者主页、基于安装与点赞的每周榜单、便捷分享和社区统计
- **免费角色申请** — 不需要自己制作 spritesheet；提交角色和参考资料后，社区贡献者可能会志愿制作，但不承诺交付
- **AI 优先投稿** — 贡献者可在 Codex 中制作、修复并提交自己的宠物，熟悉 Git 的用户也可以直接提交 PR
- **非商用原则** — 正式许可证可选；没有正式许可证时必须明确禁止商用

每只宠物都是一个很小的可分享包：

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

预览图会作为本地或 CI 构建产物生成到 \`assets/previews/<pet-id>/\`，不会塞进宠物目录。

仓库级作品系列与主题系列统一维护在 \`collections.json\`：\`kind: franchise\` 表示来自同一原作的作品系列，\`kind: theme\` 表示按题材、风格或伙伴类型组织的跨作品主题系列。宠物通过 \`submission.json.collections\` 声明归属，目录与网站都会从这些元数据自动生成。归属信息会立即记录，但只有达到至少 3 只宠物的合集才会在网站公开展示。

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
# 在本地仓库中使用 Node.js
${nodeInstallCommand(sampleSlug)}
\`\`\`

列出可安装的宠物：

\`\`\`bash
curl -fsSL --proto '=https' --tlsv1.2 ${rawBase}/scripts/install-pet.sh | bash -s -- --raw-base ${rawBase} --list
\`\`\`

默认安装位置：

- macOS / Linux：\`~/.codex/pets/<pet-id>/\`
- Windows：\`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

可通过 \`CODEX_HOME\` 自定义安装路径，或者设置 \`AWESOME_CODEX_PET_NO_STATS=1\` 关闭匿名安装计数。安装器会校验仓库清单与 SHA-256，先在临时目录准备完整文件再切换；替换已有宠物时需要显式添加 \`--force\`。如需可复现安装，请把两处 URL 中的 \`main\` 替换为不可变的 commit 或 tag。

## 升级已有 v1 宠物

1. 打开 Codex 的**设置 → 宠物**。
2. 找到已安装的自定义宠物，点击**更新**。
3. Codex 会打开 Hatch Pet 任务。当前 v2 流程会校验并保留原有九行动画，只生成四个方向锚点和 16 个环视方向，然后写出带 \`spriteVersionNumber: 2\` 的十一行图集。
4. 接受替换前，检查生成的 contact sheet 和方向预览。

这里的**更新**是 AI 辅助的 v1 → v2 转换，不是本仓库发出了新版下载通知。它只更新 \`~/.codex/pets/\` 下的本地包，不会自动修改或提交 GitHub 仓库里的版本。

## 宠物收录

${categorySections(pets, "zh")}

## 申请或投稿

没有喜欢的角色时，请打开[免费社区制作申请页](${websiteUrl}/zh/request)。提交申请不收费，不需要自己准备 spritesheet，社区贡献者可能会志愿认领并制作；申请不代表承诺收录或交付。

贡献者可以从[网站上的制作与投稿指南](${websiteUrl}/guide)开始。为了避免每位投稿者都下载体积较大的素材仓库，我们提供三条路径：

1. **请求制作宠物** — Codex 先检查重复项、收集参考和制作要求，再创建带标签的请求 Issue。
2. **制作或提交自己的宠物** — Codex 可以从参考图现场制作，也可以接收现成文件；完成三件套制作与校验后，通过 GitHub API 创建专用分支和 PR，无需完整克隆。
3. **高级 PR** — 熟悉 Git 的贡献者可以使用 GitHub Codespaces、部分克隆或自己的 Git 工作流。

仓库内的 [\`.agents/skills/submit-codex-pet\`](../../.agents/skills/submit-codex-pet) 会指导兼容的 AI 选择正确路径。若缺少凭据或仓库写入权限，它会退回到带标签的成品投稿 Issue，不会让投稿内容丢失。

高级贡献者只需添加一个最终成品包：

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

- [.agents/skills/submit-codex-pet](../../.agents/skills/submit-codex-pet) — 请求社区制作、通过 GitHub API 制作或提交自己的宠物，或准备高级 PR
- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 保留或修复旧版 8x9 v1 宠物
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 创建或升级带 16 个环视方向的 8x11 v2 宠物

调用时要显式选择 skill。升级已有宠物时，把现有的 \`pet.json\` 和 \`spritesheet.webp\` 交给 \`$hatch-pet-v2\`；通过审核的第 0–8 行会被保留，不会重新生成。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 한국어: [docs/ko](../ko)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 星标历史

[![Awesome Codex Pet 的 GitHub 星标历史](../../assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

图表每天根据 GitHub 星标数据自动更新。欢迎[为仓库点亮 Star](https://github.com/legeling/awesome-codex-pet)，让更多人发现这些精品宠物。

## 贡献者

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet 贡献者">
</a>

感谢每一位贡献宠物、代码、文档、审核与创意的朋友。

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
`;
}

function koreanReadme(pets) {
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  return `<div align="center">

# Awesome Codex Pet

${docsLanguageNav("ko")}

<h2><a href="${websiteUrl}">codexpet.top에서 무료 커뮤니티 Codex 펫을 둘러보고 설치하세요 →</a></h2>

<p><strong>Awesome Codex Pet은 무료 커뮤니티 펫 갤러리입니다.</strong> 펫 상점처럼 완성된 애니메이션을 둘러보고, 저장소를 복제하지 않아도 마음에 드는 펫을 설치할 수 있습니다. 원하는 캐릭터가 없다면 커뮤니티에 제작을 요청할 수 있습니다.</p>

<p><a href="${websiteUrl}"><strong>펫 둘러보기</strong></a> · <a href="${websiteUrl}/install"><strong>펫 설치하기</strong></a> · <a href="${websiteUrl}/request"><strong>캐릭터 요청하기</strong></a></p>

<a href="${websiteUrl}"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="Awesome Codex Pet 갤러리 열기"></a>

${badges(pets)}

</div>

이 저장소는 [codexpet.top](${websiteUrl})의 원본 카탈로그입니다. 설치 가능한 펫 패키지, 제작자 정보, 컬렉션 메타데이터, 검증 도구, 기여 이력을 관리합니다. 펫을 둘러보고 설치하려면 웹사이트를 먼저 이용하세요.

## 주요 기능

- **한 줄 설치** — 저장소 복제나 수동 설정 없이 macOS / Linux / Windows에서 설치
- **무료 커뮤니티 갤러리** — [codexpet.top](${websiteUrl})에서 완성된 애니메이션 미리 보기, 컬렉션, 제작자 프로필, 설치 수와 좋아요를 기준으로 한 주간 순위, 공유, 커뮤니티 통계 제공
- **무료 캐릭터 요청** — spritesheet를 만들지 않아도 캐릭터와 참고 자료를 제출할 수 있으며, 커뮤니티 제작자가 자원할 수 있습니다. 제작을 보장하지는 않습니다.
- **AI 우선 기여** — Codex로 펫을 만들고, 고치고, 제출할 수 있으며, 숙련된 기여자는 직접 PR을 열 수 있습니다.
- **열린 라이선스** — 코드에는 MIT, 펫 자산에는 CC BY-NC 4.0 적용

각 펫은 공유할 수 있는 작은 패키지입니다.

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

미리 보기 이미지는 로컬 또는 CI 빌드 결과로 \`assets/previews/<pet-id>/\`에 생성되며, 펫 폴더 안에는 넣지 않습니다.

저장소에서 정의한 시리즈와 컬렉션은 \`collections.json\`에 있습니다. \`kind: franchise\`는 같은 원작의 펫을, \`kind: theme\`는 주제나 스타일이 이어지는 여러 원작의 펫을 나타냅니다. 펫은 \`submission.json.collections\`에 slug를 적어 소속을 선언하며, 카탈로그와 웹사이트는 이 메타데이터로 생성됩니다. 소속 정보는 바로 기록되지만, 컬렉션은 펫이 3개 이상일 때만 웹사이트에 공개됩니다.

\`submission.json.name\`은 필수 기본 이름입니다. 제작자는 \`localized_names\`를 생략해 한 언어만 사용할 수 있고, \`localized_names.en\`과 \`localized_names.zh\`를 함께 제공해 이중 언어 이름을 지원할 수도 있습니다. 웹사이트는 방문자가 선택한 언어를 따르며 이름을 임의로 번역하지 않습니다.

## 펫 버전

| 버전 | 아틀라스                | 런타임 메타데이터                   | 용도                                  |
| ---- | ----------------------- | ----------------------------------- | ------------------------------------- |
| v1   | \`1536x1872\`, 8열 × 9행  | \`spriteVersionNumber\` 생략 또는 \`1\` | 기존 표준 애니메이션 펫               |
| v2   | \`1536x2288\`, 8열 × 11행 | \`spriteVersionNumber: 2\`            | 표준 애니메이션과 16개 시계 방향 시선 |

두 버전 모두 설치할 수 있습니다. 기존 9행 펫을 관리할 때는 v1을 사용하고, 시선 방향이 필요한 새 펫이나 업그레이드 펫에는 v2를 사용하세요.

## 빠른 설치

저장소를 복제할 필요가 없습니다. 사용하는 셸에 맞는 명령을 선택하세요.

\`\`\`bash
# macOS / Linux
${bashInstallCommand(sampleSlug)}
\`\`\`

\`\`\`powershell
# Windows PowerShell
${powershellInstallCommand(sampleSlug)}
\`\`\`

\`\`\`bash
# 로컬 저장소에서 Node.js로 실행
${nodeInstallCommand(sampleSlug)}
\`\`\`

설치 가능한 펫 목록 보기:

\`\`\`bash
curl -fsSL --proto '=https' --tlsv1.2 ${rawBase}/scripts/install-pet.sh | bash -s -- --raw-base ${rawBase} --list
\`\`\`

기본 설치 위치:

- macOS / Linux: \`~/.codex/pets/<pet-id>/\`
- Windows: \`%USERPROFILE%\\.codex\\pets\\<pet-id>\\\`

\`CODEX_HOME\`으로 설치 위치를 바꾸거나 \`AWESOME_CODEX_PET_NO_STATS=1\`을 설정해 익명 설치 집계를 끌 수 있습니다. 설치기는 저장소 매니페스트와 SHA-256을 검증하고 임시 디렉터리에서 원자적으로 활성화하며, 기존 펫을 교체할 때는 \`--force\`가 필요합니다. 재현 가능한 설치가 필요하면 두 URL의 \`main\`을 변경할 수 없는 commit 또는 tag로 바꾸세요.

## 기존 v1 펫 업그레이드

1. Codex에서 **Settings → Pets**를 엽니다.
2. 설치한 사용자 펫을 찾아 **Update**를 선택합니다.
3. Codex가 Hatch Pet 작업을 엽니다. 현재 v2 흐름은 기존 9개 애니메이션 행을 검증하고 보존한 뒤, 네 방향 기준점과 16개 시선 방향을 생성하여 \`spriteVersionNumber: 2\`가 설정된 11행 아틀라스를 작성합니다.
4. 교체를 수락하기 전에 생성된 contact sheet와 방향 미리 보기를 검토합니다.

**Update** 동작은 이 저장소의 다운로드 알림이 아니라 AI가 돕는 v1-to-v2 변환입니다. \`~/.codex/pets/\` 아래의 로컬 패키지만 갱신하며 GitHub 저장소 사본을 자동으로 수정하거나 제출하지 않습니다.

## 펫 목록

${categorySections(pets, "ko")}

## 펫 요청 또는 제출

원하는 캐릭터가 없다면 [무료 커뮤니티 요청 페이지](${websiteUrl}/request)를 여세요. 요청은 무료이며 spritesheet가 없어도 됩니다. 커뮤니티 제작자가 제작을 자원할 수 있지만, 요청이 수록이나 제작을 보장하지는 않습니다.

기여를 시작하려면 [웹사이트 기여 가이드](${websiteUrl}/guide)를 확인하세요. 모든 기여자가 큰 자산 저장소를 내려받지 않아도 되도록 세 가지 경로를 제공합니다.

1. **펫 요청** — Codex가 중복을 확인하고 참고 자료와 요구 사항을 수집한 뒤, 라벨이 지정된 요청 issue를 엽니다.
2. **내 펫 만들기 또는 제출하기** — Codex는 참고 자료나 기존 파일에서 시작해 세 파일 패키지를 완성하고 검증한 뒤, 전체 복제 없이 GitHub API로 전용 브랜치와 PR을 만듭니다.
3. **고급 PR** — 숙련된 기여자는 GitHub Codespaces, 부분 복제 또는 선호하는 Git 작업 흐름을 사용할 수 있습니다.

저장소의 [\`.agents/skills/submit-codex-pet\`](../../.agents/skills/submit-codex-pet) 스킬은 호환되는 AI agent가 올바른 경로를 선택하도록 돕습니다. 인증 정보나 저장소 쓰기 권한이 없으면, 기여물을 잃지 않도록 라벨이 지정된 제출 issue로 대체합니다.

고급 기여자는 최종 패키지 하나만 추가해야 합니다.

\`\`\`text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
\`\`\`

여러 제작자가 같은 캐릭터의 변형을 함께 제공할 수 있도록 \`pet-slug--author-slug\` 형식을 사용합니다. v1 제출물은 \`spriteVersionNumber\`를 생략할 수 있으며 \`1536x1872\` WebP를 제공해야 합니다. v2 제출물은 \`spriteVersionNumber: 2\`와 \`1536x2288\` WebP를 제공해야 합니다.

v2 런타임 매니페스트는 다음과 같습니다.

\`\`\`json
{
  "id": "pet-slug--author-slug",
  "displayName": "펫 이름",
  "description": "한 문장의 짧은 설명.",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
\`\`\`

미리 보기와 README 목록은 CI가 생성합니다.

\`\`\`bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
\`\`\`

기여자 PR에는 \`submission.json\`, \`pet.json\`, \`spritesheet.webp\`만 포함해야 합니다. prompt, 참고 자료, QA 폴더, contact sheet, 동영상, 디코드 프레임, Hatch Pet 실행 디렉터리는 제출하지 마세요. 유지 관리자나 CI가 병합 뒤 미리 보기, README 목록, \`pets.json\`을 다시 생성하며 미리 보기 바이너리는 장기간 Git 추적 파일로 유지하지 않습니다.

## 펫 만들기

- [.agents/skills/submit-codex-pet](../../.agents/skills/submit-codex-pet) — 커뮤니티 제작을 요청하거나 GitHub API로 내 펫을 만들고 제출하고, 고급 PR을 준비합니다.
- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 기존 8x9 v1 펫을 보존하거나 수리합니다.
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 16개 시선 방향을 포함한 8x11 v2 펫을 만들거나 업그레이드합니다.

스킬 버전을 명시적으로 선택하세요. 기존 펫을 업그레이드할 때는 \`$hatch-pet-v2\`에 설치된 \`pet.json\`과 \`spritesheet.webp\`를 제공합니다. 승인된 0–8행은 새로 생성하지 않고 보존됩니다.

## 문서

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](../zh-CN)
- 한국어: [docs/ko](./)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)
- 웹 갤러리 소스: [web/](../../web)
- 통계 Worker: [worker/](../../worker)
- 기여 가이드(영어): [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Star 기록

[![Awesome Codex Pet의 GitHub Star 기록](../../assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

이 차트는 GitHub stargazer 데이터로 매일 갱신됩니다. 더 많은 사람이 이 펫을 발견할 수 있도록 [저장소에 Star를 남겨 주세요](https://github.com/legeling/awesome-codex-pet).

## 기여자

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet 기여자">
</a>

펫, 코드, 문서, 검토, 아이디어를 기여해 주신 모든 분께 감사드립니다.

## 라이선스

- 코드와 스크립트: [MIT](../../LICENSE)
- 펫 자산과 생성된 미리 보기: 각 펫 폴더에 별도 표기가 없다면 [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
`;
}

const additionalReadmeCopy = {
  ja: {
    language: "日本語",
    siteHeading:
      "codexpet.top で無料のコミュニティ Codex ペットを探してインストール →",
    intro:
      "Awesome Codex Pet は、コミュニティが制作した無料の Codex ペットギャラリーです。アニメーションを確認し、リポジトリを複製せずにお気に入りをインストールできます。まだないキャラクターはコミュニティへ制作をリクエストできます。",
    browse: "ペットを見る",
    install: "インストール",
    request: "キャラクターをリクエスト",
    imageAlt: "Awesome Codex Pet ギャラリーを開く",
    source:
      "このリポジトリは [codexpet.top] のソースカタログです。インストール可能なペット、作者と出典、コレクション情報、検証ツール、貢献履歴を管理しています。",
    highlightsTitle: "特徴",
    highlights: [
      "**ワンコマンドでインストール** — クローンや手動設定なしで macOS / Linux / Windows に対応",
      "**無料コミュニティギャラリー** — アニメーション、コレクション、作者ページ、週間ランキング、いいね、共有機能",
      "**無料のキャラクターリクエスト** — spritesheet がなくてもキャラクターと参考資料を投稿可能。制作や採用は保証されません",
      "**AI ファーストの投稿フロー** — Codex でペットの制作、修正、検証、投稿が可能",
    ],
    packageIntro: "各ペットは次の 3 ファイルだけで構成されます。",
    nameNote:
      "`submission.json.name` は必須のフォールバック名です。翻訳名は投稿者が明示的に提供した場合のみ使用し、サイトがキャラクター名を自動翻訳することはありません。",
    versionsTitle: "ペットのバージョン",
    versionUse: "用途",
    v1Use: "従来の標準アニメーション",
    v2Use: "標準アニメーションと 16 方向の視線",
    installTitle: "クイックインストール",
    installIntro:
      "リポジトリのクローンは不要です。利用するシェルに合ったコマンドを選んでください。インストーラーはマニフェストと SHA-256 を検証し、既存のパッケージを置き換える場合は `--force` を要求します。",
    petsTitle: "ペット一覧",
    contributeTitle: "リクエストと投稿",
    contribute:
      "欲しいキャラクターが見つからない場合は、無料のコミュニティリクエストを送信できます。自分のペットを投稿する場合は、最終パッケージを 3 ファイルだけにし、`npm run validate:pr` と `npm run lint` を実行してください。",
    docsTitle: "ドキュメント",
    licenseTitle: "ライセンス",
    codeLicense: "コードとスクリプト",
    assetLicense: "ペット素材と生成プレビュー",
  },
  es: {
    language: "Español",
    siteHeading:
      "Explora e instala mascotas gratuitas de Codex en codexpet.top →",
    intro:
      "Awesome Codex Pet es una galería gratuita de mascotas creadas por la comunidad. Puedes revisar sus animaciones, instalar tus favoritas sin clonar el repositorio o pedir un personaje que todavía no exista.",
    browse: "Explorar mascotas",
    install: "Instalar una mascota",
    request: "Pedir un personaje",
    imageAlt: "Abrir la galería de Awesome Codex Pet",
    source:
      "Este repositorio es el catálogo fuente de [codexpet.top]. Conserva los paquetes instalables, la autoría y procedencia, las colecciones, las herramientas de validación y el historial de contribuciones.",
    highlightsTitle: "Características",
    highlights: [
      "**Instalación con un comando** — sin clonar ni configurar manualmente; funciona en macOS, Linux y Windows",
      "**Galería comunitaria gratuita** — animaciones completas, colecciones, perfiles, clasificación semanal, Me gusta y opciones para compartir",
      "**Peticiones gratuitas** — publica un personaje y sus referencias sin crear un spritesheet; la realización y aceptación no están garantizadas",
      "**Contribuciones asistidas por IA** — Codex puede ayudar a crear, reparar, validar y enviar una mascota",
    ],
    packageIntro: "Cada mascota es un paquete pequeño de solo tres archivos:",
    nameNote:
      "`submission.json.name` es el nombre de respaldo obligatorio. Los nombres traducidos solo se muestran cuando el autor los proporciona expresamente; el sitio no inventa traducciones de personajes.",
    versionsTitle: "Versiones de mascotas",
    versionUse: "Uso",
    v1Use: "Animaciones estándar heredadas",
    v2Use: "Animaciones estándar y 16 direcciones de mirada",
    installTitle: "Instalación rápida",
    installIntro:
      "No necesitas clonar el repositorio. Elige el comando correspondiente a tu sistema. El instalador verifica el manifiesto y los hashes SHA-256, y exige `--force` para reemplazar un paquete existente.",
    petsTitle: "Catálogo de mascotas",
    contributeTitle: "Pedir o enviar una mascota",
    contribute:
      "Si falta un personaje, puedes publicar una petición comunitaria gratuita. Para contribuir una mascota, conserva únicamente los tres archivos finales y ejecuta `npm run validate:pr` y `npm run lint` antes de abrir el PR.",
    docsTitle: "Documentación",
    licenseTitle: "Licencia",
    codeLicense: "Código y scripts",
    assetLicense: "Recursos de mascotas y vistas previas generadas",
  },
};

function additionalReadme(pets, lang) {
  const copy = additionalReadmeCopy[lang];
  const sampleSlug = pets[0]?.slug || "pet-slug--author-slug";
  const localePath = lang === "ja" ? "ja" : "es";
  return `<div align="center">

# Awesome Codex Pet

${docsLanguageNav(lang)}

<h2><a href="${websiteUrl}/${localePath}">${copy.siteHeading}</a></h2>

<p><strong>${copy.intro}</strong></p>

<p><a href="${websiteUrl}/${localePath}"><strong>${copy.browse}</strong></a> · <a href="${websiteUrl}/${localePath}/install"><strong>${copy.install}</strong></a> · <a href="${websiteUrl}/${localePath}/request"><strong>${copy.request}</strong></a></p>

<a href="${websiteUrl}/${localePath}"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="${copy.imageAlt}"></a>

${badges(pets)}

</div>

${copy.source.replace("[codexpet.top]", `[codexpet.top](${websiteUrl}/${localePath})`)}

## ${copy.highlightsTitle}

${copy.highlights.map((item) => `- ${item}`).join("\n")}

${copy.packageIntro}

\`\`\`text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
\`\`\`

${copy.nameNote}

## ${copy.versionsTitle}

| Version | Atlas | Runtime metadata | ${copy.versionUse} |
| --- | --- | --- | --- |
| v1 | \`1536x1872\`, 8 × 9 | omit \`spriteVersionNumber\` or set \`1\` | ${copy.v1Use} |
| v2 | \`1536x2288\`, 8 × 11 | \`spriteVersionNumber: 2\` | ${copy.v2Use} |

## ${copy.installTitle}

${copy.installIntro}

\`\`\`bash
# macOS / Linux
${bashInstallCommand(sampleSlug)}
\`\`\`

\`\`\`powershell
# Windows PowerShell
${powershellInstallCommand(sampleSlug)}
\`\`\`

## ${copy.petsTitle}

${categorySections(pets, lang)}

## ${copy.contributeTitle}

${copy.contribute}

- [Codex pet request](${websiteUrl}/${localePath}/request)
- [Contribution guide](${websiteUrl}/guide)
- [\`.agents/skills/submit-codex-pet\`](../../.agents/skills/submit-codex-pet)

## ${copy.docsTitle}

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](../zh-CN)
- 한국어: [docs/ko](../ko)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)

## ${copy.licenseTitle}

- ${copy.codeLicense}: [MIT](../../LICENSE)
- ${copy.assetLicense}: [CC BY-NC 4.0](../../ASSETS-LICENSE.md), unless a pet package states otherwise
`;
}

const pets = loadPets();

async function writeReadme(path, content) {
  const formatted = await format(content, { parser: "markdown" });
  writeFileSync(path, formatted, "utf8");
}

await writeReadme(join(repoRoot, "README.md"), englishReadme(pets));
mkdirSync(join(repoRoot, "docs", "zh-CN"), { recursive: true });
await writeReadme(
  join(repoRoot, "docs", "zh-CN", "README.md"),
  chineseReadme(pets),
);
mkdirSync(join(repoRoot, "docs", "ko"), { recursive: true });
await writeReadme(
  join(repoRoot, "docs", "ko", "README.md"),
  koreanReadme(pets),
);
mkdirSync(join(repoRoot, "docs", "ja"), { recursive: true });
await writeReadme(
  join(repoRoot, "docs", "ja", "README.md"),
  additionalReadme(pets, "ja"),
);
mkdirSync(join(repoRoot, "docs", "es"), { recursive: true });
await writeReadme(
  join(repoRoot, "docs", "es", "README.md"),
  additionalReadme(pets, "es"),
);
const catalog = pets.map((pet) => ({
  slug: pet.slug,
  name: pet.name,
  localized_names: pet.localized_names,
  author: pet.author,
  author_handle: pet.author_handle,
  author_url: pet.author_url,
  primary_category: normalizeCategory(pet.primary_category),
  canonical_key: pet.canonical_key,
  variant_note: pet.variant_note,
  collections: pet.collections ?? [],
  license: pet.license,
  description: pet.description,
  spriteVersionNumber: pet.spriteVersionNumber,
}));
const formattedCatalog = await format(JSON.stringify(catalog), {
  parser: "json",
});
writeFileSync(join(repoRoot, "pets.json"), formattedCatalog, "utf8");
const formattedManifest = await format(JSON.stringify(installManifest(pets)), {
  parser: "json",
});
writeFileSync(
  join(repoRoot, "install-manifest.json"),
  formattedManifest,
  "utf8",
);

console.log(
  `generated README files and install manifest for ${pets.length} pet(s)`,
);
