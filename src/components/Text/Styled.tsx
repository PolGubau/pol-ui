import styled from "styled-components";
import "../../style/baseTheme.scss";
interface TextStyledProps {
	$weight?: string;
	$color?: string;
	$maxLines?: number;
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
		font-weight: ${(props) => props.$weight};
	}

	h5 {
		font-size: 1.25rem;
		margin: 0;
		font-weight: ${(props) => props.$weight};
	}

	h6 {
		font-size: 1rem;
		margin: 0;
		font-weight: ${(props) => props.$weight};
	}

	p {
		font-size: 1rem;
		margin: 0;
		font-weight: ${(props) => props.$weight};
	}
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: ${(props) => props.$maxLines};
	line-clamp: ${(props) => props.$maxLines};
	-webkit-box-orient: vertical;

	color: ${(props) => props.$color};
	margin: 0;
	padding: 0;
`;

export default TextStyled;
