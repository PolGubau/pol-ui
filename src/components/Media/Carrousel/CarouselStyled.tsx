import styled from "styled-components";
interface Props {
	$gap: number;
}
export const CarrouselStyled = styled.div<Props>`
	width: 100%;
	overflow: hidden;

	.slider {
		position: relative;
		display: flex;
		gap: ${(props) => props.$gap}px;
		overflow-x: scroll;
		overflow-y: hidden;
		scrollbar-width: none;
		scroll-behavior: smooth;

		&::-webkit-scrollbar {
			display: none;
		}
	}
	.slide {
		position: relative;
		width: 100%;
		min-width: 200px;
	}

	.nav {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: 90%;
		left: 0;
		transform: translateX(5%);
		top: 50%;
		display: flex;
		gap: 1rem;
		right: 1rem;
		z-index: 1;

		@media (hover: none) {
			display: none;
		}
	}
`;
