import { ReactNode } from "react";
import { Sizes, SizesComplete } from "../../../types";
import { applyCentered, applyFullWidth, applyRounded } from "../../../style";

interface Props {
	fullWidth?: boolean;
	children: ReactNode;
	centered?: boolean;
	rounded?: SizesComplete;
	className?: string;
}

const ButtonGroup = ({
	fullWidth = false,
	centered = false,
	children,
	rounded = Sizes.lg,
	className,
}: Props) => {
	return (
		<div
			className={
				`inline-flex ring-1 ring-primary overflow-hidden
				
				${applyCentered(centered)}
				${applyFullWidth(fullWidth)}
				
				${applyRounded(rounded)}
				${applyRounded(rounded)}
				
				
				` + className
			}
			role="group"
		>
			{children}
		</div>
	);
};

export default ButtonGroup;
