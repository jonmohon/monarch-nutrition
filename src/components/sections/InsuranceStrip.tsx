import { Reveal } from "@/components/ui/Reveal";
import { COVERAGE, SCHEDULING } from "@/data/site";

/**
 * Editorial two-column band: folio label rail left, oversized statement right.
 *
 * Sits on sage rather than warm-white — the first of the two light washes the
 * page alternates between now that the big brown fills are gone.
 */
export function InsuranceStrip() {
  return (
    <section id="insurance" className="bg-sage border-y border-border-soft">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
        <Reveal className="reveal-micro">
          <div className="folio-num pt-2">Coverage</div>
        </Reveal>
        <Reveal>
          <div>
            <p
              className="font-display font-[440] text-brown max-w-[24ch]"
              style={{ fontSize: "clamp(24px, 1.2rem + 1.8vw, 40px)", lineHeight: 1.22 }}
            >
              {COVERAGE.headline}
            </p>
            <p className="mt-5 text-[16px] text-body max-w-[62ch]">{COVERAGE.long}</p>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-3 border-t border-border-strong pt-5">
              <p className="text-[13px] tracking-[0.16em] uppercase font-semibold text-sage-ink">
                In-network billing first
              </p>
              <p className="text-[13px] tracking-[0.16em] uppercase font-semibold text-sage-ink">
                Self-pay for out-of-network
              </p>
              <p className="text-[13px] tracking-[0.16em] uppercase font-semibold text-sage-ink">
                {SCHEDULING.short}
              </p>
            </div>
            <p className="mt-4 text-[13px] italic text-muted">
              Full plan list published at launch, from my credentialing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
