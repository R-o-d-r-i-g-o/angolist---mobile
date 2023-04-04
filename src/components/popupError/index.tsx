import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from './../../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import styled from 'styled-components/native';
import color from './../../utils/colors';
import {Text} from 'react-native';

export const PopupError = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <BaseContainer>
      <Sample>
        <PopUpButton onPress={() => navigation.goBack()}>
          <Text>back for more</Text>
        </PopUpButton>
      </Sample>
    </BaseContainer>
  );
};

const BaseContainer = styled.View`
  margin: auto;
  height: 35%;
  width: 80%;
  background: ${color.baseBrown};
  border-radius: 20px;
`;

const Sample = styled.View`
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const PopUpButton = styled.TouchableOpacity`
  background: yellow;
  padding: 10px 20px;
  border-radius: 10px;
`;
