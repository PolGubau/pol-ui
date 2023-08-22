import { tv } from "tailwind-variants";

export const backgroundBar = tv({
	base: " bg-light w-full relative  outline-2  max-w-full transition-all duration-300 ease-in-out",
	variants: {
		variant: {
			success: "bg-primary/10",
			danger: "bg-primary/10",
			warning: "bg-primary/10",
			accent: "bg-primary/10",
			info: "bg-primary/10",
			dark: "bg-primary/10",
			light: "bg-primary/5",
			default: "bg-primary/10 backdrop-blur-lg",
		},
		size: {
			xs: "h-2",
			sm: "h-4",
			md: "h-6 ",
			lg: "h-8 ",
			xl: "h-12",
		},
	},
	defaultVariants: {
		variant: "accent",
		size: "md",
	},
});

export const progressBar = tv({
	base: "bg-primary h-full w-fit absolute top-0 left-0 bg-accent flex items-center justify-center ",
	variants: {
		variant: {
			success: "bg-success",
			danger: "bg-danger",
			warning: "bg-warning",
			accent: "bg-accent",
			info: "bg-info",
			dark: "bg-dark",
			light: "bg-light",
			default: "bg-current backdrop-blur-lg",
		},
	},
	defaultVariants: {
		variant: "accent",
	},
});
