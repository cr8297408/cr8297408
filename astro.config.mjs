// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  
  // Configuración para GitHub Pages
  base: '/cr8297408',
  build: {
    assets: '_astro'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});