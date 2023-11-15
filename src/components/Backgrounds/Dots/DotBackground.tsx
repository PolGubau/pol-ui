import { styled } from "styled-components";

interface Props {
	size?: number;
	children?: React.ReactNode;
	dotColor?: string;
	as?: React.ElementType;
	className?: string;
}

interface DotProps {
	size?: number;
	color?: string;
}

const DotBackgroundStyled = styled.div<DotProps>`
	width: 100%;
	height: 100%;
	background-size: ${({ size }) => size}px ${({ size }) => size}px;
	background-image: radial-gradient(circle at 4px 6px, ${({ color }) => color} 2px, transparent 0);
	background-position: center;
	transform: translateZ(-500px);
`;

export const DotBackground: React.FC<Props> = ({
	size = 30,
	dotColor = "#d9c7c7",
	children,
	as = "div",
	className = "",
}) => {
	return (
		<DotBackgroundStyled as={as} size={size} color={dotColor} className={className}>
			{children}
		</DotBackgroundStyled>
	);
};
export default DotBackground;
