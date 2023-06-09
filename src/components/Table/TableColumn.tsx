import { TbCheck, TbForbid2 } from "react-icons/tb";
import Chip from "../Chips/Chip";
import IconField from "./components/IconField";
import React from "react";
import { truncateString } from "../../utils";

interface TableColumnProps {
  value: string;
  icon: null | JSX.Element;
}

const TableColumn = ({ value, icon }: TableColumnProps) => {
  const isIconField = icon ? true : false;

  if (isIconField) {
    return <td>{icon && <IconField icon={icon} value={value} />}</td>;
  }

  switch (typeof value) {
    case "number":
      return <td>{value}</td>;

    case "boolean":
      return (
        <td>
          <Chip className="boolean" boolean={value}>
            {value ? <TbCheck /> : <TbForbid2 />}
          </Chip>
        </td>
      );

    case "object":
      return (
        <td>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </td>
      );

    default:
      return <td>{truncateString(value, 50)}</td>;
  }
};
export default TableColumn;
