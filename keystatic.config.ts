import { config, collection, fields } from "@keystatic/core";

/**
 * Keystatic content editor — Katie publishes blog posts at /keystatic
 * without touching code (contract scope: "blog + editor setup").
 *
 * Storage: GitHub mode in production (commits -> auto-deploy). Falls back
 * to local mode in dev when the GitHub App env vars aren't set, so the
 * editor is testable before the one-time App setup.
 */
const useGitHub =
  process.env.NODE_ENV === "production" || !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

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
        body: fields.markdoc({
          label: "Post",
        }),
      },
    }),
  },
});
