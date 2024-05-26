import React from 'react';
import {FirstContactTemplate} from '../../../templates/HomePage';
import {useNavigation} from '../../../routes';
import * as S from './styles';

type registerNewUser = {
  username: string;
  password: string;
  email: string;
};

export const Register = () => {
  const {useNavigateApp} = useNavigation();
  const navigation = useNavigateApp();

  const [newUser, setNewUser] = React.useState<registerNewUser>(
    {} as registerNewUser,
  );

  return (
    <FirstContactTemplate mainText="Realizar cadastro" showBackButton>
      <S.PageContainer>
        <S.InputContainer>
          <S.Label>Nome</S.Label>
          <S.InputInfo
            onChangeText={(value: string) =>
              setNewUser({...newUser, username: value})
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>E-mail</S.Label>
          <S.InputInfo
            onChangeText={(value: string) =>
              setNewUser({...newUser, email: value})
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Senha</S.Label>
          <S.InputInfo
            secureTextEntry
            onChangeText={(value: string) =>
              setNewUser({...newUser, password: value})
            }
          />
        </S.InputContainer>
        <S.EnterButton
          onPress={() => navigation.navigate('HowToUse')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 10}}
          customWidth={60}>
          <S.TextButton>Registrar</S.TextButton>
        </S.EnterButton>
      </S.PageContainer>
    </FirstContactTemplate>
  );
};
