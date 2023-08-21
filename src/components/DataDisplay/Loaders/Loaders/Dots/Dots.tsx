import { ColorTypes, Sizes } from "../../../../../common";
import { bgVariant } from "../../../../../style";
import { Styles, dotsSize } from "./Dots.styles";

interface Props {
	className?: string;
	variant?: ColorTypes;
	amount?: number;
	size?: Sizes;
}

const Dots: React.FC<Props> = ({ className, variant, amount = 3, size = "md" }) => {
	const array = Array.from(Array(amount).keys()) ?? [0, 1, 2];

	return (
		<div className="flex gap-1">
			{array.map((n, index) => (
				<Styles
					$index={index}
					key={n}
					className={` rounded-full ${dotsSize({
						size,
					})}  ${bgVariant({ variant })} ${className ?? ""}`}
				></Styles>
			))}
		</div>
	);
};

export default Dots;
