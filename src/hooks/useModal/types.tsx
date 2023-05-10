import {popupItemProps} from './../../components/popupError/types';

type item = popupItemProps['route']['params'];

export type useModalProps = {
  modelType: item['type'];
  warningText: item['message'];
};
