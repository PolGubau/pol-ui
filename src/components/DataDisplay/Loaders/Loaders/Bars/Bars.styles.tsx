import { keyframes, styled } from "styled-components";
import { Size } from "../../../../../types";

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
