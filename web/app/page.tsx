import Link from "next/link";

import { PetGallery } from "@/components/pet-gallery";
import { getAllPets, getCategories, getFeaturedPets } from "@/lib/pets";

export default function HomePage() {
  const pets = getAllPets();
  const categories = getCategories(pets);
  const featured = getFeaturedPets(pets);

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__panel">
          <span className="eyebrow">Codex Pet Gallery</span>
          <h1 className="hero__title">Collect, preview, and install community pets.</h1>
          <p className="hero__desc">
            This lightweight site turns the repository into a proper gallery: browse pets by category, preview core actions, copy
            one-command install snippets, and jump straight into the GitHub contribution flow.
          </p>

          <div className="hero__actions">
            <Link className="button-link" href="#gallery">
              Explore Gallery
            </Link>
            <Link
              className="button-link--subtle"
              href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              Submit via GitHub
            </Link>
          </div>
        </div>

        <aside className="hero__stats">
          <div>
            <span className="eyebrow">Live Catalog</span>
            <p className="section-copy">Built directly from repository metadata, no extra database required.</p>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card__value">{pets.length}</div>
              <div className="stat-card__label">Published pets</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">{categories.length}</div>
              <div className="stat-card__label">Primary categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">GitHub</div>
              <div className="stat-card__label">Submission workflow</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">Vercel</div>
              <div className="stat-card__label">Ready to deploy</div>
            </div>
          </div>

          <div>
            <strong>Featured this build</strong>
            <p className="section-copy">{featured.map((pet) => pet.name).join(" · ")}</p>
          </div>
        </aside>
      </section>

      <PetGallery pets={pets} categories={categories} />
    </main>
  );
}
