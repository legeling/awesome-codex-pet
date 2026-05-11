"use client";

import { useMemo, useState } from "react";

import { FilterBar } from "@/components/filter-bar";
import { PetCard } from "@/components/pet-card";
import type { Pet } from "@/lib/pets";

type PetGalleryProps = {
  pets: Pet[];
  categories: string[];
};

export function PetGallery({ pets, categories }: PetGalleryProps) {
  const [filters, setFilters] = useState({ query: "", category: "All" });

  const filteredPets = useMemo(() => {
    const loweredQuery = filters.query.toLowerCase();

    return pets.filter((pet) => {
      const matchesCategory = filters.category === "All" || pet.primary_category === filters.category;
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
    <section id="gallery">
      <div className="section-header">
        <div>
          <h2 className="section-title">Gallery</h2>
          <p className="section-copy">
            Browse curated Codex pets, preview core actions, and copy installation commands without opening the repository.
          </p>
        </div>
      </div>

      <FilterBar categories={categories} onChange={setFilters} />

      {filteredPets.length === 0 ? (
        <div className="empty-state">No pets match the current filters.</div>
      ) : (
        <div className="grid pet-grid">
          {filteredPets.map((pet) => (
            <PetCard key={pet.slug} pet={pet} />
          ))}
        </div>
      )}
    </section>
  );
}
