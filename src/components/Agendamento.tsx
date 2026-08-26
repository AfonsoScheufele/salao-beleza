import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { services, whatsappUrl } from '../data/content'
import { blockContainer, blockItem, reducedMotionVariants } from '../animations/blockMotion'
import { useScrollReveal } from '../animations/useScrollReveal'
import styles from './Agendamento.module.css'

type FormState = {
  nome: string
  servico: string
  data: string
  mensagem: string
}

const initial: FormState = {
  nome: '',
  servico: '',
  data: '',
  mensagem: '',
}

export function Agendamento() {
  const ref = useScrollReveal({
    childSelector: '.section__eyebrow, .section__title, .section__lead',
  })
  const [form, setForm] = useState<FormState>(initial)
  const reduce = useReducedMotion()
  const variants = reduce ? reducedMotionVariants : blockItem
  const container = reduce ? reducedMotionVariants : blockContainer

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Olá! Gostaria de agendar um horário.',
      `Nome: ${form.nome}`,
      form.servico ? `Serviço: ${form.servico}` : null,
      form.data ? `Data preferida: ${form.data}` : null,
      form.mensagem ? `Mensagem: ${form.mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="agendamento" className={`section ${styles.agendamento}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Horários</p>
        <h2 className="section__title">Agendamento</h2>
        <p className="section__lead">
          Preencha e envie pelo WhatsApp — respondemos para confirmar o melhor horário.
        </p>

        <motion.form
          className={styles.form}
          onSubmit={onSubmit}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.label className={styles.field} variants={variants}>
            <span>Nome</span>
            <input
              required
              name="nome"
              autoComplete="name"
              value={form.nome}
              onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
              placeholder="Seu nome"
            />
          </motion.label>

          <motion.label className={styles.field} variants={variants}>
            <span>Serviço</span>
            <select
              name="servico"
              value={form.servico}
              onChange={(e) => setForm((f) => ({ ...f, servico: e.target.value }))}
              required
            >
              <option value="" disabled>
                Selecione
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </motion.label>

          <motion.label className={styles.field} variants={variants}>
            <span>Data preferida</span>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={(e) => setForm((f) => ({ ...f, data: e.target.value }))}
            />
          </motion.label>

          <motion.label className={`${styles.field} ${styles.full}`} variants={variants}>
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              rows={3}
              value={form.mensagem}
              onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
              placeholder="Observações (opcional)"
            />
          </motion.label>

          <motion.div className={styles.actions} variants={variants}>
            <button type="submit" className="btn btn--primary">
              Enviar no WhatsApp
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
