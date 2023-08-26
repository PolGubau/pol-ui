/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Contrasts
				background: "Canvas",
				contrast: "CanvasText",

				// Base
				primary: "#2b422f",
				secondary: "#436447",

				// Accent
				accent: "#41ff07",

				// Status
				success: "#63c056",
				danger: "#d13a3a",
				info: "#3a6fd1",

				// Utility
				current: "currentColor",
				transparent: "transparent",
			},
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")({ prefix: "ui" })],
};

export default config;
