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
          "secondary-content": "#FFFFFF",
          "accent": "#7AAB9C",
          "accent-content": "#FFFFFF",
          "neutral": "#DAAE46",
          "neutral-content": "#FFFFFF",
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
          "primary": "#EF4C68",
          "primary-content": "#FFFFFF",
          "secondary": "#912F40",
          "secondary-content": "#FFFFFF", 
          "accent": "#F07E4D",
          "accent-content": "#000000",
          "neutral": "#40434E",
          "base-100": "#201C14",
          "base-content": "#FFFFFF",
          "base-200": "#1E1B16",
          "base-300": "#080705",
          "info": "#2F4091",
          "success": "#2F9141",
          "warning": "#91792F",
          "error": "#702632",
        },
      },
    ],
    styled: true,
  },
}

