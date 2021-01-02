import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api/api'

import { USER } from '../constants'
import { userAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = userAction.save
const { request, success, failed } = userAction.status

const url = 'user'

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const { email, password, keep_logged_in, push } = payload

    const params = []
    const query = {
      email,
      password,
      phone_number   : email,
      keep_logged_in,
    }

    yield put(request())
    const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    if (data[0].is_admin) console.log(push('/admin/user'))
    else if (data[0].license_number) push('/doctor/appointment')
    else if (data[0].ssn) push('/patient/search')

    if (!error) {
      yield put(replace({ key: 'user', data: data[0] }))
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
  // yield takeLatest(USER.SEND.REMOVE, handleRemove)
}

export default watchDoctor
