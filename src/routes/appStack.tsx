import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Info} from './../pages/Info';
import {Categories} from './../pages/categories';

export type RootAppStackParams = {
  Info: any;
  Categories: any;
};

const Stack = createNativeStackNavigator<RootAppStackParams>();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Info'} component={Info} />
      <Stack.Screen name={'Categories'} component={Categories} />
    </Stack.Navigator>
  );
};

export const useNavigateApp = () =>
  useNavigation<NativeStackNavigationProp<RootAppStackParams>>();
