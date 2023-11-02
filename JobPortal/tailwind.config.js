/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      'customColor1': '#080559',
      'customColor2': '#E60278',
      'customColor3': '#0D3880',
      'customColor4': '#E2F7F1',
      'customColor5': '#12784F',
      'customColor6': '#4964E9',
      'customColor7': '#5A6891',
      'customColor8': '#000',
      'customColor9': '#FFF',
      'customColor10': '#CAD4DF',
    },
    container: {
      center: true,
    },
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

