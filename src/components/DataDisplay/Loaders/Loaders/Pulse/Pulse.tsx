import { keyframes, styled } from "styled-components";
import { Color } from "../../../../../types";
import { applyBgColor } from "../../../../../style";

const pulseAnimation = keyframes`
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    50% {
        transform: scale(1);
        opacity: 0.3;
    }
    100% {
            
        transform: scale(0.8);
        opacity: 1;
    }
`;

const PulseStyled = styled.div`
	animation: ${pulseAnimation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
`;

const Pulse = ({ className, color }: { className: string; color: Color }) => {
	return (
		<PulseStyled
			className={`flex rounded-full justify-center items-center  ${applyBgColor(
				color
			)} ${className}`}
		></PulseStyled>
	);
};

export default Pulse;
