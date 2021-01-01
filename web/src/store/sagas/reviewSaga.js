import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './api/api'

import { REVIEW } from '../constants'
import { reviewAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = reviewAction.save
const { request, success, failed } = reviewAction.status

const url = 'review'

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const { license_number } = payload

    const params = []
    const query = {
      license_number,
    }

    yield put(request())
    const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    if (!error) {
      yield put(replace({ key: 'review_list', data }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

// CODE: Create

function* handleCreate({ payload = {} }) {
  try {
    const { given_by, license_number, ratings, comments } = payload

    const body = { given_by, license_number, ratings, comments }

    yield put(request())
    const { data, error } = yield call(Api.create, [ url, { body } ])

    if (!error) {
      yield put(addTop({ key: 'review', data }))
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
      yield put(modify({ key: 'review', id, data }))
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
      yield put(remove({ key: 'review', data: { id } }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

function* watchDoctor() {
  yield takeLatest(REVIEW.SEND.FETCH, handleFetch)
  yield takeLatest(REVIEW.SEND.CREATE, handleCreate)
  yield takeLatest(REVIEW.SEND.MODIFY, handleModify)
  yield takeLatest(REVIEW.SEND.REMOVE, handleRemove)
}

export default watchDoctor
