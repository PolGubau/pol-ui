import type { Meta } from "@storybook/react";
import { useBoolean } from "../../hooks";
import { Hamburger } from "./Hamburger";

export default {
  title: "Components/Hamburger",
  component: Hamburger,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

export const Default = () => {
  const { value, toggle } = useBoolean(false);

  return (
    <Hamburger
      onClick={() => {
        toggle();
      }}
      open={value}
    />
  );
};

export const Outline = () => {
  const { value, toggle } = useBoolean(false);

  return <Hamburger outline={true} onClick={toggle} open={value} />;
};
