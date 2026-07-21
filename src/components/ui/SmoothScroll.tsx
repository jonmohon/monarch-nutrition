"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial smooth scrolling — the foundation of the "alive" feel.
 * Fine-pointer, motion-safe only; touch devices keep native scroll.
 */
export function SmoothScroll() {
  useEffect(() => {
    const ok = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!ok) return;
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
