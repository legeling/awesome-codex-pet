"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <span className="size-6 rounded-md bg-accent flex items-center justify-center">
            <svg className="size-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </span>
          <span className="text-sm font-semibold text-text">
            Awesome Codex Pet
          </span>
        </Link>

        <nav className="flex items-center gap-5" aria-label="Primary navigation">
          <Link
            className="text-sm text-muted hover:text-text transition-colors"
            href="/#gallery"
          >
            {t("gallery")}
          </Link>
          <Link
            className="text-sm text-muted hover:text-text transition-colors"
            href="https://github.com/legeling/awesome-codex-pet#quick-install"
            target="_blank"
            rel="noreferrer"
          >
            {t("install")}
          </Link>
          <Link
            className="text-sm text-muted hover:text-text transition-colors"
            href="https://github.com/legeling/awesome-codex-pet"
            target="_blank"
            rel="noreferrer"
          >
            {t("github")}
          </Link>
          <LocaleSwitcher />
          <Link
            className="px-4 py-1.5 text-sm font-medium rounded-full bg-text text-white hover:bg-text-secondary transition-colors"
            href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer"
          >
            {t("submitPet")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
