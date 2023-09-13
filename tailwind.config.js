/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          primary: '#009921',
          secondary: '#00fff7',
          accent: '#009748',
          info: "#1a9cff",
          
          neutral: '#fff',
          'base-100': '#191E28',
          'base-200': '#191E28',
          'base-300': 'fff',
        }
      }
    ],
  }
}
