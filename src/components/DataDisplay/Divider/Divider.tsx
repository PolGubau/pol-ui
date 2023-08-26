import React from "react";
import {
	applyAlignments,
	applyBgColor,
	applyColor,
	applyMarginX,
	applyMarginY,
	applyOpacity,
	applyRounded,
} from "../../../style";
import { Icon } from "../../Icon";
import { ColorTypes, Alignments, SizesWithNone, Tens, Direction, BaseProps } from "../../../types";

interface Props extends BaseProps {
	direction?: Direction;
	color?: ColorTypes;
	weight?: number;
	message?: string | React.ReactNode;
	messagePosition?: Alignments;
	icon?: string;
	margin?: SizesWithNone;
	opacity?: Tens;
	messageColor?: ColorTypes;
	messageBgColor?: ColorTypes;
	messageRounded?: SizesWithNone;
}

// The divider container represents a horizontal rule that separates content in lists and layouts.
// by default the colors it's the primary color with 1px height and few opacity.
// The divider can be used in different ways, for example, to separate content in a list, or to separate content vertically or horizontally.
// You can trigger a Divider just calling the componing <Divider />.

// You can customize the divider with the following props:
// - orientation: The orientation of the divider. It can be horizontal or vertical. By default is horizontal.
// - color: The color of the divider. By default is the primary color.
// - width: The width of the divider. By default is 100%.

// You can pass a message to and it will be rendered in the center of the divider.
// Or left/Rigth if you pass the prop orientation.

//Once we have Chips, this message will be a transparent chip that can have bg.

// You can also pass an icon as well.

const barStyle = (
	direction: Direction,
	messagePosition: Alignments,
	margin: SizesWithNone,
	className?: string
) => {
	return `relative rounded-full flex items-center ${
		direction === "x" ? "h-0.5 w-full" : "w-0.5"
	} ${applyAlignments(messagePosition)} ${direction === "x" && applyMarginY(margin)}
            ${direction === "y" && applyMarginX(margin)}
			
			${className}
`;
};

const Divider: React.FC<Props> = ({
	id,
	className,
	ariaLabel,
	style,

	direction = "x",
	color = "primary",
	weight = 1,
	message,
	messagePosition = "center",
	icon,
	margin = "sm",
	opacity,
	messageBgColor = "background",
	messageRounded = "md",
}) => {
	return (
		<div
			id={id}
			aria-label={ariaLabel}
			className={`
			${applyBgColor(color)}
            ${barStyle(direction, messagePosition, margin, className)}  
			${applyOpacity(opacity)}
            `}
			style={{
				height: direction === "x" ? weight : "100%",
				width: direction === "y" ? weight : "100%",
				...style,
			}}
		>
			{message && (
				<div
					className={`absolute flex justify-center gap-2  
					${applyColor(color)}
					${applyBgColor(messageBgColor)}
					${applyRounded(messageRounded)}
					${direction === "x" ? "px-2" : "py-1"}
					`}
				>
					{icon && <Icon icon={icon} />}
					{message}
				</div>
			)}
		</div>
	);
};

export default Divider;
