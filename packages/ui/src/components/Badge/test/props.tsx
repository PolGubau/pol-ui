import { HiCheck } from "react-icons/hi";
import { ColorsEnum } from "../../../types";
import type { BadgeProps } from "../badge-ui";

const defaultProps: BadgeProps = {
  children: "2 minutes ago",
};
const withIcon: BadgeProps = {
  ...defaultProps,
  icon: HiCheck,
  color: ColorsEnum.success,
};
const asLink: BadgeProps = {
  children: "Read more →",
  href: "/badges",
};
const smallAndRounded: BadgeProps = {
  ...defaultProps,
  size: "sm",
  rounded: "lg",
};

export const badgeExampleProps: Record<string, BadgeProps> = {
  default: defaultProps,
  withIcon,
  asLink,
  smallAndRounded,
};
