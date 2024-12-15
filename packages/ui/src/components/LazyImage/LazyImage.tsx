import { type MotionProps, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "../../helpers";

export type LazyImageProps = React.HTMLAttributes<HTMLImageElement> &
  MotionProps & {
    src: string;
    initialHeight?: string;
  };

export function LazyImage(props: LazyImageProps) {
  const { initialHeight = "8rem" } = props;

  const [imageLoading, setImageLoading] = useState(true);

  const [error, setError] = useState(false);

  //
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 300);
  };

  const getHeight = (): string => {
    if (error) {
      return "0px";
    }

    if (imageLoading) {
      return "6rem";
    }

    return "auto";
  };

  return (
    <div className={cn(`${pulsing ? "pulse" : ""}`, props.className)} style={{ background: "#ccc" }}>
      <motion.img
        {...props}
        initial={{ height: initialHeight, opacity: 0 }}
        style={{ height: getHeight() }}
        animate={{
          height: getHeight(),
          opacity: imageLoading && !error ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.2 },
          opacity: { delay: 0.5, duration: 0.2 },
        }}
        onLoad={imageLoaded}
        onError={() => setError(true)}
        width="100%"
      />
    </div>
  );
}
