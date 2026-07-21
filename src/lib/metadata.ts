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
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  ogType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;

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
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE.name }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  };
}
