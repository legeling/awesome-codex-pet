import type { MetadataRoute } from "next";
import { getAllPets } from "@/lib/pets";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-codex-pet.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, priority: 1 },
    { url: `${siteUrl}/install`, lastModified: now, priority: 0.7 },
    { url: `${siteUrl}/guide`, lastModified: now, priority: 0.7 },
  ];
  const petEntries = getAllPets().map((pet) => ({
    url: `${siteUrl}/pets/${pet.slug}`,
    lastModified: now,
    priority: 0.8,
  }));
  return [...staticEntries, ...petEntries];
}
