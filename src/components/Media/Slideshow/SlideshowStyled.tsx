import styled from "styled-components";

export const SlideShowStyled = styled.div`
	position: relative;
	max-width: 100%;
	overflow: hidden;
	min-height: 100px;
	height: 100%;
	.next,
	.prev {
		top: calc(50%);
		transform: translateY(-50%);
		position: absolute;
		user-select: none;
		z-index: 2;
	}

	.next {
		right: 10px;
	}

	.prev {
		left: 10px;
	}

	.item {
		position: absolute;
		width: 90%;
		margin: 0 5%;
		height: 100%;
		max-width: 100vw;
	}
`;
