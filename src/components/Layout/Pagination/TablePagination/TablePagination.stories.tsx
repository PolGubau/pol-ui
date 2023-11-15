import type { Meta, StoryObj } from "@storybook/react";
import TablePagination from "./TablePagination";

const meta = {
	title: "Layout/TablePagination",
	component: TablePagination,
	tags: ["autodocs"],
} satisfies Meta<typeof TablePagination>;

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
		variant: "filled",
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
export const ShowFirstAndLastButtons: Story = {
	args: {
		page: 1,
		showFirstAndLastButtons: true,
		rowsPerPage: 10,
		totalResults: 100,
	},
};
export const ShowMiddleButtons: Story = {
	args: {
		page: 1,
		rowsPerPage: 10,
		totalResults: 100,
		showMiddleButtons: true,
	},
};
