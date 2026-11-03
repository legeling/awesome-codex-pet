import type { Locale } from "@/lib/i18n";

const chineseTagLabels: Record<string, string> = {
  "3d": "3D",
  "3d-toy": "3D 玩具风",
  "ai-generated": "AI 生成",
  alicorn: "天角兽",
  angelic: "天使风",
  angeloid: "人造天使",
  animal: "动物",
  anime: "动漫",
  animated: "动画",
  anthropomorphic: "拟人",
  assistant: "助手",
  bear: "熊",
  bee: "蜜蜂",
  bichon: "比熊犬",
  blonde: "金发",
  "blue-hair": "蓝发",
  bows: "蝴蝶结",
  brown: "棕色",
  "brown-hair": "棕发",
  butterfly: "蝴蝶",
  calm: "沉静",
  calico: "三花猫",
  cape: "披风",
  cat: "猫咪",
  "cat-ears": "猫耳",
  catgirl: "猫娘",
  chibi: "Q 版",
  cloud: "云朵",
  codex: "Codex",
  "codex-generated": "Codex 生成",
  "codex-pet": "Codex 宠物",
  "codex-pets": "Codex 宠物",
  "codex-v2": "Codex V2",
  coding: "编程",
  coffee: "咖啡",
  cute: "可爱",
  cyberpunk: "赛博朋克",
  dog: "狗狗",
  electric: "电气",
  elegant: "优雅",
  fantasy: "奇幻",
  "fan-art": "同人创作",
  game: "游戏",
  "game-character": "游戏角色",
  gentle: "温柔",
  glasses: "眼镜",
  green: "绿色",
  "hatch-pet": "宠物孵化",
  helper: "助手",
  kitten: "小猫",
  "look-directions": "16 向环视",
  mascot: "吉祥物",
  meme: "网络梗",
  minimal: "极简",
  "open-source": "开源",
  orange: "橙色",
  original: "原创",
  "original-character": "原创角色",
  "original-pet": "原创宠物",
  pink: "粉色",
  "pink-hair": "粉发",
  pixel: "像素",
  "pixel-art": "像素艺术",
  purple: "紫色",
  retro: "复古",
  robot: "机器人",
  round: "圆润",
  schoolgirl: "女学生",
  scout: "侦察兵",
  sleepy: "困倦",
  soft: "柔和",
  sword: "剑",
  tabby: "虎斑猫",
  teal: "青绿色",
  "teddy-bear-costume": "泰迪熊连体衣",
  theatrical: "舞台风",
  unicorn: "独角兽",
  utility: "工具伙伴",
  v1: "V1",
  v2: "V2",
  white: "白色",
  "white-hair": "白发",
  "yuexin-miao": "月薪喵",

  "a-certain-scientific-railgun": "某科学的超电磁炮",
  "a-record-of-a-mortals-journey-to-immortality": "凡人修仙传",
  arknights: "明日方舟",
  "attack-on-titan": "进击的巨人",
  "bang-dream": "BanG Dream!",
  "bocchi-the-rock": "孤独摇滚！",
  "chainsaw-man": "电锯人",
  "demon-slayer": "鬼灭之刃",
  "detective-conan": "名侦探柯南",
  "dragon-ball": "龙珠",
  evangelion: "新世纪福音战士",
  "genshin-impact": "原神",
  "honkai-star-rail": "崩坏：星穹铁道",
  onimai: "别当欧尼酱了！",
  "reverse-1999": "重返未来：1999",
  "salary-cat": "月薪喵",
  salarycat: "月薪喵",
  "son-goku": "孙悟空",
  "touhou-project": "东方 Project",
  "wuthering-waves": "鸣潮",
  xianxia: "仙侠",
};

const preservedWords: Record<string, string> = {
  ai: "AI",
  codex: "Codex",
  openai: "OpenAI",
  v1: "V1",
  v2: "V2",
  "3d": "3D",
};

function getOwnLabel(labels: Record<string, string>, key: string) {
  return Object.prototype.hasOwnProperty.call(labels, key)
    ? labels[key]
    : undefined;
}

function humanizeTag(tag: string) {
  return tag
    .split("-")
    .map(
      (part) =>
        getOwnLabel(preservedWords, part) ??
        (part.length > 0 ? part[0].toUpperCase() + part.slice(1) : part),
    )
    .join(" ");
}

export function getLocalizedTagLabel(tag: string, locale: Locale) {
  if (locale === "zh") {
    return getOwnLabel(chineseTagLabels, tag) ?? humanizeTag(tag);
  }
  return humanizeTag(tag);
}

export function getTagSearchTerms(tag: string) {
  return [tag, humanizeTag(tag), getOwnLabel(chineseTagLabels, tag)].filter(
    (value): value is string => Boolean(value),
  );
}

export function getChineseTagLabel(tag: string) {
  return getOwnLabel(chineseTagLabels, tag);
}
