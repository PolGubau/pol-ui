import { applyColor, applyInvertedColor, applyTextSize } from "../../../style";
import { Color, Size, Sizes } from "../../../types";
import { getIcon } from "../../../utils";
interface IconProps {
	icon: string | React.JSX.Element;
	color?: Color;
	size?: Size;
	className?: string;
	id?: string;
	alwaysRender?: boolean;
	style?: any;
	invertColor?: boolean;
}

const Icon = ({
	icon,
	color,
	size = Sizes.md,
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

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;

	const label = typeof icon === "string" ? icon : "";
	return (
		<div
			role="img"
			id={id}
			className={`${applyTextSize(size)} ${
				invertColor ? applyInvertedColor(color) : applyColor(color)
			} 			
 ${className}`}
			style={style}
		>
			{resultIcon}
			<span className="sr-only">{label} icon</span>
		</div>
	);
};
export default Icon;
