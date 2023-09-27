import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Identifier, Side, Sides } from "../../../../../types";

interface Props {
	content: string | React.ReactNode;
	className?: string;
	key: Identifier;
	movementAmount?: number;
	transitionDirection?: Side;
}
const TabContent: React.FC<Props> = ({
	content,
	className,
	key,
	movementAmount = 10,
	transitionDirection = Sides.right,
}) => {
	const movement = transitionDirection === Sides.left ? -movementAmount : movementAmount;

	return (
		<>
			{/* <AnimatePresence>
				<motion.div
					key={key}
					transition={{
						duration: 0.9,
					}}
					// initial={{ opacity: 0, x: movement }}
					// animate={{ opacity: 1, x: 0 }}
					// exit={{ opacity: 0, x: -movement }}
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={className}
				>
					{content}
				</motion.div>
			</AnimatePresence> */}
			<AnimatePresence mode="wait">
				<motion.div
					key={key}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{content}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default TabContent;
