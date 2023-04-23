import React from 'react-native';
import {FirstContactTemplate} from '../../../templates/firstContactTemplate';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes';

export const FirstContact = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <FirstContactTemplate mainText="Seja bem vindo!" showBackButton={false}>
      <S.Container>
        <S.EnterButton onPress={() => navigation.navigate('SignIn')}>
          <S.TextButton>Login</S.TextButton>
        </S.EnterButton>
        <S.EnterButton onPress={() => navigation.navigate('SignUp')}>
          <S.TextButton>Registrar</S.TextButton>
        </S.EnterButton>
      </S.Container>
    </FirstContactTemplate>
  );
};
