import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

const FACTS = [
  { k: "Licensed", v: "Missouri + New Jersey" },
  { k: "Visits", v: "Telehealth only" },
  { k: "Billing", v: "In-network + self-pay" },
  { k: "Based in", v: `${SITE.city}, ${SITE.state}` },
];

export function AboutBlock() {
  return (
    <div className="bg-tint border-y border-border-soft relative overflow-hidden" id="about">
      <Reveal className="absolute top-11 -right-8 pointer-events-none hidden md:block">
        <ButterflyMark
          size={360}
          color="var(--color-olive)"
          strokeWidth={0.5}
          draw="view"
          className="opacity-[0.16]"
        />
      </Reveal>
      <section className="max-w-[1180px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-[1.12fr_0.88fr] gap-11 lg:gap-[76px] items-center relative">
        <Reveal>
          <div>
            <p className="caps !text-rose-ink mb-4">About Katie</p>
            <h2
              className="font-[560] leading-[1.12] mb-5 max-w-[20ch]"
              style={{ fontSize: "clamp(1.9rem, 1.4rem + 1.9vw, 3rem)" }}
            >
              A dietitian your practice can refer to.
            </h2>
            <p className="text-[16.5px] max-w-[56ch]">
              Katie Sengheiser is a Registered Dietitian licensed in Missouri and New Jersey,
              practicing entirely by telehealth from St. Peters, Missouri. Her clinical focus is
              weight management and bariatric nutrition, with a genuine interest in helping
              children and teens build a workable relationship with food.
            </p>
            <p className="text-[16.5px] max-w-[56ch] mt-3.5">
              The practice is deliberately solo: the clinician who takes your call, verifies your
              coverage, and sits across the screen at every visit is the same person. Physician,
              therapist, and PT referrals are welcome.
            </p>
            <Link
              href="/about/"
              className="inline-block mt-6 font-semibold text-[12.5px] tracking-[0.16em] uppercase text-orange-ink no-underline border-b-[1.5px] border-border-strong pb-1 transition-colors hover:text-brown hover:border-orange"
            >
              More About Katie
            </Link>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="bg-warm-white border border-border-soft rounded-[18px] p-8 lg:p-9 shadow-warm relative z-10">
            <ButterflyMark size={40} color="var(--color-orange)" strokeWidth={1.5} className="mb-4" />
            <div className="font-display font-[560] text-[25px] text-brown">{SITE.clinician}</div>
            <div className="text-[11.5px] tracking-[0.2em] uppercase font-semibold text-rose-ink mt-1 mb-5">
              {SITE.credentialLong} ({SITE.credential})
            </div>
            <ul className="border-t border-border-soft">
              {FACTS.map((f) => (
                <li
                  key={f.k}
                  className="flex justify-between gap-4 py-3 border-b border-border-soft text-[14.5px]"
                >
                  <span className="text-muted font-semibold text-[11.5px] tracking-[0.12em] uppercase pt-0.5">
                    {f.k}
                  </span>
                  <span className="text-right text-brown font-semibold">{f.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="https://pr.mo.gov/licensee-search.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brown no-underline border border-border-strong rounded-full px-4 py-2 transition-colors hover:border-orange hover:text-orange-ink"
              >
                Verify MO License ↗
              </a>
              <a
                href="https://newjersey.mylicense.com/verification/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brown no-underline border border-border-strong rounded-full px-4 py-2 transition-colors hover:border-orange hover:text-orange-ink"
              >
                Verify NJ License ↗
              </a>
            </div>
            <p className="mt-4 text-[12.5px] italic text-muted">
              Katie&rsquo;s headshot from her shoot drops in here.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
