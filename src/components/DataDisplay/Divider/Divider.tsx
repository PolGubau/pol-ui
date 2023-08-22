import React from "react";
import { Alignments, ColorTypes, Margins, Opacities } from "../../../common";
import {
	applyOpacity,
	bgVariant,
	horizontalMargins,
	textVariant,
	verticalMargins,
} from "../../../style";
import { tv } from "tailwind-variants";
import { Icon } from "../../Icon";

interface Props {
	orientation?: "horizontal" | "vertical";
	variant?: ColorTypes;
	weight?: number;
	message?: string | React.ReactNode;
	messagePosition?: Alignments;
	icon?: string;
	margin?: Margins;
	opacity?: Opacities;
	customTextBackground?: string;
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

const barStyle = tv({
	base: "relative rounded-full flex   flex items-center ",
	variants: {
		orientation: {
			horizontal: "h-0.5 w-full",
			vertical: "w-0.5",
		},
		messagePosition: {
			center: "justify-center",
			left: "justify-start",
			right: "justify-end",
		},
	},

	defaultVariants: {
		orientation: "horizontal",
		messagePosition: "center",
	},
});

const Divider: React.FC<Props> = ({
	orientation = "horizontal",
	variant = "default",
	weight = 1,
	message,
	messagePosition = "center",
	icon,
	margin = "small",
	opacity,
	customTextBackground = "canvas",
}) => {
	return (
		<div
			className={`
            ${orientation}    
            ${bgVariant({ variant })}
            ${barStyle({ orientation, messagePosition })}  
			${applyOpacity({ opacity })}
            ${orientation === "horizontal" && verticalMargins({ margin })}
            ${orientation === "vertical" && horizontalMargins({ margin })}
			
            `}
			style={{
				height: orientation === "horizontal" ? weight : "100%",
				width: orientation === "vertical" ? weight : "100%",
			}}
		>
			{message && (
				<div
					className={`absolute flex justify-center gap-2 bg-background rounded-lg  ${textVariant({
						variant,
					})}
					
					${orientation === "horizontal" ? "px-2" : "py-1"}
					`}
					style={{
						backgroundColor: customTextBackground,
					}}
				>
					{icon && <Icon icon={icon} />}
					{message}
				</div>
			)}
		</div>
	);
};

export default Divider;
