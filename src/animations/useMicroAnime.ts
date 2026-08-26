import { useEffect, type RefObject } from 'react'
import { animate, stagger } from 'animejs'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Pulse contínuo no botão flutuante de WhatsApp. */
export function useWhatsAppPulse(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const anim = animate(el, {
      scale: [1, 1.06, 1],
      duration: 1800,
      ease: 'inOutSine',
      loop: true,
    })

    return () => {
      anim.pause()
      anim.cancel()
    }
  }, [ref])
}

/** Stagger decorativo nos links do header. */
export function useNavStagger(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    const links = root.querySelectorAll('[data-nav-link]')
    if (!links.length) return

    const anim = animate(links, {
      opacity: [0, 1],
      translateY: [-8, 0],
      delay: stagger(60, { start: 80 }),
      duration: 500,
      ease: 'outQuad',
    })

    return () => {
      anim.pause()
      anim.cancel()
    }
  }, [ref])
}

/** Hover scale na galeria via Anime.js. */
export function useGalleryHover(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return

    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-gallery-item]'))
    const cleanups: Array<() => void> = []

    items.forEach((item) => {
      const img = item.querySelector('img')
      if (!img) return

      const onEnter = () => {
        animate(img, {
          scale: 1.06,
          duration: 450,
          ease: 'outQuad',
        })
      }
      const onLeave = () => {
        animate(img, {
          scale: 1,
          duration: 450,
          ease: 'outQuad',
        })
      }

      item.addEventListener('mouseenter', onEnter)
      item.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        item.removeEventListener('mouseenter', onEnter)
        item.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [ref])
}
