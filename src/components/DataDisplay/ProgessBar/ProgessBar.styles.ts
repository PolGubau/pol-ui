import { tv } from "tailwind-variants";

export const backgroundBar = tv({
	base: "bg-light w-full relative  outline-2  max-w-full transition-all duration-300 ease-in-out",
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
export const pointerPB = tv({
	base: "absolute  p-1 transform -translate-x-1/2 w-8 h-5 z-10 bg-primary text-white text-xs flex items-center justify-center rounded-md",
	variants: {
		pointerPosition: {
			top: " -top-5",
			bottom: "-bottom-5",
		},
	},
	defaultVariants: {
		pointerPosition: "top",
	},
});
export const arrowPointerPB = tv({
	base: "absolute  transform -translate-x-1/2 w-3 h-3 z-10 rotate-45 bg-primary text-white text-xs flex items-center justify-center rounded-none",
	variants: {
		pointerPosition: {
			top: " -top-2",
			bottom: "-bottom-2",
		},
	},
	defaultVariants: {
		pointerPosition: "top",
	},
});
