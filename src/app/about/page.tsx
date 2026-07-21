import Image from "next/image";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: `About ${SITE.clinician}, ${SITE.credential} · Registered Dietitian in Missouri & New Jersey`,
  description: `${SITE.clinician} is a Registered Dietitian licensed in Missouri and New Jersey, providing telehealth nutrition counseling with a focus on weight management, bariatric nutrition, and child & teen nutrition.`,
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
            Written for the clinician doing the referring.
          </h1>
          <div className="editorial-intro">
          <p className="mt-5 text-[16.5px] max-w-[56ch]">
            Katie Sengheiser is a Registered Dietitian licensed in Missouri and New Jersey. Her
            clinical focus is weight management and bariatric nutrition; her favorite work is
            helping children and teens build an easy, workable relationship with food.
          </p>
          <p className="mt-3.5 text-[16.5px] max-w-[56ch]">
            The practice runs entirely by telehealth from St. Peters, Missouri, and it is
            deliberately solo: the clinician who takes the referral, verifies the coverage, and
            sits across the screen at every visit is the same person.
          </p>
          <p className="mt-3.5 text-[13px] italic text-muted max-w-[56ch]">
            Katie&rsquo;s training and clinical background, in her own words, land here from her
            draft copy — this page is structured for it.
          </p>
          </div>
        </div>
        <Reveal delay={1}>
          <div className="relative">
            <div className="rounded-[18px] overflow-hidden shadow-warm">
              <Image
                src="/images/about-olive.jpg"
                alt="An olive branch in a porcelain jug against a bright window"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="w-full h-[420px] lg:h-[500px] object-cover"
              />
            </div>
            <p className="mt-3 text-[12.5px] italic text-muted text-center">
              Katie&rsquo;s headshot from her shoot replaces this image.
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
              Send a name and a number — <span className="accent-word">Katie takes it from there.</span>
            </h2>
            <p className="max-w-[58ch] mx-auto">
              Physicians, physical therapists, chiropractors, and therapists: coverage
              verification, intake, and scheduling all happen in Katie&rsquo;s secure client
              portal, and your office gets a clear answer instead of a black hole.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutBlock />
      <CtaBand />
    </>
  );
}
