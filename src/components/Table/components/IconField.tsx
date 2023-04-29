import { Icon } from "../../Icon";
import React from "react";

interface IIconField {
  value: string;
  icon: JSX.Element;
}

const IconField = ({ value, icon }: IIconField) => {
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleClickIcon = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    copyToClipboard(value);
  };

  return <Icon onClick={handleClickIcon} icon={icon} />;
};
export default IconField;
