import React from "react";
import TextStyled from "./Styled";
import { shorterText, textSizer } from "./text.functions";

interface Props {
	size?: number;
	weight?: string;
	color?: string;
	value: string;
	maxLines?: number;
	maxLength?: number;
	isMarkdown?: boolean;
}

const Text: React.FC<Props> = ({
	value, // Text to be displayed
	size, // Size of the text
	weight, // Weight of the text
	color = undefined, // Color of the text
	maxLines = 99, // Max lines of the text
	maxLength = 999, // Max length of the text
	isMarkdown = false, // If the text is markdown
}): JSX.Element => {
	const shortedText = shorterText({ value, maxLength });
	const sizedText = textSizer({ size, value: shortedText, isMarkdown });
	return (
		<TextStyled $weight={weight} $color={color} $maxLines={maxLines}>
			{sizedText}
		</TextStyled>
	);
};
export default Text;
