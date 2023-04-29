import React from "react";
import { IconNameType } from "../../types";
import { IconByName } from "../../utils/IconByName";

interface IconProps {
  icon: React.ReactNode | string;
  onClick: any;
}

const Icon = ({ icon, onClick }: IconProps) => {
  return (
    <div className="icon" onClick={onClick}>
      {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
    </div>
  );
};
export default Icon;
