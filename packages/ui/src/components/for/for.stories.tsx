import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../Avatar";
import { For } from "./for";

type MockData = {
  id: number;
  company: string;
  role: string;
  summary: string;
  avatar: string;
};
type TypeFor = typeof For<MockData>;

type Story = StoryObj<TypeFor>;

const meta: Meta<TypeFor> = {
  title: "Components/For",
  component: For,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex flex-col divide-y p-4 ">
        <Story />
      </div>
    ),
  ],
};
export default meta;

const fakeData: MockData[] = [
  {
    id: 1,
    company: "Trackup",
    avatar: "https://avatars.githubusercontent.com/u/138794672?s=48&v=4",
    role: "Software developer",
    summary: "I designed the architecture and developed the back-end using Node.js and Express.",
  },
  {
    id: 2,
    company: "UAB Media",
    avatar: "https://avatars.githubusercontent.com/u/63665819?s=64&v=4",
    role: "Software developer",
    summary: "I developed the front-end of the application using React and Redux.",
  },
  {
    id: 3,
    company: "Stickies",
    avatar: "https://avatars.githubusercontent.com/u/143030937?s=64&v=4",
    role: "Data Analyst",
    summary: "In charge of data analysis and visualization, and data management.",
  },
];

export const Default: Story = {
  args: {
    items: fakeData,
    render: (item) => (
      <div className="grid grid-cols-[auto,1fr] items-center gap-4 p-2">
        <Avatar img={item.avatar} alt={item.company} />
        <div>
          <header className="flex items-center gap-2">
            <h3>{item.company}</h3>
            <em className="text-[0.8em]">{item.role}</em>
          </header>
          <small>{item.summary}</small>
        </div>
      </div>
    ),
  },
};

/**
 * The For component is a simple component that allows you to iterate over an array of items and render a component for each item.
 *
 * The For component takes the following props:
 *
 * - items: An array of items to iterate over.
 * - render: A function that takes an item and returns a component to render for that item.
 * - empty: A function that returns a component to render when the items array is empty.
 * - error: A function that takes an error, an item, and an index and returns a component to render when an error occurs while rendering an item.
 */
export const SimpleList = () => {
  return (
    <For
      items={[
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
        { id: 3, title: "Item 3" },
      ]}
      render={(item) => <div> {item.title}</div>}
    />
  );
};
export const Empty = () => {
  return (
    <For
      empty={() => <div>Empty list (This content comes from the empty prop ) </div>}
      items={[]}
      render={() => <div />}
    />
  );
};

/**
 * If an error occurs while rendering an item, the error prop will be called with the error, the item, and the index of the item.
 * The error prop should return a component that will be rendered in place of the item.
 */
export const WithError = () => {
  return (
    <For
      items={[{ id: 2, name: "Item 2" }, { id: 1 }, { id: 3, name: "Item 3" }]}
      render={(item) => {
        if (!item.name) {
          throw new Error("Name is required");
        }
        return <div> {item.name}</div>;
      }}
      error={(error, _item, index) => (
        <div>
          {error.message} (position #{index}){" "}
        </div>
      )}
    />
  );
};
