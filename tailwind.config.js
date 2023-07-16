/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0f172a', 
        'dark-text': '#CBD5E1',
        'light-text': '#64748B',
        'dark-gray': '#1e293b',
        'light-gray': '#94a3b8',
        'border-gray': '#222e42',
        'accent-pink': '#df00a9',
      }
    },
  },
  plugins: [],
}
