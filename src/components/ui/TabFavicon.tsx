"use client";

import { useEffect } from "react";

/**
 * Tab-away favicon: monarch closes its wings when the tab is hidden,
 * reopens on return. Visual-only — no title-bar "come back" tricks.
 */
const OPEN =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="7" fill="#F7F0E4"/><g stroke="#3E2B23" stroke-width="1.6"><line x1="16" y1="5" x2="16" y2="27"/><path d="M16 13 C10.8 4, 3.8 5.8, 5 11.8 C5.9 16, 11.3 17, 16 15"/><path d="M16 13 C21.2 4, 28.2 5.8, 27 11.8 C26.1 16, 20.7 17, 16 15"/><path d="M16 17.6 C12.7 16, 8.1 17.7, 8.9 21.4 C9.7 24.7, 14.1 24.3, 16 21.4"/><path d="M16 17.6 C19.3 16, 23.9 17.7, 23.1 21.4 C22.3 24.7, 17.9 24.3, 16 21.4"/></g></svg>`,
  );
const CLOSED =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="7" fill="#F7F0E4"/><g stroke="#3E2B23" stroke-width="1.6"><line x1="14" y1="5" x2="14" y2="27"/><path d="M14 13 C17.5 4.5, 24.5 5, 24 11.5 C23.6 16.2, 18.4 16.8, 14 15"/><path d="M14 17.6 C16.8 16, 21.6 17.6, 21 21.3 C20.4 24.6, 15.9 24.3, 14 21.4"/></g></svg>`,
  );

export function TabFavicon() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = OPEN;
    const onVis = () => {
      link!.href = document.hidden ? CLOSED : OPEN;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return null;
}
