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
				secondary: "#97a398",

				// Accent
				accent: "#41ff07",

				// Status
				success: "rgb(147, 254, 132)",
				danger: "#ee9a9a",
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
