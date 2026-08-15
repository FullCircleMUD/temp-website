// @ts-check
import { defineConfig } from "astro/config";

// Static output — deploys to Cloudflare Pages with no adapter.
// Build command: `npm run build`, output directory: `dist`.
export default defineConfig({
  site: "https://fcmud.world",
  output: "static",
});
