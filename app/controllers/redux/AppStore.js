import { Store } from 'redux'
import { appReducers } from './AppSlice'
import createSagaMiddleware from 'redux-saga'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import { createBlacklistFilter, createWhitelistFilter } from 'redux-persist-transform-filter'

// saga
import rootSaga from './AppSaga'
import { configureStore } from '@reduxjs/toolkit'
const sagaMiddleware = createSagaMiddleware()

function logger({ getState, dispatch }) {
	return next => action => {
		console.log('[Redux Logger Middleware-Update State]\n', action.type, action.payload)
		const returnValue = next(action)
		return returnValue
	}
}

const middleware = [thunk, logger, sagaMiddleware]
const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	transforms: [
	  createWhitelistFilter('discover', ['members']),
	  createBlacklistFilter('account', ['NetworkState']),
	],
	whitelist: ['config', 'global'],
}

/**
 * @param {Store} store
 */
export const store = configureStore({
  reducer: persistReducer(persistConfig, appReducers),
  devTools: process.env.NODE_ENV !== 'production',
	middleware: middleware,
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store, {}, () => {})
