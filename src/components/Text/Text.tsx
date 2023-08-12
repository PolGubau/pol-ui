import React from "react";
import TextStyled from "./Styled";
import { textSizer } from "./functions";

interface Props {
	size?: number;
	weight?: string;
	color?: string;
	value: string;
}

const Text: React.FC<Props> = ({
	value, // Text to be displayed
	size, // Size of the text
	weight = "normal", // Weight of the text
	color = undefined, // Color of the text
}) => {
	return (
		<TextStyled $weight={weight} $color={color}>
			{textSizer({ size, value })}
		</TextStyled>
	);
};
export default Text;
