import { getAllPets, getPetBySlug, getActionEntries } from "@/lib/pets";
import { PetDetailContent } from "@/components/pet-detail-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPets().map((pet) => ({ slug: pet.slug }));
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

  return <PetDetailContent pet={pet} actions={actions} />;
}
