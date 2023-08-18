/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2B2D42",
					light: "#3C3C3C",
					dark: "#1C1C1C",
				},
				accent: {
					DEFAULT: "#FFC107",
					light: "#FFD54F",
					dark: "#FFA000",
				},
				secondary: {
					DEFAULT: "#8D99AE",
					light: "#A8B2C1",
					dark: "#6F7D8C",
				},
			},

			keyframes: {
				ripple: {
					"0%": {
						transform: "scale(0)",
						opacity: "1",
					},

					"100%": {
						opacity: "0",
						transform: "scale(4)",
					},
				},
			},
			animation: {
				ripple: "ripple 2s ease-in-out infinite ",
			},
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")({ prefix: "ui" })],
};

export default config;
