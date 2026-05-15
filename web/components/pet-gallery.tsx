"use client";

import { useMemo, useState } from "react";

import { FilterBar } from "@/components/filter-bar";
import { PetCard } from "@/components/pet-card";
import { useLocale } from "@/components/locale-provider";
import type { Pet } from "@/lib/pets";

type PetGalleryProps = {
  pets: Pet[];
  categories: string[];
};

export function PetGallery({ pets, categories }: PetGalleryProps) {
  const { t } = useLocale();
  const [filters, setFilters] = useState({ query: "", category: "All" });

  const filteredPets = useMemo(() => {
    const loweredQuery = filters.query.toLowerCase();

    return pets.filter((pet) => {
      const matchesCategory =
        filters.category === "All" || pet.primary_category === filters.category;
      if (!matchesCategory) return false;
      if (!loweredQuery) return true;

      const haystack = [
        pet.name,
        pet.author,
        pet.author_handle,
        pet.primary_category,
        pet.description,
        pet.runtimeDescription,
        pet.displayName,
        ...pet.tags,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(loweredQuery);
    });
  }, [filters, pets]);

  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t("galleryTitle")}</h2>
          <p className="text-muted text-sm mt-1">
            {t("petsAvailable", { count: filteredPets.length })}
          </p>
        </div>
      </div>

      <FilterBar categories={categories} onChange={setFilters} />

      {filteredPets.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <p className="text-lg">{t("noResults")}</p>
          <p className="text-sm mt-1">{t("noResultsHint")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPets.map((pet, i) => (
            <div
              key={pet.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <PetCard pet={pet} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
