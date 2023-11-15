import React from "react";
import { Text } from "../../Text";
import { BaseProps, Size, Sizes } from "../../../types";
import { SwitchStyle } from "./style/SwitchStyle";

interface Props extends BaseProps {
	label?: string;
	checked?: boolean;
	onChange?: (value: boolean) => void;
	error?: string;
	className?: string;
	disabled?: boolean;
	size?: Size;
	labelId?: string;
	name?: string;
}

export const Switch: React.FC<Props> = ({
	label,
	checked = false,
	onChange,
	disabled = false,
	error,
	className = "",
	size = Sizes.md,
	style,
	id,
	labelId,
	ariaLabel = label ?? "switch",
	name = "switch",
}) => {
	const [isChecked, setIsCheck] = React.useState(checked);

	const toggleSwitch = () => {
		setIsCheck(!isChecked);
		onChange?.(!isChecked);
	};
	const toggleTrue = () => {
		setIsCheck(true);
		onChange?.(true);
	};
	const toggleFalse = () => {
		setIsCheck(false);
		onChange?.(false);
	};

	return (
		<div className={`flex gap-3 items-center`}>
			<input
				id={id}
				aria-label={ariaLabel}
				aria-labelledby={labelId}
				style={style}
				name={name}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						toggleSwitch();
					} else if (e.key === " ") {
						toggleSwitch();
					}
					// if arrow Left or arrow Right is pressed toggle the switch on or off
					else if (e.key === "ArrowLeft") {
						if (isChecked) toggleFalse();
					} else if (e.key === "ArrowRight") {
						if (!isChecked) toggleTrue();
					}
				}}
				role="switch"
				disabled={disabled}
				checked={isChecked}
				onChange={toggleSwitch}
				className={`
				
				${SwitchStyle({
					size,
					error,
				})}
				 ${className}`}
				type="checkbox"
			/>
			{label && (
				<Text
					role="heading"
					as="label"
					aria-level={4}
					disabled={disabled}
					id={labelId}
					className={`
					${disabled ? "opacity-70 hover:cursor-not-allowed" : "hover:cursor-pointer "}
					${size === "sm" ? "text-sm" : ""}
					${size === "lg" ? "text-lg" : ""}
					${error ? "text-danger" : ""}`}
					htmlFor="switch"
					value={label}
				/>
			)}
			{error && <Text as="small" className="text-danger">{`(${error})`}</Text>}
		</div>
	);
};
