"use client";

import { useEffect } from "react";
import { monarchIconSvg } from "@/components/ui/MonarchMark";

/**
 * Tab-away favicon: monarch closes its wings when the tab is hidden,
 * reopens on return. Visual-only — no title-bar "come back" tricks.
 *
 * Same geometry as the logo mark — imported, not re-drawn, so they can't drift.
 */
const icon = (folded: boolean) =>
  "data:image/svg+xml," + encodeURIComponent(monarchIconSvg({ folded }));

const OPEN = icon(false);
const CLOSED = icon(true);

export function TabFavicon() {
  useEffect(() => {
    // Next emits BOTH /favicon.ico and /icon.svg links from the app-dir file
    // conventions. Retargeting only the first one leaves the other in place and
    // the browser is free to keep painting it, so the wings never move — every
    // icon link has to point at the same data URI.
    let links = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]'),
    );
    if (links.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
      links = [link];
    }
    const paint = (href: string) => {
      for (const link of links) {
        link.type = "image/svg+xml";
        // A stale sizes="any"/"32x32" from the .ico link outranks the new SVG
        // in some browsers' icon selection.
        link.removeAttribute("sizes");
        link.href = href;
      }
    };
    paint(OPEN);
    const onVis = () => paint(document.hidden ? CLOSED : OPEN);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return null;
}
