/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				dark_theme: {
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
				light_theme: {
					"primary": "#66b522",
					"secondary": "#c08cd8",
					"accent": "#389e01",
					"neutral": "#181A25",
					"base-100": "#E5E5EB",
					"info": "#99CDE6",
					"success": "#2DBE73",
					"warning": "#F1BD74",
					"error": "#EC3C45",
				},
			},
		]
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require("daisyui")
	],
}
