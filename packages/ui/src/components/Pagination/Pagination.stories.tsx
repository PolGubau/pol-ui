import type { Meta, StoryFn } from "@storybook/react";
import { useEffect, useState } from "react";

import { Pagination, type PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story): React.ReactNode => (
      <div className="flex items-center justify-center text-center">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<PaginationProps> = ({ currentPage = 1, totalPages = 100, ...rest }) => {
  const [page, setPage] = useState(currentPage);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return <Pagination {...rest} currentPage={page} onPageChange={onPageChange} totalPages={totalPages} />;
};

export const Default = Template.bind({});

export const PaginationWithIcons = Template.bind({});
PaginationWithIcons.storyName = "Pagination with icons";
PaginationWithIcons.args = {
  showIcons: true,
};

export const Nav = Template.bind({});
Nav.args = {
  hasRange: false,
};
export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

export const NavWithIcons = Template.bind({});
NavWithIcons.storyName = "Nav with icons";
NavWithIcons.args = {
  showIcons: true,
};

export const Table = Template.bind({});
Table.args = {
  hasLabels: true,
};
export const PageSize = Template.bind({});
PageSize.args = {
  pageSize: 15,
  hasLabels: true,
};
export const Labels = Template.bind({});
Labels.args = {
  hasLabels: true,
  labels: {
    entries: "dades",
    of: "de",
    showing: "Mostrant",
    to: "de",
    next: "Següent",
    previous: "Anterior",
  },
};

export const TableWithIcons = Template.bind({});
TableWithIcons.storyName = "Table with icons";
TableWithIcons.args = {
  hasLabels: true,
  showIcons: true,
};
