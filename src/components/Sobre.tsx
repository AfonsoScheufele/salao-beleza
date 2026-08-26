import { about } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Sobre.module.css'

export function Sobre() {
  const ref = useScrollReveal()

  return (
    <section id="sobre" className={`section ${styles.sobre}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow" data-reveal>
          Quem somos
        </p>
        <h2 className="section__title" data-reveal>
          {about.title}
        </h2>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className="section__lead" data-reveal>
              {about.story}
            </p>
            <p className={styles.mission} data-reveal>
              {about.mission}
            </p>

            <ul className={styles.list}>
              {about.differentials.map((item) => (
                <li key={item.title} data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className={styles.cert} data-reveal>
            <img src={about.certificateImage} alt={about.certificateAlt} />
            <figcaption>Qualificação profissional — Blond Influence (Olenka)</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
