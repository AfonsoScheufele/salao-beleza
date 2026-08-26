import { site } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Localizacao.module.css'

export function Localizacao() {
  const ref = useScrollReveal()
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`

  return (
    <section id="localizacao" className={`section ${styles.local}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow" data-reveal>
          Onde estamos
        </p>
        <h2 className="section__title" data-reveal>
          Localização e horário
        </h2>

        <div className={styles.grid}>
          <div className={styles.info} data-reveal>
            <h3>Endereço</h3>
            <p>{site.address.line}</p>
            <p className={styles.city}>{site.address.city}</p>

            <h3 className={styles.hoursTitle}>Horário de funcionamento</h3>
            <ul className={styles.hours}>
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
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
