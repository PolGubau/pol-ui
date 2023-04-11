export interface ILinks {
  text: string;
  action?: string | null | Function;
}
export interface INavBar {
  title?: string;
  links?: ILinks[];
}

export interface LayoutProps {
  children: React.ReactNode;
  navBar: INavBar | null;
}
