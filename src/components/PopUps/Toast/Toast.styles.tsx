import { tv } from "tailwind-variants";

export const toast = tv({
	base: "flex gap-2 items-center w-fit px-4 py-3 rounded-xl pl-6 animate-fade-right animate-duration-500 animate-ease-out ",
	variants: {
		variant: {
			info: "bg-primary/70 dark:bg-primary-dark",
			success: "bg-green-500",
			danger: "bg-red-500 dark:bg-red-500",
		},
	},
	compoundVariants: [
		{
			variant: ["info", "success", "danger"],
			class: "text-white",
		},
	],
	defaultVariants: {
		variant: "info",
	},
});
