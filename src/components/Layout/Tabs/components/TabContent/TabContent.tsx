import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Identifier } from "../../../../../types";

interface Props {
	content: string | React.ReactNode;
	className?: string;
	key: Identifier;
	movementAmount?: number;
}
const TabContent: React.FC<Props> = ({ content, className, key, movementAmount = 10 }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={key}
				initial={{ y: movementAmount, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -movementAmount, opacity: 0 }}
				transition={{ duration: 0.5 }}
				className={className}
			>
				{content}
			</motion.div>
		</AnimatePresence>
	);
};

export default TabContent;
