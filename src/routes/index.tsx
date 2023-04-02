import * as React from 'react';
import {Info} from './../pages/Info';
import {Categories} from './../pages/categories';
import {ChangeScreenPopUp} from './../components/PopUp/changeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Info: any;
  PopUp: any;
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
          <Stack.Screen
            name={'PopUp'}
            component={ChangeScreenPopUp}
            options={{
              presentation: 'transparentModal',
            }}
          />

          <Stack.Screen
            name={'PopupError'}
            component={ChangeScreenPopUp}
            options={{
              presentation: 'transparentModal',
            }}
          />
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
