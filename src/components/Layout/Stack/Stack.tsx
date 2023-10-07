import React, { ReactNode } from "react";
import {
	AlignItem,
	AlignItems,
	BaseProps,
	FlexDirections,
	FlexWraps,
	IFlexDirection,
	IFlexWrap,
	JustifyContent,
	JustifyContents,
} from "../../../types";
import { StackStyled } from "./StackStyles";

interface StackProps extends IFlexDirection, IFlexWrap, BaseProps {
	children: ReactNode;
	// If gap is number = gap in px, if its an string you can use any valid css unit
	gap?: number | string;
	alignItems?: AlignItem;
	grow?: number;
	className?: string;
	justify?: JustifyContent;
	width?: number | string;
	as?: keyof React.JSX.IntrinsicElements; // This allows specifying HTML tag names as values for the 'as' prop.
}

const Stack: React.FC<StackProps> = ({
	as = "div",
	children,
	wrap = FlexWraps.wrap,
	direction = FlexDirections.row,
	gap = "1em",
	alignItems = AlignItems.center,
	className = "",
	grow = 0,
	justify = JustifyContents["flex-start"],
	width = "auto",
	style,
	id,
	ariaLabel,
}: StackProps) => {
	const properGap = typeof gap === "number" ? `${gap}px` : gap;
	const properWidth = typeof width === "number" ? `${width}px` : width;

	const classes = `flex items-${alignItems} ${className}`;

	return (
		<StackStyled
			id={id}
			aria-label={ariaLabel}
			as={as}
			$alignItems={alignItems}
			$gap={properGap}
			$grow={grow}
			$justify={justify}
			$width={properWidth}
			$wrap={wrap}
			$direction={direction}
			className={classes}
			style={style}
		>
			{children}
		</StackStyled>
	);
};

export default Stack;
