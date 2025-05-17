import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				"float-1": {
					'0%': { transform: 'translate(0px, 0px)' },
					'25%': { transform: 'translate(40px, -30px)' },
					'50%': { transform: 'translate(-20px, 40px)' },
					'75%': { transform: 'translate(-30px, -20px)' },
					'100%': { transform: 'translate(0px, 0px)' }
				},
				"float-2": {
					'0%': { transform: 'translate(0px, 0px)' },
					'25%': { transform: 'translate(-35px, 25px)' },
					'50%': { transform: 'translate(30px, -35px)' },
					'75%': { transform: 'translate(25px, 25px)' },
					'100%': { transform: 'translate(0px, 0px)' }
				},
				"float-3": {
					'0%': { transform: 'translate(0px, 0px)' },
					'25%': { transform: 'translate(30px, 30px)' },
					'50%': { transform: 'translate(-35px, -20px)' },
					'75%': { transform: 'translate(20px, -35px)' },
					'100%': { transform: 'translate(0px, 0px)' }
				},
				"float-4": {
					'0%': { transform: 'translate(0px, 0px)' },
					'25%': { transform: 'translate(-25px, -35px)' },
					'50%': { transform: 'translate(35px, 25px)' },
					'75%': { transform: 'translate(-30px, 30px)' },
					'100%': { transform: 'translate(0px, 0px)' }
				},
				"flag-wave": {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'75%': { transform: 'rotate(-5deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				"float-1": "float-1 15s ease-in-out infinite",
				"float-2": "float-2 18s ease-in-out infinite",
				"float-3": "float-3 20s ease-in-out infinite",
				"float-4": "float-4 17s ease-in-out infinite",
				"flag-wave": "flag-wave 3s ease-in-out infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
export default config
