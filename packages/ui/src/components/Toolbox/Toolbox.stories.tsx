import type { Meta } from "@storybook/react";
import { TbMoon, TbSettings, TbSun, TbUser } from "react-icons/tb";
import { useThemeMode } from "../../hooks";
import { IconButton } from "../IconButton";
import { Toolbox } from "./Toolbox";

export default {
  title: "Components/Toolbox",
  component: Toolbox,
} as Meta;

export const Default = () => {
  const { computedMode, toggleMode } = useThemeMode();

  return (
    <Toolbox>
      <IconButton onClick={toggleMode} className="text-white">
        {computedMode === "light" ? <TbSun size={20} /> : <TbMoon size={20} />}
      </IconButton>
      <IconButton className="text-white">
        <TbSettings size={20} />
      </IconButton>
      <IconButton className="text-white">
        <TbUser size={20} />
      </IconButton>
    </Toolbox>
  );
};
