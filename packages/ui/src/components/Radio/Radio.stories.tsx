import type { Meta } from "@storybook/react";
import React from "react";

import { theme } from "../../theme";
import type { Colors } from "../../types";
import { Radio } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center bg-secondary-50">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default = (): React.ReactNode => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = React.useState(options[0]);
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl">
      {options.map((option) => {
        return (
          <Radio
            key={option}
            checked={value === option}
            onChange={() => {
              setValue(option);
            }}
            value={option}
            label={option}
          />
        );
      })}
    </div>
  );
};

export const WithIds = (): React.ReactNode => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = React.useState(options[0]);
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl">
      {options.map((option) => {
        return (
          <Radio
            id={option}
            key={option}
            checked={value === option}
            onChange={() => {
              setValue(option);
            }}
            value={option}
            label={option}
          />
        );
      })}
    </div>
  );
};

export const UnControlled = (): React.ReactNode => {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <ul className="flex gap-2">
      {options.map((option) => {
        return <Radio name="2" key={option} value={option} label={option} defaultChecked={option === options[1]} />;
      })}
    </ul>
  );
};
export const AllColors = (): React.ReactNode => {
  const options = ["1", "2", "3"];
  return (
    <ul className="flex gap-4">
      {Object.keys(theme.radio.color).map((color) => {
        return (
          <ul className="flex gap-2 flex-col" key={color}>
            {options.map((option) => {
              return (
                <Radio
                  name={color}
                  key={option}
                  value={option}
                  label={color + option}
                  color={color as Colors}
                  defaultChecked={option === options[1]}
                />
              );
            })}
          </ul>
        );
      })}
    </ul>
  );
};
