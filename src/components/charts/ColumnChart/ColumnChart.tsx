import { ProgessBar } from "../../DataDisplay";
import { Directions } from "../../../types";
import Box from "../../Base/Box/Box";

const ColumnChart = () => {
	return (
		<Box className="bg-danger">
			<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={30} />
			<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={60} />
			<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={80} />
		</Box>
	);
};

export default ColumnChart;
