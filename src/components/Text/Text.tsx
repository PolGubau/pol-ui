import React from "react";
import TextStyled from "./Styled";
import { shorterText, textSizer } from "./text.functions";
import "../../style/baseTheme.scss";
interface Props {
	size?: number;
	isBold?: boolean;
	isItalic?: boolean;
	color?: string;
	value: string;
	maxLines?: number;
	maxLength?: number;
	isMarkdown?: boolean;
	className?: string;
}

const Text: React.FC<Props> = ({
	value, // Text to be displayed
	size, // Size of the text
	color, // Color of the text
	maxLines = 99, // Max lines of the text
	maxLength = 999, // Max length of the text
	isMarkdown = false, // If the text is markdown
	className, // Class name of the text
	isItalic = false, // If the text is italic
	isBold = false, // If the text is bold
}): React.JSX.Element => {
	const shortedText = shorterText({ value, maxLength });
	const sizedText = textSizer({ size, value: shortedText, isMarkdown });

	return (
		<TextStyled
			className={` 
				${isBold ? "font-bold" : ""}
				${isItalic ? "italic" : ""}
			${className}`}
			$color={color}
			role="text"
			$maxLines={maxLines}
		>
			{sizedText}
		</TextStyled>
	);
};
export default Text;
