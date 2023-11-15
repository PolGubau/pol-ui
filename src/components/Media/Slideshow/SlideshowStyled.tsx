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
		width: 100%;
		height: 100%;
		align-items: center;
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
		right: 5px;
	}

	.prev {
		left: 5px;
	}

	.item {
		display: flex;
		justify-content: center;
		padding: 1px;
		width: calc(100% - 100px);
		height: fit-content;
		max-width: 100%;
		max-height: 100%;

		& > * {
			max-height: 100%;
			height: fit-content;
		}
	}
`;
