import React from "react";
import { applyPadding, applyRoundess, bgVariant } from "../../../style";
import { cardStyle } from "./Card.style";
import { Rounded, ColorTypes, Sizes, SizesWithNone } from "../../../types";

interface Props {
	hasShadow?: boolean;
	hasBorder?: boolean;
	rounded?: Rounded;
	variant?: ColorTypes;
	maxWidth?: Sizes | "full";
	children?: React.ReactNode;
	cardHeader?: React.ReactNode;
	cardFooter?: React.ReactNode;
	padding?: SizesWithNone | "auto";
}
const Card: React.FC<Props> = ({
	hasBorder = true,
	hasShadow = true,
	variant = "light",
	rounded = "rounded",
	maxWidth,
	cardHeader,
	cardFooter,
	children,
	padding,
}) => {
	return (
		<div
			className={`${cardStyle({ hasBorder, hasShadow, maxWidth })} ${applyRoundess({
				rounded,
			})} ${bgVariant({
				variant,
			})}`}
		>
			{cardHeader && (
				<header
					className={`flex justify-between border-b-2 border-opacity-50 items-center  ${applyPadding(
						{ padding }
					)}`}
				>
					{cardHeader}
				</header>
			)}
			<div className={`flex flex-col gap-2 ${applyPadding({ padding })}`}>{children}</div>

			{cardFooter && (
				<footer
					className={`flex justify-between ${applyPadding({
						padding,
					})}`}
				>
					{cardFooter}
				</footer>
			)}
		</div>
	);
};

export default Card;
