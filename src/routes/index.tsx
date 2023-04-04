import * as React from 'react';
import {Info} from './../pages/Info';
import {Categories} from './../pages/categories';
import {PopupError} from './../components/popupError';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Info: any;
  PopupError: any;
  Categories: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();
export const NavigationOptions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Categories'}>
        <Stack.Group screenOptions={{headerShown: false}}>
          {/* normal pages */}
          <Stack.Screen name={'Info'} component={Info} />
          <Stack.Screen name={'Categories'} component={Categories} />

          {/* change screan menu */}
          <Stack.Screen name={'PopupError'} component={PopupError} />

          {/* <Stack.Screen name={'PopupError'} component={PopupError} /> */}
          {/* <Stack.Screen
            name={'PopUp'}
            component={ChangeScreenPopUp}
            options={{
              presentation: 'transparentModal',
            }}
          /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
