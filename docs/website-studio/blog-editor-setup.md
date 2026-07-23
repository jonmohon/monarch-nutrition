# Blog Editor (Keystatic) — Setup & Handoff

The blog editor lives at **`/keystatic`** on the site (friendly alias: **`/publish`** — use that with Katie). Posts are `.mdoc`
files in `src/content/blog/`; publishing in the editor commits to GitHub,
which auto-deploys. Fields: title, publish date, description, category
(three pillars), optional cover image, body (rich text).

## State right now

- Editor fully wired and verified (local mode + Markdoc render path).
- Production `/keystatic` shows a GitHub login that cannot complete until
  the one-time App setup below — that's intentional and safe.
- Dev without env vars = **local mode**: run `npm run dev`, open
  `http://localhost:3000/keystatic`, edits write straight to the repo
  working tree (Jon can author/publish this way today).

## Jon's one-time GitHub App setup (~5 minutes, browser)

1. In the repo: temporarily set `NODE_ENV` aside — just run `npm run dev`
   and open `/keystatic`, then use the **"Setup GitHub mode"** flow (or run
   the same flow from a production visit once env placeholders are
   replaced). Sign in as **jonmohon** (repo owner).
2. Keystatic walks you through creating a GitHub App scoped to
   `jonmohon/monarch-nutrition` and writes four values to `.env`:
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`,
   `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
3. Copy all four into the Amplify console (app `d1sy2oloye2x8a`,
   us-east-2) — they're already in the `amplify.yml` injection allowlist.
4. Redeploy (any push, or console "Redeploy this version").
5. Verify: visit `https://<site>/keystatic`, log in with GitHub, create a
   test post on a branch, delete it.

Note the App's callback URL must include the live domain — when the custom
domain lands at launch, add it in the GitHub App settings (Developer
Settings → GitHub Apps → the Keystatic app → Callback URLs).

## How sign-in actually works (read this before explaining it to anyone)

The site has no database — posts are files in the GitHub repo, which is
both the storage and the identity check. Three separate one-time events:

1. **Jon, before training**: create the site↔GitHub connector (the App)
   and put its 4 keys in Amplify. Pure plumbing; nothing to do with Katie.
   Nobody can log in until this exists.
2. **Katie, at training (once)**: free GitHub account (email+password,
   plus 2FA — budget for it) → accept Jon's collaborator invite from her
   email → visit /publish → "Sign in with GitHub" → click Authorize once.
3. **Katie, forever after**: nothing. /publish remembers her. A login
   screen only reappears on a new device or cleared cookies, and then
   it's an ordinary email+password login.

Framing for Katie: "one account, one email invite, one Authorize button —
all three together in five minutes at training."

## Katie onboarding (training session)

1. Katie creates a free GitHub account (or brings one).
2. Invite her as a collaborator with **write** access to
   `jonmohon/monarch-nutrition` (Settings → Collaborators) — or transfer
   the repo to her account at final payment per the proposal's ownership
   terms (the GitHub App then needs re-installing on the new owner).
3. Her flow, the whole thing: **site.com/publish** → sign in → Blog Posts
   → "+" → write → Save → live in ~3 minutes. Hand her
   `katie-posting-guide.md` — it's written to be sent as-is.
4. Set expectations: publishing takes a few minutes (the site rebuilds);
   Amplify emails on build completion can be enabled if she wants a "it's
   live" ping.

## Implementation notes (for future maintainers)

- `keystatic.config.ts` — storage: GitHub in production, local in dev
  when the env vars are absent.
- Admin chrome isolation: `src/components/layout/ChromeGate.tsx` strips
  header/footer/Lenis/grain on `/keystatic`.
- CSP: the strict site CSP intentionally excludes `/keystatic` and
  `/api/keystatic` (negative lookahead in `next.config.ts`); robots
  disallows `/keystatic`.
- Rendering: `src/lib/blog.ts` uses Keystatic's Reader API; post bodies
  render via Markdoc (`blog/[slug]/page.tsx`). Category drives the
  related-service CTA and the fallback card image.
- The API route ships build-safe placeholder credentials until the real
  ones exist (`src/app/api/keystatic/[...params]/route.ts`).
