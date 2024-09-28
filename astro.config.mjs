// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
  integrations: [react(), db()],
    experimental: {
        serverIslands: true,
    }
});