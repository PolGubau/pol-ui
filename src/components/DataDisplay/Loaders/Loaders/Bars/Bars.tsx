import { applyBgColor } from "../../../../../style";
import { ColorTypes, Sizes } from "../../../../../types";
import { Styles, dotsSize } from "./Bars.styles";

interface Props {
	className?: string;
	color?: ColorTypes;
	amount?: number;
	size?: Sizes;
}

const Bars: React.FC<Props> = ({ className, color, amount = 3, size }) => {
	const array = Array.from(Array(amount).keys()) ?? [0, 1, 2];

	return (
		<div className="flex gap-1">
			{array.map((n, index) => (
				<Styles
					$index={index}
					key={n}
					className={` ${dotsSize({ size })} rounded-full ${applyBgColor(color)} ${
						className ?? ""
					}`}
				></Styles>
			))}
		</div>
	);
};

export default Bars;
