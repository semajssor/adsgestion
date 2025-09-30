// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://semajssor.github.io/adsgestion/",
  base: "/adsgestion/",
  integrations: [react()]
});