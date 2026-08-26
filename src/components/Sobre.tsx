import MorphSlider from './MorphSlider'
import { about, certificates } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Sobre.module.css'

export function Sobre() {
  const ref = useScrollReveal()

  return (
    <section id="sobre" className={`section ${styles.sobre}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow" data-reveal>
          Conheça o espaço
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

          <div className={styles.certs} data-reveal>
            <p className={styles.certsLabel}>Certificados e formações</p>
            <div className={styles.slider}>
              <MorphSlider
                items={[...certificates]}
                transition="melt"
                intensity={0.45}
                aberration={0.25}
                drift={0.25}
                autoplay
                autoplayDelay={4.5}
                radius={14}
                overlayColor="#1a1418"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
