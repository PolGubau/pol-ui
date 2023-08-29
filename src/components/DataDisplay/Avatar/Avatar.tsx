import React from "react";
import { Link } from "../../Buttons/Link";
import { Image } from "../../Media/Image";
import Badge from "../Badge/Badge";
import { ColorTypes, Sizes, SizesComplete } from "../../../types";
import { applyRounded, applyTextSize } from "../../../style";
import { applyButtonVariant } from "../../Buttons/Button/Button.styles";
import { ButtonVariant } from "../../Buttons/Button/Button";

interface Props {
	src: string;
	name: string;
	rounded?: SizesComplete;
	description?: string;
	size?: Sizes;
	href?: string;
	hasText?: boolean;
	variant?: ButtonVariant;
	color?: ColorTypes;
	badge?: string;
	badgeColor?: ColorTypes;
}

const Avatar: React.FC<Props> = ({
	src,
	name,
	rounded = "none",
	description,
	size = "md",
	href,
	hasText = true,
	variant = "text",
	color = "background",
	badge,
	badgeColor,
}) => {
	const ImageContent = (
		<Image
			src={src}
			rounded={rounded}
			aspectRatio="1/1"
			height={
				size === "xs"
					? "30px"
					: size === "sm"
					? "40px"
					: size === "md"
					? "50px"
					: size === "lg"
					? "60px"
					: "70px"
			}
			width={
				size === "xs"
					? "30px"
					: size === "sm"
					? "40px"
					: size === "md"
					? "50px"
					: size === "lg"
					? "60px"
					: "70px"
			}
			alt={name}
			className={`${applyRounded(rounded)} `}
		/>
	);

	const avatarContent = (
		<div
			className={`p-1 flex w-fit h-fit gap-2 items-center ${applyTextSize(size)} ${applyRounded(
				rounded
			)} ${applyButtonVariant({
				variant,
				color,
			})} `}
		>
			{badge ? (
				<Badge content={badge} color={badgeColor}>
					{ImageContent}
				</Badge>
			) : (
				ImageContent
			)}

			{hasText && (
				<div className="flex flex-col">
					{name}
					{description && <small>{description}</small>}
				</div>
			)}
		</div>
	);

	return href ? (
		<Link variant="text" href={href}>
			{avatarContent}
		</Link>
	) : (
		avatarContent
	);
};

export default Avatar;
