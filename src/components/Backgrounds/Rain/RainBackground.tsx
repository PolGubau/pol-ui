import styled from "styled-components";

const RainBgStyled = styled.div<{
	color: string;
}>`
	position: relative;
	width: 100%;
	height: 100%;

	overflow: hidden;

	.raindrop {
		position: absolute;
		width: 2px;
		height: 15px;

		/* fallback for old devices */
		background: ${({ color }) => color};

		/* use the color to generate a gradent to bottom from transparent to the color  */
		background: linear-gradient(180deg, transparent, ${({ color }) => color});
		animation: fall infinite;
	}

	@keyframes fall {
		0% {
			transform: translateY(0vh);
			opacity: 1;
		}
		100% {
			transform: translateY(100vh);
			opacity: 0;
		}
	}
`;

const RainBackground = ({
	color = "#006",
	amount = 50,
	fastest = 1000,
	slowest = 10000,
}: {
	color?: string;
	amount?: number;
	fastest?: number;
	slowest?: number;
}) => {
	const raindrops = Array.from({ length: amount }, (v, i) => (
		<div
			className="raindrop"
			key={i}
			style={{
				// make the opacity of the raindrop random
				opacity: Math.random(),

				animationDuration: `${Math.floor(Math.random() * (slowest - fastest) + fastest)}ms`,

				animationIterationCount: "infinite",
				animationDelay: `${Math.floor(Math.random() * 1000)}ms`,
				left: `${Math.floor(Math.random() * 100)}%`,
			}}
		></div>
	));

	return (
		<RainBgStyled color={color} className="w-full">
			{raindrops}
		</RainBgStyled>
	);
};

export default RainBackground;
