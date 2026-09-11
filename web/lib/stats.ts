"use client";

export type PetStats = {
  installs: number;
  likes: number;
  installs7d: number;
  likes7d: number;
  trendingScore: number;
  dailyRank: number;
  updatedAt: number;
};

export type StatsMap = Record<string, PetStats>;

export type CreatorStats = {
  followers: number;
};

export type RequestStats = {
  supporters: number;
  updatedAt: number;
};

export type StatsPayload = {
  pets: StatsMap;
  creators: Record<string, CreatorStats>;
  requests: Record<string, RequestStats>;
  generatedAt: number;
  windowDays: number;
};

const STATS_SNAPSHOT_PATH = "/stats.json";
const STATS_WRITE_API =
  process.env.NEXT_PUBLIC_STATS_WRITE_API ?? "https://api.codexpet.top";
const STATS_WRITE_TIMEOUT_MS = 8_000;
const STATS_CACHE_TTL_MS = 60_000;

export class StatsWriteTimeoutError extends Error {
  constructor(options?: ErrorOptions) {
    super("The statistics write request timed out", options);
    this.name = "StatsWriteTimeoutError";
  }
}

let cachedStats: { payload: StatsPayload; expiresAt: number } | undefined;
let pendingStats: Promise<StatsPayload> | undefined;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asNonNegativeNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? value
    : 0;
}

function normalizeStatsPayload(value: unknown): StatsPayload {
  if (!isRecord(value) || !isRecord(value.pets)) {
    throw new Error("Stats snapshot returned an invalid payload");
  }

  const pets: StatsMap = {};
  for (const [slug, rawStats] of Object.entries(value.pets)) {
    if (!isRecord(rawStats)) continue;
    pets[slug] = {
      installs: asNonNegativeNumber(rawStats.installs),
      likes: asNonNegativeNumber(rawStats.likes),
      installs7d: asNonNegativeNumber(rawStats.installs7d),
      likes7d: asNonNegativeNumber(rawStats.likes7d),
      trendingScore: asNonNegativeNumber(rawStats.trendingScore),
      dailyRank: asNonNegativeNumber(rawStats.dailyRank),
      updatedAt: asNonNegativeNumber(rawStats.updatedAt),
    };
  }
  const creators: Record<string, CreatorStats> = {};
  if (isRecord(value.creators)) {
    for (const [slug, rawStats] of Object.entries(value.creators)) {
      if (!isRecord(rawStats)) continue;
      creators[slug] = {
        followers: asNonNegativeNumber(rawStats.followers),
      };
    }
  }
  const requests: Record<string, RequestStats> = {};
  if (isRecord(value.requests)) {
    for (const [number, rawStats] of Object.entries(value.requests)) {
      if (!isRecord(rawStats)) continue;
      requests[number] = {
        supporters: asNonNegativeNumber(rawStats.supporters),
        updatedAt: asNonNegativeNumber(rawStats.updatedAt),
      };
    }
  }
  const generatedAt = asNonNegativeNumber(value.generatedAt);

  return {
    pets,
    creators,
    requests,
    generatedAt,
    windowDays: asNonNegativeNumber(value.windowDays) || 7,
  };
}

function logStatsError(context: string, error: unknown) {
  console.warn(context, error instanceof Error ? error.stack : String(error));
}

async function loadStats() {
  const now = Date.now();
  if (cachedStats && cachedStats.expiresAt > now) {
    return cachedStats.payload;
  }

  if (!pendingStats) {
    pendingStats = fetch(STATS_SNAPSHOT_PATH)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Stats snapshot returned HTTP ${response.status}`);
        }
        const payload = normalizeStatsPayload(await response.json());
        cachedStats = {
          payload,
          expiresAt: Date.now() + STATS_CACHE_TTL_MS,
        };
        return payload;
      })
      .finally(() => {
        pendingStats = undefined;
      });
  }

  return pendingStats;
}

function withAbort<T>(promise: Promise<T>, signal?: AbortSignal): Promise<T> {
  if (!signal) return promise;
  if (signal.aborted) {
    return Promise.reject(
      new DOMException("The operation was aborted", "AbortError"),
    );
  }

  return new Promise((resolve, reject) => {
    const abort = () =>
      reject(new DOMException("The operation was aborted", "AbortError"));
    signal.addEventListener("abort", abort, { once: true });
    promise.then(
      (value) => {
        signal.removeEventListener("abort", abort);
        resolve(value);
      },
      (error: unknown) => {
        signal.removeEventListener("abort", abort);
        reject(error);
      },
    );
  });
}

export function fetchStats(signal?: AbortSignal): Promise<StatsPayload> {
  return withAbort(loadStats(), signal);
}

const requestFollowMarker = (number: number) =>
  `awesome-codex-pet:request-follow:${number}`;
const requestSupportMarker = (number: number) =>
  `awesome-codex-pet:stats:request-support:${number}`;

export function isFollowingRequest(number: number) {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(requestFollowMarker(number)) === "1";
  } catch (error: unknown) {
    logStatsError("Unable to read request follow marker", error);
    return false;
  }
}

export function setRequestFollowed(number: number, following: boolean) {
  try {
    if (following) {
      window.localStorage.setItem(requestFollowMarker(number), "1");
    } else {
      window.localStorage.removeItem(requestFollowMarker(number));
    }
    window.dispatchEvent(
      new CustomEvent("request-follow-changed", {
        detail: { number, following },
      }),
    );
  } catch (error: unknown) {
    logStatsError("Unable to persist request follow marker", error);
  }
}

export function isSupportingRequest(number: number) {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(requestSupportMarker(number)) === "1";
  } catch (error: unknown) {
    logStatsError("Unable to read request support receipt", error);
    return false;
  }
}

export type RequestSupportResult = {
  number: number;
  supporters: number;
  supporting: boolean;
  changed: boolean;
};

export async function setRequestSupporting(
  number: number,
  supporting: boolean,
): Promise<RequestSupportResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    STATS_WRITE_TIMEOUT_MS,
  );

  try {
    const response = await fetch(
      `${STATS_WRITE_API}/track/request-support?number=${number}`,
      {
        method: supporting ? "POST" : "DELETE",
        signal: controller.signal,
      },
    );
    if (!response.ok) {
      throw new Error(`Request support API returned HTTP ${response.status}`);
    }
    const payload: unknown = await response.json();
    if (
      !isRecord(payload) ||
      payload.number !== number ||
      payload.supporting !== supporting
    ) {
      throw new Error("Request support API returned an invalid payload");
    }

    const result: RequestSupportResult = {
      number,
      supporters: asNonNegativeNumber(payload.supporters),
      supporting,
      changed: payload.changed === true,
    };
    try {
      if (supporting) {
        window.localStorage.setItem(requestSupportMarker(number), "1");
        setRequestFollowed(number, true);
      } else {
        window.localStorage.removeItem(requestSupportMarker(number));
      }
    } catch (error: unknown) {
      logStatsError("Unable to persist request support receipt", error);
    }
    return result;
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new StatsWriteTimeoutError({ cause: error });
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export type CreatorFollowResult = {
  slug: string;
  followers: number;
  following: boolean;
  changed: boolean;
};

const creatorFollowMarker = (slug: string) =>
  `awesome-codex-pet:stats:creator-follow:${slug}`;

export function isFollowingCreator(slug: string) {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(creatorFollowMarker(slug)) === "1";
  } catch (error: unknown) {
    logStatsError("Unable to read anonymous creator follow receipt", error);
    return false;
  }
}

export async function setCreatorFollowing(
  slug: string,
  following: boolean,
): Promise<CreatorFollowResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    STATS_WRITE_TIMEOUT_MS,
  );

  try {
    const response = await fetch(
      `${STATS_WRITE_API}/track/creator-follow?slug=${encodeURIComponent(slug)}`,
      {
        method: following ? "POST" : "DELETE",
        signal: controller.signal,
      },
    );
    if (!response.ok) {
      throw new Error(`Creator follow API returned HTTP ${response.status}`);
    }

    const payload: unknown = await response.json();
    if (
      !isRecord(payload) ||
      payload.slug !== slug ||
      payload.following !== following
    ) {
      throw new Error("Creator follow API returned an invalid payload");
    }

    const result: CreatorFollowResult = {
      slug,
      followers: asNonNegativeNumber(payload.followers),
      following,
      changed: payload.changed === true,
    };
    try {
      if (following) {
        window.localStorage.setItem(creatorFollowMarker(slug), "1");
      } else {
        window.localStorage.removeItem(creatorFollowMarker(slug));
      }
    } catch (error: unknown) {
      logStatsError(
        "Unable to persist anonymous creator follow receipt",
        error,
      );
    }
    return result;
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new StatsWriteTimeoutError({ cause: error });
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export type LikeResult = {
  slug: string;
  likes: number;
  liked: boolean;
  counted: boolean;
};

const likedMarker = (slug: string) => `awesome-codex-pet:stats:liked:${slug}`;
export const PET_LIKE_CHANGED = "pet-like-changed";
const confirmedLikes = new Map<string, LikeResult>();

export function getConfirmedLike(slug: string) {
  return confirmedLikes.get(slug);
}

export function hasLikedPet(slug: string) {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(likedMarker(slug)) === "1";
  } catch (error: unknown) {
    logStatsError("Unable to read anonymous like receipt", error);
    return false;
  }
}

export async function likePet(slug: string): Promise<LikeResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    STATS_WRITE_TIMEOUT_MS,
  );

  try {
    const response = await fetch(
      `${STATS_WRITE_API}/track/like?slug=${encodeURIComponent(slug)}`,
      { method: "POST", signal: controller.signal },
    );
    if (!response.ok) {
      throw new Error(`Like API returned HTTP ${response.status}`);
    }

    const payload: unknown = await response.json();
    if (!isRecord(payload) || payload.slug !== slug) {
      throw new Error("Like API returned an invalid payload");
    }

    const result = {
      slug,
      likes: asNonNegativeNumber(payload.likes),
      liked: payload.liked === true,
      counted: payload.counted === true,
    };
    if (!result.liked) {
      throw new Error("Like API did not confirm the like");
    }

    confirmedLikes.delete(slug);
    confirmedLikes.set(slug, result);
    if (confirmedLikes.size > 256) {
      confirmedLikes.delete(confirmedLikes.keys().next().value!);
    }
    window.dispatchEvent(new Event(PET_LIKE_CHANGED));

    try {
      window.localStorage.setItem(likedMarker(slug), "1");
    } catch (error: unknown) {
      logStatsError("Unable to persist anonymous like receipt", error);
    }
    return result;
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new StatsWriteTimeoutError({ cause: error });
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
