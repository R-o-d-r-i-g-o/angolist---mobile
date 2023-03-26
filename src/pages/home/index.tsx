import React from 'react';
// import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../App';

export const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Text>teshthjhs</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
        <Text>show pop up</Text>
      </TouchableOpacity>
    </View>
  );
};

// const BaseContainer = styled.View`
//   background: red;
//   padding: 10px 20px;
//   border-radius: 10px;
// `;

// const HomeButton = styled.TouchableOpacity`
//   flex: 1;
//   background: blue;
//   align-items: center;
//   justify-content: center;
// `;
