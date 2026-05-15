"use client";

import { useLocale } from "@/components/locale-provider";

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="px-2 py-1 text-xs font-medium text-muted hover:text-text rounded-md hover:bg-surface transition-colors cursor-pointer"
      aria-label="Switch language"
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
