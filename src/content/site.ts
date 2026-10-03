// Formato: 55 + DDD + número, só dígitos. Por padrão usa o número da Rivocode
// (demo); em produção defina VITE_WHATSAPP_NUMBER com o número da recepção.
const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || '5583991511761'
const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e quero conhecer a Longevos.'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const SITE = {
  whatsapp: whatsappLink(WHATSAPP_MESSAGE),
  instagram: 'https://www.instagram.com/longevosespacofitness/',
  email: 'contato@somoslongevos.com.br',
  units: [
    {
      name: 'Aeroclube',
      status: 'Aberta',
      address: 'R. Mírian Barreto Rabelo, 655, Jardim Oceania, João Pessoa (PB)',
      map: 'https://maps.app.goo.gl/TvWnBt3BEJETCVCq6',
    },
    {
      name: 'Miramar',
      status: 'Nova',
      // TODO: confirmar endereço completo da unidade Miramar
      address:
        'Mais estrutura e mais cuidado, com a mesma equipe que fez da Longevos referência em longevidade ativa na Paraíba.',
      map: 'https://maps.app.goo.gl/Sgcvz43ULdWYTTB57',
    },
  ],
} as const
