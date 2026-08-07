import type { Metadata } from "next";
import { SITE } from "@/data/site";

const DEFAULT_OG_IMAGE = `${SITE.url}/images/og.jpg`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Page-specific social image (absolute or site-root-relative). */
  image?: string | null;
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  ogType = "website",
  publishedTime,
  modifiedTime,
  image,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE.url}${image}`
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: ogType,
      images: [{ url: ogImage, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    // Next resolves twitter.images only from twitter.images — it never inherits
    // from openGraph.images — so set it explicitly rather than relying on X's
    // own og:image fallback.
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  };
}
