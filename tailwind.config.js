/** @type {import('tailwindcss').Config} */
import { PolUITheme } from "./src/style";
const config = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		...PolUITheme,
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
