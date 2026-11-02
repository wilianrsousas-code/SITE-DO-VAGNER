/**
 * CONFIGURAÇÃO CENTRAL — VAGNER COSTA | SOLUÇÕES IMOBILIÁRIAS
 * CRECI 270 543-F · WhatsApp (11) 93342-7170
 */

export interface PropertyCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  whatsappMessage: string;
}

export interface PriceCondition {
  label: string;
  originalPrice?: string;
  price: string;
  detail: string;
}

export interface DevelopmentGalleryImage {
  src: string;
  label: string;
  category: string;
}

export interface DevelopmentItem {
  id: string;
  name: string;
  line: "longitude" | "franco-da-rocha";
  builder: string;
  region: string;
  badge: string;
  priceHighlight: string;
  conditionSummary: string;
  description: string;
  conditions: PriceCondition[];
  highlights: string[];
  programTags: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  gallery?: DevelopmentGalleryImage[];
  whatsappMessage: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    roleTitle: string;
    concept: string;
    motto: string;
    fullTitle: string;
    creci: string;
    locationLabel: string;
    logoFullSrc: string;
    logoEmblemSrc: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDisplay: string;
    defaultWhatsappMessage: string;
    instagramUrl: string;
    instagramHandle: string;
    email: string;
  };
  professionalInfo: {
    registrationLabel: string;
    serviceNote: string;
  };
  hero: {
    mottoHeadline: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    portraitImageSrc: string;
    portraitImageAlt: string;
    portraitCaption: string;
  };
  categoriesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: PropertyCategory[];
  };
  developmentsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: DevelopmentItem[];
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    secondParagraph: string;
    portraitImageSrc: string;
    portraitImageAlt: string;
    portraitCaption: string;
  };
  journey: {
    kicker: string;
    title: string;
    steps: JourneyStep[];
  };
  finalCta: {
    kicker: string;
    headline: string;
    description: string;
    buttonLabel: string;
  };
  footer: {
    disclaimer: string;
    copyrightYear: number;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "VAGNER COSTA",
    shortName: "Vagner Costa",
    roleTitle: "CORRETOR DE IMÓVEIS",
    concept: "SOLUÇÕES IMOBILIÁRIAS",
    motto: "Realizando sonhos, construindo histórias.",
    fullTitle: "VAGNER COSTA | CORRETOR DE IMÓVEIS",
    creci: "CRECI 270 543-F",
    locationLabel: "São Paulo e Região Metropolitana",
    logoFullSrc: "/images/vagner-costa-logo.png",
    logoEmblemSrc: "/images/vagner-costa-emblem.png",
  },

  contact: {
    whatsappNumber: "5511933427170",
    whatsappDisplay: "(11) 93342-7170",
    defaultWhatsappMessage:
      "Olá, Vagner! Visitei seu site e gostaria de fazer uma simulação e conhecer as opções de imóveis.",
    instagramUrl:
      "https://www.instagram.com/vagner_costa_corretor?rpxt=MTR6dmN1eTRtNDM1MQ==",
    instagramHandle: "@vagner_costa_corretor",
    email: "ebenezer@contato.com.br",
  },

  professionalInfo: {
    registrationLabel: "Vagner Costa · Corretor de Imóveis · CRECI 270 543-F",
    serviceNote:
      "Casas na planta · Casas prontas · Apartamentos na planta · Apartamentos prontos",
  },

  hero: {
    mottoHeadline: "Seu próximo endereço merece uma boa conversa.",
    headline: "Realizando sonhos, construindo histórias.",
    subtitle:
      "Consultoria imobiliária dedicada para você conquistar casas na planta, casas prontas, apartamentos na planta e apartamentos prontos com condições claras e simulação personalizada.",
    primaryCta: "FAZER UMA SIMULAÇÃO NO WHATSAPP",
    secondaryCta: "VER EMPREENDIMENTOS",
    portraitImageSrc: "/images/vagner-costa-portrait.png",
    portraitImageAlt: "Vagner Costa — Corretor de Imóveis",
    portraitCaption: "Vagner Costa · Corretor de Imóveis",
  },

  categoriesSection: {
    kicker: "ATUAÇÃO IMOBILIÁRIA",
    title: "Soluções completas para morar ou investir.",
    subtitle:
      "Atendimento direto com Vagner Costa para encontrar o imóvel ideal de acordo com o seu planejamento familiar e financeiro.",
    items: [
      {
        id: "casas-na-planta",
        number: "01",
        title: "Casas na Planta",
        subtitle: "Planejamento e valorização",
        description:
          "Projetos residenciais com condições facilitadas durante o período de obras para planejar sua mudança com tranquilidade.",
        whatsappMessage:
          "Olá, Vagner! Vi seu site e gostaria de conhecer as opções de CASAS NA PLANTA.",
      },
      {
        id: "casas-prontas",
        number: "02",
        title: "Casas Prontas",
        subtitle: "Mudança com praticidade",
        description:
          "Imóveis prontos para morar, ideais para quem busca espaço, privacidade e definição imediata do novo lar.",
        whatsappMessage:
          "Olá, Vagner! Vi seu site e gostaria de conhecer as opções de CASAS PRONTAS.",
      },
      {
        id: "apartamentos-na-planta",
        number: "03",
        title: "Apartamentos na Planta",
        subtitle: "Financiamento e lazer",
        description:
          "Lançamentos e empreendimentos em construção pelo programa Minha Casa Minha Vida (CAIXA), com opções com e sem varanda e studios.",
        whatsappMessage:
          "Olá, Vagner! Vi seu site e gostaria de conhecer as opções de APARTAMENTOS NA PLANTA.",
      },
      {
        id: "apartamentos-prontos",
        number: "04",
        title: "Apartamentos Prontos",
        subtitle: "Conforto e conveniência",
        description:
          "Unidades prontas em condomínios estruturados para visitar, aprovar o financiamento e programar sua mudança.",
        whatsappMessage:
          "Olá, Vagner! Vi seu site e gostaria de conhecer as opções de APARTAMENTOS PRONTOS.",
      },
    ],
  },

  developmentsSection: {
    kicker: "PORTFÓLIO DE EMPREENDIMENTOS",
    title: "Oportunidades selecionadas para você.",
    subtitle:
      "Clique em qualquer empreendimento abaixo para visualizar os detalhes, condições de compra e solicitar sua simulação personalizada com Vagner Costa.",
    items: [
      {
        id: "longitude-estacao-freguesia",
        name: "Longitude | Estação Freguesia",
        line: "longitude",
        builder: "Longitude",
        region: "Freguesia · São Paulo, SP",
        badge: "Esquenta Blue Friday",
        priceHighlight: "A partir de R$ 209 mil",
        conditionSummary: "Opções sem varanda (R$ 209 mil / R$ 215 mil) e com varanda (R$ 219 mil)",
        description:
          "Empreendimento residencial Longitude | Estação Freguesia com condições especiais de campanha e enquadramento no programa Minha Casa Minha Vida (CAIXA) — HIS 1 e 2. Excelente oportunidade com opções de plantas com e sem varanda.",
        conditions: [
          {
            label: "Unidade sem varanda (1ª condição)",
            originalPrice: "de R$ 219 mil",
            price: "R$ 209 mil",
            detail: "Sem varanda · Condição promocional",
          },
          {
            label: "Unidade sem varanda (2ª condição)",
            originalPrice: "de R$ 229 mil",
            price: "R$ 215 mil",
            detail: "Sem varanda · Condição promocional",
          },
          {
            label: "Unidade com varanda",
            originalPrice: "de R$ 229 mil",
            price: "R$ 219 mil",
            detail: "Com varanda · Condição promocional",
          },
        ],
        highlights: [
          "Financiamento pelo programa Minha Casa Minha Vida (CAIXA)",
          "Enquadramento HIS 1 e HIS 2 (Habitação de Interesse Social — Prefeitura de São Paulo)",
          "Opções de unidades sem varanda e com varanda",
          "Descontos especiais de tabela (de R$ 219 mil por R$ 209 mil)",
        ],
        programTags: ["Minha Casa Minha Vida", "CAIXA", "HIS 1 e 2"],
        imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.38.57__1__ba228cae.jpeg",
        imageAlt: "Empreendimento Longitude Estação Freguesia — A partir de R$ 209 mil",
        imagePosition: "object-center",
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento LONGITUDE | ESTAÇÃO FREGUESIA (a partir de R$ 209 mil) e gostaria de fazer uma simulação.",
      },
      {
        id: "longitude-tiete",
        name: "Longitude Tietê",
        line: "longitude",
        builder: "Longitude",
        region: "Tietê · São Paulo, SP",
        badge: "Esquenta Blue Friday",
        priceHighlight: "Studios R$ 189 mil · Aptos R$ 229 mil",
        conditionSummary: "Studios Mód 1 por R$ 189 mil e apartamentos sem varanda por R$ 229 mil",
        description:
          "O Longitude Tietê reúne praticidade urbana e condições diferenciadas pelo Minha Casa Minha Vida (CAIXA) — HIS 2. Conta com Studios (Mód 1) por R$ 189 mil e unidades residenciais sem varanda de R$ 244 mil por R$ 229 mil.",
        conditions: [
          {
            label: "Studios Mód 1",
            price: "R$ 189 mil",
            detail: "Ideal para moradia prática ou investimento",
          },
          {
            label: "Apartamento sem varanda",
            originalPrice: "de R$ 244 mil",
            price: "R$ 229 mil",
            detail: "Desconto de R$ 15 mil na campanha",
          },
        ],
        highlights: [
          "Studios Mód 1 a partir de R$ 189 mil",
          "Apartamentos sem varanda de R$ 244 mil por R$ 229 mil",
          "Financiamento CAIXA — Minha Casa Minha Vida",
          "Unidades de Habitação de Interesse Social (HIS 2 — São Paulo)",
        ],
        programTags: ["Minha Casa Minha Vida", "CAIXA", "HIS 2"],
        imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.38.57__2__0b804795.jpeg",
        imageAlt: "Empreendimento Longitude Tietê — Studios R$ 189 mil e Apartamentos R$ 229 mil",
        imagePosition: "object-center",
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento LONGITUDE TIETÊ (Studios R$ 189 mil / Aptos R$ 229 mil) e gostaria de fazer uma simulação.",
      },
      {
        id: "longitude-rio-branco",
        name: "Longitude Rio Branco",
        line: "longitude",
        builder: "Longitude",
        region: "Rio Branco · São Paulo, SP",
        badge: "Financiamento 100%",
        priceHighlight: "Unidades por R$ 249 mil",
        conditionSummary: "Compra sem entrada com possibilidade de financiamento 100%",
        description:
          "O Longitude Rio Branco destaca-se pela condição especial de unidades promocionais por R$ 249 mil, oferecendo possibilidade de compra sem entrada com financiamento 100% pelo programa Minha Casa Minha Vida (CAIXA — HIS 1 e 2).",
        conditions: [
          {
            label: "Unidades Promocionais",
            price: "R$ 249 mil",
            detail: "Compra sem entrada com financiamento 100% (*consulte condições)",
          },
        ],
        highlights: [
          "Possibilidade de compra sem entrada com financiamento 100%",
          "Unidades promocionais por R$ 249 mil",
          "Financiamento Minha Casa Minha Vida — CAIXA",
          "Enquadramento HIS 1 e 2 — Prefeitura de São Paulo",
        ],
        programTags: ["Sem Entrada · 100% Financiado", "Minha Casa Minha Vida", "HIS 1 e 2"],
        imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.38.57_0ca626b0.jpeg",
        imageAlt: "Empreendimento Longitude Rio Branco — Unidades por R$ 249 mil sem entrada",
        imagePosition: "object-center",
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento LONGITUDE RIO BRANCO (R$ 249 mil com opção de compra sem entrada) e gostaria de fazer uma simulação.",
      },
      {
        id: "longitude-estacao-tucuruvi",
        name: "Longitude | Estação Tucuruvi",
        line: "longitude",
        builder: "Longitude",
        region: "Tucuruvi · Zona Norte, SP",
        badge: "Esquenta Blue Friday",
        priceHighlight: "Studios a partir de R$ 209 mil",
        conditionSummary: "Localização estratégica no Tucuruvi com financiamento CAIXA (HIS 1 / HMP)",
        description:
          "Localizado na região do Tucuruvi, o Longitude | Estação Tucuruvi oferece studios a partir de R$ 209 mil com excelente potencial de mobilidade e valorização, contando com financiamento CAIXA pelo Minha Casa Minha Vida (HIS 1 e HMP).",
        conditions: [
          {
            label: "Studios",
            price: "A partir de R$ 209 mil",
            detail: "Condição especial de campanha (*consulte condições)",
          },
        ],
        highlights: [
          "Studios a partir de R$ 209 mil na Zona Norte (Tucuruvi)",
          "Financiamento Minha Casa Minha Vida — CAIXA",
          "Enquadramento HIS 1 e HMP — Prefeitura de São Paulo",
          "Ideal para morar próximo à estação ou investir",
        ],
        programTags: ["Minha Casa Minha Vida", "CAIXA", "HIS 1 · HMP"],
        imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.38.58__1__affe1269.jpeg",
        imageAlt: "Empreendimento Longitude Estação Tucuruvi — Studios a partir de R$ 209 mil",
        imagePosition: "object-center",
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento LONGITUDE | ESTAÇÃO TUCURUVI (Studios a partir de R$ 209 mil) e gostaria de fazer uma simulação.",
      },
      {
        id: "longitude-citta",
        name: "Longitude Città",
        line: "longitude",
        builder: "Longitude",
        region: "São Paulo, SP",
        badge: "Parcelamento em 60x",
        priceHighlight: "A partir de R$ 199 mil",
        conditionSummary: "Unidades a partir de R$ 199 mil com parcelamento em até 60x",
        description:
          "O Longitude Città oferece uma das condições mais acessíveis da campanha: unidades a partir de R$ 199 mil e facilidade de parcelamento em até 60x, com financiamento CAIXA pelo programa Minha Casa Minha Vida (HIS 1, HIS 2 e HMP).",
        conditions: [
          {
            label: "Unidades Residenciais",
            price: "A partir de R$ 199 mil",
            detail: "Parcelamento facilitado em até 60x (*consulte condições)",
          },
        ],
        highlights: [
          "Unidades a partir de R$ 199 mil",
          "Condição especial com parcelamento em até 60x",
          "Financiamento CAIXA — Minha Casa Minha Vida",
          "Enquadramento HIS 1, HIS 2 e HMP — Prefeitura de São Paulo",
        ],
        programTags: ["Parcelamento em 60x", "Minha Casa Minha Vida", "HIS 1 e 2 · HMP"],
        imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.38.58_4e87baf2.jpeg",
        imageAlt: "Empreendimento Longitude Città — Unidades a partir de R$ 199 mil com parcelamento em 60x",
        imagePosition: "object-center",
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento LONGITUDE CITTÀ (a partir de R$ 199 mil com parcelamento em 60x) e gostaria de fazer uma simulação.",
      },
      {
        id: "eco-vic-horizonte",
        name: "Eco Vic Horizonte",
        line: "franco-da-rocha",
        builder: "VIC",
        region: "Vila Santista · Franco da Rocha, SP",
        badge: "Lançamento",
        priceHighlight: "Varanda ou Área Privativa",
        conditionSummary: "Condomínio fechado com piscina e 13 itens de lazer perto do Centro e Estação",
        description:
          "Localizado na Av. Pref. Ângelo Celeguim, 1170 (Vila Santista, Franco da Rocha), próximo ao centro, estação de trem e shopping. Condomínio fechado com portaria por biometria, vagas demarcadas e lazer completo entregue decorado e mobiliado.",
        conditions: [
          {
            label: "Apartamento Tipo e Térreo",
            price: "Consulte simulação",
            detail: "Opções com varanda ou área privativa (garden)",
          },
        ],
        highlights: [
          "Opção de varanda e opção de área privativa",
          "Preparação para ar-condicionado no quarto de casal e tomada USB na sala",
          "Bancada da cozinha em granito com cuba em inox e janelas em veneziana",
          "Lazer completo: Piscina, Espaço Gourmet, Salão de Festas, Salão de Jogos, Fitness, Pet Place, Redário e Playground",
        ],
        programTags: ["Franco da Rocha", "Lazer Completo", "Portaria com Biometria"],
        imageSrc: "/images/vic/horizonte/lazer-geral.webp",
        imageAlt: "Empreendimento Eco Vic Horizonte em Franco da Rocha",
        imagePosition: "object-center",
        gallery: [
          {
            src: "/images/vic/horizonte/lazer-geral.webp",
            label: "Implantação e Lazer Geral",
            category: "Perspectiva",
          },
          {
            src: "/images/vic/horizonte/fachada-diurna.webp",
            label: "Fachada Diurna",
            category: "Fachada",
          },
          {
            src: "/images/vic/horizonte/fachada-noturna.webp",
            label: "Fachada Noturna",
            category: "Fachada",
          },
          {
            src: "/images/vic/horizonte/portaria.webp",
            label: "Portaria com Biometria",
            category: "Conceito & Acesso",
          },
          {
            src: "/images/vic/horizonte/piscina.webp",
            label: "Piscina Adulto e Infantil",
            category: "Lazer",
          },
          {
            src: "/images/vic/horizonte/espaco-gourmet.webp",
            label: "Espaço Gourmet",
            category: "Lazer",
          },
          {
            src: "/images/vic/horizonte/salao-de-festas.webp",
            label: "Salão de Festas",
            category: "Lazer",
          },
          {
            src: "/images/vic/horizonte/espaco-fitness.webp",
            label: "Espaço Fitness",
            category: "Lazer",
          },
          {
            src: "/images/vic/horizonte/planta-tipo.webp",
            label: "Planta Tipo com Varanda",
            category: "Planta",
          },
          {
            src: "/images/vic/horizonte/planta-terreo.webp",
            label: "Planta Térreo com Área Privativa",
            category: "Planta",
          },
        ],
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento ECO VIC HORIZONTE em Franco da Rocha e gostaria de fazer uma simulação.",
      },
      {
        id: "eco-vic-panorama",
        name: "Eco Vic Panorama",
        line: "franco-da-rocha",
        builder: "VIC",
        region: "Vila Olinda · Franco da Rocha, SP",
        badge: "Obras Avançadas",
        priceHighlight: "Plantas de 47,22 m² a 55,16 m²",
        conditionSummary: "Apartamentos com varanda, quadra esportiva, piscina e lazer mobiliado",
        description:
          "Localizado na Rua Campos Sales, S/N (Vila Olinda, Franco da Rocha), o Eco Vic Panorama oferece apartamentos de 47,22 m² a 55,16 m² com varanda, preparação para ar-condicionado no quarto de casal e áreas de lazer entregues mobiliadas e decoradas.",
        conditions: [
          {
            label: "Apartamentos com Varanda",
            price: "47,22 m² a 55,16 m²",
            detail: "Obras em estágio avançado · Consulte condições de financiamento",
          },
        ],
        highlights: [
          "Apartamentos amplos de 47,22 m² a 55,16 m² com varanda",
          "Acesso por biometria digital na portaria e na entrada das torres",
          "Preparação para ar-condicionado no quarto de casal e tomada USB na sala",
          "Lazer completo: Piscina, Quadra Esportiva, Espaço Gourmet, Salão de Festas, Fitness, Playground e Pet Place",
        ],
        programTags: ["Franco da Rocha", "47 m² a 55 m²", "Com Varanda"],
        imageSrc: "/images/vic/panorama/lazer-geral.webp",
        imageAlt: "Empreendimento Eco Vic Panorama em Franco da Rocha",
        imagePosition: "object-center",
        gallery: [
          {
            src: "/images/vic/panorama/lazer-geral.webp",
            label: "Implantação do Lazer",
            category: "Perspectiva",
          },
          {
            src: "/images/vic/panorama/fachada-diurna.webp",
            label: "Fachada Diurna",
            category: "Fachada",
          },
          {
            src: "/images/vic/panorama/fachada-noturna.webp",
            label: "Fachada Noturna",
            category: "Fachada",
          },
          {
            src: "/images/vic/panorama/portaria-conceito.webp",
            label: "Portaria (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/piscina-conceito.webp",
            label: "Piscina (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/quadra-conceito.webp",
            label: "Quadra Esportiva (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/espaco-gourmet-conceito.webp",
            label: "Espaço Gourmet (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/salao-de-festa-conceito.webp",
            label: "Salão de Festas (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/espaco-fitness-conceito.webp",
            label: "Espaço Fitness (Imagem Conceitual)",
            category: "Conceito",
          },
          {
            src: "/images/vic/panorama/piscina.webp",
            label: "Piscina Adulto e Infantil",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/quadra.webp",
            label: "Quadra Esportiva",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/espaco-gourmet.webp",
            label: "Espaço Gourmet",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/salao-de-festas.webp",
            label: "Salão de Festas",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/fitness.webp",
            label: "Espaço Fitness",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/playground.webp",
            label: "Playground",
            category: "Lazer",
          },
          {
            src: "/images/vic/panorama/decorado-sala.jpg",
            label: "Sala e Cozinha do Decorado",
            category: "Decorado",
          },
          {
            src: "/images/vic/panorama/decorado-quarto.jpg",
            label: "Quarto de Casal do Decorado",
            category: "Decorado",
          },
          {
            src: "/images/vic/panorama/planta-tipo.webp",
            label: "Planta Tipo (47,22 m² a 55,16 m²)",
            category: "Planta",
          },
          {
            src: "/images/vic/panorama/implantacao.webp",
            label: "Implantação Geral do Condomínio",
            category: "Planta",
          },
        ],
        whatsappMessage:
          "Olá, Vagner! Vi no seu site o empreendimento ECO VIC PANORAMA (47,22 m² a 55,16 m²) em Franco da Rocha e gostaria de fazer uma simulação.",
      },
    ],
  },

  about: {
    kicker: "ATENDIMENTO PERSONALIZADO",
    title: "Uma conversa pode transformar seus próximos passos.",
    description:
      "Cada conquista começa com uma decisão segura. Vagner Costa atua na apresentação das melhores oportunidades em casas e apartamentos — na planta ou prontos — com simulações claras e acompanhamento completo em cada etapa.",
    secondParagraph:
      "Trabalhando com empreendimentos de grandes construtoras como Longitude e VIC em São Paulo e Franco da Rocha, o foco é encontrar a condição de pagamento e a localização que realmente fazem sentido para você.",
    portraitImageSrc: "/images/vagner-costa-portrait.png",
    portraitImageAlt: "Vagner Costa — Soluções Imobiliárias",
    portraitCaption: "Vagner Costa · Corretor de Imóveis",
  },

  journey: {
    kicker: "COMO FUNCIONA",
    title: "Da primeira conversa às chaves do seu imóvel.",
    steps: [
      {
        number: "01",
        title: "ESCOLHER",
        description:
          "Explore os empreendimentos disponíveis e identifique a região, metragem e faixa de valor ideais para você.",
      },
      {
        number: "02",
        title: "SIMULAR",
        description:
          "Chame o Vagner no WhatsApp para simular parcelas, subsídios do Minha Casa Minha Vida e condições de entrada para o seu perfil.",
      },
      {
        number: "03",
        title: "CONQUISTAR",
        description:
          "Receba orientação em cada etapa de aprovação junto à CAIXA e assine seu contrato com total segurança.",
      },
    ],
  },

  finalCta: {
    kicker: "SIMULAÇÃO SEM COMPROMISSO · FALE COM VAGNER",
    headline: "O próximo capítulo começa com uma escolha.",
    description:
      "Fale diretamente com Vagner Costa, faça uma simulação personalizada e descubra qual empreendimento oferece a melhor condição para o seu momento.",
    buttonLabel: "ME CHAME NO WHATSAPP · FAZER SIMULAÇÃO",
  },

  footer: {
    disclaimer:
      "Página oficial de atendimento e consultoria imobiliária de Vagner Costa. Valores e condições sujeitos à disponibilidade de unidades e análise de crédito.",
    copyrightYear: new Date().getFullYear(),
  },
};

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
