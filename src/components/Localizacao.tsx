import { site } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Localizacao.module.css'

export function Localizacao() {
  const ref = useScrollReveal()
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`

  return (
    <section id="localizacao" className={`section ${styles.local}`} ref={ref}>
      <div className="section__inner">
        <div className={styles.grid}>
          <div className={styles.info} data-reveal>
            <header className={styles.header}>
              <p className="section__eyebrow">Onde estamos</p>
              <h2 className="section__title">Localização</h2>
            </header>

            <div className={styles.address}>
              <h3>Endereço</h3>
              <p>{site.address.line}</p>
              <p className={styles.city}>
                {site.address.city}
                {site.address.cep ? ` · CEP ${site.address.cep}` : ''}
              </p>
            </div>
          </div>

          <div className={styles.map} data-reveal>
            <iframe
              title="Mapa do salão"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
