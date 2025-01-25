import type { Meta } from "@storybook/react";

import Video from "./Video";

export default {
	title: "Components/Video",
	component: Video,
	decorators: [
		(Story) => (
			<div className=" ">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;
export const Default = () => {
	const height = 450;
	return (
		<Video
			src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
			height={height}
			width={height * 0.7}
		/>
	);
};
