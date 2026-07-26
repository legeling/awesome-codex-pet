import { readFile } from "node:fs/promises";

const SITE_URL = "https://codexpet.top";
const KEY = "d687eb8cfb15d89e9bf7c9c00f0a8c20";
const REQUEST_TIMEOUT_MS = 15_000;
const KEY_VERIFY_ATTEMPTS = 12;
const KEY_VERIFY_DELAY_MS = 5_000;
const argumentsList = process.argv.slice(2);
const dryRun = argumentsList.includes("--dry-run");
const sitemapPath =
  argumentsList.find((argument) => !argument.startsWith("--")) ??
  "out/sitemap.xml";
const sitemap = await readFile(sitemapPath, "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);

async function waitForPublishedKey(keyLocation) {
  for (let attempt = 1; attempt <= KEY_VERIFY_ATTEMPTS; attempt += 1) {
    const response = await fetch(`${keyLocation}?verify=${Date.now()}`, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    const publishedKey = response.ok ? (await response.text()).trim() : "";
    if (publishedKey === KEY) return;
    if (attempt < KEY_VERIFY_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, KEY_VERIFY_DELAY_MS));
    }
  }
  throw new Error(
    `IndexNow key verification failed at ${keyLocation} after ${KEY_VERIFY_ATTEMPTS} attempts.`,
  );
}

if (urlList.length === 0 || urlList.length > 10_000) {
  throw new Error(`Expected 1-10000 sitemap URLs, found ${urlList.length}.`);
}
if (urlList.some((value) => !value.startsWith(`${SITE_URL}/`))) {
  throw new Error("IndexNow only accepts canonical codexpet.top URLs.");
}

if (dryRun) {
  console.log(`Validated ${urlList.length} canonical URLs for IndexNow.`);
} else {
  const keyLocation = `${SITE_URL}/${KEY}.txt`;
  await waitForPublishedKey(keyLocation);

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      host: "codexpet.top",
      key: KEY,
      keyLocation,
      urlList,
    }),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(
      `IndexNow returned ${response.status}: ${await response.text()}`,
    );
  }
  console.log(`Submitted ${urlList.length} canonical URLs to IndexNow.`);
}
