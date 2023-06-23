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
			},
		]
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require("daisyui")
	],
}
