import { generatePageMetadata } from "@/lib/metadata";
import { DISCLAIMER, SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: "Privacy Notice",
  description: `How ${SITE.name} handles the limited information collected on this website.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <section className="max-w-[720px] mx-auto px-5 lg:px-8 pt-20 pb-24">
      <p className="caps mb-3.5">Privacy Notice</p>
      <h1 className="font-[560] mb-8" style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 2.8rem)" }}>
        Plain language, short list.
      </h1>
      <div className="text-[16.5px] leading-[1.75] [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:mt-9 [&_h2]:mb-3 [&_p]:mb-4">
        <h2>What this website collects</h2>
        <p>
          The contact form collects three things: your name, your email address, and your phone
          number. There is no free-text field by design — this website is not the place for
          health information. Anything clinical happens after Katie contacts you, inside her
          secure, HIPAA-covered client portal.
        </p>
        <h2>What happens to it</h2>
        <p>
          Form submissions are emailed directly to Katie and are not stored in a database on this
          website. They are used to contact you back, and for nothing else — no marketing lists,
          no sharing, no selling.
        </p>
        <h2>Analytics</h2>
        <p>
          This site uses Google Analytics 4 for basic, aggregate traffic measurement only —
          which pages are visited and roughly how often. Advertising features, ad personalization,
          and remarketing are turned off. This site uses no advertising pixels, no session
          recording, and no chat widgets.
        </p>
        <h2>Medical disclaimer</h2>
        <p>{DISCLAIMER}</p>
        <h2>Questions</h2>
        <p>
          Reach out through the contact form and Katie will be glad to answer questions about any
          of the above.
        </p>
      </div>
    </section>
  );
}
