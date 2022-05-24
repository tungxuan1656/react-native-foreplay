import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Dimensions, Keyboard, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Assets from '../../assets/Assets'
import Const from '../../constants/Const'
import GDialog from './GDialog'

const GActionSheetRef = createRef()
const width = Dimensions.get('window').width

export default {
	/**
	 * show actionSheet
   * @param {Object} options
	 * @param {[{text: string, icon: source, onPress: function, type: 'cancel'|'default'}]} options.actions array of {text, icon, onPress, type: 'cancel'|undefined}
	 * @param {(index) => void} options.didPress (index) => void
	 */
	show: ({actions, didPress}) => {
		Keyboard.dismiss()
		GActionSheetRef.current?.show({actions, didPress})
	},
	hide: () => GActionSheetRef.current?.hide(),
}

export const GActionSheetComponent = () => {
	const [actions, setActions] = useState([])
	const [showModal, setShowModal] = useState(false)
	// callback index did press
	const didPressRef = useRef()

	useLayoutEffect(() => {
		GActionSheetRef.current = {
			show: ({actions, didPress}) => {
				Array.isArray(actions) && setActions(actions)
				setShowModal(true)
				if (typeof didPress === 'function') {
					didPressRef.current = onPress
				} else {
					didPressRef.current = null
				}
			},
			hide: () => setShowModal(false),
		}
	}, [])

	const onActionPress = ({ index, onPress }) => {
		typeof onPress === 'function' && setTimeout(() => onPress())
		typeof didPressRef.current === 'function' && didPressRef.current(index)
		setShowModal(false)
	}

	return (
		<GDialog
			backHandle={() => setShowModal(false)}
			visible={showModal}
			onTouchOutside={() => setShowModal(false)}
			moreDialogProps={{
				style: {
					justifyContent: 'flex-end',
				},
				rounded: false,
			}}
			style={[styles.content, { paddingBottom: useSafeAreaInsets().bottom }]}>
			{actions.map((item, index) => {
				return (
					item && (
						<TouchableOpacity
							key={index}
							style={item.type === 'cancel' ? styles.actionCancel : styles.actionDefault}
							onPressOut={() => onActionPress({ index, onPress: item.onPress })}>
							{item.icon && (
								<Image
									source={item.icon}
									resizeMode="center"
									style={{ width: 22, marginRight: Const.s4 }}
								/>
							)}
							<Text numberOfLines={1} style={[{ flexShrink: 1 }]}>
								{item.text}
							</Text>
						</TouchableOpacity>
					)
				)
			})}
		</GDialog>
	)
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: '#e3e2d1',
		borderColor: undefined,
		borderWidth: undefined,
		paddingTop: Const.padding_4,
		borderRadius: 0,
		width: Math.max(width, Dimensions.get('screen').width),
	},
	actionDefault: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 30,
		flexShrink: 1,
	},
	actionCancel: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 30,
		flexShrink: 1,
		borderTopColor: Assets.Colors.springgreen,
		borderTopWidth: Const.b2,
	},
})
