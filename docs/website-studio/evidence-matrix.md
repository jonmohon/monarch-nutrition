# Evidence Matrix — Monarch Nutrition Counseling

Classes: **Verified** · **Client supplied** · **Reasonable inference** ·
**Needs confirmation** · **Creative copy** (per copy-accuracy-policy).
Source "handoff" = RCD internal handoff PDF 2026-07-09; "proposal" = RCD
client proposal PDF 2026-07-09.

| # | Claim | Class | Source / basis | Usable? |
|---|---|---|---|---|
| 1 | Katie Sengheiser is a Registered Dietitian (RD) | Client supplied | handoff p.2 | Yes |
| 2 | Licensed in Missouri and New Jersey | Client supplied | handoff p.2 | Yes |
| 3 | Practice name: Monarch Nutrition Counseling | Client supplied | handoff cover | Yes |
| 4 | Solo, virtual practice — no physical office; telehealth | Client supplied | handoff p.2 | Yes |
| 5 | Based in St. Peters, MO | Client supplied | handoff p.2 | Yes (use for LocalBusiness schema) |
| 6 | Clinical focus: weight management and bariatrics | Client supplied | handoff p.2 | Yes |
| 7 | Pediatric / teen nutrition interest & service line | Client supplied | handoff p.2, proposal p.3 | Yes (as service, not as credential claim) |
| 8 | Three services: Individual, Child & Teen, Corporate Nutrition | Client supplied | proposal p.2–3 | Yes |
| 9 | In-network with insurance (insurance-first model) | Client supplied | handoff p.2 | Soft form only until carrier list arrives — "in-network" generally OK, name **no** carriers |
| 10 | Specific carrier names/logos | **Needs confirmation** | blocked on Katie's carrier list | **No.** Concepts use labeled placeholder slots |
| 11 | Self-pay package names and prices | **Needs confirmation** | blocked on Katie's rates | **No.** Concepts show structure with `[NEEDS CONFIRMATION]` price slots |
| 12 | Booking/intake happens in her EMR (SimplePractice or Healthie) | Client supplied (EMR choice unconfirmed) | handoff p.5 | Structure yes; name no EMR vendor in copy |
| 13 | Katie's phone / email / NPI / credential letters beyond "RD" | **Needs confirmation** | not in prep docs | **No.** Placeholder-labeled |
| 14 | Testimonials / client counts / outcomes stats | **Needs confirmation** | none supplied | **No.** Do not fabricate; no testimonial section in concepts |
| 15 | Corporate offering: employer wellness, lunch-and-learns, group contracts | Client supplied | proposal p.3 | Yes |
| 16 | Superbill / out-of-network reimbursement support | Reasonable inference | common RD practice; NOT confirmed | **No** — omit until confirmed |
| 17 | "Telehealth appointments for Missouri and New Jersey residents" | Reasonable inference from #2+#4 | licensure = practice scope | Yes (soft, accurate form) |
| 18 | HIPAA-conscious form: name/email/phone only, no PHI | Verified (build requirement) | handoff p.4 | Yes — design constraint |
| 19 | Monarch butterfly logo (Canva, existing) | Client supplied | handoff p.5 | Yes — represent as simple butterfly mark placeholder |
| 20 | Medical-advice disclaimer + privacy notice needed | Verified (regulated industry) | copy-accuracy policy | Yes — flagged for compliance pass |

## Copy rules for concepts

- Headlines lead with #1, #2, #4 (RD · MO + NJ · virtual). These are the
  45-second trust facts.
- The insurance strip renders as a **typographic carrier list with visibly
  labeled placeholder slots** ("Carrier list pending — from Katie's
  credentialing") — never invented carrier names.
- Pricing/session-structure blocks show real structure, `[NEEDS
  CONFIRMATION]` values.
- No testimonials, no stats, no outcome claims, no "MS, RD, LDN" alphabet
  soup beyond confirmed "RD".
- Creative copy (no factual claim) is free: e.g. "Nutrition counseling that
  starts where you are," clinician-to-colleague phrasing. Banned by client:
  "transform your life," "heal your relationship with food"-class filler.

## Consolidated open questions (one round, for Katie via Jon)

1. Confirmed carrier list (blocks insurance strip finalization).
2. Self-pay package names + rates.
3. Draft copy Google Doc.
4. EMR decision (SimplePractice vs Healthie) → contact-page outbound links.
5. Headshot/photography availability.
6. Domain preference — monarchnutritionist.com is an unrelated fitness
   business (Todd, Wix); suggest monarchnutritioncounseling.com or similar,
   registered in her name.
7. Exact credential string she may use (e.g. "RD, LD"?) and NPI for schema.
