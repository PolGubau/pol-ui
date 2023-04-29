interface IconColumn {
  name: string;
  icon: JSX.Element;
}
interface DataMustHaveName {
  name: string;
}
interface Data extends DataMustHaveName {
  [key: string]: any;
}

export interface TableProps {
  data: Data[];
  columnsExcluded?: string[];
  iconColumns?: IconColumn[];
  onRowClick?: (row: any) => void;
  onReload?: () => void;
  onCreate?: () => void;
  title?: string;
}
