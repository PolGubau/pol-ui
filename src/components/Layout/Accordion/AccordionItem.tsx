import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Text } from "../../Text";
import { AccordionItemProps } from "./Accordion";
import { Button, Link } from "../../Buttons";
import { JustifyContents, Side, Sides, SizesComplete } from "../../../types";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
	hasArrowIcon?: boolean;
	isOpened?: boolean;
	toggleOpen?: () => void;
	item: AccordionItemProps;
	rounded: SizesComplete;
	titleSize?: number | string;
	arrowIconPosition?: Side;
	paintOpened?: boolean;
}
const AccordionItem: React.FC<Props> = ({
	item,
	hasArrowIcon = true,
	isOpened = false,
	toggleOpen,
	titleSize,
	paintOpened,
	arrowIconPosition = Sides.right,
}) => {
	const iconArrow = item.arrowIcon ?? IconNames.arrowup;
	const properTextSize = typeof titleSize === "number" ? `${titleSize}px` : titleSize;
	return (
		<article key={item.title} className={`flex flex-col gap-1 w-full $ ${item.className}`}>
			<header className={`overflow-hidden `}>
				<Button
					rounded="none"
					variant={paintOpened && isOpened ? "filled" : "text"}
					onClick={toggleOpen}
					fullWidth
					justify={JustifyContents.between}
					icon={item.icon && <Icon icon={item.icon} alwaysRender />}
					className={`flex ${
						arrowIconPosition === Sides.left ? "flex-row-reverse" : "flex-row"
					}    ${hasArrowIcon ? "pr-4" : ""}
					
					
					`}
				>
					<Text size={properTextSize} value={item.title}></Text>
					{hasArrowIcon && (
						<Icon
							icon={isOpened ? iconArrow : item.arrowIconOpened ?? iconArrow}
							className={`transition-transform transform
							${!item.arrowIconOpened && isOpened ? "rotate-180" : ""}`}
						/>
					)}
				</Button>
			</header>
			<AnimatePresence>
				{isOpened && (
					<motion.div
						transition={{
							ease: "linear",
							duration: 0.1,
							opacity: { duration: 0.1 },
						}}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
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
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};

export default AccordionItem;
