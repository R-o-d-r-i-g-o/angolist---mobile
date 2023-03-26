import * as React from 'react';
import {Home} from './pages/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);
