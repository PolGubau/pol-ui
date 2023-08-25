import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta = {
	title: "Layout/Pagination",
	component: Pagination,
	tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
	},
};
export const Outlined: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
		variant: "outlined",
	},
};
export const Main: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
		variant: "main",
	},
};
export const Text: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
		variant: "text",
	},
};
export const SurroundingButtons: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
		surroundingButtons: true,
	},
};
