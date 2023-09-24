import { Color, Tens } from "../../../../../types";
import { applyBgColor, applyOpacity } from "../../../../../style";

interface Props {
	marks: number;
	color?: Color;
	opacity?: Tens;
	vertical?: boolean;
}
const ProgressBarMarks: React.FC<Props> = ({ marks, color, opacity, vertical }) => {
	// marks is a number, represents the number of marks to show
	// if marks is 10, we want to show 10 marks, so we need 10 absolute divs

	const marksArray = Array.from({ length: marks }, (_, i) => i);

	return (
		<div className="last:hidden">
			{/* hide the last mark, we don't want to show it at thr 100% */}
			{marksArray.map((mark) => {
				const styles = {
					// if vertical, we want to show the marks vertically
					// if not, we want to show them horizontally

					verticalStyles: {
						height: `${(100 / marks) * (mark + 1)}%`,
					},
					horizontalStyles: {
						left: `${(100 / marks) * (mark + 1)}%`,
					},
				};

				return (
					<div
						key={mark}
						className={` ${
							vertical ? "h-px w-full " : "w-px h-full "
						}   last:hidden  absolute top-0 z-[1]  
					${applyBgColor(color)}
					${applyOpacity(opacity)}`}
						style={vertical ? styles.verticalStyles : styles.horizontalStyles}
					></div>
				);
			})}
		</div>
	);
};
export default ProgressBarMarks;
