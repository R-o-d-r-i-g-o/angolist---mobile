import React from 'react-native';
import {FirstContactTemplate} from '../../../templates/firstContactTemplate';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes';

export const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <FirstContactTemplate mainText="Realizar cadastro" showBackButton>
      <S.PageContainer>
        <S.InputContainer>
          <S.Label>Nome</S.Label>
          <S.InputInfo />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>E-mail</S.Label>
          <S.InputInfo />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Senha</S.Label>
          <S.InputInfo />
        </S.InputContainer>
        <S.EnterButton
          onPress={() => navigation.navigate('Info')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 10}}
          customWidth={60}>
          <S.TextButton>Registrar</S.TextButton>
        </S.EnterButton>
      </S.PageContainer>
    </FirstContactTemplate>
  );
};
