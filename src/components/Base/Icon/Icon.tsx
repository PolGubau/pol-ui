import { applyColor, applyInvertedColor } from "../../../style";
import { Color, Size, Sizes } from "../../../types";
import { getIcon } from "../../../utils";
interface IconProps {
	icon: string | React.JSX.Element;
	color?: Color;
	size?: number | Size;
	className?: string;
	id?: string;
	alwaysRender?: boolean;
	style?: any;
	invertColor?: boolean;
}

const Icon = ({
	icon,
	color,
	size = 20,
	className = "",
	id,
	alwaysRender = false,
	style = {},
	invertColor = false,
}: IconProps) => {
	const getStringIcon = (icon: string): React.ReactNode => {
		const iconResult = getIcon(icon);
		if (!iconResult) {
			return alwaysRender ? icon : null;
		}
		return iconResult;
	};

	const getPxFromSize = (size: Size): number => {
		switch (size) {
			case Sizes.xs:
				return 12;
			case Sizes.sm:
				return 16;
			case Sizes.md:
				return 20;
			case Sizes.lg:
				return 24;
			case Sizes.xl:
				return 32;
			default:
				return 20;
		}
	};
	const properSize = typeof size === "number" ? `${size}px` : getPxFromSize(size);

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;

	const label = typeof icon === "string" ? icon : "";
	return (
		<div
			role="img"
			id={id}
			className={`flex justify-center items-center  ${
				invertColor ? applyInvertedColor(color) : applyColor(color)
			} ${className}`}
			style={{
				width: properSize,
				height: properSize,
				...style,
			}}
		>
			{resultIcon}
			<span className="sr-only">{label} icon</span>
		</div>
	);
};
export default Icon;
