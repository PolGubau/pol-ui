import React, { ChangeEvent } from "react";
import { inputStyles } from "./Styled";
import { ButtonVariant, ButtonVariants } from "../../../types";
interface Props<T> {
	label?: string;
	name?: string;
	type?: "text" | "number" | "password" | "email" | "date" | "time" | "url" | "search" | "tel";
	value?: T;
	multiline?: boolean;
	onChange?: (value: T) => void;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	helperText?: string;
	maxLength?: number;
	fullWidth?: boolean;
	size?: "small" | "normal" | "large";
	variant?: ButtonVariant;
	props?: Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>;
}

const Field = <T extends string | number>({
	label,
	value = undefined,
	onChange,
	disabled,
	required,
	type = "text",
	error,
	multiline,
	helperText,
	name,
	className,
	maxLength,
	variant = ButtonVariants.outlined,
	fullWidth = false,
	size = "normal",
	...props
}: Props<T>) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = e.target.value;
		let newValue: T = inputValue as T;
		if (!onChange) return;

		if (type === "number") {
			newValue = Number(inputValue) as T;
			if (isNaN(newValue as number)) {
				newValue = "" as T;
			}
		}
		onChange(newValue);
	};

	return (
		<div className={"flex flex-col gap-1   relative   w-full text-primary transition-all"}>
			{multiline ? (
				<textarea
					rows={5}
					disabled={disabled ?? false}
					maxLength={maxLength}
					required={required}
					name={name}
					defaultValue={value ?? ""}
					onChange={handleChange}
					className={inputStyles({ multiline: true, fullWidth }) + className}
				/>
			) : (
				<div className="relative">
					<input
						onChange={handleChange}
						defaultValue={value ?? ""}
						disabled={disabled}
						required={required}
						name={name}
						maxLength={maxLength}
						type={type}
						{...(props as Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>)}
						id="label"
						className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg appearance-none   duration-300
            
						bg-transparent 
            
						text-background-dark 
						dark:text-background dark:focus:border-background-dark 
            
            
            
             ${
								variant === ButtonVariants.filled &&
								"bg-background-dark/20 dark:bg-background/20 pb-3 pt-3 focus:bg-background-dark/10 dark:focus:bg-background/10"
							}
             ${
								variant === ButtonVariants.outlined &&
								"border border-background-dark/20 dark:border-background/40"
							}
            
						
						focus:outline-none focus:ring-0 focus:border-accent focus:dark:border-accent-dark 
						
						peer 
            
            disabled:text-background-dark/10 disabled:border-background-dark/10  disabled:cursor-not-allowed
            disabled:dark:text-background-dark/10 disabled:dark:border-background-dark/10
            
            
            
            `}
						placeholder=" "
					/>

					<label
						htmlFor="floating_outlined"
						className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2  z-10 origin-[0] px-2 pointer-events-none
            
            text-background-dark/90  bg-background
            dark:text-background dark:bg-background-dark
            
            peer-focus:px-2 peer-focus:text-accent peer-focus:dark:text-accent-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1
            
               ${
									variant === ButtonVariants.filled &&
									"bg-transparent peer-focus:bg-transparent peer-focus:dark:bg-transparent -translate-y-7 peer-focus:-translate-y-7  peer-focus:scale-90  scale-90"
								}
            
            `}
					>
						{label}
					</label>
				</div>
			)}

			{Boolean(helperText) && <span className="color-primary/60 text-xs">{helperText}</span>}
			{Boolean(error) && <span className="text-xs text-danger">{error}</span>}
		</div>
	);
};

export default Field;
