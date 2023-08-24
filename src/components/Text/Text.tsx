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
	centered?: boolean;
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
	centered = false, // If the text is centered
}): React.JSX.Element => {
	const shortedText = shorterText({ value, maxLength });
	const sizedText = textSizer({ size, value: shortedText, isMarkdown });

	return (
		<TextStyled
			className={` 
			w-fit
				${isBold ? "font-bold" : ""}
				${isItalic ? "italic" : ""}
				${centered ? "text-center" : "text-left"}
				
				p-0 m-0 overflow-hidden 
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
