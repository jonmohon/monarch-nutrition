import Image from "next/image";
import type { Service } from "@/data/site";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden min-h-[380px] h-[52vh] max-h-[520px]">
      <div
        className="absolute inset-0 hero-parallax"
        style={{ viewTransitionName: `svc-${service.slug}` }}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,31,24,.42) 0%, rgba(46,31,24,.34) 50%, rgba(46,31,24,.55) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-[820px] px-6 text-cream">
        <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-[#F5E7D6] mb-4">
          {service.audience}
        </p>
        <h1
          className="font-display text-warm-white font-[440] leading-[1.1]"
          style={{
            fontSize: "clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem)",
            textShadow: "0 2px 26px rgba(46,31,24,.4)",
          }}
        >
          {service.title}
        </h1>
        <p className="mt-4 text-[16.5px] max-w-[50ch] mx-auto text-[#F4EADD]">{service.heroLine}</p>
      </div>
    </section>
  );
}
