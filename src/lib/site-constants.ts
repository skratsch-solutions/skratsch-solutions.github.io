export const capabilityGroups = [
  {
    id: 'managed-it',
    kicker: 'RUN',
    title: 'Managed IT',
    body: 'Keep the systems your business depends on secure, supported, resilient, and working.',
  },
  {
    id: 'consulting',
    kicker: 'IMPROVE',
    title: 'Technology Consulting',
    body: 'Turn technology decisions into a practical roadmap tied to the way your business actually operates.',
  },
  {
    id: 'software',
    kicker: 'BUILD',
    title: 'Software & Automation',
    body: 'Create applications, integrations, and automation when off-the-shelf tools stop being enough.',
  },
  {
    id: 'data-ai',
    kicker: 'UNDERSTAND',
    title: 'Data & AI',
    body: 'Make data useful, modernize reporting, and apply AI where it creates measurable leverage.',
  },
] as const

export const primaryNavigationItems = [
  { href: '/it-services/', label: 'IT Services' },
  { href: '/consulting/', label: 'Consulting' },
  { href: '/software-development/', label: 'Software' },
  { href: '/data-services/', label: 'Data' },
  { href: '/contact/', label: 'Contact' },
] as const
