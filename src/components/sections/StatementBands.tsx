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

/** Curved brown statement band + orange kinetic marquee (the reference sites'
    color-confidence device, clinicalized: facts only, pausable, motion-safe). */
export function StatementBands() {
  return (
    <>
      <section className="relative bg-brown text-cream text-center px-6 pt-[92px] pb-20 overflow-hidden">
        <span
          aria-hidden="true"
          className="curve-pop absolute -top-px left-[-6%] w-[112%] h-14 bg-warm-white origin-top"
          style={{ borderRadius: "0 0 60% 60% / 0 0 100% 100%" }}
        />
        <div className="band-lift">
          <p className="caps !text-rose mb-3.5">Why Telehealth</p>
          <p
            className="font-display font-[440] text-warm-white max-w-[26ch] mx-auto leading-[1.16]"
            style={{ fontSize: "clamp(27px, 1.3rem + 2.2vw, 46px)", letterSpacing: "-0.005em" }}
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
