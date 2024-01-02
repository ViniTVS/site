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
          "primary": "#63aeff",
          "secondary": "#b463ff",
          "accent": "#6663ff",
          "neutral": "#eaeaff",
          "base-100": "#fefeff",
          "info": "#BCC0EB",
          "success": "#C8FFD4",
          "warning": "#FFED96",
          "error": "#F34F83",
        },
        dark: {
          "primary": "#6943e8",
          "secondary": "#aa57ff",
          "accent": "#ff4af0",
          "neutral": "#271D2B",
          "base-100": "#20222a",
          "info": "#63BDEE",
          "success": "#3dff7d",
          "warning": "#fdff3d",
          "error": "#ff423d",
        },
      },
    ]
  },
}

