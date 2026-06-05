import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#ebe4d9',
          300: '#e0d5c7',
          400: '#d5c6b5',
          500: '#cbb7a3',
          600: '#b69a88',
          700: '#a17d6d',
          800: '#8c6b5c',
          900: '#76594b',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      zIndex: {
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
  plugins: [],
}

export default config
