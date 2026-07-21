# Build Spec — Monarch Nutrition Counseling

**Ground truth:** `docs/website-studio/concepts/07-warm-clinical.html` (v2,
approved direction "Warm Clinical", elevated to the Tasty Balance bar).
When the built site and the concept disagree, the site is wrong.

## Tokens (extracted from concept 07 v2)

### Color (roles)
| Token | Hex | Use |
|---|---|---|
| cream (bg) | `#F7F0E4` | page ground (approved) |
| white (surface) | `#FDFAF4` | cards, insurance strip band |
| tint | `#F2E9DA` | about band |
| brown (brand/ink) | `#3E2B23` | text, bands, footer, announce (approved) |
| brown-deep | `#2E1F18` | footer hover, darkest |
| body | `#5C4A3F` | body text (7.4:1 on cream) |
| muted | `#7D695C` | footnotes (4.6:1) |
| orange | `#E08A3C` | CTAs + statement band ONLY (approved) |
| orange-hover | `#C97426` | CTA hover (cream text) |
| orange-ink | `#995C26` | accent words / links on cream (4.7:1) |
| rose | `#E79A94` | accents on brown, selection; never text on cream (approved) |
| rose-ink | `#92615D` | small caps labels (4.5:1) |
| olive | `#7C7551` | ornament, spacing bars (approved) |
| label | `#5E5940` | small-caps section labels (6.2:1) |
| border | `#E5D9C6` / strong `#CDBCA4` | hairlines |
| error | `#9E2B25` | form errors (6.6:1) |
| shadow | `rgba(62,43,35,.12)` | brown-tinted, never black |

### Type
- Display: **Fraunces** variable (opsz 9..144, SOFT 80) — weights 440
  (hero/statement, italic accents) and 560 (H2/H3). Self-hosted via
  `next/font`.
- Text: **Source Sans 3** — 400/600.
- Scale: hero `clamp(2.7rem, 1.7rem + 4vw, 4.9rem)` lh 1.12 · H2
  `clamp(2rem, 1.4rem + 2.2vw, 3.2rem)` · H3 23px · body 17px lh 1.7 ·
  caps labels 11–12px, tracking `.18em–.34em`, weight 600.
- Accent-word pattern: one italic Fraunces 440 phrase in `orange-ink` per H2.

### Components (from concept)
Announce bar · centered-lockup header (split caps nav, orange pill CTA) ·
cinematic photo hero w/ gradient overlay + floating credential pill ·
in-network strip (white band; carrier logo strip slot) · curved brown
statement band (`border-radius 0 0 60%/100%` white lip) · orange spaced-caps
statement band · service tile card (photo top, rose-ink audience label,
Fraunces H3, uppercase "Learn more") · numbered steps (italic Fraunces
numerals + hairline rule) · about split + fact card (kcard) + butterfly
ornament · FAQ accordion (details/summary, rotating ⊕) · brown centered
footer w/ license + disclaimer.
- Radii: pills 999px · cards 18px · FAQ 14px. Buttons: uppercase 12.5px
  tracked, padding 14/28.
- Motion: load reveal rise 24px/900ms cubic-bezier(.22,1,.36,1) stagger
  120ms; scroll reveals via IntersectionObserver (fire-once, threshold .2);
  card hover lift + brown shadow; image scale 1.045/1s; FAQ ⊕ rotate 45°.
  All under `motion-safe`; reduced-motion = at rest.

## Pages (7 + utilities, per handoff)

1. `/` Home = concept 07 v2 exactly + footer.
2. `/about` About Katie — hero band, clinical background (awaits Katie's
   copy; structure now), licensure facts card, referrer expectations, CTA.
3. `/services/individual-nutrition-counseling` — hero, scope bullets,
   insurance & self-pay (rates slots pending), session structure, 3 steps,
   cross-links, CTA.
4. `/services/child-teen-nutrition` — standalone ad-landing discipline:
   restate MO+NJ/telehealth, parent-facing sections, condensed insurance
   note, steps, CTA.
5. `/services/corporate-nutrition` — B2B: offerings grid (lunch-and-learns,
   wellness programming, group contracts), engagement steps, email CTA.
6. `/blog` index + `/blog/[slug]` template (Keystatic, Markdoc), author box,
   per-post disclaimer, related-service CTA.
7. `/contact` — 3-field form (name/email/phone ONLY) → `/api/contact` →
   Resend; expectation copy; tel/referrer block (slots pending); existing-
   clients portal link placeholder.
Utilities: `/privacy` (privacy notice + medical disclaimer), custom 404.

## Stack (per council frontend report)

Next.js 16 (App Router, SSG all routes) + TypeScript 5.9 + Tailwind v4
tokens via `@theme` · `resend` for contact · `zod` strict form schema ·
Keystatic (GitHub mode, $0) for blog · `@next/third-parties` GA4
(traffic-only, consent defaults denied for ads) · JSON-LD: LocalBusiness,
Person, FAQPage (Home, confirmed answers only) · sitemap/robots via app
routes · no animation library (CSS + one IntersectionObserver hook).

## Compliance gates (handoff p.4 — hard)

Form = 3 fields, no textarea · no pixels/session-replay (CSP enforced) ·
no chat, no self-scheduling · booking = outbound portal link only (vendor
unnamed until EMR confirmed) · no invented carriers/rates/testimonials ·
footer disclaimer + privacy link sitewide · no PII in logs or URLs.

## Performance budget (Level 2)

LCP ≤ 2.5s (target 1.8) · CLS ≤ 0.05 · INP ≤ 200ms · JS ≤ 150KB gz ·
CSS ≤ 30KB · fonts ≤ 130KB (2 families, subset woff2, next/font) · hero
image ≤ 300KB AVIF · Lighthouse ≥ 95 perf/a11y/SEO recorded pre-launch.

## Open asset slots (from Katie, chase list)

Draft copy doc → About + service pages body · carrier list → insurance
strips + FAQ answer · self-pay rates → service pages · EMR link → contact ·
phone/email → contact + footer · headshot → about kcard + About page ·
domain purchase (in her name; monarchnutritionist.com is taken by an
unrelated business).
