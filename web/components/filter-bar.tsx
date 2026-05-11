"use client";

import { useDeferredValue, useEffect, useState } from "react";

type FilterBarProps = {
  categories: string[];
  onChange: (filters: { query: string; category: string }) => void;
};

export function FilterBar({ categories, onChange }: FilterBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    onChange({ query: deferredQuery.trim(), category });
  }, [category, deferredQuery, onChange]);

  return (
    <section className="filter-panel" aria-label="Pet filters">
      <label className="field">
        <span className="field__label">Search pets, authors, tags</span>
        <input
          className="field__control"
          type="search"
          placeholder="Firefly, NateWanggg, cat..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <label className="field">
        <span className="field__label">Category</span>
        <select className="field__control" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="All">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
