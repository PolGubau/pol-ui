import { BasicProps, ColorTypes, Rounded, Sizes } from "../../../common";
import { badgeStyles } from "./Badge.styles";

interface Props extends BasicProps {
	content: string | number;
	variant?: "dot" | "text";
	color?: ColorTypes;
	size?: Sizes;
	shape?: Rounded;
	max?: number;
	horizontal?: "left" | "right";
	vertical?: "top" | "bottom";
	onClick?: () => void | Promise<void>;
}
const Badge = ({
	content,
	color = "accent",
	size = "md",
	shape = "circular",
	max = 99,
	className,
	style,
	id,
	children,
	horizontal = "right",
	vertical = "top",
	onClick = undefined,
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
		<div className="relative w-fit" style={style} id={id}>
			<span
				className={`${badgeStyles({
					shape,
					size,
					color,
					horizontal,
					vertical,
					clickable: Boolean(onClick),
				})} ${className}`}
				onClick={onClick}
				aria-label="badge"
			>
				{isMoreThanMax(content, max) ? passingMaxText(content, max) : content}
			</span>

			{children}
		</div>
	);
};

export default Badge;
