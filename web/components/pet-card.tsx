import Link from "next/link";

import type { Pet } from "@/lib/pets";
import { CopyCommandButton } from "@/components/copy-command-button";

type PetCardProps = {
  pet: Pet;
};

export function PetCard({ pet }: PetCardProps) {
  return (
    <article className="pet-card">
      <div className="pet-card__visual">
        <div className="badge-row">
          <span className="badge">{pet.primary_category}</span>
          <span className="badge">{pet.license}</span>
        </div>

        <img className="pet-card__preview" src={pet.previewImage} alt={`${pet.name} preview`} />
      </div>

      <div className="pet-card__body">
        <div className="pet-card__title-row">
          <div>
            <h2 className="pet-card__title">{pet.name}</h2>
            <div className="pet-card__subtitle">
              by {pet.author_url ? <a href={pet.author_url}>{pet.author_handle ?? pet.author}</a> : pet.author}
            </div>
          </div>
          {pet.displayName ? <span className="badge">{pet.displayName}</span> : null}
        </div>

        <div className="pet-card__meta">{pet.description ?? pet.runtimeDescription ?? "A curated Codex pet package."}</div>

        <div className="pet-card__actions">
          <Link className="button-link" href={`/pets/${pet.slug}`}>
            View Details
          </Link>
          <CopyCommandButton command={pet.installCommand} label="Copy Install" />
        </div>
      </div>
    </article>
  );
}
