import React from "react";
import { backgroundBar, progressBar } from "./ProgessBar.styles";
import { ColorTypes, Opacities, Rounded, Sizes } from "../../../types";
import { applyRoundess } from "../../../style";
import ProgressBarPointer from "./components/Pointer/Pointer";
import ProgressBarMarks from "./components/Marks/Marks";

interface ProgressBarProps {
	value: number; // Value of the progress bar (0-100)
	height?: string; // Height of the progress bar
	className?: string; // Additional CSS classes
	rounded?: Rounded;
	pointer?: boolean;
	pointerPosition?: "top" | "bottom";
	hasValueInside?: boolean;
	pointerWithArrow?: boolean;
	variant?: ColorTypes;
	size?: Sizes;
	min?: number;
	max?: number;
	showMin?: boolean;
	showMax?: boolean;
	marks?: number; // Interval to show marks (percentage)
	marksColor?: ColorTypes;
	marksOpacity?: Opacities;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	marks = 0,
	marksColor = "dark",
	rounded = "circular",
	className = "",
	pointer = true,
	pointerPosition = "top",
	hasValueInside = false,
	pointerWithArrow = true,
	variant = "accent",
	size = "md",
	min = 0,
	max = 100,
	showMin = false,
	showMax = false,
	marksOpacity = 20,
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
		<div
			className={`${backgroundBar({ variant, size })} ${applyRoundess({ rounded })} ${className}`}
		>
			{pointer && (
				<ProgressBarPointer
					pointerWithArrow={pointerWithArrow}
					value={value}
					percentage={percentage}
					pointerPosition={pointerPosition}
				/>
			)}
			<div className={`overflow-hidden transition-all  ${applyRoundess({ rounded })}`}>
				<ProgressBarMarks marks={marks} marksColor={marksColor} opacity={marksOpacity} />
				<div
					className={`${progressBar({ variant })} ${applyRoundess({ rounded })}`}
					style={{
						width: `${percentage}%`,
					}}
					role="progressbar"
					aria-valuenow={percentage}
					aria-valuemin={min}
					aria-valuemax={max}
				>
					{hasValueInside && percentage}
				</div>
			</div>
			{showMin && <div className="absolute left-1 top-0 2">{min}</div>}
			{showMax && <div className="absolute right-1 top-0">{max}</div>}
		</div>
	);
};

export default ProgressBar;
