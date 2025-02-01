import type { PropsWithChildren } from "react";
import { cn } from "../../helpers";
interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  customTitle?: React.ReactNode;
  customDescription?: React.ReactNode;
  footer?: React.ReactNode;
}
export const InputGroup = (props: PropsWithChildren<InputGroupProps>) => {
  const { children, title, description, customTitle, customDescription, footer, ...rest } = props;
  return (
    <div
      {...rest}
      className={cn("flex flex-col gap-3 p-4 bg-secondary/5 dark:bg-secondary/30 rounded-xl", props.className)}
    >
      <header className="flex flex-col gap-2">
        {customTitle || <h2 className="">{title}</h2>}
        {customDescription || <small>{description}</small>}
      </header>
      <section id={title} className="flex flex-col gap-4">
        {children}
      </section>

      {footer}
    </div>
  );
};
