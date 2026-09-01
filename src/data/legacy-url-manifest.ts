type LegacyRouteStatus = 'preserve' | 'inventory'

type LegacyRoute = {
  sourcePath: string
  legacyUrl: string | null
  status: LegacyRouteStatus
}

type LegacyCollectionRoute = {
  collection: 'consulting' | 'data-services' | 'it-services' | 'software-development'
  sourceDir: string
  baseUrl: string
  slugs: readonly string[]
}

export const legacyTopLevelRoutes = [
  { sourcePath: '404.html', legacyUrl: '/404.html', status: 'preserve' },
  { sourcePath: 'about.md', legacyUrl: '/about/', status: 'preserve' },
  { sourcePath: 'consultation.md', legacyUrl: '/consultation/', status: 'preserve' },
  { sourcePath: 'consulting.md', legacyUrl: '/consulting/', status: 'preserve' },
  { sourcePath: 'contact.md', legacyUrl: '/contact/', status: 'preserve' },
  { sourcePath: 'cookie-policy.md', legacyUrl: '/cookie-policy/', status: 'preserve' },
  { sourcePath: 'data-services.md', legacyUrl: '/data-services/', status: 'preserve' },
  { sourcePath: 'faq.md', legacyUrl: '/faq/', status: 'preserve' },
  { sourcePath: 'index.md', legacyUrl: '/', status: 'preserve' },
  { sourcePath: 'it-services.md', legacyUrl: '/it-services/', status: 'preserve' },
  { sourcePath: 'posts.md', legacyUrl: '/posts/', status: 'inventory' },
  { sourcePath: 'privacy-policy.md', legacyUrl: '/privacy-policy/', status: 'preserve' },
  { sourcePath: 'software-development.md', legacyUrl: '/software-development/', status: 'preserve' },
  { sourcePath: 'team.md', legacyUrl: '/team/', status: 'preserve' },
  { sourcePath: 'terms-conditions.md', legacyUrl: '/terms-conditions/', status: 'preserve' },
] as const satisfies readonly LegacyRoute[]

export const legacyCollectionRoutes = [
  {
    collection: 'it-services',
    sourceDir: '_it-services',
    baseUrl: '/it-services/',
    slugs: [
      'application-hosting',
      'backup-and-recovery',
      'cloud-migration',
      'email-management',
      'it-staff-augmentation',
      'it-support',
      'microsoft-365',
      'network-management',
      'technology-assessment',
      'technology-selection',
      'voip-business-phones',
    ],
  },
  {
    collection: 'consulting',
    sourceDir: '_consulting',
    baseUrl: '/consulting/',
    slugs: [
      'business-continuity',
      'business-productivity',
      'growing-businesses',
      'infomation-security',
      'it-policies-procedures',
      'it-strategy',
      'new-office-setup',
      'technology-advisor',
      'work-at-home',
    ],
  },
  {
    collection: 'software-development',
    sourceDir: '_software-development',
    baseUrl: '/software-development/',
    slugs: [
      'configuration',
      'customization',
      'development',
      'integration',
    ],
  },
  {
    collection: 'data-services',
    sourceDir: '_data-services',
    baseUrl: '/data-services/',
    slugs: [
      'business-analytics',
      'data-management',
      'database-administration',
      'microsoft-power-platform',
      'reporting-dashboards',
    ],
  },
] as const satisfies readonly LegacyCollectionRoute[]

export const legacyPostSourceSlugs = [
  '12-22-2023-setup-small-business-vpn',
  '2023-09-01-github-101',
  '2023-09-02-gitflow-getting-started',
  '2023-09-03-trunk-based-development',
  '2023-09-04-github-flow',
  '2023-09-05-intro-to-azure-devops',
  '2023-09-05-liquibase-a-beginners-guide',
  '2023-09-06-understanding-azure-boards',
  '2023-09-07-getting-started-with-azure-repos',
  '2023-09-08-building-with-azure-pipelines',
  '2023-09-09-azure-devops-part-5',
  '2023-09-10-azure-devops-part-6',
  '2023-09-11-azure-devops-part-7',
  '2023-09-12-azure-devops-part-8',
  '2023-09-13-deploy-pbi-with-ado',
  '2023-09-19-demystifying-azure-devops',
  '2024-01-13-small-business-owners-know-your-logins',
  '2024-01-15-computer-file-management-for-businesses',
  '2024-02-15-benefits-of-two-factor-authentication',
  '2024-03-01-ghosts-in-the-machine',
  '2024-03-25-data-breach-prevention-essentials',
  '2024-03-26-miccrosoft-office-365-business-apps',
  '2024-04-01-microsoft-word-styles-themes-templates',
  '2024-04-22-scan-paper-documents-with-microsoft-lens',
  '2024-05-13-ms-access-databases-make-the-move',
  '2024-06-10-sharepoint-and-onedrive-for-business',
  '2024-06-14-email-aliases-distribution-lists',
  '2024-06-16-microsoft-teams-features-an-all-in-one-app',
  '2024-06-19-good-password-management-practices',
  '2024-06-19-prevent-security-breaches',
  '2024-06-20-6-ways-to-handle-email-spam-junk',
  '2024-06-20-7-common onedrive-issues',
  '2024-06-20-archiving-email-with-microsoft-365',
  '2024-06-20-cloudflare-security-breach-password-security',
  '2024-06-20-google-workspace-vs-microsoft-365',
  '2024-06-20-managing-outlook-contacts-and-contact-lists',
  '2024-06-20-mastering-microsoft-365-email-and-document-management',
  '2024-06-20-searching-for-emails-in-outlook-9-tips',
  '2024-06-20-sending-links-vs-email-attachments-in-outlook',
  '2024-06-20-using-a-shared-mailbox-in-outlook',
  '2024-06-21-5-small-business-project-management-tips',
  '2024-06-21-5-ways-dropbox-is-giving-a-false-sense-of-security',
  '2024-06-21-7-Work-At-Home-Productivity-Tips',
  '2024-06-21-api-access-small-business-software',
  '2024-06-21-bad-data-is-bad-for-business',
  '2024-06-21-best-business-dashboards',
  '2024-06-21-best-practices-for-custom-software-rollout',
  '2024-06-21-business-firewalls-computer-network',
  '2024-06-21-buying-a-server',
  '2024-06-21-buying-new-computers',
  '2024-06-21-byod-risks-employee-owned-devices',
  '2024-06-21-calendly-vs-acuity-vs-microsoft-bookings',
  '2024-06-21-choosing-a-software-development-company',
  '2024-06-21-cloud-vs-desktop-software',
  '2024-06-21-common-mistakes-when-buying-computers',
  '2024-06-21-consider-custom-software-development',
  '2024-06-21-custom-software-development-care-feeding',
  '2024-06-21-custom-software-weighing-your-options',
  '2024-06-21-data-migration-don\'t-leave-to-last-minute',
  '2024-06-21-data-migration-moving-your-business-data',
  '2024-06-21-data-silos-small-business',
  '2024-06-21-digital-spring-cleaning',
  '2024-06-21-disaster-recovery-planning-lessons',
  '2024-06-21-django-and-python-software-development',
  '2024-06-21-dual-sim-card-phones-worth-it-for-business',
  '2024-06-23-agile-vs-waterfall',
  '2024-06-23-why-now-is-the-right-time-for-cloud',
  '2024-06-24-inbox-zero-worth-it-or-waste-of-time',
  '2024-06-27-Embracing-Agile-for-Enhanced-Software-Delivery',
  '2024-06-27-innovations-that-can-transform-your-business',
  '2024-06-27-second-phone-number-apps',
] as const

export const legacyTeamRoutes = [
  'bill-mcdonald',
  'mike-vance',
  'peter-van-eijk',
  'robert-johnson',
  'sage-kirk',
  'susan-shelton',
  'tamara-ells',
] as const

export const getLegacyCollectionUrls = () => legacyCollectionRoutes.flatMap((legacyCollectionRoute) =>
  legacyCollectionRoute.slugs.map((slug) => `${legacyCollectionRoute.baseUrl}${slug}/`)
)

export const getLegacyTeamUrls = () => legacyTeamRoutes.map((slug) => `/team/${slug}/`)

export const getLegacyPostInventory = () => legacyPostSourceSlugs.map((sourceSlug) => {
  const datedPostMatch = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-(?<slug>.+)$/.exec(sourceSlug)

  if (!datedPostMatch?.groups) {
    return {
      sourcePath: `_posts/${sourceSlug}`,
      legacyUrl: null,
      status: 'inventory' as const,
    }
  }

  const { year, month, day, slug } = datedPostMatch.groups

  return {
    sourcePath: `_posts/${sourceSlug}`,
    legacyUrl: `/${year}/${month}/${day}/${slug}/`,
    status: 'inventory' as const,
  }
})

export const legacyRouteInventory = {
  collectionUrls: getLegacyCollectionUrls(),
  postRoutes: getLegacyPostInventory(),
  teamUrls: getLegacyTeamUrls(),
  topLevelRoutes: legacyTopLevelRoutes,
} as const
