/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				wave: 'wave 0.6s ease-in-out infinite',
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(15deg)' },
					'40%': { transform: 'rotate(0deg)' },
					'60%': { transform: 'rotate(-15deg)' },
					'80%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
