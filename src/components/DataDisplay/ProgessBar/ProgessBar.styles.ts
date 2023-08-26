import { tv } from "tailwind-variants";

export const backgroundBar = tv({
	base: " bg-primary/10 bg-light w-full relative  outline-2  max-w-full transition-all duration-300 ease-in-out",
	variants: {
		size: {
			xs: "h-2",
			sm: "h-4",
			md: "h-6 ",
			lg: "h-8 ",
			xl: "h-12",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
 
