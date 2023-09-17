import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import {
	IconType,
	PaddingOneOrBothValues,
	Sides,
	Sizes,
	SizesComplete,
	SizesWithFull,
	SizesWithNone,
} from "../../../types";
import BottombarButton from "./BottombarButton";

export interface BottombarItem {
	name: string;
	icon?: IconType;
	link?: string;
	onClick?: () => void;
}

interface Props {
	maxWidth?: SizesWithFull;
	rounded?: SizesComplete;
	items: Array<BottombarItem>;
	bottomMargin?: number | string;
	fillEmptyWidth?: boolean;
	itemsRounded?: SizesComplete;
	padding?: PaddingOneOrBothValues;
}
const Bottombar: React.FC<Props> = ({
	items,
	maxWidth = Sizes.lg,
	rounded = "full",
	bottomMargin = "10px",
	fillEmptyWidth = true,
	itemsRounded = "full",
	padding = Sizes.sm,
}) => {
	const properBottomMargin = typeof bottomMargin === "number" ? `${bottomMargin}px` : bottomMargin;
	return (
		<div
			className={`fixed z-50 ${applyMaxWidth(maxWidth)} 
			${fillEmptyWidth ? "w-full" : "w-fit"}
			
			-translate-x-1/2 left-1/2 backdrop-blur-sm bg-background-inverted/10 dark:bg-background/70 ${applyRounded(
				rounded
			)}`}
			style={{
				bottom: properBottomMargin,
			}}
		>
			<div
				className={`flex h-full gap-2 mx-auto justify-center ${applyPadding(
					padding
				)} justify-items-center`}
			>
				{items.map((item) => (
					<BottombarButton item={item} key={item.name} rounded={itemsRounded} />
				))}
			</div>
		</div>
	);
};

export default Bottombar;
