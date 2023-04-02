// Author: Pol Gubau Amores 2023

import { GroupStyled } from "./Styled";

export type GroupSpace = "none" | "small" | "medium" | "large";
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

const Group = ({
  children,
  vertical = false,
  fullSize = false,
  center = false,
  space = "small",
}: GroupProps) => {
  const props = {
    vertical,
    fullSize,
    center,
    space,
  };
  return <GroupStyled props={props}>{children}</GroupStyled>;
};

export default Group;
