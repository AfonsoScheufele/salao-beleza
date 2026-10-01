# Charme & Beleza — Landing page

Site no ar: [https://salao-beleza.vercel.app](https://salao-beleza.vercel.app)

## Como rodar local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

A pasta `dist/` é o site pronto para hospedar.

## Deploy (Vercel)

Já configurado com `vercel.json` (build `npm run build`, output `dist`).

URL padrão de SEO/meta: `https://salao-beleza.vercel.app`  
Para mudar: variável de ambiente `VITE_SITE_URL` no painel da Vercel e novo deploy.

## Google Search Console

1. Adicione a propriedade: `https://salao-beleza.vercel.app`
2. Peça indexação da URL `/`
3. Envie o sitemap: `https://salao-beleza.vercel.app/sitemap.xml`
