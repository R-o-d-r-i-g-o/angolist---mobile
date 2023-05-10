import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {HowToUse} from '../pages/HowToUse';
import {Categories} from '../pages/Categories';
import {Profile} from '../pages/Profile';
import {Settings} from '../pages/Settings';
import {SkillRanks} from '../pages/SkillRanks';

export type RootAppStackParams = {
  Profile: any;
  Settings: any;
  HowToUse: any;
  Categories: any;
  SkillRanks: any;
};

const Stack = createNativeStackNavigator<RootAppStackParams>();

export const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HowToUse" component={HowToUse} />
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="SkillRanks" component={SkillRanks} />
  </Stack.Navigator>
);

export const useNavigateApp = () =>
  useNavigation<NativeStackNavigationProp<RootAppStackParams>>();
