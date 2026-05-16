# awesome-codex-pet-stats Worker

Cloudflare Worker that powers view + install counters for the Awesome Codex Pet gallery.

- **Production URL**: `https://awesome-codex-pet-stats.legeling.workers.dev`
- **Storage**: a single Cloudflare KV namespace (`STATS`)
- **Cost**: free tier (Workers 100k req/day, KV 1k writes/day) is enough for the current scale

## Endpoints

| Method | Path                           | Purpose                                                                             |
| ------ | ------------------------------ | ----------------------------------------------------------------------------------- |
| `POST` | `/track/view?slug=<pet-id>`    | Increment view counter for a pet                                                    |
| `POST` | `/track/install?slug=<pet-id>` | Increment install counter for a pet                                                 |
| `GET`  | `/stats`                       | Return all counters as JSON: `{ pets: { <slug>: { views, installs, updatedAt } } }` |

CORS: only the origins listed in `ALLOWED_ORIGINS` (see `wrangler.toml`) can call from the browser. The `POST` endpoints accept calls from anywhere (install scripts run outside browsers).

## One-time setup

```bash
cd worker
npm install
npx wrangler login
npx wrangler kv namespace create STATS
```

`wrangler kv namespace create` prints something like:

```
[[kv_namespaces]]
binding = "STATS"
id = "abcdef0123456789..."
```

Open `worker/wrangler.toml` and uncomment the `kv_namespaces` block, pasting the printed `id`. Then:

```bash
npm run deploy
```

After the first deploy you should see:

```
Published awesome-codex-pet-stats (x.x sec)
  https://awesome-codex-pet-stats.legeling.workers.dev
```

## Updating

```bash
cd worker
npm run deploy
```

There is no GitHub Actions workflow for the Worker on purpose. Deploys happen locally on demand to keep CI minutes low.

## Local dev

```bash
npm run dev   # serves on http://localhost:8787
```

To point the web app at a local Worker, set `NEXT_PUBLIC_STATS_API=http://localhost:8787` before running the web dev server.

## Where the URL is referenced

The default Worker URL (`https://awesome-codex-pet-stats.legeling.workers.dev`) is hard-coded as a fallback in:

- `web/lib/stats.ts` — overridden by `NEXT_PUBLIC_STATS_API`
- `scripts/install-pet.sh` — overridden by `AWESOME_CODEX_PET_STATS_API`
- `scripts/install-pet.ps1` — same env var
- `scripts/install-pet.mjs` — same env var

If you ever rename the Worker or move it to a custom domain, update those four files and redeploy.

## Disabling stats

Set `AWESOME_CODEX_PET_NO_STATS=1` in your shell to skip the install ping. The web client cannot be opted-out per-call right now; if you need that, swap `fetchStats`/`trackView` in `web/lib/stats.ts`.
