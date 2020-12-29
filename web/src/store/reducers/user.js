import cloneDeep from 'lodash.clonedeep'

import { USER } from '../constants'

const initialState = {
  ssn            : '',
  license_number : '',
  bloodgroup     : '',
  phone_number   : '',
  dateofbirth    : '',
  is_admin       : false,

  status         : {
    success : false,
    request : false,
    failed  : false,
    message : '',
  },
}

const doctor = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER.SAVE.REPLACE: {
      const newState = { ...state }
      newState[payload.key] = payload.data
      return newState
    }
    case USER.SAVE.ADDTOP: {
      const newState = { ...state }
      newState[payload.key] = [ payload.data, ...newState[payload.key] ]

      return newState
    }
    case USER.SAVE.ADDBOTTOM: {
      const newState = cloneDeep(state)
      newState[payload.key] = [ ...newState[payload.key], payload.data ]

      return newState
    }
    case USER.SAVE.MODIFY: {
      const newState = cloneDeep(state)

      let toModify
      newState[payload.key].find((e, index) => e.id === payload.id && (toModify = index))

      newState[payload.key][toModify] = payload.data

      return newState
    }
    case USER.SAVE.ACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = false

      return newState
    }
    case USER.SAVE.DEACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = true

      return newState
    }
    case USER.STATUS.SUCCESS: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.success = true

      return newState
    }
    case USER.STATUS.REQUEST: {
      const newState = cloneDeep(state)

      newState.status.success = false
      newState.status.failed = false
      newState.status.request = true

      return newState
    }
    case USER.STATUS.FAILED: {
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
