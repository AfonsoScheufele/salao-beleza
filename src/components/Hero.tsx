import { heroImages, site, whatsappUrl } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Hero.module.css'

export function Hero() {
  const ref = useScrollReveal({
    childSelector: '[data-reveal]',
    parallaxSelector: '[data-parallax]',
  })

  return (
    <section id="topo" className={styles.hero} ref={ref}>
      <div className={styles.media} aria-hidden="true">
        <img
          src={heroImages.primary}
          alt=""
          data-parallax
          className={styles.image}
        />
        <div className={styles.veil} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand} data-reveal>
          {site.name}
        </p>
        <h1 className={styles.title} data-reveal>
          {site.heroHeadline}
        </h1>
        <p className={styles.support} data-reveal>
          {site.heroSupport}
        </p>
        <div className={styles.actions} data-reveal>
          <a
            className="btn btn--primary"
            href={whatsappUrl('Olá! Gostaria de agendar um horário no Salão.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar no WhatsApp
          </a>
          <a className={`btn btn--ghost ${styles.ghost}`} href="#servicos">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
