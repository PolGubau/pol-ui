import { tv } from "tailwind-variants";
export const avatarStyle = tv({
	base: "flex items-center space-x-2",
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-xl",
		},
		variant: {
			transparent: "bg-transparent",
			main: "bg-gray-200 dark:bg-gray-800",
			neutral: "bg-gray-300 dark:bg-gray-700",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "transparent",
	},
});

export const avatarImageStyle = tv({
	base: "inline-flex items-center justify-center overflow-hidden w-6 h-6 bg-gray-300 dark:bg-gray-700",
	variants: {
		size: {
			xs: "w-6 h-6",
			sm: "w-8 h-8",
			md: "w-10 h-10",
			lg: "w-12 h-12",
			xl: "w-14 h-14",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
