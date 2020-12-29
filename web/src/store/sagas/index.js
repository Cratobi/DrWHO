import { all } from 'redux-saga/effects'

import doctorSaga from './doctorSaga'
import userSaga from './userSaga'
import appointmentSaga from './appointmentSaga'

export default function* rootSaga() {
  yield all([ doctorSaga(), userSaga(), appointmentSaga() ])
}
