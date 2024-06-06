module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_it-services/*.md',
    './_software-services/*.md',
    './team/*.md',
    './*.html',
    './*.md'
  ],
  darkMode: false,
  theme: {
    colors: {
      'primary': '#e5261f',
      'primary-dark': '#a01b16',
      'secondary': '#f88379',
      'black': '#2f2f41',
      'white': '#ffffff',
      'white-offset': '#fff6f8',
      'steel': '#5c5a5a',
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif', '-apple-system'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}