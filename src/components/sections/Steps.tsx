import { STEPS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Numbered folio steps — oversized ghost numerals behind left-aligned copy,
 * the ink connector drawing across the folio row on scroll.
 */
export function Steps({ overrides }: { overrides?: Partial<Record<number, string>> }) {
  return (
    <section className="max-w-[1340px] mx-auto px-5 lg:px-10 pt-24 pb-28">
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-16">
        <Reveal>
          <div>
            <p className="caps mb-4">Getting Started</p>
            <h2
              className="font-[560] leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.4rem)", letterSpacing: "-0.01em" }}
            >
              Easy as <span className="accent-word">one, two, three.</span>
            </h2>
          </div>
        </Reveal>
      </div>
      <div className="relative grid sm:grid-cols-3 gap-x-10 gap-y-14 text-left">
        <svg
          className="hidden sm:block absolute left-0 right-0 top-[7px] w-full h-[2px] pointer-events-none"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="0.5"
            x2="100"
            y2="0.5"
            pathLength={1}
            stroke="var(--color-border-strong)"
            strokeWidth="1"
            className="steps-connector"
          />
        </svg>
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2}>
            <div className={`relative ${i === 1 ? "lg:translate-y-4" : ""}`}>
              <div className="folio-num">{String(i + 1).padStart(2, "0")}</div>
              <div
                aria-hidden="true"
                className="font-display italic font-[440] leading-none text-orange-ink opacity-[0.16] absolute -top-2 right-0 select-none"
                style={{ fontSize: "clamp(96px, 8vw, 132px)" }}
              >
                {i + 1}
              </div>
              <h3 className="text-[22px] font-[560] mt-9 mb-2.5 relative">{step.title}</h3>
              <p className="text-[15.5px] max-w-[36ch] relative">{overrides?.[i] ?? step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
