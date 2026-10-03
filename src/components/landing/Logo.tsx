import {
  ICON_BODY,
  ICON_HEAD,
  ICON_VIEWBOX,
  LETTERS,
  LOGO_COLORS,
  LOGO_VIEWBOX,
  TAGLINE,
} from '../logo-paths'

type LogoProps = {
  variant?: 'color' | 'white'
  className?: string
}

export function Logo({ variant = 'color', className }: LogoProps) {
  const isWhite = variant === 'white'
  const green = isWhite ? '#fff' : LOGO_COLORS.green
  const dark = isWhite ? '#fff' : LOGO_COLORS.dark

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label="Longevos Espaço Fitness"
    >
      <path fill={green} d={ICON_BODY} />
      <path fill={dark} d={ICON_HEAD} />
      {LETTERS.map((letter, i) => (
        <path key={i} fill={dark} d={letter.d} />
      ))}
      <path
        fill={green}
        stroke={green}
        strokeWidth={0.55}
        strokeLinejoin="round"
        d={TAGLINE}
      />
    </svg>
  )
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox={ICON_VIEWBOX} className={className} aria-hidden="true">
      <path fill="currentColor" d={ICON_BODY} />
      <path fill="currentColor" d={ICON_HEAD} />
    </svg>
  )
}
