/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

const config = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			background: {
				DEFAULT: withOpacity("--theme-white"),
				inverted: withOpacity("--theme-black"),
			},
			// Base
			primary: {
				DEFAULT: withOpacity("--theme-primary"),
				inverted: withOpacity("--theme-primary-inverted"),
			},
			secondary: {
				DEFAULT: withOpacity("--theme-secondary"),
				inverted: withOpacity("--theme-secondary-inverted"),
			},
			// Accent
			accent: {
				DEFAULT: withOpacity("--theme-accent"),
				inverted: withOpacity("--theme-accent-inverted"),
			},
			// Status
			success: {
				DEFAULT: withOpacity("--theme-success"),
				inverted: withOpacity("--theme-success-inverted"),
			},
			danger: {
				DEFAULT: withOpacity("--theme-danger"),
				inverted: withOpacity("--theme-danger-inverted"),
			},
			info: {
				DEFAULT: withOpacity("--theme-info"),
				inverted: withOpacity("--theme-info-inverted"),
			},
			// Utility
			transparent: "transparent",
		},
	},

	plugins: [require("tailwindcss-animated"), require("@headlessui/tailwindcss")],
};

export default config;
