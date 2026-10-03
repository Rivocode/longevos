import { createFileRoute } from '@tanstack/react-router'

import { IntroSplash } from '#/components/IntroSplash'
import { LandingPage } from '#/components/landing/LandingPage'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <IntroSplash />
      <LandingPage />
    </>
  )
}
