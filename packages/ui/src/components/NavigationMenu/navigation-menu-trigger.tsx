"use client";
import { NavigationMenu as N } from "radix-ui";

import { type ComponentProps, type FC, forwardRef } from "react";
import { TbChevronDown } from "react-icons/tb";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { NavigationMenuTriggerTheme } from "./theme";

type RefElement = React.ElementRef<typeof N.Trigger>;

export interface NavigationMenuTriggerProps
	extends React.ComponentPropsWithoutRef<typeof N.Trigger> {
	theme?: DeepPartial<NavigationMenuTriggerTheme>;
	icon?: FC<ComponentProps<"svg">>;
}

export const NavigationMenuTrigger = forwardRef<
	RefElement,
	NavigationMenuTriggerProps
>(
	(
		{
			className,
			children,
			icon: Icon = TbChevronDown,
			theme: customTheme = {},
			...props
		},
		ref,
	) => {
		const theme = mergeDeep(getTheme().navigationMenu.trigger, customTheme);

		return (
			<N.Trigger ref={ref} className={cn(theme.base, className)} {...props}>
				{children}
				<Icon className={theme.icon} aria-hidden="true" />
			</N.Trigger>
		);
	},
);
NavigationMenuTrigger.displayName = N.Trigger.displayName;
