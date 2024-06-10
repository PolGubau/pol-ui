import { cn } from '../../helpers'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>
function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }
