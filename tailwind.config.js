const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
  },
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_it-services/*.md',
    './_software-services/*.md',
    './team/*.md',
    './*.html',
    './*.md',
    './*.svg',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    colors: {
      'primary': '#3A64B2',
      'primary-dark': '#C59B4D',
      'secondary': '#6098FF',
      'black': '#2f2f41',
      'white': '#ffffff',
      'white-offset': '#e8e8e8',
      'steel': '#5c5a5a',
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif', '-apple-system'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite-typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
  safelist: [
    'hero-it-application-hosting',
    'hero-it-backup-recovery',
    'hero-it-cloud-migration',
    'hero-it-email-management',
    'hero-it-staff-augmentation',
    'hero-it-support',
    'hero-it-microsoft-365',
    'hero-it-network-management',
    'hero-it-technology-assessment',
    'hero-software-configuration',
    'hero-software-customization',
    'hero-software-development',
    'hero-software-integration',
    'hero-cookie-policy',
  ],
}