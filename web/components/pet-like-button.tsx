"use client";

import { useEffect, useRef, useState } from "react";

import { useLocale } from "@/components/locale-provider";
import { fetchStats, getConfirmedLike, hasLikedPet, likePet, PET_LIKE_CHANGED } from "@/lib/stats";

const confirmation = {
  en: ["Your +1 was counted · latest total synced", "Already counted · latest total synced"],
  zh: ["你的 +1 已计入 · 已同步最新总数", "已计过赞 · 已同步最新总数"],
  ko: ["내 +1 반영 · 최신 합계 동기화", "이미 반영됨 · 최신 합계 동기화"],
  ja: ["あなたの +1 を反映 · 最新の合計に更新", "投票済み · 最新の合計に更新"],
  es: ["Tu +1 cuenta · total actualizado", "Ya contabilizado · total actualizado"],
} as const;

type PetLikeButtonProps = {
  slug: string;
  initialLikes?: number;
  variant?: "badge" | "button";
};

function formatCount(value: number) {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(value < 10000 ? 1 : 0)}k`;
}

export function PetLikeButton({
  slug,
  initialLikes,
  variant = "badge",
}: PetLikeButtonProps) {
  const { t, locale } = useLocale();
  const [likes, setLikes] = useState(initialLikes ?? 0);
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState<boolean | null>(null);
  const inFlight = useRef(false);

  useEffect(() => {
    const sync = () => {
      const confirmed = getConfirmedLike(slug);
      setLiked(confirmed?.liked ?? hasLikedPet(slug));
      if (confirmed) setLikes(confirmed.likes);
    };
    sync();
    window.addEventListener(PET_LIKE_CHANGED, sync);
    return () => window.removeEventListener(PET_LIKE_CHANGED, sync);
  }, [slug]);

  useEffect(() => {
    const confirmed = getConfirmedLike(slug);
    if (confirmed) {
      setLikes(confirmed.likes);
      return;
    }
    if (initialLikes !== undefined) {
      setLikes(initialLikes);
      return;
    }

    const controller = new AbortController();
    void fetchStats(controller.signal)
      .then((payload) => {
        if (!inFlight.current && !getConfirmedLike(slug)) {
          setLikes(payload.pets[slug]?.likes ?? 0);
        }
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.warn(
            "Unable to load pet likes",
            error instanceof Error ? error.stack : String(error),
          );
        }
      });
    return () => controller.abort();
  }, [initialLikes, slug]);

  async function handleLike() {
    if (inFlight.current || liked || getConfirmedLike(slug)) return;
    inFlight.current = true;
    setPending(true);
    setNotice(null);
    try {
      const result = await likePet(slug);
      setLikes(result.likes);
      setLiked(true);
      setNotice(result.counted);
    } catch (error: unknown) {
      console.warn(
        "Unable to like pet",
        error instanceof Error ? error.stack : String(error),
      );
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  const label = liked
    ? t("likedPet", { count: likes })
    : t("likePet", { count: likes });

  return (
    <button
      className={
        variant === "badge"
          ? `inline-flex h-7 min-w-12 cursor-pointer items-center justify-center gap-1 rounded-full border px-2 text-[11px] backdrop-blur transition-colors ${
              liked
                ? "border-accent/50 bg-accent-light text-accent"
                : "border-border bg-bg/85 text-text-secondary hover:border-border-hover hover:bg-bg-elevated"
            }`
          : `inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors ${
              liked
                ? "border-accent/50 bg-accent-light text-accent"
                : "border-border bg-bg-elevated text-text hover:bg-surface"
            }`
      }
      type="button"
      disabled={pending}
      aria-pressed={liked}
      aria-label={label}
      title={label}
      onClick={(event) => {
        event.stopPropagation();
        void handleLike();
      }}
    >
      <svg
        className="size-3.5"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
      <span>{formatCount(likes)}</span>
      {notice !== null && (
        <span role="status" className="text-[10px] font-normal">
          {confirmation[locale][notice ? 0 : 1]}
        </span>
      )}
    </button>
  );
}
