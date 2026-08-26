import ScrollExpand from './ScrollExpand'
import { BrandMark } from './BrandMark'
import { heroImages, site, whatsappUrl } from '../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <ScrollExpand
        src={heroImages.primary}
        alt={site.fullName}
        title="Charme & Beleza"
        scrollHint="Role para explorar"
        useWindowScroll
        mediaZoom={1.06}
        startWidth={56}
        startHeight={64}
        startRadius={22}
        endRadius={0}
        scrollDistance={0.85}
        holdDistance={0.12}
        overlayScrim={0.45}
        smoothing={0.07}
        className={styles.expand}
      >
        <div className={styles.overlayBrand}>
          <BrandMark variant="hero" />
        </div>
        <h1 className={styles.overlayTitle}>{site.heroHeadline}</h1>
        <p className={styles.overlayText}>{site.heroSupport}</p>
        <div className={styles.actions}>
          <a
            className="btn btn--primary"
            href={whatsappUrl(
              `Olá! Gostaria de agendar um horário no ${site.fullName}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar no WhatsApp
          </a>
          <a className={`btn btn--ghost ${styles.ghost}`} href="#servicos">
            Ver serviços
          </a>
        </div>
      </ScrollExpand>
    </section>
  )
}
