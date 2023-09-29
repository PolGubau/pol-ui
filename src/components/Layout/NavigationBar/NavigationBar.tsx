import { motion } from "framer-motion";
import { useState } from "react";
import { Text } from "../../Text";
import Box from "../../Base/Box/Box";
import {
	AlignItem,
	AlignItems,
	Color,
	Colors,
	Direction,
	Directions,
	JustifyContent,
	JustifyContents,
	SizesComplete,
} from "../../../types";
import { applyBgColor, applyColor, applyRounded } from "../../../style";
import { Stack } from "../Stack";

interface Props {
	style?: React.CSSProperties;
	data: string[];
	defaultSelected?: number;
	onChange?: (index: number) => void;
	rounded?: SizesComplete;
	colorSelected?: Color;
	invertTextOnSelected?: boolean;
	colorText?: Color;
	textSize?: number;
	direction?: Direction;
	alignItems?: AlignItem;
	justify?: JustifyContent;
}

export default function NavigationBar({
	defaultSelected = 0,
	style = {},
	onChange,
	data = [],
	rounded = "full",
	colorText = Colors.primary,
	colorSelected = Colors.accent,
	invertTextOnSelected = false,
	textSize = 16,
	direction = Directions.x,
	alignItems = AlignItems.start,
	justify = JustifyContents.start,
}: Props) {
	const [activeIndex, setActiveIndex] = useState(defaultSelected);

	const goPrevious = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
			onChange?.(activeIndex - 1);
		}
	};
	const goNext = () => {
		if (activeIndex < data.length - 1) {
			setActiveIndex(activeIndex + 1);
			onChange?.(activeIndex + 1);
		}
	};

	return (
		// <div style={style}>
		// 	<Stack className="overflow-auto p-1" wrap="nowrap">
		// 		{data.map((name, i) => {
		// 			const isSelected = i === activeIndex;
		// 			return (
		// 				<motion.button
		// 					onKeyDown={(e) => {
		// 						if (e.key === "Enter") {
		// 							goNext();
		// 						} else if (e.key === " ") {
		// 							goNext();
		// 						}
		// 						// if arrow Left or arrow Right is pressed toggle the switch on or off
		// 						else if (e.key === "ArrowLeft") {
		// 							goPrevious();
		// 						} else if (e.key === "ArrowRight") {
		// 							goNext();
		// 						}
		// 					}}
		// 					className={`relative  ${buttonStyles({
		// 						padding: { x: "none", y: Sizes.xs },
		// 						variant: Variants.text,
		// 					})}  ${applyRounded(
		// 						rounded
		// 					)} focus-visible:outline-none focus-visible:ring-2   ring-primary transition-all overflow-visible

		//                     ${!isSelected && `hover:bg-primary/10`}
		//                     `}
		// 					key={name}
		// 					transition={{ duration: 0.2 }}
		// 					onTap={() => {
		// 						setActiveIndex(i);
		// 						onChange?.(i);
		// 					}}
		// 				>
		// 					<Box
		// 						style={{ zIndex: 1 }}
		// 						className={`relative py-1 px-3 ${applyRounded(rounded)}  `}
		// 					>
		// 						<Text color={colorText} invertColor={invertTextOnSelected && isSelected}>
		// 							{name}
		// 						</Text>
		// 					</Box>

		// 					{isSelected && (
		// 						<motion.div
		// 							className={`absolute w-full h-full top-0 left-0  ${applyRounded(
		// 								rounded
		// 							)} ${applyBgColor(colorSelected)}`}
		// 							layoutId="selected"
		// 						/>
		// 					)}
		// 				</motion.button>
		// 			);
		// 		})}
		// 	</Stack>
		// </div>
		<Stack
			direction={direction === Directions.x ? "row" : "column"}
			wrap="nowrap"
			gap={0}
			alignItems={alignItems}
			justify={justify}
			style={style}
		>
			{data.map((tab, i) => (
				<button
					key={tab}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							goNext();
						} else if (e.key === " ") {
							goNext();
						}
						// if arrow Left or arrow Right is pressed toggle the switch on or off
						else if (e.key === "ArrowLeft") {
							goPrevious();
						} else if (e.key === "ArrowRight") {
							goNext();
						}
					}}
					onClick={() => {
						setActiveIndex(i);
						onChange?.(i);
					}}
					role="tab"
					className={`${activeIndex === i ? " " : "hover:text-primary/20"}

					relative rounded-full px-3 py-1.5 text-sm font-medium outline-primary transition focus-visible:outline-2 ${applyColor(
						colorText
					)}`}
					style={style}
				>
					{activeIndex === i && (
						<motion.span
							layoutId="bubble"
							className={`absolute inset-0 z-0 ${applyBgColor(colorSelected)}
 
							${applyRounded(rounded)}`}
							transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
						/>
					)}
					<Box style={{ zIndex: 1 }} className={`relative py-1 px-3 ${applyRounded(rounded)}  `}>
						<Text
							color={colorText}
							invertColor={Boolean(invertTextOnSelected && activeIndex === i)}
							size={textSize}
						>
							{tab}
						</Text>
					</Box>
				</button>
			))}
		</Stack>
	);
}
