import { useEffect, useRef, useState } from 'react'
import { navLinks, whatsappUrl } from '../data/content'
import { useNavStagger } from '../animations/useMicroAnime'
import { BrandMark } from './BrandMark'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  useNavStagger(navRef)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.brand} onClick={() => setOpen(false)}>
          <BrandMark variant="header" />
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="nav-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="nav-principal"
          ref={navRef}
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-nav-link
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl('Olá! Gostaria de agendar um horário.')}
            className={`${styles.cta} btn btn--primary`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
