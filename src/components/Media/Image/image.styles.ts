import { tv } from "tailwind-variants";

export const imageStyle = tv({
	base: "inline-flex items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-700",
	variants: {
		rounded: {
			circular: "rounded-full",
			rounded: "rounded-lg",
			square: "rounded-none",
		},
	},
	defaultVariants: {
		rounded: "square",
	},
});
