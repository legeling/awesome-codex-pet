"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="size-5 rounded bg-accent flex items-center justify-center">
              <svg className="size-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </span>
            <span className="text-sm font-medium text-text">Awesome Codex Pet</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="/#gallery" className="hover:text-text transition-colors">{t("gallery")}</Link>
            <a href="https://github.com/legeling/awesome-codex-pet" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">{t("github")}</a>
            <a href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">{t("contributing")}</a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted">
            {t("footerBuiltWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
