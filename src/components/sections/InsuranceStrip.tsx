import { Reveal } from "@/components/ui/Reveal";

/** Editorial two-column band: folio label rail left, oversized statement right. */
export function InsuranceStrip() {
  return (
    <section id="insurance" className="bg-warm-white border-b border-border-soft">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
        <Reveal className="reveal-micro">
          <div className="folio-num pt-2">In-Network</div>
        </Reveal>
        <Reveal>
          <div>
            <p
              className="font-display font-[440] text-brown max-w-[26ch]"
              style={{ fontSize: "clamp(24px, 1.2rem + 1.8vw, 40px)", lineHeight: 1.22 }}
            >
              Share your insurance when you reach out — <em>Katie verifies your exact benefits
              with your plan before anything is scheduled.</em>
            </p>
            <p className="mt-5 text-[15.5px] text-body">
              In-network billing first · self-pay packages for out-of-network plans.
            </p>
            <p className="mt-2 text-[13px] italic text-muted">
              Full plan list published at launch, from Katie&rsquo;s credentialing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
