import { DotsStyled } from "./DotsStyled";

interface Props {
	className?: string;
	animationDuration?: number;
	colors?: string[];
}

const Dots: React.FC<Props> = ({
	className = "",
	animationDuration = 2,
	colors = ["#ff4", "#4f4", "#44f", "#f44"],
}) => {
	return (
		<DotsStyled animationDuration={animationDuration} colors={colors}>
			<div className={`loader ${className}`}></div>
		</DotsStyled>
	);
};

export default Dots;
