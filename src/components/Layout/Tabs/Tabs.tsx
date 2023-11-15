import React, { useMemo } from "react";
import TabBar from "./components/TabBar/TabBar";
import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import { tabStyles } from "./tab.styles";
import TabContent from "./components/TabContent/TabContent";
import {
	SizesWithFull,
	SizesComplete,
	IconType,
	Sizes,
	Color,
	PaddingOneOrBothValues,
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
	padding?: PaddingOneOrBothValues;
	rounded?: SizesComplete;
	selectionColor?: Color;
	maxWidth?: SizesWithFull;
	fluent?: boolean;
	classNameContent?: string;
	invertTextOnSelected?: boolean;
	contentMovementAmount?: number;
	layoutId?: string;
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
	layoutId,
}) => {
	const [activeTab, setActiveTab] = React.useState(defaultOpenedIndex ?? 0);
	const selectedContent = useMemo(() => data[activeTab].content, [data, activeTab]);

	const tabInlineStyles = `${tabStyles({ hasBorder, hasDivider })} ${applyRounded(rounded)} 
			${applyMaxWidth(maxWidth)}
			${className}`;

	return (
		<section className={tabInlineStyles}>
			<TabBar
				layoutId={layoutId}
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
