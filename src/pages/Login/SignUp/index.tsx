import React, {useState} from 'react';
import {FirstContactTemplate} from '../../../templates/firstContactTemplate';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes';

type registerNewUser = {
  username: string;
  password: string;
  email: string;
};

export const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [newUser, setNewUser] = useState<registerNewUser>(
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
