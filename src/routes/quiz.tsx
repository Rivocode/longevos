import { createFileRoute } from '@tanstack/react-router'

import { Quiz } from '#/components/quiz/Quiz'
import { pageHead } from '#/content/seo'

export const Route = createFileRoute('/quiz')({
  head: () =>
    pageHead({
      title: 'Quiz: descubra o treino ideal para você | Longevos',
      description:
        'Responda 6 perguntas rápidas e receba pelo WhatsApp a indicação de treino da Longevos, academia para 50+ em João Pessoa.',
      path: '/quiz',
    }),
  component: Quiz,
})
