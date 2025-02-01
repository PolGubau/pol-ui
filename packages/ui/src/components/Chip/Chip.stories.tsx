import type { Meta } from "@storybook/react";
import { TbDots, TbTrash } from "react-icons/tb";
import type { Colors } from "../../types";
import { ColorsEnum } from "../../types";
import { Divider } from "../Divider";
import { Dropdown } from "../Dropdown/Dropdown";
import { DropdownItem } from "../Dropdown/components/items";
import { toast } from "../Toaster/Toaster";
import { Chip } from "./chip-ui";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
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
};
export default meta;

export const Default = () => {
  return <Chip>Chip</Chip>;
};
export const OnClick = () => {
  return <Chip onClick={() => toast("Clicked")}>Chip</Chip>;
};

export const Disabled = () => {
  return <Chip disabled={true}>disabled</Chip>;
};

export const OnDelete = () => {
  return (
    <Chip
      onDelete={() => {
        toast("Delete");
      }}
    >
      Chip
    </Chip>
  );
};

export const MultipleActions = () => {
  return (
    <Chip
      actions={[
        {
          label: "More actions",
          onClick: () => {
            toast("More actions");
          },
          icon: <TbDots />,
        },
        {
          label: "Delete",
          onClick: () => {
            toast("Delete");
          },
          icon: <TbTrash />,
        },
      ]}
    >
      Custom Icon
    </Chip>
  );
};

export const DropdownExample = () => {
  return (
    <Chip
      actions={[
        {
          label: "More actions",
          element: (
            <Dropdown
              label="Example"
              trigger={
                <div className="flex items-center justify-center pr-1">
                  <TbDots color="#000" />
                </div>
              }
            >
              <DropdownItem
                label="Undo"
                onClick={() => {
                  alert("Undo");
                }}
                shortcut="⌘Z"
              />
              <DropdownItem
                label="Redo"
                shortcut="⌘Y"
                onClick={() => {
                  alert("Redo");
                }}
              />
              <Divider />
              <DropdownItem
                label="More actions"
                onClick={() => {
                  alert("More actions");
                }}
              />
            </Dropdown>
          ),
        },
      ]}
    >
      Custom Icon
    </Chip>
  );
};

export const AllColors = () => {
  return (
    <div className="flex gap-4 items-center justify-center flex-col">
      <div className="flex gap-4 items-center justify-center p-3  rounded-3xl">
        {Object.keys(ColorsEnum).map((color) => (
          <Chip key={color} color={color as Colors}>
            {color}
          </Chip>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center dark p-3 bg-secondary-900 rounded-3xl">
        {Object.keys(ColorsEnum).map((color) => (
          <Chip key={color} color={color as Colors}>
            {color}
          </Chip>
        ))}
      </div>
    </div>
  );
};
