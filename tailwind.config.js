/** @type {import('tailwindcss').Config} */

const palette = {
	white: "#FAFAFA",
	black: "#232323",

	primary: "#2a2945",
	primaryDark: "#8986db",

	secondary: "#435db0",
	secondaryDark: "#bcbbeb",

	accent: "#ffb300",
	accentDark: "#dfe65f",

	success: "#9bc88e",
	successDark: "#9bc88e",

	danger: "#ff7b7b",
	dangerDark: "#ff7b7b",

	info: "#56caca",
	infoDark: "#56caca",
};

const config = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
