import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

/**
 * Placeholders keep the build green before the one-time GitHub App setup
 * (docs/website-studio/blog-editor-setup.md). Until the real values are set
 * in the Amplify console, /keystatic shows a login that cannot complete —
 * which is the intended pre-setup state.
 */
export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "pending-github-app-setup",
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "pending-github-app-setup",
  secret: process.env.KEYSTATIC_SECRET ?? "0".repeat(64),
});
