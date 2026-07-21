# Project Brief — Monarch Nutrition Counseling

**Date:** 2026-07-20 · **Studio scale:** Standard (4-agent council, 2 concepts)
**Sources:** RCD proposal PDF (2026-07-09), RCD internal handoff PDF (2026-07-09), competitive research.

## Client

Katie Sengheiser, RD — Monarch Nutrition Counseling. Solo, virtual dietetics
practice, no physical office. Based in St. Peters, MO; **licensed in Missouri
and New Jersey** (both states in scope for copy + SEO). Clinical focus: weight
management and bariatrics, with a genuine interest in pediatric/teen nutrition
(her differentiator). Insurance-first business model (in-network billing) with
published self-pay package rates as the secondary option.

## The real audience (design north star)

**Not consumers.** Referral sources: office managers, primary-care physicians,
physical therapists, chiropractors, therapists. The site must make a busy
office manager or clinician trust her in **45 seconds** — credentials, license
states, and in-network carriers up top. No quiz funnel, no lead magnets, no
pop-ups, no Instagram-first anything.

Tone: **"clinician talking to a colleague."** Katie explicitly does not want
to sound like every other dietitian — no "transform your life," no "heal your
relationship with food" filler.

## Look

Business professional, vaguely feminine. Warmer and more colorful than a
corporate group practice; considerably quieter than an influencer-dietitian
site. Not a boutique, not a bakery, not wedding décor. Deep brown does the
heavy lifting to keep the palette clinical — don't let orange + rose dominate.

**Client-approved palette targets (confirm on screen):**

| Role | Name | Hex |
|---|---|---|
| Anchor / ink | Deep Brown | `#3E2B23` |
| Primary accent | Orange | `#E08A3C` |
| Background | Cream | `#F7F0E4` |
| Secondary accent | Rose (brightened per Katie) | `#E79A94` |
| Neutral | Green-Brown | `#7C7551` |

Logo: her existing Canva monarch butterfly — build around it as-is (no brand
kit sold).

## Scope (Option A — Website Only, $1,500)

7 custom-coded static pages: Home · About Katie · Individual Nutrition
Counseling · Child & Teen Nutrition · Corporate Nutrition · Blog (index +
post template, wired to a lightweight editor) · Contact. Plus: FAQ accordion
with FAQPage schema on Home, in-network insurance strip, HIPAA-conscious
contact form, on-page SEO, LocalBusiness + Person schema, GA4 + Search
Console, accessibility pass, one live training session. Copy: Katie supplies
draft copy; we edit and structure (writing from scratch = change order).

## Hard compliance requirements (non-negotiable)

1. Contact form = name, email, phone **only**. No free-text message box.
2. **No advertising pixels anywhere** — no Meta/TikTok pixel, no session
   replay. GA4 for traffic only.
3. No live chat widget. No self-scheduling on the site — booking/intake links
   point out to her EMR (leaning SimplePractice, unconfirmed).

## Information architecture (from handoff, mirrors The Tasty Balance structure)

- **Home** — hero with credentials + license states → in-network insurance
  strip directly below intro → three service tiles → short about block → FAQ
  accordion (FAQPage schema).
- **About Katie** — training, clinical background, licensure; written for a
  referring clinician.
- **Individual Nutrition Counseling** — core service; insurance detail,
  session structure, self-pay rates.
- **Child & Teen Nutrition** — own page/URL; differentiator + future ad
  landing page.
- **Corporate Nutrition** — B2B reader; employer wellness, lunch-and-learns,
  group contracts.
- **Blog**, **Contact** (name/email/phone only).

## Competitive territory (see research-sources.md)

- The Tasty Balance (direct local competitor — never referenced client-facing):
  navy + cream, clinical-premium. **Structure borrowed, palette avoided.**
- Jenny Mahoney RDN: blush pastels, girlfriend-coded, funnel-driven. **Color
  confidence borrowed, everything else avoided.**
- New Leaf Nutrition: the self-built floor to clear. (Katie currently works
  for NuLeaf — never discussed, internal only.)
- Katie's approved warm brown/orange/rose territory is **unoccupied** among
  all three references.

## Constraints & open items (critical path, from client)

Draft copy Google Doc · confirmed carrier list (blocks insurance strip; fall
back to typographic carrier list if logo permissions are a hassle) · self-pay
rates · EMR decision · photography (headshot suggested, not required) ·
domain (register in her name; note monarchnutritionist.com is an unrelated
fitness-coaching business — Todd, Wix — so that exact domain is likely
unavailable).

## Revision log

- **R1 (2026-07-20):** Round-1 concepts (Colleague Letter, One-Page Referral)
  rejected — too editorial/austere for the genre. After rendering the three
  reference sites, the bar is: photography-led warmth, curved band
  transitions, centered classical composition, letterspaced small-caps,
  visible carrier strip. Round 2 concepts (03 Open Table, 04 Sunroom) are
  genre-native; photography handled as art-directed treatment blocks with
  shoot captions until Katie supplies photos.

- **R2 (2026-07-20, RESET):** Round-2 concepts also rejected (generic, wrong
  vibe, execution, placeholder noise). Jon's direction: **soft luxury
  wellness** (spa/boutique-hotel register — airy, serif-led, muted,
  expensive), **real licensed stock photography** in concepts (swap for
  Katie's shoot later), placeholder noise reduced to discreet footnotes.
  Palette shifted to muted registers of the approved hues (bone/ivory,
  espresso, sage, clay, blush) — **must be confirmed with Katie on screen**,
  as it departs from the brighter orange/rose targets in the handoff.
  Round-3 concepts: 05 Still Life (gallery-quiet, offset editorial),
  06 Golden Hour (warm classical, arches, spa-menu fees). Imagery under
  Unsplash license in `concepts/assets/`.

- **R3 (2026-07-20):** Jon redirected: drop the luxury reinterpretation and
  build exactly what the client documents specify. Round-4 concept
  `07-warm-clinical.html` follows the handoff verbatim: Tasty Balance home
  structure (hero w/ credentials → insurance strip → three service tiles →
  short about → FAQ accordion), approved palette at face value (#3E2B23
  heavy lifting, #E08A3C CTAs only, #F7F0E4 ground, #E79A94 accents,
  #7C7551 support), Fraunces SOFT + Source Sans 3, clinician-to-colleague
  copy, real licensed photography (05/06's finish standard retained).
  Rounds 1–3 all archived in `concepts/archive/`.

## Experience level

**Level 2 (Premium).** Static custom-coded, fast, accessible. No WebGL, no
heavy motion — signature-grade craft through type, color, and CSS motion.
Greenfield stack default: Next.js + TypeScript + Tailwind, static export,
Amplify/CDN hosting (free tier fine at her traffic).
