import React from "react";
import { arrowPointerPB, backgroundBar, pointerPB, progressBar } from "./ProgessBar.styles";
import { ColorTypes, Rounded, Sizes } from "../../../common";
import { roundedStyles } from "../../../style";

interface ProgressBarProps {
	value: number; // Value of the progress bar (0-100)
	height?: string; // Height of the progress bar
	dividedIn?: number; // Interval to show marks (percentage)
	className?: string; // Additional CSS classes
	rounded?: Rounded;
	pointer?: boolean;
	pointerPosition?: "top" | "bottom";
	hasValueInside?: boolean;
	variant?: ColorTypes;
	size?: Sizes;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	dividedIn = 0,
	rounded,
	className = "",
	pointer = true,
	pointerPosition = "top",
	hasValueInside = false,
	variant = "accent",
	size = "md",
}) => {
	const maxPercent = 100;
	const minPercent = 0;
	if (value > maxPercent) {
		value = maxPercent;
	}
	if (value < minPercent) {
		value = minPercent;
	}

	const renderMarks = () => {
		// marks is a number, represents the number of marks to show
		if (dividedIn) {
			// if marks is 10, we want to show 10 marks, so we need 10 absolute divs

			const marksArray = Array.from({ length: dividedIn }, (_, i) => i);
			return marksArray.map((mark) => {
				return (
					<div
						key={mark}
						className={`w-px h-full last:hidden bg-primary/20 absolute top-0 z-[1]  `}
						style={{
							// place the mark at the correct position, if we have 3 marks, we want to place the first mark at 25%, the second at 50%, and the third at 75%.
							left: `${(100 / dividedIn) * (mark + 1)}%`,
						}}
					></div>
				);
			});
		}

		return null;
	};

	return (
		<div
			className={`${backgroundBar({ variant, size })} ${roundedStyles({ rounded })} ${className}`}
		>
			{pointer && (
				<>
					<div
						className={arrowPointerPB({ pointerPosition })}
						style={{
							left: `${value}%`,
						}}
					></div>
					<div
						className={pointerPB({ pointerPosition })}
						style={{
							left: `${value}%`,
						}}
					>
						{value}
					</div>
				</>
			)}
			<div className={`overflow-hidden transition-all  ${roundedStyles({ rounded })}`}>
				{renderMarks()}
				<div
					className={`${progressBar({ variant })} ${roundedStyles({ rounded })}`}
					style={{
						width: `${value}%`,
					}}
					role="progressbar"
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={100}
				>
					{hasValueInside && value}
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
