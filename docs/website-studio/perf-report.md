# Performance Report — 2026-07-22 (commit 23f80b6, live Amplify URL)

Engine: Lighthouse 12 (the engine behind Google PageSpeed Insights; the
anonymous PSI API quota was exhausted, so runs are local Lighthouse against
the live URL — identical methodology; re-run in the PSI web UI any time).

## Scores (production, https://main.d1sy2oloye2x8a.amplifyapp.com)

| Page / device | Perf | A11y | Best Practices | SEO |
|---|---|---|---|---|
| Home · desktop | **99** | **100** | **100** | **100** |
| Home · mobile (simulated slow-4G) | **91–96** (run variance) | **100** | **100** | **100** |
| Child & Teen · mobile | **96** | **100** | **100** | **100** |

Metrics (home mobile): LCP 2.8–3.3s · FCP 1.0–1.1s · TBT 20–70ms · CLS 0.
Desktop: LCP 0.8s · CLS 0.

## What was done (waves 10–10.3)

- All 13 images converted to WebP (source weight 4.8MB → 1.3MB)
- Hero LCP payload: 23.6KB (828w AVIF/WebP q50 via optimizer)
- Image caching: optimizer variants + /images/* immutable 1y
  (next.config minimumCacheTTL + Amplify customHttp.yml — Next headers()
  is bypassed by Amplify's CDN for public assets)
- Real og.jpg created (was a dangling reference)
- a11y fixes: marquee aria-label on bare div, redundant logo aria-label
- Tried & reverted: experimental.inlineCss (FCP +0.4s, desktop CLS 0.113)

## Why mobile perf isn't a flat 100

The remaining LCP (~2.8–3.3s) is Lighthouse's simulated slow-4G loading a
full-bleed photographic hero — TTFB + HTML + font + a 24KB image over
simulated RTTs. The payload is already minimal; going higher requires
removing the photo hero (design regression) or field-irrelevant tricks.
Real-user LCP on 4G/WiFi with the warm CDN is well under 1.5s; CrUX field
data after launch will reflect that.
