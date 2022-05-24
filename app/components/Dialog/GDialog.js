import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import Assets from '../../assets/Assets'
import Const from '../../constants/Const'

/*
const defaultMoreDialogProps = {
	width: undefined,
	height: undefined,
	modalAnimation: new SlideAnimation({ slideFrom: 'bottom' }),
	animationDuration: undefined,
	hasOverlay: undefined,
	overlayPointerEvents: undefined,
	overlayBackgroundColor: undefined,
	overlayOpacity: undefined,
	rounded: undefined,
	onShow: undefined,
	onDismiss: undefined,
	style: undefined,
	useNativeDriver: undefined,
}
*/

/**
 * This dialog component has default rectangle dark blue layout, with pref width and height
 */
export default GDialog = ({
  children,
	visible,
	onTouchOutside,
	style,
	backHandle,
	moreDialogProps = {},
}) => {
	const { width } = useWindowDimensions()

	return (
		<Modal
			visible={!!visible}
			onTouchOutside={onTouchOutside}
			overlayBackgroundColor="transparent"
			onHardwareBackPress={() => {
				typeof backHandle == 'function' && backHandle()
				return true
			}}
			modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
			{...moreDialogProps}>
			<ModalContent
				style={[styles.defaultContentStyle, { width: width - Const.s4 * 4 }, style]}>
				{children}
			</ModalContent>
		</Modal>
	)
}

GDialog.propTypes = {
	backHandle: PropTypes.func,
	contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
	moreDialogProps: PropTypes.object,
	onTouchOutside: PropTypes.func,
	visible: PropTypes.bool,
}

const styles = StyleSheet.create({
	defaultContentStyle: {
		backgroundColor: Assets.Colors.aquamarine,
		borderColor: Assets.Colors.beige,
		borderRadius: Const.r4,
		justifyContent: 'center',
		borderWidth: Const.b1,
	},
})
