import { FAQ } from './faq'
import { SITE } from './site'

/** Domínio público do site (sem barra no final). */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://somoslongevos.com.br'
).replace(/\/$/, '')

export const SITE_NAME = 'Longevos Espaço Fitness'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

type PageMeta = {
  title: string
  description: string
  path: string
}

/** Meta tags e canonical de uma página. */
export function pageHead({ title, description, path }: PageMeta) {
  const url = `${SITE_URL}${path}`
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Professora acompanhando aluna na musculação da Longevos' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

export function jsonLd(data: unknown) {
  return { type: 'application/ld+json', children: JSON.stringify(data) }
}

const ORGANIZATION_ID = `${SITE_URL}/#organizacao`

/** Schema da home: organização, as duas unidades, o site e o FAQ. */
export function homeSchema() {
  const [aeroclube, miramar] = SITE.units
  const shared = {
    '@type': 'HealthClub',
    parentOrganization: { '@id': ORGANIZATION_ID },
    url: SITE_URL,
    image: OG_IMAGE,
    email: SITE.email,
    sameAs: [SITE.instagram],
    audience: {
      '@type': 'PeopleAudience',
      suggestedMinAge: 50,
    },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        alternateName: 'Longevos Academias',
        url: SITE_URL,
        logo: `${SITE_URL}/logo-longevos.svg`,
        email: SITE.email,
        sameAs: [SITE.instagram],
        description:
          'A primeira academia fitness sênior da Paraíba, para quem tem 50 anos ou mais.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#site`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'pt-BR',
        publisher: { '@id': ORGANIZATION_ID },
      },
      {
        ...shared,
        '@id': `${SITE_URL}/#unidade-aeroclube`,
        name: `Longevos ${aeroclube.name}`,
        hasMap: aeroclube.map,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Mírian Barreto Rabelo, 655',
          addressLocality: 'João Pessoa',
          addressRegion: 'PB',
          postalCode: '58037-195',
          addressCountry: 'BR',
        },
      },
      {
        ...shared,
        '@id': `${SITE_URL}/#unidade-miramar`,
        name: `Longevos ${miramar.name}`,
        hasMap: miramar.map,
        // TODO: completar rua, número e CEP da unidade Miramar
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'João Pessoa',
          addressRegion: 'PB',
          addressCountry: 'BR',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#duvidas`,
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }
}
