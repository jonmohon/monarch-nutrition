import { Reveal } from "@/components/ui/Reveal";

/**
 * The handoff's highest-value element. Carrier logo strip drops in here
 * once Katie's credentialing list lands — typographic treatment until then.
 */
export function InsuranceStrip() {
  return (
    <section id="insurance" className="bg-warm-white text-center px-6 py-14">
      <Reveal>
        <p className="caps mb-6">In-Network With</p>
        <p
          className="font-display font-[440] text-brown max-w-[38ch] mx-auto mb-2.5"
          style={{ fontSize: "clamp(20px, 1.1rem + 1.1vw, 29px)" }}
        >
          Major insurance plans, billed directly — <em>coverage verified before your first visit.</em>
        </p>
        <p className="text-[15px] text-body">
          Self-pay packages are also available for out-of-network plans.
        </p>
        <p className="mt-3.5 text-[13px] italic text-muted">
          Full plan list published at launch, from Katie&rsquo;s credentialing.
        </p>
      </Reveal>
    </section>
  );
}
