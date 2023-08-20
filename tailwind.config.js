/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2B2D42",
				accent: "#41ff07",
				secondary: "#8D99AE",
				success: "#63c056",
				danger: "#d13a3a",
				warning: "#d19c3a",
				info: "#3a6fd1",
				dark: "#272727",
				light: "#e6e6e6",
				current: "currentColor",
				transparent: "transparent",
				black: "#000",
				white: "#fff",
			},
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")({ prefix: "ui" })],
};

export default config;
