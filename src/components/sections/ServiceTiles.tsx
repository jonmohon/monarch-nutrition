import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceTiles() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-24 pb-8 text-center">
      <Reveal>
        <p className="caps mb-3.5">Three Ways to Work Together</p>
        <h2
          className="font-[560] leading-[1.1] max-w-[26ch] mx-auto mb-4"
          style={{ fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3.2rem)" }}
        >
          Nutrition services with <span className="accent-word">room for real life.</span>
        </h2>
        <p className="max-w-[58ch] mx-auto">
          Reach out, get clear answers about coverage, and book your first telehealth visit —
          scheduling and intake happen in Katie&rsquo;s secure client portal.
        </p>
      </Reveal>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-14 max-w-[440px] lg:max-w-none mx-auto">
        {SERVICES.map((svc, i) => (
          <Reveal key={svc.slug} delay={(i % 3) as 0 | 1 | 2} className="h-full">
            <Link
              href={`/services/${svc.slug}/`}
              className="group bg-warm-white border border-border-soft rounded-[18px] overflow-hidden no-underline flex flex-col text-left h-full shadow-warm-sm transition-[transform,box-shadow] duration-[260ms] ease-[var(--ease-soft)] hover:-translate-y-1.5 hover:shadow-warm-lg"
            >
              <div
                className="h-[250px] overflow-hidden"
                style={{ viewTransitionName: `svc-${svc.slug}` }}
              >
                <div className="img-zoom w-full h-full">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    width={800}
                    height={500}
                    sizes="(min-width: 1024px) 400px, 90vw"
                    className="tile-photo w-full h-full object-cover group-hover:scale-[1.045]"
                  />
                </div>
              </div>
              <div className="p-7 pb-8 flex flex-col flex-1">
                <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-rose-ink mb-2">
                  {svc.audience}
                </p>
                <h3 className="text-[23px] font-[560] mb-2">{svc.title}</h3>
                <p className="text-[15.5px] flex-1">{svc.short}</p>
                <span className="mt-4 font-semibold text-[12.5px] tracking-[0.14em] uppercase text-orange-ink inline-flex items-center gap-2 transition-all group-hover:gap-3.5 group-hover:text-brown">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
