/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': '#050505',
        'secondary-black': '#0A0A0A',
        'deep-red': '#3B0000',
        'neon-red': '#8B0000',
        'neon-crimson': '#8B0000',
        'soft-white': '#EDEDED',
        'muted-gray': '#9A9A9A',
        'charcoal': '#1a1a1a',
      },
      fontFamily: {
        'gothic': ['"Cinzel Decorative"', 'serif'],
        'serif': ['"Cormorant Garamond"', 'serif'],
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
        'grain': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAAAAAAAAAABMTExERERmZmZnOc0OAAAACHRSTlMAMwA3M2YzM2Y3OJ2uAAAAJUlEQVQ4y2NgQAX8DIoMOAw4AAMjI4KwJgQjIyMEAwM2wMDIwMDIwMDIwMgIAAA50wQF0+0w1gAAAABJRU5ErkJggg==')",
      },
      boxShadow: {
        'red-glow': '0 0 30px rgba(139, 0, 0, 0.45), 0 0 60px rgba(59, 0, 0, 0.3)',
        'red-glow-strong': '0 0 50px rgba(139, 0, 0, 0.6), 0 0 100px rgba(59, 0, 0, 0.4)',
        'inner-red': 'inset 0 0 30px rgba(139, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'noise': 'noise 0.2s steps(4) infinite',
        'fade-in-up': 'fade-in-up 1.2s ease-out forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'drift': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(20px) translateY(-10px)' },
          '50%': { transform: 'translateX(0) translateY(-20px)' },
          '75%': { transform: 'translateX(-20px) translateY(-10px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}