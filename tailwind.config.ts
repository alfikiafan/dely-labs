import type { Config } from "tailwindcss";

export default <Config>{
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./nuxt.config.ts",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", "Inter", "sans-serif"],
			},
			colors: {
				void: {
					900: "#020617",
					800: "#0F172A",
					DEFAULT: "#020617",
				},
				primary: {
					400: "#E879F9",
					500: "#D946EF",
					600: "#C026D3",
					glow: "#F0ABFC",
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
		},
	},
	plugins: [],
};
