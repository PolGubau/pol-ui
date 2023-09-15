// Justify items for grid

import {
	Globals,
	BaseJustifies,
	BaseJustify,
	SelfPosition,
	ExclusiveSelfPositions,
	ContentPositions,
} from ".";

enum ExclusiveJustifyItems {
	"baseline" = "baseline",
	"legacy" = "legacy",
	"stretch" = "stretch",
}
export const JustifyItems = {
	...ExclusiveJustifyItems,
	...Globals,
	...ExclusiveSelfPositions,
	...ContentPositions,
	...BaseJustifies,
};

export type JustifyItem = Global | SelfPosition | BaseJustify | "baseline" | "legacy" | "stretch";

// Justify self
export type JustifySelf = Global | SelfPosition | "auto" | "baseline" | BaseJustify | "stretch";
