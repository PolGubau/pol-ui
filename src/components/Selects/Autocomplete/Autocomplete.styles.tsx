import { tv } from "tailwind-variants";

export const autocompleteButton = tv({
	base: `relative 
	cursor-pointer 
	rounded-lg    
	pr-10 text-left 
	transition-all
	
 	
	focus:outline-none 
	focus-visible:border-accent
	focus-visible:ring-2 
	focus-visible:ring-white 
	focus-visible:ring-opacity-75 
	focus-visible:ring-offset-2 
	focus-visible:ring-offset-accent 
 
 	active:ring-2
	active:ring-offset-2
	active:ring-offset-accent
	active:ring-white
  	
	sm:text-sm`,

	variants: {
		fullWidth: {
			true: "w-full",
			false: "w-fit ",
		},
		variant: {
			main: "bg-accent text-primary hover:bg-accent/50",
			normal: "bg-primary/60 text-white hover:bg-primary/80",
			outlined: "bg-white text-primary ring-1 ring-primary hover:bg-primary/30",
			text: "bg-transparent text-primary hover:bg-primary/30",
		},
	},

	defaultVariants: {
		fullWidth: false,
		variant: "normal",
	},
});
