import React, { ReactNode } from "react";
import {
	AlignItem,
	AlignItems,
	FlexDirections,
	FlexWraps,
	IFlexDirection,
	IFlexWrap,
	JustifyContent,
	JustifyContents,
} from "../../../types";

interface StackProps extends IFlexDirection, IFlexWrap {
	children: ReactNode;
	// If gap is number = gap in px, if its an string you can use any valid css unit
	gap?: number | string;
	alignItems?: AlignItem;
	grow?: number;
	className?: string;
	justify?: JustifyContent;
	width?: number | string;
}

const Stack: React.FC<StackProps> = ({
	children,
	wrap = FlexWraps.wrap,
	direction = FlexDirections.row,
	gap = "1em",
	alignItems = AlignItems.start,
	className = "",
	grow = 0,
	justify = JustifyContents["flex-start"],
	width = "100%",
}: StackProps) => {
	const properGap = typeof gap === "number" ? `${gap}px` : gap;
	const properWidth = typeof width === "number" ? `${width}px` : width;

	const classes = `flex items-${alignItems} ${className}`;

	return (
		<div
			className={classes}
			style={{
				justifyContent: justify,
				flexDirection: direction,
				gap: properGap,
				justifyItems: justify,
				flexWrap: wrap,
				alignItems: alignItems,
				flexGrow: grow,
				width: properWidth,
			}}
		>
			{children}
		</div>
	);
};

export default Stack;
