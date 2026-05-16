"use client";

import { useLocale } from "@/components/locale-provider";

type GuidePageContentProps = {
  categories: string[];
};

export function GuidePageContent({ categories }: GuidePageContentProps) {
  const { t, locale } = useLocale();

  const fullGuideHref =
    locale === "zh"
      ? "https://github.com/legeling/awesome-codex-pet/blob/main/docs/zh-CN/submission-guide.md"
      : "https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/submission-guide.md";

  return (
    <main className="max-w-[960px] mx-auto px-6 pt-16 pb-24">
      <header className="mb-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          {t("guidePageTitle")}
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
          {t("guidePageSubtitle")}
        </p>
      </header>

      {/* Categories */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight mb-2">
          {t("guideCategoriesTitle")}
        </h2>
        <p className="text-sm text-muted mb-5">
          {t("guideCategoriesDesc")}
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1.5 rounded-full bg-bg-secondary border border-border text-sm text-text"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Folder structure */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight mb-2">
          {t("guideStructureTitle")}
        </h2>
        <p className="text-sm text-muted mb-5">
          {t("guideStructureDesc")}
        </p>
        <pre className="rounded-xl bg-bg-secondary border border-border p-5 text-xs sm:text-sm font-mono text-text-secondary overflow-x-auto">
{`pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp`}
        </pre>
        <p className="text-xs text-muted mt-3">{t("guideStructureNote")}</p>
      </section>

      {/* Checklist */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight mb-5">
          {t("guideChecklistTitle")}
        </h2>
        <ul className="space-y-3">
          {[
            t("guideChecklistItem1"),
            t("guideChecklistItem2"),
            t("guideChecklistItem3"),
            t("guideChecklistItem4"),
            t("guideChecklistItem5"),
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-text leading-relaxed"
            >
              <span className="mt-0.5 inline-flex shrink-0 size-5 items-center justify-center rounded-full bg-accent-light text-accent">
                <svg
                  className="size-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text text-white text-sm font-medium hover:bg-text-secondary transition-colors"
          href="https://github.com/legeling/awesome-codex-pet/issues/new?template=pet-submission.yml"
          target="_blank"
          rel="noreferrer"
        >
          {t("guideOpenIssue")}
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
        <a
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-text hover:bg-surface transition-colors"
          href={fullGuideHref}
          target="_blank"
          rel="noreferrer"
        >
          {t("guideReadFull")}
        </a>
      </div>
    </main>
  );
}
