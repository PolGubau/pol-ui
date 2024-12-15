import type { ComponentProps, FC, ReactEventHandler, ReactNode } from "react";

import { ColorsEnum } from "../../types";
import type { DeepPartial } from "../../types/types";
import { Button } from "../Button";
import type { PaginationButtonTheme } from "./theme";

export interface PaginationButtonProps extends Omit<ComponentProps<"button">, "color" | "ref"> {
  active?: boolean;
  children?: ReactNode;
  outline?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  theme?: DeepPartial<PaginationButtonTheme>;
}

export interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, "active"> {
  disabled?: boolean;
}

export const PaginationButton: FC<PaginationButtonProps> = ({ active, children, onClick, ...props }) => {
  return (
    <Button
      variant={active ? "filled" : "outline"}
      rounded="none"
      type="button"
      color={active ? ColorsEnum.primary : ColorsEnum.secondary}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export const PaginationNavigation: FC<PaginationPrevButtonProps> = ({
  children,
  className,
  onClick,
  theme,
  disabled = false,
  ...props
}) => {
  return (
    <Button
      type="button"
      color={ColorsEnum.secondary}
      theme={theme}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
