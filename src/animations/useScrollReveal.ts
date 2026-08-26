import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/** Reveals de seção no scroll + opcional parallax no seletor interno. */
export function useScrollReveal(
  options: {
    childSelector?: string
    parallaxSelector?: string
  } = {},
) {
  const containerRef = useRef<HTMLElement | null>(null)
  const { childSelector = '[data-reveal]', parallaxSelector } = options

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = gsap.utils.toArray<HTMLElement>(childSelector)
        targets.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          })
        })

        if (parallaxSelector) {
          const img = containerRef.current?.querySelector(parallaxSelector)
          if (img) {
            gsap.to(img, {
              yPercent: 12,
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            })
          }
        }
      })

      return () => mm.revert()
    },
    { scope: containerRef },
  )

  return containerRef
}
