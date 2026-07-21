import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";

export default function NotFound() {
  return (
    <section className="max-w-[640px] mx-auto px-6 pt-28 pb-32 text-center">
      <ButterflyMark size={52} color="var(--color-olive)" className="mx-auto mb-6 opacity-70" />
      <p className="caps mb-3">Page Not Found</p>
      <h1 className="font-[560] mb-4" style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 2.8rem)" }}>
        This page flew off somewhere.
      </h1>
      <p className="max-w-[44ch] mx-auto mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist — but everything on this site is one
        step from home.
      </p>
      <Link href="/" className="btn btn-orange">
        Back to Home
      </Link>
    </section>
  );
}
