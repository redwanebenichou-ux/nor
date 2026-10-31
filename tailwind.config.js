/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#57b580',
          500: '#359a65',
          600: '#277b51',
          700: '#226243',
          800: '#1d4f37',
          900: '#18412e',
        },
        secondary: {
          50: '#fffbf0',
          100: '#fff4e5',
          200: '#ffe8c6',
          300: '#ffd8a8',
          400: '#f6e05e',
          500: '#ecd078',
          600: '#c9a937',
          700: '#a17531',
          800: '#845f26',
          900: '#62401c',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd36e',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#eab308',
          700: '#ca8a04',
          800: '#a16207',
          900: '#854d0e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#272727',
          900: '#181818',
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'Amiri', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
