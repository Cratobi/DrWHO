import { all } from 'redux-saga/effects'

import doctorSaga from './doctorSaga'

export default function* rootSaga() {
  yield all([ doctorSaga() ])
}
