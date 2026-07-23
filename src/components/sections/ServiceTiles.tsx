import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { BLUR } from "@/lib/blur-data";

/** Editorial tiles — no card boxes: art-direction, folio numbers, staggered
    columns. Images carry the warmth; type carries the structure. */
export function ServiceTiles() {
  return (
    <section className="max-w-[1340px] mx-auto px-5 lg:px-10 pt-28 pb-10">
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-16">
        <Reveal>
          <div>
            <p className="caps mb-4">Three Ways to Work Together</p>
            <h2
              className="font-[560] leading-[1.06] max-w-[16ch]"
              style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 3.9rem)", letterSpacing: "-0.01em" }}
            >
              Nutrition services with <span className="accent-word accent-sweep">room for real life.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={1} className="reveal-micro">
          <p className="max-w-[34ch] text-[15.5px] text-muted lg:text-right lg:pb-2">
            Reach out, get clear answers about coverage, and book your first telehealth visit in
            Katie&rsquo;s secure client portal.
          </p>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-9 gap-y-16 max-w-[460px] lg:max-w-none mx-auto">
        {SERVICES.map((svc, i) => (
          <Reveal
            key={svc.slug}
            delay={(i % 3) as 0 | 1 | 2}
            className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-32" : ""}
          >
            <Link href={`/services/${svc.slug}/`} className="group block no-underline">
              <div
                className="relative overflow-hidden rounded-[14px] shadow-warm-sm transition-shadow duration-[260ms] ease-[var(--ease-soft)] group-hover:shadow-warm-lg"
                style={{ viewTransitionName: `svc-${svc.slug}` }}
              >
                <div className="img-zoom">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    width={800}
                    height={560}
                    sizes="(min-width: 1024px) 420px, 90vw"
                    loading={i === 0 ? "eager" : undefined}
                    placeholder="blur"
                    blurDataURL={BLUR[svc.image]}
                    className="tile-photo w-full h-[330px] lg:h-[380px] object-cover group-hover:scale-[1.045]"
                  />
                </div>
                <span className="absolute top-4 left-4 bg-[rgba(46,31,24,.55)] backdrop-blur-sm text-cream text-[10.5px] tracking-[0.24em] uppercase font-semibold px-3.5 py-1.5 rounded-full">
                  {svc.audience}
                </span>
              </div>
              <div className="folio-num mt-6">{String(i + 1).padStart(2, "0")}</div>
              <h3
                className="font-[560] text-brown mt-3 mb-2 leading-tight"
                style={{ fontSize: "clamp(22px, 1.1rem + 1vw, 27px)" }}
              >
                {svc.title}
              </h3>
              <p className="text-[15.5px] text-body max-w-[38ch]">{svc.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[12px] tracking-[0.16em] uppercase text-orange-ink transition-all group-hover:gap-3.5 group-hover:text-brown">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
