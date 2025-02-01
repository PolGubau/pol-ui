import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Pagination, type PaginationProps } from "./Pagination";
type Story = StoryObj<typeof Pagination>;

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center text-center">
        <Story />
      </div>
    ),
  ],
};
export default meta;

const Template: StoryFn<PaginationProps> = () => {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(25);

  return (
    <div className="flex flex-col gap-4">
      <p>Page is {page}</p>
      <p>Page size is {pageSize}</p>

      <nav className="flex gap-2">
        <Button onClick={() => setPage(0)}>Page to 0</Button>
        <Button onClick={() => setPage(2)}>Page to 2</Button>
        <Button onClick={() => setPageSize(10)}>Size to 10</Button>
        <Button onClick={() => setPageSize(50)}>Size to 50</Button>
      </nav>
      <Pagination total={150} page={page} onPageChange={setPage} pageSize={pageSize} onPageSizeChange={setPageSize} />
    </div>
  );
};

export const Default: Story = Template.bind({});

export const WithStaticPageSize = () => {
  const [page, setPage] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      <p>Page is {page}</p>
      <p>Page size is always 10</p>

      <nav className="flex gap-2">
        <Button onClick={() => setPage(0)}>Page to 0</Button>
        <Button onClick={() => setPage(2)}>Page to 2</Button>
      </nav>
      <Pagination total={150} page={page} onPageChange={setPage} pageSize={10} />
    </div>
  );
};
