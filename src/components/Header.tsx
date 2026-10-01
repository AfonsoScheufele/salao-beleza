import { useEffect, useId, useRef, useState } from 'react'
import { navLinks, whatsappUrl } from '../data/content'
import { useNavStagger } from '../animations/useMicroAnime'
import { BrandMark } from './BrandMark'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const desktopNavRef = useRef<HTMLElement | null>(null)
  const mobileNavRef = useRef<HTMLElement | null>(null)
  const navId = useId()
  useNavStagger(desktopNavRef)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('nav-open', open)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('nav-open')
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  /** Fecha o menu e só então rola — evita layout quebrado com body travado */
  const goToSection = (href: string) => {
    setOpen(false)
    if (!href.startsWith('#')) return
    const id = href.slice(1)
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', href)
    })
  }

  const whatsappHref = whatsappUrl('Olá! Gostaria de agendar um horário.')

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}
      >
        <div className={styles.inner}>
          <a
            href="#topo"
            className={styles.brand}
            onClick={(e) => {
              e.preventDefault()
              goToSection('#topo')
            }}
          >
            <BrandMark variant="header" />
          </a>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-expanded={open}
            aria-controls={navId}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav desktop — fica na barra */}
          <nav
            ref={desktopNavRef}
            className={styles.navDesktop}
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} data-nav-link className={styles.link}>
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              className={`${styles.cta} btn btn--primary`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/*
        Overlay mobile fora do <header>: o backdrop-filter do header scrolled
        cria containing block e quebrava position:fixed do menu.
      */}
      <nav
        id={navId}
        ref={mobileNavRef}
        className={`${styles.navMobile} ${open ? styles.navMobileOpen : ''}`}
        aria-label="Menu"
        aria-hidden={!open}
        onClick={(e) => {
          /* Toque no fundo (fora dos links) fecha o menu */
          if (e.target === e.currentTarget) setOpen(false)
        }}
      >
        <div className={styles.navPanel}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              tabIndex={open ? 0 : -1}
              onClick={(e) => {
                e.preventDefault()
                goToSection(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            className={`${styles.cta} btn btn--primary`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
          <button
            type="button"
            className={styles.closeHint}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>
        </div>
      </nav>
    </>
  )
}
