"use client";
import { Dialog as D } from "radix-ui";

import { AnimatePresence, motion } from "framer-motion";
import type React from "react";

import { cn } from "../../helpers";
import { useBoolean, useMediaQuery } from "../../hooks";
import { Button } from "../Button";
import { Drawer } from "../Drawer";

const { DialogTitle } = D;
export interface ExpandableButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the content will be shown only once and won't be able to be opened or closed again.
   */
  once?: boolean;

  trigger?: React.ReactNode;
  label?: string;
  triggerWrapperClassName?: string;
  /**
   * If true, the content will be shown inline on desktop and in a Drawer on mobile.
   */
  responsive?: boolean;

  /**
   * If true, the label will be shown in the Drawer on mobile, otherwise it will be hidden.
   */
  showLabelInDrawer?: boolean;
}

const ExpandableButton = ({
  children,
  once,
  trigger,
  triggerWrapperClassName,
  label = "Click to toggle",
  responsive = true,
  showLabelInDrawer = true,
  ...rest
}: ExpandableButtonProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { value, toggle, setTrue } = useBoolean(false);
  const handleClick = () => {
    if (once) {
      !value && setTrue();
    } else {
      toggle();
    }
  };

  const defaultTrigger = trigger ?? <Button className="w-full">{label}</Button>;

  const shouldBeDrawer = !isDesktop && responsive;

  return (
    <div className="flex flex-col w-full" {...rest}>
      {
        <div
          data-state={value ? "open" : "closed"}
          className={cn(triggerWrapperClassName)}
          onClickCapture={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {defaultTrigger}
        </div>
      }

      {shouldBeDrawer ? (
        <Drawer
          open={value}
          onClose={toggle}
          withoutTrigger={true}
          onOpenChange={(newState) => {
            if (!newState) {
              toggle();
            }
          }}
        >
          {showLabelInDrawer && <DialogTitle>{label}</DialogTitle>} {children}
        </Drawer>
      ) : (
        <AnimatePresence mode="wait">
          {value && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.99 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.99 }}
              transition={{ ease: "linear", duration: 0.15 }}
              className={cn("overflow-hidden", rest.className)}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default ExpandableButton;
