import React, {useEffect, useLayoutEffect} from 'react'
import { useDispatch } from 'react-redux'
import Const from '../constants/Const'
import { GlobalActions } from '../controllers/redux/GlobalSlice'
import I18n from '../controllers/translate/I18n'

export default function AppLaunching() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('App Launching')
    // Code run when app starting
  }, [])

  useLayoutEffect(() => {
    // current language code: vi
    console.log('Set current Language')
    I18n.changeLanguage('en')
      .then(() => {
        console.log(I18n.language)
      })
      .catch(e => {
        console.log(e)
      })

    dispatch(GlobalActions.changeLanguage({ language: 'vi' }))
  }, [])

  return <></>
}
