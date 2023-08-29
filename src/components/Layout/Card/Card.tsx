import React from "react";
import { cardStyle } from "./Card.style";
import { ColorTypes, Shadow, Sizes, SizesWithNone } from "../../../types";
import {
	applyBgColor,
	applyMaxWidth,
	applyPadding,
	applyRounded,
	applyShadow,
} from "../../../style";

interface Props {
	shadow?: Shadow;
	hasBorder?: boolean;
	rounded?: SizesWithNone;
	color?: ColorTypes;
	maxWidth?: Sizes | "full";
	children?: React.ReactNode;
	cardHeader?: React.ReactNode;
	cardFooter?: React.ReactNode;
	className?: string;
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
}
const Card: React.FC<Props> = ({
	shadow,
	hasBorder = true,
	color = "background",
	rounded = "lg",
	maxWidth,
	cardHeader,
	cardFooter,
	children,
	padding = { x: "md", y: "md" },
	className,
}) => {
	return (
		<div
			className={`${cardStyle({
				hasBorder,
				maxWidth,
				shadow,
				rounded,
				color,
				className,
			})} `}
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
