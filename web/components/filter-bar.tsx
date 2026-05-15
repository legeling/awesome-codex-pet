"use client";

import { useDeferredValue, useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";

type FilterBarProps = {
  categories: string[];
  onChange: (filters: { query: string; category: string }) => void;
};

export function FilterBar({ categories, onChange }: FilterBarProps) {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    onChange({ query: deferredQuery.trim(), category });
  }, [category, deferredQuery, onChange]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <div className="relative flex-1">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          className="w-full h-10 pl-10 pr-4 rounded-lg text-sm text-text bg-bg border border-border focus:border-text focus:ring-0 outline-none transition-colors placeholder:text-muted/60"
          type="search"
          placeholder={t("searchPlaceholder")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search pets"
        />
      </div>

      <select
        className="h-10 px-4 pr-8 rounded-lg text-sm text-text bg-bg border border-border focus:border-text focus:ring-0 outline-none transition-colors appearance-none cursor-pointer min-w-[160px]"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">{t("allCategories")}</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
