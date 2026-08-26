import { site, owner } from '../data/content'
import styles from './BrandMark.module.css'

type BrandMarkProps = {
  variant?: 'header' | 'footer' | 'hero'
  className?: string
}

/** Wordmark tipográfico — sem logo inventado, alinhado à fachada. */
export function BrandMark({ variant = 'header', className = '' }: BrandMarkProps) {
  return (
    <span className={`${styles.mark} ${styles[variant]} ${className}`.trim()}>
      <span className={styles.meta}>
        <span className={styles.owner}>{owner.shortName}</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.category}>{site.category}</span>
      </span>
      <span className={styles.title} aria-label={site.fullName}>
        <span className={styles.word}>Charme</span>
        <span className={styles.amp} aria-hidden="true">
          &
        </span>
        <span className={styles.word}>Beleza</span>
      </span>
    </span>
  )
}
