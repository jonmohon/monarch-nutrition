"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Site chrome (header/footer/effects) everywhere except the /keystatic
 * admin, which renders full-screen without Lenis, grain, or navigation.
 */
export function ChromeGate({
  header,
  footer,
  effects,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  effects: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith("/keystatic")) {
    return <>{children}</>;
  }
  return (
    <>
      {effects}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="curtain-content bg-cream flex-1 flex flex-col">
        {header}
        <main id="main" className="flex-1">
          {children}
        </main>
      </div>
      {footer}
    </>
  );
}
