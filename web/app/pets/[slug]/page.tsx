import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PetDetailContent } from "@/components/pet-detail-content";
import { getActionEntries, getAllPets, getPetBySlug } from "@/lib/pets";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPets().map((pet) => ({ slug: pet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pet = getPetBySlug(slug);
  if (!pet) {
    return { title: "Pet not found" };
  }

  const previewImage = pet.previewImage?.startsWith("/")
    ? pet.previewImage
    : `/${pet.previewImage}`;
  const title = `${pet.name} — Codex pet by ${pet.author_handle ?? pet.author}`;
  const description =
    pet.description ??
    pet.runtimeDescription ??
    `Install ${pet.name}, a community-made Codex pet by ${pet.author}, with one command.`;
  const canonical = `/pets/${pet.slug}`;
  const url = `${siteConfig.url}${canonical}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: [pet.name, pet.primary_category, ...pet.tags, "Codex pet"],
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: previewImage,
          alt: `${pet.name} idle preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage],
    },
  };
}

export default async function PetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pet = getPetBySlug(slug);

  if (!pet) {
    notFound();
  }

  const actions = getActionEntries(pet);
  const url = `${siteConfig.url}/pets/${pet.slug}`;
  const previewImage = pet.previewImage?.startsWith("http")
    ? pet.previewImage
    : `${siteConfig.url}${pet.previewImage}`;

  const petJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: pet.name,
    description:
      pet.description ??
      pet.runtimeDescription ??
      `${pet.name} — a Codex pet`,
    url,
    image: previewImage,
    author: {
      "@type": "Person",
      name: pet.author,
      url: pet.author_url ?? undefined,
    },
    genre: pet.primary_category,
    keywords: pet.tags.join(", "),
    license: pet.license,
    inLanguage: ["en", "zh-CN"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Gallery",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pet.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <PetDetailContent pet={pet} actions={actions} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
