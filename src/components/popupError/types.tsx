export type popupItemProps = {
  route: {
    params: {
      message: string;
      type: 'warning' | 'reproved' | 'success';
    };
  };
};
