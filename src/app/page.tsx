import { Hero } from "@/components/sections/Hero";
import { InsuranceStrip } from "@/components/sections/InsuranceStrip";
import { StatementBands } from "@/components/sections/StatementBands";
import { ServiceTiles } from "@/components/sections/ServiceTiles";
import { Steps } from "@/components/sections/Steps";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/data/site";
import Link from "next/link";

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
      <section className="max-w-[840px] mx-auto px-5 lg:px-10 pt-28 pb-28">
        <Reveal>
          <p className="caps text-center mb-3.5">Common Questions</p>
          <h2
            className="font-[560] text-center mb-3"
            style={{ fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.4rem)", letterSpacing: "-0.01em" }}
          >
            Answers before you ask.
          </h2>
          <p className="text-center max-w-[52ch] mx-auto mb-11">
            The questions referring offices and families ask most — answered plainly.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <FaqAccordion />
          <div className="text-center mt-9">
            <Link href="/contact/" className="btn btn-brown">
              Contact Katie
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
