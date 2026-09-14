/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Syne"', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      colors: {
        carbon: {
          950: '#000000',
          900: '#080808',
          850: '#0F0F10',
          800: '#151517',
          750: '#1C1C1F',
          700: '#26262B',
          600: '#38383F',
          500: '#52525B',
        },
        silver: {
          DEFAULT: '#D4D4D8',
          light: '#F4F4F5',
          metallic: '#C4C4C8',
          chrome: '#E4E4E7',
          dark: '#A1A1AA',
          muted: '#71717A',
          foil: '#E2E8F0',
        },
        jungle: {
          deep: '#000000',
          primary: '#0F0F10',
          mid: '#151517',
          secondary: '#1C1C1F',
          accent: '#26262B',
        },
        gold: {
          DEFAULT: '#D4D4D8',
          light: '#F4F4F5',
          dark: '#A1A1AA',
          glow: 'rgba(212, 212, 216, 0.15)',
        },
        ivory: {
          DEFAULT: '#F4F4F5',
          muted: 'rgba(244, 244, 245, 0.75)',
          faint: 'rgba(244, 244, 245, 0.45)',
        },
      },
      letterSpacing: {
        'tighter-custom': '-0.05em',
        'tightest': '-0.08em',
        'widest-custom': '0.3em',
      },
    },
  },
  plugins: [],
}
