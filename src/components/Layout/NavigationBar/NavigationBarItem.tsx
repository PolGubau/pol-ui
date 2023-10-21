import React from "react";
import { BottombarItem } from "../../Navigation/Bottombar/Bottombar";
import { motion } from "framer-motion";
import { applyColor, applyRounded, applyBgColor } from "../../../style";
import { Icon } from "../../Base";
import { Stack } from "../Stack";
import { Color, SizesComplete } from "../../../types";
import { Text } from "../../Text";

interface Props {
	tab: BottombarItem;
	setActiveIndex: (index: number) => void;
	activeIndex: number;
	onChange?: (index: number) => void;
	i: number;
	style?: React.CSSProperties;
	colorSelected?: Color;
	colorText?: Color;
	invertTextOnSelected?: boolean;
	textSize?: number;
	rounded?: SizesComplete;
	itemRounded?: SizesComplete;
	layoutId?: string;
	iconSize?: number;

	goNext: () => void;
	goPrevious: () => void;
	shouldShowText?: (index: number) => boolean;
}
const NavigationBarItem: React.FC<Props> = ({
	tab,
	setActiveIndex,
	activeIndex,
	onChange,
	i,
	style,
	colorSelected,
	colorText,
	invertTextOnSelected,
	textSize,
	goNext,
	goPrevious,
	iconSize = 25,
	rounded,
	itemRounded,
	shouldShowText = () => true,
	layoutId = "bubble",
}) => {
	return (
		<button
			key={tab.name}
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
				tab.link && window.history.pushState({}, "", tab.link);
				tab.link && window.dispatchEvent(new PopStateEvent("popstate"));
				setActiveIndex(i);
				onChange?.(i);
				tab.onClick?.();
			}}
			role="tab"
			className={`flex items-center hover:bg-background/10 h-full cursor-pointer justify-center flex-grow relative transition-all ${applyColor(
				colorText
			)} focus-visible:ring-2 focus-visible:ring-accent py-1 px-3 ${applyRounded(itemRounded)} `}
			style={style}
		>
			{activeIndex === i && (
				<motion.span
					layoutId={layoutId}
					className={`absolute inset-0 z-0 ${applyBgColor(colorSelected)}
 
							${applyRounded(rounded)}`}
					transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
				/>
			)}
			<span
				style={{ zIndex: 1 }}
				className={`relative flex justify-center items-center  ${applyRounded(itemRounded)}  `}
			>
				<Stack direction={"row"} gap={4} wrap="nowrap" className="truncate">
					{tab.icon && (
						<Icon
							size={iconSize}
							color={colorText}
							invertColor={activeIndex === i && invertTextOnSelected}
							icon={tab.icon}
						/>
					)}
					{shouldShowText(i) && (
						<Text
							color={colorText}
							invertColor={activeIndex === i && invertTextOnSelected}
							size={textSize}
						>
							{tab.name}
						</Text>
					)}
				</Stack>
			</span>
		</button>
	);
};

export default NavigationBarItem;
