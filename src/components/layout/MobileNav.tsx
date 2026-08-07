"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Escape (and link taps) previously dropped focus to <body>; send it back to
  // the toggle so keyboard users don't lose their place in the page.
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  // aria-modal="true" promises assistive tech that focus is contained. Honour
  // it: move focus in on open, and wrap Tab at both edges while open.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);
    focusables()[0]?.focus();
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 grid place-items-center text-brown"
      >
        <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
          {open ? (
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="1" x2="19" y2="15" />
              <line x1="19" y1="1" x2="3" y2="15" />
            </g>
          ) : (
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="2" x2="21" y2="2" />
              <line x1="1" y1="8" x2="21" y2="8" />
              <line x1="1" y1="14" x2="21" y2="14" />
            </g>
          )}
        </svg>
      </button>
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 top-[118px] z-50 bg-cream px-5 pt-6 pb-10 flex flex-col overflow-y-auto"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-display font-[560] text-brown border-b border-border-soft no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="btn btn-orange w-full mt-8"
          >
            Contact Katie
          </Link>
        </div>
      )}
    </div>
  );
}
