import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import type { Colors, MainSizes } from "../../types";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import { Input } from "../Input";
import { Switch, type SwitchProps } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  decorators: [(Story): React.ReactNode => <Story />],
} as Meta;

const Template: StoryFn<SwitchProps> = ({ checked, ...args }) => {
  return <Switch {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Switch",
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Switch
        checked={checked}
        onChange={(v) => {
          setChecked(v);
        }}
        label="Switch"
      />
      Checked : {checked.toString()}
    </>
  );
};

export const AllColors = (): React.ReactNode => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(ColorsEnum).map((v) => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template color={v as Colors} label={v} />
      </div>
    ))}
  </div>
);

export const AllSizes = (): React.ReactNode => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(MainSizesEnum).map((v) => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template size={v as MainSizes} label={v} />
      </div>
    ))}
  </div>
);

export const InForm = (): React.ReactNode => (
  <div className="flex flex-wrap gap-6">
    <form>
      <Switch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />
      <Input type="text" />
    </form>
  </div>
);
