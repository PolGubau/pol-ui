"use client";

import { useAnimate } from "framer-motion";
import type React from "react";
import { type MouseEventHandler, useRef } from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { ImageTrailTheme } from "./theme";

export interface ImageTrailProps extends React.ComponentProps<"div"> {
  images: string[];
  renderImageBuffer?: number;
  rotationRange?: number;
  className?: string;
  imageClassName?: string;
  disappearDelay?: number;
  theme?: DeepPartial<ImageTrailTheme>;
}

/**
 * ImageTrail component
 * @description The ImageTrail component is used to create a trail of images that follow the mouse, it is a decorative component that can be used to create a visual effect on the page, interesting for landing pages and other creative uses.
 * @returns React.FC<ImageTrailProps>
 */
export const ImageTrail = ({
  children,
  // List of image sources
  images = [],
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer = 50,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange = 20,
  disappearDelay = 1,
  className = "",
  imageClassName = "",
  theme: customTheme = {},
  ...props
}: ImageTrailProps) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(clientX, clientY, lastRenderPosition.current.x, lastRenderPosition.current.y);

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex.toString()}"]`;

    const el = document.querySelector(selector);
    if (!el) {
      return null;
    }
    const element = el as HTMLElement;
    element.style.top = `${lastRenderPosition.current.y.toString()}px`;
    element.style.left = `${lastRenderPosition.current.x.toString()}px`;
    element.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,

      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) rotate( ${imageIndex % 2 ? "" : "-"}${rotation.toString()}deg)`,
          `translate(-50%, -25%) scale(1) rotate( ${imageIndex % 2 ? "-" : ""}${rotation.toString()}deg)`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 },
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: disappearDelay },
    );

    imageRenderCount.current += 1;
    return null;
  };

  const theme = mergeDeep(getTheme().imageTrail, customTheme);

  return (
    <div ref={scope} className={cn(theme.base, className)} onMouseMove={handleMouseMove} role="presentation" {...props}>
      {children}

      {images.map((img, index) => (
        <img
          className={cn(theme.image, imageClassName)}
          src={img}
          alt={`Mouse move ${index.toString()}`}
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
