"use client";

import { motion } from "framer-motion";
import { type ComponentProps, type FC, type KeyboardEvent, useEffect, useId, useState } from "react";

import { cn } from "../../helpers";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import type { Colors, DeepPartial, MainSizes } from "../../types/types";
import { Label } from "../Label";
import type { SwitchTheme } from "./theme";

export type SwitchProps = Omit<ComponentProps<"button">, "onChange"> & {
  checked?: boolean;
  color?: Colors;
  size?: MainSizes;
  label?: string;
  onChange?: (checked: boolean) => void;
  theme?: DeepPartial<SwitchTheme>;

  keys?: {
    true?: string[];
    false?: string[];
    toggle?: string[];
  };
};

const initKeys = {
  true: ["ArrowRight", "KeyT", "KeyY"],
  false: ["ArrowLeft", "KeyF", "KeyN"],
  toggle: ["Space", "Enter"],
};
export const Switch: FC<SwitchProps> = ({
  checked,
  className,
  color = ColorsEnum.primary,
  size = MainSizesEnum.md,
  disabled = false,
  label,
  name,
  onChange,
  theme: customTheme = {},
  keys = initKeys,
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(getTheme().switch, customTheme);

  const [value, setValue] = useState(checked);

  const set = (newValue = !value): void => {
    onChange?.(newValue);
    setValue(newValue);
  };
  useEffect(() => {
    setValue(checked);
  }, [checked]);

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    const code = event.code;
    if (disabled || !code) {
      return;
    }
    props.onKeyDown?.(event);
    event.preventDefault();

    //
    const isIn = (key: string, arr: keyof typeof keys) => {
      const a = keys[arr];
      if (!a) {
        return false;
      }
      return a.includes(key);
    };

    if (isIn(code, "toggle")) {
      set();
    }
    if (isIn(code, "false")) {
      set(false);
    }
    if (isIn(code, "true")) {
      set(true);
    }
  };

  return (
    <>
      <input
        checked={value}
        onChange={() => setValue(!value)}
        hidden={true}
        name={name}
        readOnly={true}
        type="checkbox"
        className="sr-only group"
      />
      <button
        data-testid="ui-switch"
        aria-checked={value}
        aria-labelledby={`${id}-switch-label`}
        disabled={disabled}
        data-checked={value}
        id={`${id}-ui-switch`}
        name={`${id}-ui-switch`}
        onClick={() => set()}
        onKeyDown={(e) => {
          // if tab, continue the focus flow
          if (e.code === "Tab") {
            return;
          }
          handleOnKeyDown(e);
        }}
        role="switch"
        title={label}
        type="button"
        className={cn(theme.root.base, theme.root.active[disabled ? "off" : "on"], className)}
        {...props}
      >
        <div
          data-checked={value}
          data-testid="ui-switch-toggle"
          className={cn(
            "",
            theme.toggle.base,
            theme.toggle.color[color],
            theme.toggle.sizes[size as keyof typeof theme.toggle.sizes],
          )}
        >
          <motion.div
            data-checked={value}
            layout={true}
            transition={spring}
            className={cn(theme.toggle.handler.base)}
          />
        </div>

        {label && label?.length > 0 ? (
          <Label
            htmlFor={`${id}-ui-switch`}
            data-testid="ui-switch-label"
            id={`${id}-ui-switch-label`}
            className={theme.root.label}
            disabled={disabled}
          >
            {label}
          </Label>
        ) : null}
      </button>
    </>
  );
};

Switch.displayName = "Switch";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
