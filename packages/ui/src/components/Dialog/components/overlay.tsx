import { Dialog as D } from "radix-ui";
import React from "react";

import { cn } from "../../../helpers";

export const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof D.Overlay>,
	React.ComponentPropsWithoutRef<typeof D.Overlay>
>(({ className, ...props }, ref) => (
	<D.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 backdrop-blur-xs bg-secondary-950/60",
			"data-[state=open]:animate-[fade-in_0.1s_ease-in]",
			"data-[state=closed]:animate-fade-out",
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = D.Overlay.displayName;
