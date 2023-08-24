import { tv } from "tailwind-variants";

export const imageStyle = tv({
	base: "w-fit h-fit inline-flex items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-700 object-cover",
	variants: {
		rounded: {
			circular: "rounded-full",
			rounded: "rounded-lg",
			square: "rounded-none",
		},
		aspectRatio: {
			"1/1": "aspect-square",
			"9/16": "aspect-[9/16]",
			"16/9": "aspect-[16/9]",
			"4/3": "aspect-[4/3]",
			"3/4": "aspect-[3/2]",
			"8/5": "aspect-[8/5]",
			auto: "aspect-auto",
		},
	},
	defaultVariants: {
		rounded: "square",
		aspectRatio: "auto",
	},
});
