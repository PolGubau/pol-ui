import React from "react";
import { backgroundBar } from "./ProgressBar.styles";
import {
	Color,
	Colors,
	Direction,
	Directions,
	Placements,
	PointerTrigger,
	PointerTriggers,
	Size,
	Sizes,
	SizesComplete,
	Ten,
} from "../../../types";
import ProgressBarPointer from "./components/Pointer/Pointer";
import ProgressBarMarks from "./components/Marks/Marks";
import { applyBgColor, applyBgOpacity, applyRounded } from "../../../style";
import { AnimatedInnerBar } from "./components/AnimatedInnerBar";
import { useHover } from "../../../hooks";
import { AnimatePresence } from "framer-motion";

interface ProgressBarProps {
	value: number; // Value of the progress bar (0-100)
	height?: string; // Height of the progress bar
	className?: string; // Additional CSS classes
	rounded?: SizesComplete;
	pointer?: PointerTrigger;
	pointerPosition?: "top" | "bottom";
	hasValueInside?: boolean;
	pointerWithArrow?: boolean;
	innerColor?: Color;
	backgroundColor?: Color;
	size?: Size;
	min?: number;
	max?: number;
	showMin?: boolean;
	showMax?: boolean;
	marks?: number; // Interval to show marks (percentage)
	marksColor?: Color;
	marksOpacity?: Ten;
	innerClassName?: string;
	direction?: Direction;
	hoverPointerEnterDelay?: number;
	hoverPointerLeaveDelay?: number;
	backgroundOpacity?: Ten;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	marks = 0,
	marksColor = Colors.accent,
	innerColor = Colors.accent,
	backgroundColor = Colors.primary,
	backgroundOpacity = 10,
	rounded = "full",
	className = "",
	pointer = PointerTriggers.always,
	pointerPosition = Placements.top,
	hasValueInside = false,
	pointerWithArrow = true,
	size = Sizes.md,
	min = 0,
	max = 100,
	showMin = false,
	showMax = false,
	marksOpacity = 20,
	innerClassName = "",
	direction = Directions.x,
	hoverPointerEnterDelay = 0,
	hoverPointerLeaveDelay = 0,
}) => {
	const { isHovering, hoverProps } = useHover({
		enterDelay: hoverPointerEnterDelay,
		leaveDelay: hoverPointerLeaveDelay,
	});

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

	const isVertical = direction === Directions.y;

	const showPointer = pointer === "always" || (pointer === "onHover" && isHovering);
	return (
		<div
			{...hoverProps}
			className={`min-h-[10px] min-w-[10px] ${backgroundBar({
				size,
				vertical: isVertical,
			})} ${applyRounded(rounded)}
			${applyBgColor(backgroundColor)}
			${applyBgOpacity(backgroundOpacity)}
			${className}`}
		>
			<AnimatePresence>
				{showPointer && (
					<ProgressBarPointer
						showPointer={showPointer}
						pointerWithArrow={pointerWithArrow}
						value={value}
						percentage={percentage}
						pointerPosition={pointerPosition}
						vertical={isVertical}
					/>
				)}
			</AnimatePresence>
			<div className={`overflow-hidden transition-all  ${applyRounded(rounded)}`}>
				<ProgressBarMarks
					marks={marks}
					color={marksColor}
					opacity={marksOpacity}
					vertical={isVertical}
				/>

				<AnimatedInnerBar
					$vertical={isVertical}
					finalWidth={percentage}
					className={` ${
						direction === Directions.x ? "h-full" : "w-full"
					}  absolute bottom-0 left-0 flex items-center justify-center  ${applyBgColor(
						innerColor
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
