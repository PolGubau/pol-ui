import React from "react";
import { backgroundBar } from "./ProgessBar.styles";
import { ColorType, Size, SizesComplete, Tens } from "../../../types";
import ProgressBarPointer from "./components/Pointer/Pointer";
import ProgressBarMarks from "./components/Marks/Marks";
import { applyBgColor, applyRounded } from "../../../style";
import { AnimatedInnerBar } from "./components/AnimatedInnerBar";

interface ProgressBarProps {
	value: number; // Value of the progress bar (0-100)
	height?: string; // Height of the progress bar
	className?: string; // Additional CSS classes
	rounded?: SizesComplete;
	pointer?: boolean;
	pointerPosition?: "top" | "bottom";
	hasValueInside?: boolean;
	pointerWithArrow?: boolean;
	color?: ColorType;
	size?: Size;
	min?: number;
	max?: number;
	showMin?: boolean;
	showMax?: boolean;
	marks?: number; // Interval to show marks (percentage)
	marksColor?: ColorType;
	marksOpacity?: Tens;
	innerClassName?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	marks = 0,
	marksColor = "primary",
	rounded = "full",
	className = "",
	pointer = true,
	pointerPosition = "top",
	hasValueInside = false,
	pointerWithArrow = true,
	color = "accent",
	size = "md",
	min = 0,
	max = 100,
	showMin = false,
	showMax = false,
	marksOpacity = 20,
	innerClassName = "",
}) => {
	const maxPercent = 100;
	const minPercent = 0;
	if (value > maxPercent) {
		value = maxPercent;
	}
	if (value < minPercent) {
		value = minPercent;
	}
	if (min > max) {
		min = max;
	}
	if (max < min) {
		max = min;
	}

	// take the min and max as references to calculate the value as a percentage of them
	// if min is 0 and max is 100, and value is 50, then value is 50% of the total
	// if min is 50 and max is 100, and value is 75, then value is 50% of the total

	// percent formula will be: if min is 0 and max is 100, and value is 50, then value is 50% of the total

	const percentageWithDecimals = ((value - min) * 100) / (max - min);
	// round the percentage to the nearest integer
	let percentage = Math.round(percentageWithDecimals);
	if (isNaN(percentage)) return null;
	if (isNaN(value)) return null;

	if (percentage > 100) percentage = 100;
	if (percentage < 0) percentage = 0;

	return (
		<div className={`${backgroundBar({ size })} ${applyRounded(rounded)} ${className}`}>
			{pointer && (
				<ProgressBarPointer
					pointerWithArrow={pointerWithArrow}
					value={value}
					percentage={percentage}
					pointerPosition={pointerPosition}
				/>
			)}
			<div className={`overflow-hidden transition-all  ${applyRounded(rounded)}`}>
				<ProgressBarMarks marks={marks} color={marksColor} opacity={marksOpacity} />

				<AnimatedInnerBar
					finalWidth={percentage}
					className={`h-full absolute top-0 left-0 flex items-center justify-center  ${applyBgColor(
						color
					)} ${applyRounded(rounded)}${innerClassName}`}
					role="progressbar"
					aria-valuenow={percentage}
					aria-valuemin={min}
					aria-valuemax={max}
				>
					{hasValueInside && percentage}
				</AnimatedInnerBar>
			</div>
			{showMin && <div className="absolute left-1 top-0 2 pl-1">{min}</div>}
			{showMax && <div className="absolute right-1 top-0 pr-1">{max}</div>}
		</div>
	);
};

export default ProgressBar;
