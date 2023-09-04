import React from "react";
import AccordionItem from "./AccordionItem";
import { accordionStyles } from "./accordion.style";
import { applyMaxWidth, applyRounded } from "../../../style";
import { SizesWithNone, SizesWithFull, TextSize } from "../../../types";
export interface AccordionItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | React.ReactNode;
	className?: string;
	href?: string;
}

interface Props {
	openMode?: "single" | "multiple";
	hasIcon?: boolean;
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
}

const Accordion: React.FC<Props> = ({
	hasIcon = true,
	data = [],
	openMode = "single",
	defaultOpened = null,
	className,
	id,
	ariaLabel,
	hasDividers = true,
	rounded = "none",
	hasBorder = true,
	maxWidth,
	titleSize = 4,
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
			if (isThisItemOpened(index)) {
				closeItem(index);
			} else {
				setOpenedIndex([index]);
			}
		} else {
			if (isThisItemOpened(index)) {
				closeItem(index);
			} else {
				setOpenedIndex((prevValue) => {
					if (prevValue === null) {
						return [index];
					}
					return [...prevValue, index];
				});
			}
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
					titleSize={titleSize}
					rounded={rounded}
					key={item.title}
					item={item}
					hasIcon={hasIcon}
					isOpened={isThisItemOpened(_i)}
					toggleOpen={() => toggleOpened(_i)}
				/>
			))}
		</section>
	);
};

export default Accordion;
