import { ProgessBar } from "../../DataDisplay";
import {
	Color,
	Colors,
	Directions,
	PointerTrigger,
	PointerTriggers,
	Size,
	Sizes,
	SizesComplete,
	Ten,
} from "../../../types";
import Box from "../../Base/Box/Box";
import { Text } from "../../Text";
import { applyBgColor, applyBgOpacity, applyRounded } from "../../../style";

interface DataValue {
	date: string;
	value: number;
}

interface Props {
	title?: string;
	rounded?: SizesComplete;
	backgroundColor?: string;
	backgroundOpacity?: Ten;
	invertText?: boolean;
	textColor?: Colors;
	data?: DataValue[];
	barSize?: Size;
	pointerTrigger?: PointerTrigger;
	hoverPointerEnterDelay?: number;
	hoverPointerLeaveDelay?: number;
	pointerWithArrow?: boolean;
	barInnerColor?: Color;
	barBackgroundColor?: Color;
	barBackgroundOpacity?: Ten;
}

const ColumnChart: React.FC<Props> = ({
	title,
	rounded = Sizes.lg,
	backgroundColor = Colors.secondary,
	backgroundOpacity = 10,
	invertText = false,
	textColor = Colors.contrast,
	data = [],
	barSize = Sizes.sm,
	pointerTrigger = PointerTriggers.onHover,
	hoverPointerEnterDelay = 0,
	hoverPointerLeaveDelay = 0,
	pointerWithArrow = true,
	barInnerColor = Colors.accent,
	barBackgroundColor = Colors.primary,
	barBackgroundOpacity = 10,
}) => {
	// backgroundColor could be a rgb.hex... custom or a Colors enum variable as primary or accent, if backgroundColor is not provided, the default value is Colors.secondary, if it's provided we need to know if it's a part of Colors enum or not, to apply it via classname or style

	const isBgPropPartOfColorsEnum = Object.values(Colors).includes(backgroundColor as Colors);

	const customColor = backgroundColor && !isBgPropPartOfColorsEnum;

	return (
		<Box
			className={`gap-2 p-3  w-fit flex flex-col  ${applyRounded(rounded)}  
			${!customColor && applyBgColor(backgroundColor as Colors)}
			${!customColor && applyBgOpacity(backgroundOpacity)}
			 `}
			style={
				customColor
					? {
							backgroundColor: backgroundColor,
					  }
					: {}
			}
			ariaLabel="Column Chart"
		>
			{title && <Text invertColor={invertText} color={textColor} size="sm" value={title} />}
			<div className="flex gap-2">
				{data.map((item) => (
					<ProgessBar
						key={item.date}
						direction={Directions.y}
						pointer={pointerTrigger}
						size={barSize}
						rounded={rounded}
						value={item.value}
						hoverPointerEnterDelay={hoverPointerEnterDelay}
						hoverPointerLeaveDelay={hoverPointerLeaveDelay}
						pointerWithArrow={pointerWithArrow}
						innerColor={barInnerColor}
						backgroundColor={barBackgroundColor}
						backgroundOpacity={barBackgroundOpacity}
					/>
				))}
			</div>
		</Box>
	);
};

export default ColumnChart;
