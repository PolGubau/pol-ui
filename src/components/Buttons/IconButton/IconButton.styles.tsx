import { tv } from "tailwind-variants";

export const iconButton = tv({
	base: "flex items-center gap-2 cursor-pointer transition-colors p-2 cursor-pointer ",

	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-2xl",
		},

		rounded: {
			true: "rounded-xl",
			false: "rounded-none",
		},
		type: {
			main: "bg-accent text-primary hover:bg-accent/50",
			normal: "bg-primary/60 text-white hover:bg-primary/80",
			outlined: "bg-white text-primary ring-1 ring-primary hover:bg-primary/30",
			text: "bg-transparent text-primary hover:bg-primary/30",
		},
		disabled: {
			true: "bg-gray-200 text-gray-400 cursor-not-allowed",
			false: "",
		},
	},
	defaultVariants: {
		size: "md",
		rounded: true,
		type: "normal",
		disabled: false,
	},
});
