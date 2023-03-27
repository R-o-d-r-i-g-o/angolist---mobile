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
  left: 2.4%;
  top: 2%;
  bottom: 7%;
  background: ${color.baseBrown};
  border-radius: 15px;
`;

const Sample = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PopUpButton = styled.TouchableOpacity`
  background: yellow;
  padding: 10px 20px;
  border-radius: 10;
`;
