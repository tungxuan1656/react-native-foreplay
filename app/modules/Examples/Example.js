import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {generateColor} from '../../utils/Utils'

const Example = () => {
  const navigation = useNavigation()

  return (
    <View style={{backgroundColor: generateColor(), flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExampleFont')
        }}>
        <Text>Example font</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExampleTranslate')
        }}>
        <Text>Example Translate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Example
