import React from "react";
import TextStyled from "./Styled";
import { shorterText, textSizer } from "./text.functions";
import "../../style/baseTheme.css";
interface Props {
	size?: number;
	isItalic?: boolean;
	color?: string;
	value: string;
	maxLines?: number;
	maxLength?: number;
	isMarkdown?: boolean;
	className?: string;
	centered?: boolean;
	weight?: number;
	role?: string;
	as?: "label" | "p" | "span" | "div";
	htmlFor?: string;
}

const Text: React.FC<Props> = ({
	as = "p",
	value, // Text to be displayed
	size, // Size of the text
	color, // Color of the text
	maxLines = 99, // Max lines of the text
	maxLength = 999, // Max length of the text
	isMarkdown = false, // If the text is markdown
	className, // Class name of the text
	isItalic = false, // If the text is italic
	centered = false, // If the text is centered
	weight = 400, // Weight of the text
	role = "text",
	htmlFor,
}): React.JSX.Element => {
	const shortedText = shorterText({ value, maxLength });
	const sizedText = textSizer({ size, value: shortedText, isMarkdown });

	return (
		<TextStyled
			as={as}
			className={` 
				w-fit
 				${isItalic ? "italic" : ""}
				${centered ? "text-center" : "text-left"}
				
				text:text-background-inverted
				dark:text-background
				
		
 			${className}`}
			$color={color}
			role={role}
			$maxLines={maxLines}
			$weight={weight}
			htmlFor={htmlFor}
		>
			{sizedText}
		</TextStyled>
	);
};
export default Text;
