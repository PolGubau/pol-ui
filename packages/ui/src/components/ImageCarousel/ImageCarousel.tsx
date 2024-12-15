import { type MotionValue, motion, useMotionValue, useTransform } from "framer-motion";
import type React from "react";
import { useEffect, useRef } from "react";

import { mergeRefs } from "../../helpers";
import { useMeasure } from "../../hooks";

const ListItem = ({
  uri,
  scrollX,
  index,
  dataLength,
  maxWidth,
  customRender,
}: {
  uri: string;
  scrollX: MotionValue<number>;
  index: number;
  dataLength: number;
  maxWidth: number;
  customRender?: (url: string, index: number) => React.ReactNode;
}) => {
  const lg = maxWidth;
  const md = lg * 0.5;
  const sm = md * 0.5;

  const inputRange = [(index - 2) * sm, (index - 1) * sm, index * sm, (index + 1) * sm];

  const isLastItem = dataLength === index + 1;
  const isSecondLastItem = dataLength === index + 2;

  const outputRange = isLastItem ? [sm, lg, lg, lg] : isSecondLastItem ? [sm, lg, md, md] : [sm, md, lg, sm];

  const width = useTransform(scrollX, inputRange, outputRange);

  return (
    <motion.div
      className="rounded-3xl pointer-events-none overflow-hidden h-full min-w-sm"
      style={{
        width,
        height: 300,
        flexShrink: 0,
      }}
    >
      {customRender?.(uri, index)}
      {!customRender && (
        <motion.img
          src={uri}
          id={`item-${index + 1}`}
          alt={`Item ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          draggable={false}
        />
      )}
    </motion.div>
  );
};

interface ImageCarouselProps {
  urls: string[];
  customRender?: (url: string, index: number) => React.ReactNode;
}
const ImageCarousel = (props: ImageCarouselProps) => {
  const { urls, customRender } = props;
  const { ref, bounds } = useMeasure<HTMLDivElement>();

  const containerWidth = bounds.width;

  const bigImageWidth = containerWidth * 0.5;

  const containerRef = useRef<HTMLDivElement>(null!);
  const scrollX = useMotionValue(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef?.current?.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 0.6;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    containerRef.current.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        scrollX.set(containerRef.current?.scrollLeft);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollX]);

  return (
    <div className="w-full max-w-4xl overflow-hidden rounded-3xl select-none w-full flex cursor-grab">
      <div
        ref={mergeRefs([ref, containerRef])}
        style={{
          display: "flex",
          gap: 10,
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        {urls.map((url, index) => (
          <ListItem
            key={index + url}
            uri={url}
            scrollX={scrollX}
            index={index}
            dataLength={urls.length}
            maxWidth={bigImageWidth}
            customRender={customRender}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
