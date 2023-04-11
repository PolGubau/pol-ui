export interface ILinks {
  text: string;
  action?: string | null | Function;
}

export interface LayoutProps {
  children: React.ReactNode;
  navBar?: INavBar;
}
