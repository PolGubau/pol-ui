import { tv } from "tailwind-variants";

export const iconStyles = tv({
	base: "p-1",
	variants: {
		size: {
			xs: "text-sm",
			sm: "text-md",
			md: "text-lg",
			lg: "text-2xl",
			xl: "text-4xl",
		},
		color: {
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
		size: "md",
		color: "default",
	},
});
