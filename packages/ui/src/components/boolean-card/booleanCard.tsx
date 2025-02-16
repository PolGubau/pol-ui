"use client";

import { type ReactNode, useEffect, useState } from "react";
import { cn } from "../../helpers";
import { Card } from "../Card";
import { Switch, type SwitchProps } from "../Switch/Switch";

export interface BooleanCardProps extends Omit<SwitchProps, "onChange" | "checked"> {
  title: string;
  description?: ReactNode;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  titleProps?: React.HTMLProps<HTMLHeadingElement>;
  descriptionProps?: React.HTMLProps<HTMLHeadingElement>;
}
export const BooleanCard = ({ title, description, onChange, checked = false, ...rest }: BooleanCardProps) => {
  const [innerChecked, setInnerChecked] = useState(checked);

  useEffect(() => {
    setInnerChecked(checked);
  }, [checked]);

  const handleChange = (value: boolean) => {
    setInnerChecked(value);
    onChange?.(value);
  };

  return (
    <Card
      className={cn("cursor-pointer transition-colors h-fit bg-secondary/5", {
        "bg-secondary/15": innerChecked,
      })}
      onClick={() => handleChange(!innerChecked)}
    >
      <div className="flex justify-between gap-4 w-full">
        <header className="flex flex-col gap-1 w-full">
          <h4 {...rest.titleProps}>{title}</h4>
          <small {...rest.descriptionProps} className={cn("text-[0.8em]", rest.descriptionProps?.className)}>
            {description}
          </small>
        </header>

        <Switch {...rest} checked={innerChecked} onChange={handleChange} />
      </div>
    </Card>
  );
};
