import React from 'react';
import {FirstContactTemplate} from '../../../templates/HomePage';
import {useNavigation} from '../../../routes';
import * as S from './styles';

export const Welcome = () => {
  const {useNavigateAuth} = useNavigation();
  const navigation = useNavigateAuth();

  return (
    <FirstContactTemplate mainText="Seja bem vindo!" showBackButton={false}>
      <S.Container>
        <S.EnterButton onPress={() => navigation.navigate('Login')}>
          <S.TextButton>Login</S.TextButton>
        </S.EnterButton>
        <S.EnterButton onPress={() => navigation.navigate('Register')}>
          <S.TextButton>Registrar</S.TextButton>
        </S.EnterButton>
      </S.Container>
    </FirstContactTemplate>
  );
};
