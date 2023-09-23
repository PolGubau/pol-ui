import { SizesComplete } from "../../../types";
import { Tooltip } from "../../DataDisplay";

interface Props {
	color?: string;
	rounded?: SizesComplete;
	padding?: SizesComplete;
	value: string;
	label?: string;
	tooltip?: string;
}

const TrackerItem: React.FC<Props> = ({
	color,
	rounded,
	padding,
	value,
	tooltip = value,
	label = value,
}) => {
	return <Tooltip content={tooltip}>{label}</Tooltip>;
};

export default TrackerItem;
