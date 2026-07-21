"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="lg:hidden">
      <button
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
        <div className="fixed inset-0 top-[118px] z-50 bg-cream px-5 pt-6 pb-10 flex flex-col overflow-y-auto">
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
