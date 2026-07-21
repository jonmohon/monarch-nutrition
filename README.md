# Monarch Nutrition Counseling

Marketing site for Katie Sengheiser, RD — solo virtual dietetics practice
(St. Peters, MO; licensed MO + NJ). Agency build per the RCD handoff
(Option A, website only). Design ground truth:
`docs/website-studio/concepts/07-warm-clinical.html` (approved "Warm
Clinical" concept); full spec in `docs/website-studio/build-spec.md`.

## Stack

Next.js 16 (App Router, SSG) · TypeScript · Tailwind v4 (`@theme` tokens) ·
Resend contact form · AWS Amplify (app not yet created — gated).

## Commands

```bash
npm run dev     # local dev
npm run lint
npm run build   # production build (all routes prerendered)
```

## Hard rules (from the client handoff — do not relax)

- Contact form = name, email, phone ONLY. No free-text field, ever (PHI).
- No ad pixels, no session replay, no chat, no self-scheduling. GA4
  traffic-only. CSP in `next.config.ts` enforces this.
- No invented carriers, rates, testimonials, or credentials. Business facts
  live in `src/data/site.ts`; pending items are `null` / footnoted.
- `trailingSlash: true` is load-bearing SEO config.

## Pending from client (blocks launch, not build)

Carrier list · self-pay rates · draft copy (About/service bodies) · EMR
choice + portal link · phone/email · headshot/photos · domain purchase
(note: monarchnutritionist.com belongs to an unrelated business).

## Docs

`docs/website-studio/` — project brief, evidence matrix, research, build
spec, concept gallery (serve locally: `python3 -m http.server 4321 -d
docs/website-studio/concepts`).
