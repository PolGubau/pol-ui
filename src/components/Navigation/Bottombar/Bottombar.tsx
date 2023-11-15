import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import {
	BaseProps,
	Colors,
	Direction,
	Directions,
	IconType,
	JustifyContents,
	PaddingOneOrBothValues,
	Sizes,
	SizesComplete,
	SizesWithFull,
} from "../../../types";
import { NavigationBar } from "../../Layout";
export interface BottombarItem {
	name: string;
	icon?: string | IconType;
	link?: string;
	onClick?: () => void;
}

interface Props extends BaseProps {
	maxWidth?: SizesWithFull;
	rounded?: SizesComplete;
	itemRounded?: SizesComplete;
	items: Array<BottombarItem>;
	bottomMargin?: number | string;
	fillEmptyWidth?: boolean;
	padding?: PaddingOneOrBothValues;
	onlyShowActiveText?: boolean;
	flexDirection?: "row" | "column";
	defaultSelected?: number;
	direction?: Direction;
	invertTextOnSelected?: boolean;
	onChange?: (index: number) => void;
}
const Bottombar: React.FC<Props> = ({
	items,
	maxWidth = Sizes.lg,
	rounded = "full",
	itemRounded = rounded,
	bottomMargin = 20,
	fillEmptyWidth = false,
	padding = Sizes.sm,
	onlyShowActiveText = true,
	direction = Directions.x,
	defaultSelected = 0,
	invertTextOnSelected = false,
	id,
	className = "",
	style = {},
	onChange,
}) => {
	const properBottomMargin = typeof bottomMargin === "number" ? `${bottomMargin}px` : bottomMargin;

	//

	return (
		<div
			id={id}
			className={`w-fit fixed z-50 ${applyMaxWidth(maxWidth)} 
			${maxWidth === "full" && "bottom-0 w-full rounded-none"}
			${fillEmptyWidth ? "w-full items-between flex gap-2" : "w-fit"}
				-translate-x-1/2 left-1/2 bg-background-inverted dark:bg-background 
				
				${applyRounded(rounded)} ${className}`}
			style={{
				...style,
				bottom: properBottomMargin,
			}}
		>
			<div
				className={`flex h-full gap-4  mx-auto  
				${fillEmptyWidth ? "w-full items-between flex justify-center" : "w-fit"}
				
				  ${applyPadding(padding)}`}
			>
				<NavigationBar
					onChange={onChange}
					onlyShowSelectedText={onlyShowActiveText}
					direction={direction}
					data={items}
					justify={fillEmptyWidth ? JustifyContents.between : JustifyContents.center}
					defaultSelected={defaultSelected}
					rounded={rounded}
					itemRounded={itemRounded}
					colorText={Colors.background}
					invertTextOnSelected={invertTextOnSelected}
				/>
			</div>
		</div>
	);
};

export default Bottombar;
