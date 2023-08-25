import { ColorTypes, Sizes } from "../../../../../types";
import { bgVariant } from "../../../../../style";
import { Styles, dotsSize } from "./Bars.styles";

interface Props {
	className?: string;
	variant?: ColorTypes;
	amount?: number;
	size?: Sizes;
}

const Bars: React.FC<Props> = ({ className, variant, amount = 3, size }) => {
	const array = Array.from(Array(amount).keys()) ?? [0, 1, 2];

	return (
		<div className="flex gap-1">
			{array.map((n, index) => (
				<Styles
					$index={index}
					key={n}
					className={` ${dotsSize({ size })} rounded-full ${bgVariant({ variant })} ${
						className ?? ""
					}`}
				></Styles>
			))}
		</div>
	);
};

export default Bars;
