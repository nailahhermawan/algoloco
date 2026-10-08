/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          map: 'rgb(var(--color-paper-map-rgb) / <alpha-value>)',
          'map-light': 'rgb(var(--color-paper-map-light-rgb) / <alpha-value>)',
          ticket: 'rgb(var(--color-paper-ticket-rgb) / <alpha-value>)',
        },
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
        mat: {
          DEFAULT: 'rgb(var(--color-cutting-mat-rgb) / <alpha-value>)',
          grid: 'var(--color-cutting-mat-grid)',
        },
        rail: {
          coral: 'var(--color-rail-coral)',
          mustard: 'var(--color-rail-mustard)',
          teal: 'var(--color-rail-teal)',
          blue: 'var(--color-rail-blue)',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        paper: '0 2px 6px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'paper-lifted': '0 6px 12px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
