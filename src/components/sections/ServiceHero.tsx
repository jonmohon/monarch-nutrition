import Image from "next/image";
import type { Service } from "@/data/site";
import { BLUR } from "@/lib/blur-data";

/** Left-composed interior hero — matches the home hero's editorial language. */
export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex items-end overflow-hidden min-h-[400px] h-[56vh] max-h-[560px]">
      <div
        className="absolute inset-0 hero-parallax"
        style={{ viewTransitionName: `svc-${service.slug}` }}
      >
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={BLUR[service.heroImage]}
          className="object-cover object-[62%_45%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(46,31,24,.74) 0%, rgba(46,31,24,.44) 42%, rgba(46,31,24,.12) 72%), linear-gradient(180deg, rgba(46,31,24,0) 45%, rgba(46,31,24,.5) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 lg:px-10 pb-12 lg:pb-14">
        <div className="max-w-[640px] text-left">
          <p className="flex items-center gap-4 text-[11px] sm:text-xs tracking-[0.28em] uppercase font-semibold text-[#F5E7D6] mb-5">
            <span className="inline-block w-11 h-px bg-rose" aria-hidden="true" />
            {service.audience}
          </p>
          <h1
            className="font-display text-warm-white font-[440] leading-[1.06]"
            style={{
              fontSize: "clamp(2.3rem, 1.5rem + 3.2vw, 4.1rem)",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 28px rgba(46,31,24,.45)",
            }}
          >
            {service.title}
          </h1>
          <p className="mt-4 text-[16.5px] max-w-[46ch] text-[#F4EADD]">{service.heroLine}</p>
        </div>
      </div>
    </section>
  );
}
