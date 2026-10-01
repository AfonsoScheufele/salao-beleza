/** Conteúdo editável do site — altere aqui nome, contatos e imagens. */

/**
 * URL pública do site (sem barra no final).
 * Padrão: deploy na Vercel. Sobrescreva com VITE_SITE_URL se mudar.
 */
export const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://salao-beleza.vercel.app'

export const site = {
  /** Nome curto (wordmark) */
  name: 'Charme & Beleza',
  /** Nome completo da fachada */
  fullName: 'Salão Charme & Beleza',
  category: 'Salão de Beleza',
  tagline: 'Atendimento personalizado, com técnica e carinho.',
  heroHeadline: 'Seu momento de brilhar',
  heroSupport:
    'Cortes, coloração e tratamentos feitos sob medida, com o cuidado de quem ama o que faz.',
  /** Descrição para Google / compartilhamento */
  seoDescription:
    'Salão Charme & Beleza — Virlene, em Concórdia/SC. Cortes, coloração e tratamentos. Agende pelo WhatsApp.',
  /** Imagem de compartilhamento (Open Graph) — caminho absoluto no site */
  ogImage: '/images/hero-01.jpg',
  whatsapp: {
    display: '(49) 98815-7650',
    e164: '5549988157650',
  },
  phone: {
    display: '(49) 99807-7487',
    e164: '5549998077487',
  },
  email: 'contato@charmeebeleza.exemplo',
  instagram: '#', // troque pelo @ quando tiver
  address: {
    line: 'R. Augusto Sette, 306 — Industriários',
    city: 'Concórdia - SC',
    locality: 'Concórdia',
    region: 'SC',
    cep: '89705-056',
    mapsQuery: 'R. Augusto Sette, 306, Industriários, Concórdia - SC, 89705-056',
  },
  hours: [
    { days: 'Segunda a Sexta', time: '09h – 19h' },
    { days: 'Sábado', time: '09h – 17h' },
    { days: 'Domingo', time: 'Fechado' },
  ],
} as const

export const whatsappUrl = (text?: string) => {
  const base = `https://wa.me/${site.whatsapp.e164}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#profissional', label: 'Profissional' },
  { href: '#agendamento', label: 'Agendar' },
  { href: '#localizacao', label: 'Local' },
] as const

export const about = {
  title: 'Sobre o salão',
  story:
    'O Salão Charme & Beleza é um espaço acolhedor em Concórdia, pensado para você se sentir à vontade do primeiro contato ao resultado final.',
  mission:
    'Oferecer cuidado próximo e resultados que valorizam o seu estilo, com produtos profissionais e técnicas atualizadas.',
  differentials: [
    {
      title: 'Atenção ao detalhe',
      text: 'Cada horário é pensado no seu cabelo, no seu ritmo e no acabamento que você espera.',
    },
    {
      title: 'Produtos profissionais',
      text: 'Linhas profissionais de qualidade, com especialização em coloração — inclusive Olenka Cosméticos.',
    },
    {
      title: 'Experiência e atualização',
      text: 'Anos de prática em cortes, loiros, tratamentos e finalização, sempre buscando evoluir.',
    },
  ],
  certificateImage: '/images/certs/certificado-olenka.jpg',
  certificateAlt: 'Certificado Blond Influence — Olenka Cosméticos',
} as const

/** Certificados em paisagem (fotos corrigidas em public/images/certs/) */
export const certificates = [
  { image: '/images/certs/gallery-05.jpg', caption: 'Makeover Tour 2026' },
  { image: '/images/certs/certificado-olenka.jpg', caption: 'Blond Influence — Olenka' },
  { image: '/images/certs/gallery-08.jpg', caption: "Colorimetria Criativa — La'Brizza" },
  { image: '/images/certs/gallery-06.jpg', caption: 'Colorimetria e Tendências de Corte' },
  { image: '/images/certs/gallery-02.jpg', caption: 'Expert Color — MUP Color' },
  { image: '/images/certs/gallery-04.jpg', caption: 'Master Class Beleza Brasileira' },
  { image: '/images/certs/gallery-07.jpg', caption: 'Color Wave — MUP Color' },
  { image: '/images/certs/gallery-03.jpg', caption: 'Mechas e Alisamento — Olenka' },
  { image: '/images/certs/gallery-09.jpg', caption: "Flash's & Toffee Lights" },
  { image: '/images/certs/gallery-10.jpg', caption: 'Blond Expert — Olenka' },
] as const

export type Service = {
  id: string
  name: string
  description: string
}

export const services: Service[] = [
  {
    id: 'corte',
    name: 'Corte',
    description: 'Corte feminino com finalização.',
  },
  {
    id: 'coloracao',
    name: 'Coloração',
    description: 'Cor, mechas, correções com técnica profissional.',
  },
  {
    id: 'tratamento',
    name: 'Tratamentos',
    description: 'Hidratação, reconstrução e protocolos para brilho e saúde.',
  },
  {
    id: 'escova',
    name: 'Escova e finalização',
    description: 'Modelagem e acabamento para o dia a dia ou ocasiões especiais.',
  },
  {
    id: 'progressiva',
    name: 'Alisamento / progressiva',
    description: 'Protocolos de alinhamento e redução de volume.',
  },
]

/** Só fotos de cabelo (sem certificados) para o Stack da galeria */
export const hairStackImages = [
  { src: '/images/gallery-01.jpg', alt: 'Cabelo longo castanho com brilho' },
  { src: '/images/gallery-11.jpg', alt: 'Cabelo ondulado com mechas' },
  { src: '/images/gallery-14.jpg', alt: 'Loiro longo alisado' },
  { src: '/images/gallery-16.jpg', alt: 'Cabelo longo castanho avermelhado' },
  { src: '/images/gallery-18.jpg', alt: 'Corte médio com mechas loiras' },
  { src: '/images/gallery-24.jpg', alt: 'Loiro longo em V' },
  { src: '/images/gallery-28.jpg', alt: 'Loiro acinzentado longo' },
  { src: '/images/gallery-20.jpg', alt: 'Bob com loiro platinado' },
] as const

/** Aviso exibido na seção de serviços */
export const serviceNotice = {
  title: 'Observação',
  text: 'Não realizamos serviços para cabelos cacheados.',
} as const

/** Profissional do salão */
export const owner = {
  name: 'Virlene Pellizzaro Calvi',
  shortName: 'Virlene',
  role: 'Cabeleireira — coloração, cortes e tratamentos',
  photo: '/images/gallery-12.jpg',
  bio: 'Especialista em coloração e cuidados com o cabelo, do diagnóstico ao acabamento.',
} as const

export const heroImages = {
  /** Wordmark tipográfico no ScrollExpand (sem foto de cabelo no frame) */
  primary: '/images/brand-hero.svg',
  secondary: '/images/gallery-14.jpg',
} as const
