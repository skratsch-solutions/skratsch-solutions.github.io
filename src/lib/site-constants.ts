export const capabilityGroups = [
  {
    id: 'managed-it',
    href: '/run/',
    kicker: 'RUN',
    metric: '24/7-minded',
    title: 'Managed IT',
    body: 'Keep the systems your business depends on secure, supported, resilient, and working.',
  },
  {
    id: 'consulting',
    href: '/consulting/',
    kicker: 'IMPROVE',
    metric: '5-100 staff',
    title: 'Technology Consulting',
    body: 'Turn technology decisions into a practical roadmap tied to the way your business actually operates.',
  },
  {
    id: 'software',
    href: '/software-development/',
    kicker: 'BUILD',
    metric: 'Custom fit',
    title: 'Software & Automation',
    body: 'Create applications, integrations, and automation when off-the-shelf tools stop being enough.',
  },
  {
    id: 'data-ai',
    href: '/data-services/',
    kicker: 'UNDERSTAND',
    metric: 'Clean signal',
    title: 'Data & AI',
    body: 'Make data useful, modernize reporting, and apply AI where it creates measurable leverage.',
  },
] as const

export const primaryNavigationItems = [
  { href: '/run/', label: 'RUN' },
  { href: '/consulting/', label: 'Consulting' },
  { href: '/software-development/', label: 'Software' },
  { href: '/data-services/', label: 'Data' },
  { href: '/contact/', label: 'Contact' },
] as const
