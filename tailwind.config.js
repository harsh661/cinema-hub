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
      },
      animation: {
        "fade-in": "fade 1.2s cubic-bezier(0.250, 0.460, 0.50, 0.940) both"
      },
      keyframes: {
        "fade": {
          "0%": {opacity: '0', transform: 'translateZ(-1400px)'},
          "100%": {opacity: '1', transform: 'translateZ(0)'}
        }
      }
    },
  },
  plugins: [],
}
