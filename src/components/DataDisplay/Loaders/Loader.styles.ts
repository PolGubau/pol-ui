import { tv } from "tailwind-variants";

export const spinnerStyled = tv({
	base: "",
	variants: {
		size: {
			xs: "h-2 w-2",
			sm: "h-5 w-5",
			md: "h-10 w-10",
			lg: "h-16 w-16",
			xl: "h-20 w-20",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "accent",
	},
});
