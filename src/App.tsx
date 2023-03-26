import * as React from 'react';
import {Home} from './pages/home';
import {ChangeScreenPopUp} from './components/PopUp/changeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: any;
  PopUp: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();
export const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Group screenOptions={{headerShown: false}}>
        {/* normal pages */}
        <Stack.Screen name={'Home'} component={Home} />

        {/* change screan menu */}
        <Stack.Screen
          name={'PopUp'}
          component={ChangeScreenPopUp}
          options={{
            presentation: 'card',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);
