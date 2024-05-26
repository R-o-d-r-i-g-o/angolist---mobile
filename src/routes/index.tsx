import React from 'react';
import {useAuth} from '../context/Auth';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack, useNavigateAuth} from './authStack';
import {AppStack, useNavigateApp} from './appStack';

export const useNavigation = () => ({useNavigateApp, useNavigateAuth});

export const NavigationOptions = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
