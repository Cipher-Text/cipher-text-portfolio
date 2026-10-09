import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Redesign fonts (loaded in the (site) layout)
        geist: ['var(--font-geist)', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        control: '8px',
        card: '14px',
        'card-lg': '18px',
        band: '22px',
      },
      maxWidth: {
        container: '1240px',
      },
      letterSpacing: {
        label: '0.08em',
        display: '-0.035em',
        heading: '-0.03em',
      },
      fontSize: {
        h1: ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '600' }],
        h2: ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        label: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.08em' }],
      },
      colors: {
        // Redesign tokens
        ink: '#0B1015',
        graphite: '#121A21',
        'line-dark': '#1E2A33',
        signal: { DEFAULT: '#19B48A', deep: '#0E8A68' },
        slate: { DEFAULT: '#4B5A63' },
        'muted-dark': { DEFAULT: '#B4C1C9', dim: '#8FA0AB' },
        mist: '#F5F7F6',
        line: { DEFAULT: '#DDE3E1', strong: '#C3CCCA' },
        primary: {
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c3df',
          300: '#66a5cf',
          400: '#3387bf',
          500: '#02416d', // Your main primary
          600: '#013a62',
          700: '#013357',
          800: '#012c4c',
          900: '#011e35',
          950: '#00101d',
          DEFAULT: '#02416d',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f98b8a',
          500: '#f87573', // Your main secondary
          600: '#e55553',
          700: '#b63633',
          800: '#8c2927',
          900: '#6b1f1e',
          950: '#3b0d0c',
          DEFAULT: '#f87573',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#f9d57b',
          400: '#fcd34d',
          500: '#ffbe58', // Your main accent
          600: '#e0a23e',
          700: '#b7791f',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#ffbe58',
        },
      },
    },
  },
  plugins: [],
}
export default config
