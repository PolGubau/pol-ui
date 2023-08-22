import React from "react";
import { arrowPointerPB, pointerPB } from "./Pointer.styles";
interface Props {
	value: number;
	percentage: number;
	pointerPosition: "top" | "bottom";
	pointerWithArrow?: boolean;
}

const ProgressBarPointer: React.FC<Props> = ({
	value,
	percentage,
	pointerPosition,
	pointerWithArrow,
}) => {
	return (
		<>
			{pointerWithArrow && (
				<span
					className={arrowPointerPB({ pointerPosition })}
					style={{
						left: `${percentage}%`,
					}}
				></span>
			)}
			<div
				className={pointerPB({ pointerPosition })}
				style={{
					left: `${percentage}%`,
				}}
			>
				{value}
			</div>
		</>
	);
};

export default ProgressBarPointer;
