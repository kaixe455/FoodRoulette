/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bungee: ['BungeeSpice', 'system-ui', 'sans-serif']
			},
			backgroundImage: {
				'darkmode-bg': 'linear-gradient(90deg, #363636 0%, 42.9447%, #090C25 100%)',
				'angel-gradient': 'linear-gradient(90deg, #13B0F5 0%, 42.9447%, #7541e4 100%)'

			},
			animation: {
				'ping-slow': 'ping 2s linear infinite',
			}
		},
	},
	plugins: [],
}
