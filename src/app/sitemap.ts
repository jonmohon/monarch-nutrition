import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/data/site";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = ["/", "/about/", "/blog/", "/contact/", "/privacy/"];
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...(await getAllPosts()).map((p) => ({
      url: `${SITE.url}/blog/${p.slug}/`,
      lastModified: new Date(`${p.date}T12:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
