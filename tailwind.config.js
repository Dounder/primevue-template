/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5f5d2', // Lightest shade
          100: '#d3eda1',
          200: '#bfde6c',
          300: '#a7d03b',
          400: '#94cc34', // Base color
          500: '#82b62d',
          600: '#6c9f27',
          700: '#567821',
          800: '#41511b',
          900: '#2b3b15', // Darkest shade
          950: '#17230f' // Extra dark
        },
        dark: {
          50: '#f2f2f2', // Lightest shade
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a5a5a5',
          400: '#8b8b8b',
          500: '#737373',
          600: '#5c5c5c',
          700: '#454545',
          800: '#2f2f2f',
          900: '#1e1e1e', // Base color
          950: '#0f0f0f' // Darkest shade
        }
      }
    }
  },
  plugins: [require('tailwindcss-primeui')]
}
