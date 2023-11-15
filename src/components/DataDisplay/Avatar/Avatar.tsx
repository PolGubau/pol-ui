import React from "react";
import { Link } from "../../Buttons/Link";
import { Image } from "../../Media/Image";
import Badge from "../Badge/Badge";
import {
	BaseProps,
	ButtonVariant,
	Color,
	Colors,
	Size,
	Sizes,
	SizesComplete,
	Variants,
} from "../../../types";
import { applyRounded, applyTextSize } from "../../../style";
import { applyButtonVariant } from "../../Buttons/Button/Button.styles";
import Button from "../../Buttons/Button/Button";
import { Text } from "../../Text";

interface Props extends BaseProps {
	src: string;
	name: string;
	rounded?: SizesComplete;
	description?: string;
	size?: Size;
	href?: string;
	hasText?: boolean;
	variant?: ButtonVariant;
	color?: Color;
	badge?: string;
	badgeColor?: Color;
	onClick?: (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
}

// inner functions

const applySize = (size: Size) => {
	const sizes = {
		xs: "30px",
		sm: "40px",
		md: "50px",
		lg: "60px",
		xl: "70px",
	};
	return sizes[size];
};

const Avatar: React.FC<Props> = ({
	src,
	name,
	id,
	className,
	ariaLabel,
	style,
	rounded = "none",
	description,
	size = Sizes.md,
	href,
	hasText = true,
	variant = Variants.text,
	color = Colors.background,
	badge,
	badgeColor = Colors.primary,
	onClick,
}) => {
	const ImageContent = (
		<Image
			src={src}
			rounded={rounded}
			aspectRatio="1:1"
			height={applySize(size)}
			width={applySize(size)}
			alt={name}
			className={`${applyRounded(rounded)} `}
		/>
	);

	const avatarContent = (
		<div
			className={`flex w-fit h-fit gap-2 items-center ${applyTextSize(size)} ${applyRounded(
				rounded
			)} 
			${hasText ? "pr-4" : ""}
			
			${applyButtonVariant({
				variant,
				color,
			})} ${className ?? ""}`}
			style={style}
			id={id}
			aria-label={ariaLabel}
		>
			{ImageContent}
			{hasText && (
				<div className="flex flex-col gap-0">
					<Text>{name}</Text>
					{description && (
						<Text size={12} as="small">
							{name}
						</Text>
					)}
				</div>
			)}
		</div>
	);

	const isALink = Boolean(href);

	const isAButton = Boolean(onClick);
	console.log("isAButton", (e: any) => onClick?.(e));

	if (isALink) {
		return (
			<Badge content={badge ?? ""} isVisible={Boolean(badge)} color={badgeColor}>
				<Link variant={Variants.text} href={href ?? ""} padding={"none"} rounded={rounded}>
					{avatarContent}
				</Link>
			</Badge>
		);
	}
	if (isAButton) {
		return (
			<Badge content={badge ?? ""} isVisible={Boolean(badge)} color={badgeColor}>
				<Button variant={Variants.text} padding={"none"} rounded={rounded} onClick={onClick}>
					{avatarContent}
				</Button>
			</Badge>
		);
	}

	return (
		<Badge content={badge ?? ""} isVisible={Boolean(badge)} color={badgeColor}>
			{avatarContent}
		</Badge>
	);
};

export default Avatar;
