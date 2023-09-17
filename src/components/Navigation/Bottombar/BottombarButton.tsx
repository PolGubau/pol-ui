import React from "react";
import { Button } from "../../Buttons";
import { BottombarItem } from "./Bottombar";
import { Tooltip } from "../../DataDisplay";
import { Icon } from "../../Base";
import { Sizes, SizesComplete } from "../../../types";

interface Props {
	item: BottombarItem;
	rounded?: SizesComplete;
}

const BottombarButton: React.FC<Props> = ({ item, rounded = "full" }) => {
	return (
		<>
			<Tooltip content={item.name}>
				<Button
					key={item.name}
					href={item.link}
					onClick={item.onClick}
					fullWidth
					rounded={rounded}
					centered
					variant={item.active ? "filled" : "text"}
					color={item.active ? "accent" : "primary"}
					className={`items-center justify-center rounded-full hover:bg-inverted:hover:bg-background-inverted group `}
				>
					<div className="flex flex-col gap-1 items-center">
						{item.icon && <Icon icon={item.icon} size={Sizes.lg} />} <small>{item.name}</small>
					</div>
				</Button>
			</Tooltip>
			<span className="sr-only">{item.name}</span>
		</>
	);
};

export default BottombarButton;
