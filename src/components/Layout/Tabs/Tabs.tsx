"use client";
import React, { useMemo } from "react";
import { Button } from "../../Buttons";
import { Icon } from "../../Icon";

export interface TabsItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | React.ReactNode;
	className?: string;
}

interface Props {
	defaultOpenedIndex?: number;
	data: TabsItemProps[];
}

const Tabs: React.FC<Props> = ({ data, defaultOpenedIndex }) => {
	const [activeTab, setActiveTab] = React.useState(defaultOpenedIndex ?? 0);
	const selectedContent = useMemo(() => data[activeTab].content, [data, activeTab]);

	return (
		<section>
			<ul className="flex gap-2">
				{data.map((item, index) => (
					<li
						key={item.title}
						className={` px-2 py-1 rounded-md cursor-pointer hover:shadow-inner
					${index === activeTab ? "bg-dark/60 text-light" : ""}
					`}
						tabIndex={index}
						onClick={() => setActiveTab(index)}
					>
						<button className="flex items-center ">
							{item.icon && <Icon alwaysRender icon={item.icon} />}
							{item.title}
						</button>
					</li>
				))}
			</ul>

			<main className="tabs-content">{selectedContent}</main>
		</section>
	);
};

export default Tabs;
