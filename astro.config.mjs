// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const basePath = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': './src/assets',
      },
    }
  },
  site: "https://DesaLabo.github.io",
  base: basePath
});
