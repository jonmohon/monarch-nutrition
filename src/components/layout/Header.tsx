import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { MobileNav } from "@/components/layout/MobileNav";
import { SITE } from "@/data/site";

const NAV_LEFT = [
  { label: "About Katie", href: "/about/" },
  { label: "Individual", href: "/services/individual-nutrition-counseling/" },
  { label: "Child & Teen", href: "/services/child-teen-nutrition/" },
];
const NAV_RIGHT = [
  { label: "Corporate", href: "/services/corporate-nutrition/" },
  { label: "Blog", href: "/blog/" },
];

const navLink =
  "text-[12px] tracking-[0.18em] uppercase font-semibold text-body pb-1 border-b-[1.5px] border-transparent transition-colors hover:text-brown hover:border-rose no-underline";

export function Header() {
  return (
    <>
      <div className="bg-brown text-cream text-center px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-semibold">
        Registered Dietitian <span className="text-rose px-2">·</span> Licensed in Missouri &amp;
        New Jersey <span className="text-rose px-2">·</span> Virtual Nutrition Counseling
      </div>
      <header
        className="bg-cream border-b border-border-soft sticky top-0 z-40"
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="max-w-[1340px] mx-auto px-5 lg:px-10 h-[76px] lg:h-24 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-5">
          <nav aria-label="Primary left" className="hidden lg:flex gap-8 justify-start">
            {NAV_LEFT.map((item) => (
              <Link key={item.href} href={item.href} className={navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="flex flex-col items-start lg:items-center gap-1.5 no-underline order-first lg:order-none"
            aria-label={`${SITE.name} — home`}
          >
            <span className="font-display font-[560] text-brown text-xl lg:text-[26px] leading-none flex items-center gap-2.5">
              <ButterflyMark size={26} draw="load" />
              {SITE.shortName}
            </span>
            <span className="text-[8.5px] lg:text-[9.5px] tracking-[0.42em] uppercase text-label font-semibold">
              Nutrition Counseling
            </span>
          </Link>
          <div className="flex items-center gap-8 justify-end">
            <nav aria-label="Primary right" className="hidden lg:flex gap-8 items-center">
              {NAV_RIGHT.map((item) => (
                <Link key={item.href} href={item.href} className={navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/contact/" className="btn btn-orange hidden sm:inline-block">
              Contact Katie
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
