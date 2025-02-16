"use client";

import { NavigationMenu as N } from "radix-ui";

interface NavigationMenuIndicatorProps
	extends React.ComponentPropsWithoutRef<typeof N.Indicator> {
	ref?: React.Ref<HTMLDivElement>;
}

export const NavigationMenuIndicator = ({
	className,
	...props
}: NavigationMenuIndicatorProps) => (
	<N.Indicator
		className={`${className} data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]`}
		{...props}
	>
		<div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-black" />
	</N.Indicator>
);
