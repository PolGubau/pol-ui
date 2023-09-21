import React from "react";
import AccordionItem from "./AccordionItem";
import { accordionStyles } from "./accordion.style";
import { applyMaxWidth, applyRounded } from "../../../style";
import { SizesWithNone, SizesWithFull, TextSize, Side, Sides, IconType } from "../../../types";
export interface AccordionItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: IconType;
	className?: string;
	href?: string;
	arrowIcon?: IconType;
	arrowIconOpened?: IconType;
}

interface Props {
	openMode?: "single" | "multiple";
	hasArrowIcon?: boolean;
	defaultOpened?: number[];
	data: AccordionItemProps[];
	className?: string;
	id?: string;
	ariaLabel?: string;
	hasDividers?: boolean;
	rounded?: SizesWithNone;
	hasBorder?: boolean;
	maxWidth?: SizesWithFull;
	titleSize?: TextSize;
	arrowIconPosition?: Side;
	paintOpened?: boolean;
}

const Accordion: React.FC<Props> = ({
	hasArrowIcon = true,
	data = [],
	openMode = "single",
	defaultOpened = null,
	className,
	id,
	ariaLabel,
	hasDividers = true,
	rounded = "md",
	hasBorder = true,
	maxWidth,
	arrowIconPosition = Sides.right,
	titleSize = 4,
	paintOpened = true,
}) => {
	const [openedIndex, setOpenedIndex] = React.useState<number[] | null>(defaultOpened);

	const isThisItemOpened = (index: number) => {
		return openedIndex?.includes(index);
	};
	const closeItem = (index: number) => {
		setOpenedIndex((prevValue) => {
			if (prevValue === null) {
				return null;
			}
			return prevValue.filter((i) => i !== index);
		});
	};
	const toggleOpened = (index: number) => {
		if (openMode === "single") {
			isThisItemOpened(index) ? closeItem(index) : setOpenedIndex([index]);
		} else {
			isThisItemOpened(index)
				? closeItem(index)
				: setOpenedIndex((prevValue) => {
						if (prevValue === null) {
							return [index];
						}
						return [...prevValue, index];
				  });
		}
	};

	return (
		<section
			className={`${accordionStyles({ hasDividers, hasBorder })} ${applyMaxWidth(
				maxWidth
			)} ${applyRounded(rounded)} 
			${className}`}
			id={id}
			aria-label={ariaLabel}
		>
			{data.map((item, _i) => (
				<AccordionItem
					paintOpened={paintOpened}
					titleSize={titleSize}
					rounded={rounded}
					key={item.title}
					arrowIconPosition={arrowIconPosition}
					item={item}
					hasArrowIcon={hasArrowIcon}
					isOpened={isThisItemOpened(_i)}
					toggleOpen={() => toggleOpened(_i)}
				/>
			))}
		</section>
	);
};

export default Accordion;
