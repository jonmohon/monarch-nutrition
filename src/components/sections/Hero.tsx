import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

/** Editorial left-composed hero — headline owns the negative space, the
    photo's subject holds the right third. Server-rendered, static on paint. */
export function Hero() {
  return (
    <section className="relative flex items-end lg:items-center overflow-hidden min-h-[600px] h-[88vh] max-h-[900px]">
      <div className="absolute inset-0 hero-parallax">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="A woman smiling while cooking fresh vegetables in a bright kitchen"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-[68%_40%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(46,31,24,.72) 0%, rgba(46,31,24,.45) 38%, rgba(46,31,24,.12) 68%, rgba(46,31,24,.18) 100%), linear-gradient(180deg, rgba(46,31,24,0) 55%, rgba(46,31,24,.45) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="hero-copy-drift relative z-10 w-full max-w-[1340px] mx-auto px-5 lg:px-10 pb-24 lg:pb-0">
        <div className="max-w-[680px] text-left">
          <p className="flex items-center gap-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-[#F5E7D6] mb-7">
            <span className="inline-block w-11 h-px bg-rose" aria-hidden="true" />
            Katie Sengheiser, RD
          </p>
          <h1
            className="font-display text-warm-white font-[440] leading-[1.03] mb-6"
            style={{
              fontSize: "clamp(2.9rem, 1.9rem + 4.6vw, 5.7rem)",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 34px rgba(46,31,24,.45)",
            }}
          >
            Nutrition counseling from your <em className="font-[440]">own</em> kitchen table.
          </h1>
          <p className="text-[16.5px] sm:text-[18px] leading-[1.7] max-w-[46ch] mb-9 text-[#F4EADD]">
            Virtual nutrition care for adults, children &amp; teens, and workplaces — licensed in
            Missouri and New Jersey, with in-network insurance billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <MagneticButton>
              <Link href="/contact/" className="btn btn-orange w-full sm:w-auto">
                Contact Katie
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="#insurance" className="btn btn-ghost-light w-full sm:w-auto">
                Insurance &amp; Coverage
              </Link>
            </MagneticButton>
          </div>
          <p className="mt-6 text-[13px] text-[#F4EADD]">
            <Link
              href="/contact/#referrers"
              className="underline decoration-[rgba(247,240,228,.5)] underline-offset-4 hover:decoration-rose transition-colors"
            >
              Referring a patient? Start here →
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10 border-t border-[rgba(247,240,228,.22)] bg-[rgba(46,31,24,.55)] backdrop-blur-sm">
        <div className="max-w-[1340px] mx-auto px-5 lg:px-10 py-3.5 text-[9.5px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold text-cream flex flex-wrap gap-x-8 gap-y-1">
          <span>Registered Dietitian Care</span>
          <span className="text-rose" aria-hidden="true">
            ·
          </span>
          <span>Licensed MO + NJ</span>
          <span className="text-rose" aria-hidden="true">
            ·
          </span>
          <span>In-Network Billing</span>
          <span className="text-rose hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="hidden sm:inline">Telehealth Only</span>
        </div>
      </div>
    </section>
  );
}
