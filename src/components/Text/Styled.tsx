import styled from "styled-components";
import "../../style/global.css";
interface TextStyledProps {
	$maxLines?: number;
	$weight?: number;
	$size?: string;
	$balanced?: boolean;
}

const TextStyled = styled.div<TextStyledProps>`
	${(props) => props.$balanced && "text-wrap: balance;"}

	overflow-y: hidden;
	overflow-x: auto;
	display: -webkit-box;
	-webkit-line-clamp: ${(props) => props.$maxLines};
	line-clamp: ${(props) => props.$maxLines};
	-webkit-box-orient: vertical;

	font-size: ${(props) => props.$size};

	font-weight: ${(props) => props.$weight};
`;

export default TextStyled;
