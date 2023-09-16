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
	theme: {
		colors: {
			background: { DEFAULT: palette.white, dark: palette.black },
			contrast: { DEFAULT: palette.black, dark: palette.white },
			// Base
			primary: { DEFAULT: palette.primary, dark: palette.primaryDark },
			secondary: { DEFAULT: palette.secondary, dark: palette.secondaryDark },
			// Accent
			accent: { DEFAULT: palette.accent, dark: palette.accentDark },
			// Status
			success: { DEFAULT: palette.success, dark: palette.successDark },
			danger: { DEFAULT: palette.danger, dark: palette.dangerDark },
			info: { DEFAULT: palette.info, dark: palette.infoDark },
			// Utility
			transparent: "transparent",
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
