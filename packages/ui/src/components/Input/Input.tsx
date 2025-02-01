import { forwardRef, useId } from "react";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import type { InputProps } from "./props";
import type { InputTheme } from "./theme";

export const makeLabelContent = (label: string, required: boolean): string => `${label}${required ? " *" : ""}`;
/**
 * @name Input
 * The Input component is a text input field that allows users to enter text. It can be used in forms, modals, and more.
 */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      color = error ? ColorsEnum.error : ColorsEnum.primary,
      helperText,
      icon: Icon,
      iconPosition = "left",
      size = MainSizesEnum.md,
      theme: customTheme = {},
      label,
      innerClassName,
      rightContent,
      leftContent,
      labelClassName = "",
      onChangeEnd,
      onChangeValue,
      ...props
    },
    ref,
  ) => {
    const theme: InputTheme = mergeDeep(getTheme().textInput, customTheme);
    const ui = useId();
    return (
      <div className="pt-1 flex-1">
        <div className={cn(theme.base, className)}>
          {Icon && (
            <div className={cn(theme.icon.base, theme.icon.position[iconPosition])}>
              <Icon data-testid="icon" />
            </div>
          )}
          {leftContent && <div className={cn("pl-2")}>{leftContent}</div>}

          <input
            autoComplete={props.autoComplete ?? "off"}
            autoCapitalize={props.autoCapitalize ?? "off"}
            ref={ref}
            id={props.id ?? label ?? ui}
            type={props.type ?? "text"}
            name={props.name ?? label ?? ui}
            onChange={(e) => {
              onChangeValue?.(e.target.value);
              props.onChange?.(e);
            }}
            onBlur={(e) => {
              onChangeEnd?.(e.target.value);
              props.onBlur?.(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onChangeEnd?.(e.currentTarget.value);
              }
              props.onKeyDown?.(e);
            }}
            {...props}
            className={cn(
              theme.input.base,
              theme.input.size[size],
              theme.input.hasLeftIcon[Icon && iconPosition === "left" ? "on" : "off"],
            )}
            placeholder=" "
          />
          {rightContent && <div className={cn("pr-2")}>{rightContent}</div>}

          <label
            className={cn(
              theme.label.base,
              theme.label.colors[color],
              theme.label.hasLeftContent[label && leftContent ? "on" : "off"],
              theme.label.hasLeftIcon[Icon && iconPosition === "left" ? "on" : "off"],
              labelClassName,
            )}
            htmlFor={props.id ?? label ?? ui}
          >
            {makeLabelContent(label, props.required ?? false)}
          </label>

          {/* Field when no hover */}
          <fieldset className={cn(theme.field.base, theme.field.unfilled, theme.field.color[color])}>
            <legend
              className={cn(
                theme.field.legend.base,
                theme.field.legend.unfilled,
                theme.field.legend.static[leftContent ? "on" : "off"],
              )}
            >
              {makeLabelContent(label, props.required ?? false)}
            </legend>
          </fieldset>

          {/* Fieldset when input is filled */}
          <fieldset className={cn(theme.field.base, theme.field.filled, theme.field.color[color])}>
            <legend className={cn(theme.field.legend.base, theme.field.legend.filled)}>
              {makeLabelContent(label, props.required ?? false)}
            </legend>
          </fieldset>
        </div>
        {(error || helperText) && (
          <p className={cn(theme.helperText.base, color === "error" && theme.helperText.error)}>
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  },
);
