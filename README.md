# Charme & Beleza — Landing page

Site no ar: [https://charme-beleza.vercel.app](https://charme-beleza.vercel.app)

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

URL pública: `https://charme-beleza.vercel.app`  
Para mudar: variável `VITE_SITE_URL` no painel da Vercel e novo deploy.

## Google Search Console

1. Adicione: `https://charme-beleza.vercel.app`
2. Peça indexação da URL `/`
3. Sitemap: `https://charme-beleza.vercel.app/sitemap.xml`
