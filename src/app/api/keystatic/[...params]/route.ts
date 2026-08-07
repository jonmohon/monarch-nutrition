import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

/**
 * Placeholders keep the build green before the one-time GitHub App setup
 * (docs/website-studio/blog-editor-setup.md). Until the real values are set
 * in the Amplify console, /keystatic shows a login that cannot complete —
 * which is the intended pre-setup state.
 */
const { POST: keystaticPost, GET: keystaticGet } = makeRouteHandler({
  config: keystaticConfig,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "pending-github-app-setup",
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "pending-github-app-setup",
  secret: process.env.KEYSTATIC_SECRET ?? "0".repeat(64),
});

/**
 * Keystatic builds the OAuth redirect_uri from `new URL(request.url).origin`.
 * Behind Amplify's SSR proxy that origin is the Lambda's internal address, so
 * GitHub was being sent redirect_uri=https://127.0.0.1:3000/... and refused it
 * with "The redirect_uri is not associated with this application."
 *
 * Rewrite the request onto the real public origin before Keystatic sees it.
 * KEYSTATIC_PUBLIC_ORIGIN wins when set (deterministic — use it in Amplify and
 * update it at domain cutover); otherwise fall back to proxy headers. Local dev
 * matches neither and passes through untouched, preserving Keystatic's own
 * localhost -> 127.0.0.1 handling.
 */
function withPublicOrigin(
  handler: (request: Request) => Promise<Response>,
): (request: Request) => Promise<Response> {
  return async (request: Request) => {
    const origin = resolvePublicOrigin(request);
    if (!origin) return handler(request);
    const url = new URL(request.url);
    const publicUrl = new URL(origin);
    url.protocol = publicUrl.protocol;
    // hostname + port, not host: the WHATWG host setter leaves the existing
    // port in place when the new value omits one, which stranded a :3000.
    url.hostname = publicUrl.hostname;
    url.port = publicUrl.port;
    return handler(new Request(url.toString(), request));
  };
}

function resolvePublicOrigin(request: Request): string | null {
  const configured = process.env.KEYSTATIC_PUBLIC_ORIGIN;
  if (configured) return configured.replace(/\/$/, "");

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!host) return null;
  // Loopback means we're genuinely local — leave the request alone.
  if (/^(localhost|127\.0\.0\.1|\[::1\])(:|$)/.test(host)) return null;
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export const GET = withPublicOrigin(keystaticGet);
export const POST = withPublicOrigin(keystaticPost);
