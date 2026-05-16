export type Locale = "en" | "zh";

export const translations = {
  en: {
    // Header
    gallery: "Gallery",
    install: "Install",
    guide: "Guide",
    docs: "Docs",
    github: "GitHub",
    submitPet: "Submit a Pet",

    // Hero
    heroBadge: "{count} community pets available",
    heroTitle1: "Discover & install",
    heroTitle2: "Codex pets",
    heroDesc:
      "A curated gallery of community-made pets for Codex. Browse, preview animations, and install with a single command.",
    heroExplore: "Explore gallery",
    heroSubmit: "Submit your pet",
    heroStatPets: "Curated pets",
    heroStatCategories: "Categories",
    heroStatLicense: "Open source",
    heroStatLicenseValue: "MIT + CC BY-NC",
    exploreGallery: "Explore gallery",
    submitYourPet: "Submit your pet",

    // Gallery
    galleryTitle: "Gallery",
    petsAvailable: "{count} pets available",
    searchPlaceholder: "Search pets, authors, tags...",
    allCategories: "All categories",
    noResults: "No pets match your search.",
    noResultsHint: "Try a different keyword or category.",

    // Card
    by: "by",
    view: "View",
    installBtn: "Install",
    copied: "Copied",
    defaultDesc: "A curated Codex pet package.",

    // Detail
    backToGallery: "Back to gallery",
    actionPreviews: "Action Previews",
    actionPreviewsDesc:
      "Every animation state rendered from the spritesheet — what you'll actually see in Codex.",
    metadata: "Metadata",
    author: "Author",
    license: "License",
    displayName: "Display Name",
    slug: "Slug",
    tags: "Tags",
    installCommands: "Install Commands",
    copyBashInstall: "Copy Bash Install",
    copyPowerShell: "Copy PowerShell",
    source: "Source",

    // Footer
    contributing: "Contributing",
    footerTagline: "Adopt a pixel companion. One command, no clone needed.",
    footerLinksTitle: "Explore",
    footerCommunityTitle: "Community",
    footerLicenseLine: "Code under MIT · Pet assets under CC BY-NC 4.0.",
    footerBuiltWith: "Built with Next.js · Deployed on Cloudflare Pages · Assets under CC BY-NC 4.0",
    footerContributors: "Contributors submit",

    // 404
    notFoundTitle: "Pet not found",
    notFoundDesc: "The requested pet page does not exist in the current catalog.",

    // Install page
    installPageTitle: "Install a pet in seconds",
    installPageSubtitle:
      "Pick the pet slug from the gallery and run one of the commands below. No need to clone the repository.",
    installStep1Title: "1. Find a pet",
    installStep1Desc:
      "Open the gallery, hit the pet you like, and copy the slug shown on its detail page.",
    installStep2Title: "2. Run the install command",
    installStep2Desc:
      "Pick the script for your shell and replace {slug} with your chosen pet slug.",
    installStep3Title: "3. Restart Codex",
    installStep3Desc:
      "Codex will pick up the new pet from your local pets directory automatically.",
    installBashLabel: "macOS / Linux",
    installPwshLabel: "Windows PowerShell",
    installNodeLabel: "Run with Node.js",
    installBashTip: "Requires curl and bash.",
    installPwshTip: "Run as a normal user, no admin rights needed.",
    installNodeTip: "Works anywhere npx is available.",
    installFaqTitle: "FAQ",
    installFaqQ1: "Where are pets installed?",
    installFaqA1:
      "Each pet lands in your Codex home (default ~/.codex) under pets/<pet-id>/.",
    installFaqQ2: "Can I uninstall a pet?",
    installFaqA2: "Delete the pet folder. Nothing else is touched.",
    installFaqQ3: "Is sudo required?",
    installFaqA3: "No. Installs are scoped to your user directory.",
    openGallery: "Open gallery",

    // Guide page
    guidePageTitle: "Submit your own Codex pet",
    guidePageSubtitle:
      "A short walkthrough of categories, the folder layout, and what reviewers look for.",
    guideCategoriesTitle: "Categories",
    guideCategoriesDesc:
      "We keep the taxonomy small so browsing stays simple. Pick the closest match when you submit.",
    guideStructureTitle: "Folder layout",
    guideStructureDesc:
      "Each pet lives under pets/<pet-slug>--<author-slug>/ and only contains three files.",
    guideStructureNote:
      "Generated previews land in assets/previews/<pet-id>/ and are produced by the build pipeline.",
    guideChecklistTitle: "Reviewer checklist",
    guideChecklistItem1: "Folder name matches the pet slug and author slug.",
    guideChecklistItem2: "pet.json id equals the folder name.",
    guideChecklistItem3: "spritesheet.webp is the final runtime asset.",
    guideChecklistItem4: "License is declared in submission.json.",
    guideChecklistItem5: "One pet per pull request.",
    guideOpenIssue: "Open a submission issue",
    guideReadFull: "Read full submission guide",

    // Sorting
    sortLabel: "Sort by",
    sortPopular: "Most viewed",
    sortDownloads: "Most installed",
    sortNewest: "Newest",
    sortName: "Name (A→Z)",
    statsViews: "{count} views",
    statsInstalls: "{count} installs",

    // Actions
    idle: "Idle",
    waving: "Waving",
    running: "Running",
    "running-left": "Running left",
    "running-right": "Running right",
    waiting: "Waiting",
    review: "Review",
    jumping: "Jumping",
    failed: "Failed",
  },
  zh: {
    // Header
    gallery: "画廊",
    install: "安装",
    guide: "指南",
    docs: "文档",
    github: "GitHub",
    submitPet: "提交宠物",

    // Hero
    heroBadge: "已收录 {count} 只社区宠物",
    heroTitle1: "发现并安装",
    heroTitle2: "Codex 宠物",
    heroDesc:
      "社区精选的 Codex 宠物画廊。浏览、预览动画，一条命令即可安装。",
    heroExplore: "浏览画廊",
    heroSubmit: "提交你的宠物",
    heroStatPets: "精选宠物",
    heroStatCategories: "分类数",
    heroStatLicense: "开源许可",
    heroStatLicenseValue: "MIT + CC BY-NC",
    exploreGallery: "浏览画廊",
    submitYourPet: "提交你的宠物",

    // Gallery
    galleryTitle: "画廊",
    petsAvailable: "共 {count} 只宠物",
    searchPlaceholder: "搜索宠物、作者、标签...",
    allCategories: "全部分类",
    noResults: "没有找到匹配的宠物",
    noResultsHint: "试试其他关键词或分类",

    // Card
    by: "作者",
    view: "查看",
    installBtn: "安装",
    copied: "已复制",
    defaultDesc: "一个精选的 Codex 宠物包。",

    // Detail
    backToGallery: "返回画廊",
    actionPreviews: "动作预览",
    actionPreviewsDesc: "Codex 中实际呈现的全部动作动画。",
    metadata: "元数据",
    author: "作者",
    license: "许可证",
    displayName: "显示名称",
    slug: "标识符",
    tags: "标签",
    installCommands: "安装命令",
    copyBashInstall: "复制 Bash 命令",
    copyPowerShell: "复制 PowerShell",
    source: "源码",

    // Footer
    contributing: "贡献指南",
    footerTagline: "领养一只像素伙伴。一条命令，无需克隆仓库。",
    footerLinksTitle: "浏览",
    footerCommunityTitle: "社区",
    footerLicenseLine: "代码遵循 MIT · 宠物资源遵循 CC BY-NC 4.0。",
    footerBuiltWith: "使用 Next.js 构建 · 部署在 Cloudflare Pages · 资源遵循 CC BY-NC 4.0",
    footerContributors: "贡献者提交",

    // 404
    notFoundTitle: "宠物未找到",
    notFoundDesc: "当前目录中不存在该宠物页面。",

    // Install page
    installPageTitle: "几秒钟安装一只宠物",
    installPageSubtitle:
      "从画廊里挑一只想要的宠物，复制下方任意命令运行即可。无需克隆仓库。",
    installStep1Title: "1. 选一只宠物",
    installStep1Desc: "打开画廊进入宠物详情页，复制页面上的 slug。",
    installStep2Title: "2. 运行安装命令",
    installStep2Desc: "选择对应你系统的命令，把 {slug} 替换成你选中的宠物 slug。",
    installStep3Title: "3. 重启 Codex",
    installStep3Desc: "Codex 会从本地的 pets 目录自动加载新宠物。",
    installBashLabel: "macOS / Linux",
    installPwshLabel: "Windows PowerShell",
    installNodeLabel: "使用 Node.js 安装",
    installBashTip: "需要本地有 curl 和 bash。",
    installPwshTip: "无需管理员权限，普通用户即可执行。",
    installNodeTip: "只要环境里有 npx 就能跑。",
    installFaqTitle: "常见问题",
    installFaqQ1: "宠物会装到哪里？",
    installFaqA1: "默认安装到 Codex 主目录（默认是 ~/.codex）的 pets/<pet-id>/ 里。",
    installFaqQ2: "怎么卸载？",
    installFaqA2: "直接删掉对应宠物文件夹即可，不会影响其他东西。",
    installFaqQ3: "需要 sudo 吗？",
    installFaqA3: "不需要。所有安装都只动当前用户目录。",
    openGallery: "去画廊看看",

    // Guide page
    guidePageTitle: "提交你自己的 Codex 宠物",
    guidePageSubtitle: "简短走一遍分类、目录结构以及审核要点。",
    guideCategoriesTitle: "分类",
    guideCategoriesDesc:
      "我们把分类保持得很简单，便于浏览。提交时选最贴近的一个即可。",
    guideStructureTitle: "目录结构",
    guideStructureDesc:
      "每只宠物放在 pets/<pet-slug>--<author-slug>/ 下，目录里只允许三个文件。",
    guideStructureNote:
      "自动生成的预览会落在 assets/previews/<pet-id>/，由构建流水线生成。",
    guideChecklistTitle: "审核清单",
    guideChecklistItem1: "目录名遵循 pet-slug--author-slug 格式。",
    guideChecklistItem2: "pet.json 的 id 与目录名完全一致。",
    guideChecklistItem3: "spritesheet.webp 是最终运行时资源，不是过程版。",
    guideChecklistItem4: "在 submission.json 中明确写出许可证。",
    guideChecklistItem5: "一个 PR 只提交一只宠物。",
    guideOpenIssue: "去 GitHub 提交申请",
    guideReadFull: "阅读完整投稿指南",

    // Sorting
    sortLabel: "排序",
    sortPopular: "最多浏览",
    sortDownloads: "最多安装",
    sortNewest: "最新",
    sortName: "名称（A→Z）",
    statsViews: "{count} 次浏览",
    statsInstalls: "{count} 次安装",

    // Actions
    idle: "待机",
    waving: "挥手",
    running: "奔跑",
    "running-left": "向左跑",
    "running-right": "向右跑",
    waiting: "等待",
    review: "审查",
    jumping: "跳跃",
    failed: "失败",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(locale: Locale, key: TranslationKey, params?: Record<string, string | number>): string {
  let text: string = translations[locale][key] ?? translations.en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const lang = navigator.language || "en";
  if (lang.startsWith("zh")) return "zh";
  return "en";
}
