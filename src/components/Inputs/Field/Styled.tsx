import { tv } from "tailwind-variants";

export const containerStyles = tv({
	base: `flex flex-col gap-1   relative   w-full text-primary transition-all  `,
});

export const labelStyles = tv({
	base: `label 
        transition-all 
        absolute 
        text-primary/60 
        top-0 left-2 
        translate-y-1 
		p-1 
        pointer-events-none `,
	variants: {
		isUp: {
			true: "text-primary/80 py-0 translate-y-[-50%] bg-white text-sm focus:text-accent",
			false: " ",
		},
	},

	defaultVariants: {
		isUp: false,
	},
});

export const inputStyles = tv({
	base: `
      transition-all
      outline-none
      rounded-lg
      p-2
			invalid:ring-1 
			invalid:ring-red-500
      ring-1
      ring-primary/60          
			hover:ring-accent
      focus:ring-accent
      peer`,
	variants: {
		multiline: {
			true: "input peer min-h-[100px] max-h-[300px] resize-y",
			false: "input peer",
		},
		fullWidth: {
			true: "w-full",
			false: "w-fit min-w-max",
		},
	},
	defaultVariants: {
		multiline: false,
		fullWidth: false,
	},
});
