import { Reveal } from "@/components/ui/Reveal";

/** Editorial pull quote — hairline rule, oversized Fraunces italic, small-caps
    attribution. Real copy only, never an invented testimonial. */
export function PullQuote({ quote, cite }: { quote: string; cite?: string }) {
  return (
    <section className="max-w-[820px] mx-auto px-6 py-20 lg:py-24 text-center">
      <Reveal className="reveal-statement">
        <div className="w-11 h-px bg-olive mx-auto mb-8" aria-hidden="true" />
        <p
          className="font-display font-[440] italic text-brown leading-[1.32]"
          style={{
            fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.2rem)",
            fontVariationSettings: '"SOFT" 100',
            textWrap: "pretty",
          }}
        >
          {quote}
        </p>
        {cite ? (
          <p className="mt-6 text-[11.5px] tracking-[0.2em] uppercase font-semibold text-muted">
            {cite}
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
