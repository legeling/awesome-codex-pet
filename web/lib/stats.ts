"use client";

export type PetStats = {
  views: number;
  installs: number;
  updatedAt?: number;
};

export type StatsMap = Record<string, PetStats>;

const STATS_API =
  process.env.NEXT_PUBLIC_STATS_API ??
  "https://awesome-codex-pet-stats.legeling.workers.dev";

export async function fetchStats(signal?: AbortSignal): Promise<StatsMap> {
  try {
    const res = await fetch(`${STATS_API}/stats`, {
      signal,
      cache: "no-store",
    });
    if (!res.ok) return {};
    const data = (await res.json()) as { pets?: StatsMap };
    return data.pets ?? {};
  } catch {
    return {};
  }
}

export function trackView(slug: string) {
  if (typeof window === "undefined") return;
  // Best-effort fire-and-forget. Never fails the page.
  try {
    fetch(`${STATS_API}/track/view?slug=${encodeURIComponent(slug)}`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {
      // ignore
    });
  } catch {
    // ignore
  }
}
