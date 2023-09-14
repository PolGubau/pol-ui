import { Global, Globals } from "..";

// Basic justification for flexbox
export enum BaseJustifies {
	"left" = "left",
	"right" = "right",
	"normal" = "normal",
}

export type BaseJustify = `${BaseJustifies}`;

// Content distribution

export enum ContentDistributions {
	"around" = "space-around",
	"between" = "space-between",
	"evenly" = "space-evenly",
	"stretch" = "stretch",
}

export type ContentDistribution = `${ContentDistributions}`;

/* Self position 
 does not take left and right values 
 center;  Pack items around the center 
 start;  Pack items from the start 
 end; Pack items from the end 
 flex-start;  Pack flex items from the start 
 flex-end; Pack flex items from the end */
export enum ContentPositions {
	"center" = "center",
	"end" = "end",
	"flex-end" = "flex-end",
	"flex-start" = "flex-start",
	"start" = "start",
}

export type ContentPosition = `${ContentPositions}`;

/* self-start; Pack flex items from the start 
 self-end;  Pack flex items from the end */

export enum ExclusiveSelfPositions {
	"self-end" = "self-end",
	"self-start" = "self-start",
}
export type ExclusiveSelfPosition = `${ExclusiveSelfPositions}`;

export type SelfPosition = ExclusiveSelfPosition | ContentPosition;
/* 
·
·
·
·
Flex justify content types and anotations: 
*/
export const JustifyContents = {
	...BaseJustifies,
	...ContentDistributions,
	...ContentPositions,
	...Globals,
};
export type JustifyContent = Global | ContentDistribution | ContentPosition | BaseJustify;

/* 
·
·
·
·
Flex direction types and anotations: 
*/
export enum FlexDirections {
	"row" = "row",
	"column" = "column",
	"rowReverse" = "row-reverse",
	"columnReverse" = "column-reverse",
}
export type FlexDirection = `${FlexDirections}`;
export interface IFlexDirection {
	direction?: FlexDirection;
}
/* 
·
·
·
·
Flex Wrap types and anotations: 
*/
export enum FlexWraps {
	"nowrap" = "nowrap",
	"wrap" = "wrap",
	"wrapReverse" = "wrap-reverse",
}
export type FlexWrap = `${FlexWraps}`;
export interface IFlexWrap {
	wrap?: FlexWrap;
}
