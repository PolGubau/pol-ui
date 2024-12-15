import { type ComponentProps, forwardRef, useId } from "react";

import { cn } from "../../helpers";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import { HelperText } from "../HelperText";
import type { BaseInputsProps } from "../Input/props";
import { Label } from "../Label";

export interface TextareaProps extends Omit<ComponentProps<"textarea">, "color" | "ref" | "size">, BaseInputsProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      color = ColorsEnum.primary,
      helperText,
      leftComponent,
      rightComponent,
      size = MainSizesEnum.md,
      theme: customTheme = {},
      label,
      labelPosition = "top",
      border = false,
      labelClassName = "",
      innerClassName = "",
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().textInput, customTheme);
    const randomId = useId();

    return (
      <div className={cn(theme.root.base, theme.root.labelPosition[labelPosition])}>
        {label && (
          <Label className={cn(theme.label, labelClassName)} htmlFor={randomId}>
            {label}
          </Label>
        )}
        <div className={cn(theme.base, className)}>
          <div className={cn(theme.field.base)}>
            {leftComponent && (
              <div
                data-testid="left-icon"
                className={cn(theme.field.icons.base, theme.field.icons.svg, theme.field.icons.left)}
              >
                {leftComponent}
              </div>
            )}
            {rightComponent && (
              <div
                data-testid="right-icon"
                className={cn(theme.field.icons.base, theme.field.icons.svg, theme.field.icons.right)}
              >
                {rightComponent}
              </div>
            )}
            <textarea
              ref={ref}
              name={randomId}
              id={randomId}
              className={cn(
                theme.field.input.base,
                theme.field.input.multiline.on,
                theme.field.input.border[border ? "on" : "off"],
                theme.field.input.colors[color],
                theme.field.input.sizes[size],
                theme.field.input.withIcon[leftComponent ? "on" : "off"],
                theme.field.input.withRightIcon[rightComponent ? "on" : "off"],
                innerClassName,
              )}
              {...props}
            />
            {helperText && <HelperText color={color}>{helperText}</HelperText>}
          </div>
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
