// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User/organization page — served from the domain root, so no `base` needed.
  site: 'https://uchakin.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
