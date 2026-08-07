import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks cross-origin dev-resource requests by default, and treats
  // 127.0.0.1 as a different origin from localhost — which silently starves
  // the browser of JS chunks and renders a blank page (notably on /keystatic).
  // Dev-only; has no effect on the production build.
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    // Native page-to-page crossfade + shared-element morphs (wave 2 wow).
    // Degrades to instant navigation where unsupported.
    viewTransition: true,
    // NOTE: experimental.inlineCss was tried and reverted — it regressed
    // FCP (+0.4s) and introduced desktop CLS 0.113 on this stack.
  },
  // Load-bearing SEO config (house rule): trailing-slash canonicals must stay
  // consistent across sitemap + metadata. Removing this caused a Google
  // canonical loop + de-indexing on sub-zero (commit b0643a4). Do not remove.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 60, 70, 75],
    // Transformed variants are content-addressed by source — cache long.
    minimumCacheTTL: 31536000,
    // Shrink the variant space to the widths the layouts actually use:
    // fewer variants -> far more cache hits, cheaper warming.
    deviceSizes: [640, 828, 1200, 1600, 2048],
    imageSizes: [240, 420, 640],
  },
  async redirects() {
    return [
      // Friendly URL for Katie's editor — "the publish page".
      // Trailing slash matches trailingSlash: true — without it this 302 is
      // followed by a second 308 to /keystatic/.
      { source: "/publish", destination: "/keystatic/", permanent: false },
    ];
  },
  async headers() {
    // CSP only in production: React dev mode needs eval() for debugging.
    if (process.env.NODE_ENV === "development") return [];
    return [
      {
        // Bespoke imagery is fingerprint-stable (replaced by filename) —
        // cache immutably at the CDN and browser.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // HIPAA-conscious hard rule (handoff p.4): no ad pixels, no session
        // replay. CSP makes any future pixel paste fail loudly. GA4 only.
        source: "/((?!keystatic|api/keystatic).*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
              "img-src 'self' data: https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
