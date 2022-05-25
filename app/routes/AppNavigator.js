import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { createRef } from 'react'
import Example from '../modules/Examples/Example'
import Home from '../modules/Home/Home'
import Playing from '../modules/Playing/Playing'

const Stack = createNativeStackNavigator()
export const appNavigationRef = createRef()

export default function AppNavigator() {
  return (
    <NavigationContainer ref={appNavigationRef} theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Playing" component={Playing} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
