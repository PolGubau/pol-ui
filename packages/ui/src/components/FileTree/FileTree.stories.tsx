import type { Meta } from "@storybook/react";

import { Tree, type TreeViewElement } from "./FileTree";
import { File, Folder } from "./components";

export default {
  title: "Components/FileTree",
  component: Tree,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export function FileTreeDemo() {
  return (
    <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="app">
            <File value="3">
              <p>layout.tsx</p>
            </File>
            <File value="4">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="components">
            <Folder value="6" element="ui">
              <File value="7">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8">
              <p>header.tsx</p>
            </File>
            <File value="9">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="lib">
            <File value="11">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS: TreeViewElement[] = [
  {
    id: "1",
    name: "src",
    children: [
      {
        id: "2",
        name: "app",
        children: [
          {
            id: "3",
            name: "layout.tsx",
          },
          {
            id: "4",
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        name: "components",
        children: [
          {
            id: "6",
            name: "header.tsx",
          },
          {
            id: "7",
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        name: "lib",
        isSelectable: false,

        children: [
          {
            id: "9",
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
