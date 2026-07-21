/**
 * Line-drawn monarch mark — stands in for Katie's Canva logo until supplied.
 * draw="load"  → inks itself once on mount (header; do not loop or enlarge).
 * draw="view"  → inks itself when an ancestor .reveal gains .is-inview.
 */
export function ButterflyMark({
  size = 27,
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
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`${drawClass} ${className ?? ""}`.trim() || undefined}
    >
      <line x1="16" y1="4" x2="16" y2="28" stroke={color} strokeWidth={strokeWidth} pathLength={1} />
      <path
        d="M16 12.5 C10.5 3, 3 5, 4.3 11.5 C5.2 16, 11 17, 16 14.8"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        pathLength={1}
      />
      <path
        d="M16 12.5 C21.5 3, 29 5, 27.7 11.5 C26.8 16, 21 17, 16 14.8"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        pathLength={1}
      />
      <path
        d="M16 17.5 C12.5 15.8, 7.5 17.6, 8.4 21.6 C9.2 25.2, 14 24.8, 16 21.6"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        pathLength={1}
      />
      <path
        d="M16 17.5 C19.5 15.8, 24.5 17.6, 23.6 21.6 C22.8 25.2, 18 24.8, 16 21.6"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        pathLength={1}
      />
    </svg>
  );
}
