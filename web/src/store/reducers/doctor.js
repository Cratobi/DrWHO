import cloneDeep from 'lodash.clonedeep'

import { DOCTOR } from '../constants'

const initialState = {
  doctor_list : [
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
  ],
  status      : {
    success : false,
    request : false,
    failed  : false,
    message : '',
  },
}

const doctor = (state = initialState, { type, payload }) => {
  switch (type) {
    case DOCTOR.SAVE.REPLACE: {
      const newState = { ...state }
      newState[payload.key] = payload.data
      return newState
    }
    case DOCTOR.SAVE.ADDTOP: {
      const newState = { ...state }
      newState[payload.key] = [ payload.data, ...newState[payload.key] ]

      return newState
    }
    case DOCTOR.SAVE.ADDBOTTOM: {
      const newState = cloneDeep(state)
      newState[payload.key] = [ ...newState[payload.key], payload.data ]

      return newState
    }
    case DOCTOR.SAVE.MODIFY: {
      const newState = cloneDeep(state)

      let toModify
      newState[payload.key].find((e, index) => e.id === payload.id && (toModify = index))

      newState[payload.key][toModify] = payload.data

      return newState
    }
    case DOCTOR.SAVE.ACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = false

      return newState
    }
    case DOCTOR.SAVE.DEACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = true

      return newState
    }
    case DOCTOR.STATUS.SUCCESS: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.success = true

      return newState
    }
    case DOCTOR.STATUS.REQUEST: {
      const newState = cloneDeep(state)

      newState.status.success = false
      newState.status.failed = false
      newState.status.request = true

      return newState
    }
    case DOCTOR.STATUS.FAILED: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.failed = true
      newState.status.message = payload

      return newState
    }
    default:
      return state
  }
}

export default doctor
