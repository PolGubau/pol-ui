import React from "react";
import AccordionItem from "./AccordionItem";
import { accordionStyles } from "./accordion.style";
import { applyMaxWidth, applyRounded } from "../../../style";
import { SizesWithNone, SizesWithFull, Side, Sides, IconType, Sizes } from "../../../types";
import { Divider } from "../../DataDisplay";
import { AnimatePresence } from "framer-motion";
export interface AccordionItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string;
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
	titleSize?: number | string;
	arrowIconPosition?: Side;
	paintOpened?: boolean;
	transitionDuration?: number;
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
	rounded = Sizes.lg,
	hasBorder = true,
	maxWidth,
	arrowIconPosition = Sides.right,
	titleSize,
	paintOpened = true,
	transitionDuration = 0.2,
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
			className={`${accordionStyles({ hasBorder })} ${applyMaxWidth(maxWidth)} ${applyRounded(
				rounded
			)} 
			${className}`}
			id={id}
			aria-label={ariaLabel}
		>
			{data.map((item, _i) => {
				const itsNotLastItem = _i !== data.length - 1;
				return (
					<div key={item.title}>
						<AccordionItem
							paintOpened={paintOpened}
							titleSize={titleSize}
							rounded={rounded}
							arrowIconPosition={arrowIconPosition}
							item={item}
							hasArrowIcon={hasArrowIcon}
							isOpened={isThisItemOpened(_i)}
							toggleOpen={() => toggleOpened(_i)}
						/>
						{hasDividers && itsNotLastItem && <Divider margin="none" />}
					</div>
				);
			})}
		</section>
	);
};

export default Accordion;
