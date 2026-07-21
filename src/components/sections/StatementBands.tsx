/** Curved brown statement band + orange spaced-caps band (Tasty rhythm). */
export function StatementBands() {
  return (
    <>
      <section className="relative bg-brown text-cream text-center px-6 pt-[74px] pb-16 overflow-hidden">
        <span
          aria-hidden="true"
          className="curve-pop absolute -top-px left-[-6%] w-[112%] h-14 bg-warm-white origin-top"
          style={{ borderRadius: "0 0 60% 60% / 0 0 100% 100%" }}
        />
        <div className="band-lift">
          <p className="caps !text-rose mb-3.5">Why Telehealth</p>
          <p
            className="font-display font-[440] text-warm-white max-w-[30ch] mx-auto leading-snug"
            style={{ fontSize: "clamp(24px, 1.3rem + 1.6vw, 36px)" }}
          >
            Real nutrition care,
            <br />
            <em>without the waiting room.</em>
          </p>
        </div>
      </section>
      <div
        className="band-orange-settle bg-orange text-brown text-center px-6 py-5 font-display font-[560] uppercase"
        style={{ fontSize: "clamp(13px, 0.8rem + 0.6vw, 18px)" }}
      >
        Expert nutrition care · In network and online · Referrals welcome
      </div>
    </>
  );
}
