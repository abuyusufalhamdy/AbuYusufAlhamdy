/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fff8',
          100: '#b3ffed',
          200: '#80ffe1',
          300: '#4dffd6',
          400: '#1affca',
          500: '#00e6b3',
          600: '#00b38d',
          700: '#008066',
          800: '#004d3d',
          900: '#001a15',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#121212',
        },
        dark: {
          100: '#d5d5d5',
          200: '#aaaaaa',
          300: '#808080',
          400: '#555555',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
          950: '#050505',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 7px #00e6b3, 0 0 10px #00e6b3, 0 0 21px #00e6b3',
          },
          '50%': {
            textShadow: '0 0 10px #00cc99, 0 0 20px #00cc99, 0 0 30px #00cc99',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-corner': 'linear-gradient(135deg, rgba(0, 230, 179, 0.3) 0%, rgba(0, 0, 0, 0) 50%)',
        'neon-corner-light': 'linear-gradient(135deg, rgba(0, 204, 153, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
      },
    },
  },
  plugins: [],
};