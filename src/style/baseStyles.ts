import { tv } from "tailwind-variants";

export const applyRoundess = tv({
	variants: {
		rounded: {
			circular: "rounded-full",
			rounded: "rounded-xl",
			square: "rounded-none",
		},
	},
	defaultVariants: {
		rounded: "circular",
	},
});
export const textVariant = tv({
	base: "",
	variants: {
		variant: {
			success: "text-success",
			danger: "text-danger",
			warning: "text-warning",
			accent: "text-accent",
			variant: "text-accent",
			info: "text-info",
			dark: "text-dark",
			light: "text-light",
			default: "text-current",
		},
	},
	defaultVariants: {
		variant: "accent",
	},
});
export const bgVariant = tv({
	base: "",
	variants: {
		variant: {
			success: "bg-success",
			danger: "bg-danger",
			warning: "bg-warning",
			accent: "bg-accent",
			info: "bg-info",
			dark: "bg-dark",
			light: "bg-light",
			default: "bg-current",
		},
	},
	defaultVariants: {
		variant: "accent",
	},
});
export const horizontalMargins = tv({
	base: "",
	variants: {
		margin: {
			none: "",
			auto: "mx-auto",
			small: "mx-2",
			medium: "mx-4",
			large: "mx-8",
		},
	},
	defaultVariants: {
		margin: "none",
	},
});
export const verticalMargins = tv({
	base: "",
	variants: {
		margin: {
			none: "",
			auto: "my-auto",
			small: "my-2",
			medium: "my-4",
			large: "my-8",
		},
	},
	defaultVariants: {
		margin: "none",
	},
});
export const applyOpacity = tv({
	base: "",
	variants: {
		opacity: {
			0: "opacity-0",
			10: "opacity-10",
			20: "opacity-20",
			30: "opacity-30",
			40: "opacity-40",
			50: "opacity-50",
			60: "opacity-60",
			70: "opacity-70",
			80: "opacity-80",
			90: "opacity-90",
			100: "opacity-100",
		},
	},
	defaultVariants: {
		opacity: 100,
	},
});
export const applyPadding = tv({
	base: "",
	variants: {
		padding: {
			none: "",
			xs: "p-1",
			sm: "p-2",
			md: "p-4",
			lg: "p-8",
			xl: "p-16",
			auto: "p-auto",
		},
	},
	defaultVariants: {
		padding: "none",
	},
});
export const applyRoundessSizes = tv({
	base: "",
	variants: {
		rounded: {
			none: "rounded-none",
			xs: "rounded-xs",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
		},
	},
	defaultVariants: {
		rounded: "none",
	},
});
export const applyMaxWidth = tv({
	base: "",
	variants: {
		maxWidth: {
			xs: "max-w-xs",
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
			xl: "max-w-xl",
			full: "max-w-full",
		},
	},
	defaultVariants: {
		maxWidth: "full",
	},
});
export const applyShadow = tv({
	base: "",
	variants: {
		shadow: {
			none: "",
			sm: "shadow-sm",
			md: "shadow-md",
			lg: "shadow-lg",
			xl: "shadow-xl",
			"2xl": "shadow-2xl",
			inner: "shadow-inner",
			outline: "shadow-outline",
		},
	},
	defaultVariants: {
		shadow: "none",
	},
});
