import type { Meta, StoryObj } from "@storybook/react";
import Slideshow from "./Slideshow";
import { AspectRatio } from "../../../types";
import { Image } from "../Image";
import { Card } from "../../Layout";
import { Text } from "../../Text";
const meta = {
	title: "Media/Slideshow",
	component: Slideshow,
	tags: ["autodocs"],
} satisfies Meta<typeof Slideshow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The slideshow is a component that allows you to display a series of items in a horizontal scrollable container. It is responsive and supports touch gestures.",
			},
		},
	},
	args: {
		items: [
			<figure>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1678780358430-fb4ec1d01167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
					alt="a black building with a grass roof and a white steeple"
				/>
			</figure>,

			<figure>
				<Image
					rounded="md"
					aspectRatio={AspectRatio.OneOne}
					src="https://images.unsplash.com/photo-1669802004186-31c3cf5eb4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
					alt="a path in the middle of a forest surrounded by tall trees"
				/>
			</figure>,
			<figure>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1669216110293-556c7a667f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
					alt="a pineapple, an egg and an orange on a table"
				/>
			</figure>,
			<figure>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1670594729251-236f61911482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
					alt="a bike is parked in front of a building"
				/>
			</figure>,
		],
	},
};

export const WithoutPagination: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The slideshow is a component that allows you to display a series of items in a horizontal scrollable container. It is responsive and supports touch gestures.",
			},
		},
	},
	args: {
		...Default.args,
		hasPagination: false,
	},
};
export const Recipe: Story = {
	args: {
		...Default.args,
		items: [
			<Card>
				<Text size={3} value="Recipe X " />
				<Text
					size={2}
					value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
				/>
			</Card>,
			<Card>
				<Text size={3} value="Ingredients" />
				<Text
					size={2}
					value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
				/>
			</Card>,
			<Card>
				<Text size={3} value="Instructions" />
				<Text
					size={2}
					value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
				/>
			</Card>,
		],
	},
};
