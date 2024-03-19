/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  // darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  daisyui: {
    themes: [
      // "dark",
      // "light"
      {
        light: {
          "primary": "#7462A3",
          "primary-content": "#FFFFFF",
          "secondary": "#627AA3",
          "secondary-content": "#000000",
          "accent": "#7AAB9C",
          "accent-content": "#000000",
          "neutral": "#DAAE46",
          "neutral-content": "#000000",
          "base-100": "#F8F6F4",
          "base-200": "#E8E3DC",
          "base-300": "#D8D0C5",
          "base-content": "#000000",
          "info": "#042AD9",
          "success": "#04D92C",
          "warning": "#D9A404",
          "error": "#842F3D",
        },
        dark: {
          "primary": "#d1f6f6",
          "primary-content": "#000000",
          "secondary": "#D1F6D1",
          "secondary-content": "#000000", 
          "accent": "#F6D1F6",
          "accent-content": "#000000",
          "neutral": "#2c3539",
          "base-100": "#1B2023",
          "base-200": "#121618",
          "base-300": "#0A0C0D",
          "base-content": "#FFFFFF",
          "info": "#4b80ca",
          "success": "#7a9c96",
          "warning": "#d1bfb0",
          "error": "#bb474f",
        },
      },
    ],
    styled: true,
  },
}

