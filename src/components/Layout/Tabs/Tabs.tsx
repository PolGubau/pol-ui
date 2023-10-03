import React, { useMemo } from "react";
import TabBar from "./components/TabBar/TabBar";
import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import { tabStyles } from "./tab.styles";
import TabContent from "./components/TabContent/TabContent";
import {
	SizesWithNone,
	SizesWithFull,
	SizesComplete,
	IconType,
	Sizes,
	Color,
} from "../../../types";

export interface TabsItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | IconType;
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
	selectionColor?: Color;
	maxWidth?: SizesWithFull;
	fluent?: boolean;
	classNameContent?: string;
	invertTextOnSelected?: boolean;
	contentMovementAmount?: number;
}

const Tabs: React.FC<Props> = ({
	data,
	defaultOpenedIndex,
	className,
	hasBorder,
	hasDivider,
	padding = Sizes.md,
	rounded = Sizes.xl,
	fluent = true,
	maxWidth = "full",
	classNameContent,
	invertTextOnSelected,
	contentMovementAmount = 10,
}) => {
	const [activeTab, setActiveTab] = React.useState(defaultOpenedIndex ?? 0);
	const selectedContent = useMemo(() => data[activeTab].content, [data, activeTab]);

	return (
		<section
			className={`${tabStyles({ hasBorder, hasDivider })} ${applyRounded(rounded)} 
			
			${applyMaxWidth(maxWidth)}
			${className}`}
		>
			<TabBar
				invertTextOnSelected={invertTextOnSelected}
				data={data}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				padding={padding}
				fluent={fluent}
			/>

			<main className={`${applyPadding(padding)}`}>
				<div className={className}>
					<TabContent
						content={selectedContent}
						className={classNameContent}
						key={activeTab}
						movementAmount={contentMovementAmount}
					/>
				</div>
			</main>
		</section>
	);
};

export default Tabs;
