import React, {useLayoutEffect} from 'react'
import {View, Text, Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import {StyleSheet} from 'react-native'
// import { GlobalActions } from '../controllers/redux/GlobalSlice'
// import { store } from '../controllers/redux/AppStore';
import Assets, {Icons} from '../assets/Assets'
import Example from '../modules/Examples/Example'
import ExampleFlatlist from '../modules/Examples/ExampleFlatlist'
import ExampleSubTabs from '../modules/Examples/ExampleSubTabs'
import ExampleFirebaseAuthentication from '../modules/Examples/ExampleFirebaseAuthentication'
import ExampleFirebase from '../modules/Examples/ExampleFirebase'

const Tab = createBottomTabNavigator()

const AppTranslate = t => t

export default function AppTabBar({route}) {
  // const badge = useSelector(state => state.room?.totalUnreadCount)
  // const navigation = useNavigation()

  let screensData = [
    {
      title: 'Example',
      screen: ExampleFlatlist,
      icon: Icons.btn_close,
    },
    {
      title: 'Firebase',
      screen: ExampleFirebase,
      icon: Icons.btn_close,
    },
    {
      title: 'Animated',
      screen: Example,
      icon: Icons.btn_close,
      // badge: badgeMessages,
    },
    {
      title: 'Sub Tabs',
      screen: ExampleSubTabs,
      icon: Icons.btn_close,
    },
    {
      title: 'Tab5',
      screen: Example,
      icon: Icons.btn_close,
    },
  ]

  // useLayoutEffect(() => {
  //   store.dispatch(GlobalActions.setInitScreenName({ name: route?.name }))
  // }, [navigation])

  return (
    <Tab.Navigator
      initialRouteName="Story"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Assets.Colors.burlywood,
          borderTopWidth: 1,
          borderTopColor: Assets.Colors.springgreen,
        },
        tabBarActiveTintColor: Assets.Colors.chocolate,
        tabBarInactiveTintColor: Assets.Colors.grey,
        tabBarItemStyle: {},
      })}>
      {screensData.map(s => (
        <Tab.Screen
          name={s.title}
          component={s.screen}
          key={s.title}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Image
                  source={s.icon}
                  style={{
                    tintColor: focused && color,
                    flex: 0.8,
                    alignItems: 'center',
                    aspectRatio: 1,
                  }}
                />
              </View>
            ),
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  ...styles.title,
                  color,
                }}>
                {AppTranslate(s.title)}
              </Text>
            ),
            tabBarBadge: s.badge ? s.badge : null,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  title: {
    // fontFamily: Global.Font.medium,
    // fontSize: Global.FontSize.smaller,
  },
})
