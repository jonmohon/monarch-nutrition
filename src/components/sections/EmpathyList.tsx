import { Reveal } from "@/components/ui/Reveal";

/** The reference sites' empathy-list pattern, quiet register — oversized
    italic statements the reader recognizes themselves in. */
export function EmpathyList({ items, closer }: { items: readonly string[]; closer?: string }) {
  return (
    <section className="bg-tint border-y border-border-soft">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
        <Reveal className="reveal-micro">
          <div className="folio-num pt-3">If This Is You</div>
        </Reveal>
        <div>
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 3) as 0 | 1 | 2}>
              <p
                className="font-display font-[440] italic text-brown border-b border-border-strong py-6 lg:py-7 leading-[1.3]"
                style={{
                  fontSize: "clamp(19px, 1rem + 1.3vw, 29px)",
                  fontVariationSettings: '"SOFT" 90',
                }}
              >
                {item}
              </p>
            </Reveal>
          ))}
          <Reveal>
            <p className="mt-6 text-[15.5px] text-body max-w-[54ch]">
              {closer ??
                "None of that needs fixing before you reach out — it's exactly where the work starts."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
