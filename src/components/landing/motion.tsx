import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export const INTRO_DONE_EVENT = 'longevos:intro-done'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Revela elementos com `data-reveal` quando entram na tela.
 * Sem JS (ou antes da hidratação) tudo fica visível; a classe
 * `reveal-ready` no <html> é o que ativa o estado inicial escondido.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (prefersReducedMotion()) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    root.classList.add('reveal-ready')
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}

/** Atraso em cascata para itens de uma lista. */
export const stagger = (i: number, step = 90): CSSProperties =>
  ({ '--d': `${i * step}ms` }) as CSSProperties

/** Número que conta de 0 até o valor quando aparece na tela. */
export function CountUp({
  value,
  prefix = '',
  duration = 1400,
}: {
  value: number
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setShown(Math.round(value * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    // Espera a abertura terminar para não contar escondido atrás dela
    const begin = () => io.observe(el)
    if (document.querySelector('.intro')) {
      window.addEventListener(INTRO_DONE_EVENT, begin, { once: true })
    } else begin()
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener(INTRO_DONE_EVENT, begin)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {shown.toLocaleString('pt-BR')}
    </span>
  )
}

/** true depois que a página rolou além de `offset` px. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}
