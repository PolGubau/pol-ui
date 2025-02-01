import type { Meta } from "@storybook/react";

import FocusEffect from "./FocusEffect";

export default {
  title: "Components/FocusEffect",
  component: FocusEffect,
} as Meta;

export const Default = () => {
  return (
    <button className="group relative overflow-hidden p-4" type="button">
      Tab me
      <FocusEffect />
    </button>
  );
};
