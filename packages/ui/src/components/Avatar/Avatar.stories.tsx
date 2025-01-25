import type { Meta, StoryFn } from "@storybook/react";
import type React from "react";

import type { MainSizes, RoundedSizes } from "../../types";
import { MainSizesEnum, RoundedSizesEnum } from "../../types/enums";
import { Avatar, type AvatarProps } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarGroupCounter } from "./AvatarGroupCounter";
import { AvatarStatusEnum } from "./AvatarTypes";

export default {
	title: "Components/Avatar",
	component: Avatar,

	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col justify-center items-center">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.storyName = "Default";
DefaultAvatar.args = {
	title: "Pol Gubau",
	alt: "Your avatar",
	img: "https://avatars.githubusercontent.com/u/63197171?v=4",
};
export const WrongImage = Template.bind({});
WrongImage.args = {
	alt: "Your avatar",
	img: "https://avatars.githubusercontent.com/u/63197171?v=4",
};
export const BorderedAvatar = Template.bind({});
BorderedAvatar.args = {
	alt: "Your avatar",
	bordered: true,
	img: "https://avatars.githubusercontent.com/u/63197171?v=4",
};

export const CustomImage: StoryFn<AvatarProps> = (props) => (
	<>
		<Avatar
			{...props}
			img={(props: React.ImgHTMLAttributes<HTMLImageElement>) => (
				<picture>
					<source
						media="(min-width: 900px)"
						srcSet="https://avatars.githubusercontent.com/u/63197171?v=4"
					/>
					<source
						media="(min-width: 480px)"
						srcSet="https://avatars.githubusercontent.com/u/63197171?v=4"
					/>
					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<img
						alt="profile"
						src="https://avatars.githubusercontent.com/u/63197171?v=4"
						{...props}
					/>
				</picture>
			)}
		/>
		<small className="block text-center text-gray-500">
			Hint: Resize the viewport to change the image source
		</small>
	</>
);
CustomImage.storyName = "Custom Image Element";

export const AllSizes = (): React.ReactNode => (
	<div className="flex flex-wrap gap-6">
		{Object.keys(MainSizesEnum).map((size) => (
			<div key={size} className="flex flex-col items-center justify-center">
				<Avatar
					alt="Your avatar"
					img="https://avatars.githubusercontent.com/u/63197171?v=4"
					size={size as MainSizes}
					className="mb-2"
				/>
				<span className="text-gray-500">{size}</span>
			</div>
		))}
	</div>
);

export const AllStatus = (): React.ReactNode => (
	<div className="flex flex-wrap gap-6">
		{Object.keys(AvatarStatusEnum).map((status) => (
			<div key={status} className="flex flex-col items-center justify-center">
				<Avatar
					alt="Your avatar"
					img="https://avatars.githubusercontent.com/u/63197171?v=4"
					status={status}
					className="mb-2"
				/>
				<span className="text-gray-500">{status}</span>
			</div>
		))}
	</div>
);
export const AllRounded = (): React.ReactNode => (
	<div className="flex flex-wrap gap-6">
		{Object.keys(RoundedSizesEnum).map((v) => (
			<div key={v} className="flex flex-col items-center justify-center">
				<Avatar
					alt="Your avatar"
					img="https://avatars.githubusercontent.com/u/63197171?v=4"
					rounded={v as RoundedSizes}
					className="mb-2"
				/>
				<span className="text-gray-500">{v}</span>
			</div>
		))}
	</div>
);
export const Grouped = () => (
	<AvatarGroup>
		<Avatar
			title="TrackUP"
			img="https://avatars.githubusercontent.com/u/138794672?s=50&v=4"
			stacked={true}
		/>
		<Avatar
			title="Albert Arrebola"
			img="https://avatars.githubusercontent.com/u/104431726?v=4"
			stacked={true}
		/>
		<Avatar
			title="Anna Camps"
			img="https://avatars.githubusercontent.com/u/94074414?s=80&v=4"
			stacked={true}
		/>
		<Avatar
			img="https://avatars.githubusercontent.com/u/78301921?s=80&v=4"
			stacked={true}
			title="Gerard Martínez"
		/>
		<AvatarGroupCounter total={99} href="#" />
	</AvatarGroup>
);
