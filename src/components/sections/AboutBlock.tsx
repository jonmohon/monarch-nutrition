import Image from "next/image";
import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { Reveal } from "@/components/ui/Reveal";
import { KatieCard } from "@/components/sections/KatieCard";

/**
 * About band — split editorial (the structure Katie liked on her reference
 * sites) with a layered photo collage: primary photo, offset caption label,
 * and the clinician card clipped over it like a referral note.
 */
export function AboutBlock() {
  return (
    <div className="bg-tint border-y border-border-soft relative overflow-hidden" id="about">
      <Reveal className="absolute top-8 -left-16 pointer-events-none hidden xl:block">
        <ButterflyMark
          size={340}
          color="var(--color-olive)"
          strokeWidth={0.5}
          draw="view"
          className="opacity-[0.14]"
        />
      </Reveal>
      <section className="max-w-[1240px] mx-auto px-5 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center relative">
        <Reveal>
          <div className="relative z-10">
            <p className="caps !text-rose-ink mb-4">About Katie</p>
            <h2
              className="font-[560] leading-[1.08] mb-5 max-w-[16ch]"
              style={{ fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.4rem)", letterSpacing: "-0.01em" }}
            >
              A dietitian your practice can refer to.
            </h2>
            <p className="text-[16.5px] max-w-[52ch]">
              Katie Sengheiser is a Registered Dietitian licensed in Missouri and New Jersey,
              practicing entirely by telehealth from St. Peters, Missouri. Her clinical focus is
              weight management and bariatric nutrition, with a genuine interest in helping
              children and teens build a workable relationship with food.
            </p>
            <p className="text-[16.5px] max-w-[52ch] mt-3.5">
              The practice is deliberately solo: the clinician who takes your call, verifies your
              coverage, and sits across the screen at every visit is the same person. Physician,
              therapist, and PT referrals are welcome.
            </p>
            <Link
              href="/about/"
              className="inline-block mt-7 font-semibold text-[12.5px] tracking-[0.16em] uppercase text-orange-ink no-underline border-b-[1.5px] border-border-strong pb-1 transition-colors hover:text-brown hover:border-orange"
            >
              More About Katie
            </Link>
          </div>
        </Reveal>
        <div className="relative pb-14 lg:pb-0">
          <Reveal delay={1}>
            <div className="relative overflow-hidden rounded-[16px] shadow-warm ml-auto lg:w-[92%]">
              <Image
                src="/images/about-table.jpg"
                alt="A ceramic plate with folded linen and a pear on a linen tablecloth"
                width={800}
                height={620}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="img-zoom w-full h-[340px] lg:h-[460px] object-cover"
              />
              <span className="absolute top-4 right-4 bg-[rgba(46,31,24,.5)] backdrop-blur-sm text-cream text-[10px] tracking-[0.26em] uppercase font-semibold px-3.5 py-1.5 rounded-full">
                St. Peters, MO · Telehealth
              </span>
            </div>
          </Reveal>
          <Reveal delay={2} className="relative lg:absolute lg:-bottom-2 lg:-left-6 -mt-20 lg:mt-0 max-w-[400px] mx-4 lg:mx-0">
            <div className="kcard-tilt">
              <KatieCard />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
