// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://montaz.pages.dev",
  build: {
    // Inline small CSS to remove a render-blocking request (helps FCP/LCP on mobile).
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
