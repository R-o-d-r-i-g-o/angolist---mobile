import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {HowToUse} from '../pages/HowToUse';
import {Categories} from '../pages/Categories';

export type RootAppStackParams = {
  HowToUse: any;
  Categories: any;
};

const Stack = createNativeStackNavigator<RootAppStackParams>();

export const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HowToUse" component={HowToUse} />
    <Stack.Screen name="Categories" component={Categories} />
  </Stack.Navigator>
);

export const useNavigateApp = () =>
  useNavigation<NativeStackNavigationProp<RootAppStackParams>>();
