import { PetGallery } from "@/components/pet-gallery";
import { HeroSection } from "@/components/hero-section";
import { getAllPets, getCategories, getFeaturedPets } from "@/lib/pets";

export default function HomePage() {
  const pets = getAllPets();
  const categories = getCategories(pets);
  const featured = getFeaturedPets(pets);

  return (
    <main>
      <HeroSection petCount={pets.length} featured={featured} />

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Gallery */}
      <section className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <PetGallery pets={pets} categories={categories} />
        </div>
      </section>
    </main>
  );
}
