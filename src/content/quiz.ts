// Perguntas espelham o quiz atual (quiz.somoslongevos.com.br/lancamento),
// reordenadas: primeiro o perfil, contato só no final.

export type QuizQuestion = {
  id: string
  title: string
  hint?: string
  summaryLabel: string
  options: string[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'perfil',
    title: 'Para quem você está procurando a academia?',
    summaryLabel: 'Perfil',
    options: [
      'Para mim, tenho 60 anos ou mais',
      'Para mim, tenho entre 50 e 59 anos',
      'Para meu pai, mãe ou outro familiar',
    ],
  },
  {
    id: 'objetivo',
    title: 'Qual é o principal objetivo com a atividade física?',
    summaryLabel: 'Objetivo',
    options: [
      'Ganhar força e mobilidade',
      'Melhorar saúde e disposição',
      'Começar com segurança',
      'Socializar e manter uma rotina ativa',
    ],
  },
  {
    id: 'interesse',
    title: 'O que mais interessa neste momento?',
    summaryLabel: 'Interesse',
    options: ['Musculação', 'Pilates', 'Quero conhecer as duas opções'],
  },
  {
    id: 'frequencia',
    title: 'Hoje, com que frequência pratica exercícios?',
    summaryLabel: 'Pratica exercícios',
    options: ['Regularmente', 'De vez em quando', 'Não pratico'],
  },
  {
    id: 'periodo',
    title: 'Qual período costuma funcionar melhor?',
    summaryLabel: 'Melhor período',
    options: ['Manhã', 'Tarde'],
  },
  {
    id: 'unidade',
    title: 'Qual unidade fica melhor para você?',
    summaryLabel: 'Unidade',
    options: ['Aeroclube', 'Miramar', 'Tanto faz'],
  },
]

/** Uma frase de retorno para cada objetivo, mostrada no resultado. */
export const GOAL_FEEDBACK: Record<string, string> = {
  'Ganhar força e mobilidade':
    'Seu treino começa pela musculação orientada, com carga ajustada a partir da avaliação física.',
  'Melhorar saúde e disposição':
    'A combinação de treino orientado e acompanhamento com nutricionista costuma ser o melhor ponto de partida.',
  'Começar com segurança':
    'Antes do primeiro exercício você faz a avaliação física, e o educador físico acompanha cada movimento.',
  'Socializar e manter uma rotina ativa':
    'As aulas em grupo e os encontros da turma Longevos são o lugar certo para você.',
}
