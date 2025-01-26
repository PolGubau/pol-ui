"use client";

import { type MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, type PropsWithChildren } from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { ClassName, DeepPartial, WithClassName } from "../../types";
import type { ContainerScrollTheme } from "./theme";

export interface ContainerScrollProps extends PropsWithChildren, WithClassName {
  titleComponent?: string | React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  rotation?: number;
  theme?: DeepPartial<ContainerScrollTheme>;
  perspective?: number;
  headerClassName?: ClassName;
  deviceWrapper?: boolean;
  deviceClassName?: ClassName;
  screenClassName?: ClassName;
}
/**
 * ContainerScroll component
 *
 * @description The ContainerScroll component is used to create a container that will rotate and scale the content based on the scroll position
 * @returns React.FC<ContainerScrollProps>
 */
export const ContainerScroll = ({
  titleComponent,
  children,
  top = false,
  bottom = true,
  rotation = 20,
  perspective = 1000,
  theme: customTheme = {},
  className,
  headerClassName,
  deviceWrapper = true,
  deviceClassName,
  screenClassName,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  const theme = mergeDeep(getTheme().containerScroll, customTheme);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const animations = (rotation: number) => {
    // we need to create the 0-1 range and the -20 0 20 range px scale
    // if 'top' is true, we need to add a 3rd point to the range (the last one)
    /*
    Case 1: 
    Both top and bottom are true -> 
      {endpoints:[0,0.5,1],rotations:[20,0,-20]}

    Case 2:
    Only top is true -> 
      {endpoints:[0,1],rotations:[0,-20]}

    Case 3:
    Only bottom is true -> 
      {endpoints:[0,1],rotations:[20,0]}

    Case 4:
    None is true -> 
      {endpoints:[0],rotations:[0]}

     */

    const checkpoints = () => {
      if (top && bottom) {
        return [0, 0.5, 1];
      }
      if (top) {
        return [0, 1];
      }
      if (bottom) {
        return [0, 0.5];
      }
      return [0];
    };
    const rotations = () => {
      if (top && bottom) {
        return [rotation, 0, -rotation];
      }
      if (top) {
        return [0, -rotation];
      }
      if (bottom) {
        return [rotation, 0];
      }
      return [0];
    };
    return { checkpoints: checkpoints(), rotations: rotations() };
  };

  const rotate = useTransform(scrollYProgress, animations(rotation).checkpoints, animations(rotation).rotations);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateTitle = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className={cn(theme.base, className)} ref={containerRef}>
      <div
        className={theme.container}
        style={{
          perspective: `${perspective}px`,
        }}
      >
        {titleComponent && (
          <motion.div
            style={{
              translateY: translateTitle,
            }}
            className={cn(theme.header, headerClassName)}
          >
            {titleComponent}
          </motion.div>
        )}
        <ContainerScrollCard
          rotate={rotate}
          translate={translate}
          scale={scale}
          theme={theme}
          deviceWrapper={deviceWrapper}
          deviceClassName={deviceClassName}
          screenClassName={screenClassName}
        >
          {children}
        </ContainerScrollCard>
      </div>
    </div>
  );
};

interface CardProps extends PropsWithChildren {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  theme: ContainerScrollTheme;
  deviceWrapper: ContainerScrollProps["deviceWrapper"];
  deviceClassName?: ClassName;
  screenClassName?: ClassName;
}
export const ContainerScrollCard = ({
  rotate,
  scale,
  translate,
  children,
  theme,
  deviceWrapper = true,
  deviceClassName = "",
  screenClassName = "",
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className={cn(deviceWrapper && theme.device, deviceClassName)}
    >
      {deviceWrapper ? (
        <div className={cn(theme.screen, screenClassName)}>
          <motion.div style={{ translateY: translate }}>{children}</motion.div>
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
};
