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
			auto: "p-auto",
			small: "p-2",
			medium: "p-4",
			large: "p-8",
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
