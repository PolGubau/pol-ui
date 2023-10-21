import { applyColor, applyInvertedColor } from "../../../style";
import { Color } from "../../../types";
import { getIcon } from "../../../utils";
interface IconProps {
	icon: string | React.JSX.Element;
	color?: Color;
	size?: number;
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

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;

	const label = typeof icon === "string" ? icon : "";
	return (
		<div
			role="img"
			id={id}
			className={`  ${invertColor ? applyInvertedColor(color) : applyColor(color)} 			
 ${className}`}
			style={{
				width: size,
				height: size,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				...style,
			}}
		>
			{resultIcon}
			<span className="sr-only">{label} icon</span>
		</div>
	);
};
export default Icon;
