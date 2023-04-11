// Author: Pol Gubau Amores 2023

import React from "react";
import { GroupStyled } from "./Styled";
import { GroupProps } from "./types";

export type GroupSpace = "none" | "small" | "medium" | "large";

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
