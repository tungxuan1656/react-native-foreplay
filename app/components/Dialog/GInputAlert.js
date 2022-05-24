import React, { createRef, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import _ from 'lodash'
import Const from '../../constants/Const'
import Assets from '../../assets/Assets'
import GDialog from './GDialog'

const GInputAlertRef = createRef()

export default {
	/**
	 * Show Alert
	 * @param {object} options
	 * @param {string=} options.title
	 * @param {string|JSX.Element} options.message
	 * @param {[{placeHolder: string, onChangeText: (text) => void, inputProperties: object}]} options.inputFields
	 * @param {[{text: string, type: 'cancel'|'default', onPress: () => void}]} options.actions
	 * @param {() => void} options.onClose
	 */
	show: ({ title, message, inputFields, actions, onClose }) => {
		Keyboard.dismiss()
		GInputAlertRef.current?.show({ title, message, inputFields, actions, onClose })
	},
	hide: () => {
		GInputAlertRef.current?.hide()
	},
}

export function GInputAlertComponent() {
	const [visible, setVisible] = useState(false)
	const [title, setTitle] = useState(undefined)
	const [message, setMessage] = useState(undefined)
	const [actions, setActions] = useState([])
	const [inputFields, setInputFields] = useState([])

	const onCloseRef = useRef(null)

	useLayoutEffect(() => {
		GInputAlertRef.current = {
			show: ({ title = '', message = '', inputFields = [], actions = [], onClose }) => {
				setTitle(title)
				setMessage(message)
				setActions(actions)
				setInputFields(inputFields)
				if (typeof onClose === 'function') onCloseRef.current = onClose
				else onCloseRef.current = null

				setVisible(true)
			},
			hide: () => setVisible(false),
		}
	}, [])

	const onCloseDialog = () => {
		if (typeof onCloseRef.current === 'function') onCloseRef.current()
		setVisible(false)
	}

	return (
		<GDialog backHandle={onCloseDialog} visible={visible} onTouchOutside={onCloseDialog}>
			{!!title && <Text style={styles.defaultTitleStyle}>{title}</Text>}
			{!!message &&
				(typeof message === 'string' ? (
					<Text style={[styles.defaultMessageStyle]}>{message}</Text>
				) : (
					message
				))}
			<View style={styles.defaultButtonHoldersStyle}>
				{Array.isArray(inputFields) &&
					inputFields.map((input, index) => {
						return (
							<View key={index}>
								<TextInput
									placeholder={input?.placeHolder ?? ''}
									onChangeText={
										typeof input?.onChangeText === 'function' ? input?.onChangeText : null
									}
									{...input?.inputProperties}></TextInput>
							</View>
						)
					})}
			</View>
			<View style={styles.defaultButtonHoldersStyle}>
				{Array.isArray(actions) &&
					actions.map((action, index) => {
						const style =
							action.type === 'cancel' ? styles.cancelButtonStyle : styles.defaultButtonStyle
						const textStyle =
							action.type === 'cancel'
								? styles.cancelButtonTextStyle
								: styles.defaultButtonTextStyle

						return (
							<TouchableOpacity
								style={style}
								onPress={() => {
									if (typeof action.onPress === 'function') action.onPress()
									onCloseDialog()
								}}
								key={index}>
								<Text style={textStyle}>{action.text}</Text>
							</TouchableOpacity>
						)
					})}
			</View>
		</GDialog>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	buttonStyle: {
		flex: 1,
		height: 30,
		borderRadius: Const.r6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	defaultButtonStyle: {
		backgroundColor: Assets.Colors.aqua,
	},
	defaultTitleStyle: {
		// ...Styles.Text.heading1,
		textAlign: 'center',
		marginBottom: Const.s4,
	},
	defaultMessageStyle: {
		// ...Styles.Text.bodyDialog,
		textAlign: 'center',
	},
	cancelButtonStyle: {
		borderWidth: Const.b1,
		borderColor: Assets.Colors.lightcoral,
	},
	defaultButtonTextStyle: {
		// ...Styles.Text.title,
		color: Assets.Colors.brown,
	},
	cancelButtonTextStyle: {
		// ...Styles.Text.title,
	},
	defaultButtonHoldersStyle: {
		marginTop: Const.s4,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
