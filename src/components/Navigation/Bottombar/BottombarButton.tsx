import React from "react";
import { Button } from "../../Buttons";
import { BottombarItem } from "./Bottombar";
import { Sizes, SizesComplete } from "../../../types";
import { Text } from "../../Text";
import { Icon } from "../../Base";

interface Props {
	item: BottombarItem;
	rounded?: SizesComplete;
	flexDirection?: "row" | "column";

	fillEmptyWidth?: boolean;
	onlyShowActiveText?: boolean;
}

const BottombarButton: React.FC<Props> = ({
	item,
	rounded = "full",
	fillEmptyWidth = false,
	flexDirection,
	onlyShowActiveText = false,
}) => {
	const hasLabel = (onlyShowActiveText && item.active) || !onlyShowActiveText;

	return (
		<div
			className={`  
		${fillEmptyWidth ? "w-full items-center flex" : "w-fit"}
		`}
		>
			<Button
				loadOnClick
				key={item.name}
				href={item.link}
				onClick={item.onClick}
				rounded={rounded}
				justify="center"
				centered
				fullWidth
				size={Sizes.xl}
				variant={item.active ? "filled" : "text"}
				color={item.active ? "accent" : "background"}
				padding={Sizes.md}
			>
				<div
					className={`flex items-center 
					${flexDirection === "row" ? "flex-row gap-2" : "flex-col gap-1"}
					${!hasLabel && "justify-center"}
					 
					`}
				>
					<Icon icon={item.icon} />

					{hasLabel && <Text value={item.name} />}
				</div>
			</Button>

			<span className="sr-only">{item.name}</span>
		</div>
	);
};

export default BottombarButton;
