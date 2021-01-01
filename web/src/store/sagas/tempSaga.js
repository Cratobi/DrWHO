import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api/api'

import { TEMP } from '../constants'
import { tempAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = tempAction.save
const { request, success, failed } = tempAction.status

const url = 'temp'

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const { id, n } = payload

    const params = [ id ]
    const query = { n }

    yield put(request())
    const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    if (!error) {
      yield put(replace({ key: 'temp', data }))
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
      yield put(addTop({ key: 'temp', data }))
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
      yield put(modify({ key: 'temp', id, data }))
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
      yield put(remove({ key: 'temp', data: { id } }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

function* watchTemp() {
  yield takeLatest(TEMP.SEND.FETCH, handleFetch)
  yield takeLatest(TEMP.SEND.CREATE, handleCreate)
  yield takeLatest(TEMP.SEND.MODIFY, handleModify)
  yield takeLatest(TEMP.SEND.REMOVE, handleRemove)
}

export default watchTemp
