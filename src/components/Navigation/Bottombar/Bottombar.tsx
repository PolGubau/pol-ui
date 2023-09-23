import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import {
	IconType,
	PaddingOneOrBothValues,
	Sizes,
	SizesComplete,
	SizesWithFull,
} from "../../../types";
import BottombarButton from "./BottombarButton";

export interface BottombarItem {
	name: string;
	icon: IconType;
	link?: string;
	onClick?: () => void;
	active?: boolean;
}

interface Props {
	maxWidth?: SizesWithFull;
	rounded?: SizesComplete;
	itemRounded?: SizesComplete;
	items: Array<BottombarItem>;
	bottomMargin?: number | string;
	fillEmptyWidth?: boolean;
	padding?: PaddingOneOrBothValues;
	onlyShowActiveText?: boolean;
	flexDirection?: "row" | "column";
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
	flexDirection = "row",
}) => {
	const properBottomMargin = typeof bottomMargin === "number" ? `${bottomMargin}px` : bottomMargin;

	//

	return (
		<div
			className={`w-fit fixed z-50 ${applyMaxWidth(maxWidth)} 
			${maxWidth === "full" && "bottom-0 w-full rounded-none"}
			${fillEmptyWidth ? "w-full items-center flex gap-2" : "w-fit"}
				-translate-x-1/2 left-1/2 bg-background-inverted dark:bg-background 
				
				${applyRounded(rounded)}`}
			style={{
				bottom: properBottomMargin,
			}}
		>
			<div
				className={`flex h-full gap-4  mx-auto  
				${fillEmptyWidth ? "w-full items-center flex justify-center" : "w-fit"}
				
				  ${applyPadding(padding)}`}
			>
				{items.map((item) => (
					<BottombarButton
						item={item}
						key={item.name}
						rounded={itemRounded}
						flexDirection={flexDirection}
						fillEmptyWidth={fillEmptyWidth}
						onlyShowActiveText={onlyShowActiveText}
					/>
				))}
			</div>
		</div>
	);
};

export default Bottombar;
