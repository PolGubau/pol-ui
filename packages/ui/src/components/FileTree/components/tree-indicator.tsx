import { cn } from "../../../helpers";
import { useTree } from "../hooks/use-tree";

const TreeIndicator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { direction } = useTree();

  return (
    <div
      dir={direction}
      className={cn(
        "h-full w-px bg-muted absolute left-1.5 rtl:right-1.5 py-3 rounded-md hover:bg-slate-300 duration-300 ease-in-out",
        className,
      )}
      {...props}
    />
  );
};
export { TreeIndicator };
