# Salão — Landing page

Site one-page do salão (Vite + React + TypeScript), com animações GSAP, Motion e Anime.js.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Editar conteúdo

Tudo centralizado em [`src/data/content.ts`](src/data/content.ts):

- Nome do salão (`site.name`)
- WhatsApp (`site.whatsapp`)
- E-mail, Instagram, endereço e horário
- Serviços (sem preços — consulte pelo WhatsApp)
- Profissional
- Lista da galeria (fotos de cabelo)

Fotos ficam em `public/images/` (`hero-*.jpg`, `gallery-*.jpg`, `certificado-olenka.jpg`).

Originais / ZIPs permanecem em `fotos/` (não entram no build).

## Animações

| Lib | Uso |
|-----|-----|
| GSAP + ScrollTrigger | Reveals no scroll e parallax do hero |
| Motion (`motion/react`) | Entrada staggered de serviços, profissional e form |
| Anime.js | Pulse do WhatsApp flutuante, hover da galeria, stagger do menu |

## Contato atual

WhatsApp: (49) 98815-7650 → `https://wa.me/5549988157650`
