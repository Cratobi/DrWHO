import { combineReducers } from 'redux'

import doctor from './doctor'
import appointment from './appointment'
import user from './user'

const rootReducer = combineReducers({
  appointment,
  doctor,
  user,
})

export default rootReducer
