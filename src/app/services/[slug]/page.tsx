import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQ, SERVICES, SITE } from "@/data/site";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { Steps } from "@/components/sections/Steps";
import { CtaBand } from "@/components/sections/CtaBand";
import { EmpathyList } from "@/components/sections/EmpathyList";
import { SessionCards } from "@/components/sections/SessionCards";
import { TopicFormats } from "@/components/sections/TopicFormats";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return generatePageMetadata({
    title: `${service.title} · Telehealth in Missouri & New Jersey`,
    description: `${service.short} Provided by ${SITE.clinician}, ${SITE.credentialLong}, with in-network insurance billing.`,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const siblings = SERVICES.filter((s) => s.slug !== service.slug);
  const isCorporate = service.slug === "corporate-nutrition";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.title, path: `/services/${service.slug}/` },
        ])}
      />
      <ServiceHero service={service} />

      {/* Credential restate — every service page stands alone (ad-landing discipline) */}
      <section className="bg-warm-white border-b border-border-soft text-center px-6 py-8">
        <p className="text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold text-label leading-[2.2]">
          {SITE.clinician}, {SITE.credential} · Licensed {SITE.statesShort} · Telehealth ·
          In-Network Billing
        </p>
      </section>

      {/* Scope */}
      <section className="max-w-[1080px] mx-auto px-5 lg:px-10 pt-20 pb-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20">
        <Reveal>
          <div>
            <p className="caps mb-3.5">
              {service.slug === "child-teen-nutrition"
                ? "Sound Familiar?"
                : isCorporate
                  ? "For Your Team"
                  : "What We Work On"}
            </p>
            <h2
              className="font-[560] leading-[1.12] max-w-[18ch]"
              style={{ fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.7rem)" }}
            >
              {isCorporate ? (
                <>
                  Programming that <span className="accent-word accent-sweep">earns its calendar slot.</span>
                </>
              ) : (
                <>
                  Care built around <span className="accent-word accent-sweep">your actual week.</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-[46ch]">{service.short}</p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <ul className="border-t border-border-strong">
            {service.scope.map((item) => (
              <li
                key={item}
                className="flex gap-4 items-baseline py-4 border-b border-border-soft text-[16.5px] text-brown"
              >
                <span className="text-orange-ink font-display italic" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {"empathy" in service ? (
        <EmpathyList
          items={service.empathy}
          closer={
            service.slug === "child-teen-nutrition"
              ? "Nothing on that list means you're doing it wrong — and neither is your kid. It's exactly where the work starts."
              : undefined
          }
        />
      ) : null}

      {isCorporate ? (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
          <Reveal className="reveal-micro">
            <div className="folio-num pt-3">Formats</div>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="font-[560] leading-[1.08] mb-10 max-w-[20ch]"
                style={{ fontSize: "clamp(1.9rem, 1.3rem + 2.2vw, 3.1rem)", letterSpacing: "-0.01em" }}
              >
                Pick the shape that <span className="accent-word accent-sweep">fits your team.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <TopicFormats />
            </Reveal>
          </div>
        </section>
      ) : (
        <SessionCards />
      )}

      {/* Insurance & fees */}
      <section id="insurance" className="max-w-[1080px] mx-auto px-5 lg:px-10 py-16">
        <Reveal>
          <div className="bg-brown text-cream rounded-[22px] px-7 py-10 lg:px-12 lg:py-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-14 shadow-warm-lg">
            <div>
              <p className="caps !text-rose mb-3">Insurance</p>
              <h2
                className="font-[440] !text-warm-white leading-snug"
                style={{ fontSize: "clamp(1.4rem, 1.1rem + 1vw, 1.9rem)" }}
              >
                In-network billing, verified up front.
              </h2>
              <p className="mt-3 text-[15.5px] text-[#D9C6B4] max-w-[52ch]">
                Monarch Nutrition Counseling bills participating insurance plans directly. Coverage
                for nutrition counseling varies by plan — you&rsquo;ll get clear answers about
                benefits before any appointment is scheduled.
              </p>
              <p className="mt-3 text-[12.5px] italic text-rose">
                Full plan list published at launch, from Katie&rsquo;s credentialing.
              </p>
            </div>
            <div>
              <p className="caps !text-rose mb-3">Self-Pay</p>
              <h2
                className="font-[440] !text-warm-white leading-snug"
                style={{ fontSize: "clamp(1.4rem, 1.1rem + 1vw, 1.9rem)" }}
              >
                Clear rates for out-of-network plans.
              </h2>
              <p className="mt-3 text-[15.5px] text-[#D9C6B4] max-w-[52ch]">
                {isCorporate
                  ? "Corporate programs are scoped and quoted per engagement — formats, group size, and cadence set with you."
                  : "Initial consultations, follow-up visits, and multi-visit packages at published rates."}
              </p>
              {!isCorporate && (
                <>
                  <p className="mt-3 text-[12.5px] italic text-rose">
                    Rates publish here the day Katie confirms her fee schedule.
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-block mt-3 text-[13.5px] font-semibold text-rose underline decoration-[rgba(231,154,148,.5)] underline-offset-4 hover:decoration-rose transition-colors"
                  >
                    Ask Katie for current self-pay rates →
                  </Link>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="bg-tint border-y border-border-soft">
        <Steps overrides={"stepsOverride" in service ? service.stepsOverride : undefined} />
      </div>

      {/* Quick answers — page-scoped FAQ subset (schema stays Home-only) */}
      <section className="max-w-[900px] mx-auto px-5 lg:px-10 pt-4 pb-16">
        <Reveal>
          <p className="caps mb-4">Quick Answers</p>
        </Reveal>
        <Reveal delay={1}>
          <FaqAccordion
            items={
              isCorporate
                ? [FAQ[1], FAQ[2]]
                : service.slug === "child-teen-nutrition"
                  ? [FAQ[3], FAQ[1], FAQ[2]]
                  : [FAQ[0], FAQ[2], FAQ[5]]
            }
          />
        </Reveal>
      </section>

      {/* Cross-links */}
      <section className="max-w-[1080px] mx-auto px-5 lg:px-10 py-16 text-center">
        <Reveal>
          <p className="caps mb-8">Also at Monarch</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="bg-warm-white border border-border-soft rounded-[14px] px-7 py-5 no-underline font-display font-[560] text-[18px] text-brown shadow-warm-sm transition-all hover:-translate-y-1 hover:shadow-warm"
                style={{ fontVariationSettings: '"SOFT" 80' }}
              >
                {s.title} <span className="text-orange-ink">→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand
        heading={
          isCorporate ? "Tell us who to reach — Katie will follow up." : "Ready when you are."
        }
        body={
          isCorporate
            ? "Send a name and an email through the contact form, and Katie will schedule a scoping call."
            : "Three fields, one conversation, clear answers about coverage — that's the whole first step."
        }
        label={isCorporate ? "Email Katie About Your Team" : "Contact Katie"}
      />
    </>
  );
}
