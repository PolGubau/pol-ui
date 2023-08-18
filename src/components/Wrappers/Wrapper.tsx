import React from "react";
import { ClickOutsideWrapper } from "./ClickOutsideWrapper";

interface Props {
	onClick?: () => void;
	children?: React.ReactNode;
	hasOverlay?: boolean;
}

const Wrapper: React.FC<Props> = ({ onClick, children, hasOverlay }: any) => {
	return (
		<div
			className={` flex  overflow-y-auto overflow-x-hidden absolute right-0 left-0 top-0 bottom-0 z-50 justify-center items-center md:h-full md:inset-0 
				
				${hasOverlay ? "bg-primary/10" : ""}`}
		>
			<ClickOutsideWrapper onClickOutside={onClick}>{children}</ClickOutsideWrapper>
		</div>
	);
};
export default Wrapper;
