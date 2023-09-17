/** @type {import('tailwindcss').Config} */

const config = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			background: { DEFAULT: "var(--theme-white)", dark: "var(--theme-black)" },
			contrast: { DEFAULT: "var(--theme-black)", dark: "var(--theme-white)" },
			// Base
			primary: { DEFAULT: "var(--theme-primary)", dark: "var(--theme-primary-dark)" },
			secondary: { DEFAULT: "var(--theme-secondary)", dark: "var(--theme-secondary-dark)" },
			// Accent
			accent: { DEFAULT: "var(--theme-accent)", dark: "var(--theme-accent-dark)" },
			// Status
			success: { DEFAULT: "var(--theme-success)", dark: "var(--theme-success-dark)" },
			danger: { DEFAULT: "var(--theme-danger)", dark: "var(--theme-danger-dark)" },
			info: { DEFAULT: "var(--theme-info)", dark: "var(--theme-info-dark)" },
			// Utility
			transparent: "transparent",
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
