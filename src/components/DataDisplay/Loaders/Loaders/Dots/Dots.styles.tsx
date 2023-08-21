import { keyframes, styled } from "styled-components";
import { tv } from "tailwind-variants";

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
export const dotsSize = tv({
	variants: {
		size: { xs: "h-1 w-1", sm: "h-2 w-2", md: "h-3 w-3", lg: "h-4 w-4", xl: "h-5 w-5" },
	},
	defaultVariants: {
		size: "md",
	},
});
