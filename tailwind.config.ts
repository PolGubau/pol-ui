import { type Config } from 'tailwindcss'
import { poluiPlugin } from './src'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [poluiPlugin()],
  theme: {
    extend: {
      keyframes: {
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(40%)',
          },
        },
        'make-it-bigger': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '80%': {
            transform: 'translateY(-30%)',
          },
          '90%': {
            transform: 'translateY(-10%) scale(1.75)',
          },
          '100%': {
            transform: 'translateY(0%) scale(2)',
            opacity: '30%',
          },
        },
      },
      animation: {
        'fade-out-down': 'fade-out-down linear forwards',
        'make-it-bigger': 'make-it-bigger linear forwards',
      },
      supports: {
        'no-scroll-driven-animations': 'not(animation-timeline: scroll())',
      },
    },
  },
}

export default config
