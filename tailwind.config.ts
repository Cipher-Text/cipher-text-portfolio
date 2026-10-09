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
        sans: ['var(--font-geist)', 'Helvetica Neue', 'system-ui', 'sans-serif'],
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
        signal: { DEFAULT: '#19B48A', deep: '#0D7E5F' /* handoff #0E8A68 is 4.0:1 on mist; darkened for AA (4.7:1) */ },
        slate: { DEFAULT: '#4B5A63' },
        'muted-dark': { DEFAULT: '#B4C1C9', dim: '#8FA0AB' },
        mist: '#F5F7F6',
        line: { DEFAULT: '#DDE3E1', strong: '#C3CCCA' },
      },
    },
  },
  plugins: [],
}
export default config
