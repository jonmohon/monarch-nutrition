import type { Metadata } from "next";
import KeystaticApp from "./keystatic";

/**
 * robots.txt disallows /keystatic, but that only prevents crawling — a URL
 * discovered via an external link could still be listed. noindex closes it.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function KeystaticLayout() {
  return <KeystaticApp />;
}
