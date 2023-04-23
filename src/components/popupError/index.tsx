import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from './../../routes';
import * as S from './styles';
import {popupItemProps} from './types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export const PopupError = (props: popupItemProps) => {
  const {type, message} = props.route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [model] = React.useState({
    warning: {
      title: 'Aviso',
      Image: require('./../../assets/notify/warning.png'),
    },
    success: {
      title: 'Sucesso',
      Image: require('./../../assets/notify/success.png'),
    },
    reproved: {
      title: 'Reprovado',
      Image: require('./../../assets/notify/prohibition.png'),
    },
  });

  return (
    <S.BaseContainer>
      <S.SignalImage source={model[type].Image} />
      <S.Title>{model[type].title}</S.Title>
      <S.Message>{message}</S.Message>
      <S.PopUpButton onPress={() => navigation.goBack()}>
        <S.ButtonCTA>Entendi</S.ButtonCTA>
      </S.PopUpButton>
    </S.BaseContainer>
  );
};
