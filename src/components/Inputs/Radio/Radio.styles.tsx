import { tv } from "tailwind-variants";

export const checkboxContainer = tv({
	base: "inline-flex items-center space-x-2 text-black flex  text-sm items-center cursor-pointer",
	variants: {
		disabled: {
			true: "cursor-not-allowed opacity-50 text-gray-500",
		},
	},
	defaultVariants: {
		disabled: false,
	},
});

export const checkIconBySize = tv({
	base: "text-primary absolute transition-all duration-100 user-select-none pointer-events-none",
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
