"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { CopyCommandButton } from "@/components/copy-command-button";
import type { Pet, PreviewAction } from "@/lib/pets";

type ActionEntry = {
  action: PreviewAction;
  title: string;
  image: string;
};

type PetDetailContentProps = {
  pet: Pet;
  actions: ActionEntry[];
};

export function PetDetailContent({ pet, actions }: PetDetailContentProps) {
  const { t } = useLocale();

  return (
    <main className="max-w-[1200px] mx-auto px-6 pb-20">
      {/* Breadcrumb */}
      <div className="py-6">
        <Link
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
          href="/"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t("backToGallery")}
        </Link>
      </div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-10">
        {/* Main content */}
        <div>
          {/* Preview - solid color background, no shadow */}
          <div className="rounded-2xl bg-bg-secondary border border-border p-10 flex justify-center items-center min-h-[320px] mb-8">
            <img
              className="max-w-full max-h-[300px] object-contain [image-rendering:pixelated]"
              src={pet.previewImage}
              alt={`${pet.name} preview`}
            />
          </div>

          {/* Info */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-light text-accent">
              {pet.primary_category}
            </span>
            <span className="text-sm text-muted">{pet.license}</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            {pet.name}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-8">
            {pet.description ?? pet.runtimeDescription ?? t("defaultDesc")}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <CopyCommandButton command={pet.installCommand} label={t("copyBashInstall")} />
            <CopyCommandButton command={pet.installCommandPowerShell} label={t("copyPowerShell")} />
            <a
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-lg border border-border text-sm font-medium text-text hover:bg-surface transition-colors"
              href={pet.repositoryPath}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t("source")}
            </a>
          </div>

          {/* Action previews */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-1">
              {t("actionPreviews")}
            </h2>
            <p className="text-sm text-muted mb-6">
              {t("actionPreviewsDesc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {actions.map((item) => (
                <div
                  className="rounded-xl border border-border bg-bg-secondary p-4 hover:border-border-hover transition-colors"
                  key={item.action}
                >
                  <span className="text-xs font-medium text-muted uppercase tracking-wide mb-3 block">
                    {t(item.action as "idle" | "waving" | "running" | "waiting" | "review")}
                  </span>
                  <img
                    className="w-full rounded-lg [image-rendering:pixelated]"
                    src={item.image}
                    alt={`${pet.name} ${item.title}`}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Metadata */}
          <div className="rounded-2xl border border-border p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted mb-4">
              {t("metadata")}
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-xs text-muted mb-0.5">{t("author")}</dt>
                <dd className="text-sm font-medium">
                  {pet.author_url ? (
                    <a href={pet.author_url} className="text-accent hover:underline">
                      {pet.author_handle ?? pet.author}
                    </a>
                  ) : (
                    pet.author
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted mb-0.5">{t("license")}</dt>
                <dd className="text-sm font-medium">{pet.license}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted mb-0.5">{t("displayName")}</dt>
                <dd className="text-sm font-medium">{pet.displayName || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted mb-0.5">{t("slug")}</dt>
                <dd>
                  <code className="font-mono text-xs text-text-secondary bg-surface px-1.5 py-0.5 rounded">
                    {pet.slugLabel}
                  </code>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted mb-0.5">{t("tags")}</dt>
                <dd>
                  {pet.tags.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {pet.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-2 py-0.5 rounded-md bg-surface text-xs text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-muted">—</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {/* Install commands */}
          <div className="rounded-2xl border border-border p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted mb-4">
              {t("installCommands")}
            </h2>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted block mb-1.5">Bash</span>
                <div className="rounded-lg bg-bg-secondary border border-border p-3 font-mono text-xs text-text-secondary overflow-x-auto">
                  <code className="whitespace-nowrap">{pet.installCommand}</code>
                </div>
              </div>

              <div>
                <span className="text-xs text-muted block mb-1.5">PowerShell</span>
                <div className="rounded-lg bg-bg-secondary border border-border p-3 font-mono text-xs text-text-secondary overflow-x-auto">
                  <code className="whitespace-nowrap break-all">
                    {pet.installCommandPowerShell}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
