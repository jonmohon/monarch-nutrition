import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";

export default function NotFound() {
  return (
    <section className="max-w-[640px] mx-auto px-6 pt-28 pb-32 text-center">
      <div className="mark-migrate mx-auto mb-6 w-[52px]">
        <ButterflyMark size={52} color="var(--color-olive)" draw="load" className="opacity-70" />
      </div>
      <p className="caps mb-3">Page Not Found</p>
      <h1 className="font-[560] mb-4" style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 2.8rem)" }}>
        This page has migrated.
      </h1>
      <p className="max-w-[44ch] mx-auto mb-8">
        The page you&rsquo;re looking for isn&rsquo;t here — everything that is lives one step
        from home.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Link href="/" className="btn btn-orange">
          Back to Home
        </Link>
        <Link href="/contact/" className="btn btn-brown">
          Contact Katie
        </Link>
      </div>
    </section>
  );
}
