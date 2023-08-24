import React from "react";
import { Icon, IconNames } from "../../Icon";
import { Transition } from "@headlessui/react";
import { Text } from "../../Text";
import { AccordionItemProps } from "./Accordion";
import { SizesWithNone } from "../../../common";
import { applyRoundessSizes } from "../../../style";
import { Button } from "../../Buttons";
interface Props {
	hasIcon?: boolean;
	isOpened?: boolean;
	toggleOpen?: () => void;
	item: AccordionItemProps;
	rounded: SizesWithNone;
}
const AccordionItem: React.FC<Props> = ({
	item,
	hasIcon,
	isOpened = false,
	toggleOpen,
	rounded = "none",
}) => {
	return (
		<article key={item.title} className={`flex flex-col gap-1 overflow-hidden  ${item.className}`}>
			<header>
				<Button
					rounded={false}
					type="text"
					fullWidth
					onClick={toggleOpen}
					className="flex justify-between items-center rounded-lg cursor-pointer py-2 px-4 "
				>
					<Text size={4} value={item.title}></Text>
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
				<p className="py-2 px-4">{item.content}</p>
			</Transition>
		</article>
	);
};

export default AccordionItem;
