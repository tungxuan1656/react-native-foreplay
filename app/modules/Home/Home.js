import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontSize } from '../../assets/AppFont'
import Const from '../../constants/Const'
import Styles from '../../constants/Styles'
import CardsConfig from './CardsConfig'
import Assets from '../../assets/Assets'
import { useNavigation } from '@react-navigation/native'

const Home = (props) => {
  const rules = CardsConfig.rules
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>{'Luật Chơi'}</Text>
        <Text numberOfLines={0} style={styles.rules}>
          {rules}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Playing')
        }}>
          <Text style={styles.textStart}>{'Bắt đầu chơi'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Const.s5,
  },
  header: {
    ...Styles.Text.largeTitle,
    alignSelf: 'center',
    marginVertical: Const.s5,
  },
  rules: {
    ...Styles.Text.body,
    fontSize: FontSize.large,
    textAlign: 'justify',
    lineHeight: 24,
  },
  button: {
    height: 50,
    borderRadius: Const.r5,
    width: '100%',
    backgroundColor: Assets.Colors.backgroundBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStart: {
    ...Styles.Text.heading2,
    color: Assets.Colors.textBlue,
  },
})
