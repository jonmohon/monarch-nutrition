/**
 * Realistic monarch mark — the logo butterfly.
 *
 * Drawn rather than illustrated so it stays crisp from 22px (favicon) to
 * 520px (footer watermark) with no raster asset. Construction:
 *
 *   1. Each wing is ONE closed path, filled orange and stroked dark. Because
 *      SVG centres a stroke on its path, that single stroke produces the
 *      monarch's uniform dark margin — no second inset shape to keep in sync.
 *   2. The white marginal spots are the same path again, stroked white with
 *      `stroke-dasharray` + round caps, so each dash renders as a dot sitting
 *      exactly on the margin. `pathLength=100` normalises the spacing, which
 *      means the dots stay evenly distributed if a wing outline is ever
 *      retuned. Do not hand-place these as circles.
 *   3. Veins draw over the orange; the body draws last, covering where the
 *      four wing paths close against the thorax.
 *
 * Left-side geometry only — the right side is the same paths mirrored, so the
 * mark is guaranteed symmetric.
 *
 * MonarchOutline (below) strokes the same geometry for the decorative
 * watermarks, so the ornaments and the identity mark are one butterfly.
 */

/* Apex at (16,6) is a corner, not a smooth join: the costa arrives almost
   horizontally and the termen leaves steeply down-left. That angle is what
   makes it read as a monarch forewing rather than a moth's oval. */
const FOREWING =
  "M 57 30 C 47 19, 31 7, 16 6 C 9 11, 6 22, 11 32 C 18 44, 40 52, 57 49 Z";
const HINDWING =
  "M 57 52 C 45 52, 30 56, 24 65 C 17 75, 26 88, 38 84 C 49 80, 56 68, 57 55 Z";

const FOREWING_VEINS = [
  "M 55 34 C 46 29, 32 17, 18 9",
  "M 55 38 C 45 36, 30 28, 16 20",
  "M 55 42 C 45 42, 29 36, 14 29",
  "M 55 46 C 45 47, 31 44, 15 37",
];
const HINDWING_VEINS = [
  "M 56 56 C 47 57, 35 61, 27 68",
  "M 56 61 C 48 63, 39 69, 33 77",
  "M 56 66 C 51 69, 45 75, 41 82",
];

/* Abdomen stops at y=76, inside the hindwings (which reach y=84). Running it
   past them turns the mark into a spike-tailed moth. */
const BODY =
  "M 60 22 C 63 22, 64.5 26, 64.5 32 C 64.5 41, 63.6 50, 62.6 58 C 62 66, 61.2 72, 60 76 C 58.8 72, 58 66, 57.4 58 C 56.4 50, 55.5 41, 55.5 32 C 55.5 26, 57 22, 60 22 Z";
const ANTENNA_L = "M 58.6 19 C 56 13, 52 9, 48.5 6.5";
const ANTENNA_R = "M 61.4 19 C 64 13, 68 9, 71.5 6.5";

export const MONARCH_VIEWBOX = "0 0 120 96";

/** Default livery. Ink is brown-deep rather than black — softer, on-brand. */
export const MONARCH_COLORS = {
  wing: "#e8822a",
  ink: "#2e1f18",
  spot: "#fffdf9",
} as const;

/**
 * Markup shared by the React component and the favicon data URIs, so the two
 * can never drift. Returns an SVG fragment string (no <svg> wrapper).
 */
export function monarchBody({
  wing = MONARCH_COLORS.wing,
  ink = MONARCH_COLORS.ink,
  spot = MONARCH_COLORS.spot,
  /** Render one side only — reads as a butterfly at rest, wings folded. */
  folded = false,
  /**
   * Small-size variant, for favicons and anything under ~24px.
   *
   * At 16px the full mark's four veins per wing and sixteen marginal dots fall
   * below one device pixel each and average into muddy texture. This drops to
   * two veins and thickens the margin — the same butterfly, drawn for a target
   * where detail costs legibility instead of adding it.
   *
   * The white marginal spots come off entirely: at icon scale they stop
   * reading as markings and turn into a pale speckled halo around the wings.
   */
  simple = false,
}: {
  wing?: string;
  ink?: string;
  spot?: string;
  folded?: boolean;
  simple?: boolean;
} = {}) {
  const veins = simple
    ? [FOREWING_VEINS[1], HINDWING_VEINS[1]]
    : [...FOREWING_VEINS, ...HINDWING_VEINS];

  const side = `
    <path d="${FOREWING}" fill="${wing}" stroke="${ink}" stroke-width="${simple ? 6 : 4}" stroke-linejoin="round"/>
    <path d="${HINDWING}" fill="${wing}" stroke="${ink}" stroke-width="${simple ? 6 : 4}" stroke-linejoin="round"/>
    <g fill="none" stroke="${ink}" stroke-width="${simple ? 3 : 1.9}" stroke-linecap="round">
      ${veins.map((d) => `<path d="${d}"/>`).join("")}
    </g>
    ${
      simple
        ? ""
        : `<g fill="none" stroke="${spot}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0.5 7">
      <path d="${FOREWING}" pathLength="100"/>
      <path d="${HINDWING}" pathLength="100"/>
    </g>`
    }`;

  return `
    <g transform="translate(120,0) scale(-1,1)">${side}</g>
    ${folded ? "" : side}
    <g fill="none" stroke="${ink}" stroke-width="${simple ? 3.4 : 2.2}" stroke-linecap="round">
      <path d="${ANTENNA_L}"/>
      <path d="${ANTENNA_R}"/>
    </g>
    <circle cx="48.5" cy="6.5" r="${simple ? 2.8 : 2}" fill="${ink}"/>
    <circle cx="71.5" cy="6.5" r="${simple ? 2.8 : 2}" fill="${ink}"/>
    <path d="${BODY}" fill="${ink}"/>
    <circle cx="60" cy="21" r="${simple ? 4.2 : 3.6}" fill="${ink}"/>`;
}

/**
 * Standalone icon document — the favicon/apple-icon/icon.svg source of truth.
 *
 * bg defaults to null (transparent) so the mark sits directly on whatever the
 * browser chrome is, light or dark. The ONE exception is the Apple touch icon:
 * iOS composites a transparent icon onto black, so that file is generated with
 * an explicit cream background. Pass bg only for that case.
 */
export function monarchIconSvg({
  simple = true,
  folded = false,
  bg = null,
  radius = 26,
}: { simple?: boolean; folded?: boolean; bg?: string | null; radius?: number } = {}) {
  // Ink stays dark on every browser theme. An earlier pass flipped it to cream
  // on dark chrome so the silhouette held — but that reads as a white halo
  // around the mark, which is worse than the outline simply receding.
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">` +
    (bg ? `<rect width="120" height="120" rx="${radius}" fill="${bg}"/>` : "") +
    // Wings fill more of the canvas than in the inline mark: an icon is judged
    // as a silhouette in a 16px box, so padding is wasted area.
    `<g transform="translate(60,63) scale(1.1) translate(-60,-48)">` +
    monarchBody({ simple, folded }) +
    `</g></svg>`
  );
}

export function MonarchMark({
  size = 30,
  wing,
  ink,
  spot,
  className,
}: {
  size?: number;
  wing?: string;
  ink?: string;
  spot?: string;
  className?: string;
}) {
  return (
    <svg
      width={(size * 120) / 96}
      height={size}
      viewBox={MONARCH_VIEWBOX}
      fill="none"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: monarchBody({ wing, ink, spot }) }}
    />
  );
}

/**
 * Outline-only monarch — the same silhouette as the logo, drawn as strokes so
 * the ornamental marks and the identity mark are one shape rather than two
 * different butterflies on one page.
 *
 * draw="load"  → inks itself once on mount (do not loop or enlarge).
 * draw="view"  → inks itself when an ancestor .reveal gains .is-inview.
 *
 * pathLength=1 is what makes the stroke-dashoffset animation in globals.css
 * work regardless of each path's real length.
 */
export function MonarchOutline({
  size = 32,
  color = "var(--color-brown)",
  strokeWidth = 1.4,
  className,
  draw,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  draw?: "load" | "view";
}) {
  const drawClass = draw === "load" ? "bfly-draw draw-now" : draw === "view" ? "bfly-draw" : "";
  const strokes = [
    FOREWING,
    HINDWING,
    ...FOREWING_VEINS,
    ...HINDWING_VEINS,
  ];
  const side = strokes
    .map((d) => `<path d="${d}" pathLength="1"/>`)
    .join("");

  return (
    <svg
      width={(size * 120) / 96}
      height={size}
      viewBox={MONARCH_VIEWBOX}
      fill="none"
      aria-hidden="true"
      className={`${drawClass} ${className ?? ""}`.trim() || undefined}
      dangerouslySetInnerHTML={{
        __html: `<g fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <g transform="translate(120,0) scale(-1,1)">${side}</g>
          ${side}
          <path d="${BODY}" pathLength="1"/>
          <path d="${ANTENNA_L}" pathLength="1"/>
          <path d="${ANTENNA_R}" pathLength="1"/>
        </g>`,
      }}
    />
  );
}
