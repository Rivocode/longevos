import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

import { INTRO_DONE_EVENT } from './landing/motion'
import {
  ICON_BODY,
  ICON_HEAD,
  LETTERS,
  LOGO_VIEWBOX,
  TAGLINE,
} from './logo-paths'

// Linha do tempo (segundos)
const LETTER_START = 0.9
const LETTER_STAGGER = 0.16
const LOADED_AT = LETTER_START + LETTER_STAGGER * LETTERS.length + 0.5
const EXIT_AT = LOADED_AT + 0.9

export function IntroSplash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) {
      window.dispatchEvent(new Event(INTRO_DONE_EVENT))
      return
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const skip = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        setVisible(false)
      }
    }
    window.addEventListener('keydown', skip)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', skip)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="intro"
      style={{ '--exit-at': `${EXIT_AT}s` } as CSSProperties}
      role="presentation"
      onClick={() => setVisible(false)}
      onAnimationEnd={(e) => {
        // intro-exit (normal) ou intro-fade-out (prefers-reduced-motion)
        if (e.target === e.currentTarget) setVisible(false)
      }}
    >
      <div className="intro__logo">
        <svg viewBox={LOGO_VIEWBOX} aria-label="Longevos Espaço Fitness">
          <g className="intro__icon">
            <path className="intro__body" d={ICON_BODY} pathLength={1} />
            <path className="intro__head" d={ICON_HEAD} />
          </g>

          <g className="intro__word">
            {LETTERS.map((letter, i) => (
              <path
                key={i}
                className="intro__letter"
                d={letter.d}
                pathLength={1}
                style={
                  {
                    '--delay': `${LETTER_START + i * LETTER_STAGGER}s`,
                  } as CSSProperties
                }
              />
            ))}
          </g>

          <path
            className="intro__tagline"
            d={TAGLINE}
            style={{ '--delay': `${LOADED_AT - 0.35}s` } as CSSProperties}
          />
        </svg>

        <div
          className="intro__progress"
          style={
            {
              '--delay': `${LETTER_START}s`,
              '--duration': `${LOADED_AT - LETTER_START}s`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  )
}
