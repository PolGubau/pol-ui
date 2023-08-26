import React from "react";
import { cardStyle } from "./Card.style";
import { ColorTypes, Sizes, SizesWithNone } from "../../../types";
import { applyBgColor, applyPadding, applyRounded } from "../../../style";

interface Props {
	hasShadow?: boolean;
	hasBorder?: boolean;
	rounded?: SizesWithNone;
	color?: ColorTypes;
	maxWidth?: Sizes | "full";
	children?: React.ReactNode;
	cardHeader?: React.ReactNode;
	cardFooter?: React.ReactNode;
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
}
const Card: React.FC<Props> = ({
	hasBorder = true,
	hasShadow = true,
	color = "background",
	rounded = "lg",
	maxWidth,
	cardHeader,
	cardFooter,
	children,
	padding = { x: "md", y: "md" },
}) => {
	return (
		<div
			className={`${cardStyle({ hasBorder, hasShadow, maxWidth })} ${applyRounded(
				rounded
			)} ${applyBgColor(color)}`}
		>
			{cardHeader && (
				<header
					className={`flex justify-between border-b-2 border-opacity-50 items-center  ${applyPadding(
						padding
					)}`}
				>
					{cardHeader}
				</header>
			)}
			<div className={`flex flex-col gap-2 ${applyPadding(padding)}`}>{children}</div>

			{cardFooter && (
				<footer className={`flex justify-between ${applyPadding(padding)}`}>{cardFooter}</footer>
			)}
		</div>
	);
};

export default Card;
