import { cache } from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

/**
 * Blog content via Keystatic's Reader API — posts live in src/content/blog
 * as .mdoc files written by the /keystatic editor (or by hand).
 */

export const CATEGORIES = {
  "weight-management": {
    label: "Weight Management & Bariatric Nutrition",
    image: "/images/blog-weight.webp",
    link: "/services/individual-nutrition-counseling/",
    linkLabel: "Individual Nutrition Counseling",
  },
  "kids-teens": {
    label: "Feeding Kids & Teens",
    image: "/images/blog-kids.webp",
    link: "/services/child-teen-nutrition/",
    linkLabel: "Child & Teen Nutrition",
  },
  "getting-started": {
    label: "Insurance & Getting Started",
    image: "/images/blog-start.webp",
    link: "/contact/",
    linkLabel: "Contact Katie",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: CategoryKey;
  coverImage: string | null;
}

const reader = createReader(process.cwd(), keystaticConfig);

export const getAllPosts = cache(async (): Promise<BlogPostMeta[]> => {
  const entries = await reader.collections.posts.all();
  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      date: entry.date ?? "1970-01-01",
      description: entry.description,
      category: (entry.category ?? "weight-management") as CategoryKey,
      coverImage: entry.coverImage ?? null,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
});

export const getPost = cache(async (slug: string) => {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;
  const { node } = await entry.body();
  return {
    slug,
    title: entry.title,
    date: entry.date ?? "1970-01-01",
    description: entry.description,
    category: (entry.category ?? "weight-management") as CategoryKey,
    coverImage: entry.coverImage ?? null,
    node,
  };
});
