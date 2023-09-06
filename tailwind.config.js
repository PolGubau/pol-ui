/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: { DEFAULT: "#FAFAFA", dark: "#232323" },
				contrast: { DEFAULT: "#232323", dark: "#FAFAFA" },
				// Base
				primary: { DEFAULT: "#2b422f", dark: "#7fc38a" },
				secondary: { DEFAULT: "#696969", dark: "#ababab" },
				// Accent
				accent: { DEFAULT: "#41ff07", dark: "#41ff07" },
				// Status
				success: { DEFAULT: "#caffba", dark: "#4a6442" },
				danger: { DEFAULT: "#ff7b7b", dark: "#7b0000" },
				info: { DEFAULT: "#7bffff", dark: "#007b7b" },
				// Utility
				transparent: "transparent",
			},
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
