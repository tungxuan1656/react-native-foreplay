import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createRef } from 'react';
import { View } from 'react-native';
import Example from '../modules/Examples/Example';
import ExampleHook from '../modules/Examples/ExampleHook';
import ExampleContextHook from '../modules/Examples/ExampleContextHook';
import ExampleFont from '../modules/Examples/ExampleFont';
import ExampleTranslate from '../modules/Examples/ExampleTranslate';
// import { store } from '../controllers/redux/AppStore'
import AppTabBar from './AppTabBar';
import ExampleTextStyle from '../modules/Examples/ExampleTextStyle';
import ExampleViewStyle from '../modules/Examples/ExampleViewStyle';
import ExampleLayoutStyle from '../modules/Examples/ExampleLayoutStyle';
import ExampleImageStyle from '../modules/Examples/ExampleImageStyle';
import ExampleShadowStyle from '../modules/Examples/ExampleShadowStyle';
import ExampleSagaScreen from '../modules/ExampleSaga/ExampleSagaScreen';
import ExampleDialog from '../modules/Examples/ExampleDialog';
import ExamplePermission from '../modules/Examples/ExamplePermissions';
import ExampleImagePicker from '../modules/Examples/ExampleImagePicker';
import ExampleAsyncStorage from '../modules/Examples/ExampleAsyncStorage';
import ExamplePanGesture from '../modules/Examples/ExamplePanGesture';
import ExampleFirebaseAuthentication from '../modules/Examples/ExampleFirebaseAuthentication';

const Stack = createNativeStackNavigator();
export const appNavigationRef = createRef();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={appNavigationRef} theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="AppTabBar" component={AppTabBar} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="ExampleFont" component={ExampleFont} />
        <Stack.Screen name="ExampleTranslate" component={ExampleTranslate} />
        <Stack.Screen name="ExampleHook" component={ExampleHook} />
        <Stack.Screen
          name="ExampleContextHook"
          component={ExampleContextHook}
        />
        <Stack.Screen name="ExampleTextStyle" component={ExampleTextStyle} />
        <Stack.Screen name="ExampleViewStyle" component={ExampleViewStyle} />
        <Stack.Screen
          name="ExampleLayoutStyle"
          component={ExampleLayoutStyle}
        />
        <Stack.Screen name="ExampleImageStyle" component={ExampleImageStyle} />
        <Stack.Screen
          name="ExampleShadowStyle"
          component={ExampleShadowStyle}
        />
        <Stack.Screen name='ExampleSagaScreen' component={ExampleSagaScreen} />
        <Stack.Screen name='ExampleDialog' component={ExampleDialog} />
        <Stack.Screen name='ExamplePermissions' component={ExamplePermission} />
        <Stack.Screen name='ExampleImagePicker' component={ExampleImagePicker} />
        <Stack.Screen name='ExampleAsyncStorage' component={ExampleAsyncStorage} />
        <Stack.Screen name='ExamplePanGesture' component={ExamplePanGesture} />
        <Stack.Screen name='ExampleFirebaseAuthentication' component={ExampleFirebaseAuthentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
