import { tv } from "tailwind-variants";

export const cardStyle = tv({
	base: " rounded-3xl flex flex-col gap-2 w-fit",
	variants: {
		hasShadow: {
			true: "shadow-lg",
			false: "",
		},
		hasBorder: {
			true: "ring-2 ring-gray-200",
			false: "",
		},
		maxWidth: {
			xl: "max-w-xl",
			lg: "max-w-lg",
			md: "max-w-md",
			sm: "max-w-sm",
			xs: "max-w-xs",
			full: "max-w-full",
		},
	},
	defaultVariants: {
		hasBorder: true,
		hasShadow: true,
		maxWidth: "md",
		padding: "md",
	},
});
