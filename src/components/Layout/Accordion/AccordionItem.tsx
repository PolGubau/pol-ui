import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import { Text } from "../../Text";
import { AccordionItemProps } from "./Accordion";
import { Button, Link } from "../../Buttons";
import { JustifyContents, Side, Sides, SizesComplete, TextSize } from "../../../types";
import { applyRounded } from "../../../style";
interface Props {
	hasArrowIcon?: boolean;
	isOpened?: boolean;
	toggleOpen?: () => void;
	item: AccordionItemProps;
	rounded: SizesComplete;
	titleSize?: TextSize;
	arrowIconPosition?: Side;
	paintOpened?: boolean;
}
const AccordionItem: React.FC<Props> = ({
	item,
	hasArrowIcon = true,
	isOpened = false,
	toggleOpen,
	rounded = "none",
	titleSize = 4,
	paintOpened,
	arrowIconPosition = Sides.right,
}) => {
	const iconArrow = item.arrowIcon ?? IconNames.arrowup;

	return (
		<article
			key={item.title}
			className={`flex flex-col gap-1 overflow-hidden w-full ${applyRounded(rounded)} ${
				item.className
			}`}
		>
			<header>
				<Button
					rounded="none"
					variant={paintOpened && isOpened ? "filled" : "text"}
					onClick={toggleOpen}
					fullWidth
					justify={JustifyContents.between}
					icon={item.icon && <Icon icon={item.icon} alwaysRender />}
					className={`flex ${
						arrowIconPosition === Sides.left ? "flex-row-reverse" : "flex-row"
					}    ${hasArrowIcon ? "pr-4" : ""}`}
				>
					<Text size={titleSize} value={item.title}></Text>
					{hasArrowIcon && (
						<Icon
							icon={isOpened ? iconArrow : item.arrowIconOpened ?? iconArrow}
							className={`transition-transform transform
							${!item.arrowIconOpened && isOpened ? "rotate-180" : ""}`}
						/>
					)}
				</Button>
			</header>
			<Transition
				show={isOpened}
				enter="transition-all ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95 -translate-y-1  "
				enterTo="opacity-100 scale-100 translate-y-0  "
				leave="transition-all ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100  translate-y-0 "
				leaveTo="opacity-0 scale-95 -translate-y-1  "
			>
				<p className="py-2 px-4">
					{item.href ? (
						<Link fullWidth variant="text" href={item.href}>
							{item.content}
						</Link>
					) : (
						item.content
					)}
				</p>
			</Transition>
		</article>
	);
};

export default AccordionItem;
