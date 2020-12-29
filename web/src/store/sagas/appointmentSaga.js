import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api/api'

import { APPOINTMENT } from '../constants'
import { appointmentAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = appointmentAction.save
const { request, success, failed } = appointmentAction.status

const url = 'appointment'

/* --------------------------------- SAGA middleware --------------------------------- */

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const {} = payload

    const params = []
    const query = {}

    yield put(request())
    // const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    const error = false
    const data = [
      {
        _id        : '5fd5d500d4418b1d15512920',
        speciality : 'mollit',
        name       : 'Matthews Blevins',
        location   : '<SyntaxError: Unexpected identifier>, Vermont',
        date       : 'Tue May 21 1974 08:57:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 2,
      },
      {
        _id        : '5fd7d500d4418b1d15512920',
        speciality : 'mollit',
        name       : 'Matthews Blevins',
        location   : '<SyntaxError: Unexpected identifier>, Vermont',
        date       : 'Tue May 21 1974 08:57:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 0,
      },
      {
        _id        : '5fd7d500e7c53c1fe0f78994',
        speciality : 'sint',
        name       : 'Whitehead Gross',
        location   : '<SyntaxError: Unexpected identifier>, North Carolina',
        date       : 'Wed Jan 13 1993 16:54:02 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 0,
      },
      {
        _id        : '5fd7d5009f8aba0c36e64558',
        speciality : 'Lorem',
        name       : 'Kerri Lancaster',
        location   : '<SyntaxError: Unexpected identifier>, Virgin Islands',
        date       : 'Wed Sep 11 1996 05:20:48 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
        status     : 1,
      },
    ]

    if (!error) {
      yield put(replace({ key: 'appointment_list', data }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

// CODE: Create

function* handleCreate({ payload = {} }) {
  try {
    const { ssn, license_number } = payload

    const body = { ssn, license_number }

    yield put(request())
    // const { data, error } = yield call(Api.create, [ url, { body } ])

    const error = false
    const data = {}

    if (!error) {
      // yield put(addTop({ key: 'appointment_list', data: license_number }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

// CODE: Modify

function* handleModify({ payload = {} }) {
  try {
    const { id, n } = payload

    const params = [ id ]
    const body = { n }

    yield put(request())
    const { data, error } = yield call(Api.modify, [ url, { params, body } ])

    if (!error) {
      yield put(modify({ key: 'appointment', id, data }))
      yield put(success())
    } else throw error
  } catch (error) {
    console.log('function*handleModify -> error', error)
    yield put(failed(error.toString()))
  }
}

// CODE: Remove

function* handleRemove({ payload = {} }) {
  try {
    const { _id } = payload

    const params = [ _id ]

    yield put(request())
    // const { data, error } = yield call(Api.delete, [ url, { params } ])
    const error = false

    if (!error) {
      yield put(remove({ key: 'appointment_list', id: _id }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

function* watch() {
  yield takeLatest(APPOINTMENT.SEND.FETCH, handleFetch)
  yield takeLatest(APPOINTMENT.SEND.CREATE, handleCreate)
  // yield takeLatest(APPOINTMENT.SEND.MODIFY, handleModify)
  yield takeLatest(APPOINTMENT.SEND.REMOVE, handleRemove)
}

export default watch
