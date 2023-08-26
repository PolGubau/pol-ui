import { ColorTypes, Tens } from "../../../../../types";
import { applyBgColor, applyOpacity } from "../../../../../style";

interface Props {
	marks: number;
	color?: ColorTypes;
	opacity?: Tens;
}
const ProgressBarMarks: React.FC<Props> = ({ marks, color, opacity }) => {
	// marks is a number, represents the number of marks to show
	// if marks is 10, we want to show 10 marks, so we need 10 absolute divs

	const marksArray = Array.from({ length: marks }, (_, i) => i);

	return (
		<div className="last:hidden">
			{/* hide the last mark, we don't want to show it at thr 100% */}
			{marksArray.map((mark) => (
				<div
					key={mark}
					className={`w-px h-full last:hidden  absolute top-0 z-[1]  
					${applyBgColor(color)}
					${applyOpacity(opacity)}`}
					style={{
						left: `${(100 / marks) * (mark + 1)}%`,
					}}
				></div>
			))}
		</div>
	);
};
export default ProgressBarMarks;
