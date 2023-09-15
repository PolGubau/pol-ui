import { Transition } from "@headlessui/react";
import { Icon, IconType } from "../../Base/Icon";
import { badgeStyles } from "./Badge.styles";
import { Fragment } from "react";
import { ColorType, Size, BaseProps, SizesComplete, Shadow, Side } from "../../../types";
import { applyBgColor, applyRounded, applyShadow } from "../../../style";

interface Props extends BaseProps {
	content: string | number;
	variant?: "dot" | "text";
	color?: ColorType;
	shadow?: Shadow;
	size?: Size;
	rounded?: SizesComplete;
	max?: number;
	horizontal?: Side;
	vertical?: "top" | "bottom";
	onClick?: () => void | Promise<void>;
	isVisible?: boolean;
	ariaLabel?: string;
	ariaDescribedby?: string;
	icon?: IconType;
	children?: React.ReactNode;
}
const Badge = ({
	content,
	color = "accent",
	size = "md",
	rounded = "full",
	max = 5,
	className = "",
	style,
	shadow = "none",
	id,
	children = null,
	horizontal = "right",
	vertical = "top",
	onClick = undefined,
	isVisible = true,
	ariaLabel = "badge",
	ariaDescribedby = "Badge Popup to show short notifications",
	icon = null,
}: Props) => {
	const isMoreThanMax = (content: number | string, max: number) => {
		if (typeof content === "number") return content > max;
		if (typeof content === "string") return content.length > max;
		return false;
	};

	const passingMaxText = (content: number | string, max: number) => {
		if (typeof content === "number") return `${max}+`;
		if (typeof content === "string") return `${content.slice(0, max)}...`;
		return false;
	};

	return (
		<div className="relative w-[60px] h-[60px] aspect-square" style={style} id={id}>
			<Transition
				as={Fragment}
				show={isVisible}
				enter="transition-all duration-150"
				enterFrom="scale-0 opacity-0"
				enterTo="scale-1 opacity-100"
				leave="transition-all duration-150"
				leaveFrom="opacity-100 scale-1"
				leaveTo="opacity-0 scale-0"
			>
				<span
					className={`${badgeStyles({
						size,
						horizontal,
						vertical,
						clickable: Boolean(onClick),
						className,
					})} 
					${applyRounded(rounded)}
					${applyBgColor(color)}
					${applyShadow(shadow)}
					 `}
					onClick={onClick}
					aria-label={ariaLabel}
					aria-describedby={ariaDescribedby}
				>
					{icon && <Icon icon={icon} size={size} />}
					{isMoreThanMax(content, max) ? passingMaxText(content, max) : content}
				</span>
			</Transition>

			{children}
		</div>
	);
};

export default Badge;
