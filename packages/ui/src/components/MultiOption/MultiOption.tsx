"use client";

import { useId } from "react";

import { Radio } from "../Radio";
import { Select } from "../Select";
import { SelectGroup, SelectItem } from "../Select/Select";

/**
 * @name MultiOption
 * @description A input component that merges multiple various-choice-but-select-one options into one input field.
 * It accepts an array of options and renders one or other UI based on the choices length.
 *
 * If 2 choices: Renders a radio button
 * If 3+ choices: Renders a select dropdown
 * if 10+ choices: Renders an autocomplete input (to search for the option)
 */

interface MultiOptionProps {
  /**
   * The array of options to choose from.
   */
  options: string[];
  /**
   * The value of the selected option.
   */
  value: string;
  /**
   * The callback function that is triggered when the selected option changes.
   */
  onChange: (value: string) => void;
}
const MultiOption = ({ options = [], value = "", onChange }: MultiOptionProps) => {
  const length = options.length;
  const id = useId();

  if (length < 2) {
    throw new Error("You need to provide at least two options into the MultiOption UI");
  }

  if (length === 2) {
    return (
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <div className="flex gap-2">
            <Radio key={option} value={option} name={id} />
            {option}
          </div>
        ))}
      </div>
    );
  }

  if (length >= 3 && length < 10) {
    return (
      <Select value={value} onChange={onChange}>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </Select>
    );
  }
};

export { MultiOption, type MultiOptionProps };
