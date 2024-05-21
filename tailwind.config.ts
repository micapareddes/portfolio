import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        RED: '#E23728',
        BLACK: '#1F1F1B',
        WHITE: '#F3F3E9',
        GRAY: '#74746D',
      },
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
