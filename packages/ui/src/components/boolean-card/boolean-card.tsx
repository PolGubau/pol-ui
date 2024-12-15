import { useEffect, useState } from "react";
import { cn } from "../../helpers";
import { Card } from "../Card";
import { Switch, type SwitchProps } from "../Switch";

export interface BooleanCardProps extends Omit<SwitchProps, "onChange" | "checked"> {
  title: string;
  description?: React.ReactNode | string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  titleProps?: React.HTMLProps<HTMLHeadingElement>;
  descriptionProps?: React.HTMLProps<HTMLHeadingElement>;
}
export const BooleanCard = ({ title, description, onChange, checked = false, ...rest }: BooleanCardProps) => {
  const [innerChecked, setInneretChecked] = useState(checked);

  useEffect(() => {
    setInneretChecked(checked);
  }, [checked]);

  const handleChange = (value: boolean) => {
    setInneretChecked(value);
    onChange?.(value);
  };

  return (
    <Card
      className={cn("cursor-pointer transition-colors h-fit", {
        "bg-secondary-50": innerChecked,
      })}
      onClick={() => handleChange(!innerChecked)}
    >
      <div className="flex justify-between gap-4 w-full">
        <header className="flex flex-col gap-1 w-full">
          <h4 {...rest.titleProps}>{title}</h4>
          <h5 {...rest.descriptionProps} className={cn("text-sm", rest.descriptionProps?.className)}>
            {description}
          </h5>
        </header>

        <Switch {...rest} checked={innerChecked} onChange={handleChange} />
      </div>
    </Card>
  );
};
