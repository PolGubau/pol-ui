import styled from "styled-components";

export const SlideShowStyled = styled.div`
	.carousel-images {
		position: relative;
		border-radius: 10px;
		height: 400px;
		max-width: 650px;
		margin: auto;
		overflow: hidden;
	}
	.carousel-images img {
		width: 99%;
		height: 99%;
	}
	.slide_direction {
		display: flex;
		justify-content: space-between;
	}
	.left,
	.right {
		margin: 0 20px;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 10px;
		height: 25px;
		width: 25px;
	}
	.left {
		left: 0;
	}
	.right {
		right: 0;
	}
	.carousel-indicator {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		gap: 10px;
	}
	.dot {
		background-color: #333;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
	.active {
		background-color: #fa2020;
	}
`;
