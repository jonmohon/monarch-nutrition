"use client";

import { useState } from "react";
import { CORPORATE_FORMATS } from "@/data/site";

/** Corporate formats — expanding rows an HR contact can browse.
    Accessible disclosure per row; grid-rows height animation. */
export function TopicFormats() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border-strong">
      {CORPORATE_FORMATS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.title} className="relative border-b border-border-soft">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-orange origin-top transition-transform duration-300 motion-reduce:transition-none"
              style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}
            />
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`fmt-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full grid grid-cols-[52px_1fr_auto] items-baseline gap-4 py-7 pl-4 pr-1 text-left cursor-pointer group"
              >
                <span className="text-[12px] tracking-[0.18em] font-semibold text-olive [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className="font-display font-[560] text-[22px] sm:text-[26px] leading-tight text-brown"
                    style={{ fontVariationSettings: '"SOFT" 80' }}
                  >
                    {f.title}
                  </span>
                  <span className="text-[10.5px] tracking-[0.22em] uppercase font-semibold text-rose-ink">
                    {f.tag}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`self-center font-sans text-[19px] font-semibold transition-transform duration-[320ms] ease-[var(--ease-soft)] motion-reduce:transition-none ${
                    isOpen ? "rotate-45 text-brown" : "text-orange-ink group-hover:text-brown"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`fmt-${i}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pl-[68px] pr-6 pb-8 text-[15.5px] text-body max-w-[58ch]">{f.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
