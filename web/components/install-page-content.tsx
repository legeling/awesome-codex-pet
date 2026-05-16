"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { CopyCommandButton } from "@/components/copy-command-button";

const PLACEHOLDER = "<pet-slug--author-slug>";

const bashCommand = `curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- ${PLACEHOLDER}`;
const pwshCommand = `powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet ${PLACEHOLDER}"`;
const nodeCommand = `npx awesome-codex-pet ${PLACEHOLDER}`;

export function InstallPageContent() {
  const { t } = useLocale();

  return (
    <main className="max-w-[960px] mx-auto px-6 pt-16 pb-24">
      <header className="mb-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          {t("installPageTitle")}
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
          {t("installPageSubtitle")}
        </p>
      </header>

      {/* Steps */}
      <ol className="grid sm:grid-cols-3 gap-4 mb-14">
        <Step
          title={t("installStep1Title")}
          desc={t("installStep1Desc")}
        />
        <Step
          title={t("installStep2Title")}
          desc={t("installStep2Desc")}
        />
        <Step
          title={t("installStep3Title")}
          desc={t("installStep3Desc")}
        />
      </ol>

      {/* Commands */}
      <div className="space-y-5 mb-16">
        <CommandBlock
          label={t("installBashLabel")}
          tip={t("installBashTip")}
          command={bashCommand}
          copyLabel={t("copyBashInstall")}
        />
        <CommandBlock
          label={t("installPwshLabel")}
          tip={t("installPwshTip")}
          command={pwshCommand}
          copyLabel={t("copyPowerShell")}
        />
        <CommandBlock
          label={t("installNodeLabel")}
          tip={t("installNodeTip")}
          command={nodeCommand}
          copyLabel={t("installNodeLabel")}
        />
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          {t("installFaqTitle")}
        </h2>
        <div className="space-y-3">
          <FaqItem
            question={t("installFaqQ1")}
            answer={t("installFaqA1")}
          />
          <FaqItem
            question={t("installFaqQ2")}
            answer={t("installFaqA2")}
          />
          <FaqItem
            question={t("installFaqQ3")}
            answer={t("installFaqA3")}
          />
        </div>
      </section>

      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text text-white text-sm font-medium hover:bg-text-secondary transition-colors"
        >
          {t("openGallery")}
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
        </Link>
      </div>
    </main>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-2xl border border-border bg-bg-elevated p-5">
      <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </li>
  );
}

function CommandBlock({
  label,
  tip,
  command,
  copyLabel,
}: {
  label: string;
  tip: string;
  command: string;
  copyLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="text-xs text-muted mt-0.5">{tip}</div>
        </div>
        <CopyCommandButton command={command} label={copyLabel} />
      </div>
      <div className="rounded-lg bg-bg-secondary border border-border p-3 font-mono text-xs text-text-secondary overflow-x-auto">
        <code className="whitespace-nowrap">{command}</code>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-xl border border-border bg-bg-elevated px-4 py-3 [&[open]]:bg-bg-secondary transition-colors">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm font-medium text-text">
        {question}
        <svg
          className="size-4 text-muted transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <p className="mt-3 text-sm text-muted leading-relaxed">{answer}</p>
    </details>
  );
}
