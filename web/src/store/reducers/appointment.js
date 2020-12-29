import cloneDeep from 'lodash.clonedeep'

import { APPOINTMENT } from '../constants'

const initialState = {
  appointment_list : [],
  status           : {
    success : false,
    request : false,
    failed  : false,
    message : '',
  },
}

const appointment = (state = initialState, { type, payload }) => {
  switch (type) {
    case APPOINTMENT.SAVE.REPLACE: {
      const newState = { ...state }
      newState[payload.key] = payload.data
      return newState
    }
    case APPOINTMENT.SAVE.ADDTOP: {
      console.log(payload.data)
      const newState = { ...state }
      newState[payload.key] = [ payload.data, ...newState[payload.key] ]

      return newState
    }
    case APPOINTMENT.SAVE.ADDBOTTOM: {
      const newState = cloneDeep(state)
      newState[payload.key] = [ ...newState[payload.key], payload.data ]

      return newState
    }
    case APPOINTMENT.SAVE.MODIFY: {
      const newState = cloneDeep(state)

      let toModify
      newState[payload.key].find((e, index) => e.id === payload.id && (toModify = index))

      newState[payload.key][toModify] = payload.data

      return newState
    }
    case APPOINTMENT.SAVE.REMOVE: {
      const newState = cloneDeep(state)

      let toModify
      newState[payload.key] = newState[payload.key].filter(item => item._id !== payload.id)

      return newState
    }
    case APPOINTMENT.SAVE.ACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = false

      return newState
    }
    case APPOINTMENT.SAVE.DEACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = true

      return newState
    }
    case APPOINTMENT.STATUS.SUCCESS: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.success = true

      return newState
    }
    case APPOINTMENT.STATUS.REQUEST: {
      const newState = cloneDeep(state)

      newState.status.success = false
      newState.status.failed = false
      newState.status.request = true

      return newState
    }
    case APPOINTMENT.STATUS.FAILED: {
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

export default appointment
