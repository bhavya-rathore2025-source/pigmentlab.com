import type { SupportedLanguage } from './ui';

export interface JumpLinkItem {
  href: string;
  label: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface PersonaItem {
  badge: string;
  title: string;
  description: string;
}

export interface MixBrownCard {
  title: string;
  text: string;
}

export interface ModularGuideCopy {
  howToTitle: string;
  howToIntro: string;
  steps: StepItem[];
  whoUsesTitle: string;
  whoUsesIntro: string;
  personas: PersonaItem[];
  benefitsTitle: string;
  benefits: string[];
  inlineLinkPrompt: string;
  inlineLinkText: string;
  inlineLinkPath: '/color-wheel' | '/mix';
}

export interface BrownGuideCopy {
  heading: string;
  intro: string;
  cards: [MixBrownCard, MixBrownCard, MixBrownCard];
}

export interface HarmonyGuideCopy {
  heading: string;
  body: string;
}

export const mixJumpLinks: Record<SupportedLanguage, JumpLinkItem[]> = {
  de: [
    { href: '#mixer-studio', label: 'Simulator' },
    { href: '#mixing-table', label: 'Mischtabelle' },
    { href: '#mix-brown', label: 'Braun mischen' },
    { href: '#how-to', label: 'Anleitung' },
    { href: '#who-uses', label: 'Zielgruppen' },
    { href: '#sources', label: 'Quellen' },
    { href: '#faq', label: 'FAQ' },
  ],
  en: [
    { href: '#mixer-studio', label: 'Mixer Studio' },
    { href: '#mixing-table', label: 'Mixing Table' },
    { href: '#mix-brown', label: 'Mix Brown' },
    { href: '#how-to', label: 'How-To Steps' },
    { href: '#who-uses', label: 'Who Uses This' },
    { href: '#sources', label: 'Citations' },
    { href: '#faq', label: 'FAQ' },
  ],
  fr: [
    { href: '#mixer-studio', label: 'Simulateur' },
    { href: '#mixing-table', label: 'Tableau mélanges' },
    { href: '#mix-brown', label: 'Obtenir du marron' },
    { href: '#how-to', label: 'Étapes' },
    { href: '#who-uses', label: 'Pour qui' },
    { href: '#sources', label: 'Références' },
    { href: '#faq', label: 'FAQ' },
  ],
  pt: [
    { href: '#mixer-studio', label: 'Simulador' },
    { href: '#mixing-table', label: 'Tabela de Cores' },
    { href: '#mix-brown', label: 'Misturar Marrom' },
    { href: '#how-to', label: 'Passo a Passo' },
    { href: '#who-uses', label: 'Quem Usa' },
    { href: '#sources', label: 'Fontes' },
    { href: '#faq', label: 'FAQ' },
  ],
  es: [
    { href: '#mixer-studio', label: 'Simulador' },
    { href: '#mixing-table', label: 'Tabla de Mezclas' },
    { href: '#mix-brown', label: 'Obtener Marrón' },
    { href: '#how-to', label: 'Paso a Paso' },
    { href: '#who-uses', label: 'Quién lo Usa' },
    { href: '#sources', label: 'Fuentes' },
    { href: '#faq', label: 'FAQ' },
  ],
  ru: [
    { href: '#mixer-studio', label: 'Симулятор' },
    { href: '#mixing-table', label: 'Таблица красок' },
    { href: '#mix-brown', label: 'Получить коричневый' },
    { href: '#how-to', label: 'Инструкция' },
    { href: '#who-uses', label: 'Для кого' },
    { href: '#sources', label: 'Источники' },
    { href: '#faq', label: 'FAQ' },
  ],
};

export const wheelJumpLinks: Record<SupportedLanguage, JumpLinkItem[]> = {
  de: [
    { href: '#wheel-studio', label: 'Farbrad' },
    { href: '#itten-vs-rgb', label: 'Itten vs RGB' },
    { href: '#harmonies', label: 'Harmonien' },
    { href: '#how-to', label: 'Anleitung' },
    { href: '#who-uses', label: 'Zielgruppen' },
    { href: '#sources', label: 'Quellen' },
    { href: '#faq', label: 'FAQ' },
  ],
  en: [
    { href: '#wheel-studio', label: 'Color Wheel' },
    { href: '#itten-vs-rgb', label: 'Itten vs RGB' },
    { href: '#harmonies', label: 'Harmonies' },
    { href: '#how-to', label: 'How-To Steps' },
    { href: '#who-uses', label: 'Who Uses This' },
    { href: '#sources', label: 'Citations' },
    { href: '#faq', label: 'FAQ' },
  ],
  fr: [
    { href: '#wheel-studio', label: 'Roue' },
    { href: '#itten-vs-rgb', label: 'Itten vs RGB' },
    { href: '#harmonies', label: 'Harmonies' },
    { href: '#how-to', label: 'Étapes' },
    { href: '#who-uses', label: 'Pour qui' },
    { href: '#sources', label: 'Références' },
    { href: '#faq', label: 'FAQ' },
  ],
  pt: [
    { href: '#wheel-studio', label: 'Círculo' },
    { href: '#itten-vs-rgb', label: 'Itten vs RGB' },
    { href: '#harmonies', label: 'Harmonias' },
    { href: '#how-to', label: 'Passo a Passo' },
    { href: '#who-uses', label: 'Quem Usa' },
    { href: '#sources', label: 'Fontes' },
    { href: '#faq', label: 'FAQ' },
  ],
  es: [
    { href: '#wheel-studio', label: 'Rueda' },
    { href: '#itten-vs-rgb', label: 'Itten vs RGB' },
    { href: '#harmonies', label: 'Armonías' },
    { href: '#how-to', label: 'Paso a Paso' },
    { href: '#who-uses', label: 'Quién lo Usa' },
    { href: '#sources', label: 'Fuentes' },
    { href: '#faq', label: 'FAQ' },
  ],
  ru: [
    { href: '#wheel-studio', label: 'Круг' },
    { href: '#itten-vs-rgb', label: 'Иттен vs RGB' },
    { href: '#harmonies', label: 'Гармонии' },
    { href: '#how-to', label: 'Инструкция' },
    { href: '#who-uses', label: 'Для кого' },
    { href: '#sources', label: 'Источники' },
    { href: '#faq', label: 'FAQ' },
  ],
};

export const aboutJumpLinks: Record<SupportedLanguage, JumpLinkItem[]> = {
  de: [
    { href: '#mission', label: 'Mission' },
    { href: '#rgb-vs-kubelka-munk', label: 'RGB vs Kubelka-Munk' },
    { href: '#scientific-references', label: 'Wissenschaftliche Quellen' },
    { href: '#explore-tools', label: 'Farbwerkzeuge' },
  ],
  en: [
    { href: '#mission', label: 'Mission' },
    { href: '#rgb-vs-kubelka-munk', label: 'RGB vs Kubelka-Munk' },
    { href: '#scientific-references', label: 'Scientific References' },
    { href: '#explore-tools', label: 'Color Tools' },
  ],
  fr: [
    { href: '#mission', label: 'Mission' },
    { href: '#rgb-vs-kubelka-munk', label: 'RVB vs Kubelka-Munk' },
    { href: '#scientific-references', label: 'Sources scientifiques' },
    { href: '#explore-tools', label: 'Outils' },
  ],
  pt: [
    { href: '#mission', label: 'Missão' },
    { href: '#rgb-vs-kubelka-munk', label: 'RGB vs Kubelka-Munk' },
    { href: '#scientific-references', label: 'Fontes Científicas' },
    { href: '#explore-tools', label: 'Ferramentas' },
  ],
  es: [
    { href: '#mission', label: 'Misión' },
    { href: '#rgb-vs-kubelka-munk', label: 'RGB vs Kubelka-Munk' },
    { href: '#scientific-references', label: 'Referencias' },
    { href: '#explore-tools', label: 'Herramientas' },
  ],
  ru: [
    { href: '#mission', label: 'Миссия' },
    { href: '#rgb-vs-kubelka-munk', label: 'RGB и Кубелка-Мунк' },
    { href: '#scientific-references', label: 'Источники' },
    { href: '#explore-tools', label: 'Инструменты' },
  ],
};

export const extraMixBrownSections: Partial<Record<SupportedLanguage, BrownGuideCopy>> = {
  en: {
    heading: '3. How to Mix Brown Paint: Best Pigment Ratios',
    intro:
      'Mixing brown from primary or complementary paints is one of the most frequent studio questions. Because brown is a balanced neutral rather than a primary hue, try these three reliable recipes in the simulator:',
    cards: [
      {
        title: 'Method A: 3 Primaries',
        text: 'Blend Red + Yellow + Blue in roughly equal parts. Bias toward Yellow for warm ochre brown or toward Red for chestnut.',
      },
      {
        title: 'Method B: Complementaries',
        text: 'Mix opposite hues such as Red + Green or Blue + Orange. Complementary pigment pairs neutralize cleanly into natural earth browns.',
      },
      {
        title: 'Method C: Tint & Deepen',
        text: 'Add Titanium White for beige and sand tones, or a touch of Ultramarine Blue instead of black for rich dark chocolate browns.',
      },
    ],
  },
  es: {
    heading: '3. Cómo mezclar colores para obtener marrón',
    intro:
      'Saber qué colores mezclar para obtener marrón es clave en pintura artística y decoración. Al no ser un color primario, puedes lograrlo con estas tres fórmulas:',
    cards: [
      {
        title: 'Método A: 3 Primarios',
        text: 'Combina Rojo + Amarillo + Azul en proporciones equilibradas. Añade más Amarillo para tonos ocre o más Rojo para marrón castaño.',
      },
      {
        title: 'Método B: Complementarios',
        text: 'Mezcla parejas opuestas como Rojo + Verde o Azul + Naranja para lograr un marrón tierra natural sin aspecto grisáceo.',
      },
      {
        title: 'Método C: Aclarar y Oscurecer',
        text: 'Usa Blanco Titanio para tonos beige y arena, o Azul Ultramar en lugar de negro para marrones chocolate profundos.',
      },
    ],
  },
  ru: {
    heading: '3. Как смешать краски, чтобы получить коричневый цвет',
    intro:
      'Коричневый не входит в число основных цветов, поэтому художники получают его сбалансированным смешиванием пигментов. Попробуйте три классических рецепта:',
    cards: [
      {
        title: 'Способ 1: 3 основных цвета',
        text: 'Смешайте Красный + Желтый + Синий в близких пропорциях. Больше желтого даст теплую охру, больше красного — каштановый оттенок.',
      },
      {
        title: 'Способ 2: Комплементарные пары',
        text: 'Соедините противоположные цвета: Красный + Зеленый или Синий + Оранжевый. Это дает благородный природный коричневый тон.',
      },
      {
        title: 'Способ 3: Оттенки и глубина',
        text: 'Добавьте Титановые белила для бежевых тонов и немного Ультрамарина вместо черного для глубокого шоколадного цвета.',
      },
    ],
  },
};

export const extraWheelHarmonySections: Partial<Record<SupportedLanguage, HarmonyGuideCopy>> = {
  es: {
    heading: '3. Armonías complementarias y contraste simultáneo',
    body: 'Los colores complementarios ocupan posiciones opuestas a 180 grados en la rueda de color. En el círculo de Itten (RYB), Rojo y Verde o Azul y Naranja intensifican mutuamente su luminosidad mediante contraste simultáneo, lo que los hace ideales para botones de acción, señales visuales y puntos focales.',
  },
  ru: {
    heading: '3. Комплементарные гармонии и одновременный контраст',
    body: 'Комплементарные (дополнительные) цвета расположены напротив друг друга под углом 180 градусов. В круге Иттена (RYB) пары Красный–Зеленый и Синий–Оранжевый усиливают взаимную яркость за счет одновременного контраста, помогая выделить ключевые акценты и кнопки интерфейса.',
  },
};

export const mixModularGuide: Record<SupportedLanguage, ModularGuideCopy> = {
  de: {
    howToTitle: '4. Schritt-für-Schritt: Farben realistisch mischen & CSS exportieren',
    howToIntro: 'So berechnen Sie in wenigen Sekunden exakte Farbmischungen und barrierefreie Web-Codes:',
    steps: [
      {
        title: 'Mischmodus wählen',
        description: 'Wählen Sie „Echte Farbe (RYB)“ für physikalische Kubelka-Munk-Pigmentoptik oder „Modernes Web (OKLCH)“ für CSS color-mix() Verläufe.',
      },
      {
        title: 'Pigmente oder HEX-Codes laden',
        description: 'Fügen Sie bis zu 6 Farb-Slots hinzu, tippen Sie eigene HEX-Werte ein oder klicken Sie auf klassische Künstler-Pigmente wie Phthaloblau und Kadmiumgelb.',
      },
      {
        title: 'Mischverhältnis mit Reglern dosieren',
        description: 'Verschieben Sie die Prozent-Regler von 1% bis 100%, um genaue Mischrezepte in Echtzeit zu simulieren.',
      },
      {
        title: 'WCAG-Kontrast prüfen & Code kopieren',
        description: 'Kontrollieren Sie die Live-UI-Vorschau samt WCAG 2.1 AA/AAA Wertung und kopieren Sie HEX, RGB, HSL, CMYK, OKLCH oder CSS-Code.',
      },
    ],
    whoUsesTitle: '5. Wer nutzt den PigmentLab Farben Mischen Simulator?',
    whoUsesIntro: 'Entwickelt für Künstler, Handwerker und digitale Produktteams:',
    personas: [
      {
        badge: 'Malerei & Atelier',
        title: 'Acryl-, Öl- & Aquarellmaler',
        description: 'Testen Sie Mischverhältnisse vorab digital, ohne teure Künstlerpigmente auf der Palette zu verschwenden.',
      },
      {
        badge: 'Frontend & UI/UX',
        title: 'Webdesigner & Tailwind-Entwickler',
        description: 'Generieren Sie CSS color-mix()-Formeln im OKLCH-Raum und prüfen Sie Textkontraste sofort nach WCAG 2.1.',
      },
      {
        badge: 'Raum & DIY',
        title: 'Maler, Bastler & Textilfärbung',
        description: 'Planen Sie Wandfarben-Rezepte, Erdtöne und Abtönmischungen anhand der übersichtlichen Mischtabelle.',
      },
      {
        badge: 'Lehre & Studium',
        title: 'Kunstlehrer & Designstudierende',
        description: 'Demonstrieren Sie anschaulich den Unterschied zwischen subtraktiver Pigmentabsorption und additivem Bildschirm-RGB.',
      },
    ],
    benefitsTitle: '6. Vorteile auf einen Blick',
    benefits: [
      'Realistische Kubelka-Munk Pigmentoptik statt trüber RGB-Durchschnitte (Blau + Gelb ergibt leuchtendes Grün).',
      'Vier integrierte Farbmodi: Echte Farbe (RYB), OKLCH, Digital RGB und CMYK-Druckfarben.',
      'Bis zu 6 frei mischbare Farb-Slots mit prozentgenauer Rezeptformel.',
      'Integrierte WCAG 2.1 AA/AAA Barrierefreiheitsprüfung auf hellem und dunklem Hintergrund.',
      '100% kostenlos, ohne Registrierung und vollständig lokal im Browser berechnet.',
    ],
    inlineLinkPrompt: 'Sie möchten harmonische Gegenfarben oder den exakten Komplementärton zum Abdunkeln finden?',
    inlineLinkText: 'Zum interaktiven Farbkreis nach Johannes Itten wechseln →',
    inlineLinkPath: '/color-wheel',
  },
  en: {
    howToTitle: '3. Step-by-Step: How to Mix Colors Online with Real Paint Physics',
    howToIntro: 'Follow these four steps to simulate physical pigment mixing and generate production CSS:',
    steps: [
      {
        title: 'Select a Blend Mode',
        description: 'Pick "Real Paint (RYB)" for Kubelka-Munk pigment absorption, "Modern Web (OKLCH)" for CSS color-mix(), or RGB/CMYK modes.',
      },
      {
        title: 'Load Pigments or Custom HEX Codes',
        description: 'Add up to 6 color slots, paste custom HEX codes, or load studio oil pigments like Phthalo Blue and Cadmium Yellow.',
      },
      {
        title: 'Dial Proportion Sliders (1%–100%)',
        description: 'Drag each slot slider to test exact ratios and watch the mixed swatch and parts recipe update instantaneously.',
      },
      {
        title: 'Validate WCAG Contrast & Export Code',
        description: 'Inspect the live UI component preview, check WCAG 2.1 AA/AAA scores, and copy HEX, RGB, HSL, CMYK, OKLCH, or CSS snippets.',
      },
    ],
    whoUsesTitle: '4. Who Uses the PigmentLab Online Color Mixer?',
    whoUsesIntro: 'Built for both physical studio artists and modern digital creators:',
    personas: [
      {
        badge: 'Fine Art',
        title: 'Oil, Acrylic & Watercolor Painters',
        description: 'Preview pigment mixtures and brown neutralization recipes digitally before squeezing paint onto your physical palette.',
      },
      {
        badge: 'Frontend & UI',
        title: 'UI Designers & CSS Engineers',
        description: 'Generate modern CSS color-mix(in oklch, ...) tokens and verify WCAG 2.1 AA/AAA legibility on white and dark surfaces.',
      },
      {
        badge: 'Print & Packaging',
        title: 'Print & Brand Specialists',
        description: 'Switch between RYB pigment mixing and CMYK ink behavior to anticipate how inks and spot colors combine.',
      },
      {
        badge: 'Education',
        title: 'Art Teachers & Design Students',
        description: 'Demonstrate why subtractive light absorption differs from additive RGB pixel averaging in live classroom demos.',
      },
    ],
    benefitsTitle: '5. Key Benefits of PigmentLab Mixer',
    benefits: [
      'True Kubelka-Munk optical modeling—Blue + Yellow yields vibrant emerald Green instead of muddy RGB grey.',
      'Four blend engines in one workspace: Real Paint (RYB), OKLCH, Linear RGB, and CMYK.',
      'Up to 6 weighted pigment slots with live recipe ratios and custom local presets.',
      'Built-in WCAG 2.1 AA/AAA contrast ratings and live UI button/card previews.',
      '100% browser-based, private, and free with zero account walls.',
    ],
    inlineLinkPrompt: 'Want to pick true complementary pairs to neutralize or shade your mixture?',
    inlineLinkText: 'Open the Johannes Itten Bauhaus Color Wheel →',
    inlineLinkPath: '/color-wheel',
  },
  fr: {
    howToTitle: '4. Étape par étape : réussir votre mélange de couleur en ligne',
    howToIntro: 'Suivez ces quatre étapes pour simuler des mélanges réalistes et exporter vos codes couleur :',
    steps: [
      {
        title: 'Choisir le mode de mélange',
        description: 'Sélectionnez « Peinture réelle (RYB) » pour l’optique soustractive Kubelka-Munk ou « Web moderne (OKLCH) » pour CSS color-mix().',
      },
      {
        title: 'Charger des pigments ou codes HEX',
        description: 'Ajoutez jusqu’à 6 couleurs, collez un code HEX ou cliquez sur des pigments d’artiste comme le Bleu Phtalo et le Jaune Cadmium.',
      },
      {
        title: 'Ajuster les proportions (1%–100%)',
        description: 'Faites glisser chaque curseur pour doser précisément la recette de peinture ou de teinture.',
      },
      {
        title: 'Vérifier le contraste WCAG et copier',
        description: 'Validez la lisibilité WCAG 2.1 AA/AAA et copiez instantanément les formats HEX, RGB, HSL, CMYK, OKLCH ou CSS.',
      },
    ],
    whoUsesTitle: '5. À qui s’adresse ce simulateur de mélange de couleurs ?',
    whoUsesIntro: 'Conçu pour la peinture physique comme pour le design numérique :',
    personas: [
      {
        badge: 'Beaux-Arts',
        title: 'Peintres acrylique, huile & aquarelle',
        description: 'Testez vos dosages de couleurs primaires et recettes pour obtenir du marron sans gaspiller de tube de peinture.',
      },
      {
        badge: 'Web & UI',
        title: 'Designers UI & Développeurs CSS',
        description: 'Créez des mélanges OKLCH avec CSS color-mix() et contrôlez le contraste WCAG sur fond clair ou sombre.',
      },
      {
        badge: 'Déco & Textile',
        title: 'Bricoleurs, teinturerie & décoration',
        description: 'Anticipez le rendu de mélanges pour peinture murale ou teinture vêtement grâce au modèle soustractif.',
      },
      {
        badge: 'Pédagogie',
        title: 'Enseignants & Étudiants en arts',
        description: 'Comparez en direct la synthèse soustractive des pigments à la synthèse additive des écrans RVB.',
      },
    ],
    benefitsTitle: '6. Points forts du simulateur PigmentLab',
    benefits: [
      'Physique optique Kubelka-Munk authentique : Bleu + Jaune produit un Vert éclatant.',
      '4 modes réunis : Peinture réelle (RYB), OKLCH, RVB numérique et CMYK.',
      'Jusqu’à 6 emplacements de pigments avec sauvegarde locale des préréglages.',
      'Contrôleur de contraste WCAG 2.1 AA/AAA et aperçu de composants UI en direct.',
      '100% gratuit, sans inscription et exécuté localement dans votre navigateur.',
    ],
    inlineLinkPrompt: 'Besoin de repérer les couleurs complémentaires exactes pour vos nuances ?',
    inlineLinkText: 'Explorer la roue chromatique de Johannes Itten →',
    inlineLinkPath: '/color-wheel',
  },
  pt: {
    howToTitle: '4. Passo a passo: como simular mistura de cores e gerar CSS',
    howToIntro: 'Veja como calcular proporções fiéis de tintas e códigos web em segundos:',
    steps: [
      {
        title: 'Escolha o modo de mistura',
        description: 'Selecione "Tinta Real (RYB)" para física subtrativa Kubelka-Munk ou "Web Moderna (OKLCH)" para CSS color-mix().',
      },
      {
        title: 'Adicione pigmentos ou códigos HEX',
        description: 'Use até 6 slots de cores, digite códigos HEX ou clique nos pigmentos clássicos como Azul Phthalo e Amarelo Cádmio.',
      },
      {
        title: 'Ajuste os controles de proporção',
        description: 'Deslize cada porcentagem de 1% a 100% para testar receitas exatas de mistura em tempo real.',
      },
      {
        title: 'Valide o contraste WCAG e exporte',
        description: 'Confira a prévia de componentes UI com pontuação WCAG 2.1 AA/AAA e copie HEX, RGB, HSL, CMYK, OKLCH ou CSS.',
      },
    ],
    whoUsesTitle: '5. Quem usa o simulador de mistura de cores PigmentLab?',
    whoUsesIntro: 'Ideal para ateliês de pintura, reformas e equipes de produto digital:',
    personas: [
      {
        badge: 'Pintura Artística',
        title: 'Artistas de tela, óleo e acrílica',
        description: 'Teste receitas com cores primárias e aprenda a dar marrom sem desperdiçar tinta na paleta.',
      },
      {
        badge: 'Tinta & Decoração',
        title: 'Pintores e projetos de parede',
        description: 'Planeje tonalidades neutras e combinações usando a tabela de mistura de cores de tintas para parede.',
      },
      {
        badge: 'UI & Frontend',
        title: 'Designers e Desenvolvedores Web',
        description: 'Gere código CSS color-mix() no espaço OKLCH e garanta acessibilidade WCAG 2.1 AA/AAA.',
      },
      {
        badge: 'Educação',
        title: 'Professores e estudantes de artes',
        description: 'Mostre na prática a diferença entre absorção subtrativa de pigmentos e média digital RGB.',
      },
    ],
    benefitsTitle: '6. Principais vantagens do simulador',
    benefits: [
      'Física óptica Kubelka-Munk realista: Azul + Amarelo resulta em Verde vibrante.',
      '4 motores no mesmo painel: Tinta Real (RYB), OKLCH, RGB digital e CMYK.',
      'Até 6 cores simultâneas com fórmula percentual ao vivo e predefinições locais.',
      'Verificação automática de contraste WCAG 2.1 AA/AAA em branco e preto.',
      '100% gratuito, sem login e processado diretamente no navegador.',
    ],
    inlineLinkPrompt: 'Quer encontrar cores complementares perfeitas para neutralizar ou harmonizar sua mistura?',
    inlineLinkText: 'Abrir o Círculo Cromático de Johannes Itten →',
    inlineLinkPath: '/color-wheel',
  },
  es: {
    howToTitle: '4. Paso a paso: cómo mezclar colores online con física real',
    howToIntro: 'Sigue estos cuatro pasos para simular pigmentos físicos y obtener códigos listos para producción:',
    steps: [
      {
        title: 'Selecciona el modo de mezcla',
        description: 'Elige «Pintura Real (RYB)» para óptica sustractiva Kubelka-Munk o «Web Moderna (OKLCH)» para CSS color-mix().',
      },
      {
        title: 'Carga pigmentos o códigos HEX',
        description: 'Añade hasta 6 colores, introduce valores HEX personalizados o haz clic en pigmentos clásicos como Azul Ftalocianina y Amarillo Cadmio.',
      },
      {
        title: 'Ajusta las proporciones (1%–100%)',
        description: 'Mueve los deslizadores para probar porcentajes exactos y ver la receta resultante en vivo.',
      },
      {
        title: 'Revisa el contraste WCAG y exporta',
        description: 'Comprueba la vista previa UI con notas WCAG 2.1 AA/AAA y copia HEX, RGB, HSL, CMYK, OKLCH o CSS.',
      },
    ],
    whoUsesTitle: '5. ¿Quién utiliza el simulador de mezcla de colores?',
    whoUsesIntro: 'Diseñado tanto para pintura tradicional como para diseño digital:',
    personas: [
      {
        badge: 'Bellas Artes',
        title: 'Pintores de óleo, acrílico y acuarela',
        description: 'Prueba proporciones y fórmulas para lograr marrón o verdes vivos antes de mezclar pintura real.',
      },
      {
        badge: 'Diseño Web & UI',
        title: 'Diseñadores UI y desarrolladores CSS',
        description: 'Genera código CSS color-mix() en OKLCH y valida legibilidad WCAG 2.1 AA/AAA al instante.',
      },
      {
        badge: 'Imprenta & Color',
        title: 'Diseñadores gráficos y de impresión',
        description: 'Alterna entre mezcla sustractiva RYB y modo CMYK para anticipar el comportamiento de tintas.',
      },
      {
        badge: 'Educación',
        title: 'Docentes y estudiantes de arte',
        description: 'Explica visualmente por qué los pigmentos absorben luz a diferencia de las pantallas RGB.',
      },
    ],
    benefitsTitle: '6. Ventajas clave de PigmentLab',
    benefits: [
      'Cálculo físico Kubelka-Munk auténtico: Azul + Amarillo genera Verde intenso en lugar de gris apagado.',
      'Cuatro modos integrados: Pintura Real (RYB), OKLCH, RGB de pantalla y CMYK.',
      'Hasta 6 colores mezclables simultáneamente con receta porcentual en vivo.',
      'Matriz de contraste WCAG 2.1 AA/AAA y previsualización de botones y tarjetas UI.',
      '100% gratuito, sin registro y procesado localmente en tu navegador.',
    ],
    inlineLinkPrompt: '¿Necesitas encontrar el color complementario exacto para neutralizar tu mezcla?',
    inlineLinkText: 'Explorar la Rueda de Color de Johannes Itten →',
    inlineLinkPath: '/color-wheel',
  },
  ru: {
    howToTitle: '4. Пошаговая инструкция: как смешать цвета онлайн и получить код',
    howToIntro: 'Выполните четыре простых шага для точного физического смешивания красок:',
    steps: [
      {
        title: 'Выберите режим смешивания',
        description: 'Используйте «Краски (RYB)» для физической модели Кубелки-Мунка или «Web (OKLCH)» для генерации CSS color-mix().',
      },
      {
        title: 'Выберите пигменты или HEX-коды',
        description: 'Добавьте до 6 слотов, введите свой HEX-код или выберите готовые художественные пигменты из палитры.',
      },
      {
        title: 'Настройте пропорции (1%–100%)',
        description: 'Передвигайте ползунки процентного соотношения, чтобы подобрать идеальную формулу оттенка.',
      },
      {
        title: 'Проверьте контраст WCAG и скопируйте код',
        description: 'Оцените вид оттенка в UI-компонентах с рейтингом WCAG 2.1 и скопируйте HEX, RGB, HSL, CMYK, OKLCH или CSS.',
      },
    ],
    whoUsesTitle: '5. Кому полезен симулятор смешивания цветов PigmentLab?',
    whoUsesIntro: 'Инструмент подходит для традиционного искусства, дизайна и веб-разработки:',
    personas: [
      {
        badge: 'Живопись',
        title: 'Художникам (масло, акрил, гуашь)',
        description: 'Подбирайте пропорции красок и рецепты коричневого заранее, экономя реальные пигменты на палитре.',
      },
      {
        badge: 'UI/UX и Frontend',
        title: 'Веб-дизайнерам и разработчикам',
        description: 'Создавайте плавные миксы в OKLCH через CSS color-mix() и сразу проверяйте читаемость по WCAG 2.1.',
      },
      {
        badge: 'Полиграфия',
        title: 'Дизайнерам печати и упаковки',
        description: 'Сравнивайте субтрактивное смешивание красок RYB и поведение печатных чернил CMYK.',
      },
      {
        badge: 'Обучение',
        title: 'Преподавателям и студентам',
        description: 'Наглядно сравнивайте физическое поглощение света пигментами с экранным сложением RGB.',
      },
    ],
    benefitsTitle: '6. Ключевые преимущества симулятора',
    benefits: [
      'Физическая оптика Кубелки-Мунка: Синий + Желтый дают сочный Зеленый вместо тускло-серого.',
      'Четыре движка смешивания: Реальные краски (RYB), OKLCH, экранный RGB и CMYK.',
      'До 6 цветовых слотов с точной формулой пропорций и сохранением своих пресетов.',
      'Встроенная проверка контрастности WCAG 2.1 AA/AAA на светлом и темном фоне.',
      'Полностью бесплатно, без регистрации и с обработкой данных локально в браузере.',
    ],
    inlineLinkPrompt: 'Хотите подобрать точный комплементарный оттенок или гармоничную палитру?',
    inlineLinkText: 'Открыть цветовой круг Иоганнеса Иттена →',
    inlineLinkPath: '/color-wheel',
  },
};

export const wheelModularGuide: Record<SupportedLanguage, ModularGuideCopy> = {
  de: {
    howToTitle: '5. Schritt-für-Schritt: Harmonie-Paletten im Farbkreis erstellen',
    howToIntro: 'So nutzen Sie den Johannes Itten Farbkreis für Design, Malerei und Barrierefreiheit:',
    steps: [
      {
        title: 'Farbkreis-Modell wählen (Itten RYB oder RGB)',
        description: 'Wechseln Sie per 1-Klick zwischen dem traditionellen Bauhaus-Künstlerkreis (Rot gegenüber Grün) und dem digitalen RGB-Farbrad.',
      },
      {
        title: 'Harmonieregel auswählen',
        description: 'Wählen Sie zwischen Komplementär, Analog, Triadisch, Tetradisch, Split-Komplementär oder Monochromatisch.',
      },
      {
        title: 'Basisfarbe am Rad drehen oder HEX eingeben',
        description: 'Ziehen Sie den Knoten direkt über das Farbrad oder stellen Sie Farbton, Sättigung, Helligkeit und Basis-HEX exakt ein.',
      },
      {
        title: 'Barrierefreiheit prüfen & Tokens exportieren',
        description: 'Testen Sie die Palette mit der WCAG 2.1 Kontrast-Matrix sowie dem Farbenblindheit-Simulator und exportieren Sie Tailwind v4, CSS oder SVG.',
      },
    ],
    whoUsesTitle: '6. Wer arbeitet mit dem PigmentLab Farbkreis?',
    whoUsesIntro: 'Optimiert für analoge Kunsttheorie und barrierefreies Interface-Design:',
    personas: [
      {
        badge: 'UI & Tailwind CSS',
        title: 'Webdesigner & Design-System-Teams',
        description: 'Exportieren Sie 9-Stufen-Skalen (50–900) als Tailwind CSS Tokens und validieren Sie WCAG AA/AAA Kontraste.',
      },
      {
        badge: 'Malerei & Bauhaus',
        title: 'Maler & Illustratoren',
        description: 'Nutzen Sie echte RYB-Gegenfarben nach Itten (Rot–Grün, Blau–Orange, Gelb–Violett) für lebendige Kompositionen.',
      },
      {
        badge: 'Barrierefreiheit',
        title: 'Accessibility-Prüfer (CVD)',
        description: 'Simulieren Sie Protanopie, Deuteranopie, Tritanopie und Achromatopsie in Echtzeit für inklusive Farbpaletten.',
      },
      {
        badge: 'Kunstunterricht',
        title: 'Lehrende & Studierende',
        description: 'Vergleichen Sie klassische Bauhaus-Farbharmonien direkt mit modernen digitalen RGB-Farbwinkeln.',
      },
    ],
    benefitsTitle: '7. Vorteile gegenüber herkömmlichen Farbrädern',
    benefits: [
      '1-Klick-Umschaltung zwischen klassischem Itten RYB Künstlerkreis und digitalem RGB-Rad.',
      'Alle 6 geometrischen Farbharmonien plus automatische 9-Stufen-Schattierungsskala (50–900).',
      'Integrierter Simulator für 4 Arten von Farbenblindheit sowie WCAG 2.1 Kontrastmatrix.',
      'Sofortiger Entwickler-Export für Tailwind CSS v4, CSS Custom Properties und SVG-Dateien.',
      '100% kostenlos ohne Adobe-Cloud-Zwang oder Anmeldung.',
    ],
    inlineLinkPrompt: 'Sie möchten zwei Harmoniefarben aus dem Farbkreis physikalisch miteinander vermischen?',
    inlineLinkText: 'Im subtraktiven Farben-Mischen-Simulator testen →',
    inlineLinkPath: '/mix',
  },
  en: {
    howToTitle: '5. Step-by-Step: How to Build Accessible Color Wheel Palettes',
    howToIntro: 'Create balanced Bauhaus or digital palettes with verified contrast in four quick steps:',
    steps: [
      {
        title: 'Toggle Artist RYB or Digital RGB',
        description: 'Switch between Johannes Itten’s 12-hue Bauhaus artist wheel (Red opposite Green) and the standard digital RGB wheel.',
      },
      {
        title: 'Pick a Geometric Harmony Rule',
        description: 'Select Complementary, Analogous, Triadic, Tetradic, Split-Complementary, or Monochromatic palette angles.',
      },
      {
        title: 'Rotate the Wheel or Enter a Base HEX',
        description: 'Drag the interactive canvas marker or dial exact Hue, Saturation, Lightness, and Base HEX controls.',
      },
      {
        title: 'Audit Accessibility & Export Tokens',
        description: 'Check WCAG 2.1 contrast scores, preview Protanopia/Deuteranopia/Tritanopia vision, and export Tailwind CSS, CSS vars, or SVG.',
      },
    ],
    whoUsesTitle: '6. Who Uses the PigmentLab Color Wheel Picker?',
    whoUsesIntro: 'Designed to bridge classic Bauhaus pedagogy and modern web engineering:',
    personas: [
      {
        badge: 'Product & UI',
        title: 'UI Designers & Tailwind Developers',
        description: 'Generate 9-step 50–900 shade ramps and copy production-ready Tailwind CSS theme tokens and CSS variables.',
      },
      {
        badge: 'Fine Art',
        title: 'Traditional Painters & Illustrators',
        description: 'Work with classical RYB opposites (Red–Green, Blue–Orange, Yellow–Purple) rather than screen-only RGB complements.',
      },
      {
        badge: 'Accessibility',
        title: 'A11y & Inclusive Design Teams',
        description: 'Verify WCAG 2.1 AA/AAA contrast ratios between palette pairs and inspect palettes under 4 color-blindness modes.',
      },
      {
        badge: 'Education',
        title: 'Design Educators & Students',
        description: 'Visually teach Itten’s 12-hue color circle, simultaneous contrast, and why RYB differs from additive RGB.',
      },
    ],
    benefitsTitle: '7. Key Benefits of PigmentLab Color Wheel',
    benefits: [
      'Dual-engine wheel: 1-click toggle between Johannes Itten RYB and digital RGB.',
      'Six classic color harmony modes with a clickable 9-step tint and shade scale.',
      'Real-time WCAG 2.1 contrast matrix and 4-mode color vision deficiency simulator.',
      'Direct exports for Tailwind CSS theme tokens, CSS :root variables, and SVG swatches.',
      'Completely free with local browser persistence and no Creative Cloud login required.',
    ],
    inlineLinkPrompt: 'Want to see how two complementary colors from your palette actually mix as real paint?',
    inlineLinkText: 'Test your palette in the Subtractive Color Mixer →',
    inlineLinkPath: '/mix',
  },
  fr: {
    howToTitle: '4. Étape par étape : créer une palette avec la roue chromatique',
    howToIntro: 'Composez des harmonies équilibrées et accessibles en quatre étapes simples :',
    steps: [
      {
        title: 'Choisir le modèle Itten (RYB) ou RGB',
        description: 'Basculez en 1 clic entre le cercle artistique du Bauhaus (Rouge opposé au Vert) et la roue numérique RVB.',
      },
      {
        title: 'Sélectionner une règle d’harmonie',
        description: 'Choisissez Complémentaire, Analogue, Triadique, Tétradique, Split-Complémentaire ou Monochromatique.',
      },
      {
        title: 'Ajuster la teinte sur le cercle',
        description: 'Faites pivoter le curseur sur le canevas interactif ou saisissez directement un code HEX de base.',
      },
      {
        title: 'Tester l’accessibilité et exporter',
        description: 'Vérifiez les ratios WCAG 2.1 et les simulations de daltonisme, puis exportez en Tailwind CSS, variables CSS ou SVG.',
      },
    ],
    whoUsesTitle: '5. Qui utilise cette roue chromatique en ligne ?',
    whoUsesIntro: 'Un outil pensé pour la création artistique, l’identité visuelle et le web :',
    personas: [
      {
        badge: 'Design UI & Dev',
        title: 'Webdesigners & Développeurs Frontend',
        description: 'Générez des gammes 50–900 et copiez instantanément vos tokens Tailwind CSS ou variables :root.',
      },
      {
        badge: 'Peinture & Arts',
        title: 'Artistes peintres & Illustrateurs',
        description: 'Exploitez les véritables complémentaires de Johannes Itten (Rouge–Vert, Bleu–Orange) pour vos tableaux.',
      },
      {
        badge: 'Accessibilité',
        title: 'Experts RGAA / WCAG',
        description: 'Contrôlez le contraste entre couleurs et testez la perception en protanopie, deutéranopie ou tritanopie.',
      },
      {
        badge: 'Enseignement',
        title: 'Écoles d’art & Étudiants',
        description: 'Illustrez facilement le cercle chromatique à 12 teintes et les lois du contraste simultané.',
      },
    ],
    benefitsTitle: '6. Pourquoi choisir PigmentLab plutôt qu’un sélecteur classique ?',
    benefits: [
      'Double moteur Itten RYB et RGB numérique en un seul clic.',
      '6 harmonies chromatiques accompagnées d’une échelle de 9 nuances prêtes à copier.',
      'Simulateur de daltonisme (4 profils) et matrice de contraste WCAG 2.1 intégrés.',
      'Export direct au format Tailwind CSS, variables CSS et palette SVG.',
      '100% gratuit, sans compte Adobe et avec sauvegarde locale automatique.',
    ],
    inlineLinkPrompt: 'Vous souhaitez voir ce que donne le mélange physique de deux teintes de votre palette ?',
    inlineLinkText: 'Ouvrir le simulateur de mélange de couleurs →',
    inlineLinkPath: '/mix',
  },
  pt: {
    howToTitle: '4. Passo a passo: como montar paletas no círculo cromático',
    howToIntro: 'Crie combinações harmônicas e acessíveis em quatro passos rápidos:',
    steps: [
      {
        title: 'Alterne entre Itten RYB e RGB Digital',
        description: 'Escolha em 1 clique o círculo artístico de Johannes Itten (Vermelho oposto ao Verde) ou o modelo digital de tela.',
      },
      {
        title: 'Selecione a regra de harmonia',
        description: 'Combine cores Complementares, Análogas, Triádicas, Tetrádicas, Meio-Complementares ou Monocromáticas.',
      },
      {
        title: 'Gire o marcador ou insira o HEX',
        description: 'Arraste o ponto no círculo interativo ou ajuste matiz, saturação, luminosidade e código HEX base.',
      },
      {
        title: 'Valide contraste WCAG e exporte',
        description: 'Teste a leitura na matriz WCAG 2.1, simule daltonismo e baixe em SVG, variáveis CSS ou Tailwind.',
      },
    ],
    whoUsesTitle: '5. Quem usa o círculo cromático online PigmentLab?',
    whoUsesIntro: 'Perfeito para moda, design digital, pintura e consultoria de estilo:',
    personas: [
      {
        badge: 'Moda & Colorimetria',
        title: 'Consultores de imagem e estilistas',
        description: 'Descubra combinações harmônicas precisas no círculo de Itten para looks, maquiagem e cartelas.',
      },
      {
        badge: 'UI & Tailwind CSS',
        title: 'Designers digitais e desenvolvedores',
        description: 'Gere escalas de 9 tons (50–900) e exporte variáveis CSS :root ou tokens Tailwind prontos.',
      },
      {
        badge: 'Acessibilidade',
        title: 'Equipes focadas em WCAG e inclusão',
        description: 'Simule Protanopia, Deuteranopia, Tritanopia e Acromatopsia antes de publicar qualquer paleta.',
      },
      {
        badge: 'Artes & Educação',
        title: 'Pintores, professores e estudantes',
        description: 'Compare visualmente as cores complementares tradicionais RYB com o espectro luminoso RGB.',
      },
    ],
    benefitsTitle: '6. Vantagens do círculo cromático PigmentLab',
    benefits: [
      'Alternância instantânea entre o círculo artístico de Itten (RYB) e RGB digital.',
      '6 modos de harmonia + escala automática de 9 tons claros e escuros.',
      'Matriz de contraste WCAG 2.1 e simulação de 4 tipos de daltonismo.',
      'Exportação direta para Tailwind CSS, variáveis CSS e arquivo SVG.',
      'Uso gratuito e imediato no navegador, sem cadastro ou assinatura.',
    ],
    inlineLinkPrompt: 'Quer testar como as cores escolhidas no círculo se misturam como tinta real?',
    inlineLinkText: 'Abrir o Simulador de Mistura de Cores →',
    inlineLinkPath: '/mix',
  },
  es: {
    howToTitle: '4. Paso a paso: cómo crear paletas en la rueda de color',
    howToIntro: 'Calcula combinaciones equilibradas y accesibles en cuatro pasos:',
    steps: [
      {
        title: 'Elige entre modo Itten RYB o RGB',
        description: 'Cambia con 1 clic entre el círculo artístico de Johannes Itten (Rojo frente a Verde) y la rueda digital RGB.',
      },
      {
        title: 'Selecciona una regla de armonía',
        description: 'Elige esquemas Complementarios, Análogos, Triádicos, Tetrádicos, Complementarios Divididos o Monocromáticos.',
      },
      {
        title: 'Gira la rueda o introduce un HEX',
        description: 'Arrastra el nodo interactivo o ajusta matiz, saturación, luminosidad y código HEX base.',
      },
      {
        title: 'Audita accesibilidad y exporta',
        description: 'Verifica la matriz WCAG 2.1, simula daltonismo y exporta en Tailwind CSS, variables CSS o SVG.',
      },
    ],
    whoUsesTitle: '5. ¿Quién utiliza la rueda de color online de PigmentLab?',
    whoUsesIntro: 'Diseñada para creadores visuales, artistas y equipos web:',
    personas: [
      {
        badge: 'Diseño UI & Dev',
        title: 'Diseñadores web y front-end',
        description: 'Obtén escalas de 9 matices (50–900) y copia tokens Tailwind CSS o variables :root listas para producción.',
      },
      {
        badge: 'Arte Tradicional',
        title: 'Pintores e ilustradores',
        description: 'Trabaja con los opuestos clásicos RYB de la Bauhaus (Rojo–Verde, Azul–Naranja) para composiciones naturales.',
      },
      {
        badge: 'Accesibilidad',
        title: 'Especialistas en diseño inclusivo',
        description: 'Prueba tu paleta bajo Protanopía, Deuteranopía, Tritanopía y Acromatopsia con cálculo WCAG 2.1.',
      },
      {
        badge: 'Enseñanza',
        title: 'Docentes y estudiantes de diseño',
        description: 'Compara en vivo las diferencias entre la rueda de color artística y la rueda digital de pantalla.',
      },
    ],
    benefitsTitle: '6. Por qué usar PigmentLab como alternativa profesional',
    benefits: [
      'Doble motor en 1 clic: rueda artística Itten RYB y rueda digital RGB.',
      '6 modos de armonía geométrica con escala de 9 tintes y sombras copiables.',
      'Simulador de daltonismo en 4 modos y matriz de contraste WCAG 2.1 integrada.',
      'Exportación instantánea a Tailwind CSS, variables CSS y paleta SVG.',
      '100% gratis, sin cuentas obligatorias y con guardado automático local.',
    ],
    inlineLinkPrompt: '¿Quieres comprobar qué color resulta al mezclar físicamente los tonos de tu paleta?',
    inlineLinkText: 'Probar en el Simulador de Mezcla de Colores →',
    inlineLinkPath: '/mix',
  },
  ru: {
    howToTitle: '4. Пошаговая инструкция: как подобрать палитру на цветовом круге',
    howToIntro: 'Соберите сбалансированную и доступную цветовую схему за четыре шага:',
    steps: [
      {
        title: 'Выберите модель круга (Иттен RYB или RGB)',
        description: 'Переключайтесь в 1 клик между классическим художественным кругом Иттена (Красный напротив Зеленого) и экранным RGB.',
      },
      {
        title: 'Укажите правило цветовой гармонии',
        description: 'Выберите комплементарную, аналоговую, триадную, тетрадную, сплит-комплементарную или монохромную схему.',
      },
      {
        title: 'Поверните маркер или введите HEX',
        description: 'Вращайте точку на круге или точно задавайте оттенок, насыщенность, светлоту и базовый HEX-код.',
      },
      {
        title: 'Проверьте контрастность и экспортируйте',
        description: 'Оцените показатели WCAG 2.1, режим симуляции дальтонизма и скачайте код для Tailwind CSS, CSS-переменных или SVG.',
      },
    ],
    whoUsesTitle: '5. Для кого создан цветовой круг PigmentLab?',
    whoUsesIntro: 'Универсальный инструмент для живописи, брендинга и веб-разработки:',
    personas: [
      {
        badge: 'UI/UX и Frontend',
        title: 'Веб-дизайнерам и разработчикам',
        description: 'Создавайте 9-ступенчатые шкалы оттенков (50–900) и сразу копируйте токены Tailwind CSS и CSS-переменные.',
      },
      {
        badge: 'Живопись',
        title: 'Художникам и иллюстраторам',
        description: 'Используйте классические противоположные пары RYB школы Баухаус для живых контрастных работ.',
      },
      {
        badge: 'Доступность (A11y)',
        title: 'Специалистам по инклюзивному дизайну',
        description: 'Проверяйте контраст по WCAG 2.1 и тестируйте палитру при 4 типах нарушения цветового зрения.',
      },
      {
        badge: 'Образование',
        title: 'Преподавателям и студентам',
        description: 'Наглядно сравнивайте художественный цветовой круг Иттена и цифровой спектр RGB.',
      },
    ],
    benefitsTitle: '6. Преимущества цветового круга PigmentLab',
    benefits: [
      'Два движка в одном клике: классический круг Иттена (RYB) и цифровой RGB.',
      '6 геометрических схем гармонии и шкала из 9 оттенков для каждого цвета.',
      'Матрица контрастности WCAG 2.1 и симулятор дальтонизма в реальном времени.',
      'Мгновенный экспорт в токены Tailwind CSS, CSS :root переменные и SVG.',
      'Полностью бесплатно, без регистрации и с сохранением настроек в браузере.',
    ],
    inlineLinkPrompt: 'Хотите проверить, как выбранные на круге цвета смешаются как реальные краски?',
    inlineLinkText: 'Перейти в симулятор смешивания цветов →',
    inlineLinkPath: '/mix',
  },
};

export interface AboutPageCopy {
  problemHeading: string;
  problemSubheading: string;
  rgbBadge: string;
  rgbTitle: string;
  rgbBody: string;
  kmBadge: string;
  kmTitle: string;
  kmBody: string;
}

export const aboutBodyContent: Record<SupportedLanguage, AboutPageCopy> = {
  de: {
    problemHeading: 'Das Problem mit herkömmlichen Farbtools',
    problemSubheading: 'Warum wirken digitale Farbwähler im Vergleich zu echten Öl-, Gouache- und Acrylfarben so künstlich?',
    rgbBadge: '✕ Lineares RGB-Mitteln',
    rgbTitle: 'Monitore emittieren Photonen (Licht)',
    rgbBody: 'Standard-Monitore strahlen Licht aus. Wer Blau (0, 0, 255) und Gelb (255, 255, 0) in Standardsoftware mischt, erhält mathematisch grauen Schlamm (#808080).',
    kmBadge: '✓ PigmentLab Subtraktive Physik',
    kmTitle: 'Kubelka-Munk Spektralabsorption',
    kmBody: 'Echte Farbpigmente absorbieren (verschlucken) Lichtteilchen. PigmentLab simuliert diesen Vorgang exakt: Blau und Gelb ergeben strahlendes Grün!',
  },
  en: {
    problemHeading: 'The Problem with Standard Digital Color Tools',
    problemSubheading: 'Why do digital color pickers feel so artificial compared to real oils, gouache, and acrylics?',
    rgbBadge: '✕ Standard RGB Averaging',
    rgbTitle: 'Linear RGB Math (Light Emitted)',
    rgbBody: 'Standard computer monitors emit photons. When you mix Blue (0, 0, 255) and Yellow (255, 255, 0) in traditional software, the mathematical average lands on dull grey (#808080).',
    kmBadge: '✓ PigmentLab Subtractive Physics',
    kmTitle: 'Kubelka-Munk Spectral Absorption',
    kmBody: 'Physical pigments absorb specific wavelengths of light. PigmentLab simulates this subtractive behavior, producing luminous emerald green when blending Blue and Yellow.',
  },
  fr: {
    problemHeading: 'Le problème des outils couleur numériques classiques',
    problemSubheading: 'Pourquoi les sélecteurs numériques paraissent-ils artificiels face aux vraies peintures à l’huile, gouache ou acrylique ?',
    rgbBadge: '✕ Moyenne RVB linéaire',
    rgbTitle: 'Les écrans émettent de la lumière',
    rgbBody: 'Les moniteurs émettent des photons. En mélangeant Bleu (0, 0, 255) et Jaune (255, 255, 0) dans un logiciel classique, la moyenne arithmétique donne un gris terne (#808080).',
    kmBadge: '✓ Physique soustractive PigmentLab',
    kmTitle: 'Absorption spectrale de Kubelka-Munk',
    kmBody: 'Les pigments physiques absorbent certaines longueurs d’onde. PigmentLab modélise cette optique soustractive pour produire un vert émeraude éclatant à partir du Bleu et du Jaune.',
  },
  pt: {
    problemHeading: 'O problema das ferramentas digitais tradicionais de cor',
    problemSubheading: 'Por que os seletores digitais parecem artificiais quando comparados a tintas reais de óleo, guache ou acrílica?',
    rgbBadge: '✕ Média linear RGB',
    rgbTitle: 'Monitores emitem luz (modelo aditivo)',
    rgbBody: 'Telas de computador emitem fótons. Ao misturar Azul (0, 0, 255) e Amarelo (255, 255, 0) em editores comuns, a média matemática resulta em cinza opaco (#808080).',
    kmBadge: '✓ Física subtrativa PigmentLab',
    kmTitle: 'Absorção espectral de Kubelka-Munk',
    kmBody: 'Pigmentos físicos absorvem comprimentos de onda específicos da luz. A PigmentLab simula essa absorção subtrativa, gerando um verde esmeralda vivo ao unir Azul e Amarelo.',
  },
  es: {
    problemHeading: 'El problema de las herramientas digitales de color convencionales',
    problemSubheading: '¿Por qué los selectores digitales resultan artificiales frente a los óleos, acrílicos y acuarelas reales?',
    rgbBadge: '✕ Promedio lineal RGB',
    rgbTitle: 'Las pantallas emiten fotones (luz)',
    rgbBody: 'Los monitores convencionales suman luz. Cuando mezclas Azul (0, 0, 255) y Amarillo (255, 255, 0) en software tradicional, el promedio matemático produce un gris apagado (#808080).',
    kmBadge: '✓ Física sustractiva PigmentLab',
    kmTitle: 'Absorción espectral de Kubelka-Munk',
    kmBody: 'Los pigmentos físicos absorben longitudes de onda concretas. PigmentLab simula este comportamiento sustractivo para generar un verde esmeralda vibrante al mezclar Azul y Amarillo.',
  },
  ru: {
    problemHeading: 'В чем проблема обычных цифровых инструментов цвета',
    problemSubheading: 'Почему экранные палитры ведут себя неестественно по сравнению с настоящими масляными, гуашевыми и акриловыми красками?',
    rgbBadge: '✕ Линейное усреднение RGB',
    rgbTitle: 'Мониторы излучают свет (аддитивная модель)',
    rgbBody: 'Обычные дисплеи складывают световые каналы. При смешивании Синего (0, 0, 255) и Желтого (255, 255, 0) в стандартных редакторах математическое среднее дает тусклый серый (#808080).',
    kmBadge: '✓ Субтрактивная физика PigmentLab',
    kmTitle: 'Спектральное поглощение Кубелки-Мунка',
    kmBody: 'Реальные пигменты поглощают определенные длины волн света. PigmentLab точно моделирует этот процесс, позволяя получить чистый изумрудно-зеленый из Синего и Желтого.',
  },
};

