import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api/api'

import { USER } from '../constants'
import { doctorAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = doctorAction.save
const { request, success, failed } = doctorAction.status

const url = 'doctor'

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const { username, password, keep_logged_in } = payload

    const params = []
    const query = {
      username,
      password,
      keep_logged_in,
    }

    yield put(request())
    // const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    const error = false
    const data = {
      ssn          : '1',
      license      : '',
      name         : 'Johns Sims',
      bloodgroup   : 'Ipsum pariatur cupidatat dolore ad excepteur. Id id excepteur veniam enim.',
      phone_number : '679 Christopher Avenue, Islandia',
      dateofbirth  : 'Good',
      is_admin     : false,
    }

    if (!error) {
      yield put(replace({ key: 'ssn', data: data.ssn }))
      yield put(replace({ key: 'license', data: data.license }))
      yield put(replace({ key: 'name', data: data.name }))
      yield put(replace({ key: 'bloodgroup', data: data.bloodgroup }))
      yield put(replace({ key: 'phone_number', data: data.phone_number }))
      yield put(replace({ key: 'dateofbirth', data: data.dateofbirth }))
      yield put(replace({ key: 'is_admin', data: data.is_admin }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

// CODE: Create

function* handleCreate({ payload = {} }) {
  try {
    const { n } = payload

    const body = { n }

    yield put(request())
    const { data, error } = yield call(Api.create, [ url, { body } ])

    if (!error) {
      yield put(addTop({ key: 'doctor', data }))
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
      yield put(modify({ key: 'doctor', id, data }))
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
    const { id } = payload

    const params = [ id ]

    yield put(request())
    const { data, error } = yield call(Api.delete, [ url, { params } ])

    if (!error) {
      yield put(remove({ key: 'doctor', data: { id } }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

function* watchDoctor() {
  yield takeLatest(USER.SEND.FETCH, handleFetch)
  // yield takeLatest(USER.SEND.CREATE, handleCreate)
  // yield takeLatest(USER.SEND.MODIFY, handleModify)
  // yield takeLatest(USER.SEND.REMVOE, handleRemove)
}

export default watchDoctor
