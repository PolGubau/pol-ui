import React from "react";
import TextStyled from "./Styled";
import { shorterText } from "./text.functions";
import "../../style/baseTheme.css";
import { applyColor } from "../../style";
import { ColorType } from "../../types";
import Markdown from "markdown-to-jsx";
interface Props {
	size?: number | string;
	isItalic?: boolean;
	color?: ColorType;
	value: string;
	maxLines?: number;
	maxLength?: number;
	isMarkdown?: boolean;
	className?: string;
	centered?: boolean;
	weight?: number;
	role?: string;
	as?: "label" | "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	htmlFor?: string;
	disabled?: boolean;
	children?: string;
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
	role = "text", // Role of the text
	htmlFor,
	disabled = false,
	children,
}): React.JSX.Element => {
	const properSize = typeof size === "number" ? `${size}px` : size ?? undefined;

	const properValue = value ?? children;
	const shortedText = shorterText({ value: properValue, maxLength });

	return (
		<TextStyled
			as={as}
			className={` 
				w-fit 
 				${isItalic ? "italic" : ""}
				${centered ? "text-center" : "text-left"}
			
 				${disabled ? "cursor-not-allowed opacity-70" : ""}
				${applyColor(color)}
				
 		${className}
 			`}
			$size={properSize}
			role={role}
			$maxLines={maxLines}
			$weight={weight}
			htmlFor={htmlFor}
		>
			{isMarkdown ? <Markdown>{shortedText}</Markdown> : shortedText}
		</TextStyled>
	);
};
export default Text;
