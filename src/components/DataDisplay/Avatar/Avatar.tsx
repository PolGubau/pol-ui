import React from "react";
import { Link } from "../../Buttons/Link";
import { Image } from "../../Media/Image";
import Badge from "../Badge/Badge";
import { ButtonVariant, ColorType, Size, SizesComplete } from "../../../types";
import { applyRounded, applyTextSize } from "../../../style";
import { applyButtonVariant } from "../../Buttons/Button/Button.styles";
import Button from "../../Buttons/Button/Button";

interface Props {
	src: string;
	name: string;
	rounded?: SizesComplete;
	description?: string;
	size?: Size;
	href?: string;
	hasText?: boolean;
	variant?: ButtonVariant;
	color?: ColorType;
	badge?: string;
	badgeColor?: ColorType;
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
	rounded = "none",
	description,
	size = "md",
	href,
	hasText = true,
	variant = "text",
	color = "background",
	badge,
	badgeColor,
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
				<div className="flex flex-col text-contrast dark:text-contrast-dark">
					{name}
					{description && <small>{description}</small>}
				</div>
			)}
		</div>
	);

	const isALink = Boolean(href);
	const isAButton = Boolean(onClick);

	if (isALink) {
		return (
			<Link variant="text" href={href ?? ""} padding={"sm"} rounded="full">
				{avatarContent}
			</Link>
		);
	}
	if (isAButton) {
		return (
			<Button variant="text" padding={"sm"} rounded="full" onClick={onClick}>
				{avatarContent}
			</Button>
		);
	}

	return avatarContent;
};

export default Avatar;
