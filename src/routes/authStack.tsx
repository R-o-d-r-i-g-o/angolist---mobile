import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Welcome} from '../pages/HomePage/Welcome';
import {Login} from '../pages/HomePage/Login';
import {Register} from '../pages/HomePage/Register';
import {PopupError} from './../components/popupError';

export type RootAuthStackParams = {
  Login: any;
  Welcome: any;
  Register: any;
  PopupInfo: any;
};

const Stack = createNativeStackNavigator<RootAuthStackParams>();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Welcome">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen
      name="PopupInfo"
      component={PopupError}
      options={{presentation: 'modal'}}
    />
  </Stack.Navigator>
);

export const useNavigateAuth = () =>
  useNavigation<NativeStackNavigationProp<RootAuthStackParams>>();
