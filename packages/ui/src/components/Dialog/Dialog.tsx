"use client";

import { Dialog as DialogPrimitive } from "radix-ui";

import type * as React from "react";

import { Button } from "../Button";
import { DialogContent, type DialogContentProps } from "./components";

const Root = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

// ------------------------------ DialogContent ------------------------------

export interface DialogProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
	children: React.ReactNode;
	label?: string;
	withoutTrigger?: boolean;

	trigger?: React.ReactNode;
	contentProps?: DialogContentProps;
	triggerProps?: React.ComponentProps<typeof DialogPrimitive.Trigger>;
	className?: string;
}
const Dialog = ({
	children,
	label = "Open Dialog",
	trigger,
	contentProps,
	triggerProps,
	className,
	withoutTrigger,
	...root
}: DialogProps) => {
	const triggerNode = trigger || <Button>{label}</Button>;

	return (
		<Root {...root}>
			{!withoutTrigger && (
				<DialogTrigger asChild={true} {...triggerProps}>
					{triggerNode}
				</DialogTrigger>
			)}
			<DialogContent {...contentProps}>{children}</DialogContent>
		</Root>
	);
};

export { Root, DialogPortal, DialogClose, DialogTrigger, Dialog };
