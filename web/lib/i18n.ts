export type Locale = "en" | "zh";

export const translations = {
  en: {
    // Header
    gallery: "Gallery",
    install: "Install",
    github: "GitHub",
    submitPet: "Submit a Pet",

    // Hero
    heroBadge: "{count} community pets available",
    heroTitle1: "Discover & install",
    heroTitle2: "Codex pets",
    heroDesc:
      "A curated gallery of community-made pets for Codex. Browse, preview animations, and install with a single command.",
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
    actionPreviewsDesc: "Core animation states rendered from the spritesheet.",
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
    footerBuiltWith: "Built with Next.js · Deployed on Vercel · Assets under CC BY-NC 4.0",
    footerContributors: "Contributors submit",

    // 404
    notFoundTitle: "Pet not found",
    notFoundDesc: "The requested pet page does not exist in the current catalog.",

    // Actions
    idle: "Idle",
    waving: "Waving",
    running: "Running",
    waiting: "Waiting",
    review: "Review",
  },
  zh: {
    // Header
    gallery: "画廊",
    install: "安装",
    github: "GitHub",
    submitPet: "提交宠物",

    // Hero
    heroBadge: "已收录 {count} 只社区宠物",
    heroTitle1: "发现并安装",
    heroTitle2: "Codex 宠物",
    heroDesc:
      "社区精选的 Codex 宠物画廊。浏览、预览动画，一条命令即可安装。",
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
    actionPreviewsDesc: "从 spritesheet 渲染的核心动画状态。",
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
    footerBuiltWith: "使用 Next.js 构建 · 部署在 Vercel · 资源遵循 CC BY-NC 4.0",
    footerContributors: "贡献者提交",

    // 404
    notFoundTitle: "宠物未找到",
    notFoundDesc: "当前目录中不存在该宠物页面。",

    // Actions
    idle: "待机",
    waving: "挥手",
    running: "奔跑",
    waiting: "等待",
    review: "审查",
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
