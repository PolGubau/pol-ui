import styled from "styled-components";
import "../../style/baseTheme.css";
interface TextStyledProps {
	$color?: string;
	$maxLines?: number;
	$weight?: number;
}

const TextStyled = styled.div<TextStyledProps>`
	h1 {
		font-size: 2.5rem;
		margin: 0;
	}

	h2 {
		font-size: 2rem;
		margin: 0;
	}

	h3 {
		font-size: 1.75rem;
		margin: 0;
	}

	h4 {
		font-size: 1.5rem;
		margin: 0;
	}

	h5 {
		font-size: 1.25rem;
		margin: 0;
	}

	h6 {
		font-size: 1rem;
		margin: 0;
	}

	p {
		font-size: 1rem;
		margin: 0;
	}
	padding: 0;
	margin: 0;
	overflow-y: hidden;
	overflow-x: auto;
	display: -webkit-box;
	-webkit-line-clamp: ${(props) => props.$maxLines};
	line-clamp: ${(props) => props.$maxLines};
	-webkit-box-orient: vertical;
	color: ${(props) => props.$color} !important;
	font-weight: ${(props) => props.$weight} !important;
`;

export default TextStyled;
