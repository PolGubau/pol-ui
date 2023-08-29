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
	animation: ${animation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	animation-delay: ${({ $index }) => $index * 0.5}s;
`;

export const dotsSize = ({ size }: { size?: Sizes }) => {
	switch (size) {
		case "xs":
			return "h-1 w-1";
		case "sm":
			return "h-2 w-2";

		case "lg":
			return "h-4 w-4";
		case "xl":
			return "h-5 w-5";
		default:
			return "h-3 w-3";
	}
};
