import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
        "#/": `${path.resolve(__dirname)}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "#/styles/vars.scss";`,
        },
      },
    },
  },
});
