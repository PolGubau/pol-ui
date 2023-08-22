import { tv } from "tailwind-variants";

export const tooltipContainerStyle = tv({
	base: ` relative`,
});
export const tooltipStylePosition = tv({
	base: `text-light text-xs rounded-md  absolute pointer-events-none`,
	variants: {
		position: {
			// each position shows in which direction the tooltip is pointing, it's all relative to the tooltip container and it's outside the tooltip itself
			top: `bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1`,
			bottom: `top-full left-1/2 transform -translate-x-1/2 translate-y-1`,
			left: `right-full top-1/2 transform translate-x-1 -translate-y-1/2`,
			right: `left-full top-1/2 transform -translate-x-1 -translate-y-1/2`,
		},

		isJustText: {
			true: `p-1 bg-dark rounded-md text-light`,
		},
	},
	defaultVariants: {
		position: "top",
		isJustText: false,
	},
});
