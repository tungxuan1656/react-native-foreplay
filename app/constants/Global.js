import React from 'react'
import { Text, View } from 'react-native'
import { ModalPortal } from 'react-native-modals'
import { GActionSheetComponent } from '../components/Dialog/GActionSheet'
import { GAlertComponent } from '../components/Dialog/GAlert'
import { GInputAlertComponent } from '../components/Dialog/GInputAlert'
import { GSpinnerComponent } from '../components/Dialog/GSpinner'
import GToast from '../components/Dialog/GToast'


export const GlobalComponents = () => {

  return (
    <>
      <ModalPortal />
      <GToast.GToastComponent/>
      <GActionSheetComponent />
      <GAlertComponent />
      <GInputAlertComponent />
      <GSpinnerComponent/>
    </>
  )
}
