import { ui, defaultLang, showDefaultLang, languages, type SupportedLanguage } from './ui';

export { languages, defaultLang, showDefaultLang };
export type { SupportedLanguage };

/**
 * Extracts supported language from URL pathname.
 * If URL has no language prefix or an unknown one, returns the default language ('de').
 */
export function getLangFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    return segments[0] as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation helper for UI strings.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const langDict = ui[lang];
    if (langDict && key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    return ui[defaultLang][key] ?? key;
  };
}

/**
 * Normalizes a URL pathname to slashless canonical form (keeping '/' for root)
 * and strips build-time '.html' or '/index.html' suffixes.
 */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  let normalized = pathname.split(/[?#]/)[0] || '/';
  if (normalized.endsWith('/index.html')) {
    normalized = normalized.slice(0, -'/index.html'.length) || '/';
  } else if (normalized.endsWith('.html')) {
    normalized = normalized.slice(0, -'.html'.length) || '/';
  }
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

/**
 * Strips the language prefix from a pathname, returning the bare canonical path.
 * e.g. '/en/mix' -> '/mix', '/fr/' -> '/', '/color-wheel.html' -> '/color-wheel'
 */
export function getCleanPathname(pathname: string): string {
  const normalized = normalizePathname(pathname);
  if (normalized === '/') return '/';
  const segments = normalized.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean === '' ? '/' : clean;
}

/**
 * Returns a function to format URLs based on target language.
 * When targetLang is the default language ('de') and showDefaultLang is false, no prefix is added.
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: string = lang): string {
    const clean = getCleanPathname(path);
    if (!showDefaultLang && targetLang === defaultLang) {
      return clean;
    }
    return clean === '/' ? `/${targetLang}` : `/${targetLang}${clean}`;
  };
}

/**
 * Generates alternate hreflang tags for all supported languages and x-default.
 */
export function getHreflangLinks(currentPath: string, siteUrl: string = 'https://pigmentlaboratory.com') {
  const clean = getCleanPathname(currentPath);
  const normalizedClean = clean === '/' ? '' : clean;

  const links = (Object.keys(languages) as SupportedLanguage[]).map((locale) => {
    let href: string;
    if (!showDefaultLang && locale === defaultLang) {
      href = `${siteUrl}${clean}`;
    } else {
      href = `${siteUrl}/${locale}${normalizedClean}`;
    }
    return {
      hreflang: locale,
      href,
    };
  });

  // x-default points to German primary language at root
  links.push({
    hreflang: 'x-default',
    href: `${siteUrl}${clean}`,
  });

  return links;
}

/**
 * Open Graph locale mapping
 */
const OG_LOCALES: Record<SupportedLanguage, string> = {
  de: 'de_DE',
  en: 'en_US',
  fr: 'fr_FR',
  pt: 'pt_BR',
  es: 'es_ES',
  ru: 'ru_RU',
};

export function getOgLocale(lang: SupportedLanguage): string {
  return OG_LOCALES[lang] || 'de_DE';
}

export function getAlternateOgLocales(lang: SupportedLanguage): string[] {
  return (Object.keys(OG_LOCALES) as SupportedLanguage[])
    .filter((code) => code !== lang)
    .map((code) => OG_LOCALES[code]);
}

