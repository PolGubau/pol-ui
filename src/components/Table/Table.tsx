import { TableStyled } from "./Style/TableStyled";
import { TableProps } from "./typed";
import { useNavigate, useLocation } from "react-router-dom";
import TableColumn from "./TableColumn";
import { TbPlus, TbReload } from "react-icons/tb";
import {
  excludeEmptyArray,
  excludeEmptyObject,
  excludeEmptyString,
  excludeNull,
  isThisIconColumn,
  excludeThese,
} from "./utils/functions";
import { useState } from "react";
import React from "react";

const Table = ({
  data,
  columnsExcluded = [],
  iconColumns,
  onReload,
  onCreate,
  title,
}: TableProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataFiltered, setDataFiltered] = useState(data);

  const columns = Object.keys(data[0])
    .filter(excludeNull)
    .filter(excludeEmptyString)
    .filter(excludeEmptyObject)
    .filter(excludeEmptyArray)
    .filter(excludeThese(columnsExcluded));

  const goToThisRow = (row: any) => {
    const value = row.id;
    const pathname = location.pathname;

    const finishPathNameWithSlash = pathname.endsWith("/");

    if (finishPathNameWithSlash) {
      const path = pathname + value;
      navigate(path);
      return;
    } else {
      const path = pathname + "/" + value;
      navigate(path);
      return;
    }
  };

  const filterData = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value === "") return setDataFiltered(data);
    const dataFiltered = data.filter((row) => {
      const rowValues = Object.values(row);
      const rowValuesString = rowValues.join(" ");
      const rowValuesStringLowerCase = rowValuesString.toLowerCase();
      const valueLowerCase = value.toLowerCase();
      return rowValuesStringLowerCase.includes(valueLowerCase);
    });
    setDataFiltered(dataFiltered);
  };
  return (
    <TableStyled>
      <header>
        {title && <h1>{title}</h1>}
        <input
          className="searchInTable"
          type="search"
          placeholder="Search"
          onChange={filterData}
        />
        <section className="actions">
          {onReload && (
            <button onClick={onReload}>
              Reload
              <TbReload />
            </button>
          )}
          {onCreate && (
            <button onClick={onCreate}>
              Create
              <TbPlus />
            </button>
          )}
        </section>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {dataFiltered.length > 0 &&
                columns.map((column) => <th key={column}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataFiltered.map((row, rowIndex) => (
              <tr
                className="row"
                key={rowIndex}
                onClick={() => goToThisRow(row)}
              >
                {columns.map((column, columnIndex) => (
                  <TableColumn
                    value={row[column]}
                    icon={isThisIconColumn(column, iconColumns)}
                    key={`${rowIndex}-${columnIndex}`}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableStyled>
  );
};
export default Table;
