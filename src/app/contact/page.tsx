import { ContactForm } from "@/components/forms/ContactForm";
import { Steps } from "@/components/sections/Steps";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: "Contact Katie · Referrals & New Clients",
  description: `Contact ${SITE.name} — name, email, and phone is all it takes. Katie verifies coverage and handles intake in her secure client portal.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <section className="max-w-[1080px] mx-auto px-5 lg:px-10 pt-20 pb-24">
        <div className="bg-warm-white border border-border-soft rounded-[22px] p-7 sm:p-11 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14 shadow-warm-sm">
          <div>
            <p className="caps mb-3.5">Contact</p>
            <h1
              className="font-[560] leading-[1.1] mb-4 max-w-[14ch]"
              style={{ fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3rem)" }}
            >
              Three fields, <span className="accent-word">on purpose.</span>
            </h1>
            <p className="text-[15.5px] max-w-[46ch]">
              This form doesn&rsquo;t ask about your health — that conversation happens privately
              after Katie reaches out. Clinical intake lives in her secure client portal, never on
              this website.
            </p>
            <div
              id="referrers"
              className="mt-5 bg-tint border border-border-soft rounded-[12px] px-5 py-4 max-w-[46ch]"
            >
              <p className="text-[12px] tracking-[0.18em] uppercase font-semibold text-rose-ink mb-1.5">
                Referring Providers
              </p>
              <p className="text-[14.5px] text-brown">
                The same three fields work for your office — send your patient&rsquo;s name and
                best contact. Katie handles consent and intake herself once she calls, and closes
                the loop with your office.
              </p>
            </div>
            <p className="mt-4 text-[13.5px] italic text-muted max-w-[46ch]">
              Referring your child? Same three fields — Katie reaches out to set up the
              family&rsquo;s first visit.
            </p>
            <div className="mt-7 border-t border-border-soft pt-5">
              <p className="text-[11.5px] tracking-[0.2em] uppercase font-semibold text-label leading-[2.3]">
                {SITE.clinician}, {SITE.credential} · Licensed {SITE.statesShort}
                <br />
                Telehealth · {SITE.city}, {SITE.state}
              </p>
            </div>
          </div>
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-2">
          <Steps />
        </div>
        <div className="bg-tint border border-border-soft rounded-[16px] px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-[560] text-[18px] text-brown" style={{ fontVariationSettings: '"SOFT" 80' }}>
              Already working with Katie?
            </p>
            <p className="text-[14.5px] text-body">
              Book and message through the secure client portal — link arrives with launch.
            </p>
          </div>
          <span className="text-[12px] italic text-muted whitespace-nowrap">
            Portal link pending EMR confirmation
          </span>
        </div>
      </section>
    </>
  );
}
