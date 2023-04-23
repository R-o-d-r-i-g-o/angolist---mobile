import * as React from 'react-native';
import {Info} from './../pages/Info';
import {FirstContact} from '../pages/Login/FirstContact';
import {SignIn} from '../pages/Login/SignIn';
import {SignUp} from '../pages/Login/SignUp';
import {Categories} from './../pages/categories';
import {PopupError} from './../components/popupError';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Info: any;
  Login: any;
  SignIn: any;
  SignUp: any;
  PopupInfo: any;
  Categories: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();
export const NavigationOptions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{headerShown: false}}>
        <>
          <Stack.Group>
            <Stack.Screen name={'Login'} component={FirstContact} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'SignUp'} component={SignUp} />

            <Stack.Screen
              name={'PopupInfo'}
              component={PopupError}
              options={{presentation: 'modal'}}
            />
          </Stack.Group>

          {/* need auth */}
          <Stack.Group>
            <Stack.Screen name={'Info'} component={Info} />
            <Stack.Screen name={'Categories'} component={Categories} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
