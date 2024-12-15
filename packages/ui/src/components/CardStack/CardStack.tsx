"use client";

import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface CardStackItemProps {
  position?: number;
  index?: number;
  sendToBottom?: (index: number) => void;
  drag?: "x" | "y" | false;
  className?: string;
  total?: number;
}

/**
 *
 * @name CardStackItem
 * @description The CardStackItem component is used to create a card stack item
 * @param {number} props.position - The position of the card
 *
 * @returns React.FC<CardStackItemProps>
 *
 */
export const CardStackItem = ({
  position = 0,
  index = 1,
  total = 5,
  sendToBottom,
  drag = "x",
  children,
  className,
}: PropsWithChildren<CardStackItemProps>) => {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });
  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  const frontCard = position === 0;

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -100) {
      setExitX(-250);
      sendToBottom?.(index);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      sendToBottom?.(index);
    }
  }

  return (
    <motion.div
      className={twMerge(" cursor-grab w-fit h-fit", frontCard ? "relative" : "absolute top-0", className)}
      style={{
        zIndex: total - position,
        x,
        rotate,
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          scale,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export interface CardStackProps {
  children?: React.ReactNode[];
  className?: string;
}

/**
 *
 * @name CardStack
 * @description The CardStack component is usefull to create a stack of cards, like a tinder card stack. Interessting for a dating app, a social network, a forum...
 * @returns
 */
export function CardStack({ children, className }: Readonly<CardStackProps>) {
  const [items, setItems] = useState(
    children?.map((content, index) => {
      return {
        content,
        order: index,
      };
    }) ?? [],
  );
  const amountOfChilds = children?.length ?? 0;

  const sendToBottom = (index: number) => {
    // if we only have 1 child, we don't want to send it to the bottom
    if (items.length === 1) {
      return;
    }

    const newItems = items.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          order: amountOfChilds - 1,
        };
      }
      if (item.order > items[index].order) {
        return {
          ...item,
          order: item.order - 1,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <motion.div className="relative h-full py-6">
      <AnimatePresence initial={false}>
        {items.map((item, index) => {
          return (
            <CardStackItem
              key={index}
              index={index}
              sendToBottom={sendToBottom}
              total={amountOfChilds}
              position={item.order}
              className={className}
            >
              {item.content}
            </CardStackItem>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
