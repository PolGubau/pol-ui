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
	animation-name: ${animation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	animation-delay: ${({ $index }) => $index * 0.4}s;
`;

export const dotsSize = tv({
	variants: {
		size: { xs: "h-5 w-1", sm: "h-6 w-2", md: "h-7 w-3", lg: "h-8 w-4", xl: "h-9 w-5" },
	},
	defaultVariants: {
		size: "md",
	},
});
