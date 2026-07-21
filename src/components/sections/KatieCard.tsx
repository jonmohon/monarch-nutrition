import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { SITE } from "@/data/site";

const FACTS = [
  { k: "Licensed", v: "Missouri + New Jersey" },
  { k: "Visits", v: "Telehealth only" },
  { k: "Billing", v: "In-network + self-pay" },
  { k: "Based in", v: `${SITE.city}, ${SITE.state}` },
];

/** The clinician fact card — the referral-note artifact, shared by Home + About. */
export function KatieCard() {
  return (
    <div className="bg-warm-white border border-border-soft rounded-[18px] p-8 lg:p-9 shadow-warm relative z-10">
      <ButterflyMark size={40} color="var(--color-orange)" strokeWidth={1.5} className="mb-4" />
      <div className="font-display font-[560] text-[25px] text-brown">{SITE.clinician}</div>
      <div className="text-[11.5px] tracking-[0.2em] uppercase font-semibold text-rose-ink mt-1 mb-2">
        {SITE.credentialLong} ({SITE.credential})
      </div>
      <div className="w-11 h-[2px] bg-rose mb-5" aria-hidden="true" />
      <ul className="border-t border-border-soft">
        {FACTS.map((f) => (
          <li
            key={f.k}
            className="flex justify-between gap-4 py-3 border-b border-border-soft text-[14.5px]"
          >
            <span className="text-muted font-semibold text-[11.5px] tracking-[0.12em] uppercase pt-0.5">
              {f.k}
            </span>
            <span className="text-right text-brown font-semibold">{f.v}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href="https://pr.mo.gov/licensee-search.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brown no-underline border border-border-strong rounded-full px-4 py-2 transition-colors hover:border-orange hover:text-orange-ink"
        >
          Verify MO License ↗
        </a>
        <a
          href="https://newjersey.mylicense.com/verification/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brown no-underline border border-border-strong rounded-full px-4 py-2 transition-colors hover:border-orange hover:text-orange-ink"
        >
          Verify NJ License ↗
        </a>
      </div>
      <p className="mt-4 text-[12.5px] italic text-muted">
        Katie&rsquo;s headshot from her shoot drops in here.
      </p>
    </div>
  );
}
