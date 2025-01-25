import type { Meta } from "@storybook/react";

import { ScrollArea } from "./ScrollArea";

export default {
	title: "Components/ScrollArea",
	component: ScrollArea,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center  ">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => {
	return (
		<ScrollArea className="w-full flex flex-col gap-[50vh] mb-96">
			Hello
		</ScrollArea>
	);
};
