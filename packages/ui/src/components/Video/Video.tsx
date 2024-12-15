import React from "react";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";

import { cn } from "../../helpers";
import { IconButton } from "../IconButton";

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode; // For custom controls
  videoClassName?: string;
}

const Video: React.FC<VideoProps> = ({
  width = "100%",
  height = "auto",
  className,
  style,
  children,
  onTimeUpdate,
  videoClassName,
  ...rest
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null); // Reference to the video element
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    if (onTimeUpdate) {
      onTimeUpdate(event);
    }
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handleLoadedMetadata = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(event.currentTarget.duration);
  };

  const togglePlay = () => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const playbackProgress = (currentTime / duration) * 100;

  return (
    <div
      className={cn("rounded-2xl", className)}
      style={{
        position: "relative",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        overflow: "hidden",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        {...rest}
        width="100%"
        onEnded={() => setIsPlaying(false)} // Pause the video when it ends
        height="100%"
        className={videoClassName}
        autoPlay={rest.autoPlay ?? true} // Default to true
        controls={rest.controls ?? false} // Default to false
        muted={rest.muted ?? true} // Default to true
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video scales properly
        }}
        aria-label="Video player"
      />

      <div className="absolute bottom-3 left-3 flex items-center">
        <div className="relative">
          <svg
            width="40"
            height="40"
            className="rounded-full absolute z-10 pointer-events-none select-none text-secondary-900 dark:text-secondary-200"
          >
            <circle
              stroke="currentColor"
              strokeWidth="1"
              fill="transparent"
              r="19.5"
              cx="20"
              cy="20"
              transform="rotate(-90 20 20)"
              style={{
                strokeDasharray: "122.522", // Circumference of the circle
                strokeDashoffset: `${122.522 - (122.522 * playbackProgress) / 100}`, // Adjust based on progress
                transition: "stroke-dashoffset 0.1s linear",
              }}
            />
          </svg>
          <IconButton
            onClick={togglePlay}
            variant="filled"
            color="secondary"
            className="text-black border-1 border-black dark:text-white h-[40px] w-[40px] bg-secondary-200 dark:bg-secondary-800 border-secondary dark:border-secondary-900 border"
          >
            {isPlaying ? <TbPlayerPauseFilled size={17} /> : <TbPlayerPlayFilled size={17} />}
          </IconButton>
        </div>{" "}
      </div>

      {children && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Ensure the video remains interactive
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Video;
