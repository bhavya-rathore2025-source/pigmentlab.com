// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/guides/internationalization/
export default defineConfig({
  site: 'https://pigmentlaboratory.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'pt', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/500'),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
          fr: 'fr',
          pt: 'pt',
          es: 'es',
          ru: 'ru',
        },
      },
    }),
  ],
  redirects: {
    '/privacy-policy': '/privacy',
    '/about-us': '/about',
    '/terms-and-conditions': '/terms',
    '/contact-us': '/contact',
    '/sitemap.xml': '/sitemap-index.xml',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // @formspree/ajax's package.json points "browser" to its UMD/global script;
        // alias to the ESM bundle so Vite tree-shakes and imports initForm properly.
        '@formspree/ajax': '@formspree/ajax/dist/index.mjs',
      },
    },
  },
});
