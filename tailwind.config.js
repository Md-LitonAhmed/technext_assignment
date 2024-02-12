/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '360px',
      // => @media (min-width: 576px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '760px',
      // => @media (min-width: 960px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }


    },
    extend: {},
  },
  plugins: [],
}

