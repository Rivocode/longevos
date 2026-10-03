import { Link } from '@tanstack/react-router'
import type { ComponentType, ReactNode, SVGProps } from 'react'

import { FAQ } from '#/content/faq'
import { SITE } from '#/content/site'

import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  DumbbellIcon,
  EyeIcon,
  MapPinIcon,
  InstagramIcon,
  WhatsAppIcon,
  MusicIcon,
  PlusIcon,
  ShieldIcon,
  StretchIcon,
  UsersIcon,
} from './Icons'
import { Logo, LogoIcon } from './Logo'
import { CountUp, stagger, useReveal, useScrolled } from './motion'
import { VideoTour } from './VideoTour'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

const NAV = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#planos', label: 'Planos' },
  { href: '#unidades', label: 'Unidades' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function LandingPage() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <VideoTour />
        <Care />
        <Modalities />
        <Community />
        <Miramar />
        <Steps />
        <Plans />
        <Units />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
      <FloatingWhatsApp />
    </>
  )
}

/* ---------- Peças compartilhadas ---------- */

function WhatsAppButton({
  children,
  variant = 'solid',
  className = '',
}: {
  children?: ReactNode
  variant?: 'solid' | 'white'
  className?: string
}) {
  const white = variant === 'white'
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/wa inline-flex min-h-16 items-center justify-center gap-3 rounded-full py-2 pr-6 pl-2 text-lg font-bold whitespace-nowrap transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand active:translate-y-0 ${
        white
          ? 'bg-white text-brand-deep hover:shadow-[0_14px_34px_-14px_rgb(32_35_40/0.45)]'
          : 'bg-brand-deep text-white hover:bg-ink hover:shadow-[0_14px_34px_-14px_rgb(47_125_88/0.8)]'
      } ${className}`}
    >
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/wa:-rotate-12 ${
          white ? 'bg-[#25D366] text-white' : 'bg-white/15 text-white'
        }`}
      >
        <WhatsAppIcon className="size-6" />
      </span>
      {children ?? (
        <>
          <span className="sm:hidden">Falar no WhatsApp</span>
          <span className="hidden sm:inline">Falar com a recepção no WhatsApp</span>
        </>
      )}
      <ArrowRightIcon className="size-5 shrink-0 opacity-60 transition-transform duration-300 group-hover/wa:translate-x-1 group-hover/wa:opacity-100" />
    </a>
  )
}

function QuizLink({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/quiz"
      className={`group inline-flex min-h-14 items-center gap-2 rounded-full px-2 text-lg font-bold whitespace-nowrap underline-offset-4 hover:underline ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      Descobrir minha longevidade
      <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      data-reveal
      className={`mb-4 text-sm font-bold tracking-[0.18em] uppercase ${
        light ? 'text-white/80' : 'text-brand-deep'
      }`}
    >
      {children}
    </p>
  )
}

function Heading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      data-reveal
      style={stagger(1)}
      className={`max-w-3xl text-3xl leading-tight font-extrabold text-balance md:text-5xl ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      {children}
    </h2>
  )
}

/* ---------- Header ---------- */

function Header() {
  const scrolled = useScrolled()
  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? 'border-ink/5 shadow-[0_8px_30px_-18px_rgb(32_35_40/0.35)]'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#topo" aria-label="Longevos, voltar ao início">
          <Logo className="h-8 w-auto md:h-10" />
        </a>
        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex gap-7 text-base font-semibold text-ink-soft">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 hover:text-brand-deep hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Longevos"
            className="hidden size-11 items-center justify-center rounded-full text-ink-soft transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:text-brand-deep sm:inline-flex"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group/wa hidden min-h-11 items-center gap-2 rounded-full bg-brand-deep px-5 text-base font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink sm:inline-flex"
          >
            <WhatsAppIcon className="size-5 transition-transform duration-300 group-hover/wa:-rotate-12" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

/* ---------- 1. Hero ---------- */

const STATS = [
  { value: 350, prefix: '+', label: 'alunos atendidos' },
  { value: 1200, prefix: '+', label: 'avaliações físicas' },
  { value: 2, prefix: '', label: 'unidades em João Pessoa' },
]

function Hero() {
  return (
    <section id="topo" className="overflow-hidden px-5 pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="hero-anim mb-4 text-sm font-bold tracking-[0.18em] text-brand-deep uppercase">
            Academia para 50+ em João Pessoa
          </p>
          <h1
            className="hero-anim text-4xl leading-[1.08] font-extrabold tracking-tight text-balance md:text-6xl"
            style={stagger(1, 120)}
          >
            A primeira academia da Paraíba feita para quem tem{' '}
            <span className="text-brand-deep">50 anos ou mais</span>
          </h1>
          <p
            className="hero-anim mt-6 max-w-xl text-xl leading-relaxed text-ink-soft"
            style={stagger(2, 120)}
          >
            Treino montado a partir da sua avaliação física, com educador físico
            acompanhando e fisioterapeuta e nutricionista na mesma equipe.
          </p>
          <div
            className="hero-anim mt-10 flex flex-col items-start gap-x-6 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={stagger(3, 120)}
          >
            <WhatsAppButton />
            <QuizLink />
          </div>
        </div>

        <div className="relative">
          <figure
            className="hero-anim hero-anim--photo relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] bg-brand-bg"
            style={stagger(2, 120)}
          >
            <video
              src="/videos/hero-loop.mp4"
              poster="/images/real/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Alunos treinando com acompanhamento na Longevos"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5 flex items-center gap-3 text-white lg:left-auto">
              <LogoIcon className="h-8 shrink-0" />
              <span className="text-sm leading-tight font-semibold">
                Treino acompanhado
                <br />
                Unidade Miramar
              </span>
            </figcaption>
          </figure>
          <ul className="mt-6 grid grid-cols-3 gap-3 lg:absolute lg:-bottom-8 lg:-left-10 lg:mt-0 lg:flex lg:flex-col lg:gap-3">
            {STATS.map((s, i) => (
              <li
                key={s.label}
                style={stagger(i + 4, 120)}
                className="hero-anim hero-anim--pop rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_-12px_rgb(32_35_40/0.25)] lg:px-5"
              >
                <strong className="block text-2xl font-extrabold text-brand-deep md:text-3xl">
                  <CountUp value={s.value} prefix={s.prefix} />
                </strong>
                <span className="text-sm leading-tight text-ink-soft md:text-base">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. Problema ---------- */

function Problem() {
  return (
    <Section className="bg-ink text-white">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <Eyebrow light>Por que a Longevos existe</Eyebrow>
          <Heading light>Academia comum foi pensada para outro público</Heading>
        </div>
        <div data-reveal style={stagger(2)} className="space-y-6 text-xl leading-relaxed text-white/80">
          <p>
            Música alta, aparelhos difíceis de ajustar e um professor dividido
            entre vinte alunos. Muita gente acima dos 50 começa animada e desiste
            no segundo mês, com receio de se machucar ou com vergonha de perguntar
            como usa o equipamento.
          </p>
          <p className="text-2xl font-bold text-white">
            Na Longevos, todo mundo que treina ao seu lado tem uma história
            parecida com a sua.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ---------- 3. Cuidado ---------- */

const CARE: { icon: IconType; title: string; text: string }[] = [
  {
    icon: ClipboardIcon,
    title: 'Cada treino parte da sua avaliação',
    text: 'Antes do primeiro exercício você passa por uma avaliação física. O treino é montado respeitando suas limitações, e as reavaliações já estão incluídas no plano.',
  },
  {
    icon: EyeIcon,
    title: 'Profissional por perto durante o treino inteiro',
    text: 'Os educadores físicos acompanham a execução de cada exercício e ajustam a carga com você.',
  },
  {
    icon: UsersIcon,
    title: 'Fisioterapeuta e nutricionista na mesma equipe',
    text: 'Quem cuida do seu treino conversa com quem cuida da sua recuperação e da sua alimentação. Você não precisa repetir sua história em três consultórios diferentes.',
  },
  {
    icon: ShieldIcon,
    title: 'Aparelhos escolhidos para o corpo 50+',
    text: 'Equipamentos com ajustes simples, ambiente acessível e espaço para se movimentar com segurança.',
  },
]

function Care() {
  return (
    <Section id="como-funciona">
      <Eyebrow>Como a Longevos cuida de você</Eyebrow>
      <Heading>Seu treino começa pelo que o seu corpo precisa hoje</Heading>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {CARE.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            data-reveal
            style={stagger(i)}
            className="group rounded-3xl bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgb(32_35_40/0.3)] md:p-10"
          >
            <span className="mb-6 inline-flex transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <Icon className="size-7" />
            </span>
            <h3 className="text-2xl leading-snug font-bold">{title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 4. Modalidades ---------- */

const MODALITIES: { icon: IconType; title: string; text: string; photo: string }[] = [
  {
    icon: DumbbellIcon,
    title: 'Musculação orientada',
    text: 'Força para subir escadas, carregar as compras e manter o equilíbrio.',
    photo: '/images/real/treino-orientado.jpg',
  },
  {
    icon: StretchIcon,
    title: 'Pilates',
    text: 'Fortalece o centro do corpo e melhora a postura com movimentos controlados.',
    photo: '/images/real/pilates-aula.jpg',
  },
  {
    icon: MusicIcon,
    title: 'Dança e aulas coletivas',
    text: 'Ritmo pensado para o corpo 50+, com muita conversa e risada no meio da aula.',
    photo: '/images/real/danca.jpg',
  },
]

function Modalities() {
  return (
    <Section id="modalidades" className="bg-brand-soft">
      <Eyebrow>Modalidades</Eyebrow>
      <Heading>Escolha o jeito de se movimentar que combina com você</Heading>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODALITIES.map(({ icon: Icon, title, text, photo }, i) => (
          <article
            key={title}
            data-reveal
            style={stagger(i, 70)}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-25px_rgb(47_125_88/0.45)]"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={photo}
                alt={title}
                width={1276}
                height={718}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep transition-colors duration-300 group-hover:bg-brand-deep group-hover:text-white">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 5. Comunidade ---------- */

const EVENTS = ['Passeios na praia', 'Bloco de Carnaval', 'Festa Junina', 'Ativa Longevos']

function Community() {
  return (
    <Section className="relative overflow-hidden bg-brand-bg text-white">
      <LogoIcon className="float-slow pointer-events-none absolute -right-10 -bottom-16 h-[28rem] text-white/8 md:right-10" />
      <div className="relative">
        <Eyebrow light>Comunidade</Eyebrow>
        <Heading light>Aqui você ganha companhia para treinar e para comemorar</Heading>
        <p data-reveal style={stagger(2)} className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
          A turma da Longevos se encontra fora da academia também. Muitos alunos
          chegam pelo treino e ficam pelos amigos que fazem aqui.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {EVENTS.map((e, i) => (
            <li
              key={e}
              data-reveal
              style={stagger(i + 3, 80)}
              className="rounded-full transition-colors duration-300 hover:bg-white hover:text-brand-deep border border-white/30 bg-white/10 px-5 py-2.5 text-lg font-semibold"
            >
              {e}
            </li>
          ))}
        </ul>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex min-h-14 items-center gap-3 rounded-full border-2 border-white/40 px-6 text-lg font-bold transition-colors duration-300 hover:border-white hover:bg-white hover:text-brand-deep"
        >
          <InstagramIcon className="size-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          Ver os encontros no Instagram
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  )
}

/* ---------- Nova unidade Miramar ---------- */

const MIRAMAR_PHOTOS = [
  { src: '/images/real/aparelhos.jpg', alt: 'Aparelhos de musculação da unidade Miramar', label: 'Sala de musculação' },
  { src: '/images/real/sala-pilates.jpg', alt: 'Sala de Pilates com aparelhos de madeira', label: 'Sala de Pilates' },
  { src: '/images/real/acolhimento.jpg', alt: 'Professor conversando com alunos na sala de musculação', label: 'Atendimento individual' },
  { src: '/images/real/equipe.jpg', alt: 'Equipe Longevos em frente à unidade Miramar', label: 'Equipe Longevos' },
]

function Miramar() {
  return (
    <Section id="miramar">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Nova unidade Miramar</Eyebrow>
          <Heading>Mais espaço para treinar, conversar e ser bem atendido</Heading>
        </div>
        <WhatsAppButton className="shrink-0">Quero conhecer a unidade</WhatsAppButton>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <figure
          data-reveal
          className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2"
        >
          <img
            src="/images/real/fachada-aerea.jpg"
            width={1276}
            height={718}
            alt="Vista aérea da unidade Longevos em Miramar"
            loading="lazy"
            className="aspect-[4/3] size-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold backdrop-blur">
            Fachada
          </figcaption>
        </figure>
        {MIRAMAR_PHOTOS.map((photo, i) => (
          <figure
            key={photo.src}
            data-reveal
            style={stagger(i + 1)}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={1276}
              height={718}
              loading="lazy"
              className="aspect-[4/3] size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold backdrop-blur">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 6. Como começar ---------- */

const STEPS = [
  {
    title: 'Chame a recepção no WhatsApp',
    text: 'A equipe tira suas dúvidas e marca sua visita.',
  },
  {
    title: 'Faça sua avaliação física',
    text: 'Um profissional conhece seu histórico, suas limitações e seus objetivos.',
  },
  {
    title: 'Receba seu treino',
    text: 'Você escolhe treinar 3 ou 5 vezes por semana e começa com acompanhamento.',
  },
]

function Steps() {
  return (
    <Section>
      <Eyebrow>Como começar</Eyebrow>
      <Heading>Três passos até o seu primeiro treino</Heading>
      <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            data-reveal
            style={stagger(i, 140)}
            className="step relative pt-8"
          >
            <span className="text-6xl font-extrabold text-brand/30 italic">
              0{i + 1}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
            <p className="mt-2 text-lg leading-relaxed text-ink-soft">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-14">
        <WhatsAppButton>Começar pelo passo 1</WhatsAppButton>
      </div>
    </Section>
  )
}

/* ---------- 7. Planos ---------- */

// TODO: confirmar valores com o cliente (R$ 289 a R$ 357 veio de busca e pode estar desatualizado)
const PLAN_STARTING_PRICE = 'R$ 289'
const PERIODS = ['Mensal', 'Trimestral', 'Semestral', 'Anual']

function Plans() {
  return (
    <Section id="planos" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Planos</Eyebrow>
          <Heading>Planos para treinar 3 ou 5 vezes por semana</Heading>
          <p className="mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
            Escolha a frequência que cabe na sua rotina e o período que fica
            melhor para você. Todos os planos incluem avaliações físicas.
          </p>
        </div>

        <div data-reveal style={stagger(1)} className="rounded-[2rem] bg-paper p-8 md:p-10">
          <p className="text-lg text-ink-soft">A partir de</p>
          <p className="mt-1 text-5xl font-extrabold text-ink md:text-6xl">
            {PLAN_STARTING_PRICE}
            <span className="text-2xl font-bold text-ink-soft">/mês</span>
          </p>
          <ul className="mt-8 space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <CheckIcon className="size-6 text-brand-deep" />
              Treinos 3x ou 5x por semana
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="size-6 text-brand-deep" />
              Avaliação e reavaliações físicas incluídas
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="size-6 text-brand-deep" />
              Acompanhamento de educador físico
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {PERIODS.map((p) => (
              <span
                key={p}
                className="rounded-full bg-white px-4 py-1.5 text-base font-semibold text-ink-soft"
              >
                {p}
              </span>
            ))}
          </div>
          <WhatsAppButton className="mt-10 w-full">
            Ver valores com a recepção
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}

/* ---------- 9. Unidades ---------- */

function Units() {
  return (
    <Section id="unidades">
      <Eyebrow>Unidades</Eyebrow>
      <Heading>Duas unidades em João Pessoa</Heading>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {SITE.units.map((unit) => {
          const soon = unit.status === 'Nova'
          return (
            <article
              key={unit.name}
              data-reveal
              style={stagger(SITE.units.indexOf(unit))}
              className={`flex flex-col rounded-3xl p-8 md:p-10 ${
                soon ? 'bg-ink text-white' : 'bg-white'
              }`}
            >
              <span
                className={`inline-flex items-center gap-2 self-start rounded-full px-4 py-1 text-sm font-bold tracking-wide uppercase ${
                  soon ? 'bg-brand text-ink' : 'bg-brand-soft text-brand-deep'
                }`}
              >
                <span className={`live-dot size-2 rounded-full ${soon ? 'bg-ink' : 'bg-brand-deep'}`} />
                {unit.status}
              </span>
              <h3 className="mt-6 text-3xl font-extrabold">{unit.name}</h3>
              <p
                className={`mt-3 flex-1 text-lg leading-relaxed ${
                  soon ? 'text-white/75' : 'text-ink-soft'
                }`}
              >
                {unit.address}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {soon && (
                  <WhatsAppButton variant="white">
                    Quero conhecer a unidade
                  </WhatsAppButton>
                )}
                <a
                  href={unit.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-12 items-center gap-2 text-lg font-bold underline-offset-4 hover:underline ${
                    soon ? 'text-white' : 'text-brand-deep'
                  }`}
                >
                  <MapPinIcon className="size-5" />
                  Ver no mapa
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

/* ---------- 10. Dúvidas ---------- */


function Faq() {
  return (
    <Section id="duvidas" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Dúvidas</Eyebrow>
          <Heading>Perguntas que a recepção mais ouve</Heading>
        </div>
        <div data-reveal style={stagger(1)} className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-xl font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon className="size-6 shrink-0 text-brand-deep transition-transform group-open:rotate-45" />
              </summary>
              <p className="faq-answer pb-6 text-lg leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------- 11. CTA final ---------- */

function FinalCta() {
  return (
    <section className="px-5 pb-20 md:pb-28">
      <div data-reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-bg px-8 py-16 text-white md:px-16 md:py-20">
        <div className="pointer-events-none absolute top-1/2 -right-6 h-[130%] -translate-y-1/2">
          <LogoIcon className="float-slow h-full text-white/10" />
        </div>
        <div className="relative max-w-2xl">
          <Heading light>Venha conhecer a Longevos por dentro</Heading>
          <p className="mt-6 text-xl leading-relaxed text-white/85">
            A recepção responde pelo WhatsApp, explica os planos e marca sua
            avaliação. Se preferir, comece pelo quiz e descubra como está a sua
            longevidade hoje.
          </p>
          <div className="mt-10 flex flex-col items-start gap-x-6 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton variant="white" />
            <QuizLink light />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Rodapé ---------- */

function Footer() {
  return (
    <footer className="bg-ink px-5 pt-16 pb-28 text-white/70 sm:pb-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo variant="white" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-base">
            A 1ª academia fitness sênior da Paraíba. Saúde, longevidade e
            bem-estar ativo para quem tem 50 anos ou mais.
          </p>
        </div>
        <ul className="space-y-3 text-base">
          <li className="flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Longevos"
              className="social-btn social-btn--ig"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da recepção"
              className="social-btn social-btn--wa"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </li>
          <li>
            <a href={SITE.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">
              @longevosespacofitness
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </li>
          <li>© {new Date().getFullYear()} Longevos Espaço Fitness</li>
        </ul>
      </div>
    </footer>
  )
}

/* ---------- CTA fixo no celular ---------- */

function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur sm:hidden">
      <WhatsAppButton className="w-full">Falar no WhatsApp</WhatsAppButton>
    </div>
  )
}

/* ---------- Faixa animada ---------- */

const MARQUEE = [
  'Musculação orientada',
  'Pilates',
  'Dança',
  'Reabilitação',
  'Yoga',
  'Acupuntura',
  'Avaliação física',
  'Comunidade 50+',
]

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="overflow-hidden border-y border-ink/5 bg-brand-deep py-5 text-white" aria-hidden="true">
      <ul className="marquee flex w-max gap-10">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-10 text-xl font-bold whitespace-nowrap italic md:text-2xl">
            {item}
            <LogoIcon className="h-6 text-brand" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Botão flutuante (desktop) ---------- */

function FloatingWhatsApp() {
  const scrolled = useScrolled(600)
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a recepção no WhatsApp"
      className={`group fixed right-6 bottom-6 z-30 hidden size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-14px_rgb(37_211_102/0.9)] transition-[opacity,transform] duration-500 hover:scale-105 sm:flex ${
        scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span className="wa-fab-ring" aria-hidden="true" />
      <WhatsAppIcon className="wa-fab-icon relative size-8" />
      <span className="pointer-events-none absolute right-full mr-3 translate-x-2 rounded-full bg-ink px-4 py-2 text-base font-bold whitespace-nowrap text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Fale com a recepção
      </span>
    </a>
  )
}
