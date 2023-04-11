import React from "react";
import Text from "../Text/Text";

import { ButtonStyled } from "./Styled";
import { ButtonProps } from "./types";
import { IconByName, IconNameType } from "../../utils";

const Button: React.FC<ButtonProps> = ({
  onClick,
  icon = null,
  text,
  children,
  color = undefined,
  primary = false,
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      primary={primary}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children ? children : text && <Text> {text}</Text>}
      {icon && (
        <div className="icon">
          {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
        </div>
      )}
    </ButtonStyled>
  );
};

export default Button;
