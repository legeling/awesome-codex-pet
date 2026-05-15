"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-32">
      <div className="max-w-md mx-auto text-center">
        <p className="text-6xl mb-6">🔍</p>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">
          {t("notFoundTitle")}
        </h1>
        <p className="text-muted text-lg mb-8">
          {t("notFoundDesc")}
        </p>
        <Link
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-white text-sm font-medium hover:bg-text-secondary transition-colors"
          href="/"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t("backToGallery")}
        </Link>
      </div>
    </main>
  );
}
