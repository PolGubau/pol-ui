import { TbUser } from "react-icons/tb";
import type { InputProps } from "../props";

const inputNormalProps: InputProps = {
  label: "Username",
  id: "username",
  name: "username",
};

const inputErrorProps: InputProps = {
  ...inputNormalProps,
  error: "This field is required",
  helperText: "Helper text",
};

const WithIconProps: InputProps = {
  ...inputNormalProps,
  icon: TbUser,
};
const RequiredProps: InputProps = {
  ...inputNormalProps,
  required: true,
};

export const customExampleInputLabelClasses = "text-orange-800 peer-placeholder-shown:text-orange-400 font-bold";

const customLabelClass = {
  ...inputNormalProps,
  labelClassName: customExampleInputLabelClasses,
};
const withHelperText = {
  ...inputNormalProps,
  helperText: "This is a helper text",
};

export const inputExampleProps = {
  default: inputNormalProps,
  error: inputErrorProps,
  withIcon: WithIconProps,
  required: RequiredProps,
  customLabelClass,
  withHelperText,
};
