export type PageTemplateProps = {
  mainText?: string;
  children: JSX.Element;
};

export type MenuProps = {
  showContent: boolean;
};

export type MenuItemProps = {
  name: string;
  path: any;
  image: NodeRequire;
};
