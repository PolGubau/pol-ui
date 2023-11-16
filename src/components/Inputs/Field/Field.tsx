import React, { ChangeEvent } from "react";
import { inputStyles } from "./Styled";
import { ButtonVariant, Colors, Sizes, SizesComplete, Variants } from "../../../types";
import { applyBgColor, applyInvertedColor, applyRounded } from "../../../style";
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
	autoComplete?: string;
	variant?: ButtonVariant;
	props?: Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>;
	id?: string;
	idLabel?: string;
	rounded?: SizesComplete;
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
	autoComplete = "off",
	className,
	maxLength,
	variant = Variants.outlined,
	fullWidth = false,
	size = "normal",
	id,
	idLabel,
	rounded = Sizes.md,
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
					style={{
						minHeight: "100px",
						maxHeight: "300px",
					}}
					rows={5}
					disabled={disabled ?? false}
					maxLength={maxLength}
					required={required}
					name={name}
					defaultValue={value ?? ""}
					onChange={handleChange}
					className={inputStyles({ multiline: false, fullWidth, variant, error }) + className}
				/>
			) : (
				<div className="relative">
					<input
						autoComplete={autoComplete}
						onChange={handleChange}
						defaultValue={value ?? ""}
						disabled={disabled}
						required={required}
						name={name}
						maxLength={maxLength}
						type={type}
						{...(props as Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>)}
						id={id}
						className={
							inputStyles({ multiline: false, fullWidth, variant, error, rounded }) + className
						}
						placeholder=" "
					/>

					<label
						id={idLabel}
						htmlFor="floating_outlined"
						className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2  z-10 origin-[0] px-2 pointer-events-none  ${applyRounded(
							rounded
						)}
            ${applyInvertedColor(Colors.background)}
  			${applyBgColor(Colors.background)}
         
             peer-focus:bg-background peer-focus:dark:bg-background-inverted peer-focus:text-accent peer-focus:dark:text-accent-inverted peer-placeholder-shown:scale-100 
			peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1
            
               ${
									variant === Variants.filled &&
									`bg-transparent
									dark:bg-transparent
									peer-focus:bg-transparent peer-focus:dark:bg-transparent -translate-y-7 peer-focus:-translate-y-7  peer-focus:scale-90  scale-90`
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
