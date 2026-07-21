import { Hero } from "@/components/sections/Hero";
import { InsuranceStrip } from "@/components/sections/InsuranceStrip";
import { StatementBands } from "@/components/sections/StatementBands";
import { ServiceTiles } from "@/components/sections/ServiceTiles";
import { Steps } from "@/components/sections/Steps";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: `${SITE.name} · ${SITE.clinician}, ${SITE.credential} · Telehealth Dietitian in Missouri & New Jersey`,
  description:
    "Virtual nutrition counseling for adults, children & teens, and workplaces from Katie Sengheiser, RD — licensed in Missouri and New Jersey, with in-network insurance billing.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), personSchema(), faqSchema()]} />
      <Hero />
      <InsuranceStrip />
      <StatementBands />
      <ServiceTiles />
      <Steps />
      <AboutBlock />
      <section className="max-w-[1180px] mx-auto px-5 lg:px-10 pt-28 pb-32 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
        <Reveal className="reveal-micro">
          <div className="lg:sticky lg:top-32">
            <div className="folio-num pt-2">Questions</div>
            <p className="mt-5 text-[14.5px] text-muted max-w-[22ch] hidden lg:block">
              The questions referring offices and families ask most — answered plainly.
            </p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2
              className="font-[560] mb-10 max-w-[18ch]"
              style={{ fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.4rem)", letterSpacing: "-0.01em" }}
            >
              Answers <span className="accent-word accent-sweep">before you ask.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>
      <CtaBand
        heading="Ready when you are."
        body="Three fields, one conversation, clear answers about coverage — that's the whole first step."
      />
    </>
  );
}
