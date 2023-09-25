import React from "react";
import { cardStyle } from "./Card.style";
import {
	Color,
	Colors,
	PaddingOneOrBothValues,
	Shadow,
	Size,
	Sizes,
	SizesComplete,
} from "../../../types";
import { applyPadding } from "../../../style";

interface Props {
	shadow?: Shadow;
	hasBorder?: boolean;
	rounded?: SizesComplete;
	color?: Color;
	customBackground?: string;
	maxWidth?: Size | "full";
	children?: React.ReactNode;
	cardHeader?: React.ReactNode;
	cardFooter?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	padding?: PaddingOneOrBothValues;
	contentClassname?: string;
}
const Card: React.FC<Props> = ({
	shadow,
	hasBorder = false,
	color = Colors.background,
	rounded = Sizes.lg,
	maxWidth,
	cardHeader,
	cardFooter,
	children,
	padding = Sizes.md,
	className,
	customBackground,
	onClick,
	style,
	contentClassname,
}) => {
	return (
		<button
			disabled={Boolean(onClick)}
			onClick={onClick}
			className={`${cardStyle({
				hasBorder,
				maxWidth,
				shadow,
				rounded,
				color,
				className,
			})} `}
			style={{
				...style,
				backgroundColor: customBackground,
			}}
		>
			{cardHeader && (
				<header
					className={`flex justify-between border-b border-opacity-50 items-center w-full ${applyPadding(
						padding
					)}`}
				>
					{cardHeader}
				</header>
			)}
			<div className={`${contentClassname} ${applyPadding(padding)}`}>{children}</div>

			{cardFooter && (
				<footer className={`flex justify-between ${applyPadding(padding)}`}>{cardFooter}</footer>
			)}
		</button>
	);
};

export default Card;
