import styled, { keyframes } from "styled-components";

interface AnimationProps {
	finalWidth: number;
	$vertical?: boolean;
}

const slideInFromLeft = keyframes<AnimationProps>`
  0% {
    width: 0%;
  }
  100% {
    width: ${(props) => props.finalWidth}%;
  }
`;

const slideInFromBottom = keyframes<AnimationProps>`
  0% {
    height: 0%;
  }
  100% {
    height: ${(props) => props.finalWidth}%;
  }
`;

export const AnimatedInnerBar = styled.div<AnimationProps>`
	animation: 0.5s ease-out;
	animation-name: ${(props) => (props.$vertical ? slideInFromBottom : slideInFromLeft)};
	/* 
  if horizontal, width: ${(props) => props.finalWidth}%;
  if vertical, height: ${(props) => props.finalWidth}%;
  */

	${(props) => (props.$vertical ? `height: ${props.finalWidth}%;` : `width: ${props.finalWidth}%;`)}
`;
