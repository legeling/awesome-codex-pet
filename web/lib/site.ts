export const siteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-codex-pet.pages.dev",
  title: "Awesome Codex Pet",
  altName: "Codex Pet Gallery",
  description:
    "Discover and install community-made Codex pets. A curated open-source gallery with animated pixel-art pets, one-command install for macOS, Linux, and Windows, and GitHub-native submissions.",
  shortDescription:
    "A curated gallery of community-made Codex pets with animated previews and one-command install.",
  ogImage: "/assets/cover/awesome-codex-pet-cover.png",
  repo: "https://github.com/legeling/awesome-codex-pet",
  keywords: [
    "Codex",
    "Codex pet",
    "Codex pets",
    "Codex CLI",
    "OpenAI Codex",
    "desktop pet",
    "pixel art pet",
    "spritesheet",
    "动漫桌面宠物",
    "代码助手宠物",
    "open source pet",
    "Awesome Codex Pet",
  ],
};

export type SiteConfig = typeof siteConfig;
