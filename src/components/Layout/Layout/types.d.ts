export interface ILinks {
  onClick?: () => void;
  text: string;
  href: string;
}
export interface INavBar {
  title?: string;
  links?: ILinks[];
}

export interface LayoutProps {
  children: React.ReactNode;
  navBar?: INavBar;
}
