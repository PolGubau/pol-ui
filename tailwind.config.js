/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2B2D42",
				},
				accent: {
					DEFAULT: "#41ff07",
				},
				secondary: {
					DEFAULT: "#8D99AE",
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
