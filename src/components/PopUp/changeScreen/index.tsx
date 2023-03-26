import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
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
  right: ${SCREEN_WIDTH * 0.05}px;
  left: ${SCREEN_WIDTH * 0.05}px;
  top: ${SCREEN_HEIGHT * 0.2}px;
  bottom: 0;
  background: blue;
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
