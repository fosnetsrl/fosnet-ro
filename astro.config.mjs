// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // site: "https://fosnet.ro",
  site: "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
    icon(),
  ],
});