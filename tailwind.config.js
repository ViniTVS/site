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
          "primary": "#D90429",
          "primary-content": "#FFFFFF",
          "secondary": "#EF233C",
          "secondary-content": "#FFFFFF",
          "accent": "#2B2D42",
          "accent-content": "#FFF",
          "neutral": "#8D99AE",
          "neutral-content": "#000",
          "base-100": "#EDF2F4",
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
          "base-100": "#080705",
          "base-content": "#FFFFFF",
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

