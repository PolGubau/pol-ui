import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
import { applyBgColor, applyColor, applyInvertedColor, applyRounded } from "../../../style";
import { Stack } from "../Stack";
import { BottombarItem } from "../../Navigation/Bottombar/Bottombar";
import { Icon } from "../../Base";
import { Text } from "../../Text";

interface Props {
	style?: React.CSSProperties;
	data: BottombarItem[];
	defaultSelected?: number;
	onChange?: (index: number) => void;
	rounded?: SizesComplete;
	colorSelected?: Color;
	colorText?: Color;
	direction?: Direction;
	alignItems?: AlignItem;
	justify?: JustifyContent;
	className?: string;
	invertTextOnSelected?: boolean;
	itemRounded?: SizesComplete;
	onlyShowSelectedText?: boolean;
}

export default function NavigationBar({
	defaultSelected = 0,
	style = {},
	onChange,
	data = [],
	rounded = "full",
	colorText = Colors.primary,
	colorSelected = Colors.accent,
	direction = Directions.x,
	alignItems = AlignItems.center,
	justify = JustifyContents.center,
	className,
	invertTextOnSelected = false,
	itemRounded = rounded,
	onlyShowSelectedText = false,
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

	const shouldShowText = (index: number) => {
		if (onlyShowSelectedText) {
			return activeIndex === index;
		}
		return true;
	};
	return (
		<AnimatePresence>
			<Stack
				direction={direction === Directions.x ? "row" : "column"}
				wrap="nowrap"
				gap={4}
				alignItems={alignItems}
				justify={justify}
				style={style}
				className={`${className} ${applyRounded(rounded)} transition-all w-full`}
			>
				{data.map((tab, i) => (
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
							setActiveIndex(i);
							onChange?.(i);
							tab.onClick?.();
						}}
						role="tab"
						className={`flex items-center justify-center flex-grow relative transition-all ${applyColor(
							colorText
						)} focus-visible:ring-2 focus-visible:ring-accent py-1 px-3 ${applyRounded(
							itemRounded
						)} `}
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
						<a
							onClick={() => {
								tab.link && window.history.pushState({}, "", tab.link);
								tab.link && window.dispatchEvent(new PopStateEvent("popstate"));
							}}
							href={tab.link}
							style={{ zIndex: 1 }}
							className={`relative flex justify-center items-center  ${applyRounded(
								itemRounded
							)}  `}
						>
							<Stack direction={"row"} gap={4}>
								{tab.icon && (
									<Icon
										size={"xl"}
										color={colorText}
										invertColor={activeIndex === i && invertTextOnSelected}
										icon={tab.icon}
									/>
								)}
								{shouldShowText(i) && (
									<Text
										color={colorText}
										invertColor={activeIndex === i && invertTextOnSelected}
										size={"xl"}
									>
										{tab.name}
									</Text>
								)}
							</Stack>
						</a>
					</button>
				))}
			</Stack>
		</AnimatePresence>
	);
}
