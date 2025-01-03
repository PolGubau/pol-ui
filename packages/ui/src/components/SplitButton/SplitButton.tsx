import * as React from "react";

import { TbChevronDown } from "react-icons/tb";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Dropdown, DropdownGroup, DropdownItem } from "../Dropdown";
export interface SlipButtonOption {
  label: string;
  onClick: () => void;
}
export interface SplitButtonProps extends ButtonProps {
  options: SlipButtonOption[];
}

export function SplitButton({ options, ...rest }: Readonly<SplitButtonProps>) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (option: SlipButtonOption, index: number) => {
    setSelectedIndex(index);
    option.onClick();
  };

  return (
    <div className="flex">
      <Button className="rounded-none rounded-l-lg" {...rest} {...options[selectedIndex]}>
        {options[selectedIndex]?.label}
      </Button>

      <Dropdown
        trigger={
          <Button className="rounded-none rounded-r-lg" {...rest}>
            <TbChevronDown />
          </Button>
        }
      >
        <DropdownGroup>
          {options.map((option, index) => (
            <DropdownItem
              {...option}
              key={option.label}
              onSelect={() => {
                handleMenuItemClick(option, index);
              }}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownGroup>
      </Dropdown>
    </div>
  );
}
