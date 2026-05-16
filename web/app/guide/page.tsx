import { GuidePageContent } from "@/components/guide-page-content";
import { getAllPets, getCategories } from "@/lib/pets";

export default function GuidePage() {
  const categories = getCategories(getAllPets());
  return <GuidePageContent categories={categories} />;
}
