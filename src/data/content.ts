/** Conteúdo editável do site — altere aqui nome, contatos, preços e imagens. */

export const site = {
  name: 'Salão',
  tagline: 'Beleza com cuidado, técnica e delicadeza.',
  heroHeadline: 'Seu momento de brilhar',
  heroSupport:
    'Cortes, coloração e tratamentos pensados para realçar a sua melhor versão.',
  whatsapp: {
    display: '(49) 98815-7650',
    e164: '5549988157650',
  },
  email: 'contato@salao.exemplo',
  instagram: '#', // troque pelo @ quando tiver
  address: {
    line: 'Endereço a definir — fale conosco pelo WhatsApp',
    city: 'Santa Catarina',
    mapsQuery: 'Santa Catarina Brasil',
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
  { href: '#equipe', label: 'Equipe' },
  { href: '#agendamento', label: 'Agendar' },
  { href: '#localizacao', label: 'Local' },
] as const

export const about = {
  title: 'Sobre nós',
  story:
    'Somos um espaço dedicado ao cuidado com o cabelo e a autoestima. Atendemos com atenção individual, técnica atualizada e um ambiente acolhedor para você se sentir bem do início ao fim.',
  mission:
    'Nossa missão é oferecer um atendimento próximo, resultados que valorizam cada estilo e produtos profissionais de qualidade.',
  differentials: [
    {
      title: 'Equipe qualificada',
      text: 'Profissionais em constante atualização, com foco em coloração e tratamentos.',
    },
    {
      title: 'Produtos profissionais',
      text: 'Trabalhamos com linhas profissionais, incluindo especialização Olenka Cosméticos.',
    },
    {
      title: 'Experiência no salão',
      text: 'Anos dedicados a cortes, loiros, tratamentos e cuidado personalizado.',
    },
  ],
  certificateImage: '/images/certificado-olenka.jpg',
  certificateAlt: 'Certificado Blond Influence — Olenka Cosméticos',
} as const

export type Service = {
  id: string
  name: string
  description: string
  priceFrom: string
}

export const services: Service[] = [
  {
    id: 'corte',
    name: 'Corte',
    description: 'Corte feminino ou masculino com finalização.',
    priceFrom: 'A partir de R$ 60',
  },
  {
    id: 'coloracao',
    name: 'Coloração',
    description: 'Cor, mechas, loiros e correções com técnica profissional.',
    priceFrom: 'A partir de R$ 180',
  },
  {
    id: 'tratamento',
    name: 'Tratamentos',
    description: 'Hidratação, reconstrução e protocolos para brilho e saúde.',
    priceFrom: 'A partir de R$ 90',
  },
  {
    id: 'manicure',
    name: 'Manicure e pedicure',
    description: 'Cuidado com unhas, cutículas e esmaltação.',
    priceFrom: 'A partir de R$ 45',
  },
  {
    id: 'escova',
    name: 'Escova e finalização',
    description: 'Modelagem e acabamento para ocasiões ou o dia a dia.',
    priceFrom: 'A partir de R$ 50',
  },
  {
    id: 'progressiva',
    name: 'Alisamento / progressiva',
    description: 'Protocolos de alinhamento e redução de volume.',
    priceFrom: 'Sob consulta',
  },
]

export const galleryImages = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src: `/images/gallery-${n}.jpg`,
    alt: `Trabalho realizado no salão — foto ${i + 1}`,
  }
})

export const team = [
  {
    name: 'Profissional 1',
    role: 'Especialista em coloração e loiros',
    photo: '/images/team-01.jpg',
  },
  {
    name: 'Profissional 2',
    role: 'Cortes, tratamentos e finalização',
    photo: '/images/team-02.jpg',
  },
] as const

export const heroImages = {
  primary: '/images/hero-01.jpg',
  secondary: '/images/hero-02.jpg',
} as const
