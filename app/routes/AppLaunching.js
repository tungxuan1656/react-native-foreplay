import React, {useEffect, useLayoutEffect} from 'react'
import { useDispatch } from 'react-redux'
import Const from '../constants/Const'
import { GlobalActions } from '../controllers/redux/GlobalSlice'

export default function AppLaunching() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('App Launching')
    // Code run when app starting
  }, [])

  return <></>
}
