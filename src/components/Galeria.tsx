import { useRef, useState } from 'react'
import { galleryImages } from '../data/content'
import { useGalleryHover } from '../animations/useMicroAnime'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Galeria.module.css'

export function Galeria() {
  const sectionRef = useScrollReveal({
    childSelector: '.section__eyebrow, .section__title, .section__lead',
  })
  const gridRef = useRef<HTMLDivElement | null>(null)
  useGalleryHover(gridRef)
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="galeria" className={`section ${styles.galeria}`} ref={sectionRef}>
      <div className="section__inner">
        <p className="section__eyebrow">Portfólio</p>
        <h2 className="section__title">Galeria</h2>
        <p className="section__lead">
          Trabalhos realizados no salão — cortes, coloração e tratamentos.
        </p>

        <div className={styles.grid} ref={gridRef}>
          {galleryImages.map((img) => (
            <button
              key={img.src}
              type="button"
              className={styles.item}
              data-gallery-item
              onClick={() => setLightbox(img.src)}
              aria-label={`Ampliar: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightbox(null)}
        >
          <img src={lightbox} alt="" />
          <button type="button" className={styles.close} aria-label="Fechar">
            Fechar
          </button>
        </div>
      )}
    </section>
  )
}
