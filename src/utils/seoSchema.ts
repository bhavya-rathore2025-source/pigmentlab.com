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

export const SUITE_FEATURE_LISTS: Record<SupportedLanguage, string[]> = {
  de: [
    'Subtraktive Kubelka-Munk Farb- und Pigmentoptik (RYB)',
    'Johannes Itten 12-teiliger Bauhaus Künstler-Farbkreis',
    'Moderne Web-Farbarchitektur mit W3C CSS color-mix() und OKLCH',
    'Echtzeit-Validierung von WCAG 2.1 Kontrastverhältnissen (AA/AAA)',
    'Simulation von 4 Formen der Farbenblindheit (CVD)',
    'Export in HEX, RGB, HSL, CMYK, OKLCH und Tailwind CSS v4',
  ],
  en: [
    'Kubelka-Munk subtractive pigment and paint optics (RYB)',
    'Classical 12-hue Johannes Itten Bauhaus artist color wheel',
    'Modern web color architecture with W3C CSS color-mix() and OKLCH',
    'Real-time WCAG 2.1 AA/AAA contrast validation',
    'Color Vision Deficiency (CVD) simulation for 4 impairment types',
    'Production export for HEX, RGB, HSL, CMYK, OKLCH, and Tailwind CSS v4',
  ],
  fr: [
    'Optique soustractive des pigments Kubelka-Munk (RYB)',
    'Cercle chromatique classique à 12 teintes de Johannes Itten (Bauhaus)',
    'Architecture couleur Web moderne avec W3C CSS color-mix() et OKLCH',
    'Validation du contraste WCAG 2.1 AA/AAA en temps réel',
    'Simulation de 4 types de daltonisme (CVD)',
    'Export en HEX, RGB, HSL, CMYK, OKLCH et Tailwind CSS v4',
  ],
  pt: [
    'Óptica subtrativa de pigmentos Kubelka-Munk (RYB)',
    'Círculo cromático clássico de 12 matizes de Johannes Itten (Bauhaus)',
    'Arquitetura moderna de cores Web com W3C CSS color-mix() e OKLCH',
    'Validação de contraste WCAG 2.1 AA/AAA em tempo real',
    'Simulação de 4 tipos de daltonismo (CVD)',
    'Exportação em HEX, RGB, HSL, CMYK, OKLCH e Tailwind CSS v4',
  ],
  es: [
    'Óptica sustractiva de pigmentos Kubelka-Munk (RYB)',
    'Círculo cromático clásico de 12 tonos de Johannes Itten (Bauhaus)',
    'Arquitectura moderna de color Web con W3C CSS color-mix() y OKLCH',
    'Validación de contraste WCAG 2.1 AA/AAA en tiempo real',
    'Simulación de 4 tipos de daltonismo (CVD)',
    'Exportación a HEX, RGB, HSL, CMYK, OKLCH y Tailwind CSS v4',
  ],
  ru: [
    'Субтрактивная оптика пигментов Кубелки-Мунка (RYB)',
    'Классический 12-частный цветовой круг Иоганнеса Иттена (Баухаус)',
    'Современная веб-архитектура цвета с W3C CSS color-mix() и OKLCH',
    'Проверка коэффициентов контрастности WCAG 2.1 AA/AAA в реальном времени',
    'Симуляция 4 типов нарушения цветового зрения (дальтонизм)',
    'Экспорт в HEX, RGB, HSL, CMYK, OKLCH и Tailwind CSS v4',
  ],
};

export function buildHomePageSchemas(params: {
  lang: SupportedLanguage;
  siteUrl: string;
  homeUrl: string;
  mixUrl: string;
  wheelUrl: string;
  title: string;
  description: string;
  currency?: string;
}): Array<Record<string, any>> {
  const { lang, siteUrl, homeUrl, mixUrl, wheelUrl, description, currency = 'EUR' } = params;

  const itemListsCopy: Record<
    SupportedLanguage,
    {
      listName: string;
      listDesc: string;
      mixName: string;
      mixDesc: string;
      wheelName: string;
      wheelDesc: string;
    }
  > = {
    de: {
      listName: 'PigmentLab Interaktive Farbwerkzeuge & Farbwissenschaft Suite',
      listDesc:
        'Kostenlose physikalische Werkzeuge für Farbmischung nach Kubelka-Munk und Farbharmonien nach Johannes Itten.',
      mixName: 'Farben Mischen Simulator (Pigment Mixer)',
      mixDesc:
        'Interaktiver Farbmischer mit echter physikalischer Pigmentoptik, bis zu 6 Farb-Slots und CSS color-mix() Export.',
      wheelName: 'Farbkreis nach Johannes Itten (Bauhaus Farbrad)',
      wheelDesc:
        '12-teiliges Künstler-Farbrad mit Komplementärfarben, 6 Harmonie-Modi und WCAG 2.1 Kontrastprüfung.',
    },
    en: {
      listName: 'PigmentLab Interactive Color Science & Theory Suite',
      listDesc:
        'Free physics-based tools for Kubelka-Munk pigment blending and Johannes Itten Bauhaus color harmonies.',
      mixName: 'Subtractive Paint Mixer Studio',
      mixDesc:
        'Interactive color mixer with authentic subtractive pigment optics, up to 6 mixing slots, and CSS color-mix() export.',
      wheelName: 'Johannes Itten Bauhaus Color Wheel Studio',
      wheelDesc:
        'Classical 12-hue artist color wheel with complementary palettes, 6 harmony modes, and WCAG 2.1 contrast matrix.',
    },
    fr: {
      listName: 'Suite d\'Outils Chromatiques Interactifs PigmentLab',
      listDesc:
        'Outils physiques gratuits pour le mélange de pigments Kubelka-Munk et les harmonies de couleurs Bauhaus de Johannes Itten.',
      mixName: 'Studio de Mélange de Pigments',
      mixDesc:
        'Mélangeur de couleurs interactif avec optique soustractive réelle, jusqu’à 6 nuances et export CSS color-mix().',
      wheelName: 'Cercle Chromatique Johannes Itten (Bauhaus)',
      wheelDesc:
        'Roue artistique classique à 12 teintes avec palettes complémentaires, 6 modes d\'harmonie et validation WCAG 2.1.',
    },
    pt: {
      listName: 'Suíte de Ferramentas Interativas de Cores PigmentLab',
      listDesc:
        'Ferramentas físicas gratuitas para mistura de pigmentos Kubelka-Munk e harmonias de cores Bauhaus de Johannes Itten.',
      mixName: 'Estúdio de Mistura de Pigmentos',
      mixDesc:
        'Misturador de cores interativo com física subtrativa real, até 6 slots e exportação CSS color-mix().',
      wheelName: 'Círculo Cromático Johannes Itten (Bauhaus)',
      wheelDesc:
        'Círculo artístico clássico de 12 matizes com paletas complementares, 6 modos de harmonia e matriz WCAG 2.1.',
    },
    es: {
      listName: 'Suite de Herramientas Interactivas de Color PigmentLab',
      listDesc:
        'Herramientas físicas gratuitas para mezcla de pigmentos Kubelka-Munk y armonías de color Bauhaus de Johannes Itten.',
      mixName: 'Estudio de Mezcla de Pigmentos',
      mixDesc:
        'Mezclador de color interactivo con óptica física sustractiva, hasta 6 ranuras y exportación CSS color-mix().',
      wheelName: 'Círculo Cromático Johannes Itten (Bauhaus)',
      wheelDesc:
        'Círculo artístico clásico de 12 tonos con paletas complementarias, 6 modos de armonía y validación WCAG 2.1.',
    },
    ru: {
      listName: 'Интерактивный комплекс инструментов колористики PigmentLab',
      listDesc:
        'Бесплатные физические инструменты для смешивания пигментов Кубелки-Мунка и цветовых гармоний Баухауса Иоганнеса Иттена.',
      mixName: 'Студия смешивания пигментов',
      mixDesc:
        'Интерактивный симулятор смешивания красок с реальной субтрактивной физикой и генератором CSS color-mix().',
      wheelName: 'Цветовой круг Иоганнеса Иттена (Баухаус)',
      wheelDesc:
        'Классический 12-частный круг с комплементарными палитрами, 6 схемами гармонии и проверкой WCAG 2.1.',
    },
  };

  const c = itemListsCopy[lang] || itemListsCopy.en;

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PigmentLab',
    url: homeUrl,
    description,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: 'PigmentLab',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/mix?color={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PigmentLab',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description,
    knowsAbout: [
      'Subtractive Color Mixing',
      'Kubelka-Munk Theory',
      'Johannes Itten Bauhaus Color Theory',
      'OKLCH Perceptual Color Space',
      'WCAG 2.1 Accessibility',
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.listName,
    description: c.listDesc,
    numberOfItems: 2,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: c.mixName,
        description: c.mixDesc,
        url: mixUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: c.wheelName,
        description: c.wheelDesc,
        url: wheelUrl,
      },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': ['WebApplication', 'SoftwareApplication'],
    name: 'PigmentLab',
    url: homeUrl,
    description,
    inLanguage: lang,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any (Web Browser)',
    browserRequirements: 'Requires JavaScript. Requires HTML5 Canvas.',
    featureList: SUITE_FEATURE_LISTS[lang] || SUITE_FEATURE_LISTS.en,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currency,
    },
  };

  return [webSiteSchema, organizationSchema, itemListSchema, softwareAppSchema];
}

