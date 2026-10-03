import { Link } from '@tanstack/react-router'

import { SITE } from '#/content/site'

import { ArrowRightIcon, WhatsAppIcon } from './landing/Icons'
import { Logo, LogoIcon } from './landing/Logo'

const SHORTCUTS = [
  { href: '/#modalidades', label: 'Modalidades' },
  { href: '/#planos', label: 'Planos' },
  { href: '/#unidades', label: 'Unidades' },
  { href: '/quiz', label: 'Quiz da longevidade' },
]

export function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-paper">
      {/* Círculos decorativos ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[32rem] rounded-full bg-brand-soft"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-32 size-[28rem] rounded-full bg-brand-soft/70"
      />

      <header className="relative mx-auto w-full max-w-6xl px-5 pt-6">
        <Link to="/" aria-label="Longevos, ir para o início">
          <Logo className="h-9 w-auto" />
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <p
          className="nf-in flex items-center gap-3 text-[7rem] leading-none font-extrabold tracking-tight text-ink italic md:gap-5 md:text-[11rem]"
          aria-label="Erro 404"
        >
          <span aria-hidden="true">4</span>
          <span
            aria-hidden="true"
            className="nf-badge relative flex size-28 shrink-0 items-center justify-center rounded-full bg-brand-bg md:size-44"
          >
            <span className="nf-ring absolute inset-0 rounded-full border-4 border-brand/40" />
            <LogoIcon className="nf-sway h-3/5 text-white" />
          </span>
          <span aria-hidden="true">4</span>
        </p>

        <h1
          className="nf-in mt-10 text-3xl leading-tight font-extrabold text-balance md:text-5xl"
          style={{ animationDelay: '120ms' }}
        >
          Essa página saiu para caminhar e ainda não voltou
        </h1>
        <p
          className="nf-in mt-5 max-w-xl text-xl leading-relaxed text-ink-soft"
          style={{ animationDelay: '220ms' }}
        >
          O endereço pode ter mudado ou ter sido digitado com algum erro. Daqui
          você volta para o início ou fala direto com a recepção.
        </p>

        <div
          className="nf-in mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: '320ms' }}
        >
          <Link
            to="/"
            className="group inline-flex min-h-16 items-center gap-3 rounded-full bg-brand-deep px-8 text-lg font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            Voltar para o início
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-16 items-center gap-3 rounded-full border-2 border-ink/10 bg-white py-2 pr-7 pl-2 text-lg font-bold text-ink transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:-rotate-12">
              <WhatsAppIcon className="size-6" />
            </span>
            Falar com a recepção
          </a>
        </div>

        <nav
          aria-label="Atalhos"
          className="nf-in mt-14"
          style={{ animationDelay: '420ms' }}
        >
          <p className="text-sm font-bold tracking-[0.18em] text-ink-soft uppercase">
            Ou vá direto para
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {SHORTCUTS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-base font-semibold text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  )
}
