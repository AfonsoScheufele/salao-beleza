import { site, whatsappUrl } from '../data/content'
import { BrandMark } from './BrandMark'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <BrandMark variant="footer" />
          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <div className={styles.contacts}>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.whatsapp.display}
          </a>
        </div>
      </div>
      <p className={styles.copy}>
        © {year} {site.fullName}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
