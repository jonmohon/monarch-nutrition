import { STEPS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Steps() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 lg:px-10 pt-20 pb-24 text-center">
      <Reveal>
        <p className="caps mb-3.5">Getting Started</p>
        <h2
          className="font-[560] mb-12"
          style={{ fontSize: "clamp(1.9rem, 1.4rem + 1.9vw, 2.9rem)" }}
        >
          Easy as <span className="accent-word">one, two, three.</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-10">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2}>
            <div>
              <div className="font-display italic font-[440] text-[44px] leading-none text-orange-ink">
                {i + 1}
              </div>
              <div className="w-9 h-[1.5px] bg-border-strong mx-auto mt-4 mb-4.5" />
              <h3 className="text-[21px] font-[560] mb-2">{step.title}</h3>
              <p className="text-[15px] max-w-[34ch] mx-auto">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
