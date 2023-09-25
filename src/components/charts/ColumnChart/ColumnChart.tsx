import { ProgessBar } from "../../DataDisplay";
import { Colors, Directions, Sizes, SizesComplete, Color, Tens } from "../../../types";
import Box from "../../Base/Box/Box";
import { Text } from "../../Text";
import { applyBgColor, applyBgOpacity, applyRounded } from "../../../style";

interface Props {
	title?: string;
	rounded?: SizesComplete;
	backgroundColor?: string;
	backgroundOpacity?: Tens;
}

const ColumnChart: React.FC<Props> = ({
	title,
	rounded = Sizes.lg,
	backgroundColor = Colors.secondary,
	backgroundOpacity = 10,
}) => {
	// backgroundColor could be a rgb.hex... custom or a Colors enum variable as primary or accent, if backgroundColor is not provided, the default value is Colors.secondary, if it's provided we need to know if it's a part of Colors enum or not, to apply it via classname or style

	const defaultBg = Colors.secondary;

	const isBgPropPartOfColorsEnum = Object.values(Colors).includes(backgroundColor as Colors);
	console.log(isBgPropPartOfColorsEnum);

	const customColor = backgroundColor && !isBgPropPartOfColorsEnum;

	return (
		<Box
			className={`gap-2 p-3 bg-secondary/10 w-fit h-[100px]flex flex-col ${
				applyBgOpacity(backgroundOpacity) ?? ""
			} ${applyRounded(rounded)}  ${
				isBgPropPartOfColorsEnum
					? applyBgColor(backgroundColor as Color)
					: !backgroundColor
					? applyBgColor(defaultBg)
					: ``
			} `}
			style={
				customColor
					? {
							backgroundColor: backgroundColor,
					  }
					: {}
			}
			ariaLabel="Column Chart"
		>
			<div>{title && <Text size="sm" className="text-primary" value={title} />}</div>
			<div className="flex gap-2">
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={30} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={60} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={80} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={60} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={80} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={60} />
				<ProgessBar direction={Directions.y} pointer="onHover" size="sm" value={80} />
			</div>
		</Box>
	);
};

export default ColumnChart;
