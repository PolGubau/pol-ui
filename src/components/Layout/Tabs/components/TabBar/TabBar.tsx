import React from "react";
import { TabsItemProps } from "../../Tabs";
import { applyPadding } from "../../../../../style";
import { Button } from "../../../../Buttons";
import { SizesWithFull, PaddingOneOrBothValues } from "../../../../../types";
import NavigationBar from "../../../NavigationBar/NavigationBar";
interface Props {
	data: TabsItemProps[];
	activeTab: number;
	setActiveTab: (index: number) => void;
	padding?: PaddingOneOrBothValues;
	maxWidth?: SizesWithFull;
	fluent?: boolean;
	invertTextOnSelected?: boolean;
}

const TabBar: React.FC<Props> = ({
	data,
	activeTab,
	invertTextOnSelected = false,
	setActiveTab,
	fluent = false,
	padding = {
		x: "sm",
		y: "sm",
	},
}) => {
	return (
		<>
			<ul
				className={`flex gap-2 max-w-full overflow-x-auto overflow-y-hidden md:snap-x  whitespace-nowrap overflow-auto scrollbar-hide
			${applyPadding(padding)}`}
			>
				{fluent ? (
					<NavigationBar
						invertTextOnSelected={invertTextOnSelected}
						data={data.map((item) => item.title)}
						defaultSelected={activeTab}
						onChange={setActiveTab}
					/>
				) : (
					data.map((item, index) => (
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
					))
				)}
			</ul>
		</>
	);
};

export default TabBar;
