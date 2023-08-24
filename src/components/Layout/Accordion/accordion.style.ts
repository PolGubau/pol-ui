import { tv } from "tailwind-variants";

export const accordion = tv({
	base: "flex flex-col overflow-hidden",

	variants: {
		hasDividers: {
			true: "divide-y",
			false: "divide-none",
		},
		hasBorder: {
			true: "border border-gray-200 dark:border-gray-700",
			false: "border-none",
		},
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
		hasDividers: true,
		hasBorder: true,
		maxWidth: "full",
	},
});
