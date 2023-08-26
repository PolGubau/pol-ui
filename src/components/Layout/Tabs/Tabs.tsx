"use client";
import React, { useMemo } from "react";
import TabBar from "./components/TabBar/TabBar";
import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import { tabStyles } from "./tab.styles";
import TabContent from "./components/TabContent/TabContent";
import { SizesWithNone, SizesWithFull, SizesComplete } from "../../../types";

export interface TabsItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | React.ReactNode;
	className?: string;
}

interface Props {
	defaultOpenedIndex?: number;
	data: TabsItemProps[];
	hasDivider?: boolean;
	hasBorder?: boolean;
	className?: string;
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
	rounded?: SizesComplete;
	maxWidth?: SizesWithFull;
	classNameContent?: string;
}

const Tabs: React.FC<Props> = ({
	data,
	defaultOpenedIndex,
	className,
	hasBorder,
	hasDivider,
	padding = { x: "sm", y: "sm" },
	rounded = "none",
	maxWidth = "full",
	classNameContent,
}) => {
	const [activeTab, setActiveTab] = React.useState(defaultOpenedIndex ?? 0);
	const selectedContent = useMemo(() => data[activeTab].content, [data, activeTab]);

	return (
		<section
			className={`${tabStyles({ hasBorder, hasDivider })} ${applyRounded(rounded)} 
			
			${applyMaxWidth(maxWidth)}
			${className}`}
		>
			<TabBar data={data} activeTab={activeTab} setActiveTab={setActiveTab} padding={padding} />
			<main className={`${applyPadding(padding)}`}>
				<TabContent content={selectedContent} className={classNameContent} />
			</main>
		</section>
	);
};

export default Tabs;
