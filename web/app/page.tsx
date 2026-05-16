import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { PetGallery } from "@/components/pet-gallery";
import { getAllPets, getCategories, getFeaturedPets } from "@/lib/pets";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.title} — community-made Codex pets`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.title} — community-made Codex pets`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} — community-made Codex pets`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  const pets = getAllPets();
  const categories = getCategories(pets);
  const featured = getFeaturedPets(pets);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteConfig.title} — gallery`,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: ["en", "zh-CN"],
    hasPart: pets.slice(0, 12).map((pet) => ({
      "@type": "CreativeWork",
      name: pet.name,
      url: `${siteConfig.url}/pets/${pet.slug}`,
      author: {
        "@type": "Person",
        name: pet.author,
        url: pet.author_url ?? undefined,
      },
      genre: pet.primary_category,
      license: pet.license,
    })),
  };

  return (
    <main>
      <HeroSection
        petCount={pets.length}
        categoryCount={categories.length}
        featured={featured}
      />
      <section className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <PetGallery pets={pets} categories={categories} />
        </div>
      </section>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
    </main>
  );
}
