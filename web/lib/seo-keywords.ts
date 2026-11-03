import type { Pet } from "@/lib/pets";
import { siteConfig } from "@/lib/site";
import { getTagSearchTerms } from "@/lib/tag-localization";

const MAX_KEYWORDS = 64;

export function buildSeoKeywords(
  ...groups: Array<ReadonlyArray<string | null | undefined>>
) {
  const seen = new Set<string>();
  const keywords: string[] = [];

  // HTML serializes keywords as a comma-separated list. Apply the budget to
  // those actual terms, including commas inside contributor-provided names.
  for (const value of groups.flat().flatMap((value) => value?.split(",") ?? [])) {
    const keyword = value?.trim();
    if (!keyword) continue;
    const normalized = keyword.normalize("NFKC").toLowerCase();
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    keywords.push(keyword);
    if (keywords.length === MAX_KEYWORDS) break;
  }

  return keywords;
}

export function withSiteKeywords(
  ...groups: Array<ReadonlyArray<string | null | undefined>>
) {
  return buildSeoKeywords(...groups, siteConfig.keywords);
}

export function getPetSeoKeywords(pet: Pet) {
  const englishName = pet.localizedNames.en ?? pet.name;
  const chineseName = pet.localizedNames.zh;
  const names = buildSeoKeywords([pet.name, englishName, chineseName]);
  const tagTerms = pet.tags.flatMap(getTagSearchTerms);

  return withSiteKeywords(
    names,
    names.flatMap((name) => [
      `${name} Codex pet`,
      `${name} Codex 小宠物`,
      `${name} desktop pet`,
      `${name} 桌面宠物`,
    ]),
    chineseName
      ? [
          `${chineseName} Codex 宠物下载`,
          `${chineseName} Codex 宠物安装`,
          `${chineseName} 像素宠物`,
        ]
      : [],
    [
      pet.categoryLabel.en,
      pet.categoryLabel.zh,
      `${pet.categoryLabel.en} Codex pets`,
      `${pet.categoryLabel.zh} Codex 宠物`,
      pet.author,
      pet.author_handle,
    ],
    tagTerms,
    pet.collections,
  );
}
