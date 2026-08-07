import { config, collection, fields } from "@keystatic/core";

/**
 * Keystatic content editor — Katie publishes blog posts at /keystatic
 * without touching code (contract scope: "blog + editor setup").
 *
 * Storage: GitHub mode in production (commits -> auto-deploy). Falls back
 * to local mode in dev when the GitHub App env vars aren't set, so the
 * editor is testable before the one-time App setup.
 */
/**
 * This file is imported by a "use client" component (src/app/keystatic/
 * keystatic.tsx), so it is evaluated in BOTH environments — and only
 * NEXT_PUBLIC_* vars and NODE_ENV are inlined into the browser bundle. Any
 * other process.env read here is undefined client-side, which silently puts
 * the server in GitHub mode and the browser in local mode.
 *
 * NEXT_PUBLIC_KEYSTATIC_SETUP=1 forces GitHub mode while still running under
 * `next dev` — required exactly once to create the GitHub App, because
 * Keystatic's app-creation callback is hard-gated to development while the
 * setup wizard only renders when storage is already 'github'.
 * Set by `npm run keystatic:setup`.
 */
const useGitHub =
  process.env.NODE_ENV === "production" ||
  process.env.NEXT_PUBLIC_KEYSTATIC_SETUP === "1";

export default config({
  storage: useGitHub
    ? { kind: "github", repo: { owner: "jonmohon", name: "monarch-nutrition" } }
    : { kind: "local" },
  ui: {
    brand: { name: "Monarch Nutrition Counseling" },
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "body" },
      entryLayout: "content",
      columns: ["date", "category"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
        }),
        date: fields.date({
          label: "Publish date",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
        }),
        description: fields.text({
          label: "Description",
          description: "One or two sentences — shows on the blog page and in Google results.",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Category",
          description: "Which shelf this post belongs to.",
          options: [
            { label: "Weight Management & Bariatric Nutrition", value: "weight-management" },
            { label: "Feeding Kids & Teens", value: "kids-teens" },
            { label: "Insurance & Getting Started", value: "getting-started" },
          ],
          defaultValue: "weight-management",
        }),
        coverImage: fields.image({
          label: "Cover image (optional)",
          description: "Shown on the blog page card. Leave empty to use the category image.",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),
        coverImageAlt: fields.text({
          label: "Cover image description (optional)",
          description:
            "A short description of the cover photo for screen readers and Google Images — e.g. \"A parent and child washing vegetables at a kitchen sink.\" Leave empty if the photo is purely decorative.",
        }),
        draft: fields.checkbox({
          label: "Draft — hide this post from the website",
          description:
            "Tick this to save your work without publishing. The post stays here in the editor and will not appear on the site until you untick it.",
          defaultValue: false,
        }),
        body: fields.markdoc({
          label: "Post",
          // Without these, images inserted INSIDE the post body are committed to
          // src/content/blog/<slug>/ — a directory Next.js never serves — and 404
          // on the live page while still looking fine in the editor preview.
          options: {
            image: {
              directory: "public/images/blog",
              publicPath: "/images/blog/",
            },
          },
        }),
      },
    }),
  },
});
