export type ServiceCollectionKey = 'consulting' | 'dataServices' | 'itServices' | 'softwareDevelopment'

export type ServiceGroup = {
  basePath: string
  collection: ServiceCollectionKey
  description: string
  heading: string
  kicker: string
  slug: 'consulting' | 'data-services' | 'it-services' | 'software-development'
  title: string
}

export const serviceGroups = {
  itServices: {
    basePath: '/it-services/',
    collection: 'itServices',
    description: 'Tailored business IT services for resilient, secure, and forward-looking operations.',
    heading: 'Tailored Business IT Services',
    kicker: 'RUN',
    slug: 'it-services',
    title: 'IT Services',
  },
  consulting: {
    basePath: '/consulting/',
    collection: 'consulting',
    description: 'Technology consulting that aligns decisions, policies, and roadmaps with business goals.',
    heading: 'Technology Consulting Services',
    kicker: 'IMPROVE',
    slug: 'consulting',
    title: 'Consulting',
  },
  softwareDevelopment: {
    basePath: '/software-development/',
    collection: 'softwareDevelopment',
    description: 'Custom software, configuration, customization, and integrations built around how the business works.',
    heading: 'Custom Software Solutions Aligned with Your Goals',
    kicker: 'BUILD',
    slug: 'software-development',
    title: 'Software Development',
  },
  dataServices: {
    basePath: '/data-services/',
    collection: 'dataServices',
    description: 'Data management, dashboards, analytics, and platform work that turn information into leverage.',
    heading: 'Empowering Business Through Data',
    kicker: 'UNDERSTAND',
    slug: 'data-services',
    title: 'Data Services',
  },
} as const satisfies Record<ServiceCollectionKey, ServiceGroup>

export const getServiceRoute = (serviceGroup: ServiceGroup, serviceSlug: string) =>
  `${serviceGroup.basePath}${serviceSlug}/`
