import { useReducedMotion, motion } from 'motion/react'
import { services } from '../data/content'
import { blockContainer, blockItem, reducedMotionVariants } from '../animations/blockMotion'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Servicos.module.css'

export function Servicos() {
  const ref = useScrollReveal({ childSelector: '.section__eyebrow, .section__title, .section__lead' })
  const reduce = useReducedMotion()
  const variants = reduce ? reducedMotionVariants : blockItem
  const container = reduce ? reducedMotionVariants : blockContainer

  return (
    <section id="servicos" className={`section ${styles.servicos}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">O que fazemos</p>
        <h2 className="section__title">Serviços</h2>
        <p className="section__lead">
          Confira nossos serviços — valores e detalhes pelo WhatsApp no agendamento.
        </p>

        <motion.ul
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.li key={service.id} className={styles.card} variants={variants}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
