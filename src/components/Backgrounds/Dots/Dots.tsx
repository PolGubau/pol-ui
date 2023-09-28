import { styled } from "styled-components";

const SIZE = 60;

const DotBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: ${SIZE}px ${SIZE}px;
	background-image: radial-gradient(circle at 1px 1px, white 2px, transparent 0);
	background-position: center;
	transform: translateZ(-500px);
`;

export default DotBackground;
