import { tv } from "tailwind-variants";

export const tabStyles = tv({
	base: "flex flex-col ",
	variants: {
		hasDivider: {
			true: "divide-y divide-gray-200 dark:divide-gray-700",
			false: "divide-none",
		},
		hasBorder: {
			true: "border border-gray-200 dark:border-gray-700",
			false: "border-none",
		},
	},
	defaultVariants: {
		hasDivider: true,
		hasBorder: true,
	},
});
