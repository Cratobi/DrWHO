import { call, put, takeEvery } from 'redux-saga/effects'
import Api from './api/api'

import { DOCTOR } from '../constants'
import { doctorAction } from '../actions'

const { replace, addTop, addBottom, modify, remove } = doctorAction.save
const { request, success, failed } = doctorAction.status

const url = 'doctor'

/* --------------------------------- SAGA middleware --------------------------------- */

// CODE: FETCH

function* handleFetch({ payload = {} }) {
  try {
    const {
      search,
      location,
      rating,
      visint_fee_0,
      visint_fee_100,
      visint_fee_200,
      visint_fee_500,
      visint_fee_1000,
      visint_fee_2000,
      specialised_all,
      specialised_eye,
      specialised_heart,
      specialised_kidney,
      specialised_dermatologist,
    } = payload

    const params = []
    const query = {
      search,
      location,
      rating,
      visint_fee_0,
      visint_fee_100,
      visint_fee_200,
      visint_fee_500,
      visint_fee_1000,
      visint_fee_2000,
      specialised_all,
      specialised_eye,
      specialised_heart,
      specialised_kidney,
      specialised_dermatologist,
    }

    yield put(request())
    // const { data, error } = yield call(Api.fetch, [ url, { params, query } ])

    const error = false
    const data = [
      {
        _id           : '5fd769977560ec68a86d5343',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Johns Sims',
        qualification : 'Ipsum pariatur cupidatat dolore ad excepteur. Id id excepteur veniam enim.',
        location      : '679 Christopher Avenue, Islandia',
        rating        : 'Good',
        visiting      : 500,
      },
      {
        _id           : '5fd76997f47c84fafd876852',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Yvonne Knox',
        qualification :
          'Adipisicing veniam culpa mollit non irure doctoror commodo ipsum. Amet irure deserunt eu velit laborum irure cupidatat proident officia nisi irure laboris enim.',
        location      : '549 Argyle Road, Lewis',
        rating        : 'Good',
        visiting      : 500,
      },
      {
        _id           : '5fd76997f8b8272b5fed1199',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Kim Love',
        qualification :
          'Labore enim est in eu id ex fugiat pariatur est fugiat. Velit anim mollit laboris elit magna. Est reprehenderit deserunt duis fugiat mollit.',
        location      : '687 Claver Place, Urie',
        rating        : 'Good',
        visiting      : 500,
      },
      {
        _id           : '5fd76997a847009309629648',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Betsy Sellers',
        qualification : 'Proident commodo reprehenderit dolore aliquip deserunt.',
        location      : '260 Oak Street, Breinigsville',
        rating        : 'Bad',
        visiting      : 500,
      },
      {
        _id           : '5fd76997f9a14b7e97981bd7',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Alejandra Calderon',
        qualification :
          'Esse cupidatat enim ipsum deserunt officia. Laboris ad elit est qui commodo consectetur qui in ipsum nisi exercitation fugiat magna. Ea eiusmod laborum magna adipisicing ad consequat magna occaecat esse cillum deserunt dolore.',
        location      : '185 Story Court, Gratton',
        rating        : 'Okay',
        visiting      : 500,
      },
    ]
    if (!error) {
      yield put(replace({ key: 'doctor_list', data }))
      yield put(success())
    } else throw error
  } catch (error) {
    yield put(failed(error.toString()))
  }
}

// CODE: Create

function* handleCreate({ payload = {} }) {
  console.log('object')
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

function* watch() {
  yield takeEvery(DOCTOR.SEND.FETCH, handleFetch)
  // yield takeEvery(DOCTOR.SEND.CREATE, handleCreate)
  // yield takeEvery(DOCTOR.SEND.MODIFY, handleModify)
  // yield takeEvery(DOCTOR.SEND.REMVOE, handleRemove)
}

export default watch
