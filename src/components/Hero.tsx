import { BrandMark } from './BrandMark'
import { site, whatsappUrl } from '../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.inner}>
        <BrandMark variant="hero" />
        <h1 className={styles.title}>{site.heroHeadline}</h1>
        <p className={styles.text}>{site.heroSupport}</p>
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
      </div>
    </section>
  )
}
