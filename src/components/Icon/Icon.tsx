import React from "react";
import { IconNameType } from "../../types";
import { IconByName } from "../../utils/IconByName";

const Icon = ({ icon }: { icon: React.ReactNode | string }) => {
  return (
    <div className="icon">
      {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
    </div>
  );
};
export default Icon;
