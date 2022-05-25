import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Assets from '../../assets/Assets'
import Const from '../../constants/Const'
import Styles from '../../constants/Styles'
import {
  generateColor,
  generateDarkColorHex,
  getRandomInt,
  generateLightColorHex,
} from '../../utils/Utils'
import RNSystemSounds from '@dashdoc/react-native-system-sounds'
import CardsConfig from '../Home/CardsConfig'
import _ from 'lodash'
import { FontSize } from '../../assets/AppFont'

const Playing = (props) => {
  const [currentCard, setCurrentCard] = useState('')
  const [cardColor, setCardColor] = useState('#123123')
  const [textColor, setTextColor] = useState('#ffffff')
  const [timeRemain, setTimeRemain] = useState(180)
  const allCards = Object.values(CardsConfig.allCards)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemain((time) => {
        if (time > 0) return time - 1
        else return time
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timeRemain === 0) {
      Alert.alert('Thông Báo', 'Đã hết thời gian')
      RNSystemSounds.play(
        Platform.select({
          android: RNSystemSounds.AndroidSoundIDs.TONE_CDMA_ABBR_ALERT,
          ios: RNSystemSounds.iOSSoundIDs.SMSReceived_Alert16,
        }),
      )
    }
  }, [timeRemain])

  const diceCard = () => {
    setCardColor(generateDarkColorHex())
    setTextColor(generateLightColorHex())
    setTimeRemain(180)
    setCurrentCard(allCards[getRandomInt(allCards.length)])
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View style={[styles.containerCard]}>
          <TouchableWithoutFeedback onPress={diceCard}>
            <View style={[styles.card, { backgroundColor: cardColor }]}>
              <Text style={[styles.textCard, { color: textColor }]}>{currentCard}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
        <View style={styles.viewTime}>
          <Text style={styles.textTime}>{moment.utc(timeRemain * 1000).format('mm:ss')}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Playing

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Const.s5,
    flex: 1,
  },
  containerCard: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    aspectRatio: 0.7,
    alignSelf: 'center',
    borderRadius: Const.r8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCard: {
    ...Styles.Text.title,
    margin: Const.s7,
    textAlign: 'center',
    fontSize: FontSize.x_large,
    lineHeight: 28,
  },
  viewTime: {
    width: 100,
    height: 50,
    backgroundColor: Assets.Colors.backgroundBlue,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Const.r5,
    marginBottom: Const.s10,
  },
  textTime: {
    ...Styles.Text.title,
    color: Assets.Colors.textBlue,
  },
})
