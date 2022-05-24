import { fork } from 'redux-saga/effects'
import { ExampleSaga } from '../../modules/ExampleSaga/ExampleSaga'

export default function* rootSaga() {
  yield fork(ExampleSaga)
}