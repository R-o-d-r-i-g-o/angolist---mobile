import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './../../routes';
import {useModalProps} from './types';
import {useNavigation} from '@react-navigation/native';

export const useModal = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return ({modelType, warningText}: useModalProps) => {
    navigation.navigate('PopupInfo', {
      type: modelType,
      message: warningText,
    });
  };
};
