import React from "react";
import { IconByName, IconNameType } from "utils";

const Icon = ({ icon }: { icon: React.ReactNode | string }) => {
  return (
    <div className="icon">
      {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
    </div>
  );
};
export default Icon;
