import { STEPS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Numbered folio steps. `overrides` swaps step bodies per audience
 * (e.g. Child & Teen rewrites step 3 for a parent). The ink connector
 * line draws itself across the folio row on scroll (view-timeline).
 */
export function Steps({ overrides }: { overrides?: Partial<Record<number, string>> }) {
  return (
    <section className="max-w-[1180px] mx-auto px-5 lg:px-10 pt-20 pb-24 text-center">
      <Reveal>
        <p className="caps mb-3.5">Getting Started</p>
        <h2
          className="font-[560] mb-12"
          style={{ fontSize: "clamp(1.9rem, 1.4rem + 1.9vw, 2.9rem)" }}
        >
          Easy as <span className="accent-word">one, two, three.</span>
        </h2>
      </Reveal>
      <div className="relative grid sm:grid-cols-3 gap-10 text-left">
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
            <div className={i === 1 ? "lg:translate-y-3" : ""}>
              <div className="folio-num bg-transparent">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display italic font-[440] text-[40px] leading-none text-orange-ink mt-5">
                {i + 1}
              </div>
              <h3 className="text-[21px] font-[560] mt-3.5 mb-2">{step.title}</h3>
              <p className="text-[15px] max-w-[36ch]">{overrides?.[i] ?? step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
