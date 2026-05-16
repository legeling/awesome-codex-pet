# Awesome Codex Pet — Web Gallery

A Next.js static site that serves as the public gallery for community Codex pets.

## Development

```bash
cd web
npm install
npm run dev
```

The dev server runs `prepare-site` automatically to generate data from the repository.

## Build

```bash
npm run build
```

Output is in `web/out/` (static HTML export).

## Deployment (Cloudflare Pages)

The site deploys to Cloudflare Pages when a release tag is pushed (`v*` or `web-v*`), or via a manual workflow dispatch. Day-to-day commits to `main` do not trigger a deploy.

### Setup (one-time)

1. Create a Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com)

2. Create an API Token:
   - Go to My Profile → API Tokens → Create Token
   - Use the "Edit Cloudflare Workers" template
   - Or create custom token with permissions: `Account > Cloudflare Pages > Edit`

3. Find your Account ID:
   - Go to any domain in your Cloudflare dashboard
   - Account ID is in the right sidebar under "API"

4. Add GitHub Secrets to your repository:
   - `CLOUDFLARE_API_TOKEN` — the API token from step 2
   - `CLOUDFLARE_ACCOUNT_ID` — your account ID from step 3

5. Push a release tag (e.g. `git tag web-v0.1.0 && git push origin web-v0.1.0`) — the GitHub Action will create the Pages project on first run and deploy automatically. You can also trigger a deploy manually from the Actions tab.

### Custom Domain

After the first deploy:

1. Go to Cloudflare Dashboard → Workers & Pages → awesome-codex-pet
2. Custom domains → Add a custom domain
3. If your domain is already on Cloudflare DNS, it auto-configures. Otherwise, update your DNS records.

### Manual Deploy (optional)

```bash
cd web
npm run build
npx wrangler pages deploy out --project-name=awesome-codex-pet
```

## Architecture

- **Framework**: Next.js 15 with static export (`output: "export"`)
- **Styling**: Tailwind CSS v4
- **i18n**: Client-side locale detection (zh/en) with React Context
- **Data**: Generated at build time from `pets.json` + individual pet metadata
- **Hosting**: Cloudflare Pages (global CDN, free tier)
- **Stats**: a separate Cloudflare Worker at `https://awesome-codex-pet-stats.legeling.workers.dev` powers view + install counters. See `worker/README.md`.

## Environment variables

| Variable                | Default                                                | Used in                        |
| ----------------------- | ------------------------------------------------------ | ------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | `https://awesome-codex-pet.pages.dev`                  | `app/layout.tsx` metadata base |
| `NEXT_PUBLIC_STATS_API` | `https://awesome-codex-pet-stats.legeling.workers.dev` | `lib/stats.ts`                 |

Set them in Cloudflare Pages → project → Settings → Environment variables (production + preview) if you ever change the Worker URL or bind a custom domain.
