import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./Carousel";
import { Image } from "../Image";
import { AspectRatio } from "../../../types";

const meta = {
	title: "Media/Carousel",
	component: Carousel,
	tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The carousel is a component that allows you to display a series of items in a horizontal scrollable container. It is responsive and supports touch gestures.",
			},
		},
	},
	args: {
		gap: 10,
		children: [
			<figure key={0}>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1678780358430-fb4ec1d01167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
					alt="a black building with a grass roof and a white steeple"
				/>
			</figure>,
			<figure key={1}>
				<Image
					rounded="md"
					aspectRatio={AspectRatio.OneOne}
					src="https://images.unsplash.com/photo-1669802004186-31c3cf5eb4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
					alt="a path in the middle of a forest surrounded by tall trees"
				/>
			</figure>,
			<figure key={2}>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1669216110293-556c7a667f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
					alt="a pineapple, an egg and an orange on a table"
				/>
			</figure>,
			<figure key={3}>
				<Image
					aspectRatio={AspectRatio.OneOne}
					rounded="md"
					src="https://images.unsplash.com/photo-1670594729251-236f61911482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
					alt="a bike is parked in front of a building"
				/>
			</figure>,
		],
	},
	render: (args) => <Carousel {...args}></Carousel>,
};

export const WithoutGap: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"To add gap between slides, you must specify a `--slider-gap` custom property via CSS. You can specify it in a wrapping div (see 'show code' below for an example), or in any other parent element in your CSS. [Read more about CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).",
			},
		},
	},
	args: {
		...Default.args,
		gap: 0,
	},
	render: (args) => <Carousel {...args} gap={0}></Carousel>,
};

export const WithCustomButtonContent: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"By default the buttons display an arrow SVG. With the `nextButtonContent` and `prevButtonContent` props you can pass any string, SVG or HTML to be placed inside the previous and next button. Keep in mind that this will be inside the `button` tag, so you should not pass another button. Passing `<button>Do not do this</button>` would be invalid.",
			},
		},
	},
	args: {
		prevButtonContent: <span style={{ fontSize: "2rem" }}>👈</span>,
		nextButtonContent: <span style={{ fontSize: "2rem" }}>👉</span>,
		...Default.args,
	},
};

export const WithCustomAriaLabels: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The buttons by default have a 'Previous' and 'Next' aria-label for accessibility. With the `nextAriaLabel` and `prevAriaLabel` props you can pass a custom one if for example your website is in another language. You can also pass an empty string if you already passed a buttonContent with accessible text.",
			},
		},
	},
	args: {
		prevAriaLabel: "Anterior",
		nextAriaLabel: "Siguiente",
		...Default.args,
	},
};
