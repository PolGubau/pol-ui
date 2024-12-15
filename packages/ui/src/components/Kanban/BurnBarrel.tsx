"use client";

import { motion } from "framer-motion";
import { type Dispatch, type PropsWithChildren, type SetStateAction, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

import type { KanbanCardProps } from "./Card";
import type { KanbanProps } from "./Kanban";

interface KanbanDeleteCardsButtonProps extends PropsWithChildren {
  setDragging: Dispatch<SetStateAction<boolean>>;
  positionY?: "top" | "bottom";
  positionX?: "left" | "right" | "center";
  onDelete?: KanbanProps["onDelete"];
  content?: KanbanProps["deleteButton"];
}

export const KanbanDeleteCardsButton: React.FC<KanbanDeleteCardsButtonProps> = ({
  setDragging,
  content = (active) => (
    <div
      className={twMerge(
        " flex items-center gap-2 truncate py-3 px-6 rounded-2xl text-xl   backdrop-blur-md bg-error-200 dark:bg-error-700 text-error-900 dark:text-error-50 transition-shadow shadow-md z-50 shadow-error-900/20 hover:shadow-lg",
        active && "brightness-95  ",
      )}
    >
      <TbTrash />
      Delete Card
    </div>
  ),
  positionY = "bottom",
  positionX = "center",
  onDelete,
}: KanbanDeleteCardsButtonProps): React.ReactNode => {
  const [active, setActive] = useState(false);
  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActive(true);
  };
  const handleDragLeave = () => {
    setActive(false);
  };
  const handleDragEnd = (e: {
    dataTransfer: { getData: (arg0: string) => KanbanCardProps["id"] };
  }) => {
    setDragging(false);
    if (!e.dataTransfer) {
      return;
    }
    const cardId = e.dataTransfer.getData("cardId");
    onDelete?.(cardId);
    setActive(false);
  };

  const negativeIfTop = positionY === "top" ? -1 : 1;
  const initialPositionY = negativeIfTop * 100;

  return (
    <motion.div
      initial={{
        scale: 0.5,
        y: initialPositionY,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      exit={{
        scale: 0.5,
        y: initialPositionY,
        opacity: 0,
      }}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={twMerge(
        "fixed",
        positionY === "top" && "top-6",
        positionY === "bottom" && "bottom-6",
        positionX === "left" && "left-6",
        positionX === "right" && "right-6",
        positionX === "center" && "mx-auto inset-x-0 max-w-max",
      )}
    >
      {content(active)}
    </motion.div>
  );
};
