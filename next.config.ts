import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Load-bearing SEO config (house rule): trailing-slash canonicals must stay
  // consistent across sitemap + metadata. Removing this caused a Google
  // canonical loop + de-indexing on sub-zero (commit b0643a4). Do not remove.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
  async headers() {
    // CSP only in production: React dev mode needs eval() for debugging.
    if (process.env.NODE_ENV === "development") return [];
    return [
      {
        // HIPAA-conscious hard rule (handoff p.4): no ad pixels, no session
        // replay. CSP makes any future pixel paste fail loudly. GA4 only.
        source: "/:path*",
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
