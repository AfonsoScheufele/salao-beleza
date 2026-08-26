import { useRef } from 'react'
import { whatsappUrl } from '../data/content'
import { useWhatsAppPulse } from '../animations/useMicroAnime'
import styles from './WhatsAppFloat.module.css'

export function WhatsAppFloat() {
  const ref = useRef<HTMLAnchorElement | null>(null)
  useWhatsAppPulse(ref)

  return (
    <a
      ref={ref}
      className={styles.float}
      href={whatsappUrl('Olá! Vim pelo site e gostaria de atendimento.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.3-1.39A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 6.85 12.4l-.3.47.2.9a8.1 8.1 0 0 1-13.9-5.9 8.1 8.1 0 0 1 7.15-7.87zm-3.3 3.8c-.18 0-.47.07-.72.35-.24.28-.94.92-.94 2.24s.96 2.6 1.1 2.78c.13.18 1.86 2.84 4.5 3.98 2.2.95 2.64.76 3.12.71.47-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.07-.1-.24-.17-.5-.3-.27-.13-1.53-.75-1.77-.84-.24-.08-.41-.13-.58.13-.18.26-.68.84-.83 1.01-.15.17-.3.2-.56.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.32-1.57-1.48-1.83-.15-.26-.02-.4.12-.53.12-.12.27-.3.4-.45.13-.15.18-.26.27-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.2-.48-.41-.42-.58-.43z" />
      </svg>
    </a>
  )
}
