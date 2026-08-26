import { motion, useReducedMotion } from 'motion/react'
import { owner } from '../data/content'
import { blockContainer, blockItem, reducedMotionVariants } from '../animations/blockMotion'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Equipe.module.css'

export function Equipe() {
  const ref = useScrollReveal({
    childSelector: '.section__eyebrow, .section__title, .section__lead',
  })
  const reduce = useReducedMotion()
  const variants = reduce ? reducedMotionVariants : blockItem
  const container = reduce ? reducedMotionVariants : blockContainer

  return (
    <section id="profissional" className={`section ${styles.equipe}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Quem cuida de você</p>
        <h2 className="section__title">Profissional</h2>
        <p className="section__lead">
          Conheça quem vai cuidar do seu cabelo no Charme & Beleza.
        </p>

        <motion.div
          className={styles.single}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.article className={styles.member} variants={variants}>
            <div className={styles.photo}>
              <img src={owner.photo} alt={owner.name} loading="lazy" />
            </div>
            <div className={styles.info}>
              <h3>{owner.name}</h3>
              <p className={styles.role}>{owner.role}</p>
              <p className={styles.bio}>{owner.bio}</p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
