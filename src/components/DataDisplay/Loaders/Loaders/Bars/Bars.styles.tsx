import { keyframes, styled } from "styled-components";
import { Sizes } from "../../../../../types";

const animation = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
    
`;

export const Styles = styled.div<{ $index: number }>`
	animation-name: ${animation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	animation-delay: ${({ $index }) => $index * 0.4}s;
`;

export const dotsSize = ({ size }: { size?: Sizes }) => {
	switch (size) {
		case "xs":
			return "h-5 w-1";
		case "sm":
			return "h-6 w-2";
		case "md":
			return "h-7 w-3";
		case "lg":
			return "h-8 w-4";
		case "xl":
			return "h-9 w-5";
		default:
			return "h-7 w-3";
	}
};
