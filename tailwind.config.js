/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0D0F",
          surface: "#15181C",
          "surface-elevated": "#1B1F24",
          "surface-highlight": "#22272E",
          gold: "#C99635",
          "gold-light": "#DFAB4A",
          "gold-muted": "#8A6A27",
          orange: "#E76516",
          "orange-hover": "#F27A2E",
          white: "#F4F0E8",
          grey: "#A9ADB2",
          "grey-dark": "#5A5F67",
          border: "#262B32",
          "border-subtle": "#1D2228",
          "border-gold": "rgba(201, 150, 53, 0.28)",
          "border-orange": "rgba(231, 101, 22, 0.35)",
        }
      },
      fontFamily: {
        display: ['Oswald', 'Bebas Neue', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 150, 53, 0.25)',
        'orange-glow': '0 0 30px -5px rgba(231, 101, 22, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)',
      }
    },
  },
  plugins: [],
}
