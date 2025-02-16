"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import { cn, mergeDeep } from "../../helpers";
import { useMergeValue } from "../../hooks";
import { getTheme } from "../../theme-store";
import { TransitionPanel } from "../TransitionPanel";
import type { TabsTheme } from "./theme";

type Tab = {
  name: string;
  content?: React.ReactNode;
  disabled?: boolean;
};

export enum TabMode {
  underlined = "underlined",
  contained = "contained",
}
export type TabModeType = keyof typeof TabMode;

export interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  mode?: TabModeType;
  theme?: Partial<TabsTheme>;
  value?: number;
  defaultValue?: number;
  onTabChange?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  mode = TabMode.underlined,
  theme: customTheme = {},
  value,
  defaultValue = 0,
  onTabChange,
}: TabsProps) => {
  if (propTabs.length === 0) {
    throw new Error("Tabs must have at least one tab");
  }

  const [activeIdx, setActiveIdx] = useMergeValue(defaultValue, {
    value,
    onChange: onTabChange,
  });

  const theme: TabsTheme = mergeDeep(getTheme().tabs, customTheme);

  const selectedTab = propTabs[activeIdx];
  const setSelectedTab = (tab: Tab) => {
    const index = propTabs.indexOf(tab);
    setActiveIdx(index);
  };
  const id = useId();
  return (
    <div className={theme.container}>
      <nav>
        <ul className={cn(theme.nav, containerClassName)}>
          {propTabs.map((item) => (
            <motion.button
              key={item.name}
              type="button"
              initial={false}
              className={cn(theme.navItem?.base, item.disabled && theme.disabled, tabClassName)}
              onClick={() => {
                if (!item.disabled) {
                  setSelectedTab(item);
                }
              }}
            >
              {item.name}
              {item === selectedTab ? (
                <motion.div
                  className={cn(theme.navItem.marker?.base, theme.navItem.marker?.mode[mode], activeTabClassName)}
                  layoutId={id}
                  id={id}
                />
              ) : null}
            </motion.button>
          ))}
        </ul>
      </nav>
      <section>
        <TransitionPanel activeIndex={activeIdx} className={contentClassName}>
          {propTabs.map((item) => (
            <div key={item.name} className="py-2">
              {item.content}
            </div>
          ))}
        </TransitionPanel>
      </section>
    </div>
  );
};
