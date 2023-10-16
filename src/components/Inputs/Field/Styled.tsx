import { applyRounded } from "../../../style";
import { ButtonVariant, Sizes, SizesComplete, Variants } from "../../../types";

export const labelStyles = (isUp: boolean) => {
	const base = `label transition-all absolute text-primary/60 top-0 left-2 translate-y-1 p-1 pointer-events-none `;
	const isUpClasses = isUp
		? `text-primary/80 py-0 translate-y-[-50%] bg-white text-sm focus:text-accent`
		: ``;

	return `${base} ${isUpClasses}`;
};

interface Props {
	multiline: boolean;
	fullWidth: boolean;
	variant: ButtonVariant;
	error?: string;
	rounded?: SizesComplete;
}

export const inputStyles = ({
	multiline,
	fullWidth,
	variant = Variants.outlined,
	error,
	rounded = Sizes.md,
}: Props) => {
	const base = `block px-2.5 pb-2.5 pt-4 w-full text-sm ${applyRounded(
		rounded
	)} appearance-none   duration-300
						text-background-inverted 
						dark:text-background 		
						focus:outline-none 
						focus:ring-0 
 				 
            			 ${
											variant === Variants.filled &&
											`
								bg-background-inverted/20 dark:bg-background/20
								
								focus:bg-background-inverted/10 dark:focus:bg-background/10
								pb-3 pt-3`
										}
								
             			${
										variant === Variants.outlined &&
										`bg-transparent border   		
										${
											error
												? "border-danger   dark:border-danger-inverted"
												: "border-background-inverted/20 dark:border-background/40	focus:border-accent  focus:dark:border-accent-inverted 	"
										}				
										`
									}
 							${variant === Variants.text && "bg-transparent focus:outline-none focus:ring-0 focus:border-none"}
            
				
						
						
						peer 
            
					disabled:text-background-inverted/10 disabled:border-background-inverted/10  disabled:cursor-not-allowed
					disabled:dark:text-background-inverted/10 disabled:dark:border-background-inverted/10`;
	const multilineClasses = multiline
		? "input peer min-h-[100px] max-h-[300px] resize-y form-sizing"
		: "input peer";
	const fullWidthClasses = fullWidth ? "w-full" : "w-fit min-w-max";

	return `${base} ${multilineClasses} ${fullWidthClasses}`;
};
