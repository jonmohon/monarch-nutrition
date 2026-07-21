import Image from "next/image";

/** Small monarch glyph separator for the marquee. */
function ButterflyGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-70">
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9.5 C8 2.5, 2.5 4, 3.5 9 C4.2 12.4, 8.6 13.2, 12 11.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 9.5 C16 2.5, 21.5 4, 20.5 9 C19.8 12.4, 15.4 13.2, 12 11.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

/**
 * The statement scene: an inset image that expands to full-bleed as you
 * scroll through it, carrying the telehealth statement — followed by the
 * orange kinetic marquee. Falls back to a static full-bleed band.
 */
export function StatementBands() {
  return (
    <>
      <section className="relative min-h-[78vh] flex items-center justify-center text-center overflow-hidden">
        <div className="zoom-bleed absolute inset-0">
          <Image
            src="/images/hero-table.jpg"
            alt=""
            role="presentation"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover object-[50%_60%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(46,31,24,.5) 0%, rgba(46,31,24,.42) 50%, rgba(46,31,24,.55) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="band-lift relative z-10 px-6 py-28">
          <p className="caps !text-rose mb-4">Why Telehealth</p>
          <p
            className="font-display font-[440] text-warm-white max-w-[24ch] mx-auto leading-[1.14]"
            style={{
              fontSize: "clamp(28px, 1.4rem + 2.6vw, 52px)",
              letterSpacing: "-0.005em",
              textShadow: "0 2px 30px rgba(46,31,24,.4)",
            }}
          >
            Real nutrition care,
            <br />
            <em>without the waiting room.</em>
          </p>
        </div>
      </section>
      <div
        className="marquee-band bg-orange text-brown py-5 font-display font-[560] uppercase overflow-hidden"
        style={{ fontSize: "clamp(13px, 0.8rem + 0.6vw, 18px)", letterSpacing: "0.18em" }}
        aria-label="Expert nutrition care · In network and online · Referrals welcome"
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((n) => (
            <span key={n} className="marquee-seq">
              {["Expert nutrition care", "In network and online", "Referrals welcome"].map(
                (t) => (
                  <span key={t} className="inline-flex items-center">
                    <span className="px-6">{t}</span>
                    <ButterflyGlyph />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
