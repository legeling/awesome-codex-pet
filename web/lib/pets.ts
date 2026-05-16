import { readFileSync } from "node:fs";
import { join } from "node:path";

export type PreviewAction = string;

type CatalogPet = {
  slug: string;
  name: string;
  author: string;
  author_handle?: string;
  author_url?: string;
  primary_category: string;
  license: string;
  description?: string;
};

export type Pet = CatalogPet & {
  displayName?: string;
  runtimeDescription?: string;
  slugLabel: string;
  tags: string[];
  sourceType: string;
  sourceUrl: string;
  previewImage: string;
  contactSheet: string;
  actions: PreviewAction[];
  gifs: Record<PreviewAction, string>;
  installCommand: string;
  installCommandPowerShell: string;
  repositoryPath: string;
};

function readGeneratedPets(): Pet[] {
  const path = join(process.cwd(), ".generated", "pets.generated.json");
  return JSON.parse(readFileSync(path, "utf8")) as Pet[];
}

export function getAllPets(): Pet[] {
  return readGeneratedPets();
}

export function getPetBySlug(slug: string) {
  return getAllPets().find((pet) => pet.slug === slug) ?? null;
}

export function getCategories(pets: Pet[]) {
  return [...new Set(pets.map((pet) => pet.primary_category))];
}

export function getFeaturedPets(pets: Pet[]) {
  return pets.slice(0, 4);
}

function titleCase(input: string) {
  return input
    .split("-")
    .map((part) => (part.length === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join(" ");
}

export function getActionEntries(pet: Pet) {
  return pet.actions.map((action) => ({
    action,
    title: titleCase(action),
    image: pet.gifs[action] ?? `/assets/previews/${pet.slug}/gifs/${action}.gif`,
  }));
}
