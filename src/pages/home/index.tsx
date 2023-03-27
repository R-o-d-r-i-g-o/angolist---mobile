import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../App';
import color from './../../utils/colors';

export const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <FullScreen>
      <MenuOption>
        <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
          <Text>icon</Text>
        </TouchableOpacity>
      </MenuOption>
      <EmptyView />
      <BaseContainer>
        <Text>teshthjhs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
          <Text>show pop up</Text>
        </TouchableOpacity>
      </BaseContainer>
    </FullScreen>
  );
};

const FullScreen = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MenuOption = styled.View`
  margin: 16px 10px;
  width: 35%;
  height: 30%;
  display: flex;
  position: absolute;
  background: ${color.baseBrown};
  border-radius: 10px;
  padding: 20px;
  border-radius: 15px;
  z-index: -1;
`;

const EmptyView = styled(MenuOption)`
  width: 70%;
  right: 0px;
  bottom: 0px;
`;

const BaseContainer = styled.View`
  margin: 100px 25px 0px;
  background: ${color.baseOrange};
  height: 80%;
  padding: 50px 20px;
  border-radius: 10px;
`;
