import { createFileRoute } from '@tanstack/react-router'

import { IntroSplash } from '#/components/IntroSplash'
import { LandingPage } from '#/components/landing/LandingPage'
import { homeSchema, jsonLd, pageHead } from '#/content/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      title: 'Academia para 50+ e idosos em João Pessoa | Longevos',
      description:
        'Primeira academia da Paraíba para 50+ e idosos. Musculação, Pilates e dança com avaliação física, fisioterapeuta e nutricionista. Aeroclube e Miramar.',
      path: '/',
    }),
    scripts: [jsonLd(homeSchema())],
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <IntroSplash />
      <LandingPage />
    </>
  )
}
