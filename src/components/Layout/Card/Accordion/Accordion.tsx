import React from "react";
import AccordionItem from "./AccordionItem";
export interface AccordionItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | React.ReactNode;
}

interface Props {
	openMode?: "single" | "multiple";
	hasIcon?: boolean;
	defaultOpened?: number[];
	data: AccordionItemProps[];
}

const Accordion: React.FC<Props> = ({
	hasIcon = true,
	data = [],
	openMode = "single",
	defaultOpened = null,
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
	const closeAll = () => {
		setOpenedIndex(null);
	};
	const toggleOpened = (index: number) => {
		if (openMode === "single") {
			if (isThisItemOpened(index)) {
				closeItem(index);
			} else {
				closeAll();
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
		<section className="flex flex-col  max-w-2xl divide-y border rounded-xl">
			{data.map((item, _i) => (
				<AccordionItem
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
