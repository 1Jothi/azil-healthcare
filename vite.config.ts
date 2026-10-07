import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticDeployment = isGitHubPages || process.env.STATIC_DEPLOYMENT === "true";

export default defineConfig({
  base: isGitHubPages ? "/azil-healthcare/" : "/",
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      prerender: isStaticDeployment
        ? {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
          }
        : undefined,
    }),
    react(),
    nitro({ preset: isStaticDeployment ? "node_server" : "cloudflare-module" }),
  ],
  resolve: { tsconfigPaths: true },
});
