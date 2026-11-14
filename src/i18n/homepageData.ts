import type { SupportedLanguage } from './ui';

export interface HomepageFeatureCard {
  badge: string;
  title: string;
  description: string;
}

export interface HomepageStandardItem {
  title: string;
  tag: string;
  description: string;
}

export interface HomepageData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroEyebrow: string;
  heroHeading: string;
  heroParagraph: string;
  toolMix: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    subtext: string;
  };
  toolWheel: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    subtext: string;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    subheading: string;
    rgbCard: {
      badge: string;
      title: string;
      body: string;
    };
    kmCard: {
      badge: string;
      title: string;
      body: string;
    };
  };
  features: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cards: HomepageFeatureCard[];
  };
  standards: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: HomepageStandardItem[];
  };
}

export const homepageData: Record<SupportedLanguage, HomepageData> = {
  de: {
    metaTitle: 'PigmentLab — Subtraktive Farbphysik & Johannes Itten Farblehre',
    metaDescription: 'Online-Farbplattform mit echter subtraktiver Pigmentabsorption nach Kubelka-Munk und Johannes Itten Farblehre. Kostenlose wissenschaftliche Farbwerkzeuge.',
    metaKeywords: 'pigmentlab, pigment lab, subtraktive farbphysik, farbwissenschaft suite, pigmentoptik, farblabor online, kubelka munk simulator, itten bauhaus farbtheorie, farbwerkzeuge',
    heroEyebrow: 'Optische subtraktive Farbphysik & Bauhaus Farblehre',
    heroHeading: 'Farbwissenschaft mit echten physikalischen Pigmenten',
    heroParagraph: 'Digitale Bildschirmwerkzeuge mitteln RGB-Lichtkanäle linear, wodurch Mischungen zu trübem Graubraun verblassen. PigmentLab simuliert physikalische Lichtabsorption und die klassische Bauhaus-Farblehre nach Johannes Itten — für lebendige, authentische Farbpaletten.',
    toolMix: {
      badge: 'Subtraktive Farboptik',
      title: 'Farben Mischen Simulator',
      description: 'Mischen Sie Farben mit echten Schiebereglern und physikalischer Lichtabsorption. Erleben Sie, wie Blau + Gelb ein leuchtendes Grün ergibt — mit Live-Mischtabelle und CSS color-mix() Code.',
      cta: 'Farbmischer öffnen',
      subtext: '· 4 Mischmodi',
    },
    toolWheel: {
      badge: 'Itten Bauhaus Farbrad',
      title: 'Farbkreis & Farbrad Online',
      description: 'Entdecken Sie den Farbkreis nach Johannes Itten mit 12 Farbtönen, bei dem Rot gegenüber von Grün liegt. Inklusive Farbpaletten-Generator, 9-Stufen-Schattierungsskala und WCAG 2.1 Kontrastprüfung.',
      cta: 'Farbkreis starten',
      subtext: '· 6 Harmonien',
    },
    comparison: {
      eyebrow: 'Optische Farbwissenschaft',
      heading: 'Warum subtraktive Pigmentphysik digitales RGB-Mischen übertrifft',
      subheading: 'Digitale Bildschirme manipulieren Lichtkanäle additiv. Reale Künstlerfarben gehorchen jedoch den Gesetzen spektraler Wellenlängen-Filterung.',
      rgbCard: {
        badge: 'Additive Bildschirmmischung (RGB)',
        title: 'Lineare Mittelung führt zu trübem Graubraun',
        body: 'Monitore erzeugen Farbreize durch leuchtende Subpixel (Rot, Grün, Blau). Beim herkömmlichen digitalen Mischen von Blau (#0000FF) und Gelb (#FFFF00) berechnet die Standard-Software den linearen Mittelwert (128, 128, 128) — ein schmutziges, ausgewaschenes Grau. Da Bildschirme Licht aussenden statt absorbieren, scheitert digitale Farbmischung an den Naturgesetzen realer Malerei.',
      },
      kmCard: {
        badge: 'Subtraktive Pigmentphysik (PigmentLab)',
        title: 'Selektive Wellenlängen-Absorption liefert reines Grün',
        body: 'Nach der physikalischen Kubelka-Munk-Theorie besitzt jedes Farbpigment spezifische Absorptions- und Streukoeffizienten. Blaues Pigment filtert rote und gelbe Wellenlängen heraus; gelbes Pigment absorbiert blaues und violettes Licht. Als einzige Schnittmenge bleibt reines, leuchtendes Grün reflektiert — exakt wie bei echten Öl-, Acryl- und Aquarellfarben auf Leinwand.',
      },
    },
    features: {
      eyebrow: 'Plattform-Architektur',
      heading: 'Vier Säulen für fundierte Farbkomposition',
      subheading: 'PigmentLab verbindet akademische Spektralphysik mit praktischer Farblehre und modernen Webstandards in einer ganzheitlichen Suite.',
      cards: [
        {
          badge: '01 · Pigmentphysik',
          title: 'Subtraktive Spektralabsorption',
          description: 'Rechnet mit physikalischen Absorptions- (K) und Streukoeffizienten (S). Bis zu 6 Pigmente mit stufenlosen 1%-100% Mischreglern für realistische Künstlerfarben.',
        },
        {
          badge: '02 · Farblehre',
          title: 'Johannes Itten Bauhaus-Farbkreis',
          description: '12-teiliges historisches Künstlermodell mit Rot gegenüber Grün und Blau gegenüber Orange für harmonische Komplementär-, Triaden- und Split-Paletten.',
        },
        {
          badge: '03 · Webstandards',
          title: 'W3C CSS Color 4 & OKLCH Farbraum',
          description: 'Wahrnehmungsgetreue Farbkoordinaten für berechenbare Helligkeitsverläufe im UI-Design und direkter Export von modernem CSS color-mix() Code.',
        },
        {
          badge: '04 · Barrierefreiheit',
          title: 'WCAG 2.1 & Farbenblindheit-Filter',
          description: 'Echtzeit-Berechnung relativer Luminanz für AA/AAA Kontrastkriterien sowie Simulation von Protanopie, Deuteranopie, Tritanopie und Achromatopsie.',
        },
      ],
    },
    standards: {
      eyebrow: 'Wissenschaftliche Referenzen',
      heading: 'Unterstützte Standards & physikalische Modelle',
      subheading: 'Alle Berechnungen in PigmentLab basieren auf anerkannten wissenschaftlichen Veröffentlichungen und offiziellen W3C-Spezifikationen.',
      items: [
        {
          title: 'Kubelka-Munk Theorie (1931)',
          tag: 'Subtraktive Optik',
          description: 'Zwei-Fluss-Differentialgleichungen zur quantitativen Modellierung von diffuser Reflexion und Lichtabsorption in Farbpigmenten.',
        },
        {
          title: 'Johannes Itten RYB (Bauhaus 1961)',
          tag: 'Künstlerische Farblehre',
          description: 'Das fundamentale 12-teilige Farbkreissystem zur Bestimmung geometrischer Farbkontraste und harmonischer Akkorde.',
        },
        {
          title: 'W3C CSS Color 4 (OKLCH)',
          tag: 'Moderner Webstandard',
          description: 'Perzeptiv gleichförmiger Farbraum, der das menschliche Helligkeitsempfinden ohne unschöne Farbtonverschiebungen abbildet.',
        },
        {
          title: 'WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Digitale Zugänglichkeit',
          description: 'Strenge Kontrastverhältnis-Grenzwerte (4.5:1 für Normaltext, 3:1 für Komponenten) für uneingeschränkte Nutzbarkeit.',
        },
      ],
    },
  },
  en: {
    metaTitle: 'PigmentLab — Subtractive Color Physics & Johannes Itten Theory',
    metaDescription: 'Online color science suite modeling physical Kubelka-Munk pigment absorption and Johannes Itten Bauhaus color theory. Free optical tools for creators.',
    metaKeywords: 'pigmentlab, pigment lab, subtractive color physics, color science suite, pigment optics, kubelka munk simulator, itten bauhaus color theory, color suite',
    heroEyebrow: 'Optical Subtractive Science & Classical Theory',
    heroHeading: 'Color Science Built on Real Physical Pigments',
    heroParagraph: 'Standard digital screen tools linearly average RGB light channels, turning mixtures into dull brownish-grey. PigmentLab models physical particle absorption and classical Bauhaus color theory—delivering vibrant, authentic color palettes for artists, UI designers, and educators.',
    toolMix: {
      badge: 'Subtractive Paint Optics',
      title: 'Pigment Blending Studio',
      description: 'Blend custom proportion sliders with authentic subtractive light scattering. Experience Blue + Yellow yielding vibrant emerald Green, with real-time CSS color-mix() code generation.',
      cta: 'Launch Blending Studio',
      subtext: '· 4 blend modes',
    },
    toolWheel: {
      badge: 'Bauhaus RYB Model',
      title: 'Bauhaus Artist Wheel Studio',
      description: 'Explore Johannes Itten\'s classical 12-hue artist color circle where Red opposes Green and Blue opposes Orange. Features 9-step shade scales, WCAG 2.1 matrix scores, and color blindness simulations.',
      cta: 'Open Artist Wheel Studio',
      subtext: '· 6 palette modes',
    },
    comparison: {
      eyebrow: 'Color Physics Comparison',
      heading: 'Why Subtractive Pigment Physics Beats Digital RGB Mixing',
      subheading: 'Digital monitors manipulate glowing light channels additively. Physical artist paints, however, obey the immutable laws of selective wavelength absorption.',
      rgbCard: {
        badge: 'Digital Linear RGB Averaging',
        title: 'Linear Averaging Degrades into Muddy Grey-Brown',
        body: 'Computer screens render colors through tiny glowing subpixels (Red, Green, Blue). When standard design software mixes blue (#0000FF) and yellow (#FFFF00), it simply calculates their mathematical midpoint: (128, 128, 128)—a washed-out, lifeless grey. Because screens project light rather than absorbing it, digital averaging fundamentally fails to replicate natural pigment interactions.',
      },
      kmCard: {
        badge: 'Subtractive Paint Optics (PigmentLab)',
        title: 'Selective Wavelength Filtering Yields Radiant Emerald Green',
        body: 'According to physical Kubelka-Munk theory, paint particles possess distinct absorption (K) and scattering (S) properties across visible wavelengths. Blue pigment absorbs red and yellow bands; yellow pigment absorbs blue and violet bands. The sole remaining reflected light is brilliant emerald green—exactly replicating natural oil and acrylic paints on canvas.',
      },
    },
    features: {
      eyebrow: 'Core Architecture',
      heading: 'Four Pillars of Physics-Based Color Science',
      subheading: 'PigmentLab unites academic spectral physics with classical artistic harmony and modern web accessibility in a unified, professional suite.',
      cards: [
        {
          badge: '01 · Paint Physics',
          title: 'Subtractive Spectral Absorption',
          description: 'Calculates physical absorption (K) and scattering (S) coefficients. Blend up to 6 custom pigment slots with 1%-100% continuous ratio controls.',
        },
        {
          badge: '02 · Art Theory',
          title: 'Johannes Itten Bauhaus Wheel',
          description: 'Historical 12-hue artist wheel with Red opposing Green and Blue opposing Orange for authentic complementary, triadic, and split-complementary harmonies.',
        },
        {
          badge: '03 · Web Standards',
          title: 'W3C CSS Color 4 & OKLCH Space',
          description: 'Perceptually uniform polar coordinates ensuring smooth, predictable chroma gradients and instant production-ready CSS color-mix() code generation.',
        },
        {
          badge: '04 · Accessibility',
          title: 'WCAG 2.1 & Vision Deficiency Lenses',
          description: 'Real-time relative luminance calculation for AA/AAA compliance coupled with simulation filters for Protanopia, Deuteranopia, Tritanopia, and Achromatopsia.',
        },
      ],
    },
    standards: {
      eyebrow: 'Scientific Foundation',
      heading: 'Supported Standards & Optical Models',
      subheading: 'Every computation across PigmentLab is backed by peer-reviewed academic literature and official W3C web specifications.',
      items: [
        {
          title: 'Kubelka-Munk Theory (1931)',
          tag: 'Subtractive Paint Optics',
          description: 'Two-flux radiative transfer differential equations modeling diffuse light reflectance and absorption in paint layers.',
        },
        {
          title: 'Johannes Itten RYB (Bauhaus 1961)',
          tag: 'Color Harmony Framework',
          description: 'The foundational 12-hue color wheel governing geometric contrast relationships and balanced compositional palettes.',
        },
        {
          title: 'W3C CSS Color Module 4 (OKLCH)',
          tag: 'Perceptual Web Standard',
          description: 'Perceptually uniform color space aligning digital display rendering with human eye sensitivity curves.',
        },
        {
          title: 'W3C WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Digital Accessibility',
          description: 'Mathematical relative luminance ratios (4.5:1 text, 3:1 graphical elements) guaranteeing inclusive digital experiences.',
        },
      ],
    },
  },
  fr: {
    metaTitle: 'PigmentLab — Physique des Couleurs & Théorie Bauhaus',
    metaDescription: 'Suite de science des couleurs basée sur l\'absorption soustractive des pigments selon Kubelka-Munk et la théorie des couleurs de Johannes Itten.',
    metaKeywords: 'pigmentlab, suite science des couleurs, physique soustractive, optique des pigments, kubelka munk, theorie bauhaus johannes itten, plateforme outils couleur',
    heroEyebrow: 'Science Optique Soustractive & Théorie Bauhaus',
    heroHeading: 'La science des couleurs avec de vrais pigments physiques',
    heroParagraph: 'Les outils numériques habituels calculent une moyenne linéaire RVB qui transforme les mélanges en gris terne. PigmentLab modélise l\'absorption des particules réelles et la théorie classique des couleurs du Bauhaus de Johannes Itten.',
    toolMix: {
      badge: 'Optique Peinture',
      title: 'Studio de Mélange de Pigments',
      description: 'Mélangez les couleurs avec des curseurs physiques et une absorption spectrale réelle. Observez le bleu et le jaune créer un vert émeraude éclatant.',
      cta: 'Ouvrir le Mélangeur',
      subtext: '· 4 modes de mélange',
    },
    toolWheel: {
      badge: 'Modèle Itten RYB',
      title: 'Studio Roue Chromatique Bauhaus',
      description: 'Explorez le cercle chromatique à 12 teintes où le rouge fait face au vert. Échelles d\'ombrage à 9 niveaux et validation WCAG 2.1 intégrée.',
      cta: 'Lancer le Cercle Chromatique',
      subtext: '· 6 modes d\'harmonie',
    },
    comparison: {
      eyebrow: 'Comparaison Optique',
      heading: 'Pourquoi la physique soustractive surpasse le mélange RVB numérique',
      subheading: 'Les écrans manipulent la lumière de manière additive. Les vrais pigments obéissent aux lois immuables de l\'absorption spectrale.',
      rgbCard: {
        badge: 'Mélange Linéaire RVB',
        title: 'La moyenne linéaire produit un gris terne',
        body: 'Les écrans combinent des sous-pixels lumineux (Rouge, Vert, Bleu). En mélangeant le bleu et le jaune en sRVB classique, les logiciels moyennent simplement les valeurs en un gris délavé. L\'addition de lumière ne peut reproduire la matière des peintures réelles.',
      },
      kmCard: {
        badge: 'Physique des Pigments (PigmentLab)',
        title: 'Le filtrage des longueurs d\'onde révèle un vert éclatant',
        body: 'Selon la théorie de Kubelka-Munk, les pigments absorbent et diffusent des longueurs d\'onde précises. Le pigment bleu absorbe les ondes rouges et jaunes ; le pigment jaune absorbe le bleu et le violet. Seul le vert pur est réfléchi, comme sur une toile d\'artiste.',
      },
    },
    features: {
      eyebrow: 'Architecture de la Plateforme',
      heading: 'Quatre piliers pour la maîtrise des couleurs',
      subheading: 'PigmentLab allie la physique spectrale universitaire, la théorie classique des couleurs et les standards Web modernes.',
      cards: [
        {
          badge: '01 · Physique',
          title: 'Absorption Spectrale Soustractive',
          description: 'Calcul précis des coefficients K et S de Kubelka-Munk. Jusqu\'à 6 pigments avec dosages de 1% à 100%.',
        },
        {
          badge: '02 · Bauhaus',
          title: 'Cercle Chromatique Johannes Itten',
          description: 'Modèle classique à 12 teintes opposant rouge/vert et bleu/orange pour des harmonies complémentaires et triadiques parfaites.',
        },
        {
          badge: '03 · Standards Web',
          title: 'W3C CSS Color 4 & Espace OKLCH',
          description: 'Coordonnées perceptuellement uniformes et génération instantanée de code moderne CSS color-mix().',
        },
        {
          badge: '04 · Accessibilité',
          title: 'Contraste WCAG 2.1 & Daltonisme',
          description: 'Contrôle automatique du ratio de contraste AA/AAA et simulation de protanopie, deutéranopie, tritanopie et achromatopsie.',
        },
      ],
    },
    standards: {
      eyebrow: 'Références Scientifiques',
      heading: 'Standards & modèles optiques supportés',
      subheading: 'Chaque calcul dans PigmentLab s\'appuie sur des publications universitaires et les recommandations officielles du W3C.',
      items: [
        {
          title: 'Théorie de Kubelka-Munk (1931)',
          tag: 'Optique Soustractive',
          description: 'Équations différentielles à deux flux pour la modélisation de la diffusion et de l\'absorption lumineuse.',
        },
        {
          title: 'Johannes Itten RYB (Bauhaus 1961)',
          tag: 'Harmonie des Couleurs',
          description: 'Le cercle chromatique fondamental régissant les contrastes géométriques et accords harmonieux.',
        },
        {
          title: 'W3C CSS Color Module 4 (OKLCH)',
          tag: 'Standard Web Perceptuel',
          description: 'Espace colorimétrique uniforme aligné sur la sensibilité biologique de l\'œil humain.',
        },
        {
          title: 'W3C WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Accessibilité Numérique',
          description: 'Exigences mathématiques de luminance relative pour des interfaces logicielles universellement lisibles.',
        },
      ],
    },
  },
  pt: {
    metaTitle: 'PigmentLab — Física de Cores & Teoria Bauhaus de Itten',
    metaDescription: 'Suíte de ciência das cores modelando absorção física de pigmentos segundo Kubelka-Munk e a teoria Bauhaus de Johannes Itten.',
    metaKeywords: 'pigmentlab, suite de ciencia das cores, fisica de cores subtrativas, optica de pigmentos, kubelka munk, teoria bauhaus johannes itten, plataforma de cores',
    heroEyebrow: 'Ciência Óptica Subtrativa & Teoria Clássica Bauhaus',
    heroHeading: 'Ciência das cores construída com pigmentos físicos reais',
    heroParagraph: 'Ferramentas digitais comuns fazem a média linear de canais RGB, resultando em misturas cinzentas e sem vida. O PigmentLab simula a absorção física da luz e a clássica teoria Bauhaus de Johannes Itten.',
    toolMix: {
      badge: 'Física de Tintas',
      title: 'Estúdio de Mistura de Pigmentos',
      description: 'Misture cores com controles deslizantes e absorção óptica real. Veja o azul e o amarelo gerarem um verde esmeralda vívido com código CSS color-mix().',
      cta: 'Abrir Misturador',
      subtext: '· 4 modos de mistura',
    },
    toolWheel: {
      badge: 'Modelo Itten RYB',
      title: 'Estúdio Círculo Cromático Bauhaus',
      description: 'Explore o círculo cromático clássico de 12 matizes de Johannes Itten, com o vermelho oposto ao verde. Escalas de 9 tons e matriz WCAG 2.1.',
      cta: 'Iniciar Círculo Cromático',
      subtext: '· 6 modos harmônicos',
    },
    comparison: {
      eyebrow: 'Comparação Óptica',
      heading: 'Por que a física subtrativa de pigmentos supera a mistura RGB digital',
      subheading: 'Telas digitais manipulam luz aditivamente. Pigmentos artísticos reais obedecem às leis da absorção seletiva do comprimento de onda.',
      rgbCard: {
        badge: 'Mistura Linear Digital RGB',
        title: 'Média linear resulta em tons acinzentados',
        body: 'Monitores emitem luz através de subpixels (Vermelho, Verde, Azul). Ao misturar azul e amarelo no sRGB comum, o computador apenas calcula a média aritmética para um cinza opaco. A adição de luz não consegue replicar a física das tintas reais.',
      },
      kmCard: {
        badge: 'Física de Pigmentos (PigmentLab)',
        title: 'A filtragem de comprimento de onda gera verde esmeralda puro',
        body: 'Pela teoria de Kubelka-Munk, as partículas de tinta possuem coeficientes próprios de absorção e dispersão. O azul absorve comprimentos vermelhos e amarelos; o amarelo absorve azuis e violetas. Apenas o verde puro é refletido na superfície da tela.',
      },
    },
    features: {
      eyebrow: 'Arquitetura da Plataforma',
      heading: 'Quatro pilares para composição científica de cores',
      subheading: 'O PigmentLab une física espectral acadêmica, teoria cromática artística clássica e modernos padrões de acessibilidade web.',
      cards: [
        {
          badge: '01 · Física',
          title: 'Absorção Espectral Subtrativa',
          description: 'Calcula coeficientes K e S de Kubelka-Munk. Até 6 slots de pigmentos com controles contínuos de proporção de 1% a 100%.',
        },
        {
          badge: '02 · Arte',
          title: 'Círculo Bauhaus de Johannes Itten',
          description: 'Círculo de 12 matizes com vermelho oposto ao verde e azul oposto ao laranja para harmonias complementares e triádicas reais.',
        },
        {
          badge: '03 · Padrões Web',
          title: 'W3C CSS Color 4 & Espaço OKLCH',
          description: 'Coordenadas perceptualmente uniformes para gradientes suaves e exportação direta de código CSS color-mix() moderno.',
        },
        {
          badge: '04 · Acessibilidade',
          title: 'WCAG 2.1 & Lentes de Daltonismo',
          description: 'Validação em tempo real de taxas de contraste AA/AAA e filtros simuladores de protanopia, deuteranopia, tritanopia e monocromia.',
        },
      ],
    },
    standards: {
      eyebrow: 'Fundamentação Científica',
      heading: 'Padrões Suportados & Modelos Ópticos',
      subheading: 'Todos os algoritmos do PigmentLab seguem pesquisas científicas publicadas e recomendações do consórcio W3C.',
      items: [
        {
          title: 'Teoria Kubelka-Munk (1931)',
          tag: 'Óptica Subtrativa',
          description: 'Equações diferenciais de dois fluxos para cálculo de refletância e absorção de luz difusa em camadas de pigmento.',
        },
        {
          title: 'Johannes Itten RYB (Bauhaus 1961)',
          tag: 'Harmonia Cromática',
          description: 'O círculo cromático de 12 matizes fundamental para relações de contraste geométrico e paletas balanceadas.',
        },
        {
          title: 'W3C CSS Color Module 4 (OKLCH)',
          tag: 'Padrão Web Perceptual',
          description: 'Espaço de cores uniforme alinhado à percepção visual humana sem distorções de matiz ao alterar luminosidade.',
        },
        {
          title: 'W3C WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Acessibilidade Digital',
          description: 'Critérios matemáticos de luminância relativa para garantir legibilidade e conformidade inclusiva.',
        },
      ],
    },
  },
  es: {
    metaTitle: 'PigmentLab — Física de Color & Teoría Bauhaus de Itten',
    metaDescription: 'Plataforma de ciencia del color con absorción física de pigmentos según Kubelka-Munk y teoría del color de Johannes Itten. Herramientas gratuitas.',
    metaKeywords: 'pigmentlab, suite de ciencia del color, fisica de color sustractivo, optica de pigmentos, kubelka munk, teoria bauhaus johannes itten, plataforma de color',
    heroEyebrow: 'Ciencia Óptica Sustractiva & Teoría Clásica Bauhaus',
    heroHeading: 'Ciencia del color construida con pigmentos físicos reales',
    heroParagraph: 'Las herramientas digitales habituales promedian linealmente los canales RGB, convirtiendo las mezclas en tonos grisáceos apagados. PigmentLab modela la absorción física de partículas y la teoría clásica de Johannes Itten.',
    toolMix: {
      badge: 'Óptica de Pintura',
      title: 'Estudio de Mezcla de Pigmentos',
      description: 'Mezcle colores con controles deslizantes y absorción óptica real. Compruebe cómo el azul y el amarillo generan un verde esmeralda brillante con código CSS color-mix().',
      cta: 'Abrir Mezclador',
      subtext: '· 4 modos de mezcla',
    },
    toolWheel: {
      badge: 'Modelo Itten RYB',
      title: 'Estudio Círculo Cromático Bauhaus',
      description: 'Explore el círculo cromático clásico de 12 tonos de Johannes Itten con el rojo opuesto al verde. Escalas de 9 niveles y matriz WCAG 2.1.',
      cta: 'Iniciar Círculo Cromático',
      subtext: '· 6 modos armónicos',
    },
    comparison: {
      eyebrow: 'Comparación Óptica',
      heading: 'Por qué la física sustractiva de pigmentos supera a la mezcla RGB digital',
      subheading: 'Las pantallas digitales manipulan la luz de forma aditiva. Los pigmentos de pintura reales obedecen a las leyes de absorción de longitud de onda.',
      rgbCard: {
        badge: 'Mezcla Lineal Digital RGB',
        title: 'El promedio lineal degrada en un gris apagado',
        body: 'Las pantallas emiten luz mediante subpíxeles (Rojo, Verde, Azul). Al mezclar azul y amarillo en sRGB clásico, el software simplemente calcula la media matemática en un gris descolorido. La suma de luz no puede replicar las propiedades físicas de la pintura.',
      },
      kmCard: {
        badge: 'Física de Pigmentos (PigmentLab)',
        title: 'El filtrado de longitudes de onda produce verde esmeralda puro',
        body: 'Según la teoría de Kubelka-Munk, cada pigmento posee coeficientes únicos de absorción y dispersión. El azul absorbe ondas rojas y amarillas; el amarillo absorbe azules y violetas. La única luz reflejada es verde puro, igual que en el óleo y acrílico sobre lienzo.',
      },
    },
    features: {
      eyebrow: 'Arquitectura de Plataforma',
      heading: 'Cuatro pilares para una composición cromática rigurosa',
      subheading: 'PigmentLab integra física espectral científica, teoría artística clásica y estándares de accesibilidad en una suite completa.',
      cards: [
        {
          badge: '01 · Física',
          title: 'Absorción Espectral Sustractiva',
          description: 'Calcula coeficientes K y S de Kubelka-Munk. Hasta 6 pigmentos con controles de dosificación continuos del 1% al 100%.',
        },
        {
          badge: '02 · Arte',
          title: 'Círculo Bauhaus de Johannes Itten',
          description: 'Círculo de 12 tonos con rojo opuesto al verde y azul opuesto al naranja para armonías complementarias y triádicas auténticas.',
        },
        {
          badge: '03 · Estándares Web',
          title: 'W3C CSS Color 4 & Espacio OKLCH',
          description: 'Coordenadas perceptualmente uniformes y generación directa de código CSS color-mix() preparado para desarrollo moderno.',
        },
        {
          badge: '04 · Accesibilidad',
          title: 'WCAG 2.1 & Filtros de Daltonismo',
          description: 'Cálculo de luminancia relativa para estándares AA/AAA y simulación de protanopía, deuteranopía, tritanopía y acromatopsia.',
        },
      ],
    },
    standards: {
      eyebrow: 'Fundamentos Científicos',
      heading: 'Estándares Soportados & Modelos Ópticos',
      subheading: 'Todos los cálculos en PigmentLab se fundamentan en investigaciones publicadas y especificaciones del consorcio W3C.',
      items: [
        {
          title: 'Teoría Kubelka-Munk (1931)',
          tag: 'Óptica Sustractiva',
          description: 'Ecuaciones diferenciales de dos flujos para el modelado de reflectancia y absorción de luz difusa en capas de color.',
        },
        {
          title: 'Johannes Itten RYB (Bauhaus 1961)',
          tag: 'Armonía del Color',
          description: 'El círculo cromático de 12 tonos fundamental para relaciones geométricas de contraste y composiciones equilibradas.',
        },
        {
          title: 'W3C CSS Color Module 4 (OKLCH)',
          tag: 'Estándar Web Perceptual',
          description: 'Espacio de color uniforme alineado con la sensibilidad del ojo humano para transiciones cromáticas estables.',
        },
        {
          title: 'W3C WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Accesibilidad Digital',
          description: 'Fórmulas matemáticas de luminancia relativa para garantizar interfaces plenamente legibles para todos los usuarios.',
        },
      ],
    },
  },
  ru: {
    metaTitle: 'PigmentLab — Субтрактивная физика цвета & теория Баухауса',
    metaDescription: 'Комплекс инструментов физики цвета: спектральная абсорбция Кубелки-Мунка и теория цвета Баухауса Иоганнеса Иттена. Бесплатные оптические инструменты.',
    metaKeywords: 'pigmentlab, комплекс колористики, субтрактивная физика цвета, спектральная оптика пигментов, теория кубелки мунка, теория баухауса иттен, инструменты цвета',
    heroEyebrow: 'Субтрактивная оптика & классическая теория Баухауса',
    heroHeading: 'Колористика на основе реальных физических пигментов',
    heroParagraph: 'Обычные цифровые экраны линейно усредняют каналы RGB, превращая смеси в грязно-серый оттенок. PigmentLab моделирует реальное поглощение света частицами и классическую теорию Баухауса Иоганнеса Иттена.',
    toolMix: {
      badge: 'Оптика красок',
      title: 'Студия смешивания пигментов',
      description: 'Смешивайте краски с физическими ползунками пропорций. Убедитесь, как синий и желтый дают чистый изумрудный зеленый с генерацией CSS color-mix().',
      cta: 'Открыть симулятор',
      subtext: '· 4 режима смешивания',
    },
    toolWheel: {
      badge: 'Модель Иттена RYB',
      title: 'Студия цветового круга Баухауса',
      description: 'Исследуйте 12-частный круг Иоганнеса Иттена, где красный цвет противопоставлен зеленому. Шкала теней из 9 градаций и проверка WCAG 2.1.',
      cta: 'Запустить цветовой круг',
      subtext: '· 6 схем гармонии',
    },
    comparison: {
      eyebrow: 'Оптическое сравнение',
      heading: 'Почему субтрактивная физика пигментов превосходит цифровое RGB-смешивание',
      subheading: 'Экраны манипулируют светом аддитивно. Реальные художественные краски подчиняются законам спектрального поглощения волн.',
      rgbCard: {
        badge: 'Цифровое аддитивное RGB',
        title: 'Линейное усреднение приводит к тусклому серому цвету',
        body: 'Мониторы излучают свет с помощью субпикселей (Красный, Зеленый, Синий). При обычном цифровом смешивании синего и желтого в sRGB компьютер просто вычисляет среднее арифметическое в ненасыщенный серый тон. Экранное сложение лучей не способно воссоздать физику красок.',
      },
      kmCard: {
        badge: 'Физика пигментов (PigmentLab)',
        title: 'Спектральная фильтрация дает сияющий чистый зеленый',
        body: 'Согласно теории Кубелки-Мунка, частицы краски обладают индивидуальными коэффициентами поглощения и рассеяния. Синий пигмент поглощает красные и желтые волны; желтый поглощает синие и фиолетовые. Единственный отраженный свет — чистый изумрудный зеленый, как на холсте.',
      },
    },
    features: {
      eyebrow: 'Архитектура платформы',
      heading: 'Четыре столпа научно выверенной колористики',
      subheading: 'PigmentLab объединяет академическую спектральную физику, классическую гармонию Баухауса и современные веб-стандарты доступности.',
      cards: [
        {
          badge: '01 · Физика',
          title: 'Субтрактивное спектральное поглощение',
          description: 'Расчет физических коэффициентов K и S Кубелки-Мунка. До 6 слотов пигментов с плавной регулировкой пропорций от 1% до 100%.',
        },
        {
          badge: '02 · Искусство',
          title: 'Круг Баухауса Иоганнеса Иттена',
          description: 'Классический 12-частный круг художников: красный напротив зеленого, синий напротив оранжевого для чистых комплементарных палитр.',
        },
        {
          badge: '03 · Веб-стандарты',
          title: 'W3C CSS Color 4 & пространство OKLCH',
          description: 'Перцептивно равномерные координаты для плавных градиентов без искажения оттенка и генератор современного CSS-кода color-mix().',
        },
        {
          badge: '04 · Доступность',
          title: 'WCAG 2.1 & фильтры дальтонизма',
          description: 'Расчет относительной яркости для уровней AA/AAA и симуляция протанопии, дейтеранопии, тританопии и монохроматии.',
        },
      ],
    },
    standards: {
      eyebrow: 'Научная база',
      heading: 'Поддерживаемые стандарты & оптические модели',
      subheading: 'Каждый расчет в PigmentLab опирается на академические публикации и официальные спецификации W3C.',
      items: [
        {
          title: 'Теория Кубелки-Мунка (1931)',
          tag: 'Субтрактивная оптика',
          description: 'Двухпотоковая модель дифференциальных уравнений для расчета диффузного отражения и поглощения света в краске.',
        },
        {
          title: 'Johannes Itten RYB (Баухаус 1961)',
          tag: 'Цветовая гармония',
          description: 'Фундаментальная 12-частная геометрическая система контрастов и гармонических созвучий для дизайна и живописи.',
        },
        {
          title: 'W3C CSS Color Module 4 (OKLCH)',
          tag: 'Перцептивный стандарт',
          description: 'Равномерное цветовое пространство, соответствующее физиологии зрительного восприятия человека.',
        },
        {
          title: 'W3C WCAG 2.1 (ISO/IEC 40500)',
          tag: 'Цифровая доступность',
          description: 'Математическая проверка коэффициентов контрастности (4.5:1 для текста, 3:1 для элементов) для максимальной инклюзивности.',
        },
      ],
    },
  },
};
