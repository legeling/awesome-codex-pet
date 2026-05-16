/**
 * Awesome Codex Pet — stats Worker
 *
 * Endpoints:
 *   POST /track/view?slug=<pet-id>     — increment view counter
 *   POST /track/install?slug=<pet-id>  — increment install counter
 *   GET  /stats                        — return all counters as JSON
 *
 * Storage: Cloudflare KV
 *   key  -> "pet:<slug>"
 *   value -> { views: number, installs: number }
 */

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*--[a-z0-9]+(-[a-z0-9]+)*$/;
const KEY_PREFIX = "pet:";

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const allow = allowed.includes(origin) ? origin : allowed[0] || "*";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(data, request, env, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(request, env),
    },
  });
}

async function bumpCounter(env, slug, field) {
  const key = `${KEY_PREFIX}${slug}`;
  const raw = await env.STATS.get(key, "json");
  const next = {
    views: raw?.views ?? 0,
    installs: raw?.installs ?? 0,
  };
  next[field] = (next[field] ?? 0) + 1;
  next.updatedAt = Date.now();
  await env.STATS.put(key, JSON.stringify(next));
  return next;
}

async function listAll(env) {
  const result = {};
  let cursor;
  do {
    const page = await env.STATS.list({ prefix: KEY_PREFIX, cursor });
    for (const k of page.keys) {
      const slug = k.name.slice(KEY_PREFIX.length);
      const value = await env.STATS.get(k.name, "json");
      if (value) {
        result[slug] = {
          views: value.views ?? 0,
          installs: value.installs ?? 0,
          updatedAt: value.updatedAt ?? 0,
        };
      }
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return result;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }

    if (!env.STATS) {
      return jsonResponse(
        { error: "STATS KV binding is not configured" },
        request,
        env,
        500,
      );
    }

    if (url.pathname === "/stats" && request.method === "GET") {
      const stats = await listAll(env);
      return jsonResponse({ pets: stats }, request, env);
    }

    if (url.pathname === "/track/view" && request.method === "POST") {
      const slug = url.searchParams.get("slug") || "";
      if (!SLUG_RE.test(slug)) {
        return jsonResponse({ error: "invalid slug" }, request, env, 400);
      }
      const next = await bumpCounter(env, slug, "views");
      return jsonResponse({ slug, ...next }, request, env);
    }

    if (url.pathname === "/track/install" && request.method === "POST") {
      const slug = url.searchParams.get("slug") || "";
      if (!SLUG_RE.test(slug)) {
        return jsonResponse({ error: "invalid slug" }, request, env, 400);
      }
      const next = await bumpCounter(env, slug, "installs");
      return jsonResponse({ slug, ...next }, request, env);
    }

    return jsonResponse({ error: "not found" }, request, env, 404);
  },
};
