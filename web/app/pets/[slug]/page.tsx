import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyCommandButton } from "@/components/copy-command-button";
import { getActionEntries, getAllPets, getPetBySlug } from "@/lib/pets";

export function generateStaticParams() {
  return getAllPets().map((pet) => ({ slug: pet.slug }));
}

export default async function PetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pet = getPetBySlug(slug);

  if (!pet) {
    notFound();
  }

  const actions = getActionEntries(pet);

  return (
    <main className="page-shell">
      <section className="page-intro">
        <Link className="breadcrumbs" href="/">
          Back to gallery
        </Link>
      </section>

      <section className="detail-layout">
        <div className="detail-panel">
          <div className="detail-preview">
            <img className="detail-preview__image" src={pet.previewImage} alt={`${pet.name} preview`} />
          </div>

          <span className="eyebrow">{pet.primary_category}</span>
          <h1 className="detail-title">{pet.name}</h1>
          <p className="detail-copy">{pet.description ?? pet.runtimeDescription ?? "A curated Codex pet package."}</p>

          <div className="detail-actions">
            <CopyCommandButton command={pet.installCommand} label="Copy Bash Install" />
            <CopyCommandButton command={pet.installCommandPowerShell} label="Copy PowerShell" />
          </div>

          <div className="detail-links" style={{ marginTop: 12 }}>
            <a className="button-link--subtle" href={pet.repositoryPath} target="_blank" rel="noreferrer">
              View Source Files
            </a>
            <a
              className="button-link--subtle"
              href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              Submit a Pet
            </a>
          </div>

          <section style={{ marginTop: 28 }}>
            <div className="section-header">
              <div>
                <h2 className="section-title">Action previews</h2>
                <p className="section-copy">Core Codex states rendered from the generated preview assets already tracked in the repo.</p>
              </div>
            </div>

            <div className="action-grid">
              {actions.map((item) => (
                <article className="action-grid__card" key={item.action}>
                  <h3 className="action-grid__title">{item.title}</h3>
                  <img className="action-grid__image" src={item.image} alt={`${pet.name} ${item.title}`} />
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="detail-panel">
          <div className="section-header">
            <div>
              <h2 className="section-title">Metadata</h2>
              <p className="section-copy">Repository metadata and runtime-facing install details.</p>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-card__label">Author</div>
              <div className="info-card__value">
                {pet.author_url ? <a href={pet.author_url}>{pet.author_handle ?? pet.author}</a> : pet.author}
              </div>
            </div>
            <div className="info-card">
              <div className="info-card__label">License</div>
              <div className="info-card__value">{pet.license}</div>
            </div>
            <div className="info-card">
              <div className="info-card__label">Display name</div>
              <div className="info-card__value">{pet.displayName ?? "Not set"}</div>
            </div>
            <div className="info-card">
              <div className="info-card__label">Slug</div>
              <div className="info-card__value">{pet.slugLabel}</div>
            </div>
          </div>

          <section style={{ marginTop: 20 }}>
            <div className="info-card">
              <div className="info-card__label">Tags</div>
              <div className="info-card__value">{pet.tags.length ? pet.tags.join(", ") : "No tags provided."}</div>
            </div>
          </section>

          <section style={{ marginTop: 20 }}>
            <div className="info-card">
              <div className="info-card__label">Install command (Bash)</div>
              <div className="command-block">
                <code>{pet.installCommand}</code>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 20 }}>
            <div className="info-card">
              <div className="info-card__label">Install command (PowerShell)</div>
              <div className="command-block">
                <code>{pet.installCommandPowerShell}</code>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
