import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import { Text } from "../../Text";
import { AccordionItemProps } from "./Accordion";
import { Button, Link } from "../../Buttons";
import { SizesComplete, TextSize } from "../../../types";
import { applyRounded } from "../../../style";
interface Props {
	hasIcon?: boolean;
	isOpened?: boolean;
	toggleOpen?: () => void;
	item: AccordionItemProps;
	rounded: SizesComplete;
	titleSize?: TextSize;
}
const AccordionItem: React.FC<Props> = ({
	item,
	hasIcon,
	isOpened = false,
	toggleOpen,
	rounded = "none",
	titleSize = 4,
}) => {
	return (
		<article
			key={item.title}
			className={`flex flex-col gap-1 overflow-hidden w-full ${applyRounded(rounded)} ${
				item.className
			}`}
		>
			<header>
				<Button
					rounded={"none"}
					variant="text"
					fullWidth
					onClick={toggleOpen}
					className="justify-between w-full"
				>
					<Text size={titleSize} value={item.title}></Text>
					{hasIcon && (
						<Icon
							alwaysRender={true}
							icon={item.icon ?? IconNames.arrowdown}
							className={`transition-transform transform ${isOpened ? "rotate-180" : ""}`}
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
