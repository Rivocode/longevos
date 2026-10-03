import { createFileRoute } from '@tanstack/react-router'

import { Quiz } from '#/components/quiz/Quiz'

export const Route = createFileRoute('/quiz')({
  head: () => ({
    meta: [{ title: 'Descubra sua longevidade | Longevos' }],
  }),
  component: Quiz,
})
