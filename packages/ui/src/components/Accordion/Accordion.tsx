"use client";
import { type ComponentProps, type FC, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { AccordionTheme } from "./theme";

interface AccordionItemProps {
  data: AccordionData;
  isOpen: boolean;
  onClick: () => void;
  theme: AccordionTheme;
}
const AccordionItem = ({
  data: { header, content, arrowIcon: ArrowIcon = RiArrowDropDownLine },
  isOpen,
  onClick,
  theme,
}: AccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <li className={`${theme.wrapper} wrapper`} data-testid="ui-accordion-item">
      <button
        data-testid="ui-accordion-header"
        type="button"
        data-open={String(isOpen)}
        className={` ${theme.headerContainer} ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        {header}
        <ArrowIcon className={theme.arrow} data-open={String(isOpen)} />
      </button>

      <div
        data-testid="ui-accordion-content"
        ref={contentHeight}
        data-open={String(isOpen)}
        className={theme.contentContainer}
        style={isOpen ? { height: contentHeight.current?.scrollHeight } : { height: "0px" }}
      >
        <div className={theme.contentContent}>{content}</div>
      </div>
    </li>
  );
};

export interface AccordionData {
  header: React.ReactNode;
  content: React.ReactNode;
  arrowIcon?: FC<ComponentProps<"svg">>;
}
export interface AccordionProps extends ComponentProps<"ul"> {
  alwaysOpen?: boolean;
  theme?: DeepPartial<AccordionTheme>;
  data: AccordionData[];
}
export const Accordion = ({ alwaysOpen, data, theme: customTheme = {}, ...rest }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const theme: AccordionTheme = mergeDeep(getTheme().accordion, customTheme);
  return (
    <ul className={cn(theme.container, rest.className)} {...rest} data-testid="ui-accordion">
      {data.map((item, index) => (
        <AccordionItem
          theme={theme}
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          data={item}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </ul>
  );
};
