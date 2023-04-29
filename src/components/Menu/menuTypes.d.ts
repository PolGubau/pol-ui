export type SubMenuType = "oneLevel" | "multiple" | "none";

export interface ISubMenuMultiple {
  name: "Global" | "Tenant";
  icon?: any;
  subMenus: ISubMenu[];
}
export interface ISubMenu {
  name: string;
  to: string;
  label: string;
  icon?: string;
}

export interface IMenuItem {
  name: string;
  to?: string;
  icon: any;
  action: any;
  label: string;
  subMenuType: SubMenuType;
  subMenus?: ISubMenu[] | ISubMenuMultiple[];
}
