import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import color from './../../../utils/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './../../../App';

export const ChangeScreenPopUp = () => {
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
  position: absolute;
  right: 20%;
  left: 4.3%;
  top: 1.5%;
  bottom: 7%;
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
