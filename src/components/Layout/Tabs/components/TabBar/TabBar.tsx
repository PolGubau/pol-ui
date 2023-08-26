import React from "react";
import { TabsItemProps } from "../../Tabs";
import { applyPadding } from "../../../../../style";
import { Button } from "../../../../Buttons";
import { SizesWithNone, SizesWithFull } from "../../../../../types";
interface Props {
	data: TabsItemProps[];
	activeTab: number;
	setActiveTab: (index: number) => void;
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
	maxWidth?: SizesWithFull;
}

const TabBar: React.FC<Props> = ({
	data,
	activeTab,
	setActiveTab,
	padding = {
		x: "sm",
		y: "sm",
	},
}) => {
	return (
		<>
			<ul
				className={`flex gap-2 max-w-full overflow-x-auto md:snap-x  whitespace-nowrap overflow-auto scrollbar-hide
			${applyPadding(padding)}`}
			>
				{data.map((item, index) => (
					<li key={item.title} aria-label="Tab">
						<Button
							variant={index === activeTab ? "filled" : "text"}
							color={index === activeTab ? "accent" : "primary"}
							icon={item.icon}
							onClick={() => setActiveTab(index)}
						>
							{item.title}
						</Button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TabBar;
