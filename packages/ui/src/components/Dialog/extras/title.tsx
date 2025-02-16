"use client";

import { Dialog as D } from "radix-ui";

import { cn } from "../../../helpers";
const { Title } = D;

interface DialogTitleProps
	extends React.ComponentPropsWithoutRef<typeof Title> {
	ref?: React.Ref<HTMLHeadingElement>;
}

export const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
	<Title
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight text-black dark:text-white",
			className,
		)}
		{...props}
	/>
);
