"use client"

import { forwardRef, useState, type ComponentProps, type FC } from "react"
import { TbEye, TbEyeOff } from "react-icons/tb"

import { MainSizesEnum } from "../../types/enums"
import { IconButton } from "../IconButton"
import { Input, type InputProps } from "../Input"

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showIcon?: FC<ComponentProps<"svg">>
  hideIcon?: FC<ComponentProps<"svg">>
  defaultVisibility?: boolean
}

const EyeButton = ({
  showPassword,
  setShowPassword,
  showIcon: ShowIcon = TbEye,
  hideIcon: HideIcon = TbEyeOff,
}: {
  showPassword: boolean
  setShowPassword: (value: boolean) => void
  showIcon?: PasswordInputProps["showIcon"]
  hideIcon?: PasswordInputProps["hideIcon"]
}) => {
  return (
    <IconButton
      type="button"
      onClick={() => {
        setShowPassword(!showPassword)
      }}
      size={MainSizesEnum.sm}
      tabIndex={-1}
    >
      {showPassword ? (
        <HideIcon data-testid="hide-icon" />
      ) : (
        <ShowIcon data-testid="show-icon" />
      )}
    </IconButton>
  )
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      showIcon: ShowIcon = TbEye,
      hideIcon: HideIcon = TbEyeOff,
      defaultVisibility = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(defaultVisibility)
    return (
      <Input
        {...props}
        ref={ref}
        type={showPassword ? "text" : "password"}
        rightComponent={
          <EyeButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showIcon={ShowIcon}
            hideIcon={HideIcon}
          />
        }
      />
    )
  }
)

PasswordInput.displayName = "PasswordInput"
