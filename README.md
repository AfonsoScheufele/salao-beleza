# Charme & Beleza — Landing page

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

## Domínio e Google

1. **Compre o domínio** (ex.: Registro.br) — o padrão no projeto é `https://charmeebeleza.com.br`.
2. **Ajuste a URL** (se for outra):
   - copie `.env.example` → `.env` e edite `VITE_SITE_URL`
   - ou altere o fallback em `vite.config.ts` e `src/data/content.ts`
3. **Publique** (escolha uma):
   - [Vercel](https://vercel.com): importe o repo → Build `npm run build` → Output `dist` → Add Domain
   - [Netlify](https://netlify.com): mesmo fluxo (`netlify.toml` já configura)
   - [Cloudflare Pages](https://pages.cloudflare.com): Build `npm run build` → Output `dist`
4. **Google Search Console**: adicione a propriedade do domínio → peça indexação da URL `/` → envie o sitemap `https://SEU-DOMINIO/sitemap.xml`

O build gera `robots.txt`, `sitemap.xml` e meta Open Graph com a URL correta.
