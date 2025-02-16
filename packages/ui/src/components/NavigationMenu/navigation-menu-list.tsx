"use client";

import { NavigationMenu as N } from "radix-ui";

import { NavigationMenuIndicator } from "./navigation-menu-indicator";
import { cn } from "../../helpers";

const { List } = N;
export interface NavigationMenuListProps
	extends React.ComponentPropsWithoutRef<typeof List> {
	children?: React.ReactNode;
	hasIndicator?: boolean;
	ref?: React.Ref<HTMLUListElement>;
}

export const NavigationMenuList = ({
	className,
	children,
	hasIndicator = true,
	...props
}: NavigationMenuListProps) => (
	<List
		className={cn(
			"group flex flex-1 list-none items-center justify-center space-x-1",
			className,
		)}
		{...props}
	>
		{children}
		{hasIndicator && <NavigationMenuIndicator />}
	</List>
);
