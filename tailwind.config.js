/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#06100B',
          soft: '#0B1510',
        },
        card: '#14251A',
        accent: {
          DEFAULT: '#A8E95A',
          bright: '#9BEF45',
        },
        muted: '#9AA79D',
        offwhite: '#F4F7F3',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(168, 233, 90, 0.25)',
        'glow-sm': '0 0 15px rgba(168, 233, 90, 0.18)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top right, rgba(168,233,90,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
}
