import React from "react";
import { IconNameType } from "../../types";
import { IconByName } from "../../utils/IconByName";
import { IconStyled } from "./IconStyled";

interface IconProps {
  icon: React.ReactNode | string;
  onClick?: any;
  color?: string;
  size?: string;
}

const Icon = ({ icon, onClick, color, size }: IconProps) => {
  return (
    <IconStyled onClick={onClick} color={color} size={size}>
      {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
    </IconStyled>
  );
};
export default Icon;
