import { tv } from "tailwind-variants";

export const button = tv({
	base: "flex items-center justify-center gap-2 cursor-pointer transition-colors  cursor-pointer ",

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
			true: "opacity-50 cursor-not-allowed",
			false: "",
		},
		centered: {
			true: "justify-center text-center",
			false: "justify-start text-left",
		},
		fullWidth: {
			true: "w-full",
			false: "w-fit",
		},
		onlyIcon: {
			true: "aspect-square p-2",
			false: "py-2 px-3",
		},
	},
	defaultVariants: {
		size: "md",
		rounded: true,
		type: "normal",
		disabled: false,
	},
});
