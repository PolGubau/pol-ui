import { tv } from "tailwind-variants";

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
