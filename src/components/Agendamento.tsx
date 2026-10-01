import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
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

/** Converte YYYY-MM-DD (input date) para DD/MM/AAAA */
function formatDateBr(iso: string) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function Agendamento() {
  const ref = useScrollReveal({
    childSelector: '.section__eyebrow, .section__title, .section__lead',
  })
  const [form, setForm] = useState<FormState>(initial)
  const [openSelect, setOpenSelect] = useState(false)
  const selectRef = useRef<HTMLDivElement | null>(null)
  const dateRef = useRef<HTMLInputElement | null>(null)
  const listId = useId()
  const reduce = useReducedMotion()
  const variants = reduce ? reducedMotionVariants : blockItem
  const container = reduce ? reducedMotionVariants : blockContainer

  useEffect(() => {
    if (!openSelect) return
    const onPointer = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as Node)) setOpenSelect(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSelect(false)
    }
    const onScroll = () => setOpenSelect(false)
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [openSelect])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.servico) {
      setOpenSelect(true)
      return
    }
    const text = [
      'Olá! Gostaria de agendar um horário.',
      `Nome: ${form.nome}`,
      form.servico ? `Serviço: ${form.servico}` : null,
      form.data ? `Data preferida: ${formatDateBr(form.data)}` : null,
      form.mensagem ? `Mensagem: ${form.mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  const openDatePicker = () => {
    const el = dateRef.current
    if (!el) return
    try {
      el.showPicker?.()
    } catch {
      el.focus()
    }
  }

  return (
    <section id="agendamento" className={`section ${styles.agendamento}`} ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Reserve</p>
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

          <motion.div className={styles.field} variants={variants} ref={selectRef}>
            <span id={`${listId}-label`}>Serviço</span>
            <input type="hidden" name="servico" value={form.servico} />
            <button
              type="button"
              className={`${styles.selectTrigger} ${!form.servico ? styles.placeholder : ''} ${openSelect ? styles.selectOpen : ''}`}
              aria-haspopup="listbox"
              aria-expanded={openSelect}
              aria-labelledby={`${listId}-label`}
              aria-controls={listId}
              onClick={() => setOpenSelect((v) => !v)}
            >
              <span>{form.servico || 'Selecione o serviço'}</span>
              <Chevron open={openSelect} />
            </button>
            {openSelect && (
              <ul id={listId} className={styles.selectList} role="listbox" aria-labelledby={`${listId}-label`}>
                {services.map((s) => (
                  <li key={s.id} role="option" aria-selected={form.servico === s.name}>
                    <button
                      type="button"
                      className={`${styles.selectOption} ${form.servico === s.name ? styles.selectOptionActive : ''}`}
                      onClick={() => {
                        setForm((f) => ({ ...f, servico: s.name }))
                        setOpenSelect(false)
                      }}
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.div className={`${styles.field} ${styles.full}`} variants={variants}>
            <span id={`${listId}-date-label`}>Data preferida</span>
            <div className={styles.dateWrap}>
              <input
                ref={dateRef}
                type="date"
                name="data"
                className={`${styles.dateInput} ${!form.data ? styles.dateEmpty : ''}`}
                value={form.data}
                onChange={(e) => setForm((f) => ({ ...f, data: e.target.value }))}
                aria-labelledby={`${listId}-date-label`}
                min={new Date().toISOString().slice(0, 10)}
              />
              <button
                type="button"
                className={styles.dateBtn}
                onClick={openDatePicker}
                aria-label="Abrir calendário"
              >
                <CalendarIcon />
              </button>
            </div>
          </motion.div>

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

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
