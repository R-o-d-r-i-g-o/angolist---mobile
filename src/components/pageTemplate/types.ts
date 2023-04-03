export type PageTemplateProps = {
  mainText?: string;
  children: JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export type MenuProps = {
  showContent: boolean;
};
