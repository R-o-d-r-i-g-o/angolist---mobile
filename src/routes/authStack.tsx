import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {FirstContact} from '../pages/HomePage/Welcome';
import {SignIn} from '../pages/HomePage/Login';
import {SignUp} from '../pages/HomePage/Register';
import {PopupError} from './../components/popupError';

export type RootAuthStackParams = {
  Login: any;
  SignIn: any;
  SignUp: any;
  PopupInfo: any;
};

const Stack = createNativeStackNavigator<RootAuthStackParams>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={FirstContact} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="PopupInfo"
          component={PopupError}
          options={{presentation: 'modal'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const useNavigateAuth = () =>
  useNavigation<NativeStackNavigationProp<RootAuthStackParams>>();
