import type { ComponentProps, FC } from "react";
import { forwardRef, useState } from "react";

import { TbEye, TbEyeOff } from "react-icons/tb";
import { IconButton } from "../IconButton/IconButton";
import { Input } from "../Input/Input";
import type { InputProps } from "../Input/props";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showIcon?: FC<ComponentProps<"svg">>;
  hideIcon?: FC<ComponentProps<"svg">>;
  defaultVisibility?: boolean;
}

const EyeButton = ({
  showPassword,
  setShowPassword,
  showIcon: ShowIcon = TbEye,
  hideIcon: HideIcon = TbEyeOff,
}: {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  showIcon?: PasswordInputProps["showIcon"];
  hideIcon?: PasswordInputProps["hideIcon"];
}) => {
  return (
    <IconButton onClick={() => setShowPassword(!showPassword)} size="sm">
      {showPassword ? (
        <HideIcon data-testid="hide-icon" className="w-5 h-5" />
      ) : (
        <ShowIcon data-testid="show-icon" className="w-5 h-5" />
      )}
    </IconButton>
  );
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showIcon: ShowIcon = TbEye, hideIcon: HideIcon = TbEyeOff, defaultVisibility = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(defaultVisibility);
    return (
      <Input
        {...props}
        ref={ref}
        label={props.label ?? "Password"}
        type={showPassword ? "text" : "password"}
        rightContent={
          <EyeButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showIcon={ShowIcon}
            hideIcon={HideIcon}
          />
        }
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
