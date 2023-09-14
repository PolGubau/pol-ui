import styled from "styled-components";

export const SlideShowStyled = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: visible;
	min-height: 100px;
	height: 100%;

	.slideshow {
		display: flex;
		justify-content: center;
		position: absolute;
		height: 100%;
		align-items: center;
		overflow-y: auto;
		max-height: 100%;
	}
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
		display: flex;
		justify-content: center;
		overflow-y: auto;
		padding: 1px;
		width: 90%;
		margin: 0 5%;
		height: fit-content;
		max-width: 100%;
		max-height: 100%;

		& > * {
			max-height: 100%;
			height: fit-content;
		}
	}
`;
