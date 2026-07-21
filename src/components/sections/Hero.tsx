import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

/** Server-rendered static hero — no entrance motion (LCP rule);
    parallax drift is scroll-linked only, so it never delays paint. */
export function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden min-h-[560px] h-[86vh] max-h-[860px]">
      <div className="absolute inset-0 hero-parallax">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="A woman smiling while cooking fresh vegetables in a bright kitchen"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-[50%_42%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,31,24,.30) 0%, rgba(46,31,24,.26) 45%, rgba(46,31,24,.52) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-[880px] px-6 lg:px-8 text-cream pb-16 sm:pb-0">
        <p className="text-[11px] sm:text-xs tracking-[0.34em] uppercase font-semibold text-[#F5E7D6] mb-6">
          Katie Sengheiser, RD &nbsp;·&nbsp; Registered Dietitian
        </p>
        <h1
          className="font-display text-warm-white font-[440] leading-[1.12] mb-5"
          style={{
            fontSize: "clamp(2.5rem, 1.7rem + 4vw, 4.9rem)",
            textShadow: "0 2px 30px rgba(46,31,24,.4)",
          }}
        >
          Nutrition counseling from your <em className="font-[440]">own</em> kitchen table.
        </h1>
        <p className="text-[16.5px] sm:text-[17.5px] leading-[1.7] max-w-[54ch] mx-auto mb-8 text-[#F4EADD]">
          Virtual nutrition care for adults, children &amp; teens, and workplaces — licensed in
          Missouri and New Jersey, with in-network insurance billing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton>
            <Link href="/contact/" className="btn btn-orange w-full max-w-[320px] sm:w-auto">
              Contact Katie
            </Link>
          </MagneticButton>
          <Link
            href="/services/individual-nutrition-counseling/#insurance"
            className="btn btn-ghost-light w-full max-w-[320px] sm:w-auto"
          >
            Insurance &amp; Coverage
          </Link>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 sm:bottom-9 z-10 bg-[rgba(46,31,24,.72)] backdrop-blur border border-[rgba(247,240,228,.16)] text-cream text-[9.5px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.24em] uppercase font-semibold px-5 sm:px-8 py-3 sm:py-4 rounded-full w-[90vw] sm:w-auto sm:whitespace-nowrap leading-[2] sm:leading-normal">
        Registered Dietitian Care <span className="text-rose px-2">·</span> Licensed MO + NJ{" "}
        <span className="text-rose px-2">·</span> In-Network Billing
      </div>
    </section>
  );
}
