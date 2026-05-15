"use client";

import Link from "next/link";

import type { Pet } from "@/lib/pets";
import { CopyCommandButton } from "@/components/copy-command-button";
import { useLocale } from "@/components/locale-provider";

type PetCardProps = {
  pet: Pet;
};

export function PetCard({ pet }: PetCardProps) {
  const { t } = useLocale();

  return (
    <article className="group rounded-2xl border border-border bg-bg-elevated overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg hover:border-border-hover hover:-translate-y-0.5">
      {/* Visual area - clean solid background, no shadow */}
      <div className="relative h-52 bg-bg-secondary flex items-center justify-center p-6">
        <img
          className="relative w-auto h-full max-w-full object-contain [image-rendering:pixelated] transition-transform duration-200 group-hover:scale-105"
          src={pet.previewImage}
          alt={`${pet.name} preview`}
        />
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
