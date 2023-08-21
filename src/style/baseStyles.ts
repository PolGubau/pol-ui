import { tv } from "tailwind-variants";

export const roundedStyles = tv({
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
			variant: "bg-accent",
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
