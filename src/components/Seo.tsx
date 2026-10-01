import { useEffect } from 'react'
import { site, siteUrl } from '../data/content'

/** Injeta dados estruturados (JSON-LD) para o Google entender o salão. */
export function Seo() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      name: site.fullName,
      alternateName: site.name,
      description: site.seoDescription,
      url: siteUrl,
      image: `${siteUrl}${site.ogImage}`,
      telephone: `+${site.whatsapp.e164}`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.line,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.cep,
        addressCountry: 'BR',
      },
      areaServed: {
        '@type': 'City',
        name: site.address.locality,
      },
    }

    const id = 'salao-jsonld'
    let el = document.getElementById(id) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = id
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
  }, [])

  return null
}
