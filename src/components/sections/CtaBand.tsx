import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  heading = "Ready when you are.",
  body = "Three fields, one conversation, clear answers about coverage — that's the whole first step.",
  label = "Contact Katie",
  href = "/contact/",
}: {
  heading?: string;
  body?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="relative bg-brown text-center px-6 pt-[74px] pb-20 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -top-px left-[-6%] w-[112%] h-14 bg-cream"
        style={{ borderRadius: "0 0 60% 60% / 0 0 100% 100%" }}
      />
      <Reveal>
        <h2
          className="font-[440] !text-warm-white max-w-[26ch] mx-auto mb-3"
          style={{ fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.7rem)" }}
        >
          {heading}
        </h2>
        <p className="text-[#D9C6B4] max-w-[52ch] mx-auto mb-8">{body}</p>
        <Link href={href} className="btn btn-orange">
          {label}
        </Link>
      </Reveal>
    </section>
  );
}
