function withOpacity(variableName: string) {
	return ({ opacityValue }: any) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}
export const PolUITheme = {
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
		current: "currentColor",
	},
};
