import Image from "next/image";
import { KatieCard } from "@/components/sections/KatieCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { PullQuote } from "@/components/ui/PullQuote";
import { Reveal } from "@/components/ui/Reveal";
import { BLUR } from "@/lib/blur-data";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: `About ${SITE.clinician}, ${SITE.credential} · Registered Dietitian in Missouri & New Jersey`,
  description: `${SITE.clinician} is a Registered Dietitian licensed in Missouri and New Jersey, providing telehealth nutrition counseling for weight management, chronic conditions and abnormal labs, gut health, and child & teen nutrition.`,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Katie", path: "/about/" },
          ]),
        ]}
      />
      <section className="max-w-[1080px] mx-auto px-5 lg:px-10 pt-20 pb-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="caps !text-rose-ink mb-4">About Katie</p>
          <h1
            className="font-[560] leading-[1.1] max-w-[16ch]"
            style={{ fontSize: "clamp(2.2rem, 1.5rem + 2.6vw, 3.4rem)" }}
          >
            Hi — I&rsquo;m Katie.
          </h1>
          <div className="editorial-intro">
          <p className="mt-5 text-[16.5px] max-w-[56ch]">
            I&rsquo;m {SITE.clinician}, a Registered Dietitian licensed in Missouri and New
            Jersey. I work with adults on weight management, abnormal labs and chronic
            conditions, gut health, and performance — and my favorite work is helping children
            and teens build an easy, confident relationship with food.
          </p>
          <p className="mt-3.5 text-[16.5px] max-w-[56ch]">
            I run the practice entirely by telehealth from St. Peters, Missouri, and it is
            deliberately solo: the person who takes your call, verifies your coverage, and sits
            across the screen at every visit is me. That also means I can offer appointment times
            that fit around your work and your kids&rsquo; school day, instead of whatever slot
            an office has left.
          </p>
          <p className="mt-3.5 text-[13px] italic text-muted max-w-[56ch]">
            Katie&rsquo;s training and clinical background, in her own words, land here from
            her draft copy — this page is structured for it.
          </p>
          </div>
        </div>
        <Reveal delay={1}>
          <div className="relative">
            <div className="rounded-[18px] overflow-hidden shadow-warm">
              <Image
                src="/images/about-desk.webp"
                alt="A warm desk with a steaming cup of tea, blank planner, and a vase holding an olive branch"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 480px, 90vw"
                unoptimized
                placeholder="blur"
                blurDataURL={BLUR["/images/about-desk.webp"]}
                className="img-zoom w-full h-[420px] lg:h-[500px] object-cover"
              />
            </div>
            <p className="mt-3 text-[12.5px] italic text-muted text-center">
              Katie&rsquo;s headshot from the shoot replaces this image.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Referring providers */}
      <section className="bg-warm-white border-y border-border-soft">
        <div className="max-w-[1080px] mx-auto px-5 lg:px-10 py-16 lg:py-20 text-center">
          <Reveal>
            <p className="caps mb-3.5">For Referring Providers</p>
            <h2
              className="font-[560] max-w-[26ch] mx-auto mb-4"
              style={{ fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.7rem)" }}
            >
              Send a name and a number — <span className="accent-word accent-sweep">I take it from there.</span>
            </h2>
            <p className="max-w-[58ch] mx-auto">
              Physicians, physical therapists, chiropractors, and therapists: I verify
              coverage, run intake and scheduling in my secure client portal, and close the loop
              back to your office instead of leaving it a black hole. Most referrals come to me
              for abnormal labs, hypertension, hyperlipidemia, prediabetes, and diabetes.
            </p>
          </Reveal>
        </div>
      </section>

      <PullQuote
        quote="The clinician who takes your call, verifies your coverage, and sits across the screen at every visit is the same person."
        cite="The practice model, in one sentence"
      />

      <section className="max-w-[1080px] mx-auto px-5 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
        <div>
          <p className="caps !text-rose-ink mb-4">Training &amp; Credentials</p>
          <h2
            className="font-[560] leading-[1.12] mb-5 max-w-[20ch]"
            style={{ fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.7rem)" }}
          >
            The paperwork, in plain sight.
          </h2>
          <ul className="border-t border-border-strong">
            {[
              ["Credential", "Registered Dietitian (RD) — verify with the state boards at right"],
              ["Licensure", "Missouri + New Jersey, current"],
              [
              "Clinical focus",
              "Weight management · chronic conditions & abnormal labs · bariatric nutrition · gut health · child & teen nutrition",
            ],
              ["Practice model", "Solo, telehealth-only — one clinician at every step"],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-5 items-baseline py-4 border-b border-border-soft">
                <span className="folio-num !text-label w-36 flex-none">{k}</span>
                <span className="text-[15.5px] text-brown">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] italic text-muted">
            Education, training sites, and credential history land here from Katie&rsquo;s
            draft copy.
          </p>
        </div>
        <KatieCard />
      </section>
      <CtaBand />
    </>
  );
}
