import { SESSIONS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

/** What visits actually look like — three folio cards, structure only. */
export function SessionCards() {
  return (
    <section className="max-w-[1340px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
      <Reveal>
        <p className="caps mb-4">What A Visit Looks Like</p>
        <h2
          className="font-[560] leading-[1.08] mb-14 max-w-[20ch]"
          style={{ fontSize: "clamp(1.9rem, 1.3rem + 2.2vw, 3.1rem)", letterSpacing: "-0.01em" }}
        >
          Unhurried, on purpose.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {SESSIONS.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2} className="h-full">
            <div
              className={`h-full bg-warm-white border border-border-soft rounded-[18px] p-8 shadow-warm-sm ${
                i === 1 ? "lg:translate-y-5" : ""
              }`}
            >
              <div className="folio-num mb-6">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-[560] text-[22px] text-brown mb-2.5">{s.title}</h3>
              <p className="text-[15.5px] text-body">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-[13px] italic text-muted">
        Session lengths and visit cadence publish here from Katie&rsquo;s practice details.
      </p>
    </section>
  );
}
