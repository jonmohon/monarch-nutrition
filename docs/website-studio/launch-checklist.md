# Prep-Doc Requirements Checklist — audited 2026-07-22 (commit 2bcde52, live URL)

Sources: RCD Proposal (2026-07-09) + RCD Internal Handoff. Status verified
against the live site (https://main.d1sy2oloye2x8a.amplifyapp.com) and code.
✅ done & verified · 🟡 built, waiting on client input · ⬜ not started

## A. The seven pages (Option A scope)

- ✅ 01 Home — custom coded, live
- ✅ 02 About Katie — written for a referring physician; licensure card + verify-license links (🟡 training/background narrative awaits Katie's draft copy — structure ready)
- ✅ 03 Individual Nutrition Counseling — own URL; insurance detail ✅; "what a session looks like" ✅ (SessionCards); 🟡 self-pay package rates (structural slots; rates from Katie)
- ✅ 04 Child & Teen Nutrition — own page + URL, standalone ad-landing discipline (credentials restated, self-contained)
- ✅ 05 Corporate Nutrition — B2B reader, different CTA ("Email Katie about your team"), employer wellness / lunch-and-learns / group contracts (Formats browser)
- ✅ 06 Blog — index + post template live; 🟡 content editor (Keystatic planned, not yet wired — contracted: "publish without touching code")
- ✅ 07 Contact — name, email, phone. Nothing else. Verified live (extra fields rejected 400 by strict schema)

## B. Home page structure (proposal §3.01, verbatim requirements)

- ✅ Hero with credentials and license states
- 🟡 In-network insurance **logo strip** directly below the intro — strip is in position with process copy; carrier names/logos await Katie's credentialing list (proposal itself flags this dependency + logo-permission fallback to typographic list)
- ✅ Three service tiles
- ✅ Short about block
- ✅ Accordion FAQ at the foot, FAQPage schema (5 questions in schema, verified in live HTML)

## C. Included across every page (proposal §3)

- ✅ Mobile-first responsive — built & screenshot-verified at 390/768/1440 (hands-on phone+tablet pass with client at review: pending)
- ✅ On-page SEO — unique title + meta description + single h1 on all 8 routes (verified live); header hierarchy semantic; image alt text on 100% of images (verified: 0 missing)
- ✅ Structured data — MedicalBusiness (LocalBusiness subtype), Person, FAQPage verified in live HTML; Breadcrumbs on interior pages
- 🟡 Google Analytics 4 install — code path ready (env-driven), no GA4 property/ID yet
- 🟡 Sitemap submission to Search Console — sitemap.xml live (8 URLs); GSC submission blocked on final domain
- ✅ Accessibility pass — Lighthouse a11y **100** on all tested pages; contrast pairs computed (text-safe accent inks); focus states styled; semantic disclosure patterns; reduced-motion respected
- 🟡 Editing/structuring of Katie's draft copy — awaiting the Google Doc; current copy is evidence-matrix-safe placeholder-free structure
- ⬜ Live training session — schedule after editor wiring + content load

## D. Compliance (proposal §5 — hard rules)

- ✅ Form collects name/email/phone only, no free-text (live-tested: extra "message" key → 400)
- ✅ No advertising pixels / session replay — GA4-only posture; CSP blocks foreign scripts (verified in live headers)
- ✅ No live chat widget
- ✅ No self-scheduling — booking deferred to EMR portal link (🟡 link pending EMR decision; placeholder band on Contact)
- ✅ Nothing clinical touches the website; submissions emailed, never stored; no PII in logs/URLs
- ✅ Medical disclaimer + privacy notice on every page (+ /privacy)

## E. Design & voice (proposal §2, §4 + handoff)

- ✅ Credibility above the fold (RD · MO+NJ · in-network before anything aspirational)
- ✅ No lead funnel — no quiz, no pop-ups, no lead magnets; contact form, phone path, done
- ✅ Three real service pages with own URLs (Google/AI-assistant findable)
- ✅ Palette per approved targets (cream/brown ground, orange CTAs, brightened rose accents, brown doing the heavy lifting)
- ✅ Tasty Balance architecture + insurance-strip position; Jenny color confidence (marquee) without the funnel; New Leaf floor cleared
- ✅ Clinician-to-colleague voice; zero "transform your life" / "heal your relationship with food"
- ✅ Photography: real-photo direction satisfied via approved bespoke set (proposal: "start with what you have, add photography later" — Katie's headshot still slotted)
- ✅ Existing Canva butterfly accommodated (line-art stand-in until file supplied)

## F. Stack (proposal §5)

- 🟡 EMR & scheduling — Katie picks SimplePractice/Healthie (contact page points at portal placeholder)
- ⬜ Domain — register in Katie's name (~$20/yr); note: monarchnutritionist.com is an unrelated business
- ✅ Hosting — static-first on CDN (Amplify WEB_COMPUTE, effectively free tier at her traffic)
- 🟡 Content editor — Keystatic (GitHub mode, $0) selected; wiring pending
- 🟡 Analytics — GA4 + Search Console, blocked on property + domain

## G. What we need from Katie (proposal §7 — unchanged chase list)

⬜ Draft copy Google Doc · ⬜ Canva logo file · ⬜ Confirmed carrier list ·
⬜ Self-pay rates · ⬜ Photography/headshot · ⬜ EMR decision · ⬜ Domain

## H. Launch-phase steps (proposal phase five)

⬜ Connect domain · ⬜ Submit sitemap to GSC · ⬜ Set Resend env vars on the
new Amplify app + live form delivery test to Katie's inbox · ⬜ Training
session · ⬜ Final revision round with Katie

## Bottom line

Everything buildable without client input is **built and verified live**.
Remaining work splits cleanly into: (1) the seven client-supplied assets,
(2) Keystatic wiring + GA4 (our side, ~a session), (3) launch-phase
domain/GSC/training. No scope item from the prep docs is unaccounted for.
