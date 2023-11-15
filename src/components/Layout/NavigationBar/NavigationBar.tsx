import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
import { applyRounded } from "../../../style";
import { Stack } from "../Stack";
import { BottombarItem } from "../../Navigation/Bottombar/Bottombar";
import NavigationBarItem from "./NavigationBarItem";

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
	textSize?: number;
	layoutId?: string;
}

const IsALink = ({ link, children }: { link?: string; children: React.ReactNode }) => {
	if (link) {
		return (
			<BrowserRouter>
				<Link to={link} className="h-full">
					{children}
				</Link>
			</BrowserRouter>
		);
	}
	return <>{children}</>;
};

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
	textSize = 20,
	layoutId = "bubble",
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
				{data.map((tab, i) => {
					const isALink = Boolean(tab.link);

					if (isALink) {
						return (
							<IsALink link={tab.link} key={tab.name}>
								<NavigationBarItem
									tab={tab}
									setActiveIndex={setActiveIndex}
									activeIndex={activeIndex}
									onChange={onChange}
									i={i}
									style={style}
									colorSelected={colorSelected}
									colorText={colorText}
									invertTextOnSelected={invertTextOnSelected}
									textSize={textSize}
									goNext={goNext}
									goPrevious={goPrevious}
									rounded={rounded}
									itemRounded={itemRounded}
									shouldShowText={shouldShowText}
									layoutId={layoutId}
								/>
							</IsALink>
						);
					} else {
						return (
							<NavigationBarItem
								key={tab.name}
								tab={tab}
								setActiveIndex={setActiveIndex}
								activeIndex={activeIndex}
								onChange={onChange}
								i={i}
								style={style}
								colorSelected={colorSelected}
								colorText={colorText}
								invertTextOnSelected={invertTextOnSelected}
								textSize={textSize}
								goNext={goNext}
								goPrevious={goPrevious}
								rounded={rounded}
								itemRounded={itemRounded}
								shouldShowText={shouldShowText}
								layoutId={layoutId}
							/>
						);
					}
				})}
			</Stack>
		</AnimatePresence>
	);
}
