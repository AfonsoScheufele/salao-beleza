import { useEffect, useMemo, useState } from 'react'
import { hairStackImages } from '../data/content'
import { useScrollReveal } from '../animations/useScrollReveal'
import Stack from './Stack'
import CircularGallery from './CircularGallery'
import styles from './Galeria.module.css'

const DESKTOP_BREAKPOINT = 768

function useIsDesktop(breakpoint = DESKTOP_BREAKPOINT) {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(min-width: ${breakpoint}px)`).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [breakpoint])

  return isDesktop
}

export function Galeria() {
  const isDesktop = useIsDesktop()
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

  const galleryItems = useMemo(
    () => hairStackImages.map((img) => ({ image: img.src, text: '' })),
    [],
  )

  return (
    <section id="galeria" className={`section ${styles.galeria}`} ref={sectionRef}>
      <div className="section__inner">
        <p className="section__eyebrow">Portfólio</p>
        <h2 className="section__title">Galeria</h2>
      </div>

      {isDesktop ? (
        <div className={styles.galleryWrap} data-reveal>
          <div className={styles.galleryStage}>
            <CircularGallery
              items={galleryItems}
              bend={0}
              borderRadius={0.05}
              scrollEase={0.08}
              scrollSpeed={2.7}
              dragSpeed={1.5}
              cardScale={1.55}
            />
          </div>
        </div>
      ) : (
        <div className="section__inner">
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
          </div>
        </div>
      )}
    </section>
  )
}
