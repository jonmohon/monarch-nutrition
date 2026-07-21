import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { Reveal } from "@/components/ui/Reveal";
import { KatieCard } from "@/components/sections/KatieCard";

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
          <KatieCard />
        </Reveal>
      </section>
    </div>
  );
}
