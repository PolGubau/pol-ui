import React from "react";
import Text from "../Text/Text";

import { ButtonStyled } from "./Styled";
import { IconByName, IconNameType } from "functionalities";
export interface ButtonProps {
  /**
   * Button click handler
   * @default null
   * @type function
   * @example () => console.log("clicked")
   */
  onClick?: () => void;
  /**
   * Button color
   * @default undefined
   * @type string or undefined
   * @example "red"
   * @description if undefined, the button will have a default color
   * @author pol
   * @name Button
   * @version 1.0.0
   *
   *
   */
  color?: string | undefined;

  /**
   * Icon
   * @default null
   * @type React.ReactNode or string
   * @example <Icon /> or "arrow"
   * @description if null, the button will not have an icon
   * @author pol
   * @version 1.0.0
   *
   */
  icon?: React.ReactNode | IconNameType | null;

  /**
   * Button text
   * @default null or ""
   * @type string or null
   * @example "Click Me"
   * @description if null, the button will not have text
   * @author pol
   * @version 1.0.0
   */
  text?: string;

  /**
   * primary
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be bigger and have a different color
   * @author pol
   * @version 1.0.0
   *  */
  primary?: boolean;

  /**
   * disabled
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be disabled   
   *  @author pol
   * @version 1.0.0

   *
   * */
  disabled?: boolean;

  /**
   * fullWidth
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be full width
   * @author pol
   * @version 1.0.0
   * */
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  icon = null,
  text,
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
      {text && <Text> {text}</Text>}
      {icon && (
        <div className="icon">
          {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
        </div>
      )}
    </ButtonStyled>
  );
};

export default Button;
