// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://foșnet.ro",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
    icon(),
  ],
});
