import Link from "next/link";
import { SITE, NAV, DISCLAIMER } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brown text-[#D9C6B4] text-center px-6 pt-16 pb-12">
      <div className="font-display font-[560] text-2xl text-cream">{SITE.shortName}</div>
      <div className="text-[9.5px] tracking-[0.42em] uppercase text-[#B99F8A] mt-2 font-semibold">
        Nutrition Counseling
      </div>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-2 mt-8">
        {[...NAV, { label: "Contact", href: "/contact/" }, { label: "Privacy", href: "/privacy/" }].map(
          (item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11.5px] tracking-[0.18em] uppercase font-semibold text-[#D9C6B4] hover:text-cream no-underline transition-colors"
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <p className="mt-8 text-[11.5px] tracking-[0.18em] uppercase leading-[2.4] max-w-2xl mx-auto">
        <span className="text-cream font-semibold">
          {SITE.clinician}, {SITE.credential} · {SITE.credentialLong}
        </span>
        <br />
        Telehealth Nutrition Counseling for Missouri &amp; New Jersey Residents · {SITE.city},{" "}
        {SITE.state}
        <br />
        Physician, Therapist &amp; PT Referrals Welcome
      </p>
      <p className="mt-6 text-[12.5px] italic opacity-85 max-w-2xl mx-auto leading-relaxed">
        The contact form collects name, email &amp; phone only — no health information. Clinical
        intake and scheduling live in Katie&rsquo;s secure client portal. {DISCLAIMER}
      </p>
      <p className="mt-6 text-[11px] opacity-60">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
