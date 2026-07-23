#!/usr/bin/env node
/**
 * Post-deploy cache warmer — hits every page and the exact image-optimizer
 * variants the layouts request, so the first real visitor gets warm-cache
 * (~70ms) images instead of cold transforms (2–5s).
 *
 * Usage: node scripts/warm-cache.mjs [baseUrl]
 * Runs automatically after each deploy via .github/workflows/warm-after-deploy.yml
 */
const BASE = process.argv[2] ?? "https://main.d1sy2oloye2x8a.amplifyapp.com";

const PAGES = [
  "/",
  "/about/",
  "/services/individual-nutrition-counseling/",
  "/services/child-teen-nutrition/",
  "/services/corporate-nutrition/",
  "/blog/",
  "/contact/",
  "/privacy/",
];

// image -> [[width, quality], ...] matching the sizes each layout requests
// across the deviceSizes/imageSizes config (mobile 2x + desktop).
const VARIANTS = {
  "/images/hero-kitchen.webp": [[828, 50], [1200, 50], [2048, 50]],
  "/images/scene-table.webp": [[828, 70], [1200, 70], [2048, 70]],
  "/images/hero-individual.webp": [[828, 70], [1200, 70], [2048, 70]],
  "/images/hero-child.webp": [[828, 70], [1200, 70], [2048, 70]],
  "/images/hero-corporate.webp": [[828, 70], [1200, 70], [2048, 70]],
  "/images/service-individual.webp": [[420, 75], [640, 75], [828, 75]],
  "/images/service-child.webp": [[420, 75], [640, 75], [828, 75]],
  "/images/service-corporate.webp": [[420, 75], [640, 75], [828, 75]],
};

const urls = [
  ...PAGES.map((p) => BASE + p),
  ...Object.entries(VARIANTS).flatMap(([src, sizes]) =>
    sizes.map(
      ([w, q]) => `${BASE}/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`,
    ),
  ),
];

let ok = 0;
let slow = 0;
for (const url of urls) {
  const t0 = Date.now();
  try {
    const res = await fetch(url, { headers: { "user-agent": "monarch-cache-warmer" } });
    const ms = Date.now() - t0;
    if (res.ok) ok++;
    if (ms > 1000) slow++;
    console.log(`${res.status} ${String(ms).padStart(5)}ms  ${url.slice(BASE.length, BASE.length + 80)}`);
  } catch (e) {
    console.log(`ERR   ${url}: ${e.message}`);
  }
}
console.log(`\nwarmed ${ok}/${urls.length} (${slow} were cold >1s — now cached)`);
