/** @type {import('tailwindcss').Config} */

type ColorObject = {
  [key: string]: string
}

export const tailwindColors: ColorObject = {
  current: 'currentColor',
  transparent: 'transparent',
  white: '#F9F9F9',
  primary: '#007BEC',
  secondary: '#6c5ce7',
  info: '#3abff8',
  success: '#36d399',
  warning: '#fbbd23',
  error: '#f87272',
}

module.exports = {
  colors: tailwindColors,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}
