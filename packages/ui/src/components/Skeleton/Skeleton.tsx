import { cn } from "../../helpers"

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-secondary/50 w-fit h-fit text-transparent select-none ",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
