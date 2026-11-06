// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pigmentlab.com',
  redirects: {
    '/privacy-policy': '/privacy',
    '/about-us': '/about',
    '/terms-and-conditions': '/terms',
    '/contact-us': '/contact',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
