import React from "react";
import Text from "../Text/Text";

import { ButtonStyled } from "./Styled";
import { ButtonProps } from "./types";
import { IconByName, IconNameType } from "../../utils";
import Icon from "components/Icon/Icon";

const Button: React.FC<ButtonProps> = ({
  onClick,
  icon = null,
  text,
  children,
  color = undefined,
  primary = false,
  fullWidth = false,
  disabled = false,
  outlined = false,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      primary={primary}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled}
      outlined={outlined}
    >
      {children ? children : text && <Text> {text}</Text>}
      {icon && <Icon icon={icon} />}
    </ButtonStyled>
  );
};

export default Button;
