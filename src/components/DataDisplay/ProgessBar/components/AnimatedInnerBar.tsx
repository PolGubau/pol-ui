import styled, { keyframes } from "styled-components";

interface AnimationProps {
	finalWidth: number;
}

const slideInFromLeft = keyframes<AnimationProps>`
  0% {
    width: 0%;
  }
  100% {
    width: ${(props) => props.finalWidth}%;
  }
`;

export const AnimatedInnerBar = styled.div<AnimationProps>`
	animation: ${slideInFromLeft} 0.5s ease-out;
	width: ${(props) => props.finalWidth}%;
`;
