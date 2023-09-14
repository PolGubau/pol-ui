import { Globals, Global, SelfPosition, ExclusiveSelfPositions, ContentPositions } from "..";

/*
All posibilities for Align Items 
*/
export enum BasicAlign {
	"normal" = "normal",
	"stretch" = "stretch",
}
export type BasicAlignItem = `${BasicAlign}`;

/* Baseline alignment 
align-items: baseline;
align-items: first baseline;
align-items: last baseline;  Overflow alignment (for positional alignment only) 
align-items: safe center;
align-items: unsafe center;
*/
export enum BaselineAlign {
	"baseline" = "baseline",
	"first_baseline" = "first baseline",
	"last_baseline" = "last baseline",
	"safe_center" = "safe center",
	"unsafe_center" = "unsafe center",
}
export type BaselineAlignItem = `${BaselineAlign}`;

// Global values are specified with one of the following keywords: inherit, initial, unset, revert, or none, type and enum in default types file.

// Then:
export const AlignItems = {
	...BasicAlign,
	...ExclusiveSelfPositions,
	...ContentPositions,
	...BaselineAlign,
	...Globals,
};

export type AlignItem = BasicAlignItem | SelfPosition | BaselineAlignItem | Global;
