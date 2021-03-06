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
    const { ssn, license_number } = payload

    const params = []
    const query = { ssn, license_number }

    yield put(request())
    const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

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
    const { data, error } = yield call(Api.create, [ url, { body } ])

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
    const { id_appointment, is_accepted } = payload

    const params = []
    const body = { id_appointment, is_accepted }

    yield put(request())
    const { data, error } = yield call(Api.modify, [ url, { params, body } ])

    if (!error) {
      yield put(
        modify({
          key  : 'appointment_list',
          id   : id_appointment,
          data : {
            id_appointment,
            is_accepted,
          },
        })
      )
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
  yield takeLatest(APPOINTMENT.SEND.MODIFY, handleModify)
  yield takeLatest(APPOINTMENT.SEND.REMOVE, handleRemove)
}

export default watch
