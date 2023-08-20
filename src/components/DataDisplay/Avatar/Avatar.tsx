import React from "react";
import { Sizes } from "../../../common";
import { Link } from "../../Buttons/Link";
import { avatarImageStyle, avatarStyle } from "./avatar.styles";
import { Image } from "../Image";

interface Props {
	src: string;
	name: string;
	rounded?: "circular" | "rounded" | "square";
	description?: string;
	size?: Sizes;
	href?: string;
	hasText?: boolean;
	variant?: "transparent" | "main" | "neutral";
}

const Avatar: React.FC<Props> = ({
	src,
	name,
	rounded,
	description,
	size,
	href,
	hasText = true,
	variant = "transparent",
}) => {
	const avatarContent = (
		<div className={`flex gap-2 items-center ${avatarStyle({ size, variant })}`}>
			<Image src={src} rounded={rounded} alt={name} className={avatarImageStyle({ size })} />
			{hasText && (
				<div className="flex flex-col">
					{name}
					{description && <small>{description}</small>}
				</div>
			)}
		</div>
	);

	return href ? (
		<Link type="text" href={href}>
			{avatarContent}
		</Link>
	) : (
		avatarContent
	);
};

export default Avatar;
