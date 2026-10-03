import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'

import { GOAL_FEEDBACK, QUIZ_QUESTIONS } from '#/content/quiz'
import { whatsappLink } from '#/content/site'

import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from '../landing/Icons'
import { Logo } from '../landing/Logo'

const LETTERS = 'ABCDEFG'
const CONTACT_STEP = QUIZ_QUESTIONS.length
const TOTAL_STEPS = QUIZ_QUESTIONS.length + 1

type Answers = Record<string, string>
type Contact = { name: string; phone: string }

function formatPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function buildMessage(answers: Answers, contact: Contact) {
  const lines = QUIZ_QUESTIONS.filter((q) => answers[q.id]).map(
    (q) => `• ${q.summaryLabel}: ${answers[q.id]}`,
  )
  return [
    `Olá! Me chamo ${contact.name.trim()} e fiz o quiz no site da Longevos.`,
    '',
    ...lines,
    '',
    'Quero saber mais sobre os planos e agendar minha avaliação.',
  ].join('\n')
}

export function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [contact, setContact] = useState<Contact>({ name: '', phone: '' })
  const [done, setDone] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const advancing = useRef(false)

  const question = QUIZ_QUESTIONS[step]
  const progress = done ? 1 : step / TOTAL_STEPS

  // Move o foco para a pergunta nova (leitores de tela e teclado)
  useEffect(() => {
    headingRef.current?.focus()
  }, [step, done])

  function choose(option: string) {
    if (advancing.current) return
    advancing.current = true
    setAnswers((a) => ({ ...a, [question.id]: option }))
    // pequeno atraso para a pessoa ver a opção marcada
    window.setTimeout(() => {
      advancing.current = false
      setStep((s) => s + 1)
    }, 260)
  }

  // Atalhos A, B, C... nas perguntas de múltipla escolha
  useEffect(() => {
    if (!question || done) return
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      const i = LETTERS.indexOf(e.key.toUpperCase())
      if (i >= 0 && i < question.options.length) choose(question.options[i])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const phoneDigits = contact.phone.replace(/\D/g, '')
  const contactValid = contact.name.trim().length >= 2 && phoneDigits.length >= 10

  function submitContact(e: FormEvent) {
    e.preventDefault()
    if (!contactValid) return
    // TODO: enviar o lead para o CRM da Longevos quando tivermos o endpoint
    setDone(true)
  }

  const firstName = contact.name.trim().split(/\s+/)[0]

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 pt-6">
        <Link to="/" aria-label="Voltar para o site da Longevos">
          <Logo className="h-8 w-auto" />
        </Link>
      </header>

      <div className="mx-auto mt-6 w-full max-w-3xl px-5">
        <div
          className="h-2 overflow-hidden rounded-full bg-ink/8"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Progresso do quiz"
        >
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-500 ease-out"
            style={{ width: `${Math.max(progress * 100, 4)}%` }}
          />
        </div>
        {!done && (
          <div className="mt-3 flex min-h-11 items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-base font-bold text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <ArrowRightIcon className="size-5 rotate-180" />
                Voltar
              </button>
            ) : (
              <span />
            )}
            <span className="text-base font-semibold text-ink-soft">
              {Math.min(step + 1, TOTAL_STEPS)} de {TOTAL_STEPS}
            </span>
          </div>
        )}
      </div>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pt-8 pb-12 md:pt-12 md:pb-16">
        {done ? (
          <Result
            headingRef={headingRef}
            firstName={firstName}
            answers={answers}
            href={whatsappLink(buildMessage(answers, contact))}
          />
        ) : step === CONTACT_STEP ? (
          <form key="contact" onSubmit={submitContact} className="quiz-step" noValidate>
            <p className="text-sm font-bold tracking-[0.18em] text-brand-deep uppercase">
              Último passo
            </p>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="mt-3 text-3xl leading-tight font-extrabold text-balance outline-none md:text-5xl"
            >
              Para onde a recepção manda as informações?
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Você recebe tudo pelo WhatsApp, sem compromisso.
            </p>

            <div className="mt-10 space-y-6">
              <label className="block">
                <span className="text-lg font-bold">Seu nome</span>
                <input
                  autoComplete="name"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  placeholder="Maria da Silva"
                  className="mt-2 block min-h-16 w-full rounded-2xl border-2 border-ink/10 bg-white px-5 text-xl transition-colors outline-none placeholder:text-ink/30 focus:border-brand"
                />
              </label>
              <label className="block">
                <span className="text-lg font-bold">WhatsApp</span>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, phone: formatPhone(e.target.value) }))
                  }
                  placeholder="(83) 99999-9999"
                  className="mt-2 block min-h-16 w-full rounded-2xl border-2 border-ink/10 bg-white px-5 text-xl transition-colors outline-none placeholder:text-ink/30 focus:border-brand"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={!contactValid}
              className="mt-10 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-brand-deep px-8 text-xl font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-ink/15 disabled:text-ink/40 sm:w-auto"
            >
              Ver meu resultado
              <ArrowRightIcon className="size-6" />
            </button>
          </form>
        ) : (
          <div key={question.id} className="quiz-step">
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-3xl leading-tight font-extrabold text-balance outline-none md:text-5xl"
            >
              {question.title}
            </h1>
            {question.hint && (
              <p className="mt-4 text-lg text-ink-soft">{question.hint}</p>
            )}
            <ul className="mt-10 space-y-3">
              {question.options.map((option, i) => {
                const selected = answers[question.id] === option
                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => choose(option)}
                      aria-pressed={selected}
                      className={`group flex min-h-18 w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left text-xl font-semibold transition-all ${
                        selected
                          ? 'border-brand bg-brand-soft'
                          : 'border-ink/8 bg-white hover:-translate-y-0.5 hover:border-brand/60'
                      }`}
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-base font-extrabold transition-colors ${
                          selected
                            ? 'bg-brand-deep text-white'
                            : 'bg-paper text-ink-soft group-hover:bg-brand-soft group-hover:text-brand-deep'
                        }`}
                      >
                        {selected ? <CheckIcon className="size-5" /> : LETTERS[i]}
                      </span>
                      {option}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

      </main>
    </div>
  )
}

function Result({
  headingRef,
  firstName,
  answers,
  href,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>
  firstName: string
  answers: Answers
  href: string
}) {
  const feedback = GOAL_FEEDBACK[answers.objetivo]
  const forFamily = answers.perfil?.startsWith('Para meu')

  return (
    <div className="quiz-step">
      <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
        <CheckIcon className="size-8" />
      </span>
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-3xl leading-tight font-extrabold text-balance outline-none md:text-5xl"
      >
        Pronto, {firstName}. A Longevos tem um lugar para{' '}
        {forFamily ? 'quem você ama' : 'você'}.
      </h1>
      {feedback && <p className="mt-6 text-xl leading-relaxed text-ink-soft">{feedback}</p>}

      <dl className="mt-10 grid grid-cols-1 gap-3 rounded-3xl bg-white p-6 sm:grid-cols-2 md:p-8">
        {QUIZ_QUESTIONS.filter((q) => answers[q.id]).map((q) => (
          <div key={q.id}>
            <dt className="text-sm font-bold tracking-wide text-ink-soft uppercase">
              {q.summaryLabel}
            </dt>
            <dd className="mt-0.5 text-lg font-semibold">{answers[q.id]}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-lg text-ink-soft">
        Envie suas respostas para a recepção e ela já responde com os planos e o
        horário da sua avaliação.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-brand-deep px-8 text-xl font-bold text-white transition-colors hover:bg-ink sm:w-auto"
      >
        <WhatsAppIcon className="size-6" />
        Enviar no WhatsApp
      </a>
    </div>
  )
}
