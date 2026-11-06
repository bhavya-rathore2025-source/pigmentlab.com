// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/guides/internationalization/
export default defineConfig({
  site: 'https://pigmentlab.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'pt', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
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
