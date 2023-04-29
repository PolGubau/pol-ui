import React from "react";
import Text from "../Text/Text";
import { ButtonStyled } from "./Styled";
import Icon from "../Icon/Icon";
import { ButtonProps } from "../../types";

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
