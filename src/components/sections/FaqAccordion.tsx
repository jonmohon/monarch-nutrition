"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ } from "@/data/site";

/** Editorial hairline accordion — folio numbers, Fraunces questions,
    APG disclosure semantics. Items cascade in on first view. */
export function FaqAccordion({
  items = FAQ,
}: {
  items?: readonly (typeof FAQ)[number][];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-inview");
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
    <div ref={listRef} className="faq-list border-t border-border-strong">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="faq-item relative border-b border-border-soft"
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
                className="w-full grid grid-cols-[52px_1fr_auto] items-baseline gap-4 py-6 pl-4 pr-1 text-left cursor-pointer group"
              >
                <span className="text-[12px] tracking-[0.18em] font-semibold text-olive [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display font-[560] text-[19px] sm:text-[21px] leading-snug text-brown"
                  style={{ fontVariationSettings: '"SOFT" 80' }}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`self-center font-sans text-[19px] font-semibold transition-transform duration-[320ms] ease-[var(--ease-soft)] motion-reduce:transition-none ${
                    open ? "rotate-45 text-brown" : "text-orange-ink group-hover:text-brown"
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
                  className="pl-[68px] pr-6 pb-7 text-[15.5px] max-w-[62ch] transition-[opacity,transform] duration-300 delay-100 motion-reduce:transition-none"
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
