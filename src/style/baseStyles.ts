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
