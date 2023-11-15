import React from "react";
import { arrowPointerPB, pointerPB } from "./Pointer.styles";
import { motion } from "framer-motion";
interface Props {
	value: number;
	percentage: number;
	pointerPosition: "top" | "bottom";
	pointerWithArrow?: boolean;
	vertical?: boolean;
	showPointer?: boolean;
}

const ProgressBarPointer: React.FC<Props> = ({
	value,
	percentage,
	pointerPosition,
	pointerWithArrow,
	vertical,
}) => {
	const stylesIfVertical = {
		bottom: `${percentage}%`,
	};
	const stylesIfHorizontal = {
		left: `${percentage}%`,
	};

	return (
		<motion.div
			key={percentage}
			initial={{ opacity: 0, y: 5, zIndex: 2 }}
			animate={{ opacity: 1, y: -5, zIndex: 2 }}
			exit={{ opacity: 0, y: 5, zIndex: 2 }}
			style={{
				zIndex: 2,
			}}
			transition={{ type: "spring", stiffness: 100 }}
		>
			{pointerWithArrow && (
				<span
					className={arrowPointerPB({ pointerPosition, vertical })}
					style={vertical ? stylesIfVertical : stylesIfHorizontal}
				/>
			)}
			<div
				className={pointerPB({ pointerPosition, vertical })}
				style={vertical ? stylesIfVertical : stylesIfHorizontal}
			>
				{value}
			</div>
		</motion.div>
	);
};

export default ProgressBarPointer;
