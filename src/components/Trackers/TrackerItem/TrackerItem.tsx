import { applyRounded } from "../../../style";
import { Placement, Sizes, SizesComplete } from "../../../types";
import { Tooltip } from "../../DataDisplay";

interface Props {
	color?: string;
	rounded?: SizesComplete;
	value: string | number;
	label?: string;
	tooltip?: string;
	width?: string;
	height?: string;
	showLavel?: boolean;
	toolTipPlacement?: Placement;
	maxWidth?: number;
	maxHeight?: number;
}

const TrackerItem: React.FC<Props> = ({
	color = "#ff4",
	rounded = Sizes.sm,
	value,
	tooltip,
	label = value,
	width = "100%",
	height,
	showLavel = true,
	toolTipPlacement = "top",
	maxWidth = 100,
	maxHeight = 75,
}) => {
	return (
		<Tooltip
			content={tooltip}
			position={toolTipPlacement}
			style={{
				width: width,
			}}
		>
			<div
				className={`overflow-hidden ${applyRounded(rounded)} ${!height && "aspect-square"} flex `}
				style={{
					backgroundColor: color,
					borderRadius: rounded,
					width: width,
					height: height,
					maxWidth: maxWidth,
					maxHeight: maxHeight,
				}}
			>
				{showLavel && label && (
					<small
						style={{
							width: width,
							height: height,
						}}
						className="flex items-center  justify-center text-xs"
					>
						{label}
					</small>
				)}
			</div>
		</Tooltip>
	);
};

export default TrackerItem;
