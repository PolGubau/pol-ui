export interface GroupProps {
  /**
   * Children of the group
   */
  children: React.ReactNode;

  /**
   * Should the group be vertical?
   * @default false
   * @type boolean
   * @example <Group vertical />
   * @author pol
   * @version 1.0.0
   */
  vertical?: boolean;

  /**
   * Should the group be full size?
   * @default false
   * @type boolean
   * @example <Group fullSize />
   *  @author pol
   * @version 1.0.0
   */
  fullSize?: boolean;

  /**
   * Should the group be centered?
   * @default false
   * @type boolean
   * @example <Group center />
   * @author pol
   * @version 1.0.0
   * */
  center?: boolean;

  /**
   * How much space should be between the children?
   * @default "none"
   * @type "none" | "small" | "medium" | "large"
   * @example <Group space="medium" />
   * @author pol
   * @version 1.0.0
   * */
  space?: GroupSpace;
}
