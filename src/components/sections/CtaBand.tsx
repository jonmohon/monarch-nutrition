import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { MonarchOutline } from "@/components/ui/MonarchMark";
import { SCHEDULING } from "@/data/site";

/**
 * Closing call to action. This used to be a full-width dark-brown fill on
 * every page — with the footer directly beneath it, that stacked two large
 * brown blocks at the bottom of every scroll and was the second-biggest
 * source of the "a lot of brown" read.
 *
 * It is now a light sage band. The footer keeps the dark anchor, so the page
 * still ends on contrast — just once instead of twice.
 */
export function CtaBand({
  heading = "Ready to start your transformation?",
  body = "Three fields, one conversation, and clear answers about what your plan covers — that's the whole first step.",
  label = "Contact Katie",
  href = "/contact/",
}: {
  heading?: string;
  body?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="relative bg-sage border-t border-border-soft text-center px-6 pt-[74px] pb-20 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -top-px left-[-6%] w-[112%] h-14 bg-cream"
        style={{ borderRadius: "0 0 60% 60% / 0 0 100% 100%" }}
      />
      <Reveal>
        <MonarchOutline
          size={44}
          color="var(--color-sage-ink)"
          strokeWidth={0.9}
          draw="view"
          className="mx-auto mb-6 opacity-60"
        />
        <h2
          className="font-[440] max-w-[26ch] mx-auto mb-3"
          style={{ fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.7rem)" }}
        >
          {heading}
        </h2>
        <p className="text-body max-w-[52ch] mx-auto mb-8">{body}</p>
        <Link href={href} className="btn btn-orange">
          {label}
        </Link>
        <p className="mt-5 text-[13px] text-muted max-w-[46ch] mx-auto">{SCHEDULING.short}.</p>
      </Reveal>
    </section>
  );
}
