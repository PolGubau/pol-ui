import { useState } from "react";
import { Text } from "../../Text";
import { Colors } from "../../../types";
import { applyBgColor } from "../../../style";
interface Props {
	value: number;
	onChange?: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	className?: string;
	name?: string;
	id?: string;
	label?: string;
	disabled?: boolean;
	ariaLabel?: string;
	lineColor?: Colors;
	bulletColor?: Colors;
	labelClassName?: string;
}

const Range: React.FC<Props> = ({
	value,
	onChange,
	min = 0,
	max = 10,
	step = 0.1,

	className = "",
	name = "",

	id = "",
	label = "",
	disabled = false,
	ariaLabel = "",

	lineColor = Colors.primary,
	bulletColor = Colors.accent,

	labelClassName = "",
}) => {
	const [valueState, setValueState] = useState(value);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValueState(Number(e.target.value));
		onChange?.(Number(e.target.value));
	};

	return (
		<>
			{label && (
				<Text disabled={disabled} as="label" size={"sm"} htmlFor={id} className={labelClassName}>
					{label}
				</Text>
			)}
			<input
				id={id}
				aria-label={ariaLabel}
				name={name}
				type="range"
				disabled={disabled}
				onChange={handleChange}
				min={min}
				max={max}
				value={valueState}
				step={step}
				className={`w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer
                ${applyBgColor(lineColor)} bg-opacity-30
                dark:primary dark:bg-primary/20 dark:active:bg-primary/30 dark:focus:bg-primary/30 dark:hover:bg-primary/30 dark:disabled:bg-primary/10 dark:disabled:cursor-not-allowed ${className}`}
			/>
		</>
	);
};

export default Range;
