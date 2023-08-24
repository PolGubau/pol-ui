import React from "react";
import { Icon, IconNames } from "../../../Icon";
import { Transition } from "@headlessui/react";
import { Text } from "../../../Text";
import { AccordionItemProps } from "./Accordion";
interface Props {
	hasIcon?: boolean;
	isOpened?: boolean;
	toggleOpen?: () => void;
	item: AccordionItemProps;
}
const AccordionItem: React.FC<Props> = ({ item, hasIcon, isOpened = false, toggleOpen }) => {
	return (
		<article key={item.title} className="flex flex-col gap-1 rounded-xl">
			<header
				className="flex justify-between items-center  rounded-lg cursor-pointer hover:bg-gray-100 py-2 px-4 "
				onClick={toggleOpen}
			>
				<Text size={4} className="text-primary" value={item.title}></Text>
				{hasIcon && (
					<Icon
						alwaysRender={true}
						icon={item.icon ?? IconNames.arrowdown}
						className={`transition-transform transform ${isOpened ? "rotate-180" : ""}`}
					/>
				)}
			</header>
			<Transition
				show={isOpened}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<p className="py-2 px-4">{item.content}</p>
			</Transition>
		</article>
	);
};

export default AccordionItem;
