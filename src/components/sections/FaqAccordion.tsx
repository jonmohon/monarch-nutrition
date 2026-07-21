"use client";

import { useState } from "react";
import { FAQ } from "@/data/site";

/** APG disclosure pattern: h3 > button[aria-expanded] controlling a region. */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {FAQ.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className={`bg-warm-white border border-border-soft rounded-[14px] mb-3 overflow-hidden transition-shadow ${open ? "shadow-warm" : ""}`}
          >
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
                  className={`flex-none w-[27px] h-[27px] rounded-full border-[1.5px] grid place-items-center font-sans text-base font-semibold transition-all duration-300 ${
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
                <p className="px-5 sm:px-6 pb-5 text-[15.5px] max-w-[64ch]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
