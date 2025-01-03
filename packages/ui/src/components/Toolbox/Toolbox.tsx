"use client";

import { FaChevronUp } from "react-icons/fa";

import { cn } from "../../helpers";
import { useBoolean } from "../../hooks";
import { ColorsEnum } from "../../types";
import { IconButton } from "../IconButton";

export interface ToolboxProps {
  children: React.ReactNode;
}

export const Toolbox = ({ children }: ToolboxProps) => {
  const { value: showDebug, toggle } = useBoolean(false);

  return (
    <>
      <IconButton
        onClick={toggle}
        color={ColorsEnum.secondary}
        variant={"filled"}
        size={"sm"}
        className="-translate-x-1/2 fixed bottom-2 left-1/2 z-50 bg-secondary-900 hover:bg-secondary-800"
        style={{ zIndex: 999999 }}
      >
        <FaChevronUp
          size={18}
          className={cn("fill-white transition-all", {
            "rotate-180": showDebug,
          })}
        />
      </IconButton>
      <div
        style={{ zIndex: 999999 }}
        className={cn(
          "-translate-x-1/2 fixed left-1/2 z-40 flex max-w-[90vw] items-center justify-center gap-1 rounded-full bg-secondary-900 p-1 transition-all",
          {
            "bottom-12": showDebug,
            "-bottom-20": !showDebug,
          },
        )}
      >
        {children}
      </div>
    </>
  );
};
