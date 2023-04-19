import * as React from 'react';
import {Info} from './../pages/Info';
import {Categories} from './../pages/categories';
import {PopupError} from './../components/popupError';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Info: any;
  PopupInfo: any;
  Categories: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();
export const NavigationOptions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Info'}>
        <Stack.Group screenOptions={{headerShown: false}}>
          {/* normal pages */}
          <Stack.Screen name={'Info'} component={Info} />
          <Stack.Screen name={'Categories'} component={Categories} />

          {/* aux. element */}
          <Stack.Screen
            name={'PopupInfo'}
            component={PopupError}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
