"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ } from "@/data/site";

/** APG disclosure pattern: h3 > button[aria-expanded] controlling a region.
    The list cascades in item-by-item (70ms stagger) once scrolled into view. */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-inview");
          // After the cascade lands, clear stagger delays so open/close
          // shadows aren't lagged on later items.
          setTimeout(() => el.classList.add("cascade-done"), 1000);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={listRef} className="faq-list">
      {FAQ.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className={`faq-item relative bg-warm-white border border-border-soft rounded-[14px] mb-3 overflow-hidden transition-shadow ${open ? "shadow-warm" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-rose origin-top transition-transform duration-300 delay-100 motion-reduce:transition-none"
              style={{ transform: open ? "scaleY(1)" : "scaleY(0)" }}
            />
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer font-display font-[560] text-[17px] sm:text-[19px] text-brown group"
                style={{ fontVariationSettings: '"SOFT" 80' }}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`flex-none w-[27px] h-[27px] rounded-full border-[1.5px] grid place-items-center font-sans text-base font-semibold transition-all duration-[320ms] ease-[var(--ease-soft)] motion-reduce:transition-none ${
                    open
                      ? "rotate-45 bg-brown border-brown text-cream"
                      : "border-border-strong text-orange-ink group-hover:border-orange"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="px-5 sm:px-6 pb-5 text-[15.5px] max-w-[64ch] transition-[opacity,transform] duration-300 delay-100 motion-reduce:transition-none"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(6px)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
