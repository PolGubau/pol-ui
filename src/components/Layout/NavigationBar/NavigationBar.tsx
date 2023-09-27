import { motion } from "framer-motion";
import { useState } from "react";
import { Text } from "../../Text";
import Box from "../../Base/Box/Box";
import { Stack } from "../Stack";
import {
	ButtonVariants,
	Color,
	Colors,
	JustifyContents,
	Sizes,
	SizesComplete,
} from "../../../types";
import { applyBgColor, applyRounded } from "../../../style";
import { buttonStyles } from "../../Buttons/Button/Button.styles";

interface Props {
	style?: React.CSSProperties;
	data: string[];
	defaultSelected?: number;
	onChange?: (index: number) => void;
	rounded?: SizesComplete;
	colorSelected?: Color;
	invertTextOnSelected?: boolean;
	colorText?: Color;
}

export default function NavigationBar({
	defaultSelected = 0,
	style = {},
	onChange,
	data = [],
	rounded = Sizes.lg,
	colorSelected = Colors.accent,
	invertTextOnSelected = false,
	colorText = Colors.primary,
}: Props) {
	const [selected, setSelected] = useState(defaultSelected);

	const goPrevious = () => {
		if (selected > 0) {
			setSelected(selected - 1);
			onChange?.(selected - 1);
		}
	};
	const goNext = () => {
		if (selected < data.length - 1) {
			setSelected(selected + 1);
			onChange?.(selected + 1);
		}
	};
	let tabs = [
		{ id: "world", label: "World" },
		{ id: "ny", label: "N.Y." },
		{ id: "business", label: "Business" },
		{ id: "arts", label: "Arts" },
		{ id: "science", label: "Science" },
	];
	let [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		// <div style={style}>
		// 	<Stack className="overflow-auto p-1" wrap="nowrap">
		// 		{data.map((name, i) => {
		// 			const isSelected = i === selected;
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
		// 						padding: { x: Sizes.xs, y: Sizes.md },
		// 						variant: ButtonVariants.text,
		// 					})}  ${applyRounded(
		// 						rounded
		// 					)} focus-visible:outline-none focus-visible:ring-2   ring-primary transition-all overflow-visible

		//                     ${!isSelected && `hover:bg-primary/10`}
		//                     `}
		// 					key={name}
		// 					transition={{ duration: 0.2 }}
		// 					onTap={() => {
		// 						setSelected(i);
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
		<div className="flex space-x-1">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={`${
						activeTab === tab.id ? "" : "hover:text-background-inverted/60"
					} relative rounded-full px-3 py-1.5 text-sm font-medium text-background-inverted outline-primary transition focus-visible:outline-2`}
					style={{
						WebkitTapHighlightColor: "transparent",
					}}
				>
					{activeTab === tab.id && (
						<motion.span
							layoutId="bubble"
							className="absolute inset-0 z-10 bg-background mix-blend-difference"
							style={{ borderRadius: 9999 }}
							transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
						/>
					)}
					{tab.label}
				</button>
			))}
		</div>
	);
}
