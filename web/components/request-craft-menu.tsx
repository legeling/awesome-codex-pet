"use client";

import { useEffect, useState } from "react";

import { ActionDropdown } from "@/components/action-dropdown";
import { CodexIcon } from "@/components/codex-icon";
import { useLocale } from "@/components/locale-provider";
import { buildCodexUrl, getPetRequestCraftPrompt } from "@/lib/codex-links";
import type { PetRequest } from "@/lib/request-catalog";

const content = {
  en: {
    trigger: "I’ll make this",
    more: "More ways to make this pet",
    manualTitle: "Submit a pull request",
    manualDescription:
      "Open GitHub and submit your finished pet for this request.",
    copy: "Copy prompt",
    copied: "Copied",
  },
  zh: {
    trigger: "我要制作",
    more: "更多制作方式",
    manualTitle: "手动提交 PR",
    manualDescription: "已有成品或分支时，前往 GitHub 提交并关联此请求。",
    copy: "复制提示词",
    copied: "已复制",
  },
  ko: {
    trigger: "제가 만들게요",
    more: "다른 제작 방법",
    manualTitle: "Pull Request 제출",
    manualDescription: "완성된 펫을 GitHub에서 이 요청과 연결해 제출합니다.",
    copy: "프롬프트 복사",
    copied: "복사됨",
  },
  ja: {
    trigger: "制作する",
    more: "その他の制作方法",
    manualTitle: "Pull Request を投稿",
    manualDescription:
      "完成したペットを GitHub からこのリクエストへ投稿します。",
    copy: "プロンプトをコピー",
    copied: "コピー済み",
  },
  es: {
    trigger: "Quiero crearla",
    more: "Más formas de crearla",
    manualTitle: "Enviar un pull request",
    manualDescription:
      "Publica en GitHub tu mascota terminada para esta petición.",
    copy: "Copiar prompt",
    copied: "Copiado",
  },
} as const;

export function RequestCraftMenu({ request }: { request: PetRequest }) {
  const { locale } = useLocale();
  const text = content[locale];
  const [copied, setCopied] = useState(false);
  const prompt = getPetRequestCraftPrompt(request, locale);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy the request craft prompt", error);
    }
  }

  return (
    <div className="flex h-11 w-full">
      <a
        className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-l-lg bg-text px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        href={buildCodexUrl(prompt)}
      >
        <CodexIcon className="size-5 shrink-0" />
        <span className="truncate">{text.trigger}</span>
      </a>
      <ActionDropdown
        label={text.more}
        menuWidth={348}
        triggerClassName="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-r-lg border-l border-bg/20 bg-text text-bg transition-opacity hover:opacity-85"
        trigger={
          <svg
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.25}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        }
      >
        <button
          className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-left text-text transition-colors hover:bg-surface"
          type="button"
          role="menuitem"
          data-menu-keep-open
          onClick={() => void copyPrompt()}
        >
          {copied ? (
            <svg
              className="size-5 shrink-0 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="size-5 shrink-0 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
              />
            </svg>
          )}
          <span className="text-sm font-medium" aria-live="polite">
            {copied ? text.copied : text.copy}
          </span>
        </button>

        <div className="my-1 border-t border-border" role="separator" />

        <a
          className="flex items-start gap-3 rounded-md px-3 py-3 text-text transition-colors hover:bg-surface"
          href="https://github.com/legeling/awesome-codex-pet/compare"
          target="_blank"
          rel="noreferrer"
          role="menuitem"
        >
          <svg
            className="mt-0.5 size-5 shrink-0 text-muted"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.19.69.8.57A12 12 0 0 0 12 0Z" />
          </svg>
          <span className="min-w-0">
            <span className="block text-sm font-medium">
              {text.manualTitle}
            </span>
            <span className="mt-0.5 block text-xs leading-4 text-muted">
              {text.manualDescription} #{request.number}
            </span>
          </span>
        </a>
      </ActionDropdown>
    </div>
  );
}
