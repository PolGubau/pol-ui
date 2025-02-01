/**
 * @name isTouchDevice
 * @description Checks if the current device is a touch device
 * @returns A boolean indicating if the current device is a touch device
 * @example
 * const isTouch = isTouchDevice();
 * if (isTouch) {
 *  // do something
 * }
 *  @see https://stackoverflow.com/a/4819886/13188385 - source
 */
export function isTouchDevice(): boolean {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(pointer: coarse)").matches;
}
