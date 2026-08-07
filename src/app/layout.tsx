import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TabFavicon } from "@/components/ui/TabFavicon";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ChromeGate } from "@/components/layout/ChromeGate";
import { SITE } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.clinician}, ${SITE.credential}`,
    template: `%s · ${SITE.name}`,
  },
  description: `Virtual nutrition counseling from ${SITE.clinician}, ${SITE.credentialLong} — licensed in Missouri and New Jersey, with in-network insurance billing.`,
};

/**
 * GA4 — traffic measurement only (HIPAA-conscious posture: no ad pixels, no
 * session replay, no PII). Loaded as a raw inline snippet rather than via
 * next/script or @next/third-parties: a next/script-based install has failed
 * Google's tag-verification detection on this stack before.
 *
 * Unset id (dev, previews) renders nothing at all — no broken ?id=undefined tag.
 * GA4 tracks App Router client-side navigations on its own via History API, so
 * no manual route-change listener is needed here; it does require "Page changes
 * based on browser history events" to stay enabled in the GA4 Admin panel.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
      // The inline script below adds a `js` class to <html> before React
      // hydrates, so the server HTML and the live DOM differ here on purpose.
      // Scoped to this element only — it does not mask mismatches in children.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Progressive-enhancement gate: reveal-hiding only applies with JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <ChromeGate
          header={<Header />}
          footer={<Footer />}
          effects={
            <>
              <div className="grain-layer" aria-hidden="true" />
              <div className="progress-rail" aria-hidden="true" />
              <TabFavicon />
              <SmoothScroll />
            </>
          }
        >
          {children}
        </ChromeGate>
      </body>
      {/* Sibling of <body>, per the documented Application Scripts pattern —
          a manual <head> in a root layout is explicitly unsupported. */}
      {GA_ID ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
            }}
          />
        </>
      ) : null}
    </html>
  );
}
