import React from "react";
import { Link } from "../../Buttons/Link";
import { avatarImageStyle, avatarStyle } from "./avatar.styles";
import { Image } from "../../Media/Image";
import Badge from "../Badge/Badge";
import { ColorTypes, Sizes, SizesComplete } from "../../../types";

interface Props {
	src: string;
	name: string;
	rounded?: SizesComplete;
	description?: string;
	size?: Sizes;
	href?: string;
	hasText?: boolean;
	variant?: "transparent" | "main" | "neutral";
	badge?: string;
	badgeColor?: ColorTypes;
}

const Avatar: React.FC<Props> = ({
	src,
	name,
	rounded = "none",
	description,
	size,
	href,
	hasText = true,
	variant = "transparent",
	badge,
	badgeColor,
}) => {
	const ImageContent = (
		<Image src={src} rounded={rounded} alt={name} className={avatarImageStyle({ size })} />
	);

	const avatarContent = (
		<div className={`flex gap-2 items-center ${avatarStyle({ size, variant })}`}>
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
