import { tv } from "tailwind-variants";

export const badgeStyles = tv({
	base: "absolute flex justify-center items-center text-white text-xs font-bold bg-accent transition-all backdrop-blur-md p-1 truncate",

	variants: {
		size: {
			xs: "min-w-[0.75rem] h-3 text-xs",
			sm: "min-w-[1rem] h-4 text-xs",
			md: "min-w-[1.25rem] h-5 text-xs",
			lg: "min-w-[1.5rem] h-6 text-md",
			xl: "min-w-[2rem] h-8 text-md",
		},

		horizontal: {
			left: "-left-2",
			right: "-right-1",
		},
		vertical: {
			top: "-top-1",
			bottom: "-bottom-0",
		},
		clickable: {
			true: "cursor-pointer hover:ring-2 active:animated-pulse",
			false: "cursor-auto",
		},
	},
	defaultVariants: {
		size: "md",
		horizontal: "right",
		vertical: "top",
		clickable: false,
		shadow: false,
	},
});
