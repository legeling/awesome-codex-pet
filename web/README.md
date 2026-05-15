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

The site auto-deploys to Cloudflare Pages on every push to `main` that touches `web/`, `pets/`, `pets.json`, or `assets/previews/`.

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

5. Push to `main` — the GitHub Action will create the Pages project and deploy automatically.

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
