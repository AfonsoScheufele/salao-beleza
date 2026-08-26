import { motion, useReducedMotion } from 'motion/react'
import { team } from '../data/content'
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
    <section id="equipe" className={`section ${styles.equipe}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Quem cuida de você</p>
        <h2 className="section__title">Equipe</h2>
        <p className="section__lead">
          Profissionais dedicados — atualize nomes e fotos em{' '}
          <code>src/data/content.ts</code>.
        </p>

        <motion.ul
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {team.map((member) => (
            <motion.li key={member.name} className={styles.member} variants={variants}>
              <div className={styles.photo}>
                <img src={member.photo} alt={member.name} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
