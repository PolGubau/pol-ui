import { keyframes, styled } from "styled-components";
import { ColorTypes } from "../../../../../types";
import { bgVariant } from "../../../../../style";

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

const Pulse = ({ className, variant }: { className: string; variant: ColorTypes }) => {
	return (
		<PulseStyled
			className={`flex rounded-full justify-center items-center  ${bgVariant({
				variant,
			})} ${className}`}
		></PulseStyled>
	);
};

export default Pulse;
