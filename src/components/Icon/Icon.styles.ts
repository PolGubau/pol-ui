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
			default: "text-current",
			info: "text-primary",
			success: "text-green-500",
			danger: "text-red-500",
			warning: "text-orange-500",
			accent: "text-accent",
			light: "text-gray-300",
			dark: "text-gray-700",
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
	},
});
