import { applyBgColor } from "../../../../../style";
import { Color } from "../../../../../types";
import { Styles } from "./Bars.styles";

interface Props {
	className?: string;
	color?: Color;
	amount?: number;
	size?: number;
}

const Bars: React.FC<Props> = ({ className, color, amount = 3, size = 35 }) => {
	const array = Array.from(Array(amount).keys()) ?? [0, 1, 2];

	return (
		<div className="flex gap-1">
			{array.map((n, index) => (
				<Styles
					$index={index}
					key={n}
					className={`rounded-full ${applyBgColor(color)} ${className ?? ""}`}
					style={{
						height: "50px",
						width: "fit-content",
					}}
				></Styles>
			))}
		</div>
	);
};

export default Bars;
