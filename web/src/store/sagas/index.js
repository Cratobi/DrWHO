import { all } from 'redux-saga/effects'

import doctorSaga from './doctorSaga'
import userSaga from './userSaga'
import appointmentSaga from './appointmentSaga'
import reviewSaga from './reviewSaga'

export default function* rootSaga() {
  yield all([ doctorSaga(), userSaga(), appointmentSaga(), reviewSaga() ])
}
