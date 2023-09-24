import { Color, Size } from "../../../../../types";
import { applyBgColor } from "../../../../../style";
import { Styles, dotsSize } from "./Dots.styles";

interface Props {
	className?: string;
	color?: Color;
	amount?: number;
	size?: Size;
}

const Dots: React.FC<Props> = ({ className, color, amount = 3, size = "md" }) => {
	const array = Array.from(Array(amount).keys()) ?? [0, 1, 2];

	return (
		<div className="flex gap-1">
			{array.map((n, index) => (
				<Styles
					$index={index}
					key={n}
					className={` rounded-full ${dotsSize({
						size,
					})}  ${applyBgColor(color)} ${className ?? ""}`}
				></Styles>
			))}
		</div>
	);
};

export default Dots;
