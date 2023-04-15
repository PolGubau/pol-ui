export interface UseKeyboardShortcutsProps {
  /**
   * key
   * @default ""
   * @type string
   * @example "Control+Shift+P"
   * @description The key to listen for
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  key: string;

  /**
   * action
   * @default () => {}
   * @type Function
   * @example () => { console.log("Hello World") }
   * @description The action to perform when the key is pressed
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */

  action: Function;
}

export interface UseOnScreenOptions {
  /**
   * rootMargin
   * @default "0px"
   * @type string
   * @example "0px 0px 300px 0px"
   *
   *
   * @description Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  rootMargin?: string;
  /**
   * once
   * @default false
   * @type boolean
   * @example true
   * @description Whether to stop observing the element after it has been intersected once.
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  once?: boolean;
}
