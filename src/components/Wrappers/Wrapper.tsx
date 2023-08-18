import React from "react";
import ClickOutsideWrapper from "./ClickOutsideWrapper";

interface Props {
	onClickOutside?: () => void;
	children?: React.ReactNode;
	hasOverlay?: boolean;
}

const Wrapper: React.FC<Props> = ({ onClickOutside, children, hasOverlay }: any) => {
	return (
		<ClickOutsideWrapper
			className={` flex h-fit w-full overflow-x-hidden absolute top-0 z-40 justify-center items-center md:h-full md:inset-0 
				${hasOverlay ? "bg-primary/10" : ""}`}
			onClickOutside={onClickOutside}
		>
			{children}
		</ClickOutsideWrapper>
	);
};
export default Wrapper;
