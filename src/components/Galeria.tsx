import { useMemo } from 'react'
import { hairStackImages } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import Stack from './Stack'
import styles from './Galeria.module.css'

export function Galeria() {
  const sectionRef = useScrollReveal({
    childSelector: '.section__eyebrow, .section__title, .section__lead, [data-reveal]',
  })

  const stackCards = useMemo(
    () =>
      hairStackImages.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="card-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )),
    [],
  )

  return (
    <section id="galeria" className={`section ${styles.galeria}`} ref={sectionRef}>
      <div className="section__inner">
        <p className="section__eyebrow">Portfólio</p>
        <h2 className="section__title">Galeria</h2>
        <p className="section__lead">
          Fotos de cabelo — arraste ou toque para ver o próximo trabalho.
        </p>

        <div className={styles.stackWrap} data-reveal>
          <div className={styles.stackStage}>
            <Stack
              cards={stackCards}
              randomRotation
              sensitivity={180}
              sendToBackOnClick
              autoplay
              autoplayDelay={3500}
              pauseOnHover
              mobileClickOnly
            />
          </div>
          <p className={styles.stackHint}>Arraste, clique ou espere — as fotos se revezam</p>
        </div>
      </div>
    </section>
  )
}
