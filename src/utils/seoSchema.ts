import { ui, defaultLang, showDefaultLang, type SupportedLanguage } from '../i18n/ui';
import { getCleanPathname } from '../i18n/utils';

export const KUBELKA_MUNK_CITATIONS = [
  'https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf',
  'https://en.wikipedia.org/wiki/Kubelka%E2%80%93Munk_theory',
] as const;

export const ITTEN_BAUHAUS_CITATIONS = [
  'https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/form_color/color/',
  'https://en.wikipedia.org/wiki/Johannes_Itten',
] as const;

export const WEB_STANDARDS_CITATIONS = [
  'https://www.w3.org/TR/css-color-4/',
  'https://www.w3.org/TR/WCAG21/',
] as const;

const MIX_FEATURE_LISTS: Record<SupportedLanguage, string[]> = {
  de: [
    'Kubelka-Munk subtraktive Pigmentphysik (RYB)',
    'Modernes Web-Mischen im OKLCH-Farbraum & CSS color-mix()',
    'CMYK-Drucksimulation und additives RGB-Mischen',
    'Bis zu 6 Farb-Slots mit 1%-100% Mischverhältnis-Reglern',
    'WCAG 2.1 AA/AAA Kontrastprüfung in Echtzeit',
    'HEX, RGB, HSL, CMYK und OKLCH Code-Export',
  ],
  en: [
    'Kubelka-Munk subtractive pigment physics (RYB)',
    'Modern Web OKLCH perceptual mixing & CSS color-mix() export',
    'CMYK ink and linear RGB screen blend modes',
    'Up to 6 color slots with 1%-100% ratio sliders',
    'Real-time WCAG 2.1 AA/AAA contrast validation',
    'HEX, RGB, HSL, CMYK, and OKLCH code export',
  ],
  fr: [
    'Physique soustractive des pigments Kubelka-Munk (RYB)',
    'Mélange perceptuel Web OKLCH et export CSS color-mix()',
    'Simulation d’impression CMYK et mélange RVB',
    'Jusqu’à 6 emplacements de couleur avec curseurs 1%-100%',
    'Vérification du contraste WCAG 2.1 AA/AAA en temps réel',
    'Export HEX, RGB, HSL, CMYK et OKLCH',
  ],
  pt: [
    'Física subtrativa de pigmentos Kubelka-Munk (RYB)',
    'Mistura perceptual Web OKLCH e exportação CSS color-mix()',
    'Simulação de impressão CMYK e mistura linear RGB',
    'Até 6 slots de cores com controles de proporção 1%-100%',
    'Validação de contraste WCAG 2.1 AA/AAA em tempo real',
    'Exportação em HEX, RGB, HSL, CMYK e OKLCH',
  ],
  es: [
    'Física sustractiva de pigmentos Kubelka-Munk (RYB)',
    'Mezcla perceptual Web OKLCH y exportación CSS color-mix()',
    'Simulación de impresión CMYK y mezcla lineal RGB',
    'Hasta 6 ranuras de color con controles de proporción 1%-100%',
    'Validación de contraste WCAG 2.1 AA/AAA en tiempo real',
    'Exportación en HEX, RGB, HSL, CMYK y OKLCH',
  ],
  ru: [
    'Субтрактивная физика пигментов Кубелки-Мунка (RYB)',
    'Перцептивное смешивание OKLCH и генератор CSS color-mix()',
    'Режимы печати CMYK и экранного RGB',
    'До 6 цветовых слотов с ползунками пропорций 1%-100%',
    'Проверка контрастности WCAG 2.1 AA/AAA в реальном времени',
    'Экспорт HEX, RGB, HSL, CMYK и OKLCH',
  ],
};

const WHEEL_FEATURE_LISTS: Record<SupportedLanguage, string[]> = {
  de: [
    'Klassischer 12-teiliger Johannes Itten Farbkreis (Bauhaus RYB)',
    '1-Klick-Wechsel zwischen Itten RYB und digitalem RGB-Farbrad',
    '6 Harmonie-Modi: Komplementär, Analog, Triadisch, Tetradisch, Split, Monochrom',
    '9-Stufen Tönungs- und Schattierungsskala (50-900)',
    'Farbenblindheit-Simulator (Protanopie, Deuteranopie, Tritanopie, Monochrom)',
    'WCAG 2.1 Kontrast-Matrix sowie Tailwind CSS v4, CSS-Variablen & SVG-Export',
  ],
  en: [
    'Classical 12-hue Johannes Itten Bauhaus artist wheel (RYB)',
    '1-click toggle between Itten RYB and digital RGB screen wheel',
    '6 harmony rules: Complementary, Analogous, Triadic, Tetradic, Split, Monochromatic',
    '9-step tint and shade scale (50-900)',
    'Color Vision Deficiency simulator (Protanopia, Deuteranopia, Tritanopia, Monochrome)',
    'WCAG 2.1 contrast matrix plus Tailwind CSS v4, CSS variables & SVG export',
  ],
  fr: [
    'Cercle chromatique classique à 12 teintes de Johannes Itten (RYB)',
    'Bascule en 1 clic entre le modèle artiste Itten RYB et le cercle RGB',
    '6 règles d’harmonie : Complémentaire, Analogue, Triadique, Tétradique, Split, Monochromatique',
    'Échelle de nuances et d’ombres à 9 niveaux (50-900)',
    'Simulateur de daltonisme (Protanopie, Deutéranopie, Tritanopie, Achromatopsie)',
    'Matrice de contraste WCAG 2.1 et export Tailwind CSS v4, variables CSS & SVG',
  ],
  pt: [
    'Círculo cromático clássico de 12 matizes de Johannes Itten (RYB)',
    'Alternância em 1 clique entre o modelo artístico Itten RYB e tela RGB',
    '6 regras de harmonia: Complementar, Análoga, Triádica, Tetrádica, Dividida, Monocromática',
    'Escala de 9 níveis de tons e sombras (50-900)',
    'Simulador de daltonismo (Protanopia, Deuteranopia, Tritanopia, Acromatopsia)',
    'Matriz de contraste WCAG 2.1 e exportação Tailwind CSS v4, variáveis CSS & SVG',
  ],
  es: [
    'Círculo cromático clásico de 12 tonos de Johannes Itten (RYB)',
    'Cambio en 1 clic entre el modelo artístico Itten RYB y pantalla RGB',
    '6 reglas de armonía: Complementaria, Análoga, Triádica, Tetrádica, Dividida, Monocromática',
    'Escala de 9 pasos de tintes y sombras (50-900)',
    'Simulador de daltonismo (Protanopía, Deuteranopía, Tritanopía, Acromatopsia)',
    'Matriz de contraste WCAG 2.1 y exportación Tailwind CSS v4, variables CSS y SVG',
  ],
  ru: [
    'Классический 12-частный цветовой круг Иоганнеса Иттена (Баухаус RYB)',
    'Переключение в 1 клик между кругом Иттена RYB и экранным RGB',
    '6 схем гармонии: комплементарная, аналоговая, триада, тетрада, сплит, монохромная',
    '9-ступенчатая шкала оттенков и теней (50-900)',
    'Симулятор дальтонизма (протанопия, дейтеранопия, тританопия, ахроматопсия)',
    'Матрица контрастности WCAG 2.1 и экспорт в Tailwind CSS v4, CSS-переменные и SVG',
  ],
};

const ROUTE_BREADCRUMB_KEYS: Record<string, keyof (typeof ui)[typeof defaultLang]> = {
  '/mix': 'nav.mixer',
  '/color-wheel': 'nav.wheel',
  '/about': 'nav.about',
  '/contact': 'nav.contact',
  '/privacy': 'nav.privacy',
  '/terms': 'nav.terms',
};

export function buildBreadcrumbSchema(params: {
  activePathname: string;
  lang: SupportedLanguage;
  siteUrl: string;
  resolvedCanonical: string;
}): Record<string, any> {
  const { activePathname, lang, siteUrl, resolvedCanonical } = params;
  const clean = getCleanPathname(activePathname);
  const homeUrl = !showDefaultLang && lang === defaultLang ? `${siteUrl}/` : `${siteUrl}/${lang}`;

  const items: Array<Record<string, any>> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'PigmentLab',
      item: homeUrl,
    },
  ];

  if (clean !== '/') {
    const labelKey = ROUTE_BREADCRUMB_KEYS[clean];
    const pageName = labelKey
      ? ui[lang]?.[labelKey] || ui[defaultLang][labelKey]
      : clean.replace(/^\//, '');

    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: resolvedCanonical,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildMixPageSchemas(params: {
  lang: SupportedLanguage;
  url: string;
  appName: string;
  appDescription: string;
  articleHeadline: string;
  articleDescription: string;
  currency: string;
  faqSchema: Record<string, any>;
}): Array<Record<string, any>> {
  const {
    lang,
    url,
    appName,
    appDescription,
    articleHeadline,
    articleDescription,
    currency,
    faqSchema,
  } = params;

  return [
    {
      '@context': 'https://schema.org',
      '@type': ['WebApplication', 'SoftwareApplication'],
      name: appName,
      url,
      description: appDescription,
      inLanguage: lang,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any (Web Browser)',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      featureList: MIX_FEATURE_LISTS[lang] || MIX_FEATURE_LISTS.en,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: currency,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleHeadline,
      description: articleDescription,
      inLanguage: lang,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      datePublished: '2026-11-06',
      dateModified: '2026-11-11',
      author: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pigmentlaboratory.com/favicon.svg',
        },
      },
      citation: [...KUBELKA_MUNK_CITATIONS, ...WEB_STANDARDS_CITATIONS],
    },
    faqSchema,
  ];
}

export function buildWheelPageSchemas(params: {
  lang: SupportedLanguage;
  url: string;
  appName: string;
  appDescription: string;
  articleHeadline: string;
  articleDescription: string;
  currency: string;
  faqSchema: Record<string, any>;
}): Array<Record<string, any>> {
  const {
    lang,
    url,
    appName,
    appDescription,
    articleHeadline,
    articleDescription,
    currency,
    faqSchema,
  } = params;

  return [
    {
      '@context': 'https://schema.org',
      '@type': ['WebApplication', 'SoftwareApplication'],
      name: appName,
      url,
      description: appDescription,
      inLanguage: lang,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any (Web Browser)',
      browserRequirements: 'Requires JavaScript. Requires HTML5 Canvas.',
      featureList: WHEEL_FEATURE_LISTS[lang] || WHEEL_FEATURE_LISTS.en,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: currency,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleHeadline,
      description: articleDescription,
      inLanguage: lang,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      datePublished: '2026-11-06',
      dateModified: '2026-11-11',
      author: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pigmentlaboratory.com/favicon.svg',
        },
      },
      citation: [...ITTEN_BAUHAUS_CITATIONS, ...WEB_STANDARDS_CITATIONS],
    },
    faqSchema,
  ];
}

export function buildAboutPageSchemas(params: {
  lang: SupportedLanguage;
  url: string;
  pageName: string;
  pageDescription: string;
  orgDescription: string;
  articleHeadline: string;
  articleDescription: string;
}): Array<Record<string, any>> {
  const {
    lang,
    url,
    pageName,
    pageDescription,
    orgDescription,
    articleHeadline,
    articleDescription,
  } = params;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: pageName,
      url,
      description: pageDescription,
      inLanguage: lang,
      mainEntity: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
        logo: 'https://pigmentlaboratory.com/favicon.svg',
        description: orgDescription,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleHeadline,
      description: articleDescription,
      inLanguage: lang,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      datePublished: '2026-11-06',
      dateModified: '2026-11-11',
      author: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PigmentLab',
        url: 'https://pigmentlaboratory.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pigmentlaboratory.com/favicon.svg',
        },
      },
      citation: [
        ...KUBELKA_MUNK_CITATIONS,
        ...ITTEN_BAUHAUS_CITATIONS,
        ...WEB_STANDARDS_CITATIONS,
      ],
    },
  ];
}

