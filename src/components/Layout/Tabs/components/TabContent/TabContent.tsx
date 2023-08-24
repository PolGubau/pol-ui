import React from "react";

interface Props {
	content: string | React.ReactNode;
	className?: string;
}
const TabContent: React.FC<Props> = ({ content, className }) => {
	return <div className={className}>{content}</div>;
};

export default TabContent;
