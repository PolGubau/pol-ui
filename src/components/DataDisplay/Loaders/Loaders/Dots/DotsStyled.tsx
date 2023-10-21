import styled from "styled-components";

interface DotsStyledProps {
	animationDuration?: number;
	colors?: string[];
}

export const DotsStyled = styled.div<DotsStyledProps>`
	animation: rotate infinite;
	animation-duration: ${(props) => props.animationDuration ?? 2}s;
	height: 50px;
	width: 50px;

	.loader:before,
	.loader:after {
		border-radius: 50%;
		content: "";
		display: block;
		height: 20px;
		width: 20px;
	}
	.loader:before {
		animation: ball1 1s infinite;
		background-color: ${(props) => props.colors?.[0] ?? "#f83434"};
		box-shadow: 30px 0 0 ${(props) => props.colors?.[1] ?? "#34c7f8"};
		margin-bottom: 10px;
	}
	.loader:after {
		animation: ball2 1s infinite;
		background-color: ${(props) => props.colors?.[1] ?? "#0dbfaa"};
		box-shadow: 30px 0 0 ${(props) => props.colors?.[0] ?? "#bf0db3"};
	}

	@keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg) scale(0.8);
			-moz-transform: rotate(0deg) scale(0.8);
		}
		50% {
			-webkit-transform: rotate(360deg) scale(1.2);
			-moz-transform: rotate(360deg) scale(1.2);
		}
		100% {
			-webkit-transform: rotate(720deg) scale(0.8);
			-moz-transform: rotate(720deg) scale(0.8);
		}
	}

	@keyframes ball1 {
		0% {
			box-shadow: 30px 0 0 ${(props) => props.colors?.[3] ?? "#f8b334"};
		}
		50% {
			box-shadow: 0 0 0 ${(props) => props.colors?.[3] ?? "#f8b334"};
			margin-bottom: 0;
			-webkit-transform: translate(15px, 15px);
			-moz-transform: translate(15px, 15px);
		}
		100% {
			box-shadow: 30px 0 0 ${(props) => props.colors?.[3] ?? "#f8b334"};
			margin-bottom: 10px;
		}
	}

	@keyframes ball2 {
		0% {
			box-shadow: 30px 0 0 ${(props) => props.colors?.[2] ?? "#97bf0d"};
		}
		50% {
			box-shadow: 0 0 0 ${(props) => props.colors?.[2] ?? "#97bf0d"};
			margin-top: -20px;
			-webkit-transform: translate(15px, 15px);
			-moz-transform: translate(15px, 15px);
		}
		100% {
			box-shadow: 30px 0 0 ${(props) => props.colors?.[2] ?? "#97bf0d"};
			margin-top: 0;
		}
	}
`;
