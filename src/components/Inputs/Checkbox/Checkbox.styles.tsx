import { tv } from "tailwind-variants";

export const checkboxContainer = tv({
	base: "inline-flex items-center space-x-2 text-black flex gap-1 text-sm items-center cursor-pointer",
	variants: {
		disabled: {
			true: "cursor-not-allowed opacity-50 text-gray-500",
		},
	},
	defaultVariants: {
		disabled: false,
	},
});


