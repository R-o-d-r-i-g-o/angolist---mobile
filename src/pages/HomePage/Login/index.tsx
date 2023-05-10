import React, {useState} from 'react';
import {FirstContactTemplate} from '../../../templates/HomePage';
import {useAuth} from '../../../context/Auth';
import {useNavigateApp} from '../../../routes/appStack';
import * as S from './styles';

type InitialValues = {
  username: string;
  password: string;
};

export const Login = () => {
  const [loginForm, setLoginForm] = useState<InitialValues>(
    {} as InitialValues,
  );
  const navigation = useNavigateApp();
  const {signIn} = useAuth();

  return (
    <FirstContactTemplate mainText="Realizar login" showBackButton>
      <S.PageContainer>
        <S.InputContainer>
          <S.Label>Nome</S.Label>
          <S.InputInfo
            onChangeText={(value: string) =>
              setLoginForm({...loginForm, username: value})
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Senha</S.Label>
          <S.InputInfo
            secureTextEntry
            onChangeText={(value: string) =>
              setLoginForm({...loginForm, password: value})
            }
          />
        </S.InputContainer>
        <S.EnterButton
          onPress={() => {
            signIn(loginForm.username, loginForm.password);
            navigation.navigate('HowToUse');
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 10}}
          customWidth={60}>
          <S.TextButton>Entrar</S.TextButton>
        </S.EnterButton>
      </S.PageContainer>
    </FirstContactTemplate>
  );
};
