"use client";

import Link from "next/link";

import type { Pet } from "@/lib/pets";
import { CopyCommandButton } from "@/components/copy-command-button";
import { useLocale } from "@/components/locale-provider";

type PetCardProps = {
  pet: Pet;
  views?: number;
  installs?: number;
};

function formatCount(n: number): string {
  if (n < 1000) return n.toString();
  if (n < 1000000) return `${(n / 1000).toFixed(n < 10000 ? 1 : 0)}k`;
  return `${(n / 1000000).toFixed(1)}m`;
}

export function PetCard({ pet, views = 0, installs = 0 }: PetCardProps) {
  const { t } = useLocale();
  const hasStats = views > 0 || installs > 0;

  return (
    <article className="group rounded-2xl border border-border bg-bg-elevated overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg hover:border-border-hover hover:-translate-y-0.5">
      {/* Visual area */}
      <div className="relative h-52 bg-bg-secondary flex items-center justify-center p-6">
        <img
          className="relative w-auto h-full max-w-full object-contain [image-rendering:pixelated] transition-transform duration-200 group-hover:scale-105"
          src={pet.previewImage}
          alt={`${pet.name} preview`}
          loading="lazy"
        />
        {hasStats ? (
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            {views > 0 ? (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-bg/85 backdrop-blur border border-border text-[11px] text-text-secondary"
                title={t("statsViews", { count: views })}
              >
                <svg
                  className="size-3 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {formatCount(views)}
              </span>
            ) : null}
            {installs > 0 ? (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-bg/85 backdrop-blur border border-border text-[11px] text-text-secondary"
                title={t("statsInstalls", { count: installs })}
              >
                <svg
                  className="size-3 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {formatCount(installs)}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow border-t border-border">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h2 className="text-base font-semibold text-text leading-tight">
            {pet.name}
          </h2>
          <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-bg-secondary text-muted border border-border">
            {pet.primary_category}
          </span>
        </div>

        <p className="text-sm text-muted mb-1">
          {t("by")}{" "}
          {pet.author_url ? (
            <a href={pet.author_url} className="text-accent hover:underline">
              {pet.author_handle ?? pet.author}
            </a>
          ) : (
            pet.author
          )}
        </p>

        <p className="text-sm text-muted leading-relaxed mt-2 mb-4 flex-grow line-clamp-2">
          {pet.description ?? pet.runtimeDescription ?? t("defaultDesc")}
        </p>

        <div className="flex gap-2 mt-auto">
          <Link
            className="flex-1 inline-flex items-center justify-center h-9 px-4 rounded-lg bg-text text-white text-sm font-medium hover:bg-text-secondary transition-colors"
            href={`/pets/${pet.slug}`}
          >
            {t("view")}
          </Link>
          <CopyCommandButton command={pet.installCommand} label={t("installBtn")} />
        </div>
      </div>
    </article>
  );
}
