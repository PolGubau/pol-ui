import { ChangeEvent } from "react";
import { containerStyles, inputStyles, labelStyles } from "./Styled";
import React from "react";
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
	className,
	maxLength,
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
		if (!newValue) return;

		onChange(newValue);
	};
	const [focused, setFocused] = React.useState(false);
	const hasValue =
		typeof value === "number" ||
		type === "date" ||
		type === "time" ||
		type === "number" ||
		Boolean(value?.length);
	return (
		<div className={containerStyles()}>
			{multiline ? (
				<textarea
					onFocus={() => setFocused(true)}
					rows={5}
					disabled={disabled ?? false}
					maxLength={maxLength}
					required={required}
					defaultValue={value ?? ""}
					onChange={handleChange}
					className={inputStyles({ multiline: true }) + className}
				/>
			) : (
				<input
					{...(props as Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>)}
					type={type}
					onFocus={() => setFocused(true)}
					maxLength={maxLength}
					required={required}
					disabled={disabled}
					defaultValue={value ?? ""}
					onChange={handleChange}
					className={inputStyles({ multiline: false }) + className}
				/>
			)}
			{Boolean(label) && (
				<label className={labelStyles({ isUp: hasValue || focused })}>
					{label}
					{required && `*`}
				</label>
			)}
			{Boolean(helperText) && <span className="color-primary/60 text-xs">{helperText}</span>}
			{Boolean(error) && <span className="text-xs text-red-500">{error}</span>}
		</div>
	);
};

export default Field;
