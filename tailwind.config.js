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
          "primary": "#b463ff",
          "primary-content": "#000000",
          "secondary": "#63aeff",
          "secondary-content": "#000000",
          "accent": "#6663ff",
          "accent-content": "#000000",
          "neutral": "#eaeaff",
          "base-100": "#fefeff",
          "info": "#BCC0EB",
          "success": "#C8FFD4",
          "warning": "#FFED96",
          "error": "#F34F83",
          "base-content": "#000000",
        },
        dark: {
          "primary": "#6943e8",
          "primary-content": "#FFFFFF",
          "secondary": "#aa57ff",
          "secondary-content": "#FFFFFF",
          "accent": "#ff4af0",
          "accent-content": "#000000",
          "neutral": "#271D2B",
          "base-100": "#20222a",
          "info": "#63BDEE",
          "success": "#3dff7d",
          "warning": "#fdff3d",
          "error": "#ff423d",
          "base-content": "#FFFFFF",
        },
      },
    ],
    styled: true,
  },
}

