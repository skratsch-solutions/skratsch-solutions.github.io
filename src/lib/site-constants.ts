export const capabilityGroups = [
  {
    id: 'managed-it',
    href: '/run/',
    icon: '/images/icons/capabilities/run.svg',
    kicker: 'RUN',
    metric: '24/7-minded',
    title: 'Managed IT',
    body: 'Keep the systems your business depends on secure, supported, resilient, and working.',
  },
  {
    id: 'consulting',
    href: '/consulting/',
    icon: '/images/icons/capabilities/improve.svg',
    kicker: 'IMPROVE',
    metric: '5-100 staff',
    title: 'Technology Consulting',
    body: 'Turn technology decisions into a practical roadmap tied to the way your business actually operates.',
  },
  {
    id: 'software',
    href: '/software-development/',
    icon: '/images/icons/capabilities/build.svg',
    kicker: 'BUILD',
    metric: 'Custom fit',
    title: 'Software & Automation',
    body: 'Create applications, integrations, and automation when off-the-shelf tools stop being enough.',
  },
  {
    id: 'data-ai',
    href: '/data-services/',
    icon: '/images/icons/capabilities/understand.svg',
    kicker: 'UNDERSTAND',
    metric: 'Clean signal',
    title: 'Data & AI',
    body: 'Make data useful, modernize reporting, and apply AI where it creates measurable leverage.',
  },
] as const

export const primaryNavigationItems = [
  { href: '/run/', label: 'RUN' },
  { href: '/consulting/', label: 'IMPROVE' },
  { href: '/software-development/', label: 'BUILD' },
  { href: '/data-services/', label: 'UNDERSTAND' },
  { href: '/contact/', label: 'CONTACT' },
] as const
